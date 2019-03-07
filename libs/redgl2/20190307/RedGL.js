/* @preserve
author : RedCamel
github : https://github.com/redcamel/RedGL2
email : webseon@gmail.com
Copyright (c) 2018 RedCamel

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
/**DOC:
 {
	 constructorYn : true,
	 state : 'FINAL',
	 title :`gl-matrix-min`,
	 description : `
		 <h1>https://github.com/toji/gl-matrix를 그대로 사용함.</h1>
	 `
 }
 :DOC*/
/**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.4.0
 */

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */
!function (t, n) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = n(); else if ("function" == typeof define && define.amd) define([], n); else {
        var r = n();
        for (var a in r) ("object" == typeof exports ? exports : t)[a] = r[a]
    }
}(this, function () {
    return function (t) {
        function n(a) {
            if (r[a]) return r[a].exports;
            var e = r[a] = {i: a, l: !1, exports: {}};
            return t[a].call(e.exports, e, e.exports, n), e.l = !0, e.exports
        }

        var r = {};
        return n.m = t, n.c = r, n.d = function (t, r, a) {
            n.o(t, r) || Object.defineProperty(t, r, {
                configurable: !1,
                enumerable: !0,
                get: a
            })
        }, n.n = function (t) {
            var r = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return n.d(r, "a", r), r
        }, n.o = function (t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }, n.p = "", n(n.s = 4)
    }([function (t, n, r) {
        "use strict";

        function a(t) {
            n.ARRAY_TYPE = i = t
        }

        function e(t) {
            return t * s
        }

        function u(t, n) {
            return Math.abs(t - n) <= o * Math.max(1, Math.abs(t), Math.abs(n))
        }

        Object.defineProperty(n, "__esModule", {value: !0}), n.setMatrixArrayType = a, n.toRadian = e, n.equals = u;
        var o = n.EPSILON = 1e-6, i = n.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array,
            s = (n.RANDOM = Math.random, Math.PI / 180)
    }, function (t, n, r) {
        "use strict";

        function a() {
            var t = new g.ARRAY_TYPE(9);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
        }

        function e(t, n) {
            return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[4], t[4] = n[5], t[5] = n[6], t[6] = n[8], t[7] = n[9], t[8] = n[10], t
        }

        function u(t) {
            var n = new g.ARRAY_TYPE(9);
            return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[8] = t[8], n
        }

        function o(t, n) {
            return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t
        }

        function i(t, n, r, a, e, u, o, i, s) {
            var c = new g.ARRAY_TYPE(9);
            return c[0] = t, c[1] = n, c[2] = r, c[3] = a, c[4] = e, c[5] = u, c[6] = o, c[7] = i, c[8] = s, c
        }

        function s(t, n, r, a, e, u, o, i, s, c) {
            return t[0] = n, t[1] = r, t[2] = a, t[3] = e, t[4] = u, t[5] = o, t[6] = i, t[7] = s, t[8] = c, t
        }

        function c(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
        }

        function f(t, n) {
            if (t === n) {
                var r = n[1], a = n[2], e = n[5];
                t[1] = n[3], t[2] = n[6], t[3] = r, t[5] = n[7], t[6] = a, t[7] = e
            } else t[0] = n[0], t[1] = n[3], t[2] = n[6], t[3] = n[1], t[4] = n[4], t[5] = n[7], t[6] = n[2], t[7] = n[5], t[8] = n[8];
            return t
        }

        function M(t, n) {
            var r = n[0], a = n[1], e = n[2], u = n[3], o = n[4], i = n[5], s = n[6], c = n[7], f = n[8],
                M = f * o - i * c, h = -f * u + i * s, l = c * u - o * s, v = r * M + a * h + e * l;
            return v ? (v = 1 / v, t[0] = M * v, t[1] = (-f * a + e * c) * v, t[2] = (i * a - e * o) * v, t[3] = h * v, t[4] = (f * r - e * s) * v, t[5] = (-i * r + e * u) * v, t[6] = l * v, t[7] = (-c * r + a * s) * v, t[8] = (o * r - a * u) * v, t) : null
        }

        function h(t, n) {
            var r = n[0], a = n[1], e = n[2], u = n[3], o = n[4], i = n[5], s = n[6], c = n[7], f = n[8];
            return t[0] = o * f - i * c, t[1] = e * c - a * f, t[2] = a * i - e * o, t[3] = i * s - u * f, t[4] = r * f - e * s, t[5] = e * u - r * i, t[6] = u * c - o * s, t[7] = a * s - r * c, t[8] = r * o - a * u, t
        }

        function l(t) {
            var n = t[0], r = t[1], a = t[2], e = t[3], u = t[4], o = t[5], i = t[6], s = t[7], c = t[8];
            return n * (c * u - o * s) + r * (-c * e + o * i) + a * (s * e - u * i)
        }

        function v(t, n, r) {
            var a = n[0], e = n[1], u = n[2], o = n[3], i = n[4], s = n[5], c = n[6], f = n[7], M = n[8], h = r[0],
                l = r[1], v = r[2], d = r[3], b = r[4], m = r[5], p = r[6], P = r[7], E = r[8];
            return t[0] = h * a + l * o + v * c, t[1] = h * e + l * i + v * f, t[2] = h * u + l * s + v * M, t[3] = d * a + b * o + m * c, t[4] = d * e + b * i + m * f, t[5] = d * u + b * s + m * M, t[6] = p * a + P * o + E * c, t[7] = p * e + P * i + E * f, t[8] = p * u + P * s + E * M, t
        }

        function d(t, n, r) {
            var a = n[0], e = n[1], u = n[2], o = n[3], i = n[4], s = n[5], c = n[6], f = n[7], M = n[8], h = r[0],
                l = r[1];
            return t[0] = a, t[1] = e, t[2] = u, t[3] = o, t[4] = i, t[5] = s, t[6] = h * a + l * o + c, t[7] = h * e + l * i + f, t[8] = h * u + l * s + M, t
        }

        function b(t, n, r) {
            var a = n[0], e = n[1], u = n[2], o = n[3], i = n[4], s = n[5], c = n[6], f = n[7], M = n[8],
                h = Math.sin(r), l = Math.cos(r);
            return t[0] = l * a + h * o, t[1] = l * e + h * i, t[2] = l * u + h * s, t[3] = l * o - h * a, t[4] = l * i - h * e, t[5] = l * s - h * u, t[6] = c, t[7] = f, t[8] = M, t
        }

        function m(t, n, r) {
            var a = r[0], e = r[1];
            return t[0] = a * n[0], t[1] = a * n[1], t[2] = a * n[2], t[3] = e * n[3], t[4] = e * n[4], t[5] = e * n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t
        }

        function p(t, n) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = n[0], t[7] = n[1], t[8] = 1, t
        }

        function P(t, n) {
            var r = Math.sin(n), a = Math.cos(n);
            return t[0] = a, t[1] = r, t[2] = 0, t[3] = -r, t[4] = a, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
        }

        function E(t, n) {
            return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = n[1], t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
        }

        function O(t, n) {
            return t[0] = n[0], t[1] = n[1], t[2] = 0, t[3] = n[2], t[4] = n[3], t[5] = 0, t[6] = n[4], t[7] = n[5], t[8] = 1, t
        }

        function x(t, n) {
            var r = n[0], a = n[1], e = n[2], u = n[3], o = r + r, i = a + a, s = e + e, c = r * o, f = a * o,
                M = a * i, h = e * o, l = e * i, v = e * s, d = u * o, b = u * i, m = u * s;
            return t[0] = 1 - M - v, t[3] = f - m, t[6] = h + b, t[1] = f + m, t[4] = 1 - c - v, t[7] = l - d, t[2] = h - b, t[5] = l + d, t[8] = 1 - c - M, t
        }

        function A(t, n) {
            var r = n[0], a = n[1], e = n[2], u = n[3], o = n[4], i = n[5], s = n[6], c = n[7], f = n[8], M = n[9],
                h = n[10], l = n[11], v = n[12], d = n[13], b = n[14], m = n[15], p = r * i - a * o, P = r * s - e * o,
                E = r * c - u * o, O = a * s - e * i, x = a * c - u * i, A = e * c - u * s, q = f * d - M * v,
                y = f * b - h * v, w = f * m - l * v, R = M * b - h * d, L = M * m - l * d, S = h * m - l * b,
                _ = p * S - P * L + E * R + O * w - x * y + A * q;
            return _ ? (_ = 1 / _, t[0] = (i * S - s * L + c * R) * _, t[1] = (s * w - o * S - c * y) * _, t[2] = (o * L - i * w + c * q) * _, t[3] = (e * L - a * S - u * R) * _, t[4] = (r * S - e * w + u * y) * _, t[5] = (a * w - r * L - u * q) * _, t[6] = (d * A - b * x + m * O) * _, t[7] = (b * E - v * A - m * P) * _, t[8] = (v * x - d * E + m * p) * _, t) : null
        }

        function q(t, n, r) {
            return t[0] = 2 / n, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = -2 / r, t[5] = 0, t[6] = -1, t[7] = 1, t[8] = 1, t
        }

        function y(t) {
            return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")"
        }

        function w(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2))
        }

        function R(t, n, r) {
            return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t[3] = n[3] + r[3], t[4] = n[4] + r[4], t[5] = n[5] + r[5], t[6] = n[6] + r[6], t[7] = n[7] + r[7], t[8] = n[8] + r[8], t
        }

        function L(t, n, r) {
            return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t[3] = n[3] - r[3], t[4] = n[4] - r[4], t[5] = n[5] - r[5], t[6] = n[6] - r[6], t[7] = n[7] - r[7], t[8] = n[8] - r[8], t
        }

        function S(t, n, r) {
            return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = n[7] * r, t[8] = n[8] * r, t
        }

        function _(t, n, r, a) {
            return t[0] = n[0] + r[0] * a, t[1] = n[1] + r[1] * a, t[2] = n[2] + r[2] * a, t[3] = n[3] + r[3] * a, t[4] = n[4] + r[4] * a, t[5] = n[5] + r[5] * a, t[6] = n[6] + r[6] * a, t[7] = n[7] + r[7] * a, t[8] = n[8] + r[8] * a, t
        }

        function I(t, n) {
            return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7] && t[8] === n[8]
        }

        function N(t, n) {
            var r = t[0], a = t[1], e = t[2], u = t[3], o = t[4], i = t[5], s = t[6], c = t[7], f = t[8], M = n[0],
                h = n[1], l = n[2], v = n[3], d = n[4], b = n[5], m = n[6], p = n[7], P = n[8];
            return Math.abs(r - M) <= g.EPSILON * Math.max(1, Math.abs(r), Math.abs(M)) && Math.abs(a - h) <= g.EPSILON * Math.max(1, Math.abs(a), Math.abs(h)) && Math.abs(e - l) <= g.EPSILON * Math.max(1, Math.abs(e), Math.abs(l)) && Math.abs(u - v) <= g.EPSILON * Math.max(1, Math.abs(u), Math.abs(v)) && Math.abs(o - d) <= g.EPSILON * Math.max(1, Math.abs(o), Math.abs(d)) && Math.abs(i - b) <= g.EPSILON * Math.max(1, Math.abs(i), Math.abs(b)) && Math.abs(s - m) <= g.EPSILON * Math.max(1, Math.abs(s), Math.abs(m)) && Math.abs(c - p) <= g.EPSILON * Math.max(1, Math.abs(c), Math.abs(p)) && Math.abs(f - P) <= g.EPSILON * Math.max(1, Math.abs(f), Math.abs(P))
        }

        Object.defineProperty(n, "__esModule", {value: !0}), n.sub = n.mul = void 0, n.create = a, n.fromMat4 = e, n.clone = u, n.copy = o, n.fromValues = i, n.set = s, n.identity = c, n.transpose = f, n.invert = M, n.adjoint = h, n.determinant = l, n.multiply = v, n.translate = d, n.rotate = b, n.scale = m, n.fromTranslation = p, n.fromRotation = P, n.fromScaling = E, n.fromMat2d = O, n.fromQuat = x, n.normalFromMat4 = A, n.projection = q, n.str = y, n.frob = w, n.add = R, n.subtract = L, n.multiplyScalar = S, n.multiplyScalarAndAdd = _, n.exactEquals = I, n.equals = N;
        var Y = r(0), g = function (t) {
            if (t && t.__esModule) return t;
            var n = {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n.default = t, n
        }(Y);
        n.mul = v, n.sub = L
    }, function (t, n, r) {
        "use strict";

        function a() {
            var t = new Z.ARRAY_TYPE(3);
            return t[0] = 0, t[1] = 0, t[2] = 0, t
        }

        function e(t) {
            var n = new Z.ARRAY_TYPE(3);
            return n[0] = t[0], n[1] = t[1], n[2] = t[2], n
        }

        function u(t) {
            var n = t[0], r = t[1], a = t[2];
            return Math.sqrt(n * n + r * r + a * a)
        }

        function o(t, n, r) {
            var a = new Z.ARRAY_TYPE(3);
            return a[0] = t, a[1] = n, a[2] = r, a
        }

        function i(t, n) {
            return t[0] = n[0], t[1] = n[1], t[2] = n[2], t
        }

        function s(t, n, r, a) {
            return t[0] = n, t[1] = r, t[2] = a, t
        }

        function c(t, n, r) {
            return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t
        }

        function f(t, n, r) {
            return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t
        }

        function M(t, n, r) {
            return t[0] = n[0] * r[0], t[1] = n[1] * r[1], t[2] = n[2] * r[2], t
        }

        function h(t, n, r) {
            return t[0] = n[0] / r[0], t[1] = n[1] / r[1], t[2] = n[2] / r[2], t
        }

        function l(t, n) {
            return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t[2] = Math.ceil(n[2]), t
        }

        function v(t, n) {
            return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t[2] = Math.floor(n[2]), t
        }

        function d(t, n, r) {
            return t[0] = Math.min(n[0], r[0]), t[1] = Math.min(n[1], r[1]), t[2] = Math.min(n[2], r[2]), t
        }

        function b(t, n, r) {
            return t[0] = Math.max(n[0], r[0]), t[1] = Math.max(n[1], r[1]), t[2] = Math.max(n[2], r[2]), t
        }

        function m(t, n) {
            return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t[2] = Math.round(n[2]), t
        }

        function p(t, n, r) {
            return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t
        }

        function P(t, n, r, a) {
            return t[0] = n[0] + r[0] * a, t[1] = n[1] + r[1] * a, t[2] = n[2] + r[2] * a, t
        }

        function E(t, n) {
            var r = n[0] - t[0], a = n[1] - t[1], e = n[2] - t[2];
            return Math.sqrt(r * r + a * a + e * e)
        }

        function O(t, n) {
            var r = n[0] - t[0], a = n[1] - t[1], e = n[2] - t[2];
            return r * r + a * a + e * e
        }

        function x(t) {
            var n = t[0], r = t[1], a = t[2];
            return n * n + r * r + a * a
        }

        function A(t, n) {
            return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t
        }

        function q(t, n) {
            return t[0] = 1 / n[0], t[1] = 1 / n[1], t[2] = 1 / n[2], t
        }

        function y(t, n) {
            var r = n[0], a = n[1], e = n[2], u = r * r + a * a + e * e;
            return u > 0 && (u = 1 / Math.sqrt(u), t[0] = n[0] * u, t[1] = n[1] * u, t[2] = n[2] * u), t
        }

        function w(t, n) {
            return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
        }

        function R(t, n, r) {
            var a = n[0], e = n[1], u = n[2], o = r[0], i = r[1], s = r[2];
            return t[0] = e * s - u * i, t[1] = u * o - a * s, t[2] = a * i - e * o, t
        }

        function L(t, n, r, a) {
            var e = n[0], u = n[1], o = n[2];
            return t[0] = e + a * (r[0] - e), t[1] = u + a * (r[1] - u), t[2] = o + a * (r[2] - o), t
        }

        function S(t, n, r, a, e, u) {
            var o = u * u, i = o * (2 * u - 3) + 1, s = o * (u - 2) + u, c = o * (u - 1), f = o * (3 - 2 * u);
            return t[0] = n[0] * i + r[0] * s + a[0] * c + e[0] * f, t[1] = n[1] * i + r[1] * s + a[1] * c + e[1] * f, t[2] = n[2] * i + r[2] * s + a[2] * c + e[2] * f, t
        }

        function _(t, n, r, a, e, u) {
            var o = 1 - u, i = o * o, s = u * u, c = i * o, f = 3 * u * i, M = 3 * s * o, h = s * u;
            return t[0] = n[0] * c + r[0] * f + a[0] * M + e[0] * h, t[1] = n[1] * c + r[1] * f + a[1] * M + e[1] * h, t[2] = n[2] * c + r[2] * f + a[2] * M + e[2] * h, t
        }

        function I(t, n) {
            n = n || 1;
            var r = 2 * Z.RANDOM() * Math.PI, a = 2 * Z.RANDOM() - 1, e = Math.sqrt(1 - a * a) * n;
            return t[0] = Math.cos(r) * e, t[1] = Math.sin(r) * e, t[2] = a * n, t
        }

        function N(t, n, r) {
            var a = n[0], e = n[1], u = n[2], o = r[3] * a + r[7] * e + r[11] * u + r[15];
            return o = o || 1, t[0] = (r[0] * a + r[4] * e + r[8] * u + r[12]) / o, t[1] = (r[1] * a + r[5] * e + r[9] * u + r[13]) / o, t[2] = (r[2] * a + r[6] * e + r[10] * u + r[14]) / o, t
        }

        function Y(t, n, r) {
            var a = n[0], e = n[1], u = n[2];
            return t[0] = a * r[0] + e * r[3] + u * r[6], t[1] = a * r[1] + e * r[4] + u * r[7], t[2] = a * r[2] + e * r[5] + u * r[8], t
        }

        function g(t, n, r) {
            var a = n[0], e = n[1], u = n[2], o = r[0], i = r[1], s = r[2], c = r[3], f = c * a + i * u - s * e,
                M = c * e + s * a - o * u, h = c * u + o * e - i * a, l = -o * a - i * e - s * u;
            return t[0] = f * c + l * -o + M * -s - h * -i, t[1] = M * c + l * -i + h * -o - f * -s, t[2] = h * c + l * -s + f * -i - M * -o, t
        }

        function T(t, n, r, a) {
            var e = [], u = [];
            return e[0] = n[0] - r[0], e[1] = n[1] - r[1], e[2] = n[2] - r[2], u[0] = e[0], u[1] = e[1] * Math.cos(a) - e[2] * Math.sin(a), u[2] = e[1] * Math.sin(a) + e[2] * Math.cos(a), t[0] = u[0] + r[0], t[1] = u[1] + r[1], t[2] = u[2] + r[2], t
        }

        function j(t, n, r, a) {
            var e = [], u = [];
            return e[0] = n[0] - r[0], e[1] = n[1] - r[1], e[2] = n[2] - r[2], u[0] = e[2] * Math.sin(a) + e[0] * Math.cos(a), u[1] = e[1], u[2] = e[2] * Math.cos(a) - e[0] * Math.sin(a), t[0] = u[0] + r[0], t[1] = u[1] + r[1], t[2] = u[2] + r[2], t
        }

        function D(t, n, r, a) {
            var e = [], u = [];
            return e[0] = n[0] - r[0], e[1] = n[1] - r[1], e[2] = n[2] - r[2], u[0] = e[0] * Math.cos(a) - e[1] * Math.sin(a), u[1] = e[0] * Math.sin(a) + e[1] * Math.cos(a), u[2] = e[2], t[0] = u[0] + r[0], t[1] = u[1] + r[1], t[2] = u[2] + r[2], t
        }

        function V(t, n) {
            var r = o(t[0], t[1], t[2]), a = o(n[0], n[1], n[2]);
            y(r, r), y(a, a);
            var e = w(r, a);
            return e > 1 ? 0 : e < -1 ? Math.PI : Math.acos(e)
        }

        function z(t) {
            return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
        }

        function F(t, n) {
            return t[0] === n[0] && t[1] === n[1] && t[2] === n[2]
        }

        function Q(t, n) {
            var r = t[0], a = t[1], e = t[2], u = n[0], o = n[1], i = n[2];
            return Math.abs(r - u) <= Z.EPSILON * Math.max(1, Math.abs(r), Math.abs(u)) && Math.abs(a - o) <= Z.EPSILON * Math.max(1, Math.abs(a), Math.abs(o)) && Math.abs(e - i) <= Z.EPSILON * Math.max(1, Math.abs(e), Math.abs(i))
        }

        Object.defineProperty(n, "__esModule", {value: !0}), n.forEach = n.sqrLen = n.len = n.sqrDist = n.dist = n.div = n.mul = n.sub = void 0, n.create = a, n.clone = e, n.length = u, n.fromValues = o, n.copy = i, n.set = s, n.add = c, n.subtract = f, n.multiply = M, n.divide = h, n.ceil = l, n.floor = v, n.min = d, n.max = b, n.round = m, n.scale = p, n.scaleAndAdd = P, n.distance = E, n.squaredDistance = O, n.squaredLength = x, n.negate = A, n.inverse = q, n.normalize = y, n.dot = w, n.cross = R, n.lerp = L, n.hermite = S, n.bezier = _, n.random = I, n.transformMat4 = N, n.transformMat3 = Y, n.transformQuat = g, n.rotateX = T, n.rotateY = j, n.rotateZ = D, n.angle = V, n.str = z, n.exactEquals = F, n.equals = Q;
        var X = r(0), Z = function (t) {
            if (t && t.__esModule) return t;
            var n = {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n.default = t, n
        }(X);
        n.sub = f, n.mul = M, n.div = h, n.dist = E, n.sqrDist = O, n.len = u, n.sqrLen = x, n.forEach = function () {
            var t = a();
            return function (n, r, a, e, u, o) {
                var i = void 0, s = void 0;
                for (r || (r = 3), a || (a = 0), s = e ? Math.min(e * r + a, n.length) : n.length, i = a; i < s; i += r) t[0] = n[i], t[1] = n[i + 1], t[2] = n[i + 2], u(t, t, o), n[i] = t[0], n[i + 1] = t[1], n[i + 2] = t[2];
                return n
            }
        }()
    }, function (t, n, r) {
        "use strict";

        function a() {
            var t = new T.ARRAY_TYPE(4);
            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t
        }

        function e(t) {
            var n = new T.ARRAY_TYPE(4);
            return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n
        }

        function u(t, n, r, a) {
            var e = new T.ARRAY_TYPE(4);
            return e[0] = t, e[1] = n, e[2] = r, e[3] = a, e
        }

        function o(t, n) {
            return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t
        }

        function i(t, n, r, a, e) {
            return t[0] = n, t[1] = r, t[2] = a, t[3] = e, t
        }

        function s(t, n, r) {
            return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t[3] = n[3] + r[3], t
        }

        function c(t, n, r) {
            return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t[3] = n[3] - r[3], t
        }

        function f(t, n, r) {
            return t[0] = n[0] * r[0], t[1] = n[1] * r[1], t[2] = n[2] * r[2], t[3] = n[3] * r[3], t
        }

        function M(t, n, r) {
            return t[0] = n[0] / r[0], t[1] = n[1] / r[1], t[2] = n[2] / r[2], t[3] = n[3] / r[3], t
        }

        function h(t, n) {
            return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t[2] = Math.ceil(n[2]), t[3] = Math.ceil(n[3]), t
        }

        function l(t, n) {
            return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t[2] = Math.floor(n[2]), t[3] = Math.floor(n[3]), t
        }

        function v(t, n, r) {
            return t[0] = Math.min(n[0], r[0]), t[1] = Math.min(n[1], r[1]), t[2] = Math.min(n[2], r[2]), t[3] = Math.min(n[3], r[3]), t
        }

        function d(t, n, r) {
            return t[0] = Math.max(n[0], r[0]), t[1] = Math.max(n[1], r[1]), t[2] = Math.max(n[2], r[2]), t[3] = Math.max(n[3], r[3]), t
        }

        function b(t, n) {
            return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t[2] = Math.round(n[2]), t[3] = Math.round(n[3]), t
        }

        function m(t, n, r) {
            return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t
        }

        function p(t, n, r, a) {
            return t[0] = n[0] + r[0] * a, t[1] = n[1] + r[1] * a, t[2] = n[2] + r[2] * a, t[3] = n[3] + r[3] * a, t
        }

        function P(t, n) {
            var r = n[0] - t[0], a = n[1] - t[1], e = n[2] - t[2], u = n[3] - t[3];
            return Math.sqrt(r * r + a * a + e * e + u * u)
        }

        function E(t, n) {
            var r = n[0] - t[0], a = n[1] - t[1], e = n[2] - t[2], u = n[3] - t[3];
            return r * r + a * a + e * e + u * u
        }

        function O(t) {
            var n = t[0], r = t[1], a = t[2], e = t[3];
            return Math.sqrt(n * n + r * r + a * a + e * e)
        }

        function x(t) {
            var n = t[0], r = t[1], a = t[2], e = t[3];
            return n * n + r * r + a * a + e * e
        }

        function A(t, n) {
            return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = -n[3], t
        }

        function q(t, n) {
            return t[0] = 1 / n[0], t[1] = 1 / n[1], t[2] = 1 / n[2], t[3] = 1 / n[3], t
        }

        function y(t, n) {
            var r = n[0], a = n[1], e = n[2], u = n[3], o = r * r + a * a + e * e + u * u;
            return o > 0 && (o = 1 / Math.sqrt(o), t[0] = r * o, t[1] = a * o, t[2] = e * o, t[3] = u * o), t
        }

        function w(t, n) {
            return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3]
        }

        function R(t, n, r, a) {
            var e = n[0], u = n[1], o = n[2], i = n[3];
            return t[0] = e + a * (r[0] - e), t[1] = u + a * (r[1] - u), t[2] = o + a * (r[2] - o), t[3] = i + a * (r[3] - i), t
        }

        function L(t, n) {
            return n = n || 1, t[0] = T.RANDOM(), t[1] = T.RANDOM(), t[2] = T.RANDOM(), t[3] = T.RANDOM(), y(t, t), m(t, t, n), t
        }

        function S(t, n, r) {
            var a = n[0], e = n[1], u = n[2], o = n[3];
            return t[0] = r[0] * a + r[4] * e + r[8] * u + r[12] * o, t[1] = r[1] * a + r[5] * e + r[9] * u + r[13] * o, t[2] = r[2] * a + r[6] * e + r[10] * u + r[14] * o, t[3] = r[3] * a + r[7] * e + r[11] * u + r[15] * o, t
        }

        function _(t, n, r) {
            var a = n[0], e = n[1], u = n[2], o = r[0], i = r[1], s = r[2], c = r[3], f = c * a + i * u - s * e,
                M = c * e + s * a - o * u, h = c * u + o * e - i * a, l = -o * a - i * e - s * u;
            return t[0] = f * c + l * -o + M * -s - h * -i, t[1] = M * c + l * -i + h * -o - f * -s, t[2] = h * c + l * -s + f * -i - M * -o, t[3] = n[3], t
        }

        function I(t) {
            return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
        }

        function N(t, n) {
            return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3]
        }

        function Y(t, n) {
            var r = t[0], a = t[1], e = t[2], u = t[3], o = n[0], i = n[1], s = n[2], c = n[3];
            return Math.abs(r - o) <= T.EPSILON * Math.max(1, Math.abs(r), Math.abs(o)) && Math.abs(a - i) <= T.EPSILON * Math.max(1, Math.abs(a), Math.abs(i)) && Math.abs(e - s) <= T.EPSILON * Math.max(1, Math.abs(e), Math.abs(s)) && Math.abs(u - c) <= T.EPSILON * Math.max(1, Math.abs(u), Math.abs(c))
        }

        Object.defineProperty(n, "__esModule", {value: !0}), n.forEach = n.sqrLen = n.len = n.sqrDist = n.dist = n.div = n.mul = n.sub = void 0, n.create = a, n.clone = e, n.fromValues = u, n.copy = o, n.set = i, n.add = s, n.subtract = c, n.multiply = f, n.divide = M, n.ceil = h, n.floor = l, n.min = v, n.max = d, n.round = b, n.scale = m, n.scaleAndAdd = p, n.distance = P, n.squaredDistance = E, n.length = O, n.squaredLength = x, n.negate = A, n.inverse = q, n.normalize = y, n.dot = w, n.lerp = R, n.random = L, n.transformMat4 = S, n.transformQuat = _, n.str = I, n.exactEquals = N, n.equals = Y;
        var g = r(0), T = function (t) {
            if (t && t.__esModule) return t;
            var n = {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n.default = t, n
        }(g);
        n.sub = c, n.mul = f, n.div = M, n.dist = P, n.sqrDist = E, n.len = O, n.sqrLen = x, n.forEach = function () {
            var t = a();
            return function (n, r, a, e, u, o) {
                var i = void 0, s = void 0;
                for (r || (r = 4), a || (a = 0), s = e ? Math.min(e * r + a, n.length) : n.length, i = a; i < s; i += r) t[0] = n[i], t[1] = n[i + 1], t[2] = n[i + 2], t[3] = n[i + 3], u(t, t, o), n[i] = t[0], n[i + 1] = t[1], n[i + 2] = t[2], n[i + 3] = t[3];
                return n
            }
        }()
    }, function (t, n, r) {
        "use strict";

        function a(t) {
            if (t && t.__esModule) return t;
            var n = {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n.default = t, n
        }

        Object.defineProperty(n, "__esModule", {value: !0}), n.vec4 = n.vec3 = n.vec2 = n.quat = n.mat4 = n.mat3 = n.mat2d = n.mat2 = n.glMatrix = void 0;
        var e = r(0), u = a(e), o = r(5), i = a(o), s = r(6), c = a(s), f = r(1), M = a(f), h = r(7), l = a(h),
            v = r(8), d = a(v), b = r(9), m = a(b), p = r(2), P = a(p), E = r(3), O = a(E);
        n.glMatrix = u, n.mat2 = i, n.mat2d = c, n.mat3 = M, n.mat4 = l, n.quat = d, n.vec2 = m, n.vec3 = P, n.vec4 = O
    }, function (t, n, r) {
        "use strict";

        function a() {
            var t = new L.ARRAY_TYPE(4);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t
        }

        function e(t) {
            var n = new L.ARRAY_TYPE(4);
            return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n
        }

        function u(t, n) {
            return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t
        }

        function o(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t
        }

        function i(t, n, r, a) {
            var e = new L.ARRAY_TYPE(4);
            return e[0] = t, e[1] = n, e[2] = r, e[3] = a, e
        }

        function s(t, n, r, a, e) {
            return t[0] = n, t[1] = r, t[2] = a, t[3] = e, t
        }

        function c(t, n) {
            if (t === n) {
                var r = n[1];
                t[1] = n[2], t[2] = r
            } else t[0] = n[0], t[1] = n[2], t[2] = n[1], t[3] = n[3];
            return t
        }

        function f(t, n) {
            var r = n[0], a = n[1], e = n[2], u = n[3], o = r * u - e * a;
            return o ? (o = 1 / o, t[0] = u * o, t[1] = -a * o, t[2] = -e * o, t[3] = r * o, t) : null
        }

        function M(t, n) {
            var r = n[0];
            return t[0] = n[3], t[1] = -n[1], t[2] = -n[2], t[3] = r, t
        }

        function h(t) {
            return t[0] * t[3] - t[2] * t[1]
        }

        function l(t, n, r) {
            var a = n[0], e = n[1], u = n[2], o = n[3], i = r[0], s = r[1], c = r[2], f = r[3];
            return t[0] = a * i + u * s, t[1] = e * i + o * s, t[2] = a * c + u * f, t[3] = e * c + o * f, t
        }

        function v(t, n, r) {
            var a = n[0], e = n[1], u = n[2], o = n[3], i = Math.sin(r), s = Math.cos(r);
            return t[0] = a * s + u * i, t[1] = e * s + o * i, t[2] = a * -i + u * s, t[3] = e * -i + o * s, t
        }

        function d(t, n, r) {
            var a = n[0], e = n[1], u = n[2], o = n[3], i = r[0], s = r[1];
            return t[0] = a * i, t[1] = e * i, t[2] = u * s, t[3] = o * s, t
        }

        function b(t, n) {
            var r = Math.sin(n), a = Math.cos(n);
            return t[0] = a, t[1] = r, t[2] = -r, t[3] = a, t
        }

        function m(t, n) {
            return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = n[1], t
        }

        function p(t) {
            return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
        }

        function P(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2))
        }

        function E(t, n, r, a) {
            return t[2] = a[2] / a[0], r[0] = a[0], r[1] = a[1], r[3] = a[3] - t[2] * r[1], [t, n, r]
        }

        function O(t, n, r) {
            return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t[3] = n[3] + r[3], t
        }

        function x(t, n, r) {
            return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t[3] = n[3] - r[3], t
        }

        function A(t, n) {
            return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3]
        }

        function q(t, n) {
            var r = t[0], a = t[1], e = t[2], u = t[3], o = n[0], i = n[1], s = n[2], c = n[3];
            return Math.abs(r - o) <= L.EPSILON * Math.max(1, Math.abs(r), Math.abs(o)) && Math.abs(a - i) <= L.EPSILON * Math.max(1, Math.abs(a), Math.abs(i)) && Math.abs(e - s) <= L.EPSILON * Math.max(1, Math.abs(e), Math.abs(s)) && Math.abs(u - c) <= L.EPSILON * Math.max(1, Math.abs(u), Math.abs(c))
        }

        function y(t, n, r) {
            return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t
        }

        function w(t, n, r, a) {
            return t[0] = n[0] + r[0] * a, t[1] = n[1] + r[1] * a, t[2] = n[2] + r[2] * a, t[3] = n[3] + r[3] * a, t
        }

        Object.defineProperty(n, "__esModule", {value: !0}), n.sub = n.mul = void 0, n.create = a, n.clone = e, n.copy = u, n.identity = o, n.fromValues = i, n.set = s, n.transpose = c, n.invert = f, n.adjoint = M, n.determinant = h, n.multiply = l, n.rotate = v, n.scale = d, n.fromRotation = b, n.fromScaling = m, n.str = p, n.frob = P, n.LDU = E, n.add = O, n.subtract = x, n.exactEquals = A, n.equals = q, n.multiplyScalar = y, n.multiplyScalarAndAdd = w;
        var R = r(0), L = function (t) {
            if (t && t.__esModule) return t;
            var n = {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n.default = t, n
        }(R);
        n.mul = l, n.sub = x
    }, function (t, n, r) {
        "use strict";

        function a() {
            var t = new R.ARRAY_TYPE(6);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
        }

        function e(t) {
            var n = new R.ARRAY_TYPE(6);
            return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n
        }

        function u(t, n) {
            return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t
        }

        function o(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
        }

        function i(t, n, r, a, e, u) {
            var o = new R.ARRAY_TYPE(6);
            return o[0] = t, o[1] = n, o[2] = r, o[3] = a, o[4] = e, o[5] = u, o
        }

        function s(t, n, r, a, e, u, o) {
            return t[0] = n, t[1] = r, t[2] = a, t[3] = e, t[4] = u, t[5] = o, t
        }

        function c(t, n) {
            var r = n[0], a = n[1], e = n[2], u = n[3], o = n[4], i = n[5], s = r * u - a * e;
            return s ? (s = 1 / s, t[0] = u * s, t[1] = -a * s, t[2] = -e * s, t[3] = r * s, t[4] = (e * i - u * o) * s, t[5] = (a * o - r * i) * s, t) : null
        }

        function f(t) {
            return t[0] * t[3] - t[1] * t[2]
        }

        function M(t, n, r) {
            var a = n[0], e = n[1], u = n[2], o = n[3], i = n[4], s = n[5], c = r[0], f = r[1], M = r[2], h = r[3],
                l = r[4], v = r[5];
            return t[0] = a * c + u * f, t[1] = e * c + o * f, t[2] = a * M + u * h, t[3] = e * M + o * h, t[4] = a * l + u * v + i, t[5] = e * l + o * v + s, t
        }

        function h(t, n, r) {
            var a = n[0], e = n[1], u = n[2], o = n[3], i = n[4], s = n[5], c = Math.sin(r), f = Math.cos(r);
            return t[0] = a * f + u * c, t[1] = e * f + o * c, t[2] = a * -c + u * f, t[3] = e * -c + o * f, t[4] = i, t[5] = s, t
        }

        function l(t, n, r) {
            var a = n[0], e = n[1], u = n[2], o = n[3], i = n[4], s = n[5], c = r[0], f = r[1];
            return t[0] = a * c, t[1] = e * c, t[2] = u * f, t[3] = o * f, t[4] = i, t[5] = s, t
        }

        function v(t, n, r) {
            var a = n[0], e = n[1], u = n[2], o = n[3], i = n[4], s = n[5], c = r[0], f = r[1];
            return t[0] = a, t[1] = e, t[2] = u, t[3] = o, t[4] = a * c + u * f + i, t[5] = e * c + o * f + s, t
        }

        function d(t, n) {
            var r = Math.sin(n), a = Math.cos(n);
            return t[0] = a, t[1] = r, t[2] = -r, t[3] = a, t[4] = 0, t[5] = 0, t
        }

        function b(t, n) {
            return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = n[1], t[4] = 0, t[5] = 0, t
        }

        function m(t, n) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = n[0], t[5] = n[1], t
        }

        function p(t) {
            return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")"
        }

        function P(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + 1)
        }

        function E(t, n, r) {
            return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t[3] = n[3] + r[3], t[4] = n[4] + r[4], t[5] = n[5] + r[5], t
        }

        function O(t, n, r) {
            return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t[3] = n[3] - r[3], t[4] = n[4] - r[4], t[5] = n[5] - r[5], t
        }

        function x(t, n, r) {
            return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t[4] = n[4] * r, t[5] = n[5] * r, t
        }

        function A(t, n, r, a) {
            return t[0] = n[0] + r[0] * a, t[1] = n[1] + r[1] * a, t[2] = n[2] + r[2] * a, t[3] = n[3] + r[3] * a, t[4] = n[4] + r[4] * a, t[5] = n[5] + r[5] * a, t
        }

        function q(t, n) {
            return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5]
        }

        function y(t, n) {
            var r = t[0], a = t[1], e = t[2], u = t[3], o = t[4], i = t[5], s = n[0], c = n[1], f = n[2], M = n[3],
                h = n[4], l = n[5];
            return Math.abs(r - s) <= R.EPSILON * Math.max(1, Math.abs(r), Math.abs(s)) && Math.abs(a - c) <= R.EPSILON * Math.max(1, Math.abs(a), Math.abs(c)) && Math.abs(e - f) <= R.EPSILON * Math.max(1, Math.abs(e), Math.abs(f)) && Math.abs(u - M) <= R.EPSILON * Math.max(1, Math.abs(u), Math.abs(M)) && Math.abs(o - h) <= R.EPSILON * Math.max(1, Math.abs(o), Math.abs(h)) && Math.abs(i - l) <= R.EPSILON * Math.max(1, Math.abs(i), Math.abs(l))
        }

        Object.defineProperty(n, "__esModule", {value: !0}), n.sub = n.mul = void 0, n.create = a, n.clone = e, n.copy = u, n.identity = o, n.fromValues = i, n.set = s, n.invert = c, n.determinant = f, n.multiply = M, n.rotate = h, n.scale = l, n.translate = v, n.fromRotation = d, n.fromScaling = b, n.fromTranslation = m, n.str = p, n.frob = P, n.add = E, n.subtract = O, n.multiplyScalar = x, n.multiplyScalarAndAdd = A, n.exactEquals = q, n.equals = y;
        var w = r(0), R = function (t) {
            if (t && t.__esModule) return t;
            var n = {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n.default = t, n
        }(w);
        n.mul = M, n.sub = O
    }, function (t, n, r) {
        "use strict";

        function a() {
            var t = new C.ARRAY_TYPE(16);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
        }

        function e(t) {
            var n = new C.ARRAY_TYPE(16);
            return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[8] = t[8], n[9] = t[9], n[10] = t[10], n[11] = t[11], n[12] = t[12], n[13] = t[13], n[14] = t[14], n[15] = t[15], n
        }

        function u(t, n) {
            return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], t
        }

        function o(t, n, r, a, e, u, o, i, s, c, f, M, h, l, v, d) {
            var b = new C.ARRAY_TYPE(16);
            return b[0] = t, b[1] = n, b[2] = r, b[3] = a, b[4] = e, b[5] = u, b[6] = o, b[7] = i, b[8] = s, b[9] = c, b[10] = f, b[11] = M, b[12] = h, b[13] = l, b[14] = v, b[15] = d, b
        }

        function i(t, n, r, a, e, u, o, i, s, c, f, M, h, l, v, d, b) {
            return t[0] = n, t[1] = r, t[2] = a, t[3] = e, t[4] = u, t[5] = o, t[6] = i, t[7] = s, t[8] = c, t[9] = f, t[10] = M, t[11] = h, t[12] = l, t[13] = v, t[14] = d, t[15] = b, t
        }

        function s(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
        }

        function c(t, n) {
            if (t === n) {
                var r = n[1], a = n[2], e = n[3], u = n[6], o = n[7], i = n[11];
                t[1] = n[4], t[2] = n[8], t[3] = n[12], t[4] = r, t[6] = n[9], t[7] = n[13], t[8] = a, t[9] = u, t[11] = n[14], t[12] = e, t[13] = o, t[14] = i
            } else t[0] = n[0], t[1] = n[4], t[2] = n[8], t[3] = n[12], t[4] = n[1], t[5] = n[5], t[6] = n[9], t[7] = n[13], t[8] = n[2], t[9] = n[6], t[10] = n[10], t[11] = n[14], t[12] = n[3], t[13] = n[7], t[14] = n[11], t[15] = n[15];
            return t
        }

        function f(t, n) {
            var r = n[0], a = n[1], e = n[2], u = n[3], o = n[4], i = n[5], s = n[6], c = n[7], f = n[8], M = n[9],
                h = n[10], l = n[11], v = n[12], d = n[13], b = n[14], m = n[15], p = r * i - a * o, P = r * s - e * o,
                E = r * c - u * o, O = a * s - e * i, x = a * c - u * i, A = e * c - u * s, q = f * d - M * v,
                y = f * b - h * v, w = f * m - l * v, R = M * b - h * d, L = M * m - l * d, S = h * m - l * b,
                _ = p * S - P * L + E * R + O * w - x * y + A * q;
            return _ ? (_ = 1 / _, t[0] = (i * S - s * L + c * R) * _, t[1] = (e * L - a * S - u * R) * _, t[2] = (d * A - b * x + m * O) * _, t[3] = (h * x - M * A - l * O) * _, t[4] = (s * w - o * S - c * y) * _, t[5] = (r * S - e * w + u * y) * _, t[6] = (b * E - v * A - m * P) * _, t[7] = (f * A - h * E + l * P) * _, t[8] = (o * L - i * w + c * q) * _, t[9] = (a * w - r * L - u * q) * _, t[10] = (v * x - d * E + m * p) * _, t[11] = (M * E - f * x - l * p) * _, t[12] = (i * y - o * R - s * q) * _, t[13] = (r * R - a * y + e * q) * _, t[14] = (d * P - v * O - b * p) * _, t[15] = (f * O - M * P + h * p) * _, t) : null
        }

        function M(t, n) {
            var r = n[0], a = n[1], e = n[2], u = n[3], o = n[4], i = n[5], s = n[6], c = n[7], f = n[8], M = n[9],
                h = n[10], l = n[11], v = n[12], d = n[13], b = n[14], m = n[15];
            return t[0] = i * (h * m - l * b) - M * (s * m - c * b) + d * (s * l - c * h), t[1] = -(a * (h * m - l * b) - M * (e * m - u * b) + d * (e * l - u * h)), t[2] = a * (s * m - c * b) - i * (e * m - u * b) + d * (e * c - u * s), t[3] = -(a * (s * l - c * h) - i * (e * l - u * h) + M * (e * c - u * s)), t[4] = -(o * (h * m - l * b) - f * (s * m - c * b) + v * (s * l - c * h)), t[5] = r * (h * m - l * b) - f * (e * m - u * b) + v * (e * l - u * h), t[6] = -(r * (s * m - c * b) - o * (e * m - u * b) + v * (e * c - u * s)), t[7] = r * (s * l - c * h) - o * (e * l - u * h) + f * (e * c - u * s), t[8] = o * (M * m - l * d) - f * (i * m - c * d) + v * (i * l - c * M), t[9] = -(r * (M * m - l * d) - f * (a * m - u * d) + v * (a * l - u * M)), t[10] = r * (i * m - c * d) - o * (a * m - u * d) + v * (a * c - u * i), t[11] = -(r * (i * l - c * M) - o * (a * l - u * M) + f * (a * c - u * i)), t[12] = -(o * (M * b - h * d) - f * (i * b - s * d) + v * (i * h - s * M)), t[13] = r * (M * b - h * d) - f * (a * b - e * d) + v * (a * h - e * M), t[14] = -(r * (i * b - s * d) - o * (a * b - e * d) + v * (a * s - e * i)), t[15] = r * (i * h - s * M) - o * (a * h - e * M) + f * (a * s - e * i), t
        }

        function h(t) {
            var n = t[0], r = t[1], a = t[2], e = t[3], u = t[4], o = t[5], i = t[6], s = t[7], c = t[8], f = t[9],
                M = t[10], h = t[11], l = t[12], v = t[13], d = t[14], b = t[15];
            return (n * o - r * u) * (M * b - h * d) - (n * i - a * u) * (f * b - h * v) + (n * s - e * u) * (f * d - M * v) + (r * i - a * o) * (c * b - h * l) - (r * s - e * o) * (c * d - M * l) + (a * s - e * i) * (c * v - f * l)
        }

        function l(t, n, r) {
            var a = n[0], e = n[1], u = n[2], o = n[3], i = n[4], s = n[5], c = n[6], f = n[7], M = n[8], h = n[9],
                l = n[10], v = n[11], d = n[12], b = n[13], m = n[14], p = n[15], P = r[0], E = r[1], O = r[2],
                x = r[3];
            return t[0] = P * a + E * i + O * M + x * d, t[1] = P * e + E * s + O * h + x * b, t[2] = P * u + E * c + O * l + x * m, t[3] = P * o + E * f + O * v + x * p, P = r[4], E = r[5], O = r[6], x = r[7], t[4] = P * a + E * i + O * M + x * d, t[5] = P * e + E * s + O * h + x * b, t[6] = P * u + E * c + O * l + x * m, t[7] = P * o + E * f + O * v + x * p, P = r[8], E = r[9], O = r[10], x = r[11], t[8] = P * a + E * i + O * M + x * d, t[9] = P * e + E * s + O * h + x * b, t[10] = P * u + E * c + O * l + x * m, t[11] = P * o + E * f + O * v + x * p, P = r[12], E = r[13], O = r[14], x = r[15], t[12] = P * a + E * i + O * M + x * d, t[13] = P * e + E * s + O * h + x * b, t[14] = P * u + E * c + O * l + x * m, t[15] = P * o + E * f + O * v + x * p, t
        }

        function v(t, n, r) {
            var a = r[0], e = r[1], u = r[2], o = void 0, i = void 0, s = void 0, c = void 0, f = void 0, M = void 0,
                h = void 0, l = void 0, v = void 0, d = void 0, b = void 0, m = void 0;
            return n === t ? (t[12] = n[0] * a + n[4] * e + n[8] * u + n[12], t[13] = n[1] * a + n[5] * e + n[9] * u + n[13], t[14] = n[2] * a + n[6] * e + n[10] * u + n[14], t[15] = n[3] * a + n[7] * e + n[11] * u + n[15]) : (o = n[0], i = n[1], s = n[2], c = n[3], f = n[4], M = n[5], h = n[6], l = n[7], v = n[8], d = n[9], b = n[10], m = n[11], t[0] = o, t[1] = i, t[2] = s, t[3] = c, t[4] = f, t[5] = M, t[6] = h, t[7] = l, t[8] = v, t[9] = d, t[10] = b, t[11] = m, t[12] = o * a + f * e + v * u + n[12], t[13] = i * a + M * e + d * u + n[13], t[14] = s * a + h * e + b * u + n[14], t[15] = c * a + l * e + m * u + n[15]), t
        }

        function d(t, n, r) {
            var a = r[0], e = r[1], u = r[2];
            return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t[4] = n[4] * e, t[5] = n[5] * e, t[6] = n[6] * e, t[7] = n[7] * e, t[8] = n[8] * u, t[9] = n[9] * u, t[10] = n[10] * u, t[11] = n[11] * u, t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], t
        }

        function b(t, n, r, a) {
            var e = a[0], u = a[1], o = a[2], i = Math.sqrt(e * e + u * u + o * o), s = void 0, c = void 0, f = void 0,
                M = void 0, h = void 0, l = void 0, v = void 0, d = void 0, b = void 0, m = void 0, p = void 0,
                P = void 0, E = void 0, O = void 0, x = void 0, A = void 0, q = void 0, y = void 0, w = void 0,
                R = void 0, L = void 0, S = void 0, _ = void 0, I = void 0;
            return Math.abs(i) < C.EPSILON ? null : (i = 1 / i, e *= i, u *= i, o *= i, s = Math.sin(r), c = Math.cos(r), f = 1 - c, M = n[0], h = n[1], l = n[2], v = n[3], d = n[4], b = n[5], m = n[6], p = n[7], P = n[8], E = n[9], O = n[10], x = n[11], A = e * e * f + c, q = u * e * f + o * s, y = o * e * f - u * s, w = e * u * f - o * s, R = u * u * f + c, L = o * u * f + e * s, S = e * o * f + u * s, _ = u * o * f - e * s, I = o * o * f + c, t[0] = M * A + d * q + P * y, t[1] = h * A + b * q + E * y, t[2] = l * A + m * q + O * y, t[3] = v * A + p * q + x * y, t[4] = M * w + d * R + P * L, t[5] = h * w + b * R + E * L, t[6] = l * w + m * R + O * L, t[7] = v * w + p * R + x * L, t[8] = M * S + d * _ + P * I, t[9] = h * S + b * _ + E * I, t[10] = l * S + m * _ + O * I, t[11] = v * S + p * _ + x * I, n !== t && (t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t)
        }

        function m(t, n, r) {
            var a = Math.sin(r), e = Math.cos(r), u = n[4], o = n[5], i = n[6], s = n[7], c = n[8], f = n[9], M = n[10],
                h = n[11];
            return n !== t && (t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[4] = u * e + c * a, t[5] = o * e + f * a, t[6] = i * e + M * a, t[7] = s * e + h * a, t[8] = c * e - u * a, t[9] = f * e - o * a, t[10] = M * e - i * a, t[11] = h * e - s * a, t
        }

        function p(t, n, r) {
            var a = Math.sin(r), e = Math.cos(r), u = n[0], o = n[1], i = n[2], s = n[3], c = n[8], f = n[9], M = n[10],
                h = n[11];
            return n !== t && (t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[0] = u * e - c * a, t[1] = o * e - f * a, t[2] = i * e - M * a, t[3] = s * e - h * a, t[8] = u * a + c * e, t[9] = o * a + f * e, t[10] = i * a + M * e, t[11] = s * a + h * e, t
        }

        function P(t, n, r) {
            var a = Math.sin(r), e = Math.cos(r), u = n[0], o = n[1], i = n[2], s = n[3], c = n[4], f = n[5], M = n[6],
                h = n[7];
            return n !== t && (t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[0] = u * e + c * a, t[1] = o * e + f * a, t[2] = i * e + M * a, t[3] = s * e + h * a, t[4] = c * e - u * a, t[5] = f * e - o * a, t[6] = M * e - i * a, t[7] = h * e - s * a, t
        }

        function E(t, n) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = n[0], t[13] = n[1], t[14] = n[2], t[15] = 1, t
        }

        function O(t, n) {
            return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = n[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
        }

        function x(t, n, r) {
            var a = r[0], e = r[1], u = r[2], o = Math.sqrt(a * a + e * e + u * u), i = void 0, s = void 0, c = void 0;
            return Math.abs(o) < C.EPSILON ? null : (o = 1 / o, a *= o, e *= o, u *= o, i = Math.sin(n), s = Math.cos(n), c = 1 - s, t[0] = a * a * c + s, t[1] = e * a * c + u * i, t[2] = u * a * c - e * i, t[3] = 0, t[4] = a * e * c - u * i, t[5] = e * e * c + s, t[6] = u * e * c + a * i, t[7] = 0, t[8] = a * u * c + e * i, t[9] = e * u * c - a * i, t[10] = u * u * c + s, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t)
        }

        function A(t, n) {
            var r = Math.sin(n), a = Math.cos(n);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = a, t[6] = r, t[7] = 0, t[8] = 0, t[9] = -r, t[10] = a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
        }

        function q(t, n) {
            var r = Math.sin(n), a = Math.cos(n);
            return t[0] = a, t[1] = 0, t[2] = -r, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = r, t[9] = 0, t[10] = a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
        }

        function y(t, n) {
            var r = Math.sin(n), a = Math.cos(n);
            return t[0] = a, t[1] = r, t[2] = 0, t[3] = 0, t[4] = -r, t[5] = a, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
        }

        function w(t, n, r) {
            var a = n[0], e = n[1], u = n[2], o = n[3], i = a + a, s = e + e, c = u + u, f = a * i, M = a * s,
                h = a * c, l = e * s, v = e * c, d = u * c, b = o * i, m = o * s, p = o * c;
            return t[0] = 1 - (l + d), t[1] = M + p, t[2] = h - m, t[3] = 0, t[4] = M - p, t[5] = 1 - (f + d), t[6] = v + b, t[7] = 0, t[8] = h + m, t[9] = v - b, t[10] = 1 - (f + l), t[11] = 0, t[12] = r[0], t[13] = r[1], t[14] = r[2], t[15] = 1, t
        }

        function R(t, n) {
            return t[0] = n[12], t[1] = n[13], t[2] = n[14], t
        }

        function L(t, n) {
            var r = n[0], a = n[1], e = n[2], u = n[4], o = n[5], i = n[6], s = n[8], c = n[9], f = n[10];
            return t[0] = Math.sqrt(r * r + a * a + e * e), t[1] = Math.sqrt(u * u + o * o + i * i), t[2] = Math.sqrt(s * s + c * c + f * f), t
        }

        function S(t, n) {
            var r = n[0] + n[5] + n[10], a = 0;
            return r > 0 ? (a = 2 * Math.sqrt(r + 1), t[3] = .25 * a, t[0] = (n[6] - n[9]) / a, t[1] = (n[8] - n[2]) / a, t[2] = (n[1] - n[4]) / a) : n[0] > n[5] & n[0] > n[10] ? (a = 2 * Math.sqrt(1 + n[0] - n[5] - n[10]), t[3] = (n[6] - n[9]) / a, t[0] = .25 * a, t[1] = (n[1] + n[4]) / a, t[2] = (n[8] + n[2]) / a) : n[5] > n[10] ? (a = 2 * Math.sqrt(1 + n[5] - n[0] - n[10]), t[3] = (n[8] - n[2]) / a, t[0] = (n[1] + n[4]) / a, t[1] = .25 * a, t[2] = (n[6] + n[9]) / a) : (a = 2 * Math.sqrt(1 + n[10] - n[0] - n[5]), t[3] = (n[1] - n[4]) / a, t[0] = (n[8] + n[2]) / a, t[1] = (n[6] + n[9]) / a, t[2] = .25 * a), t
        }

        function _(t, n, r, a) {
            var e = n[0], u = n[1], o = n[2], i = n[3], s = e + e, c = u + u, f = o + o, M = e * s, h = e * c,
                l = e * f, v = u * c, d = u * f, b = o * f, m = i * s, p = i * c, P = i * f, E = a[0], O = a[1],
                x = a[2];
            return t[0] = (1 - (v + b)) * E, t[1] = (h + P) * E, t[2] = (l - p) * E, t[3] = 0, t[4] = (h - P) * O, t[5] = (1 - (M + b)) * O, t[6] = (d + m) * O, t[7] = 0, t[8] = (l + p) * x, t[9] = (d - m) * x, t[10] = (1 - (M + v)) * x, t[11] = 0, t[12] = r[0], t[13] = r[1], t[14] = r[2], t[15] = 1, t
        }

        function I(t, n, r, a, e) {
            var u = n[0], o = n[1], i = n[2], s = n[3], c = u + u, f = o + o, M = i + i, h = u * c, l = u * f,
                v = u * M, d = o * f, b = o * M, m = i * M, p = s * c, P = s * f, E = s * M, O = a[0], x = a[1],
                A = a[2], q = e[0], y = e[1], w = e[2];
            return t[0] = (1 - (d + m)) * O, t[1] = (l + E) * O, t[2] = (v - P) * O, t[3] = 0, t[4] = (l - E) * x, t[5] = (1 - (h + m)) * x, t[6] = (b + p) * x, t[7] = 0, t[8] = (v + P) * A, t[9] = (b - p) * A, t[10] = (1 - (h + d)) * A, t[11] = 0, t[12] = r[0] + q - (t[0] * q + t[4] * y + t[8] * w), t[13] = r[1] + y - (t[1] * q + t[5] * y + t[9] * w), t[14] = r[2] + w - (t[2] * q + t[6] * y + t[10] * w), t[15] = 1, t
        }

        function N(t, n) {
            var r = n[0], a = n[1], e = n[2], u = n[3], o = r + r, i = a + a, s = e + e, c = r * o, f = a * o,
                M = a * i, h = e * o, l = e * i, v = e * s, d = u * o, b = u * i, m = u * s;
            return t[0] = 1 - M - v, t[1] = f + m, t[2] = h - b, t[3] = 0, t[4] = f - m, t[5] = 1 - c - v, t[6] = l + d, t[7] = 0, t[8] = h + b, t[9] = l - d, t[10] = 1 - c - M, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
        }

        function Y(t, n, r, a, e, u, o) {
            var i = 1 / (r - n), s = 1 / (e - a), c = 1 / (u - o);
            return t[0] = 2 * u * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * u * s, t[6] = 0, t[7] = 0, t[8] = (r + n) * i, t[9] = (e + a) * s, t[10] = (o + u) * c, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = o * u * 2 * c, t[15] = 0, t
        }

        function g(t, n, r, a, e) {
            var u = 1 / Math.tan(n / 2), o = 1 / (a - e);
            return t[0] = u / r, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = u, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (e + a) * o, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * e * a * o, t[15] = 0, t
        }

        function T(t, n, r, a) {
            var e = Math.tan(n.upDegrees * Math.PI / 180), u = Math.tan(n.downDegrees * Math.PI / 180),
                o = Math.tan(n.leftDegrees * Math.PI / 180), i = Math.tan(n.rightDegrees * Math.PI / 180),
                s = 2 / (o + i), c = 2 / (e + u);
            return t[0] = s, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = c, t[6] = 0, t[7] = 0, t[8] = -(o - i) * s * .5, t[9] = (e - u) * c * .5, t[10] = a / (r - a), t[11] = -1, t[12] = 0, t[13] = 0, t[14] = a * r / (r - a), t[15] = 0, t
        }

        function j(t, n, r, a, e, u, o) {
            var i = 1 / (n - r), s = 1 / (a - e), c = 1 / (u - o);
            return t[0] = -2 * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * s, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * c, t[11] = 0, t[12] = (n + r) * i, t[13] = (e + a) * s, t[14] = (o + u) * c, t[15] = 1, t
        }

        function D(t, n, r, a) {
            var e = void 0, u = void 0, o = void 0, i = void 0, s = void 0, c = void 0, f = void 0, M = void 0,
                h = void 0, l = void 0, v = n[0], d = n[1], b = n[2], m = a[0], p = a[1], P = a[2], E = r[0], O = r[1],
                x = r[2];
            return Math.abs(v - E) < C.EPSILON && Math.abs(d - O) < C.EPSILON && Math.abs(b - x) < C.EPSILON ? mat4.identity(t) : (f = v - E, M = d - O, h = b - x, l = 1 / Math.sqrt(f * f + M * M + h * h), f *= l, M *= l, h *= l, e = p * h - P * M, u = P * f - m * h, o = m * M - p * f, l = Math.sqrt(e * e + u * u + o * o), l ? (l = 1 / l, e *= l, u *= l, o *= l) : (e = 0, u = 0, o = 0), i = M * o - h * u, s = h * e - f * o, c = f * u - M * e, l = Math.sqrt(i * i + s * s + c * c), l ? (l = 1 / l, i *= l, s *= l, c *= l) : (i = 0, s = 0, c = 0), t[0] = e, t[1] = i, t[2] = f, t[3] = 0, t[4] = u, t[5] = s, t[6] = M, t[7] = 0, t[8] = o, t[9] = c, t[10] = h, t[11] = 0, t[12] = -(e * v + u * d + o * b), t[13] = -(i * v + s * d + c * b), t[14] = -(f * v + M * d + h * b), t[15] = 1, t)
        }

        function V(t, n, r, a) {
            var e = n[0], u = n[1], o = n[2], i = a[0], s = a[1], c = a[2], f = e - r[0], M = u - r[1], h = o - r[2],
                l = f * f + M * M + h * h;
            l > 0 && (l = 1 / Math.sqrt(l), f *= l, M *= l, h *= l);
            var v = s * h - c * M, d = c * f - i * h, b = i * M - s * f;
            return t[0] = v, t[1] = d, t[2] = b, t[3] = 0, t[4] = M * b - h * d, t[5] = h * v - f * b, t[6] = f * d - M * v, t[7] = 0, t[8] = f, t[9] = M, t[10] = h, t[11] = 0, t[12] = e, t[13] = u, t[14] = o, t[15] = 1, t
        }

        function z(t) {
            return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")"
        }

        function F(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2) + Math.pow(t[9], 2) + Math.pow(t[10], 2) + Math.pow(t[11], 2) + Math.pow(t[12], 2) + Math.pow(t[13], 2) + Math.pow(t[14], 2) + Math.pow(t[15], 2))
        }

        function Q(t, n, r) {
            return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t[3] = n[3] + r[3], t[4] = n[4] + r[4], t[5] = n[5] + r[5], t[6] = n[6] + r[6], t[7] = n[7] + r[7], t[8] = n[8] + r[8], t[9] = n[9] + r[9], t[10] = n[10] + r[10], t[11] = n[11] + r[11], t[12] = n[12] + r[12], t[13] = n[13] + r[13], t[14] = n[14] + r[14], t[15] = n[15] + r[15], t
        }

        function X(t, n, r) {
            return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t[3] = n[3] - r[3], t[4] = n[4] - r[4], t[5] = n[5] - r[5], t[6] = n[6] - r[6], t[7] = n[7] - r[7], t[8] = n[8] - r[8], t[9] = n[9] - r[9], t[10] = n[10] - r[10], t[11] = n[11] - r[11], t[12] = n[12] - r[12], t[13] = n[13] - r[13], t[14] = n[14] - r[14], t[15] = n[15] - r[15], t
        }

        function Z(t, n, r) {
            return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = n[7] * r, t[8] = n[8] * r, t[9] = n[9] * r, t[10] = n[10] * r, t[11] = n[11] * r, t[12] = n[12] * r, t[13] = n[13] * r, t[14] = n[14] * r, t[15] = n[15] * r, t
        }

        function k(t, n, r, a) {
            return t[0] = n[0] + r[0] * a, t[1] = n[1] + r[1] * a, t[2] = n[2] + r[2] * a, t[3] = n[3] + r[3] * a, t[4] = n[4] + r[4] * a, t[5] = n[5] + r[5] * a, t[6] = n[6] + r[6] * a, t[7] = n[7] + r[7] * a, t[8] = n[8] + r[8] * a, t[9] = n[9] + r[9] * a, t[10] = n[10] + r[10] * a, t[11] = n[11] + r[11] * a, t[12] = n[12] + r[12] * a, t[13] = n[13] + r[13] * a, t[14] = n[14] + r[14] * a, t[15] = n[15] + r[15] * a, t
        }

        function U(t, n) {
            return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7] && t[8] === n[8] && t[9] === n[9] && t[10] === n[10] && t[11] === n[11] && t[12] === n[12] && t[13] === n[13] && t[14] === n[14] && t[15] === n[15]
        }

        function W(t, n) {
            var r = t[0], a = t[1], e = t[2], u = t[3], o = t[4], i = t[5], s = t[6], c = t[7], f = t[8], M = t[9],
                h = t[10], l = t[11], v = t[12], d = t[13], b = t[14], m = t[15], p = n[0], P = n[1], E = n[2],
                O = n[3], x = n[4], A = n[5], q = n[6], y = n[7], w = n[8], R = n[9], L = n[10], S = n[11], _ = n[12],
                I = n[13], N = n[14], Y = n[15];
            return Math.abs(r - p) <= C.EPSILON * Math.max(1, Math.abs(r), Math.abs(p)) && Math.abs(a - P) <= C.EPSILON * Math.max(1, Math.abs(a), Math.abs(P)) && Math.abs(e - E) <= C.EPSILON * Math.max(1, Math.abs(e), Math.abs(E)) && Math.abs(u - O) <= C.EPSILON * Math.max(1, Math.abs(u), Math.abs(O)) && Math.abs(o - x) <= C.EPSILON * Math.max(1, Math.abs(o), Math.abs(x)) && Math.abs(i - A) <= C.EPSILON * Math.max(1, Math.abs(i), Math.abs(A)) && Math.abs(s - q) <= C.EPSILON * Math.max(1, Math.abs(s), Math.abs(q)) && Math.abs(c - y) <= C.EPSILON * Math.max(1, Math.abs(c), Math.abs(y)) && Math.abs(f - w) <= C.EPSILON * Math.max(1, Math.abs(f), Math.abs(w)) && Math.abs(M - R) <= C.EPSILON * Math.max(1, Math.abs(M), Math.abs(R)) && Math.abs(h - L) <= C.EPSILON * Math.max(1, Math.abs(h), Math.abs(L)) && Math.abs(l - S) <= C.EPSILON * Math.max(1, Math.abs(l), Math.abs(S)) && Math.abs(v - _) <= C.EPSILON * Math.max(1, Math.abs(v), Math.abs(_)) && Math.abs(d - I) <= C.EPSILON * Math.max(1, Math.abs(d), Math.abs(I)) && Math.abs(b - N) <= C.EPSILON * Math.max(1, Math.abs(b), Math.abs(N)) && Math.abs(m - Y) <= C.EPSILON * Math.max(1, Math.abs(m), Math.abs(Y))
        }

        Object.defineProperty(n, "__esModule", {value: !0}), n.sub = n.mul = void 0, n.create = a, n.clone = e, n.copy = u, n.fromValues = o, n.set = i, n.identity = s, n.transpose = c, n.invert = f, n.adjoint = M, n.determinant = h, n.multiply = l, n.translate = v, n.scale = d, n.rotate = b, n.rotateX = m, n.rotateY = p, n.rotateZ = P, n.fromTranslation = E, n.fromScaling = O, n.fromRotation = x, n.fromXRotation = A, n.fromYRotation = q, n.fromZRotation = y, n.fromRotationTranslation = w, n.getTranslation = R, n.getScaling = L, n.getRotation = S, n.fromRotationTranslationScale = _, n.fromRotationTranslationScaleOrigin = I, n.fromQuat = N, n.frustum = Y, n.perspective = g, n.perspectiveFromFieldOfView = T, n.ortho = j, n.lookAt = D, n.targetTo = V, n.str = z, n.frob = F, n.add = Q, n.subtract = X, n.multiplyScalar = Z, n.multiplyScalarAndAdd = k, n.exactEquals = U, n.equals = W;
        var B = r(0), C = function (t) {
            if (t && t.__esModule) return t;
            var n = {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n.default = t, n
        }(B);
        n.mul = l, n.sub = X
    }, function (t, n, r) {
        "use strict";

        function a(t) {
            if (t && t.__esModule) return t;
            var n = {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n.default = t, n
        }

        function e() {
            var t = new E.ARRAY_TYPE(4);
            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t
        }

        function u(t) {
            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t
        }

        function o(t, n, r) {
            r *= .5;
            var a = Math.sin(r);
            return t[0] = a * n[0], t[1] = a * n[1], t[2] = a * n[2], t[3] = Math.cos(r), t
        }

        function i(t, n) {
            var r = 2 * Math.acos(n[3]), a = Math.sin(r / 2);
            return 0 != a ? (t[0] = n[0] / a, t[1] = n[1] / a, t[2] = n[2] / a) : (t[0] = 1, t[1] = 0, t[2] = 0), r
        }

        function s(t, n, r) {
            var a = n[0], e = n[1], u = n[2], o = n[3], i = r[0], s = r[1], c = r[2], f = r[3];
            return t[0] = a * f + o * i + e * c - u * s, t[1] = e * f + o * s + u * i - a * c, t[2] = u * f + o * c + a * s - e * i, t[3] = o * f - a * i - e * s - u * c, t
        }

        function c(t, n, r) {
            r *= .5;
            var a = n[0], e = n[1], u = n[2], o = n[3], i = Math.sin(r), s = Math.cos(r);
            return t[0] = a * s + o * i, t[1] = e * s + u * i, t[2] = u * s - e * i, t[3] = o * s - a * i, t
        }

        function f(t, n, r) {
            r *= .5;
            var a = n[0], e = n[1], u = n[2], o = n[3], i = Math.sin(r), s = Math.cos(r);
            return t[0] = a * s - u * i, t[1] = e * s + o * i, t[2] = u * s + a * i, t[3] = o * s - e * i, t
        }

        function M(t, n, r) {
            r *= .5;
            var a = n[0], e = n[1], u = n[2], o = n[3], i = Math.sin(r), s = Math.cos(r);
            return t[0] = a * s + e * i, t[1] = e * s - a * i, t[2] = u * s + o * i, t[3] = o * s - u * i, t
        }

        function h(t, n) {
            var r = n[0], a = n[1], e = n[2];
            return t[0] = r, t[1] = a, t[2] = e, t[3] = Math.sqrt(Math.abs(1 - r * r - a * a - e * e)), t
        }

        function l(t, n, r, a) {
            var e = n[0], u = n[1], o = n[2], i = n[3], s = r[0], c = r[1], f = r[2], M = r[3], h = void 0, l = void 0,
                v = void 0, d = void 0, b = void 0;
            return l = e * s + u * c + o * f + i * M, l < 0 && (l = -l, s = -s, c = -c, f = -f, M = -M), 1 - l > 1e-6 ? (h = Math.acos(l), v = Math.sin(h), d = Math.sin((1 - a) * h) / v, b = Math.sin(a * h) / v) : (d = 1 - a, b = a), t[0] = d * e + b * s, t[1] = d * u + b * c, t[2] = d * o + b * f, t[3] = d * i + b * M, t
        }

        function v(t, n) {
            var r = n[0], a = n[1], e = n[2], u = n[3], o = r * r + a * a + e * e + u * u, i = o ? 1 / o : 0;
            return t[0] = -r * i, t[1] = -a * i, t[2] = -e * i, t[3] = u * i, t
        }

        function d(t, n) {
            return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = n[3], t
        }

        function b(t, n) {
            var r = n[0] + n[4] + n[8], a = void 0;
            if (r > 0) a = Math.sqrt(r + 1), t[3] = .5 * a, a = .5 / a, t[0] = (n[5] - n[7]) * a, t[1] = (n[6] - n[2]) * a, t[2] = (n[1] - n[3]) * a; else {
                var e = 0;
                n[4] > n[0] && (e = 1), n[8] > n[3 * e + e] && (e = 2);
                var u = (e + 1) % 3, o = (e + 2) % 3;
                a = Math.sqrt(n[3 * e + e] - n[3 * u + u] - n[3 * o + o] + 1), t[e] = .5 * a, a = .5 / a, t[3] = (n[3 * u + o] - n[3 * o + u]) * a, t[u] = (n[3 * u + e] + n[3 * e + u]) * a, t[o] = (n[3 * o + e] + n[3 * e + o]) * a
            }
            return t
        }

        function m(t, n, r, a) {
            var e = .5 * Math.PI / 180;
            n *= e, r *= e, a *= e;
            var u = Math.sin(n), o = Math.cos(n), i = Math.sin(r), s = Math.cos(r), c = Math.sin(a), f = Math.cos(a);
            return t[0] = u * s * f - o * i * c, t[1] = o * i * f + u * s * c, t[2] = o * s * c - u * i * f, t[3] = o * s * f + u * i * c, t
        }

        function p(t) {
            return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
        }

        Object.defineProperty(n, "__esModule", {value: !0}), n.setAxes = n.sqlerp = n.rotationTo = n.equals = n.exactEquals = n.normalize = n.sqrLen = n.squaredLength = n.len = n.length = n.lerp = n.dot = n.scale = n.mul = n.add = n.set = n.copy = n.fromValues = n.clone = void 0, n.create = e, n.identity = u, n.setAxisAngle = o, n.getAxisAngle = i, n.multiply = s, n.rotateX = c, n.rotateY = f, n.rotateZ = M, n.calculateW = h, n.slerp = l, n.invert = v, n.conjugate = d, n.fromMat3 = b, n.fromEuler = m, n.str = p;
        var P = r(0), E = a(P), O = r(1), x = a(O), A = r(2), q = a(A), y = r(3), w = a(y),
            R = (n.clone = w.clone, n.fromValues = w.fromValues, n.copy = w.copy, n.set = w.set, n.add = w.add, n.mul = s, n.scale = w.scale, n.dot = w.dot, n.lerp = w.lerp, n.length = w.length),
            L = (n.len = R, n.squaredLength = w.squaredLength), S = (n.sqrLen = L, n.normalize = w.normalize);
        n.exactEquals = w.exactEquals, n.equals = w.equals, n.rotationTo = function () {
            var t = q.create(), n = q.fromValues(1, 0, 0), r = q.fromValues(0, 1, 0);
            return function (a, e, u) {
                var i = q.dot(e, u);
                return i < -.999999 ? (q.cross(t, n, e), q.len(t) < 1e-6 && q.cross(t, r, e), q.normalize(t, t), o(a, t, Math.PI), a) : i > .999999 ? (a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 1, a) : (q.cross(t, e, u), a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = 1 + i, S(a, a))
            }
        }(), n.sqlerp = function () {
            var t = e(), n = e();
            return function (r, a, e, u, o, i) {
                return l(t, a, o, i), l(n, e, u, i), l(r, t, n, 2 * i * (1 - i)), r
            }
        }(), n.setAxes = function () {
            var t = x.create();
            return function (n, r, a, e) {
                return t[0] = a[0], t[3] = a[1], t[6] = a[2], t[1] = e[0], t[4] = e[1], t[7] = e[2], t[2] = -r[0], t[5] = -r[1], t[8] = -r[2], S(n, b(n, t))
            }
        }()
    }, function (t, n, r) {
        "use strict";

        function a() {
            var t = new V.ARRAY_TYPE(2);
            return t[0] = 0, t[1] = 0, t
        }

        function e(t) {
            var n = new V.ARRAY_TYPE(2);
            return n[0] = t[0], n[1] = t[1], n
        }

        function u(t, n) {
            var r = new V.ARRAY_TYPE(2);
            return r[0] = t, r[1] = n, r
        }

        function o(t, n) {
            return t[0] = n[0], t[1] = n[1], t
        }

        function i(t, n, r) {
            return t[0] = n, t[1] = r, t
        }

        function s(t, n, r) {
            return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t
        }

        function c(t, n, r) {
            return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t
        }

        function f(t, n, r) {
            return t[0] = n[0] * r[0], t[1] = n[1] * r[1], t
        }

        function M(t, n, r) {
            return t[0] = n[0] / r[0], t[1] = n[1] / r[1], t
        }

        function h(t, n) {
            return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t
        }

        function l(t, n) {
            return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t
        }

        function v(t, n, r) {
            return t[0] = Math.min(n[0], r[0]), t[1] = Math.min(n[1], r[1]), t
        }

        function d(t, n, r) {
            return t[0] = Math.max(n[0], r[0]), t[1] = Math.max(n[1], r[1]), t
        }

        function b(t, n) {
            return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t
        }

        function m(t, n, r) {
            return t[0] = n[0] * r, t[1] = n[1] * r, t
        }

        function p(t, n, r, a) {
            return t[0] = n[0] + r[0] * a, t[1] = n[1] + r[1] * a, t
        }

        function P(t, n) {
            var r = n[0] - t[0], a = n[1] - t[1];
            return Math.sqrt(r * r + a * a)
        }

        function E(t, n) {
            var r = n[0] - t[0], a = n[1] - t[1];
            return r * r + a * a
        }

        function O(t) {
            var n = t[0], r = t[1];
            return Math.sqrt(n * n + r * r)
        }

        function x(t) {
            var n = t[0], r = t[1];
            return n * n + r * r
        }

        function A(t, n) {
            return t[0] = -n[0], t[1] = -n[1], t
        }

        function q(t, n) {
            return t[0] = 1 / n[0], t[1] = 1 / n[1], t
        }

        function y(t, n) {
            var r = n[0], a = n[1], e = r * r + a * a;
            return e > 0 && (e = 1 / Math.sqrt(e), t[0] = n[0] * e, t[1] = n[1] * e), t
        }

        function w(t, n) {
            return t[0] * n[0] + t[1] * n[1]
        }

        function R(t, n, r) {
            var a = n[0] * r[1] - n[1] * r[0];
            return t[0] = t[1] = 0, t[2] = a, t
        }

        function L(t, n, r, a) {
            var e = n[0], u = n[1];
            return t[0] = e + a * (r[0] - e), t[1] = u + a * (r[1] - u), t
        }

        function S(t, n) {
            n = n || 1;
            var r = 2 * V.RANDOM() * Math.PI;
            return t[0] = Math.cos(r) * n, t[1] = Math.sin(r) * n, t
        }

        function _(t, n, r) {
            var a = n[0], e = n[1];
            return t[0] = r[0] * a + r[2] * e, t[1] = r[1] * a + r[3] * e, t
        }

        function I(t, n, r) {
            var a = n[0], e = n[1];
            return t[0] = r[0] * a + r[2] * e + r[4], t[1] = r[1] * a + r[3] * e + r[5], t
        }

        function N(t, n, r) {
            var a = n[0], e = n[1];
            return t[0] = r[0] * a + r[3] * e + r[6], t[1] = r[1] * a + r[4] * e + r[7], t
        }

        function Y(t, n, r) {
            var a = n[0], e = n[1];
            return t[0] = r[0] * a + r[4] * e + r[12], t[1] = r[1] * a + r[5] * e + r[13], t
        }

        function g(t) {
            return "vec2(" + t[0] + ", " + t[1] + ")"
        }

        function T(t, n) {
            return t[0] === n[0] && t[1] === n[1]
        }

        function j(t, n) {
            var r = t[0], a = t[1], e = n[0], u = n[1];
            return Math.abs(r - e) <= V.EPSILON * Math.max(1, Math.abs(r), Math.abs(e)) && Math.abs(a - u) <= V.EPSILON * Math.max(1, Math.abs(a), Math.abs(u))
        }

        Object.defineProperty(n, "__esModule", {value: !0}), n.forEach = n.sqrLen = n.sqrDist = n.dist = n.div = n.mul = n.sub = n.len = void 0, n.create = a, n.clone = e, n.fromValues = u, n.copy = o, n.set = i, n.add = s, n.subtract = c, n.multiply = f, n.divide = M, n.ceil = h, n.floor = l, n.min = v, n.max = d, n.round = b, n.scale = m, n.scaleAndAdd = p, n.distance = P, n.squaredDistance = E, n.length = O, n.squaredLength = x, n.negate = A, n.inverse = q, n.normalize = y, n.dot = w, n.cross = R, n.lerp = L, n.random = S, n.transformMat2 = _, n.transformMat2d = I, n.transformMat3 = N, n.transformMat4 = Y, n.str = g, n.exactEquals = T, n.equals = j;
        var D = r(0), V = function (t) {
            if (t && t.__esModule) return t;
            var n = {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n.default = t, n
        }(D);
        n.len = O, n.sub = c, n.mul = f, n.div = M, n.dist = P, n.sqrDist = E, n.sqrLen = x, n.forEach = function () {
            var t = a();
            return function (n, r, a, e, u, o) {
                var i = void 0, s = void 0;
                for (r || (r = 2), a || (a = 0), s = e ? Math.min(e * r + a, n.length) : n.length, i = a; i < s; i += r) t[0] = n[i], t[1] = n[i + 1], u(t, t, o), n[i] = t[0], n[i + 1] = t[1];
                return n
            }
        }()
    }])
});
"use strict";
var RedDefinePropertyInfo;
(function () {
    //TODO: 코드 정리좀 해야함
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedDefinePropertyInfo`,
		 description : `
			 prototype Property 선언기
		 `,
		 return : 'void'
	 }
     :DOC*/
    RedDefinePropertyInfo = {}
    var maker;
    maker = function (targetObject, clsName, name, type, option) {
        var result;
        var samplerTypeKey
        if (targetObject.hasOwnProperty(name)) RedGLUtil.throwFunc(clsName + ' - ' + name + ' : 이미 정의된 속성')
        switch (type) {
            case 'hex' :
                result = {
                    get: function () {
                        return this['_' + name];
                    },
                    set: function (v) {
                        typeof v == 'string' || RedGLUtil.throwFunc(clsName + ' - ' + name + ' 문자열만 허용함', '입력값 : ' + v);
                        RedGLUtil.regHex(v) || RedGLUtil.throwFunc(clsName + ' - ' + name + ' : hex 형식만 허용함.' + v)
                        this['_' + name] = v
                        if (option && option['callback']) option['callback'].call(this, v)
                    }
                }
                break
            case 'boolean' :
                option = option != undefined ? option : true
                result = {
                    get: function () {
                        return this['_' + name];
                    },
                    set: function (v) {
                        if (typeof v != 'boolean') RedGLUtil.throwFunc(clsName + ' - ' + name + ' : boolean만 허용함.' + v)
                        this['_' + name] = v
                        if (option && option['callback']) option['callback'].call(this, v)
                    }
                }
                break
            case 'number' :
                if (option) {
                    var min = option['min']
                    var max = option['max']
                    if (option.hasOwnProperty('min') && option.hasOwnProperty('max')) {
                        result = {
                            get: function () {
                                return this['_' + name];
                            },
                            set: function (v) {
                                if (typeof v != 'number') RedGLUtil.throwFunc(clsName + ' - ' + name + ' : 숫자만 허용함.', '입력값 : ' + v)
                                if (v < min) v = min;
                                if (v > max) v = max;
                                this['_' + name] = v
                                if (option && option['callback']) option['callback'].call(this, v)
                            }
                        }
                    } else {
                        if (option.hasOwnProperty('min')) {
                            result = {
                                get: function () {
                                    return this['_' + name];
                                },
                                set: function (v) {
                                    if (typeof v != 'number') RedGLUtil.throwFunc(clsName + ' - ' + name + ' : 숫자만 허용함.', '입력값 : ' + v)
                                    if (v < min) v = min;
                                    this['_' + name] = v
                                    if (option && option['callback']) option['callback'].call(this, v)
                                }
                            }
                        } else if (option.hasOwnProperty('max')) {
                            result = {
                                get: function () {
                                    return this['_' + name];
                                },
                                set: function (v) {
                                    if (typeof v != 'number') RedGLUtil.throwFunc(clsName + ' - ' + name + ' : 숫자만 허용함.', '입력값 : ' + v)
                                    if (v > max) v = max;
                                    this['_' + name] = v
                                    if (option && option['callback']) option['callback'].call(this, v)
                                }
                            }
                        }
                    }
                } else {
                    result = {
                        get: function () {
                            return this['_' + name];
                        },
                        set: function (v) {
                            if (typeof v != 'number') RedGLUtil.throwFunc(clsName + ' - ' + name + ' : 숫자만 허용함.', '입력값 : ' + v)
                            this['_' + name] = v
                        }
                    }
                }
                break
            case 'sampler2D' :
                samplerTypeKey = 'RedBaseTexture';
                break
            case 'samplerCube' :
                samplerTypeKey = 'RedBitmapCubeTexture';
                break
            case 'samplerVideo' :
                samplerTypeKey = 'RedVideoTexture';
                break
            default :
                RedGLUtil.throwFunc(name + ' - ' + 'type : ' + type + ' / ' + name + ' : 정의할수없는 타입입니다.')
                break
        }
        if (samplerTypeKey) {
            var samplerCls = window[samplerTypeKey]
            // console.log(samplerTypeKey, samplerCls)
            if (option && option['essential']) {
                result = {
                    get: function () {
                        return this['_' + name];
                    },
                    set: function (v) {
                        if (samplerCls == RedBitmapCubeTexture) {
                            if (!(v instanceof samplerCls)) RedGLUtil.throwFunc(clsName + ' - ' + name + ' : ' + samplerTypeKey + ' Instance만 허용.', '입력값 : ' + v)
                        } else {
                            if (v instanceof RedBitmapCubeTexture || !(v instanceof samplerCls)) RedGLUtil.throwFunc(clsName + ' - ' + name + ' : ' + samplerTypeKey + ' Instance만 허용.', '입력값 : ' + v)
                        }
                        this['_' + name] = v
                        if (option && option['callback']) option['callback'].call(this)
                    }
                }
            } else {
                result = {
                    get: function () {
                        return this['_' + name];
                    },
                    set: function (v) {
                        if (v) {
                            if (samplerCls == RedBitmapCubeTexture) {
                                if (!(v instanceof samplerCls)) RedGLUtil.throwFunc(clsName + ' - ' + name + ' : ' + samplerTypeKey + ' Instance만 허용.', '입력값 : ' + v)
                            } else {
                                if (v instanceof RedBitmapCubeTexture || !(v instanceof samplerCls)) RedGLUtil.throwFunc(clsName + ' - ' + name + ' : ' + samplerTypeKey + ' Instance만 허용.', '입력값 : ' + v)
                            }
                        }
                        this['_' + name] = v
                        if (option && option['callback']) option['callback'].call(this)
                    }
                }
            }
        }
        targetObject['_' + name] = null
        Object.defineProperty(targetObject, name, result)
    }
    /**DOC:
     {
	     code : 'STATIC METHOD',
		 title :`RedDefinePropertyInfo.definePrototype`,
		 description : `
			 prototype Property 선언기
		 `,
		 params : {
		    clsName : [
		        {type : 'String'},
		        '클래스 명 입력'
		    ],
		    name : [
		        {type : 'String'},
		        '선언할 프로퍼티 명 입력'
		    ],
		    type : [
		        {type : 'String'},
		        'hex, boolean, number, sampler2D, samplerCube, samplerVideo 사용가능'
		    ],
		    option : [
	            {type : 'Object'},
	            '타입별 옵션 정의 가능',
	            //TODO: 추후 예제포함 정리해야함
		    ]
		 },
		 return : 'void',
		 example : `
		    window['Test'] = function(){};
		    RedDefinePropertyInfo.definePrototype(
                'Test',
                'power',
                'number',
                {
                    min: 0,
                    callback: function(v){
                        console.log(v); // 설정후 추가 행위가 필요할때 사용
                    }
                }
            );
		 `
	 }
     :DOC*/
    RedDefinePropertyInfo['definePrototype'] = function (clsName, name, type, option) {
        maker(window[clsName]['prototype'], clsName, name, type, option)
    };
    Object.freeze(RedDefinePropertyInfo);
})();

"use strict";
var RedGLDetect;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedGLDetect`,
		 description : `
			 GL과 관련된 값들을 디텍팅.
		 `,
		 params : {
		    gl : [
		        {type:'WebGL Context'}
		    ]
		 },
		 return : 'RedGLDetect Instance'
	 }
     :DOC*/
    RedGLDetect = function (redGL) {
        if (!(this instanceof RedGLDetect)) return new RedGLDetect(redGL);
        var checkList, i, k, tKey, tList;
        var self = this;
        var gl = redGL.gl
        checkList = {
            basic: [
                'VENDOR',
                'VERSION',
                'SHADING_LANGUAGE_VERSION',
                'RENDERER'
            ],
            frameBuffer: [
                // 'MAX_COLOR_ATTACHMENTS',
                'MAX_RENDERBUFFER_SIZE',
                'MAX_VIEWPORT_DIMS',
                'RED_BITS',
                'GREEN_BITS',
                'BLUE_BITS',
                'ALPHA_BITS',
                'DEPTH_BITS',
                'STENCIL_BITS'
            ],
            vertexShader: [
                'MAX_VERTEX_ATTRIBS',
                'MAX_VARYING_VECTORS',
                'MAX_VERTEX_UNIFORM_VECTORS'
            ],
            fragmentShader: [
                'MAX_FRAGMENT_UNIFORM_VECTORS'
            ],
            texture: [
                'MAX_TEXTURE_SIZE',
                'MAX_CUBE_MAP_TEXTURE_SIZE',
                'MAX_COMBINED_TEXTURE_IMAGE_UNITS',
                'MAX_TEXTURE_IMAGE_UNITS',
                'MAX_VERTEX_TEXTURE_IMAGE_UNITS'
            ]
        }
        for (k in  checkList) {
            tList = checkList[k]
            i = tList.length;
            this[k] = {};
            while (i--) this[k][tKey = tList[i]] = gl.getParameter(gl[tKey]);
        }
        this['BROWSER_INFO'] = RedGLDetect.getBrowserInfo();
        requestAnimationFrame(function(){
            var canvas = document.createElement('canvas')
            var ctx = canvas.getContext('2d')
            canvas.width = 10
            canvas.height = 20
            ctx.fillStyle = 'red'
            ctx.fillRect(0, 0, 10, 10)
            ctx.fillStyle = 'blue'
            ctx.fillRect(0, 10, 10, 10)
            canvas.style.cssText = 'position:fixed;top:0px;left:0px'
            // document.body.appendChild(canvas)
            var tTexture  = RedBitmapTexture(redGL,canvas)

            var fb = gl.createFramebuffer();
            gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tTexture.webglTexture, 0);
            var pixels = new Uint8Array(1 * 1 * 4);
            gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixels)
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            self['ableCanvasSourceFlipYonTexture'] = pixels[0]==255
            self['BROWSER_INFO']['ableCanvasSourceFlipYonTexture']  = pixels[0]==255
            console.log('test', pixels)
        })

    };
    /**DOC:
     {
		 code : 'PROPERTY',
		 title :`basic`,
		 description : `기본 디텍팅 값`,
		 return : 'Object'
	 }
     :DOC*/
    /**DOC:
     {
		 code : 'PROPERTY',
		 title :`frameBuffer`,
		 description : `frameBuffer 관련 디텍팅 값`,
		 return : 'Object'
	 }
     :DOC*/
    /**DOC:
     {
		 code : 'PROPERTY',
		 title :`vertexShader`,
		 description : `vertexShader 관련 디텍팅 값`,
		 return : 'Object'
	 }
     :DOC*/
    /**DOC:
     {
		 code : 'PROPERTY',
		 title :`fragmentShader`,
		 description : `fragmentShader 관련 디텍팅 값`,
		 return : 'Object'
	 }
     :DOC*/
    /**DOC:
     {
		 code : 'PROPERTY',
		 title :`texture`,
		 description : `texture 관련 디텍팅 값`,
		 return : 'Object'
	 }
     :DOC*/


    RedGLDetect.BROWSER_INFO = {}
    RedGLDetect.getBrowserInfo = function () {
        var result = RedGLDetect['BROWSER_INFO']
        var navi = window['navigator'],
            agent = navi.userAgent.toLowerCase(),
            platform = navi.platform.toLowerCase(),
            app = navi.appVersion.toLowerCase(),
            device = 'pc',
            isMobile = 0,
            browser, bv, os, osv,
            i, t0,
            ie = function () {
                if (agent.indexOf('edge') > -1) {
                    if (agent.indexOf('iemobile') > -1) os = 'winMobile';
                    return browser = 'edge', bv = (/edge\/([\d]+)/.exec(agent)[1]);
                } else {
                    if (agent.indexOf('msie') < 0 && agent.indexOf('trident') < 0) return;
                    if (agent.indexOf('iemobile') > -1) os = 'winMobile';
                    return browser = 'ie', bv = agent.indexOf('msie 7') > -1 && agent.indexOf('trident') > -1 ? -1 : agent.indexOf('msie') < 0 ? 11 : parseFloat(/msie ([\d]+)/.exec(agent)[1]);
                }

            },
            whale = function () {
                return agent.indexOf('whale') < 0 ? 0 : (bv = parseFloat(/whale\/([\d]+)/.exec(agent)[1]), browser = 'whale')
            },
            chrome = function () {
                if (agent.indexOf(i = 'chrome') < 0 && agent.indexOf(i = 'crios') < 0) return;
                return browser = 'chrome', bv = parseFloat((i == 'chrome' ? /chrome\/([\d]+)/ : /crios\/([\d]+)/).exec(agent)[1]);
            },
            firefox = function () {
                return agent.indexOf('firefox') < 0 ? 0 : (browser = 'firefox', bv = parseFloat(/firefox\/([\d]+)/.exec(agent)[1]))
            },
            safari = function () {
                return agent.indexOf('safari') < 0 ? 0 : (browser = 'safari', bv = parseFloat(/safari\/([\d]+)/.exec(agent)[1]))
            },
            opera = function () {
                var i;
                return (agent.indexOf(i = 'opera') < 0 && agent.indexOf(i = 'opr') < 0) ? 0 : (browser = 'opera', bv = (i == 'opera') ? parseFloat(/version\/([\d]+)/.exec(agent)[1]) : parseFloat(/opr\/([\d]+)/.exec(agent)[1]));
            },
            naver = function () {
                return agent.indexOf('naver') < 0 ? 0 : browser = 'naver'
            };
        if (!result) result = {};
        if (agent.indexOf('android') > -1) {
            browser = os = 'android',
                device = agent.indexOf('mobile') == -1 ? (browser += 'Tablet', 'tablet') : 'mobile',
                osv = (i = /android ([\d.]+)/.exec(agent)) ? (i = i[1].split('.'), parseFloat(i[0] + '.' + i[1])) : 0,
                isMobile = 1,
            whale() || naver() || opera() || chrome() || firefox() || (bv = i = /safari\/([\d.]+)/.exec(agent) ? parseFloat(i[1]) : 0);
        } else if (agent.indexOf(i = 'ipad') > -1 || agent.indexOf(i = 'iphone') > -1) {
            device = i == 'ipad' ? 'tablet' : 'mobile',
                browser = os = i,
                osv = (i = /os ([\d_]+)/.exec(agent)) ? (i = i[1].split('_'), parseFloat(i[0] + '.' + i[1])) : 0,
                isMobile = 1,
            whale() || naver() || opera() || chrome() || firefox() || (bv = (i = /mobile\/([\S]+)/.exec(agent)) ? parseFloat(i[1]) : 0);
        } else if (platform.indexOf('win') > -1) {
            for (i in t0 = {
                '5.1': 'xp',
                '6.0': 'vista',
                '6.1': '7',
                '6.2': '8',
                '6.3': '8.1',
                '10.0': '10'
            }) {
                if (agent.indexOf('windows nt ' + i) > -1) {
                    osv = t0[i];
                    break;
                }
            }
            os = 'win', ie() || whale() || opera() || chrome() || firefox() || safari();
        } else if (platform.indexOf('mac') > -1) {
            os = 'mac',
                i = /os x ([\d._]+)/.exec(agent)[1].replace('_', '.').split('.'),
                osv = parseFloat(i[0] + '.' + i[1]), whale() || opera() || chrome() || firefox() || safari();
        } else os = app.indexOf('x11') > -1 ? 'unix' : app.indexOf('linux') > -1 ? 'linux' : 0, whale() || chrome() || firefox();
        for (i in t0 = {
            device: device,
            isMobile: isMobile,
            browser: browser,
            browserVer: bv,
            os: os,
            osVer: osv,
            //root:document.body.scrollHeight ? document.body : document.documentElement,
            down: isMobile ? 'touchstart' : 'mousedown',
            move: isMobile ? 'touchmove' : 'mousemove',
            up: isMobile ? 'touchend' : 'mouseup',
            click: 'click',
            over: 'mouseover',
            out: 'mouseout'
        })
            if (t0.hasOwnProperty(i)) result[i] = t0[i];

        if (window['OffscreenCanvas']) {
            var t0 = new window['OffscreenCanvas'](2, 2)
            try {
                t0.getContext('2d')
            } catch (e) {
                window['OffscreenCanvas'] = null
            }
        }
        return result
    }
    Object.freeze(RedGLDetect);
})();

"use strict";
var RedGLUtil;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedGLUtil`,
		 description : `
			 이것저것모음
		 `,
		 return : 'void'
	 }
     :DOC*/
    RedGLUtil = {
        /**DOC:
         {
			 code : 'STATIC METHOD',
			 title :`RedGLUtil.throwFunc`,
			 description : `
				 에러생성기
			 `,
			 return : 'void'
		 }
         :DOC*/
        throwFunc: function () {
            throw 'RedGL Error : ' + Array.prototype.slice.call(arguments).join(' ')
        },
        /**DOC:
         {
			 code : 'STATIC METHOD',
			 title :`RedGLUtil.hexToRGB_ZeroToOne`,
			 description : `
				 hex값을 RGB로 변환 (0 ~ 1로 변환함)
			 `,
			 params : {
				 hex : [
					 {type : 'hex'}
				 ]
			 },
			 example : `
				 RedGLUtil.hexToRGB_ZeroToOne('#fff') // [1,1,1]
			 `,
			 return : 'Array'
		 }
         :DOC*/
        hexToRGB_ZeroToOne: function (hex) {
            var t0, t1;
            if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
                t1 = [];
                t0 = hex.substring(1).split('');
                if (t0.length == 3) t0 = [t0[0], t0[0], t0[1], t0[1], t0[2], t0[2]];
                t0 = '0x' + t0.join('');
                t1[0] = ((t0 >> 16) & 255) / 255;
                t1[1] = ((t0 >> 8) & 255) / 255;
                t1[2] = (t0 & 255) / 255;
                return t1
            } else RedGLUtil.throwFunc('RedGLUtil.hexToRGB_ZeroToOne : 잘못된 hex값입니다.', hex)
        },
        /**DOC:
         {
			 code : 'STATIC METHOD',
			 title :`RedGLUtil.rgb2hex`,
			 description : `
				 255, 255, 255 형식의 RGB를 hex로 변환
			 `,
			 params : {
				 red : [ {type : 'Number'} ],
				 green : [ {type : 'Number'} ],
				 blue : [ {type : 'Number'} ]
			 },
			 example : `
				 RedGLUtil.rgb2hex(255,255,255) // #ffffff
			 `,
			 return : 'hex'
		 }
         :DOC*/
        rgb2hex: function (red, green, blue) {
            var rgb = blue | (green << 8) | (red << 16);
            return '#' + (0x1000000 + rgb).toString(16).slice(1)
        },
        /**DOC:
         {
			 code : 'STATIC METHOD',
			 title :`RedGLUtil.regHex`,
			 description : `
				 입력값이 올바른 hex 형태인지 반환
			 `,
			 params : {
				 hex : [ {type : 'hex'} ]
			 },
			 example : `
				 RedGLUtil.regHex('#fff'); // true
				 RedGLUtil.regHex('#ffffff'); // true
				 RedGLUtil.regHex('~~'); // false
			 `,
			 return : 'hex'
		 }
         :DOC*/
        regHex: (function () {
            var reg = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
            return function (hex) {
                return reg.test(hex);
            }
        })(),
        /**DOC:
         {
			 code : 'STATIC METHOD',
			 title :`RedGLUtil.getStrFromComment`,
			 description : `
				 문자열중 멀티 라인 코멘트 사이값을 반환함.
				 프로그램 생성기에서 사용.
			 `,
			 params : {
				 source : [
					 {type : 'String'}
				 ]
			 },
			 return : 'String'
		 }
         :DOC*/
        getStrFromComment: (function () {
            var t0;
            return function (source) {
                if (typeof source != 'string') RedGLUtil.throwFunc('getStrFromComment : 해석할 값은 문자열만 가능', source)
                t0 = source.replace('@preserve', '').toString().trim().match(/(\/\*)[\s\S]+(\*\/)/g);
                if (t0) return t0[0].replace(/\/\*|\*\//g, '').trim();
                else RedGLUtil.throwFunc('getStrFromComment : 해석할 불가능한 값', source)
            }
        })(),
        /**DOC:
         {
			 code : 'STATIC METHOD',
			 title :`RedGLUtil.isPowerOf2`,
			 description : `
				 2n 값인지 판단
			 `,
			 params : {
				 v : [
					 {type : 'Number'}
				 ]
			 },
			 example : `
				 RedGLUtil.isPowerOf2(2); // true
				 RedGLUtil.isPowerOf2(4); // true
				 RedGLUtil.isPowerOf2(5); // false
			 `,
			 return : 'Boolean'
		 }
         :DOC*/
        isPowerOf2: function (v) {
            return (v & (v - 1)) == 0;
        },
        /**DOC:
         {
			 code : 'STATIC METHOD',
			 title :`RedGLUtil.nextHighestPowerOfTwo`,
			 description : `
				 입력된 값을 기준으로 다음 2n 값을 구함.
				 입력된 값이 2n인 경우 그대로 반환.
			 `,
			 params : {
				 v : [
					 {type : 'Number'}
				 ]
			 },
			 example : `
				 RedGLUtil.nextHighestPowerOfTwo(2); // 2
				 RedGLUtil.nextHighestPowerOfTwo(4); // 4
				 RedGLUtil.nextHighestPowerOfTwo(5); // 8
			 `,
			 return : 'Number'
		 }
         :DOC*/
        nextHighestPowerOfTwo: (function () {
            var i;
            return function (v) {
                --v;
                for (i = 1; i < 32; i <<= 1) v = v | v >> i;
                return v + 1;
            }
        })(),
        /**DOC:
         {
			 code : 'STATIC METHOD',
			 title :`RedGLUtil.makePowerOf2Source`,
			 description : `
				 입력된 소스를 기반으로 2n 이미지를 만듬.
				 시스템에서 사용함.
			 `
		 }
         :DOC*/
        makePowerOf2Source: (function () {
            var tW, tH;
            var MAX_TEXTURE_SIZE
            return function (gl, source, maxTextureSize) {
                MAX_TEXTURE_SIZE = maxTextureSize
                if (!RedGLUtil.isPowerOf2(source.width) || !RedGLUtil.isPowerOf2(source.height)) {
                    tW = RedGLUtil.nextHighestPowerOfTwo(source.width);
                    tH = RedGLUtil.nextHighestPowerOfTwo(source.height);
                    if (tW > MAX_TEXTURE_SIZE) tW = MAX_TEXTURE_SIZE;
                    if (tH > MAX_TEXTURE_SIZE) tH = MAX_TEXTURE_SIZE;
                    var canvas = window['OffscreenCanvas'] ? new OffscreenCanvas(tW, tH) : document.createElement('canvas');
                    var ctx = canvas.getContext("2d");

                    console.log('캔버스 엘리먼트에 대한 리사이즈용캔버스생성', canvas)
                    if (!window['OffscreenCanvas']) {
                        canvas.width = tW;
                        canvas.height = tH;
                    }

                    ctx.drawImage(source, 0, 0, tW, tH);

                    console.log(canvas);
                    return window['OffscreenCanvas'] ? canvas.transferToImageBitmap() : canvas;
                } else return source
            }
        })(),
        /**DOC:
         {
			 code : 'STATIC METHOD',
			 title :`RedGLUtil.calculateNormals`,
			 description : `
				 버텍스 배열과 인덱스 배열을 기반으로 노말 배열을 계산함.
				 적용은 알아서 해야함 -_-;; 계산만해줌
			 `,
			 params : {
				 vertexArray : [
					 {type : 'Array'}
				 ],
				 indexArray : [
					 {type : 'Array'}
				 ]
			 },
			 return : 'Array'
		 }
         :DOC*/
        calculateNormals: function (vertexArray, indexArray) {
            //TODO: 이함수 정리
            var i, j;
            var x = 0;
            var y = 1;
            var z = 2;
            var result = [];
            for (i = 0; i < vertexArray.length; i = i + 3) {
                //for each vertex, initialize normal x, normal y, normal z
                result[i + x] = 0.0;
                result[i + y] = 0.0;
                result[i + z] = 0.0;
            }
            for (i = 0; i < indexArray.length; i = i + 3) { //we work on triads of vertices to calculate normals so i = i+3 (i = indices index)
                var v1 = [];
                var v2 = [];
                var normal = [];
                var index0, index1, index2, indexJ;
                index0 = 3 * indexArray[i];
                index1 = 3 * indexArray[i + 1];
                index2 = 3 * indexArray[i + 2];
                //p2 - p1
                v1[x] = vertexArray[index2 + x] - vertexArray[index1 + x];
                v1[y] = vertexArray[index2 + y] - vertexArray[index1 + y];
                v1[z] = vertexArray[index2 + z] - vertexArray[index1 + z];
                //p0 - p1
                v2[x] = vertexArray[index0 + x] - vertexArray[index1 + x];
                v2[y] = vertexArray[index0 + y] - vertexArray[index1 + y];
                v2[z] = vertexArray[index0 + z] - vertexArray[index1 + z];
                //cross product by Sarrus Rule
                normal[x] = v1[y] * v2[z] - v1[z] * v2[y];
                normal[y] = v1[z] * v2[x] - v1[x] * v2[z];
                normal[z] = v1[x] * v2[y] - v1[y] * v2[x];
                for (j = 0; j < 3; j++) { //update the normals of that triangle: sum of vectors
                    indexJ = 3 * indexArray[i + j];
                    result[indexJ + x] = result[indexJ + x] + normal[x];
                    result[indexJ + y] = result[indexJ + y] + normal[y];
                    result[indexJ + z] = result[indexJ + z] + normal[z];
                }
            }
            //normalize the result
            for (i = 0; i < vertexArray.length; i = i + 3) { //the increment here is because each vertex occurs with an offset of 3 in the array (due to x, y, z contiguous values)
                var nn = [];
                nn[x] = result[i + x];
                nn[y] = result[i + y];
                nn[z] = result[i + z];
                var len = Math.sqrt((nn[x] * nn[x]) + (nn[y] * nn[y]) + (nn[z] * nn[z]));
                if (len == 0) len = 1.0;
                nn[x] = nn[x] / len;
                nn[y] = nn[y] / len;
                nn[z] = nn[z] / len;
                result[i + x] = nn[x];
                result[i + y] = nn[y];
                result[i + z] = nn[z];
            }
            return result;
        },
        /**DOC:
         {
			 code : 'STATIC METHOD',
			 title :`RedGLUtil.clamp`,
			 description : `
				 clamp
			 `,
			 params : {
				 value : [
					 {type : 'Number'}
				 ],
				 min : [
					 {type : 'Number'}
				 ],
				 max : [
					 {type : 'Number'}
				 ]
			 },
			 return : 'Number'
		 }
         :DOC*/
        clamp: function (value, min, max) {
            return Math.max(min, Math.min(max, value));
        },
        /**DOC:
         {
			 code : 'STATIC METHOD',
			 title :`RedGLUtil.quaternionToRotationMat4`,
			 description : `
				 quaternionToRotationMat4
				 doc 작성해야함
			 `
		 }
         :DOC*/
        quaternionToRotationMat4: function (q, m) {
            var x = q[0];
            var y = q[1];
            var z = q[2];
            var w = q[3];
            var x2 = x + x, y2 = y + y, z2 = z + z;
            var xx = x * x2, xy = x * y2, xz = x * z2;
            var yy = y * y2, yz = y * z2, zz = z * z2;
            var wx = w * x2, wy = w * y2, wz = w * z2;
            m[0] = 1 - (yy + zz);
            m[4] = xy - wz;
            m[8] = xz + wy;
            m[1] = xy + wz;
            m[5] = 1 - (xx + zz);
            m[9] = yz - wx;
            m[2] = xz - wy;
            m[6] = yz + wx;
            m[10] = 1 - (xx + yy);
            // last column
            m[3] = 0;
            m[7] = 0;
            m[11] = 0;
            // bottom row
            m[12] = 0;
            m[13] = 0;
            m[14] = 0;
            m[15] = 1;
            return m;
        },
        /**DOC:
         {
			 code : 'STATIC METHOD',
			 title :`RedGLUtil.quaternionToRotation`,
			 description : `
				 quaternionToRotation
				 doc 작성해야함
			 `
		 }
         :DOC*/
        quaternionToRotation: function (q, order) {
            var mat = []
            var x = q[0];
            var y = q[1];
            var z = q[2];
            var w = q[3];
            var x2 = x + x, y2 = y + y, z2 = z + z;
            var xx = x * x2, xy = x * y2, xz = x * z2;
            var yy = y * y2, yz = y * z2, zz = z * z2;
            var wx = w * x2, wy = w * y2, wz = w * z2;
            mat[0] = 1 - (yy + zz);
            mat[4] = xy - wz;
            mat[8] = xz + wy;
            mat[1] = xy + wz;
            mat[5] = 1 - (xx + zz);
            mat[9] = yz - wx;
            mat[2] = xz - wy;
            mat[6] = yz + wx;
            mat[10] = 1 - (xx + yy);
            // last column
            mat[3] = 0;
            mat[7] = 0;
            mat[11] = 0;
            // bottom row
            mat[12] = 0;
            mat[13] = 0;
            mat[14] = 0;
            mat[15] = 1;

            var dest = [0, 0, 0];
            order = order || 'XYZ'
            // Assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
            var m11 = mat[0], m12 = mat[4], m13 = mat[8];
            var m21 = mat[1], m22 = mat[5], m23 = mat[9];
            var m31 = mat[2], m32 = mat[6], m33 = mat[10];
            if (order === 'XYZ') {
                dest[1] = Math.asin(RedGLUtil.clamp(m13, -1, 1));
                if (Math.abs(m13) < 0.99999) {
                    dest[0] = Math.atan2(-m23, m33);
                    dest[2] = Math.atan2(-m12, m11);
                } else {
                    dest[0] = Math.atan2(m32, m22);
                    dest[2] = 0;
                }
            } else if (order === 'YXZ') {
                dest[0] = Math.asin(-RedGLUtil.clamp(m23, -1, 1));
                if (Math.abs(m23) < 0.99999) {
                    dest[1] = Math.atan2(m13, m33);
                    dest[2] = Math.atan2(m21, m22);
                } else {
                    dest[1] = Math.atan2(-m31, m11);
                    dest[2] = 0;
                }
            } else if (order === 'ZXY') {
                dest[0] = Math.asin(RedGLUtil.clamp(m32, -1, 1));
                if (Math.abs(m32) < 0.99999) {
                    dest[1] = Math.atan2(-m31, m33);
                    dest[2] = Math.atan2(-m12, m22);
                } else {
                    dest[1] = 0;
                    dest[2] = Math.atan2(m21, m11);
                }
            } else if (order === 'ZYX') {
                dest[1] = Math.asin(-RedGLUtil.clamp(m31, -1, 1));
                if (Math.abs(m31) < 0.99999) {
                    dest[0] = Math.atan2(m32, m33);
                    dest[2] = Math.atan2(m21, m11);
                } else {
                    dest[0] = 0;
                    dest[2] = Math.atan2(-m12, m22);
                }
            } else if (order === 'YZX') {
                dest[2] = Math.asin(RedGLUtil.clamp(m21, -1, 1));
                if (Math.abs(m21) < 0.99999) {
                    dest[0] = Math.atan2(-m23, m22);
                    dest[1] = Math.atan2(-m31, m11);
                } else {
                    dest[0] = 0;
                    dest[1] = Math.atan2(m13, m33);
                }
            } else if (order === 'XZY') {
                dest[2] = Math.asin(-RedGLUtil.clamp(m12, -1, 1));
                if (Math.abs(m12) < 0.99999) {
                    dest[0] = Math.atan2(m32, m22);
                    dest[1] = Math.atan2(m13, m11);
                } else {
                    dest[0] = Math.atan2(-m23, m33);
                    dest[1] = 0;
                }
            }
            return dest
        },
        /**DOC:
         {
			 code : 'STATIC METHOD',
			 title :`RedGLUtil.mat4ToEuler`,
			 description : `
				 mat4ToEuler
				 doc 작성해야함
			 `
		 }
         :DOC*/
        mat4ToEuler: function (mat, dest, order) {
            dest = dest || [0, 0, 0];
            order = order || 'XYZ'
            // Assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
            var m11 = mat[0], m12 = mat[4], m13 = mat[8];
            var m21 = mat[1], m22 = mat[5], m23 = mat[9];
            var m31 = mat[2], m32 = mat[6], m33 = mat[10];
            if (order === 'XYZ') {
                dest[1] = Math.asin(RedGLUtil.clamp(m13, -1, 1));
                if (Math.abs(m13) < 0.99999) {
                    dest[0] = Math.atan2(-m23, m33);
                    dest[2] = Math.atan2(-m12, m11);
                } else {
                    dest[0] = Math.atan2(m32, m22);
                    dest[2] = 0;
                }
            } else if (order === 'YXZ') {
                dest[0] = Math.asin(-RedGLUtil.clamp(m23, -1, 1));
                if (Math.abs(m23) < 0.99999) {
                    dest[1] = Math.atan2(m13, m33);
                    dest[2] = Math.atan2(m21, m22);
                } else {
                    dest[1] = Math.atan2(-m31, m11);
                    dest[2] = 0;
                }
            } else if (order === 'ZXY') {
                dest[0] = Math.asin(RedGLUtil.clamp(m32, -1, 1));
                if (Math.abs(m32) < 0.99999) {
                    dest[1] = Math.atan2(-m31, m33);
                    dest[2] = Math.atan2(-m12, m22);
                } else {
                    dest[1] = 0;
                    dest[2] = Math.atan2(m21, m11);
                }
            } else if (order === 'ZYX') {
                dest[1] = Math.asin(-RedGLUtil.clamp(m31, -1, 1));
                if (Math.abs(m31) < 0.99999) {
                    dest[0] = Math.atan2(m32, m33);
                    dest[2] = Math.atan2(m21, m11);
                } else {
                    dest[0] = 0;
                    dest[2] = Math.atan2(-m12, m22);
                }
            } else if (order === 'YZX') {
                dest[2] = Math.asin(RedGLUtil.clamp(m21, -1, 1));
                if (Math.abs(m21) < 0.99999) {
                    dest[0] = Math.atan2(-m23, m22);
                    dest[1] = Math.atan2(-m31, m11);
                } else {
                    dest[0] = 0;
                    dest[1] = Math.atan2(m13, m33);
                }
            } else if (order === 'XZY') {
                dest[2] = Math.asin(-RedGLUtil.clamp(m12, -1, 1));
                if (Math.abs(m12) < 0.99999) {
                    dest[0] = Math.atan2(m32, m22);
                    dest[1] = Math.atan2(m13, m11);
                } else {
                    dest[0] = Math.atan2(-m23, m33);
                    dest[1] = 0;
                }
            }
            return dest;
        }
    };
    Object.freeze(RedGLUtil);
})();
"use strict";
var RedGL;
(function () {
    var getGL;
    var setEmptyTextures;
    var doNotPrepareProgram
    var _instanceList = []
    window.addEventListener('resize', function () {
        _instanceList.forEach(function (redGL) {
            redGL.setSize(redGL['_width'], redGL['_height'])
        })
    });
    /*
     gl 컨텍스트 찾기
     */
    getGL = (function () {
        var CHECK_CONTEXT_LIST, tCheckContextList; // 체크할 리스트
        var OPTION; // 기본초기화 옵션 리스트
        var tContext, tKey, i;
        var initOption;
        var EXT_KEY_LIST;
        OPTION = {
            alpha: false,
            depth: true,
            stencil: false,
            antialias: true,
            premultipliedAlpha: false,
            preserveDrawingBuffer: false,
            powerPreference: 'high-performance', // default, high-performance, low-power
            failIfMajorPerformanceCaveat: false
        };
        EXT_KEY_LIST = [
            'OES_element_index_uint',
            'OES_standard_derivatives',
            'EXT_texture_filter_anisotropic',
            'WEBGL_compressed_texture_s3tc',
            'WEBGL_debug_renderer_info'
        ];
        // CHECK_CONTEXT_LIST = 'webkit-3d,moz-webgl,3d,experimental-webgl,webgl,webgl2'.split(',');
        CHECK_CONTEXT_LIST = 'webkit-3d,moz-webgl,3d,experimental-webgl,webgl'.split(',');
        tCheckContextList = [];
        return function (canvas, option, targetContext) {
            initOption = JSON.parse(JSON.stringify(OPTION));
            if (option) for (i in option) initOption[i] = option[i];
            if (targetContext) {
                tCheckContextList.length = 0
                tCheckContextList.push(targetContext)
            } else tCheckContextList = CHECK_CONTEXT_LIST.concat();
            i = tCheckContextList.length;
            while (i--) {
                if (tContext = canvas.getContext(tKey = tCheckContextList[i], initOption)) {
                    tContext['glExtension'] = {};
                    EXT_KEY_LIST.forEach(function (extensionKey) {
                        tContext['glExtension'][extensionKey] = tContext.getExtension(extensionKey);
                        if (tContext['glExtension'][extensionKey] && extensionKey == 'WEBGL_debug_renderer_info') {
                            tContext['vendor'] = tContext.getParameter(tContext['glExtension'][extensionKey].UNMASKED_VENDOR_WEBGL);
                            tContext['renderer'] = tContext.getParameter(tContext['glExtension'][extensionKey].UNMASKED_RENDERER_WEBGL)
                        }
                        console.log('확장여부 ' + extensionKey + ' :', tContext['glExtension'][extensionKey])
                    });
                    tContext['version'] = tKey;
                    return tContext;
                }
            }
            return null;
        }
    })();
    setEmptyTextures = function (redGL, gl) {
        var i;
        var emptyTexture, emptyCubeTexture, src;
        i = redGL['detect']['texture']['MAX_COMBINED_TEXTURE_IMAGE_UNITS'];
        src = RedBaseTexture.EMPTY_BASE64;
        emptyTexture = RedBitmapTexture(redGL, src);
        emptyCubeTexture = RedBitmapCubeTexture(redGL, [src, src, src, src, src, src]);
        redGL['_datas']['emptyTexture'] = {
            '2d': emptyTexture,
            '3d': emptyCubeTexture
        };
        // 0번은 2D 텍스쳐 생성용공간
        // 1번은 3D 텍스쳐 생성용공간
        while (i--) {
            if (i == 1) {
                gl.activeTexture(gl.TEXTURE0 + 1);
                gl.bindTexture(gl.TEXTURE_CUBE_MAP, emptyCubeTexture['webglTexture']);
            } else {
                gl.activeTexture(gl.TEXTURE0 + i);
                gl.bindTexture(gl.TEXTURE_2D, emptyTexture['webglTexture']);
            }
        }
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedGL`,
		 description : `
			 RedGL Instance 생성자.
			 WebGL 초기화를 담당하며, 단일 월드(RedWorld Instance)를 소유한다.
		 `,
		 params : {
			 canvas : [
				 {type:'Canvas Element'}
			 ],
			 callback :[
				 {type:'Function'},
				 `컨텍스트 초기화이후 실행될 콜백`,
				 `리턴인자로 <b>true, false</b>를 반환한다`
			 ],
			 option : [
				 {type:'Object'},
				 `초기화 옵션을 지정한다.`,
				 `
                <code>
                // 초기값
                {
                    alpha: false,
                    depth: true,
                    stencil: false,
                    antialias: true,
                    premultipliedAlpha: false,
                    preserveDrawingBuffer: false,
                    powerPreference: 'default', // default, high-performance, low-power
                    failIfMajorPerformanceCaveat: false
                }
                </code>
				 `
			 ],
			 targetContextKey : [
			    {type:'String'},
			    `컨텍스트 키를 명시적으로 지정할 경우 사용`,
			    `입력하지 않을경우 <b>webkit-3d,moz-webgl,3d,experimental-webgl, webgl</b> 중에서 가장 높은 값으로 선택됨`
			 ]
		 },
	     demo : '../example/etc/RedGL.html',
		 example : `
            var canvas = document.createElement('canvas');
            document.body.appendChild(canvas);
            // 기초 초기화
            RedGL(
                canvas,
                function(v){
                    // 성공,실패에 따라 v값이 true or false.
                    if(v){
                        // 초기화 성공
                        console.log(this.detect); // 디텍팅정보
                        console.log(this.gl); // webGL context
                        console.log(this.renderScale); // 렌더스케일 (기본값 : 1)
                        this.setSize('100%', '100%'); // 사이즈 설정 : 숫자형, %형 둘다 허용
                    }else{
                        // 초기화실패
                    }
                }
            )
		 `,
		 return : 'RedGL Instance'
	 }
     :DOC*/
    RedGL = function (canvas, callback, option, targetContextKey) {
        if (!(this instanceof RedGL)) return new RedGL(canvas, callback, option, targetContextKey);
        canvas['tagName'] == 'CANVAS' || RedGLUtil.throwFunc('RedGL : Canvas Element만 허용');
        var tGL, self;
        self = this;
        this['_datas'] = {};
        this['_width'] = '100%';
        this['_height'] = '100%';
        this['_renderScale'] = 1;
        this['_viewRect'] = [0, 0, 0, 0];
        //
        this['_canvas'] = canvas;
        /**DOC:
         {
			 code : 'PROPERTY',
			 title :`gl`,
			 description : `
				 생성된 WebGL Context
			 `,
			 return : 'WebGL Context Instance'
		 }
         :DOC*/
        this['gl'] = tGL = getGL(canvas, option, targetContextKey);

        /**DOC:
         {
			 code : 'PROPERTY',
			 title :`detect`,
			 description : `
				 하드웨어 디텍팅 정보
			 `,
			 return : 'RedGLDetect Instance'
		 }
         :DOC*/
        if (tGL) this['detect'] = RedGLDetect(this);
        else return callback ? callback.call(self, tGL ? true : false) : 0;
        //
        this['_UUID'] = RedGL.makeUUID();
        /**DOC:
         {
			 title :`setSize`,
			 code: `METHOD`,
			 description : `
				 RedGL Instance의 Canvas 사이즈 설정
				 px, %단위만 입력가능.
			 `,
			 params : {
			    width : [
			        { type : 'Number or %' }
			    ],
			    height : [
			        { type : 'Number or %' }
			    ]
			 },
			 return : 'void'
		 }
         :DOC*/
        this['setSize'] = (function () {
            var W, H;
            var prevW, prevH;
            var ratio;
            var tCVS;
            var tW = new Uint32Array(2)
            var tH = new Uint32Array(2)
            prevW = 0, prevH = 0;
            return function (width, height, force) {
                if (width == undefined) RedGLUtil.throwFunc('RedGL setSize : width가 입력되지 않았습니다.');
                if (height == undefined) RedGLUtil.throwFunc('RedGL setSize : height가 입력되지 않았습니다.');
                W = this['_width'] = width;
                H = this['_height'] = height;
                if (window['HTMLCanvasElement']) {
                    if (typeof W != 'number') {
                        if (W.indexOf('%') > -1) W = (document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth) * parseFloat(W) / 100;
                        else RedGLUtil.throwFunc('RedGL setSize : width는 0이상의 숫자나 %만 허용.', W);
                    }
                    if (typeof H != 'number') {
                        if (H.indexOf('%') > -1) H = window.innerHeight * parseFloat(H) / 100;
                        else RedGLUtil.throwFunc('RedGL setSize : height는 0이상의 숫자나 %만 허용.', H);
                    }
                    ratio = window['devicePixelRatio'] || 1;
                    tCVS = this['_canvas'];
                    if (prevW != W || prevH != H || force) {
                        tCVS.width = W * ratio * this['_renderScale'];
                        tCVS.height = H * ratio * this['_renderScale'];
                        tCVS.style.width = W + 'px';
                        tCVS.style.height = H + 'px';
                        console.log('RedGL canvas setSize : ', this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
                        prevW = W;
                        prevH = H;
                    }
                    this['_viewRect'][2] = prevW;
                    this['_viewRect'][3] = prevH;
                    console.log("this['_viewRect']", this['_viewRect'])
                } else {
                    W = this['_width'] = width
                    H = this['_height'] = height
                    tW[0] = W * this['_renderScale']
                    tH[0] = H * this['_renderScale']
                    console.log('offscreen - RedGL canvas setSize : ', this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
                    this['_viewRect'][2] = W;
                    this['_viewRect'][3] = H
                }
            }
        })();

        if (RedSystemShaderCode['init']) RedSystemShaderCode.init(self);
        ///////////////////////////////////////
        setEmptyTextures(self, tGL); // 빈텍스쳐를 미리 체워둔다.
        _instanceList.push(self)
        requestAnimationFrame(function () {
            if (!doNotPrepareProgram) {
                // 무거운놈만 먼저 해둘까...
                RedPBRMaterial_System(self);
                RedStandardMaterial(self, self['_datas']['emptyTexture']['2d']);
                RedEnvironmentMaterial(self, null, self['_datas']['emptyTexture']['3d']);
            }
            ///////////////////////////////////////
            //

            self['_mouseEventInfo'] = {
                type: null,
                x: 0,
                y: 0
            };
            [RedGLDetect.BROWSER_INFO.move, RedGLDetect.BROWSER_INFO.down, RedGLDetect.BROWSER_INFO.up].forEach(function (v) {
                self['_canvas'].addEventListener(v, function (e) {
                    e.preventDefault()
                    if (RedGLDetect.BROWSER_INFO.isMobile) {
                        if (e.changedTouches[0]) {
                            self['_mouseEventInfo'] = {
                                type: e.type,
                                x: e.changedTouches[0].clientX * window.devicePixelRatio,
                                y: e.changedTouches[0].clientY * window.devicePixelRatio
                            }
                        }
                    }
                    else {
                        self['_mouseEventInfo'] = {
                            type: e.type,
                            x: e.x,
                            y: e.y
                        }
                    }
                }, false)
            });

            self.setSize(self['_width'], self['_height']); // 리사이즈를 초기에 한번 실행.
            callback ? callback.call(self, tGL ? true : false) : 0; // 콜백이 있으면 실행

            //
        });
        console.log(this)
    };
    /**DOC:
     {
		 code : 'STATIC METHOD',
		 title :`RedGL.makeUUID`,
		 description : `
			 UUID 생성기
		 `,
		 example : `
			 RedGL.makeUUID()
		 `,
		 return : 'int'
	 }
     :DOC*/
    RedGL['makeUUID'] = (function () {
        var UUID = 0;
        return function () {
            return UUID++
        }
    })();
    RedGL.prototype = {

    };
    /**DOC:
     {
		 title :`renderScale`,
		 code: `PROPERTY`,
		 description : `
			 렌더링시 사용할 적용할 렌더링 스케일.
			 기본값 : 1.
			 0이하일 경우 0.1로 세팅됨.
			 size 1024*768, renderScale 0.5 일경우 512 * 389로 렌더링 됨.
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedGL', 'renderScale', 'number', {
        'min': 0.1,
        'max': 1,
        'callback': function () {
            this.setSize(this['_width'], this['_height'], true);
        }
    });
    RedGL.setDoNotPrepareProgram = function () {
        doNotPrepareProgram = true
    }
    Object.freeze(RedGL);
})();
"use strict";
var RedBaseController;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedBaseController`,
		 description : `
			 RedBaseController 기저층
		 `,
		 return : 'RedBaseController instance'
	 }
     :DOC*/
    RedBaseController = function () {
    };
    RedBaseController.prototype = {
        update: function () {
            RedGLUtil.throwFunc('RedBaseController : update - 재정의 해서 써라')
        }
    };
    Object.freeze(RedBaseController);
})();
"use strict";
var RedImageLoader;
(function () {
    var base64toBlob = function (base64Data, contentType) {
        contentType = contentType || '';
        var sliceSize = 1024;
        var byteCharacters = atob(base64Data);
        var bytesLength = byteCharacters.length;
        var slicesCount = Math.ceil(bytesLength / sliceSize);
        var byteArrays = new Array(slicesCount);
        for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
            var begin = sliceIndex * sliceSize;
            var end = Math.min(begin + sliceSize, bytesLength);

            var bytes = new Array(end - begin);
            for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
                bytes[i] = byteCharacters[offset].charCodeAt(0);
            }
            byteArrays[sliceIndex] = new Uint8Array(bytes);
        }
        return new Blob(byteArrays, {type: contentType});
    }

    var makeImageBitmap = function (v, option) {
        return createImageBitmap(v, option ? option : {imageOrientation: 'none'})
    }
    var fileLoader = function (src, onLoader, onError, option) {

        var self = this
        var request = new XMLHttpRequest();
        var ended = false
        request.open("GET", src, true);
        request.responseType = "blob";
        request.onreadystatechange = function (e) {
            if (request.readyState == 4) {
                // console.log(request)
                // console.log(request.response)
                if (request.status === 200) {
                    makeImageBitmap(request.response, option ? option : {
                        imageOrientation: 'none'
                    }).then(function (v) {
                        v['src'] = src
                        self['source'] = v
                        if (self['_onLoad']) {
                            self['_onLoad'](request)
                            self['_onLoad'] = undefined
                            self['_onError'] = undefined
                        }
                        // console.log('fileLoader', v)
                        // console.log('성공!')
                    }).catch(function (v) {
                        console.log('에러!')
                        if (self['_onError']) {
                            self['_onError'](request)
                            self['_onLoad'] = undefined
                            self['_onError'] = undefined
                        }
                    })
                } else {
                    console.log('에러!')
                    if (self['_onError']) {
                        self['_onError'](request)
                        self['_onLoad'] = undefined
                        self['_onError'] = undefined
                    }


                }

            }
        }

        request.send();
    }
    RedImageLoader = function (src, onLoad, onError, option) {
        var self = this;
        if (!(this instanceof RedImageLoader)) return new RedImageLoader(src, onLoad, onError, option);
        if (typeof src != 'string') RedGLUtil.throwFunc('RedImageLoader : src는 문자열 만 허용.', '입력값 : ' + src);
        self['_src'] = src
        self['_onLoad'] = onLoad
        self['_onError'] = onError
        if (window && window['document'] ) {
            var img;
            var HD_onLoad, HD_onError, clearEvents;
            clearEvents = function (img) {
                img.removeEventListener('error', HD_onError);
                img.removeEventListener('load', HD_onLoad);
            };
            HD_onError = function (e) {
                clearEvents(this);
                if (self['_onError']) self['_onError'](e)
            };
            HD_onLoad = function (e) {
                clearEvents(this);
                self['source'] = img
                if (self['_onLoad']) self['_onLoad'](e)
            };
            img = new Image();
            img.crossOrigin = 'anonymous';
            img.src = src;
            img.addEventListener('error', HD_onError);
            img.addEventListener('load', HD_onLoad);
        } else {
            if (src.split(',').length == 2 && src.substr(0, 5) == 'data:') {
                makeImageBitmap(base64toBlob(src.split(',')[1], 'image/png'), option ? option : {
                    // imageOrientation: 'flipY'
                }).then(function (v) {
                    // console.log(v)
                    v['src'] = src
                    self['source'] = v
                    if (self['_onLoad']) {
                        self['_onLoad'](v)
                        self['_onLoad'] = undefined
                        self['_onError'] = undefined
                    }
                    // console.log('베이스이미지성공', v)

                });
            } else fileLoader.apply(self, [self['_src'], onLoad, onError, option])
        }

    }
    Object.freeze(RedImageLoader);
})();
"use strict";
var RedBaseTexture;
(function () {
    var nullImage;
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedBaseTexture`,
		 description : `
			 RedBaseTexture 기저층
		 `,
		 return : 'RedBaseTexture Instance'
	 }
     :DOC*/
    RedBaseTexture = function () {
    };
    /**DOC:
     {
		 code : 'CONST',
		 title :`EMPTY_BASE64`,
		 description : `
			 2 * 2 크기의 빈 base64 이미지
		 `,
		 return : 'data:image/png;base64~~~'
	 }
     :DOC*/
    RedBaseTexture.EMPTY_BASE64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzMxRDhBQzRFNUZFMTFFN0IxMDVGNEEzQjQ0RjAwRDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzMxRDhBQzVFNUZFMTFFN0IxMDVGNEEzQjQ0RjAwRDIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MzFEOEFDMkU1RkUxMUU3QjEwNUY0QTNCNDRGMDBEMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3MzFEOEFDM0U1RkUxMUU3QjEwNUY0QTNCNDRGMDBEMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuojYFUAAAAQSURBVHjaYvj//z8DQIABAAj8Av7bok0WAAAAAElFTkSuQmCC';
    nullImage = RedImageLoader(RedBaseTexture.EMPTY_BASE64);
    console.log('nullImage.source', nullImage)
    RedBaseTexture.prototype = {
        /**DOC:
         {
			 code : 'METHOD',
			 title :`setEmptyTexture`,
			 description : `
				 webglTexture 생성후 이미지 로딩전까지 안전한 텍스쳐 세팅할때 사용.
				 체크 무늬 텍스쳐를 생성함.
			 `,
			 params : {
			    gl : [{ type : 'RedGL' }],
		        texture : [{ type : 'WebGLTexture' }]
			 },
			 return : 'void'
		 }
         :DOC*/
        setEmptyTexture: (function () {
            var cubePixelData = new Uint8Array([0, 0, 0, 0])
            return function (gl, texture) {
                if (this instanceof RedBitmapCubeTexture) {
                    gl.activeTexture(gl.TEXTURE0);
                    gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
                    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
                    // gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
                    // console.log('nullImage.source',nullImage.source)
                    gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X, 0, gl.LUMINANCE, 2, 2, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, cubePixelData);
                    gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, gl.LUMINANCE, 2, 2, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, cubePixelData);
                    gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, gl.LUMINANCE, 2, 2, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, cubePixelData);
                    gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, gl.LUMINANCE, 2, 2, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, cubePixelData);
                    gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, gl.LUMINANCE, 2, 2, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, cubePixelData);
                    gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, gl.LUMINANCE, 2, 2, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, cubePixelData);
                    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
                    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
                    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 4);
                    gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
                } else {
                    gl.activeTexture(gl.TEXTURE0 + 0);
                    gl.bindTexture(gl.TEXTURE_2D, texture);
                    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
                    // gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
                    gl.texImage2D(
                        gl.TEXTURE_2D,
                        0, //level
                        gl.LUMINANCE, //internalFormat
                        2, //width
                        2, //height
                        0, //border
                        gl.LUMINANCE, //format
                        gl.UNSIGNED_BYTE, //type
                        new Uint8Array(
                            [
                                128, 64,
                                0, 192
                            ]
                        )
                    );
                    // 픽셀 플립 기본설정
                    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                    gl.generateMipmap(gl.TEXTURE_2D);
                    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 4);
                    gl.bindTexture(gl.TEXTURE_2D, null);
                }
            }
        })()
    };
    /**DOC:
     {
			 code : 'METHOD',
			 title :`_load`,
			 description : `
				 소스 로딩 매서드.
				 반드시 재정의 되어야함.
			 `,
			 return : 'void'
		 }
     :DOC*/
    RedBaseTexture.prototype['_load'] = function () {
        RedGLUtil.throwFunc('RedBaseTexture - _load : 반드시 재정의해야함')
    };
    /**DOC:
     {
			 code : 'PROPERTY',
			 title :`src`,
			 description : `
				 경로처리.
				 반드시 재정의 되어야함
			 `,
			 return : 'void'
		 }
     :DOC*/
    RedBaseTexture.prototype['src'] = function () {
        RedGLUtil.throwFunc('RedBaseTexture - src : 반드시 재정의해야함')
    };
    /**DOC:
     {
			 code : 'METHOD',
			 title :`dispose`,
			 description : `
				 텍스쳐 dispose
			 `,
			 return : 'void'
		 }
     :DOC*/
    RedBaseTexture.prototype['dispose'] = function () {
        if (this['webglTexture'] && this['_src'] != RedBaseTexture.EMPTY_BASE64) {
            this['webglTexture']['gl'].deleteTexture(this['webglTexture'])
            this['webglTexture'] = null
        }
    };
    Object.defineProperty(RedBaseTexture.prototype, 'callback', {
        get: function () {
            return this['_callback']
        },
        set: function (v) {
            if (v && typeof v != 'function') RedGLUtil.throwFunc('RedBaseTexture : callback은 함수만 허용.', '입력값 :', v);
            this['_callback'] = v;
        }
    });
    Object.freeze(RedBaseTexture);
})();
"use strict";
var RedBaseObject3D;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedBaseObject3D`,
		 description : `
			 RedBaseObject3D 기저층.
		 `,
		 return : 'RedBaseObject3D Instance'
	 }
     :DOC*/
    RedBaseObject3D = function () {
    };
    /**DOC:
     {
		 title :`RedBaseObject3D.build`,
		 code : 'STATIC METHOD',
		 description : `
			RedBaseObject3D가 가지고있는 속성을 해당 인스턴스에 복사하기위해사용.
		 `,
		 params : {
			 gl : [
				 {type : 'glContext' }
			 ]
		 },
		 example : `
		 var testMesh = function (redGL) {
			 var tGL;
			 tGL = redGL.gl;
			 RedBaseObject3D['build'].call(this, tGL)
		 }
		 `,
		 return : 'void'
	 }
     :DOC*/
    RedBaseObject3D['build'] = function (gl) {
        this['name'] = 'object3D_' + (RedGL.makeUUID() + 1)
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`useTransparentSort`,
			 description : `
				 투명도 소팅 여부
				 기본값 : false
			 `,
			 return : 'Boolean'
		 }
         :DOC*/
        this['useTransparentSort'] = false
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`useCullFace`,
			 description : `
				 컬링 사용여부
				 기본값 : true
			 `,
			 return : 'Boolean'
		 }
         :DOC*/
        this['useCullFace'] = true;
        /**DOC:
         {
             code : 'PROPERTY',
			 title :`cullFace`,
			 description : `
				 컬링 페이스 설정
				 기본값 : gl.BACK
			 `,
			 return : 'gl 상수'
		 }
         :DOC*/
        this['cullFace'] = gl.BACK;
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`useDepthMask`,
			 description : `
				 뎁스 테스트 사용여부
				 기본값 : true
			 `,
			 return : 'Boolean'
		 }
         :DOC*/
        this['useDepthMask'] = true;
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`useDepthTest`,
			 description : `
				 뎁스 테스트 사용여부
				 기본값 : true
			 `,
			 return : 'Boolean'
		 }
         :DOC*/
        this['useDepthTest'] = true;
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`depthTestFunc`,
			 description : `
				 뎁스 테스트 함수 설정
				 기본값 : gl.LEQUAL
			 `,
			 return : 'gl 상수'
		 }
         :DOC*/
        this['depthTestFunc'] = gl.LEQUAL;
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`useBlendMode`,
			 description : `
				 블렌드 모드 사용여부
				 기본값 : true
			 `,
			 return : 'Boolean'
		 }
         :DOC*/
        this['useBlendMode'] = true;
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`blendSrc`,
			 description : `
				 블렌드 소스값 factor
				 기본값 : gl.SRC_ALPHA
			 `,
			 return : 'gl 상수'
		 }
         :DOC*/
        this['blendSrc'] = gl.SRC_ALPHA;
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`blendDst`,
			 description : `
				 블렌드 목표값 factor
				 기본값 : gl.ONE_MINUS_SRC_ALPHA
			 `,
			 return : 'gl 상수'
		 }
         :DOC*/
        this['blendDst'] = gl.ONE_MINUS_SRC_ALPHA;
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`drawMode`,
			 description : `
				 기본값 : gl.TRIANGLES
				 drawCall시 적용한 드로잉 모드
			 `,
			 return : 'gl 상수'
		 }
         :DOC*/
        this['drawMode'] = gl.TRIANGLES;
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`pointSize`,
			 description : `
				 기본값 : 1
				 gl.POINTS로 그릴경우 반영될 포인트 사이즈.
			 `,
			 return : 'Number'
		 }
         :DOC*/
        this['pointSize'] = 1;
        this['x'] = this['y'] = this['z'] = 0;
        this['rotationX'] = this['rotationY'] = this['rotationZ'] = 0;
        this['scaleX'] = this['scaleY'] = this['scaleZ'] = 1;
        /**DOC:
         {
		    code : 'PROPERTY',
			title :`matrix`,
			description : `
			matrix 자동계산여부
			`,
			return : 'mat4'
		 }
         :DOC*/
        this['autoUpdateMatrix'] = true;
        this['_renderAutoUpdateMatrix'] = true;
        /**DOC:
         {
		    code : 'PROPERTY',
			title :`matrix`,
			description : `
			matrix 렌더링시 자동계산
			`,
			return : 'mat4'
		 }
         :DOC*/
        this['matrix'] = mat4.create();
        this['cachedMatrix'] = mat4.create();
        this['localMatrix'] = mat4.create();
        /**DOC:
         {
		    code : 'PROPERTY',
			title :`normalMatrix`,
			description : `
			normalMatrix 렌더링시 자동계산
			`,
			return : 'mat4'
		 }
         :DOC*/
        this['normalMatrix'] = mat4.create();
        this['cachedNormalMatrix'] = mat4.create();
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`children`,
			 description : `
			    자식 리스트
			 `,
			 return : 'Array'
		 }
         :DOC*/
        this['children'] = [];
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`useLOD`,
			 description : `LOD사용여부`,
			 return : 'Boolean'
		 }
         :DOC*/
        this['useLOD'] = false;
        this['_lodLevels'] = {
            /* 1: {
                geometry : ~~,
                material : ~~~
                둘중하나는 있어야하며
                하나만 입력할경우 없는쪽은 오리지날 속성이 부여된다.
            }
            */
        };
        this['_mouseColorMaterial'] = null
        this['_mouseColorID'] = [
            parseInt(Math.random() * 255),
            parseInt(Math.random() * 255),
            parseInt(Math.random() * 255),
            255
        ]

    };
    RedBaseObject3D.prototype = {
        /**DOC:
         {
			 title :`addLOD`,
			 code : 'METHOD',
			 description : `
				 LOD 추가.
				 추가시 geometry, material 둘중 하나는 반드시 입력되어야함.
			 `,
			 params : {
				 level : [
					  {type : 'Number' }
				 ],
				 distance : [
					 {type : 'Number' }
				 ],
				 geometry : [
					 {type : 'RedGeometry 확장 Instance' }
				 ],
				 material : [
					 {type : 'RedBaseMaterial 확장 Instance' }
				 ]
			 },
			 example : `
                var tMesh = RedBaseObject3D Instance;
                tMesh.useLOD = true; // LOD 사용 설정
                tMesh.addLOD(0, 5, RedSphere(this, 0.5, 32, 32, 32), RedColorMaterial(this, '#00ff00')); // 0레벨 LOD 추가
                tMesh.addLOD(1, 10, RedSphere(this, 0.5, 16, 16, 16), RedColorMaterial(this, '#00ff00')); // 1레벨 LOD 추가
                tMesh.addLOD(2, 15, RedSphere(this, 0.5, 8, 8, 8), RedColorMaterial(this, '#00ff00')); // 2레벨 LOD 추가
                tMesh.addLOD(3, 20, RedSphere(this, 0.5, 4, 4, 4), RedColorMaterial(this, '#00ff00')); // 3레벨 LOD 추가
                tMesh.addLOD(4, 25, RedSphere(this, 0.5, 3, 3, 3), RedColorMaterial(this, '#00ff00')); // 4레벨 LOD 추가
			 `,
			 return : 'void'
		 }
         :DOC*/
        addLOD: (function () {
            var tData;
            return function (level, distance, geometry, material) {
                geometry || material || RedGLUtil.throwFunc('RedBaseObject3D - addLOD : geometry, material 둘중하나는 반드시 입력되어야함');
                typeof level == 'number' || RedGLUtil.throwFunc('RedBaseObject3D - level : 숫자만허용함');
                tData = {
                    level: level,
                    distance: distance,
                    geometry: geometry ? geometry : this['geometry'],
                    material: material ? material : this['material']
                };
                this['_lodLevels'][level] = tData;
            }
        })(),
        /**DOC:
         {
			 title :`removeLOD`,
			 code : 'METHOD',
			 description : `LOD 삭제`,
			 params : {
				 level : [
					 {type : 'int' }
				 ]
			 },
             example : `
                var tMesh = RedBaseObject3D Instance;
                tMesh.addLOD(0, 5, RedSphere(this, 0.5, 32, 32, 32), RedColorMaterial(this, '#00ff00')); // 0레벨 LOD 추가
                tMesh.removeLOD(0); // 0레벨 LOD 삭제
			 `,
			 return : 'void'
		 }
         :DOC*/
        removeLOD: function (level) {
            if (this['_lodLevels'][level]) delete this['_lodLevels'][level]
        },
        /**DOC:
         {
			 title :`localToWorld`,
			 code : 'METHOD',
			 description : `
				 로컬좌표를 RedWorld 좌표로 변경
			 `,
			  params : {
				 x : [
					 {type : 'Number' }
				 ],
				 y : [
					 {type : 'Number' }
				 ],
				 z : [
					 {type : 'Number' }
				 ]
			 },
			 example : `
                (RedBaseObject3D Instance).localToWorld(0,0,0); // 해당메쉬의 0,0,0을  RedWorld 상의 좌표로 반환
			 `,
			 return : 'Array'
		 }
         :DOC*/
        localToWorld: (function () {
            var t0;
            t0 = mat4.create();
            return function (x, y, z) {
                x = x || 0;
                y = y || 0;
                z = z || 0;
                mat4.identity(t0);
                mat4.translate(t0, t0, [x, y, z]);
                mat4.multiply(t0, this['matrix'], t0);
                return [
                    t0[12],
                    t0[13],
                    t0[14]
                ]
            }
        })(),
        /**DOC:
         {
			 title :`worldToLocal`,
			 code : 'METHOD',
			 description : `
				 RedWorld 좌표를 로컬좌표로 변환
			 `,
			 params : {
				 x : [
					 {type : 'Number' }
				 ],
				 y : [
					 {type : 'Number' }
				 ],
				 z : [
					 {type : 'Number' }
				 ]
			 },
			 example : `
                (RedBaseObject3D Instance).worldToLocal(0,0,0); // RedWorld 상의 0,0,0을  로컬 좌표로 반환
			 `,
			 return : 'Array'
		 }
         :DOC*/
        worldToLocal: (function () {
            var t0, t1;
            t0 = mat4.create();
            t1 = mat4.create();
            return function (x, y, z) {
                x = x || 0;
                y = y || 0;
                z = z || 0;
                mat4.translate(t0, t0, [x, y, z]);
                mat4.multiply(t1, t0, this['matrix']);
                return [
                    t1[0] * x + t1[1] * y + t1[2] * z + t1[3],
                    t1[4] * x + t1[5] * y + t1[6] * z + t1[7],
                    t1[8] * x + t1[9] * y + t1[10] * z + t1[11]
                ]
            }
        })(),
        /**DOC:
         {
			 title :`getScreenPoint`,
			 code : 'METHOD',
			 description : `
				 스크린 좌표 반환
			 `,
			 params : {
				 redView : [
					 {type : 'RedView' }
				 ]
			 },
			 example : `
                (RedBaseObject3D Instance).getScreenPoint( RedView Instance ); // 로컬 좌표를 스크린상의 좌표로 반환
			 `,
			 return : 'Array'
		 }
         :DOC*/
        getScreenPoint: (function () {
            var resultMTX = mat4.create();
            var tCamera, tViewRect;
            var resultPosition;
            resultPosition = {
                x: 0,
                y: 0,
                z: 0,
                w: 0
            };
            return function (redView) {
                mat4.identity(resultMTX);
                tCamera = redView['camera'];
                tViewRect = redView['_viewRect'];
                if (tCamera instanceof RedBaseController) tCamera = tCamera.camera;
                mat4.multiply(resultMTX, tCamera.perspectiveMTX, tCamera.matrix);
                mat4.multiply(resultMTX, resultMTX, this['matrix']);
                resultPosition.x = resultMTX[12];
                resultPosition.y = resultMTX[13];
                resultPosition.z = resultMTX[14];
                resultPosition.w = resultMTX[15];
                resultPosition.x = resultPosition.x * 0.5 / resultPosition.w + 0.5;
                resultPosition.y = resultPosition.y * 0.5 / resultPosition.w + 0.5;
                return [
                    (tViewRect[0] + resultPosition.x * tViewRect[2]) / window.devicePixelRatio,
                    (tViewRect[1] + (1 - resultPosition.y) * tViewRect[3]) / window.devicePixelRatio
                ]
            }
        })(),
        /**DOC:
         {
			 title :`disposeAll`,
			 code : 'METHOD',
			 description : `
				 텍스쳐와 버퍼모두 dispose
			 `,
			 return : 'void'
		 }
         :DOC*/
        disposeAll: function () {
            this.disposeAllTexture();
            this.disposeAllBuffer()
        },
        /**DOC:
         {
			 title :`disposeAllTexture`,
			 code : 'METHOD',
			 description : `
				 텍스쳐 전체 dispose
			 `,
			 return : 'void'
		 }
         :DOC*/
        disposeAllTexture: function () {
            if (this['material']) this['material']['disposeAllTexture']()
        },
        /**DOC:
         {
			 title :`disposeTexture`,
			 code : 'METHOD',
			 description : `
				 텍스쳐 dispose
			 `,
			 params : {
				 key : [
					 {type : 'String' },
					 'ex) diffuseTexture'
				 ]
			 },
			 return : 'void'
		 }
         :DOC*/
        disposeTexture: function (key) {
            if (this['material']) this['material']['disposeTexture'](key)
        },
        /**DOC:
         {
			 title :`disposeAllBuffer`,
			 code : 'METHOD',
			 description : `
				 버퍼 전체 dispose
			 `,
			 return : 'void'
		 }
         :DOC*/
        disposeAllBuffer: function () {
            if (this['geometry']) this['geometry']['disposeAllBuffer']()
        },
        /**DOC:
         {
			 title :`disposeBuffer`,
			 code : 'METHOD',
			 description : `
				 텍스쳐 dispose,
                 'ex) indexBuffer'
			 `,
			 params : {
				 key : [
					 {type : 'String' }
				 ]
			 },
			 return : 'void'
		 }
         :DOC*/
        disposeBuffer: function (key) {
            if (this['geometry']) this['geometry']['disposeBuffer'](key)
        }
    };
    //TODO: xyz,scaleXYZ,rotationXYZ 일단 이 GET/SET을 쓸건지 말껀지 결정해야함
    //TODO: xyz,scaleXYZ,rotationXYZ 렌더러 계산시 get/set 함수 안타게 추적해야함
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`x`,
		 return : 'Number'
	 }
     :DOC*/
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`y`,
		 return : 'Number'
	 }
     :DOC*/
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`z`,
		 return : 'Number'
	 }
     :DOC*/
    // RedDefinePropertyInfo.definePrototype('RedBaseObject3D', 'x', 'number');
    // RedDefinePropertyInfo.definePrototype('RedBaseObject3D', 'y', 'number');
    // RedDefinePropertyInfo.definePrototype('RedBaseObject3D', 'z', 'number');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`rotationX`,
		 return : 'Number'
	 }
     :DOC*/
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`rotationY`,
		 return : 'Number'
	 }
     :DOC*/
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`rotationZ`,
		 return : 'Number'
	 }
     :DOC*/
    // RedDefinePropertyInfo.definePrototype('RedBaseObject3D', 'scaleX', 'number');
    // RedDefinePropertyInfo.definePrototype('RedBaseObject3D', 'scaleY', 'number');
    // RedDefinePropertyInfo.definePrototype('RedBaseObject3D', 'scaleZ', 'number');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`scaleX`,
		 return : 'Number'
	 }
     :DOC*/
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`scaleY`,
		 return : 'Number'
	 }
     :DOC*/
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`scaleZ`,
		 return : 'Number'
	 }
     :DOC*/
    // RedDefinePropertyInfo.definePrototype('RedBaseObject3D', 'rotationX', 'number');
    // RedDefinePropertyInfo.definePrototype('RedBaseObject3D', 'rotationY', 'number');
    // RedDefinePropertyInfo.definePrototype('RedBaseObject3D', 'rotationZ', 'number');
    /**DOC:
     {
			 title :`geometry`,
			 code : 'PROPERTY',
			 description : `
				 geometry
			 `,
			 return : 'RedGeometry Instance'
		 }
     :DOC*/
    Object.defineProperty(RedBaseObject3D.prototype, 'geometry', {
        get: function () {
            return this['_geometry'];
        },
        set: function (v) {
            if (v && !(v instanceof RedGeometry)) RedGLUtil.throwFunc('geometry : RedGeometry Instance만 허용.', '입력값 : ' + v);
            this['_geometry'] = v
        }
    });
    /**DOC:
     {
			 title :`material`,
			 code : 'PROPERTY',
			 description : `
				 material
			 `,
			 return : 'RedMaterial Instance'
		 }
     :DOC*/
    Object.defineProperty(RedBaseObject3D.prototype, 'material', {
        get: function () {
            return this['_material'];
        },
        set: function (v) {
            if (v && !(v instanceof RedBaseMaterial)) RedGLUtil.throwFunc('material : RedBaseMaterial Instance만 허용.', '입력값 : ' + v)
            this['_material'] = v
        }
    });
    Object.freeze(RedBaseObject3D);
})();

"use strict";
var RedBaseContainer;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedBaseContainer`,
		 description : `
			 RedBaseContainer 기저층.
			 children 관리층.
		 `,
		 extends : ['RedBaseObject3D'],
		 return : 'RedBaseContainer Instance'
	 }
     :DOC*/
    RedBaseContainer = function () {
    };
    RedBaseContainer.prototype = new RedBaseObject3D();
    /**DOC:
     {
		 code : 'METHOD',
		 title :`sortGeometry`,
		 description : `
		    지오메트리 순으로 자식들을 정렬.
		    동일 지오메트리가 다량 사용될 경우 attribute 변경 횟수가 줄어들어 렌더성능이 좋아진다.
         `,
		 params:{
			 recursive : [
				 {type:'Boolean'},
				 'true 입력시 하위 자식의 children 까지 모두 정렬'
			 ]
		 },
		 example : `
		    (RedBaseContainer Instance).sortGeometry();
		    (RedBaseContainer Instance).sortGeometry(true);
		 `,
		 return : 'void'
	 }
     :DOC*/
    RedBaseContainer.prototype['sortGeometry'] = function (recursive) {
        if (recursive) {
            var i = this.children.length;
            while (i--) {
                if(this.children[i].sortGeometry)this.children[i].sortGeometry(recursive)
            }
        }
        this.children.sort(function (a, b) {
            a = a['_geometry']['interleaveBuffer']['_UUID'];
            b = b['_geometry']['interleaveBuffer']['_UUID'];
            if (a < b) return -1;
            if (a > b) return 1;
            return 0
        })
    };
    /**DOC:
     {
		 code : 'METHOD',
		 title :`sortMaterial`,
		 description : `
		    재질이 소유한 RedProgram 순으로 자식들을 정렬.
		    동일 재질이 다량 사용될 경우 프로그램 변경 횟수가 줄어들어 렌더성능이 좋아진다.
         `,
		 params:{
			 recursive : [
				 {type:'Boolean'},
				 'true 입력시 하위 자식의 children 까지 모두 정렬'
			 ]
		 },
		 example : `
		    (RedBaseContainer Instance).sortMaterial();
		    (RedBaseContainer Instance).sortMaterial(true);
		 `,
		 return : 'void'
	 }
     :DOC*/
    RedBaseContainer.prototype['sortMaterial'] = function (recursive) {
        if (recursive) {
            var i = this.children.length;
            while (i--) {
                if(this.children[i].sortMaterial) this.children[i].sortMaterial(recursive)
            }
        }
        this.children.sort(function (a, b) {
            a = a['_material']['program']['_UUID'];
            b = b['_material']['program']['_UUID'];
            if (a < b) return -1;
            if (a > b) return 1;
            return 0
        })
    };
    /**DOC:
     {
		 code : 'METHOD',
		 title :`sortGeometryAndMaterial`,
		 description : `지오메트리/재질순으로 자식들을 정렬`,
		 params:{
			 recursive : [
				 {type:'Boolean'},
				 'true 입력시 하위 자식의 children 까지 모두 정렬'
			 ]
		 },
		 example : `
		    (RedBaseContainer Instance).sortGeometryAndMaterial();
		    (RedBaseContainer Instance).sortGeometryAndMaterial(true);
		 `,
		 return : 'void'
	 }
     :DOC*/
    RedBaseContainer.prototype['sortGeometryAndMaterial'] = function (recursive) {
        //TODO: 정의,검증 해야함
        if (recursive) {
            var i = this.children.length;
            while (i--) {
                if(this.children[i].sortGeometryAndMaterial) this.children[i].sortGeometryAndMaterial(recursive)
            }
        }
        this.children.sort(function (a, b) {
            a = a['_geometry']['interleaveBuffer']['_UUID'];
            b = b['_geometry']['interleaveBuffer']['_UUID'];
            if (a == b) {
                var a2 = a['_material']['program']['_UUID'];
                var b2 = b['_material']['program']['_UUID'];
                if (a2 < b2) return -1;
                if (a2 > b2) return 1;
                return 0
            }
            if (a < b) return -1;
            if (a > b) return 1;
            return 0
        })
    };
    /**DOC:
     {
		 code : 'METHOD',
		 title :`addChild`,
		 description : `자식추가`,
		 params:{
			 child : [
				 {type:'RedBaseObject3D Instance'}
			 ]
		 },
		 example : `
		    (RedBaseContainer Instance).addChild( RedBaseObject3D Instance );
		 `,
		 return : 'void'
	 }
     :DOC*/
    RedBaseContainer.prototype['addChild'] = function (child) {
        child instanceof RedBaseObject3D || RedGLUtil.throwFunc('addChild', 'RedBaseObject3D Instance만 가능', '입력값 : ' + child);
        if (this['children'].indexOf(child) > -1) this['removeChild'](child);
        this['children'].push(child);
    };
    /**DOC:
     {
		 code : 'METHOD',
		 title :`addChildAt`,
		 description : `인덱스 위치에 자식을 추가`,
		 params:{
			 child : [
				 {type:'RedBaseObject3D Instance'}
			 ],
			 index : [
				 {type:'uint'}
			 ]
		 },
		 example : `
		    (RedBaseContainer Instance).addChildAt( RedBaseObject3D Instance, 0 ); // 0번째에 자식추가
		    (RedBaseContainer Instance).addChildAt( RedBaseObject3D Instance, 2 ); // 2번째에 자식추가
		 `,
		 return : 'void'
	 }
     :DOC*/
    RedBaseContainer.prototype['addChildAt'] = function (child, index) {
        typeof index == 'number' || RedGLUtil.throwFunc('addChildAt', 'index는 숫자만 입력가능', '입력값 : ' + index);
        child instanceof RedBaseObject3D || RedGLUtil.throwFunc('addChildAt', 'RedBaseObject3D Instance만 가능', '입력값 : ' + child);
        if (this['children'].indexOf(child) > -1) this['removeChild'](child);
        if (this['children'].length < index) index = this['children'].length;
        if (index) this['children'].splice(index, 0, child);
        else this['children'].push(child);
    };
    /**DOC:
     {
		 code : 'METHOD',
		 title :`removeChild`,
		 description : `해당 자식을 제거`,
		 params:{
			 child : [
				 {type:'RedBaseObject3D Instance'}
			 ]
		 },
		 example : `
		    (RedBaseContainer Instance).removeChild( RedBaseObject3D Instance ); // 해당 자식 제거
		 `,
		 return : 'void'
	 }
     :DOC*/
    RedBaseContainer.prototype['removeChild'] = (function () {
        var t0;
        return function (child) {
            t0 = this['children'].indexOf(child);
            if (t0 == -1) RedGLUtil.throwFunc('removeChild', '존재하지 않는 RedMesh를 삭제하려고 함');
            else this['children'].splice(t0, 1);
        }
    })();
    /**DOC:
     {
		 code : 'METHOD',
		 title :`removeChildAt`,
		 description : `인덱스 위치에 있는 자식을 제거`,
		 params:{
			 index : [
				 {type:'uint'}
			 ]
		 },
		 example : `
		    (RedBaseContainer Instance).removeChildAt( 0 ); // 0번째 자식 제거
		    (RedBaseContainer Instance).removeChildAt( 1 ); // 1번째 자식 제거
		 `,
		 return : 'void'
	 }
     :DOC*/
    RedBaseContainer.prototype['removeChildAt'] = function (index) {
        if (typeof index != 'number') RedGLUtil.throwFunc('removeChildAt', 'index가 Number형이 아님 ', '입력값 : ' + index);
        if (this['children'][index]) this['children'].splice(index, 1);
        else RedGLUtil.throwFunc('removeChildAt', 'index 해당인덱스에 위치한 자식이 없음.', '입력값 : ' + index);
    };
    /**DOC:
     {
		 code : 'METHOD',
		 title :`removeChildAll`,
		 description : `전체 자식을 제거`,
		 example : `
		    (RedBaseContainer Instance).removeChildAll(); // 전체 자식 제거
		 `,
		 return : 'void'
	 }
     :DOC*/
    RedBaseContainer.prototype['removeChildAll'] = function () {
        this['children'].length = 0
    };
    /**DOC:
     {
		 code : 'METHOD',
		 title :`getChildAt`,
		 description : `해당위치의 자식을 반환`,
		 params:{
			 index : [
				 {type:'uint'}
			 ]
		 },
		 example : `
		    (RedBaseContainer Instance).getChildAt( 0 ); // 0번째 자식 반환
		    (RedBaseContainer Instance).getChildAt( 2 ); // 2번째 자식 반환
		 `,
		 return : 'RedBaseObject3D Instance'
	 }
     :DOC*/
    RedBaseContainer.prototype['getChildAt'] = function (index) {
        typeof index == 'number' || RedGLUtil.throwFunc('getChildAt', 'index가 Number형이 아님 ');
        return this['children'][index];
    };
    /**DOC:
     {
		 code : 'METHOD',
		 title :`getChildIndex`,
		 description : `해당객체의 인덱스 번호를 반환`,
		 params:{
			 child : [
				 {type:'RedBaseObject3D Instance'}
			 ]
		 },
		 example : `
		    (RedBaseContainer Instance).getChildIndex( RedBaseObject3D Instance ); // 해당객체가 부모메쉬의 몇번째 자식인지 인덱스 반환
		 `,
		 return : 'int'
	 }
     :DOC*/
    RedBaseContainer.prototype['getChildIndex'] = function (child) {
        return this['children'].indexOf(child);
    };
    /**DOC:
     {
		 code : 'METHOD',
		 title :`numChildren`,
		 description : `자식갯수 반환`,
		 params:{
			 target : [
				 {type:'RedBaseObject3D Instance'}
			 ]
		 },
          example : `
		    (RedBaseContainer Instance).numChildren(); // 자식갯수 반환
		 `,
		 return : 'uint'
	 }
     :DOC*/
    RedBaseContainer.prototype['numChildren'] = function () {
        return this['children'].length;
    };
    Object.freeze(RedBaseContainer);
})();

"use strict";
var RedBaseLight;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedBaseLight`,
		 description : `
			 RedBaseLight 기저층
		 `,
		 return : 'void'
	 }
     :DOC*/
    RedBaseLight = function () {
    };
    RedBaseLight.prototype = {};
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`intensity`,
		 description : `
			 기본값 : 1
			 최소값 : 0
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedBaseLight', 'intensity', 'number', {'min': 0});
    /**DOC:
     {
         code : 'PROPERTY',
		 title :`alpha`,
		 description : `
			 기본값 : 1
			 최소값 : 0
			 최대값 : 1
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedBaseLight', 'alpha', 'number', {
        'min': 0, 'max': 1,
        callback: function (v) {
            this['_lightColor'][3] = this['_alpha'] = v
        }
    });
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`color`,
		 description : `
			색상(hex)
		 `,
		 return : 'hex'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedBaseLight', 'color', 'hex', {
        callback: (function () {
            var t0;
            return function () {
                t0 = RedGLUtil.hexToRGB_ZeroToOne.call(this, this['_color']);
                this['_lightColor'][0] = t0[0];
                this['_lightColor'][1] = t0[1];
                this['_lightColor'][2] = t0[2];
                this['_lightColor'][3] = this['_alpha'];
            }
        })()
    });
    Object.freeze(RedBaseLight);
})();
"use strict";
var RedFrameBuffer;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedFrameBuffer`,
		 description : `
			 RedFrameBuffer Instance 생성자.
		 `,
		 params : {
	         redGL : [
				 {type:'RedGL Instance'}
			 ],
			 width : [
				 {type:'Number'},
				 '기기허용 최대값보다 큰경우 기기허용 최대값으로 설정됨'
			 ],
			 height : [
				 {type:'Number'},
				 '기기허용 최대값보다 큰경우 기기허용 최대값으로 설정됨'
			 ]
		 },
		 example : `
			 RedFrameBuffer( RedGL Instance );
		 `,
		 return : 'RedGeometry Instance'
	 }
     :DOC*/
    RedFrameBuffer = function (redGL, width, height) {
        if (!(this instanceof RedFrameBuffer)) return new RedFrameBuffer(redGL, width, height);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedFrameBuffer : RedGL Instance만 허용.', redGL);
        if (width) typeof width == 'number' || RedGLUtil.throwFunc('RedFrameBuffer : width - 숫자만 허용', '입력값 : ', width);
        if (height) typeof height == 'number' || RedGLUtil.throwFunc('RedFrameBuffer : height - 숫자만 허용', '입력값 : ', height);
        var gl;
        gl = redGL['gl'];
        width = width || 1920;
        height = height || 1080;
        if (width > redGL['detect']['texture']['MAX_TEXTURE_SIZE']) width = redGL['detect']['texture']['MAX_TEXTURE_SIZE'];
        if (height > redGL['detect']['texture']['MAX_TEXTURE_SIZE']) height = redGL['detect']['texture']['MAX_TEXTURE_SIZE'];
        this['redGL'] = redGL;
        this['width'] = width;
        this['height'] = height;
        this['webglFrameBuffer'] = gl.createFramebuffer();
        this['webglRenderBuffer'] = gl.createRenderbuffer();
        this['texture'] = RedBitmapTexture(redGL);
        this['_UUID'] = RedGL.makeUUID();
        gl.bindFramebuffer(gl.FRAMEBUFFER, this['webglFrameBuffer']);
        // 텍스쳐 세팅
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, this['texture']['webglTexture']);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this['width'], this['height'], 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        // gl.generateMipmap(gl.TEXTURE_2D);
        // 렌더버퍼 세팅
        gl.bindRenderbuffer(gl.RENDERBUFFER, this['webglRenderBuffer']);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this['width'], this['height']);
        // 프레임버퍼 세팅
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this['texture']['webglTexture'], 0);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this['webglRenderBuffer']);
        //
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        console.log(this)
    };
    RedFrameBuffer.prototype = {
        /**DOC:
         {
			 code : 'METHOD',
			 title :`bind`,
			 description : `소유하고있는 <b>webglFrameBuffer, webglTexture, webglRenderBuffer</b>를 binding.`,
			 params : {
                 gl : [{type:'WebGL Context'}]
			 },
			 return : 'void'
		 }
         :DOC*/
        bind: function (gl) {
            gl.bindFramebuffer(gl.FRAMEBUFFER, this['webglFrameBuffer']);
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, this['texture']['webglTexture']);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this['width'], this['height'], 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            // 렌더버퍼 세팅
            gl.bindRenderbuffer(gl.RENDERBUFFER, this['webglRenderBuffer']);
            gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this['width'], this['height']);
            // 프레임버퍼 세팅
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this['texture']['webglTexture'], 0);
            gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this['webglRenderBuffer']);
        },
        /**DOC:
         {
			 code : 'METHOD',
			 title :`unbind`,
			 description : `소유하고있는 <b>webglFrameBuffer, webglTexture, webglRenderBuffer</b>를 unbinding.`,
			 params : {
                 gl : [{type:'WebGL Context'}]
			 },
			 return : 'void'
		 }
         :DOC*/
        unbind: function (gl) {
            gl.bindTexture(gl.TEXTURE_2D, null);
            gl.bindRenderbuffer(gl.RENDERBUFFER, null);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        }
    };
    /**DOC:
     {
		 code:`PROPERTY`,
		 title :`width`,
		 description : `
		    기본값 : 1920 or 하드웨어 최대값
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedFrameBuffer', 'width', 'number', {min: 2});
    /**DOC:
     {
		 code:`PROPERTY`,
		 title :`height`,
		 description : `
		    기본값 : 1080 or 하드웨어 최대값
	    `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedFrameBuffer', 'height', 'number', {min: 2});
    Object.freeze(RedFrameBuffer);
})();
"use strict";
var RedBuffer;
(function () {
    var getGlDataTypeByTypeArray, getGlBufferType, parseInterleaveDefineInfo;
    getGlDataTypeByTypeArray = function (gl, bufferType, typedArrayData) {
        switch (bufferType) {
            case RedBuffer.ARRAY_BUFFER:
                if (typedArrayData instanceof Float32Array) return gl.FLOAT;
                if (typedArrayData instanceof Float64Array) return gl.FLOAT;
                RedGLUtil.throwFunc('RedBuffer : 올바른 TypedArray(RedBuffer.ARRAY_BUFFER)형식을 사용해야합니다.', '입력값 : ' + typedArrayData);
                break;
            case RedBuffer.ELEMENT_ARRAY_BUFFER:
                if (typedArrayData instanceof Int8Array) return gl.BYTE;
                if (typedArrayData instanceof Int16Array) return gl.SHORT;
                if (typedArrayData instanceof Int32Array) return gl.INT;
                if (typedArrayData instanceof Uint8Array) return gl.UNSIGNED_BYTE;
                if (typedArrayData instanceof Uint16Array) return gl.UNSIGNED_SHORT;
                if (typedArrayData instanceof Uint32Array) return gl.UNSIGNED_INT;
                RedGLUtil.throwFunc('RedBuffer : 올바른 TypedArray(RedBuffer.ELEMENT_ARRAY_BUFFER)형식을 사용해야합니다.', '입력값 : ' + typedArrayData);
                break;
            default:
                RedGLUtil.throwFunc('RedBuffer : bufferType - 지원하지 않는 버퍼타입입니다. ', '입력값 : ' + bufferType)
        }
    };
    getGlBufferType = function (gl, bufferType) {
        switch (bufferType) {
            case RedBuffer.ARRAY_BUFFER:
                return gl.ARRAY_BUFFER;
                break;
            case RedBuffer.ELEMENT_ARRAY_BUFFER:
                return gl.ELEMENT_ARRAY_BUFFER;
                break;
            default:
                RedGLUtil.throwFunc('RedBuffer : bufferType - 지원하지 않는 버퍼타입입니다. ')
        }
    };
    parseInterleaveDefineInfo = (function () {
        return function (self, bufferType, data, interleaveDefineInfoList) {
            //console.log(self, bufferType)
            var totalSize, i, len, tData;
            var tBYTES_PER_ELEMENT;
            if (data instanceof Float32Array) tBYTES_PER_ELEMENT = Float32Array.BYTES_PER_ELEMENT
            else if (data instanceof Float64Array) tBYTES_PER_ELEMENT = Float64Array.BYTES_PER_ELEMENT
            totalSize = 0;
            switch (bufferType) {
                case RedBuffer.ARRAY_BUFFER:
                    self['interleaveDefineInfoList'] = interleaveDefineInfoList;
                    if (interleaveDefineInfoList) {
                        if (interleaveDefineInfoList.length == 0) RedGLUtil.throwFunc('RedBuffer : interleaveDefineInfoList의 정보는 1개이상의 RedInterleaveInfo Instance로 구성되어야함.', interleaveDefineInfoList);
                        i = 0;
                        len = interleaveDefineInfoList.length;
                        for (i; i < len; i++) {
                            tData = interleaveDefineInfoList[i];
                            tData instanceof RedInterleaveInfo || RedGLUtil.throwFunc('RedBuffer : interleaveDefineInfoList의 정보는 RedInterleaveInfo Instance로만 구성되어야함.', interleaveDefineInfoList);
                            // 단일 인터리브라면 오프셋은 없어야함.
                            // 다중 인터리브라면 토탈사이즈 만큼이 오프셋위치임
                            tData['offset'] = len < 2 ? 0 : totalSize;
                            tData['offset_BYTES_PER_ELEMENT'] = len < 2 ? 0 : totalSize * tBYTES_PER_ELEMENT;
                            totalSize += tData['size'];
                            tData['_UUID'] = RedGL.makeUUID();
                            // 키로 찾을수있게 입력함
                            interleaveDefineInfoList[tData['attributeKey']] = tData;
                        }
                        // 단일 인터리브라면 해당 인터리브는 버텍스 정보라고 판단함
                        if (len < 2) {
                            self['stride'] = 0;
                            self['stride_BYTES_PER_ELEMENT'] = 0;
                            self['pointNum'] = data.length / 3;
                        } else {
                            self['stride'] = totalSize;
                            self['stride_BYTES_PER_ELEMENT'] = totalSize * tBYTES_PER_ELEMENT;
                            self['pointNum'] = data.length / totalSize;
                        }
                        // 업로드시 포인트가 달라질수 있으므로 확인해야함.
                        if (self['pointNum'] != parseInt(self['pointNum'])) RedGLUtil.throwFunc('RedBuffer : ARRAY_BUFFER의 pointNum이 정수로 떨어지지 않음. 데이터구성과 interleaveDefineInfoList 구성 확인 필요');
                    } else RedGLUtil.throwFunc('RedBuffer : interleaveDefineInfoList는 반드시 정의 되어야함.');
                    break;
                case RedBuffer.ELEMENT_ARRAY_BUFFER:
                    self['pointNum'] = data.length;
                    break;
            }
        }
    })();
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedBuffer`,
		 description : `
			 RedBuffer Instance 생성자
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 key : [
				 {type:'String'},
				 `고유키`
			 ],
			 bufferType : [
				 {type:'String'},
				 `RedBuffer.ARRAY_BUFFER or RedBuffer.ELEMENT_ARRAY_BUFFER`
			 ],
			 data : [
				 {type:'TypedArray'},
				 `버퍼 구성 데이터`
			 ],
			 interleaveDefineInfoList : [
				 {type:'Object'},
				 `
				 버퍼의 인터리브 구성 정보
				 <b>RedBuffer.ARRAY_BUFFER</b> 일때만 필요
				 `,
				 `<code>
				 [
				   RedInterleaveInfo('aVertexPosition', 3),
				   RedInterleaveInfo('aTexcoord', 2)
				 ]
				 </code>`
			 ],
			 drawMode : [
				 {type:'gl 상수'},
				 `ex) gl.STATIC_DRAW`
			 ]
		 },
		 demo : '../example/geometry/RedBuffer.html',
		 example : `
            var canvas;
            canvas = document.createElement('canvas');
            document.body.appendChild(canvas);
            RedGL(canvas, function (v) {
                if (v) {
                    var interleaveData, indexData; // 데이터 변수
                    var tInterleaveBuffer, tIndexBuffer; // 버퍼 변수
                    // 인터리브 데이터 생성
                    interleaveData = new Float32Array([
                        0.0, 0.5, 0.0, 0.0, 0.5,
                        -0.5, -0.5, 0.0, 0.5, 0.5,
                        0.5, -0.5, 0.0, 0.5, 0.0
                    ]);
                    // 인덱스 데이터 생성
                    indexData = new Uint16Array([0, 1, 2]);
                    // 인터리브 버퍼생성
                    tInterleaveBuffer = RedBuffer(
                        this, // RedGL Instance
                        'tInterleaveBuffer', // key
                        RedBuffer.ARRAY_BUFFER, // bufferType
                        interleaveData, // data
                        [
                            RedInterleaveInfo('aVertexPosition', 3), // 프로그램에서 aVertexPosition 키를 사용하고 포인트당 3개로 구성됨
                            RedInterleaveInfo('aTexcoord', 2)  // 프로그램에서 aTexcoord 키를 사용하고 포인트당 2개로 구성됨
                        ]
                    );
                    // 인덱스 버퍼생성
                    tIndexBuffer = RedBuffer(
                        this, // RedGL Instance
                        'tIndexBuffer', // key
                        RedBuffer.ELEMENT_ARRAY_BUFFER, // bufferType
                        indexData  // data
                    );
                    console.log('인터리브버퍼', tInterleaveBuffer);
                    console.log('인덱스버퍼', tIndexBuffer);
                } else {
                    console.log('초기화 실패!')
                }
            });
		 `,
		 return : 'RedBuffer Instance'
	 }
     :DOC*/
    RedBuffer = function (redGL, key, bufferType, typedArrayData, interleaveDefineInfoList, drawMode) {
        // console.log(redGL, key, data, bufferType, interleaveDefineInfoList)
        if (!(this instanceof RedBuffer)) return new RedBuffer(redGL, key, bufferType, typedArrayData, interleaveDefineInfoList, drawMode);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedBuffer : RedGL Instance만 허용.', redGL);
        typeof key == 'string' || RedGLUtil.throwFunc('RedBuffer : key - 문자열만 허용.', '입력값 : ' + key);
        bufferType || RedGLUtil.throwFunc('RedBuffer : bufferType : 미입력, 반드시 입력해야함.');
        bufferType == RedBuffer.ARRAY_BUFFER || bufferType == RedBuffer.ELEMENT_ARRAY_BUFFER || RedGLUtil.throwFunc('RedBuffer : bufferType - RedBuffer.ARRAY_BUFFER or RedBuffer.ELEMENT_ARRAY_BUFFER 만 허용함.', '입력값 : ' + bufferType);
        var tGL = redGL.gl;
        //유일키 방어
        if (!redGL['_datas']['RedBuffer']) {
            redGL['_datas']['RedBuffer'] = {};
            redGL['_datas']['RedBuffer'][RedBuffer.ARRAY_BUFFER] = {};
            redGL['_datas']['RedBuffer'][RedBuffer.ELEMENT_ARRAY_BUFFER] = {};
        }
        if (redGL['_datas']['RedBuffer'][bufferType][key]) return redGL['_datas']['RedBuffer'][bufferType][key];
        else redGL['_datas']['RedBuffer'][bufferType][key] = this;
        if (bufferType == RedBuffer.ARRAY_BUFFER && !interleaveDefineInfoList) RedGLUtil.throwFunc('RedBuffer : 신규생성시 interleaveDefineInfoList를 반드시 정의해야합니다.', '입력값 : ' + interleaveDefineInfoList);
        /**DOC:
         {
			 code : 'PROPERTY',
			 title :`key`,
			 description : `고유키`,
			 return : 'String'
		 }
         :DOC*/
        this['key'] = key;
        /**DOC:
         {
			 code : 'PROPERTY',
			 title :`data`,
			 description : `버퍼 구성 데이터`,
			 return : 'TypedArray'
		 }
         :DOC*/
        this['data'] = typedArrayData;
        /**DOC:
         {
			 code : 'PROPERTY',
			 title :`bufferType`,
			 description : `bufferType 상수`,
			 return : 'RedBuffer.ARRAY_BUFFER or RedBuffer.ELEMENT_ARRAY_BUFFER'
		 }
         :DOC*/
        this['bufferType'] = bufferType;
        /**DOC:
         {
			 code : 'PROPERTY',
			 title :`glBufferType`,
			 description : `
			    bufferType 에 대응하는 gl.ARRAY_BUFFER or gl.ELEMENT_ARRAY_BUFFER 상수.
			    생성시 자동 판별되어 입력됨.
             `,
			 return : 'gl.ARRAY_BUFFER or glELEMENT_ARRAY_BUFFER 상수'
		 }
         :DOC*/
        this['glBufferType'] = getGlBufferType(tGL, this['bufferType']);
        /**DOC:
         {
			 code : 'PROPERTY',
			 title :`glArrayType`,
			 description : `
                 입력된 데이터의 타입으로 판별한 gl.XXX 상수
                 ex) gl.FLOAT, gl.BYTE
			 `,
			 return : 'gl.XXX 상수'
		 }
         :DOC*/
        this['glArrayType'] = getGlDataTypeByTypeArray(tGL, this['bufferType'], this['data']);
        /**DOC:
         {
			 code : 'PROPERTY',
			 title :`drawMode`,
			 description : `gl.STATIC_DRAW 상수`,
			 return : 'gl.STATIC_DRAW or gl.DYNAMIC_DRAW'
		 }
         :DOC*/
        this['drawMode'] = drawMode ? drawMode : tGL.STATIC_DRAW;
        parseInterleaveDefineInfo(this, this['bufferType'], this['data'], interleaveDefineInfoList);
        /**DOC:
         {
			 code : 'PROPERTY',
			 title :`webglBuffer`,
			 description : `생성된 WebGLBuffer`,
			 return : 'WebGLBuffer Instance'
		 }
         :DOC*/
        this['webglBuffer'] = tGL.createBuffer();
        this['webglBuffer']['gl'] = tGL
        this['webglBuffer']['redGL'] = redGL
        this['_UUID'] = RedGL.makeUUID();
        /**DOC:
         {
			 code : 'METHOD',
			 title :`upload`,
			 description : `
				 버퍼 데이터 갱신
				 기존 버퍼의 타입과 다른 타입의 데이터가 들어 올 경우 에러.
			 `,
			 params : {
				 data : [
					 {type:'TypedArray'},
					 `갱신 할 데이터`
				 ]
			 },
			 example : `
				 // ... interleaveData 정의 후 tInterleaveBuffer 버퍼를 가정하면
				 // 아래와 같이 데이터를 변경하고 버퍼데이터를 업데이트 시킬수 있다.
				 interleaveData[0] = Math.sin(time / 1000) * 1
				 interleaveData[2] = Math.cos(time / 1000) * 2
				 // 버퍼정보 업로드
				 tInterleaveBuffer.upload(interleaveData)
			 `,
			 return : 'RedBuffer Instance'
		 }
         :DOC*/
        this['upload'] = function (data) {
            if (this['glArrayType'] == getGlDataTypeByTypeArray(tGL, bufferType, data)) {
                this['data'] = data;
                tGL.bindBuffer(this['glBufferType'], this['webglBuffer']);
                tGL.bufferData(this['glBufferType'], this['data'], this['drawMode']);
                parseInterleaveDefineInfo(this, this['bufferType'], this['data'], this['interleaveDefineInfoList']);
                if (this['bufferType'] == RedBuffer.ARRAY_BUFFER) this['triangleNum'] = this['data'].length / (this['stride'] ? this['stride'] : 3);
                if (this['bufferType'] == RedBuffer.ELEMENT_ARRAY_BUFFER) this['triangleNum'] = this['pointNum'] / 3;
            } else RedGLUtil.throwFunc('RedBuffer : upload - data형식이 기존 형식과 다름', data)
        };
        this['upload'](this['data']);
        console.log(this);
    };
    /**DOC:
     {
         code : 'METHOD',
         title :`dispose`,
         description : `dispose`,
         return : 'void'
     }
     :DOC*/
    RedBuffer.prototype['dispose'] = function () {
        if (this['webglBuffer'] && !this['isPrimitiveBuffer']) {
            this['webglBuffer']['gl'].deleteBuffer(this['webglBuffer'])
            delete this['webglBuffer']['redGL']['_datas']['RedBuffer'][this['bufferType']][this['key']]
            this['webglBuffer'] = null
        }
    }
    /**DOC:
     {
		 code: 'CONST',
		 title :`RedBuffer.ARRAY_BUFFER`,
		 description : `ARRAY_BUFFER 버퍼상수 `,
		 return : 'String'
	 }
     :DOC*/
    RedBuffer.ARRAY_BUFFER = 'arrayBuffer';
    /**DOC:
     {
		 code: 'CONST',
		 title :`RedBuffer.ELEMENT_ARRAY_BUFFER`,
		 description : `ELEMENT_ARRAY_BUFFER 버퍼상수`,
		 return : 'String'
	 }
     :DOC*/
    RedBuffer.ELEMENT_ARRAY_BUFFER = 'elementArrayBuffer';
    Object.freeze(RedBuffer);
})();
"use strict";
var RedGeometry;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedGeometry`,
		 description : `
		     인터리브 버퍼와 인덱스 버퍼로 구성된 정보 구조체.
			 RedGeometry Instance 생성자.
		 `,
		 params : {
			 interleaveBuffer : [
				 {type:'RedBuffer'},
				 `필수`
			 ],
			 indexBuffer : [
				 {type:'RedBuffer'},
				 `필수아님`
			 ]
		 },
		 demo : '../example/RedBuffer.html',
		 example : `
			 RedGeometry(interleaveBuffer,indexBuffer)
		 `,
		 return : 'RedGeometry Instance'
	 }
     :DOC*/
    RedGeometry = function (interleaveBuffer, indexBuffer) {
        if (!(this instanceof RedGeometry)) return new RedGeometry(interleaveBuffer, indexBuffer);
        interleaveBuffer instanceof RedBuffer || RedGLUtil.throwFunc('RedGeometry : interleaveBuffer - RedBuffer Instance만 허용.', interleaveBuffer);
        interleaveBuffer['bufferType'] == RedBuffer.ARRAY_BUFFER || RedGLUtil.throwFunc('RedGeometry : interleaveBuffer - RedBuffer.ARRAY_BUFFER 타입만 허용.', interleaveBuffer);
        if (indexBuffer) {
            interleaveBuffer || RedGLUtil.throwFunc('RedGeometry : indexBuffer는 반드시 interleaveBuffer와 쌍으로 입력되어야함.', indexBuffer);
            indexBuffer instanceof RedBuffer || RedGLUtil.throwFunc('RedGeometry : indexBuffer - RedBuffer Instance만 허용.', indexBuffer);
            indexBuffer['bufferType'] == RedBuffer.ELEMENT_ARRAY_BUFFER || RedGLUtil.throwFunc('RedGeometry : indexBuffer - RedBuffer.ELEMENT_ARRAY_BUFFER 타입만 허용.', indexBuffer);
        }
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`interleaveBuffer`,
			 description : `interleaveBuffer`,
			 return : 'RedBuffer Instance'
		 }
         :DOC*/
        this['interleaveBuffer'] = interleaveBuffer;
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`indexBuffer`,
			 description : `indexBuffer`,
			 return : 'RedBuffer Instance'
		 }
         :DOC*/
        this['indexBuffer'] = indexBuffer;
        this['_volume'] = null;
        this['_UUID'] = RedGL.makeUUID();
        // console.log(this);
    };
    RedGeometry.prototype = {
        /**DOC:
         {
		     code : 'METHOD',
			 title :`disposeAllBuffer`,
			 description : `내부 interleaveBuffer, indexBuffer 둘다 dispose`,
			 return : 'void'
		 }
         :DOC*/
        disposeAllBuffer: (function () {
            var k;
            return function () {
                for (k in this) {
                    if (this && this[k] instanceof RedBuffer) this[k].dispose()
                }
            }
        })(),
        /**DOC:
         {
		     code : 'METHOD',
			 title :`disposeBuffer`,
			 description : `입력된키( interleaveBuffer or indexBuffer )에 해당하는 버퍼 dispose`,
			 return : 'void'
		 }
         :DOC*/
        disposeBuffer: function (key) {
            if (this && this[key] instanceof RedBuffer) this[key].dispose()
        }
    };
    /**DOC:
     {
		     code : 'METHOD',
			 title :`volume`,
			 description : `지오메트리 고유의 볼륨을 리턴함`,
			 return : 'array : [xVolume, yVolume, zVolume]'
		 }
     :DOC*/
    Object.defineProperty(RedGeometry.prototype, 'volume', {
        get: function () {
            var minX, minY, minZ, maxX, maxY, maxZ, t0, t1, t2, t, i;
            var stride = this['interleaveBuffer']['stride']
            // if (!volume[this]) {
            minX = minY = minZ = maxX = maxY = maxZ = 0,
                t = this['interleaveBuffer']['data'], i = 0, len =this['interleaveBuffer']['pointNum']
            for (i; i < len; i++) {
                t0 = i*stride , t1 = t0 + 1, t2 = t0 + 2,
                    minX = t[t0] < minX ? t[t0] : minX,
                    maxX = t[t0] > maxX ? t[t0] : maxX,
                    minY = t[t1] < minY ? t[t1] : minY,
                    maxY = t[t1] > maxY ? t[t1] : maxY,
                    minZ = t[t2] < minZ ? t[t2] : minZ,
                    maxZ = t[t2] > maxZ ? t[t2] : maxZ;

            }
            this['_volume'] = [maxX - minX, maxY - minY, maxZ - minZ];
            // }
            return this['_volume'];
        }
    })

    Object.freeze(RedGeometry);
})();
"use strict";
var RedInterleaveInfo;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedInterleaveInfo`,
		 description : `
		     인터리브 버퍼 구성 정보 데이터.
			 RedInterleaveInfo Instance 생성자
		 `,
		 params : {
			 attributeKey : [
				 {type:'String'},
				 `쉐이더내의 attributeKey키`
			 ],
			 size : [
				 {type:'Number'},
				 `구성 사이즈`
			 ],
			 normalize : [
				 {type:'Booleab\n'},
				 `버퍼 업로드시 노멀라이징 여부`,
				 `기본값 : false`
			 ]
		 },
		 example : `
			 RedInterleaveInfo('aVertexPosition', 3); // 프로그램에서 aVertexPosition 키를 사용하고 포인트당 3개로 구성됨을 선언함.
		 `,
		 return : 'RedInterleaveInfo Instance'
	 }
     :DOC*/
    RedInterleaveInfo = function (attributeKey, size, normalize) {
        if (!(this instanceof RedInterleaveInfo)) return new RedInterleaveInfo(attributeKey, size, normalize);
        typeof attributeKey == 'string' || RedGLUtil.throwFunc('RedInterleaveInfo : attributeKey - 문자열만 허용', attributeKey);
        attributeKey.charAt(0) == 'a' || RedGLUtil.throwFunc('RedInterleaveInfo : attributeKey 첫글자는 a로 시작해야합니다.', attributeKey);
        attributeKey.charAt(1) == attributeKey.charAt(1).toUpperCase() || RedInterleaveInfo.throwFunc('RedInterleaveInfo : attributeKey 두번째 글자는 대문자 시작해야합니다.', attributeKey);
        typeof size == 'number' || RedGLUtil.throwFunc('RedInterleaveInfo : size - 숫자만 허용', size);
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`attributeKey`,
			 description : '쉐이더상 접근할 어트리뷰트 키',
			 return : 'String'
		 }
         :DOC*/
        this['attributeKey'] = attributeKey;
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`size`,
			 description : '어트리뷰트 사이즈',
			 return : 'Int'
		 }
         :DOC*/
        this['size'] = size;
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`normalize`,
			 description : `
			    기본값 : false
		     `,
			 return : 'Boolean'
		 }
         :DOC*/
        this['normalize'] = normalize == undefined ? false : true;
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`offset`,
			 description : `
			    RedBuffer 생성시 자동 주입됨.
			 `,
			 return : 'Int'
		 }
         :DOC*/
        this['offset'] = null;
    };
    Object.freeze(RedInterleaveInfo);
})();
"use strict";
var RedBaseMaterial;
(function () {
    var prepareNum = 0
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedBaseMaterial`,
		 description : `
			 RedBaseMaterial 기저층
		 `,
		 return : 'RedBaseMaterial instance'
	 }
     :DOC*/
    RedBaseMaterial = function () {
    };
    RedBaseMaterial.prototype = {
        /**DOC:
         {
			 code : 'METHOD',
			 title :`makeProgramList`,
			 description : `
				 <h1>다중 프로그램 리스트 생성기.
				 TODO:// 좀더 구체적인 설명 적어야함</h1>
			 `,
			 params : {
			    target : [
			        { type : 'RedBaseMaterial Instance' }
			    ],
			    redGL : [
			        { type : 'RedGL Instance' }
			    ],
			    programName : [
			        { type : 'String' },
			        '기본 프로그램이름'
			    ],
			    vSource : [
			        { type : 'String' },
			        '버텍스 쉐이더 소스'
			    ],
			    fSource : [
			        { type : 'String' },
			        '프레그먼트 쉐이더'
			    ],
			    programOptionList : [
			        { type : 'Array' },
			        '옵션키 리스트'
			    ]
			 },
			 return : 'void'
		 }
         :DOC*/
        makeProgramList: (function () {
            //TODO: 이걸좀 정리해야하는데..
            var makePrepareProgram;
            var makeSystemProgram, makeOptionProgram;
            var systemKeyList = ['fog', 'sprite3D', 'skin', 'directionalShadow'];
            systemKeyList.sort();
            makeSystemProgram = function (programList, programName, redGL, vSource, fSource, systemOptionList, programOptionList) {
                if (!programList['basic'][programName]) programList['basic'][programName] = new makePrepareProgram(redGL, programList, programName, vSource, fSource);
                systemOptionList.forEach(function (key, index) {
                    systemOptionList.sort();
                    programOptionList.sort();
                    // console.log(key)
                    var tSpaceName = systemOptionList.join('_');
                    if (!programList[tSpaceName]) programList[tSpaceName] = {};
                    if (!programList[tSpaceName][programName]) programList[tSpaceName][programName] = new makePrepareProgram(redGL, programList, programName, vSource, fSource, systemOptionList);
                    // else console.log('중복', programName)
                    // var newList = systemOptionList.concat();
                    // newList.splice(index, 1);
                    var newList = systemOptionList.concat();
                    newList.splice(index, 1);
                    // console.log('newList', newList)
                    makeOptionProgram(programList, tSpaceName, programName, redGL, vSource, fSource, systemOptionList, programOptionList);
                    makeSystemProgram(programList, programName, redGL, vSource, fSource, newList, programOptionList);
                })
            };
            makeOptionProgram = function (programList, spaceName, programName, redGL, vSource, fSource, systemOptionList, programOptionList) {
                programOptionList = programOptionList || [];
                // console.log('rootName', rootName, list)
                // programOptionList.forEach(function (key, index) {
                //     // console.log(key)
                //     var tOptionName = programOptionList.join('_');
                //     // console.log('tOptionName', tOptionName)
                //     if (!programList['basic'][programName + '_' + tOptionName]) programList['basic'][programName + '_' + tOptionName] = new makePrepareProgram(redGL, programList, programName, vSource, fSource, null, programOptionList);
                //     if (!programList[spaceName][programName + '_' + tOptionName]) programList[spaceName][programName + '_' + tOptionName] = new makePrepareProgram(redGL, programList, programName, vSource, fSource, systemOptionList, programOptionList);
                //     // else console.log('중복', programName)
                //     var newList = programOptionList.concat();
                //     newList.splice(index, 1);
                //     // console.log('newList', newList)
                //     makeOptionProgram(programList, spaceName, programName, redGL, vSource, fSource, systemOptionList, newList);
                // })
                function k_combinations(set, k) {
                    var i, j, combs, head, tailcombs;
                    // There is no way to take e.g. sets of 5 elements from
                    // a set of 4.
                    if (k > set.length || k <= 0) {
                        return [];
                    }

                    // K-sized set has only one K-sized subset.
                    if (k == set.length) {
                        return [set];
                    }

                    // There is N 1-sized subsets in a N-sized set.
                    if (k == 1) {
                        combs = [];
                        for (i = 0; i < set.length; i++) {
                            combs.push([set[i]]);
                        }
                        return combs;
                    }
                    combs = [];
                    for (i = 0; i < set.length - k + 1; i++) {
                        // head is a list that includes only our current element.
                        head = set.slice(i, i + 1);
                        // We take smaller combinations from the subsequent elements
                        tailcombs = k_combinations(set.slice(i + 1), k - 1);
                        // For each (k-1)-combination we join it with the current
                        // and store it to the set of k-combinations.
                        for (j = 0; j < tailcombs.length; j++) {
                            combs.push(head.concat(tailcombs[j]));
                        }
                    }
                    return combs;
                }
                function combinations(set) {
                    var k, i, combs, k_combs;
                    combs = [];
                    for (k = 1; k <= set.length; k++) {
                        k_combs = k_combinations(set, k);
                        for (i = 0; i < k_combs.length; i++) {
                            combs.push(k_combs[i]);
                        }
                    }
                    return combs;
                }
                // console.log('combinations(programOptionList)',combinations(programOptionList))
                var tList = combinations(programOptionList)

                tList.forEach(function (v) {
                    var tOptionName = v.join('_');
                    if (!programList['basic'][programName + '_' + tOptionName]) programList['basic'][programName + '_' + tOptionName] = new makePrepareProgram(redGL, programList, programName, vSource, fSource, null, v);
                    if (!programList[spaceName][programName + '_' + tOptionName]) programList[spaceName][programName + '_' + tOptionName] = new makePrepareProgram(redGL, programList, programName, vSource, fSource, systemOptionList, v);

                })

            };
            makePrepareProgram = function (redGL, programList, programName, vSource, fSource, systemKey, optionKey) {
                prepareNum++
                optionKey = optionKey || [];
                this['optionList'] = optionKey.concat(systemKey || []);
                this['systemKey'] = (systemKey || ['basic']).join('_');
                this['searchKey'] = programName + (optionKey.length ? '_' + optionKey.join('_') : '');
                this['key'] = programName + (this['optionList'].length ? '_' + this['optionList'].join('_') : '');
                this['_prepareProgramYn'] = true;
                this['_makePrepareProgram'] = function () {
                    return programList[this['systemKey']][this['searchKey']] = RedProgram['makeProgram'](redGL, programName, vSource, fSource, this['optionList']);
                }
            };
            return function (target, redGL, programName, vSource, fSource, programOptionList) {
                if (!programOptionList) programOptionList = [];
                if (!redGL['_datas']['RedProgramGroup']) redGL['_datas']['RedProgramGroup'] = {};
                if (redGL['_datas']['RedProgramGroup'][programName]) {
                    target['_programList'] = redGL['_datas']['RedProgramGroup'][programName];
                    console.log('캐싱프로그램그룹사용 :', programName);
                }
                else {
                    target['_programList'] = {
                        basic: {}
                    };
                    // console.log('//////////////////////////////////////////////////////////////');
                    // console.log(systemKeyList);
                    makeSystemProgram(target['_programList'], programName, redGL, vSource, fSource, systemKeyList, programOptionList);
                    // console.log(target['_programList']);
                    // console.log('//////////////////////////////////////////////////////////////');
                    // 일반 프로그램생성
                    target['_programList']['basic'][programName] = RedProgram['makeProgram'](redGL, programName, vSource, fSource);
                    // 그룹데이터 캐싱
                    redGL['_datas']['RedProgramGroup'][programName] = target['_programList'];
                }
                target['program'] = target['_programList']['basic'][programName];
                console.log('prepareNum',prepareNum)
            }
        })(),
        _searchProgram: (function () {
            var i;
            var tKey;
            var t0;
            return function (PROGRAM_NAME, keyList) {
                t0 = [];
                if (keyList) {
                    i = keyList.length;
                    while (i--) if (this[tKey = keyList[i]]) t0.push(tKey)
                }
                // console.log(keyList)
                if (t0.length) {
                    t0.sort();
                    t0 = PROGRAM_NAME + '_' + t0.join('_');
                } else t0 = PROGRAM_NAME;
                this['program'] = this['_programList']['basic'][t0];
                // console.log('현재프로그램', this['program'])
            }
        })(),
        /**DOC:
         {
			 code : 'METHOD',
			 title :`checkUniformAndProperty`,
			 description : `
				 재질의 Program에서 사용하고 있는 유니폼키가
				 재질의 속성으로 매칭되지 않는 경우 검출.
				 ex) Program에서 <b>uTestUniform</b>을 사용 할 경우 <b>testUniform</b>이 정의 되어 있어야함.
			 `,
			 return : 'void'
		 }
         :DOC*/
        checkUniformAndProperty: (function () {
            var i;
            var tUniformGroup, tUniformLocationInfo, tWebGLUniformLocation;
            return function () {
                if (this['program']['_prepareProgramYn']) {
                    this['program'] = this['program']['_makePrepareProgram']()
                }
                tUniformGroup = this['program']['uniformLocation'];
                i = tUniformGroup.length;
                while (i--) {
                    tUniformLocationInfo = tUniformGroup[i];
                    tWebGLUniformLocation = tUniformLocationInfo['location'];
                    if (tWebGLUniformLocation && !(tUniformLocationInfo['materialPropertyName'] in this)) {
                        RedGLUtil.throwFunc(this['program']['key'] + '- ', tUniformLocationInfo['materialPropertyName'], '속성이 정의 되지않았습니다.');
                    }
                }
            }
        })(),
        disposeAllTexture: (function () {
            var k;
            return function () {
                for (k in this) {
                    if (this[k] instanceof RedBaseTexture) this[k].dispose()
                }
            }
        })(),
        disposeTexture: function (key) {
            if (this[key] instanceof RedBaseTexture) this[key].dispose()
        }
    };
    Object.freeze(RedBaseMaterial);
})();
"use strict";
var RedTextureOptionChecker;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedTextureOptionChecker`,
		 description : `texture 옵션 검증`,
		 return : 'RedTextureOptionChecker'
	 }
     :DOC*/
    RedTextureOptionChecker = {
        /**DOC:
         {
			 code:'STATIC METHOD',
			 title :`check`,
			 description : `
				 texture 옵션 검증
			 `,
			 params : {
				 type : [
					 {type:'RedBaseTexture'}
				 ],
				 option : [
					 {type:'Object'}
				 ],
				 gl : [
					 {type:'webGL Context'}
				 ]
			 },
			 return : 'void'
		 }
         :DOC*/
        check: function (type, option, gl) {
            if (option) {
                if (
                    option['min']
                    && !(
                        option['min'] == gl.LINEAR
                        || option['min'] == gl.NEAREST
                        || option['min'] == gl.NEAREST_MIPMAP_NEAREST
                        || option['min'] == gl.LINEAR_MIPMAP_NEAREST
                        || option['min'] == gl.NEAREST_MIPMAP_LINEAR
                        || option['min'] == gl.LINEAR_MIPMAP_LINEAR
                    )
                ) RedGLUtil.throwFunc(type + ': min 텍스쳐 옵션에서 사용할수 없는값 입력됨.', '입력값 : ' + option['min']);
                if (
                    option['mag']
                    && !(
                        option['mag'] == gl.LINEAR
                        || option['mag'] == gl.NEAREST
                    )
                ) RedGLUtil.throwFunc(type + ' : mag 텍스쳐 옵션에서 사용할수 없는값 입력됨.', '입력값 : ' + option['mag']);
                if (
                    option['wrap_s']
                    && !(
                        option['wrap_s'] == gl.REPEAT
                        || option['wrap_s'] == gl.CLAMP_TO_EDGE
                        || option['wrap_s'] == gl.MIRRORED_REPEAT
                    )
                ) RedGLUtil.throwFunc(type + ' : wrap_s 텍스쳐 옵션에서 사용할수 없는값 입력됨.', '입력값 : ' + option['wrap_s']);
                if (
                    option['wrap_t']
                    && !(
                        option['wrap_t'] == gl.REPEAT
                        || option['wrap_t'] == gl.CLAMP_TO_EDGE
                        || option['wrap_t'] == gl.MIRRORED_REPEAT
                    )
                ) RedGLUtil.throwFunc(type + ' : wrap_t 텍스쳐 옵션에서 사용할수 없는값 입력됨.', '입력값 : ' + option['wrap_t']);
            }
        }
    };
    Object.freeze(RedTextureOptionChecker);
})();

"use strict";
var RedBitmapTexture;
(function () {
    var loadTexture;
    var makeWebGLTexture;
    var MAX_TEXTURE_SIZE;
    makeWebGLTexture = function (gl, texture, source, option) {
        gl.activeTexture(gl.TEXTURE0 + 0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        //level,internalFormat, format, type
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
        // gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, option['min'] ? option['min'] : gl.LINEAR_MIPMAP_NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, option['mag'] ? option['mag'] : gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, option['wrap_s'] ? option['wrap_s'] : gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, option['wrap_t'] ? option['wrap_t'] : gl.REPEAT);

        if (gl['glExtension']['EXT_texture_filter_anisotropic'] && option['anisotropic']) {
            gl.texParameterf(gl.TEXTURE_2D, gl['glExtension']['EXT_texture_filter_anisotropic'].TEXTURE_MAX_ANISOTROPY_EXT, option['anisotropic']);
        }
        try {
            gl.generateMipmap(gl.TEXTURE_2D);
        } catch (error) {
            console.log('밉맵을 생성할수 없음', source)
        }
        gl.bindTexture(gl.TEXTURE_2D, null);
    };
    loadTexture = (function () {
        return function (gl, self, texture, src, option, callback) {
            if (!option) option = {};
            if (window['OffscreenCanvas'] && src instanceof OffscreenCanvas || window['HTMLCanvasElement'] && src instanceof HTMLCanvasElement) {
                var tSource = RedGLUtil.makePowerOf2Source(gl, src, MAX_TEXTURE_SIZE)
                console.log('tSource', tSource)
                makeWebGLTexture(gl, texture, tSource, option);
                callback ? callback.call(self, true) : 0;
            }
            else {
                RedImageLoader(
                    src,
                    function (v) {
                        console.log(this)
                        var tSource = RedGLUtil.makePowerOf2Source(gl, this['source'], MAX_TEXTURE_SIZE)
                        makeWebGLTexture(gl, texture, tSource, option);
                        callback ? callback.call(self, true) : 0;
                    },
                    function (v) {
                        callback ? callback.call(self, false) : 0
                    }
                )
            }
        }
    })();
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedBitmapTexture`,
		 description : `
			 RedBitmapTexture Instance 생성
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 src : [
				 {type:'string'}
			 ],
			 option : [
				 {type:'Object'},
				 '텍스쳐 정의옵션',
				 `
				 <code>
				 {
					 min: gl.LINEAR_MIPMAP_NEAREST,
					 mag: gl.LINEAR,
					 wrap_s: gl.REPEAT,
					 wrap_t: gl.REPEAT,
					 anisotropic: 16 // 지원가능한경우에만 작동
				 }
				 </code>
				 `
			 ],
			 callBack : [
			    {type:'Function'}
			 ]
		 },
		 extends : [
		    'RedBaseTexture'
		 ],
		 demo : '../example/resources/RedBitmapTexture.html',
		 example : `
            RedBitmapTexture(
                RedGL Instance,
                src,
                {
                    min: gl.LINEAR_MIPMAP_NEAREST,
                    mag: gl.LINEAR,
                    wrap_s: gl.REPEAT,
                    wrap_t: gl.REPEAT
                }
            )
		 `,
		 return : 'RedBitmapTexture Instance'
	 }
     :DOC*/
    RedBitmapTexture = function (redGL, src, option, callback) {
        var tGL;
        if (!(this instanceof RedBitmapTexture)) return new RedBitmapTexture(redGL, src, option, callback);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedBitmapTexture : RedGL Instance만 허용.', redGL);
        (callback && typeof callback == 'function') || !callback || RedGLUtil.throwFunc('RedBitmapTexture : callback Function만 허용.', callback);
        tGL = redGL.gl;
        MAX_TEXTURE_SIZE = redGL['detect']['texture']['MAX_TEXTURE_SIZE'];

        option = option || {}
        var tKey = src + JSON.stringify(option)
        if (typeof src == 'string') {
            if (!redGL['_datas']['textures']) redGL['_datas']['textures'] = {}
            if (redGL['_datas']['textures'][tKey]) {
                if (callback) {
                    setTimeout(function () {
                        callback.call(this, true)
                    }, 1)
                }
                return redGL['_datas']['textures'][tKey]
            }
        }


        this['webglTexture'] = tGL.createTexture();
        this['webglTexture']['gl'] = tGL
        this['_load'] = function (needEmpty) {
            RedTextureOptionChecker.check('RedBitmapTexture', option, tGL);
            if (needEmpty) this.setEmptyTexture(tGL, this['webglTexture']);
            if (this['_src']) loadTexture(tGL, this, this['webglTexture'], this['_src'], this['_option'], this['_callback']);
        }
        this['_option'] = option;
        this['callback'] = callback;
        this['src'] = src;
        this['_UUID'] = RedGL.makeUUID();
        redGL['_datas']['textures'][tKey] = this
        console.log(this);
    };
    RedBitmapTexture.prototype = new RedBaseTexture();

    /**DOC:
     {
		 code:`PROPERTY`,
		 title :`src`,
		 description : `
			 이미지 경로
		 `,
		 return : 'String or HTMLCanvasElement'
	 }
     :DOC*/
    Object.defineProperty(RedBitmapTexture.prototype, 'src', {
        get: function () {
            return this['_src']
        },
        set: function (v) {
            if (window['OffscreenCanvas']) {
                this['_src'] = v;
                this._load(true)
                return
            }
            else if (v && typeof v != 'string' && !(window['HTMLCanvasElement'] && v instanceof HTMLCanvasElement)) RedGLUtil.throwFunc('RedBitmapTexture : src는 문자열 or Canvas Element만 허용.', '입력값 : ' + v);
            this['_src'] = v;
            this._load(true)
        }
    });
    /**DOC:
     {
		 code:`PROPERTY`,
		 title :`option`,
		 description : `
			 텍스쳐 옵션 정의
		 `,
		 return : 'Object'
	 }
     :DOC*/
    Object.defineProperty(RedBitmapTexture.prototype, 'option', {
        get: function () {
            return this['_option']
        },
        set: function (v) {
            this['_option'] = v;
            this._load(false)
        }
    });
    Object.freeze(RedBitmapTexture);
})();

"use strict";
var RedVideoTexture;
(function () {
    var loadTexture;
    var makeWebGLTexture;
    makeWebGLTexture = function (gl, texture, source) {
        gl.activeTexture(gl.TEXTURE0 + 0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        //level,internalFormat, format, type
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
        // gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.bindTexture(gl.TEXTURE_2D, null);
    };
    loadTexture = (function () {
        return function (gl, self, texture, src, callback) {
            var onError, onLoad;
            var clearEvents;
            var video;
            clearEvents = function (video) {
                video.removeEventListener('error', onError);
                video.removeEventListener('canplaythrough', onLoad);
            };
            onError = function () {
                clearEvents(this);
                callback ? callback.call(self, false) : 0
            };
            onLoad = function () {
                clearEvents(this);
                this.play();
                self['_videoDom']['loaded'] = true;
                makeWebGLTexture(gl, texture, this);
                callback ? callback.call(self, true) : 0
            };
            if (src instanceof HTMLVideoElement) video = src;
            else {
                video = document.createElement(('video'));
                video.src = src;
            }
            video.loop = 1;
            video.muted = true;
            video.setAttribute('autoplay', '');
            //document.body.appendChild(video)
            video.style.cssText = 'position:absolute;top:0px;left:0px;z-index:200';
            self['_videoDom'] = video;
            self['_videoDom']['loaded'] = false;
            video.addEventListener('error', onError);
            video.addEventListener('canplaythrough', onLoad);
        }
    })();
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedVideoTexture`,
		 description : `
			 RedVideoTexture Instance 생성
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 src : [
				 {type:'string'}
			 ],
			 callback : [
			    {type:'Function'}
			 ]
		 },
		 extends : [
		    'RedBaseTexture'
		 ],
		 demo : '../example/resources/RedVideoTexture.html',
		 example : `
            RedVideoTexture(
                RedGL Instance,
                src or HTMLVideoElement
            )
		 `,
		 return : 'RedVideoTexture Instance'
	 }
     :DOC*/
    RedVideoTexture = function (redGL, src, callback) {
        var tGL;
        if (!(this instanceof RedVideoTexture)) return new RedVideoTexture(redGL, src, callback);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedVideoTexture : RedGL Instance만 허용.', redGL);
        tGL = redGL.gl;
        this['webglTexture'] = tGL.createTexture();
        this['webglTexture']['gl'] = tGL
        this['_UUID'] = RedGL.makeUUID();
        this['_load'] = function (needEmpty) {
            if (needEmpty) this.setEmptyTexture(tGL, this['webglTexture']);
            if (this['_src']) loadTexture(tGL, this, this['webglTexture'], this['_src'], this['_callback']);
        }
        this['callback'] = callback;
        this['src'] = src;
        console.log(this);
    };
    RedVideoTexture.prototype = new RedBaseTexture();
    /**DOC:
     {
		 code:`PROPERTY`,
		 title :`src`,
		 description : `
			 비디오 경로
		 `,
		 return : 'String or HTMLVideoElement'
	 }
     :DOC*/
    Object.defineProperty(RedVideoTexture.prototype, 'src', {
        get: function () {
            return this['_src']
        },
        set: function (v) {
            if (v && typeof v != 'string' && !(v instanceof HTMLVideoElement)) RedGLUtil.throwFunc('RedVideoTexture : src는 문자열 or HTMLVideoElement만 허용.', '입력값 : ' + v);
            this['_src'] = v;
            this._load(true)
        }
    });
    Object.freeze(RedVideoTexture);
})();

"use strict";
var RedDDSTexture;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedDDSTexture`,
		 description : `
			 RedDDSTexture Instance 생성
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 src : [
				 {type:'string'}
			 ],
			 option : [
				 {type:'Object'},
				 '텍스쳐 정의옵션',
				 `
					<h2>dds는 현재 지원하지 않음</h2>
				 `
			 ]
		 },
	     demo : '../example/resources/RedDDSTexture.html',
		 extends : [
		    'RedBaseTexture'
		 ],
		 example : `
		 RedDDSTexture( RedGL Instance,  src, {
			 min: gl.LINEAR_MIPMAP_NEAREST,
			 mag: gl.LINEAR,
			 wrap_s: gl.REPEAT,
			 wrap_t: gl.REPEAT
		 })
		 `,
		 return : 'RedDDSTexture Instance'
	 }
     :DOC*/
    RedDDSTexture = function (redGL, src, option, callback) {
        var tGL;
        if (!(this instanceof RedDDSTexture)) return new RedDDSTexture(redGL, src, option, callback);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedDDSTexture : RedGL Instance만 허용.', redGL);
        tGL = redGL.gl;
        tGL.glExtension['WEBGL_compressed_texture_s3tc'] || RedGLUtil.throwFunc('RedDDSTexture : WEBGL_compressed_texture_s3tc확장을 지원하지않는 하드웨어입니다.');

        this['webglTexture'] = tGL.createTexture();
        this['webglTexture']['gl'] = tGL
        this['_load'] = function (needEmpty) {
            RedTextureOptionChecker.check('RedDDSTexture', option, tGL);
            if (needEmpty) this.setEmptyTexture(tGL, this['webglTexture']);
            if (this['_src']) this.loadDDSTexture(tGL, tGL.glExtension['WEBGL_compressed_texture_s3tc'], this['_src'], this['_callback']);
        }
        this['callback'] = callback;
        this['src'] = src;
        this['_UUID'] = RedGL.makeUUID();
        console.log(this);
    }
    RedDDSTexture.prototype = new RedBaseTexture();
    /**DOC:
     {
		 code:`PROPERTY`,
		 title :`src`,
		 description : `
			 src
		 `,
		 return : 'void'
	 }
     :DOC*/
    Object.defineProperty(RedDDSTexture.prototype, 'src', {
        get: function () {
            return this['_src']
        },
        set: function (v) {
            if (v && typeof  v != 'string') RedGLUtil.throwFunc('RedDDSTexture : src는 문자열만 허용.', '입력값 : ' + v);
            this['_src'] = v;
            this._load(true)
        }
    });
})();
/**
 * @fileoverview dds - Utilities for loading DDS texture files
 * @author Brandon Jones
 * @version 0.1
 */

/*
 * Copyright (c) 2012 Brandon Jones
 *
 * This software is provided 'as-is', without any express or implied
 * warranty. In no event will the authors be held liable for any damages
 * arising from the use of this software.
 *
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 *
 *    1. The origin of this software must not be misrepresented; you must not
 *    claim that you wrote the original software. If you use this software
 *    in a product, an acknowledgment in the product documentation would be
 *    appreciated but is not required.
 *
 *    2. Altered source versions must be plainly marked as such, and must not
 *    be misrepresented as being the original software.
 *
 *    3. This notice may not be removed or altered from any source
 *    distribution.
 */
(function (global) {
    "use strict";
    // All values and structures referenced from:
    // http://msdn.microsoft.com/en-us/library/bb943991.aspx/
    var DDS_MAGIC = 0x20534444;
    var DDSD_CAPS = 0x1,
        DDSD_HEIGHT = 0x2,
        DDSD_WIDTH = 0x4,
        DDSD_PITCH = 0x8,
        DDSD_PIXELFORMAT = 0x1000,
        DDSD_MIPMAPCOUNT = 0x20000,
        DDSD_LINEARSIZE = 0x80000,
        DDSD_DEPTH = 0x800000;
    var DDSCAPS_COMPLEX = 0x8,
        DDSCAPS_MIPMAP = 0x400000,
        DDSCAPS_TEXTURE = 0x1000;
    var DDSCAPS2_CUBEMAP = 0x200,
        DDSCAPS2_CUBEMAP_POSITIVEX = 0x400,
        DDSCAPS2_CUBEMAP_NEGATIVEX = 0x800,
        DDSCAPS2_CUBEMAP_POSITIVEY = 0x1000,
        DDSCAPS2_CUBEMAP_NEGATIVEY = 0x2000,
        DDSCAPS2_CUBEMAP_POSITIVEZ = 0x4000,
        DDSCAPS2_CUBEMAP_NEGATIVEZ = 0x8000,
        DDSCAPS2_VOLUME = 0x200000;
    var DDPF_ALPHAPIXELS = 0x1,
        DDPF_ALPHA = 0x2,
        DDPF_FOURCC = 0x4,
        DDPF_RGB = 0x40,
        DDPF_YUV = 0x200,
        DDPF_LUMINANCE = 0x20000;

    function FourCCToInt32(value) {
        return value.charCodeAt(0) +
            (value.charCodeAt(1) << 8) +
            (value.charCodeAt(2) << 16) +
            (value.charCodeAt(3) << 24);
    }

    function Int32ToFourCC(value) {
        return String.fromCharCode(
            value & 0xff,
            (value >> 8) & 0xff,
            (value >> 16) & 0xff,
            (value >> 24) & 0xff
        );
    }

    var FOURCC_DXT1 = FourCCToInt32("DXT1");
    var FOURCC_DXT3 = FourCCToInt32("DXT3");
    var FOURCC_DXT5 = FourCCToInt32("DXT5");
    var headerLengthInt = 31; // The header length in 32 bit ints
    // Offsets into the header array
    var off_magic = 0;
    var off_size = 1;
    var off_flags = 2;
    var off_height = 3;
    var off_width = 4;
    var off_mipmapCount = 7;
    var off_pfFlags = 20;
    var off_pfFourCC = 21;
    // Little reminder for myself where the above values come from
    /*DDS_PIXELFORMAT {
        int32 dwSize; // offset: 19
        int32 dwFlags;
        char[4] dwFourCC;
        int32 dwRGBBitCount;
        int32 dwRBitMask;
        int32 dwGBitMask;
        int32 dwBBitMask;
        int32 dwABitMask; // offset: 26
    };

    DDS_HEADER {
        int32 dwSize; // 1
        int32 dwFlags;
        int32 dwHeight;
        int32 dwWidth;
        int32 dwPitchOrLinearSize;
        int32 dwDepth;
        int32 dwMipMapCount; // offset: 7
        int32[11] dwReserved1;
        DDS_PIXELFORMAT ddspf; // offset 19
        int32 dwCaps; // offset: 27
        int32 dwCaps2;
        int32 dwCaps3;
        int32 dwCaps4;
        int32 dwReserved2; // offset 31
    };*/
    /**
     * Parses a DDS file from the given arrayBuffer and uploads it into the currently bound texture
     *
     * @param {WebGLRenderingContext} gl WebGL rendering context
     * @param {WebGLCompressedTextureS3TC} ext WEBGL_compressed_texture_s3tc extension object
     * @param {TypedArray} arrayBuffer Array Buffer containing the DDS files data
     * @param {boolean} [loadMipmaps] If false only the top mipmap level will be loaded, otherwise all available mipmaps will be uploaded
     *
     * @returns {number} Number of mipmaps uploaded, 0 if there was an error
     */
    var uploadDDSLevels = global.uploadDDSLevels = function (gl, ext, arrayBuffer, loadMipmaps) {
        var header = new Int32Array(arrayBuffer, 0, headerLengthInt),
            fourCC, blockBytes, internalFormat,
            width, height, dataLength, dataOffset,
            byteArray, mipmapCount, i;
        if (header[off_magic] != DDS_MAGIC) {
            console.error("Invalid magic number in DDS header");
            return 0;
        }
        if (!header[off_pfFlags] & DDPF_FOURCC) {
            console.error("Unsupported format, must contain a FourCC code");
            return 0;
        }
        fourCC = header[off_pfFourCC];
        switch (fourCC) {
            case FOURCC_DXT1:
                blockBytes = 8;
                internalFormat = ext.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                break;
            case FOURCC_DXT3:
                blockBytes = 16;
                internalFormat = ext.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                break;
            case FOURCC_DXT5:
                blockBytes = 16;
                internalFormat = ext.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                break;
            default:
                console.error("Unsupported FourCC code:", Int32ToFourCC(fourCC));
                return null;
        }
        mipmapCount = 1;
        if (header[off_flags] & DDSD_MIPMAPCOUNT && loadMipmaps !== false) {
            mipmapCount = Math.max(1, header[off_mipmapCount]);
        }
        width = header[off_width];
        height = header[off_height];
        dataOffset = header[off_size] + 4;
        for (i = 0; i < mipmapCount; ++i) {
            dataLength = Math.max(4, width) / 4 * Math.max(4, height) / 4 * blockBytes;
            byteArray = new Uint8Array(arrayBuffer, dataOffset, dataLength);
            gl.compressedTexImage2D(gl.TEXTURE_2D, i, internalFormat, width, height, 0, byteArray);
            dataOffset += dataLength;
            width *= 0.5;
            height *= 0.5;
        }
        return mipmapCount;
    }
    /**
     * Creates a texture from the DDS file at the given URL. Simple shortcut for the most common use case
     *
     * @param {WebGLRenderingContext} gl WebGL rendering context
     * @param {WebGLCompressedTextureS3TC} ext WEBGL_compressed_texture_s3tc extension object
     * @param {string} src URL to DDS file to be loaded
     * @param {function} [callback] callback to be fired when the texture has finished loading
     *
     * @returns {WebGLTexture} New texture that will receive the DDS image data
     */
    global.loadDDSTexture = function (gl, ext, src, option, callback) {
        var texture = this['webglTexture'],
            ddsXhr = new XMLHttpRequest();
        ddsXhr.open('GET', src, true);
        ddsXhr.responseType = "arraybuffer";
        if (!option) option = {}
        ddsXhr.onload = function () {
            gl.activeTexture(gl.TEXTURE0 + 0)
            gl.bindTexture(gl.TEXTURE_2D, texture);
            var mipmaps = uploadDDSLevels(gl, ext, this.response);
            // console.log(this.response)
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, option['min'] ? option['min'] : (mipmaps > 1 ? gl.LINEAR_MIPMAP_NEAREST : gl.LINEAR));
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, option['mag'] ? option['mag'] : gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            // if ( gl['glExtension']['EXT_texture_filter_anisotropic'] && option['anisotropic'] ) {
            // 	gl.texParameterf(gl.TEXTURE_2D, gl['glExtension']['EXT_texture_filter_anisotropic'].TEXTURE_MAX_ANISOTROPY_EXT, option['anisotropic']);
            // }
            // try {
            // 	// gl.generateMipmap(gl.TEXTURE_2D)
            // } catch ( error ) {
            // 	// console.log('밉맵을 생성할수 없음', source)
            // }
            gl.bindTexture(gl.TEXTURE_2D, null);
            if (callback) callback(true);
        };
        ddsXhr.onerror = function () {
            if (callback) callback(false);
        }
        ddsXhr.send(null);
        return texture;
    }
})(RedDDSTexture.prototype);
Object.freeze(RedDDSTexture);
"use strict";
var RedBitmapCubeTexture;
(function () {
    var loadTexture;
    loadTexture = (function () {
        return function (gl, self, texture, srcList, option, callBack) {
            var onError, onLoad;
            var imgList = [];
            var i, loaded, failNum;
            option = option || {};
            onError = function () {
                if (failNum == 0) callBack ? callBack.call(self, false) : 0;
                failNum++
            };
            onLoad = function () {
                loaded++;
                if (loaded == 6) {

                    gl.activeTexture(gl.TEXTURE0);
                    gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
                    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
                    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, option['min'] ? option['min'] : gl.LINEAR_MIPMAP_NEAREST);
                    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, option['mag'] ? option['mag'] : gl.LINEAR);
                    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, option['wrap_s'] ? option['wrap_s'] : gl.CLAMP_TO_EDGE);
                    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, option['wrap_t'] ? option['wrap_t'] : gl.CLAMP_TO_EDGE);

                    gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, imgList[0]['source']);
                    gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, imgList[1]['source']);
                    gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, imgList[2]['source']);
                    gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, imgList[3]['source']);
                    gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, imgList[4]['source']);
                    gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, imgList[5]['source']);

                    // gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
                    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);

                    try {
                        gl.generateMipmap(gl.TEXTURE_CUBE_MAP)
                    } catch (error) {
                        console.log('밉맵을 생성할수 없음', imgList)
                    }
                    gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
                    if (failNum == 0) callBack ? callBack.call(self, true) : 0
                }
            };
            i = 6;
            loaded = 0;
            failNum = 0;
            while (i--) {

                imgList[i] = RedImageLoader(
                    srcList[i],
                    onLoad,
                    onError,
                    {}
                )


            }
        }
    })();
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedBitmapCubeTexture`,
		 description : `
			 RedBitmapCubeTexture Instance 생성
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 srcList : [
				 {type:'Array'}
			 ],
			 option : [
				 {type:'Object'},
				 '텍스쳐 정의옵션',
				 `
				 <code>
				 {
					 min: gl.LINEAR_MIPMAP_NEAREST,
					 mag: gl.LINEAR,
					 wrap_s: gl.REPEAT,
					 wrap_t: gl.REPEAT
				 }
				 </code>
				 `
			 ],
			 callBack : [
			    {type:'Function'}
			 ]
		 },
		 extends : [
		    'RedBaseTexture'
		 ],
         demo : '../example/resources/RedBitmapCubeTexture.html',
		 example : `
            RedBitmapCubeTexture(
                RedGL Instance,
                srcList,
                {
                    min: gl.LINEAR_MIPMAP_NEAREST,
                    mag: gl.LINEAR,
                    wrap_s: gl.REPEAT,
                    wrap_t: gl.REPEAT
                }
            )
		 `,
		 return : 'RedBitmapCubeTexture Instance'
	 }
     :DOC*/
    RedBitmapCubeTexture = function (redGL, srcList, option, callback) {
        var tGL;
        if (!(this instanceof RedBitmapCubeTexture)) return new RedBitmapCubeTexture(redGL, srcList, option, callback);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedBitmapCubeTexture : RedGL Instance만 허용.', '입력값 : ' + redGL);
        (callback && typeof callback == 'function') || !callback || RedGLUtil.throwFunc('RedBitmapCubeTexture : callback Function만 허용.', callback);
        tGL = redGL.gl;
        option = option || {}
        var tKey = srcList.toString() + JSON.stringify(option)
        if (typeof srcList == 'array') {
            if (!redGL['_datas']['textures']) redGL['_datas']['textures'] = {}
            if (redGL['_datas']['textures'][tKey]) {
                if (callback) {
                    setTimeout(function () {
                        callback.call(this, true)
                    }, 1)
                }
                return redGL['_datas']['textures'][tKey]
            }
        }
        this['webglTexture'] = tGL.createTexture();
        this['webglTexture']['gl'] = tGL
        this['_UUID'] = RedGL.makeUUID();
        this['_load'] = function (needEmpty) {
            RedTextureOptionChecker.check('RedBitmapCubeTexture', option, tGL);
            if (needEmpty) this.setEmptyTexture(tGL, this['webglTexture']);
            if (this['_srcList']) loadTexture(tGL, this, this['webglTexture'], this['_srcList'], this['_option'], this['_callback']);
        }
        this['_option'] = option;
        this['callback'] = callback;
        this['srcList'] = srcList;
        redGL['_datas']['textures'][tKey] = this
        console.log(this);
    };
    RedBitmapCubeTexture.prototype = new RedBaseTexture();

    /**DOC:
     {
		 code:`PROPERTY`,
		 title :`srcList`,
		 description : `
			 큐브 이미지 결로 리스트.
		 `,
		 return : 'Array'
	 }
     :DOC*/
    Object.defineProperty(RedBitmapCubeTexture.prototype, 'srcList', {
        get: function () {
            return this['_srcList']
        },
        set: function (srcList) {
            srcList instanceof Array || RedGLUtil.throwFunc('RedBitmapCubeTexture : srcList는 배열만 허용.', '입력값 : ' + srcList);
            srcList.length == 6 || RedGLUtil.throwFunc('RedBitmapCubeTexture : srcList 길이는 6이어야함', '입력값 : ' + srcList);
            this['_srcList'] = srcList;
            this._load(true)
        }
    });
    /**DOC:
     {
		 code:`PROPERTY`,
		 title :`option`,
		 description : `
			 텍스쳐 옵션 정의
		 `,
		 return : 'Object'
	 }
     :DOC*/
    Object.defineProperty(RedBitmapCubeTexture.prototype, 'option', {
        get: function () {
            return this['_option']
        },
        set: function (v) {
            this['_option'] = v;
            this._load(false)
        }
    });
    Object.freeze(RedBitmapCubeTexture);
})();

"use strict";
var RedColorMaterial;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedColorMaterialProgram';
    var PROGRAM_OPTION_LIST = [];
    var checked;
    vSource = function () {
        /* @preserve
        // 스키닝
        //#REDGL_DEFINE#vertexShareFunc#getSkinMatrix#

        // Sprite3D
        //#REDGL_DEFINE#vertexShareFunc#getSprite3DMatrix#
        void main(void) {
            gl_PointSize = uPointSize;

            // position 계산
            //#REDGL_DEFINE#skin#true# mat4 targetMatrix = uMMatrix *  getSkinMatrix() ;
            //#REDGL_DEFINE#skin#false# mat4 targetMatrix = uMMatrix;
            vVertexPosition =  targetMatrix *  vec4(aVertexPosition, 1.0);

            //#REDGL_DEFINE#sprite3D#true# gl_Position = uPMatrix * getSprite3DMatrix(uCameraMatrix , targetMatrix) *  vec4(aVertexPosition, 1.0);
            //#REDGL_DEFINE#sprite3D#true# if(!u_PerspectiveScale){
            //#REDGL_DEFINE#sprite3D#true#   gl_Position /= gl_Position.w;
            //#REDGL_DEFINE#sprite3D#true#   gl_Position.xy += aVertexPosition.xy * vec2((uPMatrix * targetMatrix)[0][0],(uPMatrix * targetMatrix)[1][1]);
            //#REDGL_DEFINE#sprite3D#true# }
            //#REDGL_DEFINE#sprite3D#false# gl_Position = uPMatrix * uCameraMatrix * targetMatrix *  vec4(aVertexPosition, 1.0);

            //#REDGL_DEFINE#directionalShadow#true# vResolution = uResolution;
            //#REDGL_DEFINE#directionalShadow#true# vShadowPos = cTexUnitConverter  *  uDirectionalShadowLightMatrix * targetMatrix * vec4(aVertexPosition, 1.0);
        }
         */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
        // 안개
        //#REDGL_DEFINE#fragmentShareFunc#fogFactor#
        //#REDGL_DEFINE#fragmentShareFunc#fog#

        // 그림자
        //#REDGL_DEFINE#fragmentShareFunc#decodeFloatShadow#
        //#REDGL_DEFINE#fragmentShareFunc#getShadowColor#

         uniform vec4 u_color;
         void main(void) {
            vec4 finalColor = u_color;
            if(finalColor.a == 0.0) discard;
            //#REDGL_DEFINE#directionalShadow#true# finalColor.rgb *= getShadowColor( vShadowPos, vResolution, uDirectionalShadowTexture);
            //#REDGL_DEFINE#fog#false# gl_FragColor = finalColor;
            //#REDGL_DEFINE#fog#true# gl_FragColor = fog( fogFactor(u_FogDistance, u_FogDensity), uFogColor, finalColor);
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedColorMaterial`,
		 description : `
			 RedColorMaterial Instance 생성
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 hexColor : [
				 {type:'hex'},
				 '기본값 : #ff0000'
			 ],
			 alpha : [
				 {type:'number'},
				 '기본값 : 1'
			 ]
		 },
		 extends : ['RedBaseMaterial'],
		 demo : '../example/material/RedColorMaterial.html',
		 example : `
			 RedColorMaterial(RedGL Instance, hex)
		 `,
		 return : 'RedColorMaterial Instance'
	 }
     :DOC*/
    RedColorMaterial = function (redGL, hexColor, alpha) {
        if (!(this instanceof RedColorMaterial)) return new RedColorMaterial(redGL, hexColor, alpha);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedColorMaterial : RedGL Instance만 허용.', '입력값 : ' + redGL);
        this.makeProgramList(this, redGL, PROGRAM_NAME, vSource, fSource, PROGRAM_OPTION_LIST);
        /////////////////////////////////////////
        // 유니폼 프로퍼티
        this['_color'] = new Float32Array(4);
        this['alpha'] = alpha == undefined ? 1 : alpha;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['color'] = hexColor ? hexColor : '#ff0000';
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedColorMaterial.prototype = new RedBaseMaterial();
    RedColorMaterial['DEFINE_OBJECT_COLOR'] = {
        get: function () {
            return this['_colorHex']
        },
        set: (function () {
            var t0;
            return function (hex) {
                this['_colorHex'] = hex ? hex : '#ff2211';
                t0 = RedGLUtil.hexToRGB_ZeroToOne.call(this, this['_colorHex']);
                this['_color'][0] = t0[0];
                this['_color'][1] = t0[1];
                this['_color'][2] = t0[2];
                this['_color'][3] = this['_alpha'];
            }
        })()
    };
    RedColorMaterial['DEFINE_OBJECT_ALPHA'] = {
        'min': 0, 'max': 1,
        callback: function (v) {
            this['_color'][3] = this['_alpha'] = v
        }
    };
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`color`,
		 description : `기본값 : #ff2211`,
		 return : 'hex'
	 }
     :DOC*/
    Object.defineProperty(RedColorMaterial.prototype, 'color', RedColorMaterial['DEFINE_OBJECT_COLOR']);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`alpha`,
		 description : `
		    기본값 : 1
		    최소값 : 0
		    최대값 : 1
         `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedColorMaterial', 'alpha', 'number', RedColorMaterial['DEFINE_OBJECT_ALPHA']);
    Object.freeze(RedColorMaterial);
})();
"use strict";
var RedColorPhongMaterial;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedColorPhongMaterialProgram';
    var PROGRAM_OPTION_LIST = ['useFlatMode'];
    var checked;
    vSource = function () {
        /* @preserve
            // 스키닝
            //#REDGL_DEFINE#vertexShareFunc#getSkinMatrix#

            // Sprite3D
            //#REDGL_DEFINE#vertexShareFunc#getSprite3DMatrix#

            void main(void) {
                gl_PointSize = uPointSize;
                // normal 계산
                //#REDGL_DEFINE#skin#true# vVertexNormal = (uNMatrix * getSkinMatrix() * vec4(aVertexNormal,0.0)).xyz;
               //#REDGL_DEFINE#skin#false# vVertexNormal = (uNMatrix *  vec4(aVertexNormal,1.0)).xyz;

                // position 계산
                //#REDGL_DEFINE#skin#true# mat4 targetMatrix = uMMatrix *  getSkinMatrix() ;
                //#REDGL_DEFINE#skin#false# mat4 targetMatrix = uMMatrix;
                vVertexPosition =  targetMatrix *  vec4(aVertexPosition, 1.0);

                //#REDGL_DEFINE#sprite3D#true# gl_Position = uPMatrix * getSprite3DMatrix(uCameraMatrix , targetMatrix) *  vec4(aVertexPosition, 1.0);
                //#REDGL_DEFINE#sprite3D#true# if(!u_PerspectiveScale){
                //#REDGL_DEFINE#sprite3D#true#   gl_Position /= gl_Position.w;
                //#REDGL_DEFINE#sprite3D#true#   gl_Position.xy += aVertexPosition.xy * vec2((uPMatrix * targetMatrix)[0][0],(uPMatrix * targetMatrix)[1][1]);
                //#REDGL_DEFINE#sprite3D#true# }
                //#REDGL_DEFINE#sprite3D#false# gl_Position = uPMatrix * uCameraMatrix * targetMatrix *  vec4(aVertexPosition, 1.0);

                // 쉐도우 계산
                //#REDGL_DEFINE#directionalShadow#true# vResolution = uResolution;
			    //#REDGL_DEFINE#directionalShadow#true# vShadowPos = cTexUnitConverter  *  uDirectionalShadowLightMatrix * vVertexPosition;
            }
        */
    };
    fSource = function () {
        /* @preserve
        precision mediump float;
        // 안개
        //#REDGL_DEFINE#fragmentShareFunc#fogFactor#
        //#REDGL_DEFINE#fragmentShareFunc#fog#

        // 그림자
        //#REDGL_DEFINE#fragmentShareFunc#decodeFloatShadow#
        //#REDGL_DEFINE#fragmentShareFunc#getShadowColor#

        // flat노말
        //#REDGL_DEFINE#fragmentShareFunc#getFlatNormal#

        // 라이트
        //#REDGL_DEFINE#fragmentShareFunc#getDirectionalLightColor#
        //#REDGL_DEFINE#fragmentShareFunc#getPointLightColor#

         uniform float u_shininess;
         uniform float u_specularPower;
         uniform vec4 u_color;


         vec3 N;
         vec4 texelColor;

         vec4 specularLightColor= vec4(1.0, 1.0, 1.0, 1.0);
         float specularTextureValue;

         vec4 finalColor;
         void main(void) {

             texelColor = u_color;

             N = normalize(vVertexNormal);
             //#REDGL_DEFINE#useFlatMode# N = getFlatNormal(vVertexPosition.xyz);

             specularLightColor = vec4(1.0, 1.0, 1.0, 1.0);
             specularTextureValue = 1.0;

             vec4 finalColor = uAmbientLightColor * uAmbientIntensity
             + getDirectionalLightColor(
                texelColor,
                N,
                u_shininess,
                specularLightColor,
                specularTextureValue,
                u_specularPower
             )
             + getPointLightColor(
                texelColor,
                N,
                u_shininess,
                specularLightColor,
                specularTextureValue,
                u_specularPower
             );

             finalColor.a = texelColor.a;
             if(finalColor.a == 0.0) discard;

             //#REDGL_DEFINE#directionalShadow#true# finalColor.rgb = mix(finalColor.rgb, finalColor.rgb * getShadowColor( vShadowPos, vResolution, uDirectionalShadowTexture), 0.5);

             //#REDGL_DEFINE#fog#false# gl_FragColor = finalColor;
             //#REDGL_DEFINE#fog#true# gl_FragColor = fog( fogFactor(u_FogDistance, u_FogDensity), uFogColor, finalColor);
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedColorPhongMaterial`,
		 description : `
			 RedColorPhongMaterial Instance 생성
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 hexColor : [
				 {type:'hex'},
				 '기본값 : #ff0000'
			 ],
			 alpha : [
				 {type:'number'},
				 '기본값 : 1'
			 ]
		 },
		 extends : ['RedBaseMaterial'],
		 demo : '../example/material/RedColorPhongMaterial.html',
		 example: `
		 RedColorPhongMaterial(RedGL Instance, hex, alpha)
		 `,
		 return : 'RedColorPhongMaterial Instance'
	 }
     :DOC*/
    RedColorPhongMaterial = function (redGL, hexColor, alpha) {
        if (!(this instanceof RedColorPhongMaterial)) return new RedColorPhongMaterial(redGL, hexColor, alpha);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedColorPhongMaterial : RedGL Instance만 허용.', '입력값 : ' + redGL);
        this.makeProgramList(this, redGL, PROGRAM_NAME, vSource, fSource, PROGRAM_OPTION_LIST);
        /////////////////////////////////////////
        // 유니폼 프로퍼티
        this['_color'] = new Float32Array(4);
        this['shininess'] = 16;
        this['specularPower'] = 1;
        this['alpha'] = alpha == undefined ? 1 : alpha;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['useFlatMode'] = false
        this['color'] = hexColor ? hexColor : '#ff0000';
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    var samplerOption = {
        callback: function () {
            this._searchProgram(PROGRAM_NAME, PROGRAM_OPTION_LIST)
        }
    };
    RedColorPhongMaterial.prototype = new RedBaseMaterial();
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`color`,
		 description : `기본값 : #ff2211`,
		 return : 'hex'
	 }
     :DOC*/
    Object.defineProperty(RedColorPhongMaterial.prototype, 'color', RedColorMaterial['DEFINE_OBJECT_COLOR']);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`alpha`,
		 description : `
		    기본값 : 1
		    최소값 : 0
		    최대값 : 1
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedColorPhongMaterial', 'alpha', 'number', RedColorMaterial['DEFINE_OBJECT_ALPHA']);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`shininess`,
		 description : `기본값 : 16`,
		 return : 'shininess'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedColorPhongMaterial', 'shininess', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`specularPower`,
		 description : `기본값 : 1`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedColorPhongMaterial', 'specularPower', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`useFlatMode`,
		 description : `
		    flatMode 사용여부
		    기본값 : true
		 `,
		 return : 'boolean'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedColorPhongMaterial', 'useFlatMode', 'boolean', samplerOption);
    Object.freeze(RedColorPhongMaterial);
})();
"use strict";
var RedColorPhongTextureMaterial;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedColorPhongTextureMaterialProgram';
    var PROGRAM_OPTION_LIST = ['normalTexture', 'specularTexture', 'displacementTexture', 'emissiveTexture', 'useFlatMode','usePreMultiply'];
    var checked;
    vSource = function () {
        /* @preserve
            // 스키닝
            //#REDGL_DEFINE#vertexShareFunc#getSkinMatrix#

            // Sprite3D
            //#REDGL_DEFINE#vertexShareFunc#getSprite3DMatrix#

            //#REDGL_DEFINE#displacementTexture# uniform sampler2D u_displacementTexture;
            //#REDGL_DEFINE#displacementTexture# uniform float u_displacementPower;
            //#REDGL_DEFINE#displacementTexture# uniform float u_displacementFlowSpeedX;
            //#REDGL_DEFINE#displacementTexture# uniform float u_displacementFlowSpeedY;

            void main(void) {
                gl_PointSize = uPointSize;
                vTexcoord = aTexcoord;

                // normal 계산
                //#REDGL_DEFINE#skin#true# vVertexNormal = (uNMatrix * getSkinMatrix() * vec4(aVertexNormal,0.0)).xyz;
               //#REDGL_DEFINE#skin#false# vVertexNormal = (uNMatrix *  vec4(aVertexNormal,1.0)).xyz;

                // position 계산
                //#REDGL_DEFINE#skin#true# mat4 targetMatrix = uMMatrix *  getSkinMatrix() ;
                //#REDGL_DEFINE#skin#false# mat4 targetMatrix = uMMatrix;
                vVertexPosition =  targetMatrix *  vec4(aVertexPosition, 1.0);

                //#REDGL_DEFINE#displacementTexture# vVertexPosition.xyz += normalize(vVertexNormal) * texture2D(u_displacementTexture, vTexcoord + vec2(
                //#REDGL_DEFINE#displacementTexture#    u_displacementFlowSpeedX * (uTime/1000.0),
                //#REDGL_DEFINE#displacementTexture#    u_displacementFlowSpeedY * (uTime/1000.0)
                //#REDGL_DEFINE#displacementTexture# )).x * u_displacementPower ;

                // 최종 포지션 계산
                //#REDGL_DEFINE#sprite3D#true# gl_Position = uPMatrix * getSprite3DMatrix(uCameraMatrix , targetMatrix) *  vec4(aVertexPosition, 1.0);
                //#REDGL_DEFINE#sprite3D#true# if(!u_PerspectiveScale){
                //#REDGL_DEFINE#sprite3D#true#   gl_Position /= gl_Position.w;
                //#REDGL_DEFINE#sprite3D#true#   gl_Position.xy += aVertexPosition.xy * vec2((uPMatrix * targetMatrix)[0][0],(uPMatrix * targetMatrix)[1][1]);
                //#REDGL_DEFINE#sprite3D#true# }
                //#REDGL_DEFINE#sprite3D#false# gl_Position = uPMatrix * uCameraMatrix * vVertexPosition;

                // 쉐도우 계산
                //#REDGL_DEFINE#directionalShadow#true# vResolution = uResolution;
			    //#REDGL_DEFINE#directionalShadow#true# vShadowPos = cTexUnitConverter  *  uDirectionalShadowLightMatrix * vVertexPosition;
            }
        */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
        // 안개
        //#REDGL_DEFINE#fragmentShareFunc#fogFactor#
        //#REDGL_DEFINE#fragmentShareFunc#fog#

        // 그림자
        //#REDGL_DEFINE#fragmentShareFunc#decodeFloatShadow#
        //#REDGL_DEFINE#fragmentShareFunc#getShadowColor#

       // flat노말
        //#REDGL_DEFINE#fragmentShareFunc#getFlatNormal#
        //#REDGL_DEFINE#fragmentShareFunc#cotangent_frame#
        //#REDGL_DEFINE#fragmentShareFunc#perturb_normal#

        // 라이트
        //#REDGL_DEFINE#fragmentShareFunc#getDirectionalLightColor#
        //#REDGL_DEFINE#fragmentShareFunc#getPointLightColor#

         //#REDGL_DEFINE#normalTexture# uniform sampler2D u_normalTexture;
         //#REDGL_DEFINE#specularTexture# uniform sampler2D u_specularTexture;
         //#REDGL_DEFINE#emissiveTexture# uniform sampler2D u_emissiveTexture;

         //#REDGL_DEFINE#normalTexture# uniform float u_normalPower;
         uniform float u_shininess;
         uniform float u_specularPower;
         //#REDGL_DEFINE#emissiveTexture# uniform float u_emissiveFactor;
         uniform vec4 u_color;


         vec4 texelColor;
         vec4 emissiveColor;
         vec4 finalColor;
         vec3 N;

         vec4 specularLightColor= vec4(1.0, 1.0, 1.0, 1.0);
         float specularTextureValue;

         void main(void) {

             texelColor = u_color;

             N = normalize(vVertexNormal);
             vec4 normalColor = vec4(0.0);
             //#REDGL_DEFINE#normalTexture# normalColor = texture2D(u_normalTexture, vTexcoord);
             //#REDGL_DEFINE#useFlatMode# N = getFlatNormal(vVertexPosition.xyz);
             //#REDGL_DEFINE#normalTexture# N = perturb_normal(N, vVertexPosition.xyz, vTexcoord, normalColor.rgb) ;

            //#REDGL_DEFINE#emissiveTexture# emissiveColor = texture2D(u_emissiveTexture, vTexcoord);
            //#REDGL_DEFINE#emissiveTexture# //#REDGL_DEFINE#usePreMultiply# emissiveColor.rgb *= texelColor.a;

             specularLightColor = vec4(1.0, 1.0, 1.0, 1.0);
             float specularTextureValue = 1.0;
             //#REDGL_DEFINE#specularTexture# specularTextureValue = texture2D(u_specularTexture, vTexcoord).r;

             vec4 finalColor = uAmbientLightColor * uAmbientIntensity
             + getDirectionalLightColor(
                texelColor,
                N,
                u_shininess,
                specularLightColor,
                specularTextureValue,
                u_specularPower
             )
             + getPointLightColor(
                texelColor,
                N,
                u_shininess,
                specularLightColor,
                specularTextureValue,
                u_specularPower
             );

             //#REDGL_DEFINE#emissiveTexture# finalColor.rgb += emissiveColor.rgb * u_emissiveFactor;

             finalColor.a = texelColor.a;
             if(finalColor.a == 0.0) discard;

             //#REDGL_DEFINE#directionalShadow#true# finalColor.rgb = mix(finalColor.rgb, finalColor.rgb * getShadowColor( vShadowPos, vResolution, uDirectionalShadowTexture), 0.5);

             //#REDGL_DEFINE#fog#false# gl_FragColor = finalColor;
             //#REDGL_DEFINE#fog#true# gl_FragColor = fog( fogFactor(u_FogDistance, u_FogDensity), uFogColor, finalColor);
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedColorPhongTextureMaterial`,
		 description : `
			 RedColorPhongTextureMaterial Instance 생성
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 hexColor : [
				 {type:'hex'},
				 '기본값 : #ff0000'
			 ],
			 alpha : [
				 {type:'number'},
				 '기본값 : 1'
			 ],
			 normalTexture : [
				 {type: 'RedBitmapTexture'}
			 ],
			 specularTexture : [
				 {type: 'RedBitmapTexture'}
			 ],
			 specularTexture : [
				 {type: 'RedBitmapTexture'}
			 ],
			 displacementTexture : [
				 {type: 'RedBitmapTexture'}
			 ]
		 },
		 extends : ['RedBaseMaterial'],
		 demo : '../example/material/RedColorPhongTextureMaterial.html',
		 example: `
		 RedColorPhongTextureMaterial(RedGL Instance, hex, alpha, normalTexture, specularTexture)
		 `,
		 return : 'RedColorPhongTextureMaterial Instance'
	 }
     :DOC*/
    RedColorPhongTextureMaterial = function (redGL, hexColor, alpha, normalTexture, specularTexture, displacementTexture, emissiveTexture) {
        if (!(this instanceof RedColorPhongTextureMaterial)) return new RedColorPhongTextureMaterial(redGL, hexColor, alpha, normalTexture, specularTexture, displacementTexture, emissiveTexture);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedColorPhongTextureMaterial : RedGL Instance만 허용.', '입력값 : ' + redGL);
        this.makeProgramList(this, redGL, PROGRAM_NAME, vSource, fSource, PROGRAM_OPTION_LIST);
        /////////////////////////////////////////
        // 유니폼 프로퍼티
        this['_color'] = new Float32Array(4);
        this['normalTexture'] = normalTexture;
        this['specularTexture'] = specularTexture;
        this['displacementTexture'] = displacementTexture;
        this['emissiveTexture'] = emissiveTexture;
        this['normalPower'] = 1;
        this['shininess'] = 16;
        this['specularPower'] = 1;
        this['emissiveFactor'] = 1;
        this['displacementPower'] = 0.1;
        this['displacementFlowSpeedX'] = 0;
        this['displacementFlowSpeedY'] = 0;
        this['alpha'] = alpha == undefined ? 1 : alpha;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['color'] = hexColor ? hexColor : '#ff0000';
        this['usePreMultiply'] = false;
        this['useFlatMode'] = false
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    var samplerOption = {
        callback: function () {
            this._searchProgram(PROGRAM_NAME, PROGRAM_OPTION_LIST)
        }
    };
    RedColorPhongTextureMaterial.prototype = new RedBaseMaterial();
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`color`,
		 description : `기본값 : #ff2211`,
		 return : 'hex'
	 }
     :DOC*/
    Object.defineProperty(RedColorPhongTextureMaterial.prototype, 'color', RedColorMaterial['DEFINE_OBJECT_COLOR']);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`alpha`,
		 description : `
		    기본값 : 1
		    최소값 : 0
		    최대값 : 1
         `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedColorPhongTextureMaterial', 'alpha', 'number', RedColorMaterial['DEFINE_OBJECT_ALPHA']);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`normalTexture`,
		 description :`normalTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedColorPhongTextureMaterial', 'normalTexture', 'sampler2D', samplerOption);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`specularTexture`,
		 description :`normalTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedColorPhongTextureMaterial', 'specularTexture', 'sampler2D', samplerOption);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`displacementTexture`,
		 description :`displacementTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedColorPhongTextureMaterial', 'displacementTexture', 'sampler2D', samplerOption);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`emissiveTexture`,
		 description :`emissiveTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedColorPhongTextureMaterial', 'emissiveTexture', 'sampler2D', samplerOption);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`normalPower`,
		 description : `기본값 : 1`,
		 return : 'number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedColorPhongTextureMaterial', 'normalPower', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`shininess`,
		 description : `기본값 : 16`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedColorPhongTextureMaterial', 'shininess', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`specularPower`,
		 description : `기본값 : 1`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedColorPhongTextureMaterial', 'specularPower', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`emissiveFactor`,
		 description : `기본값 : 1`,
		 return : 'number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedColorPhongTextureMaterial', 'emissiveFactor', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`displacementPower`,
		 description : `기본값 : 0`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedColorPhongTextureMaterial', 'displacementPower', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`displacementFlowSpeedX`,
		 description : `기본값 : 0`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedColorPhongTextureMaterial', 'displacementFlowSpeedX', 'number');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`displacementFlowSpeedY`,
		 description : `기본값 : 0`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedColorPhongTextureMaterial', 'displacementFlowSpeedY', 'number');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`useFlatMode`,
		 description : `
		    flatMode 사용여부
		    기본값 : true
		 `,
		 return : 'boolean'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedColorPhongTextureMaterial', 'useFlatMode', 'boolean', samplerOption);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`usePreMultiply`,
		 description : `
		    usePreMultiply 사용여부
		    기본값 : false
		 `,
		 return : 'boolean'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedColorPhongTextureMaterial', 'usePreMultiply', 'boolean', samplerOption);
    Object.freeze(RedColorPhongTextureMaterial)
})();
"use strict";
var RedEnvironmentMaterial;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedEnvironmentMaterialProgram';
    var PROGRAM_OPTION_LIST = ['diffuseTexture', 'normalTexture', 'specularTexture', 'displacementTexture', 'emissiveTexture', 'useFlatMode','usePreMultiply'];
    var checked;
    vSource = function () {
        /* @preserve
            // 스키닝
            //#REDGL_DEFINE#vertexShareFunc#getSkinMatrix#

            // Sprite3D
            //#REDGL_DEFINE#vertexShareFunc#getSprite3DMatrix#


            //#REDGL_DEFINE#displacementTexture# uniform sampler2D u_displacementTexture;
            //#REDGL_DEFINE#displacementTexture# uniform float u_displacementPower;
            //#REDGL_DEFINE#displacementTexture# uniform float u_displacementFlowSpeedX;
            //#REDGL_DEFINE#displacementTexture# uniform float u_displacementFlowSpeedY;


            void main(void) {
                gl_PointSize = uPointSize;
                vTexcoord = aTexcoord;

                // normal 계산
                //#REDGL_DEFINE#skin#true# vVertexNormal = (uNMatrix * getSkinMatrix() * vec4(aVertexNormal,0.0)).xyz;
               //#REDGL_DEFINE#skin#false# vVertexNormal = (uNMatrix *  vec4(aVertexNormal,1.0)).xyz;

                // position 계산
                //#REDGL_DEFINE#skin#true# mat4 targetMatrix = uMMatrix *  getSkinMatrix() ;
                //#REDGL_DEFINE#skin#false# mat4 targetMatrix = uMMatrix;
                vVertexPosition =  targetMatrix *  vec4(aVertexPosition, 1.0);

                //#REDGL_DEFINE#displacementTexture# vVertexPosition.xyz += normalize(vVertexNormal) * texture2D(u_displacementTexture, vTexcoord + vec2(
                //#REDGL_DEFINE#displacementTexture#    u_displacementFlowSpeedX * (uTime/1000.0),
                //#REDGL_DEFINE#displacementTexture#    u_displacementFlowSpeedY * (uTime/1000.0)
                //#REDGL_DEFINE#displacementTexture# )).x * u_displacementPower ;

                // 최종 포지션 계산
                //#REDGL_DEFINE#sprite3D#true# gl_Position = uPMatrix * getSprite3DMatrix(uCameraMatrix , targetMatrix) *  vec4(aVertexPosition, 1.0);
                //#REDGL_DEFINE#sprite3D#true# if(!u_PerspectiveScale){
                //#REDGL_DEFINE#sprite3D#true#   gl_Position /= gl_Position.w;
                //#REDGL_DEFINE#sprite3D#true#   gl_Position.xy += aVertexPosition.xy * vec2((uPMatrix * targetMatrix)[0][0],(uPMatrix * targetMatrix)[1][1]);
                //#REDGL_DEFINE#sprite3D#true# }
                //#REDGL_DEFINE#sprite3D#false# gl_Position = uPMatrix * uCameraMatrix * vVertexPosition;

                // 쉐도우 계산
                //#REDGL_DEFINE#directionalShadow#true# vResolution = uResolution;
                //#REDGL_DEFINE#directionalShadow#true# vShadowPos = cTexUnitConverter * uDirectionalShadowLightMatrix * vVertexPosition;
            }
        */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
        // 안개
        //#REDGL_DEFINE#fragmentShareFunc#fogFactor#
        //#REDGL_DEFINE#fragmentShareFunc#fog#

        // 그림자
        //#REDGL_DEFINE#fragmentShareFunc#decodeFloatShadow#
        //#REDGL_DEFINE#fragmentShareFunc#getShadowColor#

        // flat노말
        //#REDGL_DEFINE#fragmentShareFunc#getFlatNormal#
        //#REDGL_DEFINE#fragmentShareFunc#cotangent_frame#
        //#REDGL_DEFINE#fragmentShareFunc#perturb_normal#

        // 라이트
        //#REDGL_DEFINE#fragmentShareFunc#getDirectionalLightColor#
        //#REDGL_DEFINE#fragmentShareFunc#getPointLightColor#


         //#REDGL_DEFINE#diffuseTexture# uniform sampler2D u_diffuseTexture;
         //#REDGL_DEFINE#normalTexture# uniform sampler2D u_normalTexture;
         //#REDGL_DEFINE#specularTexture# uniform sampler2D u_specularTexture;
         uniform samplerCube u_environmentTexture;

         //#REDGL_DEFINE#emissiveTexture# uniform sampler2D u_emissiveTexture;
         //#REDGL_DEFINE#normalTexture# uniform float u_normalPower;
         uniform float u_shininess;
         uniform float u_specularPower;
         //#REDGL_DEFINE#emissiveTexture# uniform float u_emissiveFactor;
         uniform float u_reflectionPower;
         uniform float u_alpha;
         uniform bool u_useFlatMode;


         vec4 texelColor= vec4(0.0,0.0,0.0,0.0);
         vec4 emissiveColor;
         vec4 reflectionColor;

         vec4 specularLightColor= vec4(1.0, 1.0, 1.0, 1.0);
         vec3 N;
         float specularTextureValue;
         vec4 finalColor;

         void main(void) {

             texelColor = vec4(0.0,0.0,0.0,0.0);
             //#REDGL_DEFINE#diffuseTexture# texelColor = texture2D(u_diffuseTexture, vTexcoord);
             //#REDGL_DEFINE#diffuseTexture# //#REDGL_DEFINE#usePreMultiply# texelColor.rgb *= texelColor.a;
             //#REDGL_DEFINE#diffuseTexture# if(texelColor.a ==0.0) discard;

             //#REDGL_DEFINE#emissiveTexture# emissiveColor = texture2D(u_emissiveTexture, vTexcoord);
             //#REDGL_DEFINE#emissiveTexture# //#REDGL_DEFINE#usePreMultiply# emissiveColor.rgb *= texelColor.a;

             N = normalize(vVertexNormal);
             vec4 normalColor = vec4(0.0);
             //#REDGL_DEFINE#normalTexture# normalColor = texture2D(u_normalTexture, vTexcoord);
             //#REDGL_DEFINE#useFlatMode# N = getFlatNormal(vVertexPosition.xyz);
             //#REDGL_DEFINE#normalTexture# N = perturb_normal(N, vVertexPosition.xyz, vTexcoord, normalColor.rgb) ;

             vec3 R = reflect( vVertexPosition.xyz - uCameraPosition, N);
             reflectionColor = textureCube(u_environmentTexture, R);
             texelColor = mix(texelColor, reflectionColor ,u_reflectionPower);

             specularLightColor = vec4(1.0, 1.0, 1.0, 1.0);
             specularTextureValue = 1.0;
             //#REDGL_DEFINE#specularTexture#  specularTextureValue = texture2D(u_specularTexture, vTexcoord).r;

             vec4 finalColor = uAmbientLightColor * uAmbientIntensity
             + getDirectionalLightColor(
                texelColor,
                N,
                u_shininess,
                specularLightColor,
                specularTextureValue,
                u_specularPower
             )
             + getPointLightColor(
                texelColor,
                N,
                u_shininess,
                specularLightColor,
                specularTextureValue,
                u_specularPower
             );

             //#REDGL_DEFINE#emissiveTexture# finalColor.rgb += emissiveColor.rgb * u_emissiveFactor;
             finalColor.a = texelColor.a * u_alpha;

             //#REDGL_DEFINE#directionalShadow#true# finalColor.rgb = mix(finalColor.rgb, finalColor.rgb * getShadowColor( vShadowPos, vResolution, uDirectionalShadowTexture), 0.5);

             //#REDGL_DEFINE#fog#false# gl_FragColor = finalColor;
             //#REDGL_DEFINE#fog#true# gl_FragColor = fog( fogFactor(u_FogDistance, u_FogDensity), uFogColor, finalColor);
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedEnvironmentMaterial`,
		 description : `
			 RedEnvironmentMaterial Instance 생성
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 diffuseTexture : [
				 {type:'RedBitmapTexture'}
			 ],
			 environmentTexture : [
				 {type:'RedBitmapCubeTexture'}
			 ],
			 normalTexture : [
				 {type:'RedBitmapTexture'}
			 ],
			 specularTexture : [
				 {type:'RedBitmapTexture'}
			 ],
			 displacementTexture : [
				 {type:'RedBitmapTexture'}
			 ],
			 emissiveTexture : [
				 {type:'RedBitmapTexture'}
			 ]
		 },
		 extends : ['RedBaseMaterial'],
		 demo : '../example/material/RedEnvironmentMaterial.html',
		 example : `
			 RedEnvironmentMaterial(
				 RedGL Instance,
				 RedBitmapTexture(RedGL Instance, src), // diffuseTexture
				 RedBitmapCubeTexture(RedGL Instance, srcList), // environmentTexture
				 RedBitmapTexture(RedGL Instance, src), // normalTexture
				 RedBitmapTexture(RedGL Instance, src), // specularTexture
				 RedBitmapTexture(RedGL Instance, src),  // displacementTexture
				 RedBitmapTexture(RedGL Instance, src)  // emissiveTexture
			 )
		 `,
		 return : 'RedEnvironmentMaterial Instance'
	 }
     :DOC*/
    RedEnvironmentMaterial = function (redGL,
                                       diffuseTexture,
                                       environmentTexture,
                                       normalTexture,
                                       specularTexture,
                                       displacementTexture,
                                       emissiveTexture
    ) {
        if (!(this instanceof RedEnvironmentMaterial)) return new RedEnvironmentMaterial(
            redGL,
            diffuseTexture,
            environmentTexture,
            normalTexture,
            specularTexture,
            displacementTexture,
            emissiveTexture
        );
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedEnvironmentMaterial : RedGL Instance만 허용.', redGL);
        environmentTexture instanceof RedBitmapCubeTexture || RedGLUtil.throwFunc('RedEnvironmentMaterial : environmentTexture - RedBitmapCubeTexture Instance만 허용.');
        this.makeProgramList(this, redGL, PROGRAM_NAME, vSource, fSource, PROGRAM_OPTION_LIST);
        /////////////////////////////////////////
        // 유니폼 프로퍼티
        this['diffuseTexture'] = diffuseTexture;
        this['environmentTexture'] = environmentTexture;
        this['normalTexture'] = normalTexture;
        this['specularTexture'] = specularTexture;
        this['displacementTexture'] = displacementTexture;
        this['emissiveTexture'] = emissiveTexture;
        this['normalPower'] = 1;
        this['shininess'] = 8;
        this['specularPower'] = 1;
        this['emissiveFactor'] = 1;
        this['reflectionPower'] = 1;
        this['displacementPower'] = 0.1;
        this['displacementFlowSpeedX'] = 0;
        this['displacementFlowSpeedY'] = 0;
        this['alpha'] = 1;
        /////////////////////////////////////////
        this['useFlatMode'] = false
        this['usePreMultiply'] = false;
        // 일반 프로퍼티
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedEnvironmentMaterial.prototype = new RedBaseMaterial();
    var samplerOption = {
        callback: function () {
            this._searchProgram(PROGRAM_NAME, PROGRAM_OPTION_LIST)
        }
    };
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`alpha`,
		 description : `기본값 : 1`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedEnvironmentMaterial', 'alpha', 'number', {min: 0, max: 1});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`diffuseTexture`,
		 description :`diffuseTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedEnvironmentMaterial', 'diffuseTexture', 'sampler2D', samplerOption);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`environmentTexture`,
		 description :`environmentTexture`,
		 return : 'RedBitmapCubeTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedEnvironmentMaterial', 'environmentTexture', 'samplerCube', {
        essential: true,
        callback: samplerOption.callback
    });
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`normalTexture`,
		 description :`normalTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedEnvironmentMaterial', 'normalTexture', 'sampler2D', samplerOption);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`specularTexture`,
		 description :`specularTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedEnvironmentMaterial', 'specularTexture', 'sampler2D', samplerOption);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`displacementTexture`,
		 description :`displacementTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedEnvironmentMaterial', 'displacementTexture', 'sampler2D', samplerOption);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`emissiveTexture`,
		 description :`emissiveTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedEnvironmentMaterial', 'emissiveTexture', 'sampler2D', samplerOption);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`normalPower`,
		 description : `기본값 : 1`,
		 return : 'number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedEnvironmentMaterial', 'normalPower', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`shininess`,
		 description : `기본값 : 16`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedEnvironmentMaterial', 'shininess', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`specularPower`,
		 description : `기본값 : 1`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedEnvironmentMaterial', 'specularPower', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`emissiveFactor`,
		 description : `기본값 : 1`,
		 return : 'number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedEnvironmentMaterial', 'emissiveFactor', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`reflectionPower`,
		 description : `기본값 : 1`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedEnvironmentMaterial', 'reflectionPower', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`displacementPower`,
		 description : `기본값 : 0`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedEnvironmentMaterial', 'displacementPower', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`displacementFlowSpeedX`,
		 description : `기본값 : 0`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedEnvironmentMaterial', 'displacementFlowSpeedX', 'number');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`displacementFlowSpeedY`,
		 description : `기본값 : 0`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedEnvironmentMaterial', 'displacementFlowSpeedY', 'number');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`useFlatMode`,
		 description : `
		    flatMode 사용여부
		    기본값 : true
		 `,
		 return : 'boolean'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedEnvironmentMaterial', 'useFlatMode', 'boolean', samplerOption);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`usePreMultiply`,
		 description : `
		    usePreMultiply 사용여부
		    기본값 : false
		 `,
		 return : 'boolean'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedEnvironmentMaterial', 'usePreMultiply', 'boolean', samplerOption);
    Object.freeze(RedEnvironmentMaterial);
})();
"use strict";
var RedBitmapMaterial;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedBitmapMaterialProgram';
    var PROGRAM_OPTION_LIST = ['usePreMultiply'];
    var checked;
    vSource = function () {
        /* @preserve
            // 스키닝
            //#REDGL_DEFINE#vertexShareFunc#getSkinMatrix#

            // Sprite3D
            //#REDGL_DEFINE#vertexShareFunc#getSprite3DMatrix#

            void main(void) {
                gl_PointSize = uPointSize;

                vTexcoord = aTexcoord;

                // position 계산
                //#REDGL_DEFINE#skin#true# mat4 targetMatrix = uMMatrix *  getSkinMatrix() ;
                //#REDGL_DEFINE#skin#false# mat4 targetMatrix = uMMatrix;

                //#REDGL_DEFINE#sprite3D#true# gl_Position = uPMatrix * getSprite3DMatrix(uCameraMatrix , targetMatrix) *  vec4(aVertexPosition, 1.0);
                //#REDGL_DEFINE#sprite3D#true# if(!u_PerspectiveScale){
                //#REDGL_DEFINE#sprite3D#true#   gl_Position /= gl_Position.w;
                //#REDGL_DEFINE#sprite3D#true#   gl_Position.xy += aVertexPosition.xy * vec2((uPMatrix * targetMatrix)[0][0],(uPMatrix * targetMatrix)[1][1]);
                //#REDGL_DEFINE#sprite3D#true# }
                //#REDGL_DEFINE#sprite3D#false# gl_Position = uPMatrix * uCameraMatrix * targetMatrix *  vec4(aVertexPosition, 1.0);

                //#REDGL_DEFINE#directionalShadow#true# vResolution = uResolution;
                //#REDGL_DEFINE#directionalShadow#true# vShadowPos = cTexUnitConverter  *  uDirectionalShadowLightMatrix * targetMatrix * vec4(aVertexPosition, 1.0);
            }
         */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
        // 안개
        //#REDGL_DEFINE#fragmentShareFunc#fogFactor#
        //#REDGL_DEFINE#fragmentShareFunc#fog#

        // 그림자
        //#REDGL_DEFINE#fragmentShareFunc#decodeFloatShadow#
        //#REDGL_DEFINE#fragmentShareFunc#getShadowColor#

         uniform sampler2D u_diffuseTexture;
         uniform float u_alpha;

         void main(void) {
             vec4 finalColor = texture2D(u_diffuseTexture, vTexcoord);
             //#REDGL_DEFINE#usePreMultiply# finalColor.rgb *= finalColor.a;
             finalColor.a *= u_alpha;
             if(finalColor.a == 0.0) discard;

             //#REDGL_DEFINE#directionalShadow#true# finalColor.rgb *= getShadowColor( vShadowPos, vResolution, uDirectionalShadowTexture);
             //#REDGL_DEFINE#fog#false# gl_FragColor = finalColor;
             //#REDGL_DEFINE#fog#true# gl_FragColor = fog( fogFactor(u_FogDistance, u_FogDensity), uFogColor, finalColor);
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedBitmapMaterial`,
		 description : `
			 RedBitmapMaterial Instance 생성자.
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 diffuseTexture : [
				 {type:'RedBitmapTexture'}
			 ]
		 },
		 extends : ['RedBaseMaterial'],
		 demo : '../example/material/RedBitmapMaterial.html',
		 example : `
			 RedBitmapMaterial( RedGL Instance, RedBitmapTexture(RedGL Instance, src) )
		 `,
		 return : 'RedBitmapMaterial Instance'
	 }
     :DOC*/
    RedBitmapMaterial = function (redGL, diffuseTexture) {
        if (!(this instanceof RedBitmapMaterial)) return new RedBitmapMaterial(redGL, diffuseTexture);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedBitmapMaterial : RedGL Instance만 허용.', redGL);
        this.makeProgramList(this, redGL, PROGRAM_NAME, vSource, fSource, PROGRAM_OPTION_LIST);
        /////////////////////////////////////////
        // 유니폼 프로퍼티
        this['diffuseTexture'] = diffuseTexture;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['alpha'] = 1;
        this['usePreMultiply'] = false;
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedBitmapMaterial.prototype = new RedBaseMaterial();
    var samplerOption = {
        callback: function () {
            this._searchProgram(PROGRAM_NAME, PROGRAM_OPTION_LIST)
        }
    };
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`diffuseTexture`,
		 description : `diffuseTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedBitmapMaterial', 'diffuseTexture', 'sampler2D', {essential: true});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`alpha`,
		 description : `기본값 : 1`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedBitmapMaterial', 'alpha', 'number', {min: 0, max: 1});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`usePreMultiply`,
		 description : `
		    usePreMultiply 사용여부
		    기본값 : false
		 `,
		 return : 'boolean'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedBitmapMaterial', 'usePreMultiply', 'boolean', samplerOption);
    Object.freeze(RedBitmapMaterial);
})();
"use strict";
var RedParticleMaterial;
//////////////////////////////////////////////////////////
// 연구중
//////////////////////////////////////////////////////////
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'particleProgram';
    var PROGRAM_OPTION_LIST = ['diffuseTexture','usePreMultiply'];

    var checked;
    vSource = function () {
        /* @preserve
         const mat4 cOrtho = mat4(
                0.5, 0.0, 0.0, 0.0,
                0.0, 0.5, 0.0, 0.0,
                0.0, 0.0, 0.5, 0.0,
                0.0, 0.0, 0.0, 1.0
        );
         void main(void) {
            if(uOrthographicYn){

                gl_Position = uPMatrix * uCameraMatrix * cOrtho * uMMatrix * vec4(aVertexPosition.x, -aVertexPosition.y, aVertexPosition.z, 1.0);
                gl_PointSize = abs(aPointSize)/gl_Position.w;
            }else {
                gl_Position = uPMatrix * uCameraMatrix * uMMatrix * vec4(aVertexPosition, 1.0);
                gl_PointSize = abs(aPointSize)/gl_Position.w * uResolution.y;
            }
            vVertexColor = aVertexColor;
         }
         */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
        // 안개
        //#REDGL_DEFINE#fragmentShareFunc#fogFactor#
        //#REDGL_DEFINE#fragmentShareFunc#fog#

         //#REDGL_DEFINE#diffuseTexture# uniform sampler2D u_diffuseTexture;
         uniform float u_cutOff;
         uniform float u_alpha;
         void main(void) {
             vec4 finalColor = vVertexColor;
             //#REDGL_DEFINE#diffuseTexture# finalColor = texture2D(u_diffuseTexture, gl_PointCoord.xy);
             //#REDGL_DEFINE#diffuseTexture# //#REDGL_DEFINE#usePreMultiply# finalColor.rgb *= finalColor.a;
             //#REDGL_DEFINE#diffuseTexture# finalColor.rgb += vVertexColor.rgb * vVertexColor.a;
             //#REDGL_DEFINE#diffuseTexture# finalColor.a *= vVertexColor.a;
             finalColor.a *= u_alpha;
             //#REDGL_DEFINE#diffuseTexture# if(finalColor.a < u_cutOff) discard;

             //#REDGL_DEFINE#fog#false# gl_FragColor = finalColor;
             //#REDGL_DEFINE#fog#true# gl_FragColor = fog( fogFactor(u_FogDistance, u_FogDensity), uFogColor, finalColor);
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedParticleMaterial`,
		 description : `
			 RedParticleMaterial Instance 생성
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 diffuseTexture : [
				 {type:'RedBitmapTexture'}
			 ]
		 },
		  demo : '../example/particle/RedParticleEmitter.html',
		 extends : ['RedBaseMaterial'],
		 return : 'RedParticleMaterial Instance'
	 }
     :DOC*/
    RedParticleMaterial = function (redGL, diffuseTexture) {
        if (!(this instanceof RedParticleMaterial)) return new RedParticleMaterial(redGL, diffuseTexture);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedParticleMaterial : RedGL Instance만 허용.', redGL);
        this.makeProgramList(this, redGL, PROGRAM_NAME, vSource, fSource, PROGRAM_OPTION_LIST);
        /////////////////////////////////////////
        // 유니폼 프로퍼티
        this['diffuseTexture'] = diffuseTexture;
        this['alpha'] = 1;
        this['cutOff'] = 0;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['usePreMultiply'] = true
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this)
    };
    var samplerOption = {
        callback: function () {
            this._searchProgram(PROGRAM_NAME, PROGRAM_OPTION_LIST)
        }
    };
    RedParticleMaterial.prototype = new RedBaseMaterial();
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`diffuseTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedParticleMaterial', 'diffuseTexture', 'sampler2D', {
        callback: function () {
            this._searchProgram(PROGRAM_NAME, PROGRAM_OPTION_LIST)
        }
    });
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`alpha`,
		 description : `기본값 : 1`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedParticleMaterial', 'alpha', 'number', {min: 0, max: 1});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`cutOff`,
		 description : `기본값 : 0.01`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedParticleMaterial', 'cutOff', 'number', {min: 0, max: 1});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`usePreMultiply`,
		 description : `
		    usePreMultiply 사용여부
		    기본값 : true
		 `,
		 return : 'boolean'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedParticleMaterial', 'usePreMultiply', 'boolean', samplerOption);
    Object.freeze(RedParticleMaterial);
})();
"use strict";
var RedBitmapPointCloudMaterial;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'bitmapPointCloudProgram';
    var PROGRAM_OPTION_LIST = ['usePreMultiply'];

    var checked;
    vSource = function () {
        /* @preserve

         void main(void) {
            if(uOrthographicYn){

                gl_Position = uPMatrix * uCameraMatrix * uMMatrix * vec4(aVertexPosition.x, -aVertexPosition.y, aVertexPosition.z, 1.0);
                gl_PointSize = abs(aPointSize)/gl_Position.w;
            }else {
                gl_Position = uPMatrix * uCameraMatrix * uMMatrix * vec4(aVertexPosition, 1.0);
                gl_PointSize = abs(aPointSize)/gl_Position.w * uResolution.y;
            }
         }
         */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
        // 안개
        //#REDGL_DEFINE#fragmentShareFunc#fogFactor#
        //#REDGL_DEFINE#fragmentShareFunc#fog#

         uniform sampler2D u_diffuseTexture;
         uniform float u_cutOff;
         uniform float u_alpha;
         void main(void) {
             vec4 finalColor = texture2D(u_diffuseTexture, gl_PointCoord.xy);
             //#REDGL_DEFINE#usePreMultiply# finalColor.rgb *= finalColor.a;
             finalColor.a *= u_alpha;
             if(finalColor.a < u_cutOff) discard;
             //#REDGL_DEFINE#fog#false# gl_FragColor = finalColor;
             //#REDGL_DEFINE#fog#true# gl_FragColor = fog( fogFactor(u_FogDistance, u_FogDensity), uFogColor, finalColor);
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedBitmapPointCloudMaterial`,
		 description : `
			 RedBitmapPointCloudMaterial Instance 생성
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 diffuseTexture : [
				 {type:'RedBitmapTexture'}
			 ]
		 },
		 demo : '../example/material/RedBitmapPointCloudMaterial.html',
		 extends : ['RedBaseMaterial'],
		 example : `
		     RedBitmapPointCloudMaterial(RedGL Instance, RedBitmapTexture(RedGL Instance, src));
		 `,
		 return : 'RedBitmapPointCloudMaterial Instance'
	 }
     :DOC*/
    RedBitmapPointCloudMaterial = function (redGL, diffuseTexture) {
        if (!(this instanceof RedBitmapPointCloudMaterial)) return new RedBitmapPointCloudMaterial(redGL, diffuseTexture);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedBitmapPointCloudMaterial : RedGL Instance만 허용.', redGL);
        this.makeProgramList(this, redGL, PROGRAM_NAME, vSource, fSource, PROGRAM_OPTION_LIST);
        /////////////////////////////////////////
        // 유니폼 프로퍼티
        this['diffuseTexture'] = diffuseTexture;
        this['alpha'] = 1;
        this['cutOff'] = 0.1;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['usePreMultiply'] = false;
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this)
    };
    RedBitmapPointCloudMaterial.prototype = new RedBaseMaterial();
    var samplerOption = {
        callback: function () {
            this._searchProgram(PROGRAM_NAME, PROGRAM_OPTION_LIST)
        }
    };
    /**DOC:
     {
 	     code : 'PROPERTY',
		 title :`alpha`,
		 description : `기본값 : 1`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedBitmapPointCloudMaterial', 'alpha', 'number', {min: 0, max: 1});
    /**DOC:
     {
 	     code : 'PROPERTY',
		 title :`cutOff`,
		 description : `
		 기본값 : 0.1
		 해당값보다 알파값이 작을경우 discard 처리됨.
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedBitmapPointCloudMaterial', 'cutOff', 'number', {min: 0, max: 1});
    /**DOC:
     {
 	     code : 'PROPERTY',
		 title :`diffuseTexture`,
		 description : `diffuseTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedBitmapPointCloudMaterial', 'diffuseTexture', 'sampler2D', {essential: true});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`usePreMultiply`,
		 description : `
		    usePreMultiply 사용여부
		    기본값 : false
		 `,
		 return : 'boolean'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedBitmapPointCloudMaterial', 'usePreMultiply', 'boolean', samplerOption);
    Object.freeze(RedBitmapPointCloudMaterial)
})();
"use strict";
var RedSheetMaterial;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedSheetMaterialProgram';
    var PROGRAM_OPTION_LIST = ['usePreMultiply'];
    var checked;
    vSource = function () {
        /* @preserve
            // 스키닝
            //#REDGL_DEFINE#vertexShareFunc#getSkinMatrix#

            // Sprite3D
            //#REDGL_DEFINE#vertexShareFunc#getSprite3DMatrix#

            uniform vec4 u_sheetRect;
            void main(void) {
                gl_PointSize = uPointSize;
                vTexcoord = aTexcoord;
                vTexcoord = vec2(
                    vTexcoord.s * u_sheetRect.x + u_sheetRect.z,
                    vTexcoord.t * u_sheetRect.y - u_sheetRect.w
                );


               // position 계산
                //#REDGL_DEFINE#skin#true# mat4 targetMatrix = uMMatrix *  getSkinMatrix() ;
                //#REDGL_DEFINE#skin#false# mat4 targetMatrix = uMMatrix;

                //#REDGL_DEFINE#sprite3D#true# gl_Position = uPMatrix * getSprite3DMatrix(uCameraMatrix , targetMatrix) *  vec4(aVertexPosition, 1.0);
                //#REDGL_DEFINE#sprite3D#true# if(!u_PerspectiveScale){
                //#REDGL_DEFINE#sprite3D#true#   gl_Position /= gl_Position.w;
                //#REDGL_DEFINE#sprite3D#true#   gl_Position.xy += aVertexPosition.xy * vec2((uPMatrix * targetMatrix)[0][0],(uPMatrix * targetMatrix)[1][1]);
                //#REDGL_DEFINE#sprite3D#true# }
                //#REDGL_DEFINE#sprite3D#false# gl_Position = uPMatrix * uCameraMatrix * targetMatrix *  vec4(aVertexPosition, 1.0);

                //#REDGL_DEFINE#directionalShadow#true# vResolution = uResolution;
                //#REDGL_DEFINE#directionalShadow#true# vShadowPos = cTexUnitConverter * uDirectionalShadowLightMatrix * targetMatrix * vec4(aVertexPosition, 1.0);
            }
        */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
        // 안개
        //#REDGL_DEFINE#fragmentShareFunc#fogFactor#
        //#REDGL_DEFINE#fragmentShareFunc#fog#

        // 그림자
        //#REDGL_DEFINE#fragmentShareFunc#decodeFloatShadow#
        //#REDGL_DEFINE#fragmentShareFunc#getShadowColor#

         uniform sampler2D u_diffuseTexture;
         uniform float u_alpha;
         void main(void) {
             vec4 finalColor = texture2D(u_diffuseTexture, vTexcoord);
             //#REDGL_DEFINE#usePreMultiply# finalColor.rgb *= finalColor.a;
             finalColor.a *= u_alpha;
             if(finalColor.a ==0.0) discard;

             //#REDGL_DEFINE#directionalShadow#true# finalColor.rgb *= getShadowColor( vShadowPos, vResolution, uDirectionalShadowTexture);
             //#REDGL_DEFINE#fog#false# gl_FragColor = finalColor;
             //#REDGL_DEFINE#fog#true# gl_FragColor = fog( fogFactor(u_FogDistance, u_FogDensity), uFogColor, finalColor);
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedSheetMaterial`,
		 description : `
			 RedSheetMaterial Instance 생성
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 diffuseTexture : [
				 {type:'RedBitmapTexture'},
				 'RedBitmapTexture Instance'
			 ]
		 },
		 extends : ['RedBaseMaterial'],
		 demo : '../example/material/RedSheetMaterial.html',
		 example : `
			 RedSheetMaterial(RedGL Instance, RedBitmapTexture(RedGL Instance, src), frameRate, segmentW, segmentH, totalFrame );
		 `,
		 return : 'RedSheetMaterial Instance'
	 }
     :DOC*/
    RedSheetMaterial = function (redGL, diffuseTexture, frameRate, segmentW, segmentH, totalFrame) {
        if (!(this instanceof RedSheetMaterial)) return new RedSheetMaterial(redGL, diffuseTexture, frameRate, segmentW, segmentH, totalFrame);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedSheetMaterial : RedGL Instance만 허용.', redGL);
        frameRate = frameRate || 60;
        segmentW = segmentW || 1;
        segmentH = segmentH || 1;
        totalFrame = totalFrame || 1;
        this.makeProgramList(this, redGL, PROGRAM_NAME, vSource, fSource, PROGRAM_OPTION_LIST);
        /////////////////////////////////////////
        // 유니폼 프로퍼티
        this['diffuseTexture'] = diffuseTexture;
        this['_sheetRect'] = new Float32Array(4);
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['alpha'] = 1;
        this['usePreMultiply'] = false;
        this['_perFrameTime'] = 0; // 단위당 시간
        this['_nextFrameTime'] = 0; // 다음 프레임 호출 시간
        this['_playYn'] = true;
        this['segmentW'] = segmentW;
        this['segmentH'] = segmentH;
        this['totalFrame'] = totalFrame;
        this['frameRate'] = frameRate;
        this['currentIndex'] = 0;
        this['loop'] = true;
        this['_aniMap'] = {};
        this['__RedSheetMaterialYn'] = true;
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    var samplerOption = {
        callback: function () {
            this._searchProgram(PROGRAM_NAME, PROGRAM_OPTION_LIST)
        }
    };
    RedSheetMaterial.prototype = new RedBaseMaterial();

    /**DOC:
     {
		 title :`addAction`,
		 code : 'METHOD',
		 description : `
		    키 기반 액션추가.
		 `,
		 params : {
			 key : [
				 {type:'String'}
			 ],
			 option : [
				 {type:'Object'},
				 `
				 <code>
                    // 옵션값 예시
                    {
                        diffuseTexture : RedBitmapTexture Instance,
                        segmentW : 가로 분할 수,
                        segmentH : 세로 분할 수,
                        totalFrame : 전체 프레임수,
                        frameRate : 초당 프레임 속도
                    }
                </code>
                `
			 ]
		 },
		 return : 'void'
	 }
     :DOC*/
    RedSheetMaterial.prototype['addAction'] = function (key, option) {
        this['_aniMap'][key] = option
    };
    /**DOC:
     {
		 title :`setAction`,
		 code : 'METHOD',
		 description : `
		    addAction에 의해 추가된 액션을 실행함
		 `,
		 params : {
			 key : [
				 {type:'String'}
			 ]
		 },
		 return : 'void'
	 }
     :DOC*/
    RedSheetMaterial.prototype['setAction'] = function (key) {
        this['diffuseTexture'] = this['_aniMap'][key]['texture'];
        this['segmentW'] = this['_aniMap'][key]['segmentW'];
        this['segmentH'] = this['_aniMap'][key]['segmentH'];
        this['totalFrame'] = this['_aniMap'][key]['totalFrame'];
        this['frameRate'] = this['_aniMap'][key]['frameRate'];
        /**DOC:
         {
 	     code : 'PROPERTY',
		 title :`currentIndex`,
		 description : `
		    현재 프레임 인덱스
         `,
		 return : 'int'
	 }
         :DOC*/
        this['currentIndex'] = 0;
        this['_nextFrameTime'] = 0;
    };
    /**DOC:
     {
		 title :`play`,
		 code : 'METHOD',
		 description : `
		    현재 액션을 재생함
		 `,
		 return : 'void'
	 }
     :DOC*/
    RedSheetMaterial.prototype['play'] = function () {
        this['_playYn'] = true
    };
    /**DOC:
     {
		 title :`stop`,
		 code : 'METHOD',
		 description : `
		    현재 액션 재생을 멈춤.
		    프레임은 0번으로 지정됨
		 `,
		 return : 'void'
	 }
     :DOC*/
    RedSheetMaterial.prototype['stop'] = function () {
        this['_playYn'] = false;
        this['currentIndex'] = 0;
    };
    /**DOC:
     {
		 title :`pause`,
		 code : 'METHOD',
		 description : `
		    현재 액션을 현재 프레임에서 멈춤
		 `,
		 return : 'void'
	 }
     :DOC*/
    RedSheetMaterial.prototype['pause'] = function () {
        this['_playYn'] = false
    };
    /**DOC:
     {
		 title :`gotoAndStop`,
		 code : 'METHOD',
		 description : `
		    해당 프레임으로 가서 멈춤
		 `,
		 return : 'void'
	 }
     :DOC*/
    RedSheetMaterial.prototype['gotoAndStop'] = function (index) {
        if (index > this['totalFrame'] - 1) index = this['totalFrame'] - 1;
        if (index < 0) index = 0;
        this['_playYn'] = false;
        this['currentIndex'] = index;
    };
    /**DOC:
     {
		 title :`gotoAndPlay`,
		 code : 'METHOD',
		 description : `
		    해당 프레임 부터 재생
		 `,
		 return : 'void'
	 }
     :DOC*/
    RedSheetMaterial.prototype['gotoAndPlay'] = function (index) {
        if (index > this['totalFrame'] - 1) index = this['totalFrame'] - 1;
        if (index < 0) index = 0;
        this['_playYn'] = true;
        this['currentIndex'] = index;
        this['_nextFrameTime'] = 0;
    };
    /**DOC:
     {
         code : 'PROPERTY',
		 title :`diffuseTexture`,
		 description : `diffuseTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedSheetMaterial', 'diffuseTexture', 'sampler2D', {essential: true});
    /**DOC:
     {
 	     code : 'PROPERTY',
		 title :`totalFrame`,
		 description : `최소값 : 1`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedSheetMaterial', 'totalFrame', 'number', {'min': 1});
    /**DOC:
     {
 	     code : 'PROPERTY',
		 title :`loop`,
		 description : `
		    반복여부 설정.
		    기본값 : true
         `,
		 return : 'Boolean'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedSheetMaterial', 'loop', 'boolean', true);
    /**DOC:
     {
 	     code : 'PROPERTY',
		 title :`frameRate`,
		 description : `
		    초당 프레임 속도
		    최소값 : 1
        `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedSheetMaterial', 'frameRate', 'number', {
        min: 1,
        callback: function () {
            this['_perFrameTime'] = 1000 / this['_frameRate'];
        }
    });
    /**DOC:
     {
 	     code : 'PROPERTY',
		 title :`segmentW`,
		 description : `
		    가로 분할 수
		    최소값 : 1
         `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedSheetMaterial', 'segmentW', 'number', {min: 1});
    /**DOC:
     {
 	     code : 'PROPERTY',
		 title :`segmentH`,
		 description : `
		    세로 분할 수
		    최소값 : 1
         `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedSheetMaterial', 'segmentH', 'number', {min: 1});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`alpha`,
		 description : `기본값 : 1`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedSheetMaterial', 'alpha', 'number', {min: 0, max: 1});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`usePreMultiply`,
		 description : `
		    usePreMultiply 사용여부
		    기본값 : false
		 `,
		 return : 'boolean'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedSheetMaterial', 'usePreMultiply', 'boolean', samplerOption);
    Object.freeze(RedSheetMaterial)
})();
"use strict";
var RedStandardMaterial;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedStandardMaterialProgram';
    var PROGRAM_OPTION_LIST = ['diffuseTexture', 'normalTexture', 'specularTexture', 'emissiveTexture', 'displacementTexture', 'useFlatMode','usePreMultiply'];
    var checked;
    vSource = function () {
        /* @preserve
            // 스키닝
            //#REDGL_DEFINE#vertexShareFunc#getSkinMatrix#

            // Sprite3D
            //#REDGL_DEFINE#vertexShareFunc#getSprite3DMatrix#

            //#REDGL_DEFINE#displacementTexture# uniform sampler2D u_displacementTexture;
            //#REDGL_DEFINE#displacementTexture# uniform float u_displacementPower;
            //#REDGL_DEFINE#displacementTexture# uniform float u_displacementFlowSpeedX;
            //#REDGL_DEFINE#displacementTexture# uniform float u_displacementFlowSpeedY;



            void main(void) {
                gl_PointSize = uPointSize;
                vTexcoord = aTexcoord;

                // normal 계산
                //#REDGL_DEFINE#skin#true# vVertexNormal = (uNMatrix * getSkinMatrix() * vec4(aVertexNormal,0.0)).xyz;
               //#REDGL_DEFINE#skin#false# vVertexNormal = (uNMatrix *  vec4(aVertexNormal,1.0)).xyz;

                // position 계산
                //#REDGL_DEFINE#skin#true# mat4 targetMatrix = uMMatrix *  getSkinMatrix() ;
                //#REDGL_DEFINE#skin#false# mat4 targetMatrix = uMMatrix;
                vVertexPosition =  targetMatrix *  vec4(aVertexPosition, 1.0);

                //#REDGL_DEFINE#displacementTexture# vVertexPosition.xyz += normalize(vVertexNormal) * texture2D(u_displacementTexture, vTexcoord + vec2(
                //#REDGL_DEFINE#displacementTexture#    u_displacementFlowSpeedX * (uTime/1000.0),
                //#REDGL_DEFINE#displacementTexture#    u_displacementFlowSpeedY * (uTime/1000.0)
                //#REDGL_DEFINE#displacementTexture# )).x * u_displacementPower ;

                // 최종 포지션 계산
                //#REDGL_DEFINE#sprite3D#true# gl_Position = uPMatrix * getSprite3DMatrix(uCameraMatrix , targetMatrix) *  vec4(aVertexPosition, 1.0);
                //#REDGL_DEFINE#sprite3D#true# if(!u_PerspectiveScale){
                //#REDGL_DEFINE#sprite3D#true#   gl_Position /= gl_Position.w;
                //#REDGL_DEFINE#sprite3D#true#   gl_Position.xy += aVertexPosition.xy * vec2((uPMatrix * targetMatrix)[0][0],(uPMatrix * targetMatrix)[1][1]);
                //#REDGL_DEFINE#sprite3D#true# }
                //#REDGL_DEFINE#sprite3D#false# gl_Position = uPMatrix * uCameraMatrix * vVertexPosition;

                // 쉐도우 계산
                //#REDGL_DEFINE#directionalShadow#true# vResolution = uResolution;
                //#REDGL_DEFINE#directionalShadow#true# vShadowPos = cTexUnitConverter  *  uDirectionalShadowLightMatrix * vVertexPosition;
            }
        */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
        // 안개
        //#REDGL_DEFINE#fragmentShareFunc#fogFactor#
        //#REDGL_DEFINE#fragmentShareFunc#fog#

        // 그림자
        //#REDGL_DEFINE#fragmentShareFunc#decodeFloatShadow#
        //#REDGL_DEFINE#fragmentShareFunc#getShadowColor#

        // flat노말
        //#REDGL_DEFINE#fragmentShareFunc#getFlatNormal#
        //#REDGL_DEFINE#fragmentShareFunc#cotangent_frame#
        //#REDGL_DEFINE#fragmentShareFunc#perturb_normal#

        // 라이트
        //#REDGL_DEFINE#fragmentShareFunc#getDirectionalLightColor#
        //#REDGL_DEFINE#fragmentShareFunc#getPointLightColor#

        // 텍스쳐
         uniform sampler2D u_diffuseTexture;
         //#REDGL_DEFINE#normalTexture# uniform sampler2D u_normalTexture;
         //#REDGL_DEFINE#specularTexture# uniform sampler2D u_specularTexture;
         //#REDGL_DEFINE#emissiveTexture# uniform sampler2D u_emissiveTexture;

         //#REDGL_DEFINE#normalTexture# uniform float u_normalPower;
         uniform float u_shininess;
         uniform float u_specularPower;
         //#REDGL_DEFINE#emissiveTexture# uniform float u_emissiveFactor;
         uniform float u_alpha;



         vec4 texelColor;
         vec4 emissiveColor;

         vec4 specularLightColor= vec4(1.0, 1.0, 1.0, 1.0);
         float specularTextureValue;

         vec4 finalColor;
         vec3 N;



         void main(void) {

             texelColor = texture2D(u_diffuseTexture, vTexcoord);
             //#REDGL_DEFINE#usePreMultiply# texelColor.rgb *= texelColor.a;
             if(texelColor.a == 0.0) discard;

            //#REDGL_DEFINE#emissiveTexture# emissiveColor = texture2D(u_emissiveTexture, vTexcoord);
            //#REDGL_DEFINE#emissiveTexture# //#REDGL_DEFINE#usePreMultiply# emissiveColor.rgb *= texelColor.a;

             N = normalize(vVertexNormal);
             vec4 normalColor = vec4(0.0);
             //#REDGL_DEFINE#normalTexture# normalColor = texture2D(u_normalTexture, vTexcoord);
             //#REDGL_DEFINE#useFlatMode# N = getFlatNormal(vVertexPosition.xyz);
             //#REDGL_DEFINE#normalTexture# N = perturb_normal(N, vVertexPosition.xyz, vTexcoord, normalColor.rgb) ;

             specularLightColor = vec4(1.0, 1.0, 1.0, 1.0);
             specularTextureValue = 1.0;
             //#REDGL_DEFINE#specularTexture# specularTextureValue = texture2D(u_specularTexture, vTexcoord).r;

             vec4 finalColor = uAmbientLightColor * uAmbientIntensity
             + getDirectionalLightColor(
                texelColor,
                N,
                u_shininess,
                specularLightColor,
                specularTextureValue,
                u_specularPower
             )
             + getPointLightColor(
                texelColor,
                N,
                u_shininess,
                specularLightColor,
                specularTextureValue,
                u_specularPower
             );

             //#REDGL_DEFINE#emissiveTexture# finalColor.rgb += emissiveColor.rgb * u_emissiveFactor;


             finalColor.a = texelColor.a * u_alpha;

             //#REDGL_DEFINE#directionalShadow#true# finalColor.rgb = mix(finalColor.rgb, finalColor.rgb * getShadowColor( vShadowPos, vResolution, uDirectionalShadowTexture), 0.5);
             //#REDGL_DEFINE#fog#false# gl_FragColor = finalColor;
             //#REDGL_DEFINE#fog#true# gl_FragColor = fog( fogFactor(u_FogDistance, u_FogDensity), uFogColor, finalColor);
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedStandardMaterial`,
		 description : `
			 RedStandardMaterial Instance 생성
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 diffuseTexture : [
				 {type:'RedBitmapTexture'}
			 ],
			 normalTexture : [
				 {type:'RedBitmapTexture'}
			 ],
			 specularTexture : [
				 {type:'RedBitmapTexture'}
			 ],
			 displacementTexture : [
				 {type:'RedBitmapTexture'}
			 ],
			 emissiveTexture : [
				 {type:'RedBitmapTexture'}
			 ]
		 },
		 extends : ['RedBaseMaterial'],
		 demo : '../example/material/RedStandardMaterial.html',
		 example : `
			 RedStandardMaterial(
				 RedGL Instance,
				 RedBitmapTexture(RedGL Instance, src), // diffuseTexture
				 RedBitmapTexture(RedGL Instance, src), // normalTexture
				 RedBitmapTexture(RedGL Instance, src), // specularTexture
				 RedBitmapTexture(RedGL Instance, src),  // displacementTexture
				 RedBitmapTexture(RedGL Instance, src)  // emissiveTexture
			 )
		 `,
		 return : 'RedStandardMaterial Instance'
	 }
     :DOC*/
    RedStandardMaterial = function (redGL, diffuseTexture, normalTexture, specularTexture, displacementTexture, emissiveTexture) {
        if (!(this instanceof RedStandardMaterial)) return new RedStandardMaterial(redGL, diffuseTexture, normalTexture, specularTexture, displacementTexture, emissiveTexture);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedStandardMaterial : RedGL Instance만 허용.', redGL);
        this.makeProgramList(this, redGL, PROGRAM_NAME, vSource, fSource, PROGRAM_OPTION_LIST);
        /////////////////////////////////////////
        // 유니폼 프로퍼티
        this['diffuseTexture'] = diffuseTexture;
        this['normalTexture'] = normalTexture;
        this['specularTexture'] = specularTexture;
        this['emissiveTexture'] = emissiveTexture;
        this['displacementTexture'] = displacementTexture;
        this['normalPower'] = 1;
        this['shininess'] = 16;
        this['specularPower'] = 1;
        this['emissiveFactor'] = 1;
        this['displacementPower'] = 0.1;
        this['displacementFlowSpeedX'] = 0;
        this['displacementFlowSpeedY'] = 0;
        this['alpha'] = 1
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['_UUID'] = RedGL.makeUUID();
        this['usePreMultiply'] = false;
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    var samplerOption = {
        callback: function () {
            this._searchProgram(PROGRAM_NAME, PROGRAM_OPTION_LIST)
        }
    };
    RedStandardMaterial.prototype = new RedBaseMaterial();
    /**DOC:
     {
         code : 'PROPERTY',
		 title :`alpha`,
		 description : `기본값 : 1`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedStandardMaterial', 'alpha', 'number', {min: 0, max: 1});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`diffuseTexture`,
		 description : `diffuseTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedStandardMaterial', 'diffuseTexture', 'sampler2D', {
        essential: true,
        callback: samplerOption.callback
    });
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`normalTexture`,
		 description : `normalTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedStandardMaterial', 'normalTexture', 'sampler2D', samplerOption);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`specularTexture`,
		 description : `specularTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedStandardMaterial', 'specularTexture', 'sampler2D', samplerOption);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`emissiveTexture`,
		 description : `emissiveTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedStandardMaterial', 'emissiveTexture', 'sampler2D', samplerOption);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`displacementTexture`,
		 description : `displacementTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedStandardMaterial', 'displacementTexture', 'sampler2D', samplerOption);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`normalPower`,
		 description : `기본값 : 1`,
		 return : 'number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedStandardMaterial', 'normalPower', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`shininess`,
		 description : `기본값 : 16`,
		 return : 'number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedStandardMaterial', 'shininess', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`specularPower`,
		 description : `기본값 : 1`,
		 return : 'number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedStandardMaterial', 'specularPower', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`emissiveFactor`,
		 description : `기본값 : 1`,
		 return : 'number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedStandardMaterial', 'emissiveFactor', 'number', {'min': 0});

    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`displacementPower`,
		 description : `기본값 : 0`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedStandardMaterial', 'displacementPower', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`displacementFlowSpeedX`,
		 description : `기본값 : 0`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedStandardMaterial', 'displacementFlowSpeedX', 'number');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`displacementFlowSpeedY`,
		 description : `기본값 : 0`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedStandardMaterial', 'displacementFlowSpeedY', 'number');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`useFlatMode`,
		 description : `
		    flatMode 사용여부
		    기본값 : true
		 `,
		 return : 'boolean'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedStandardMaterial', 'useFlatMode', 'boolean', samplerOption);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`usePreMultiply`,
		 description : `
		    usePreMultiply 사용여부
		    기본값 : false
		 `,
		 return : 'boolean'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedStandardMaterial', 'usePreMultiply', 'boolean', samplerOption);
    Object.freeze(RedStandardMaterial);
})();
"use strict";
var RedVideoMaterial;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedVideoMaterialProgram';
    var checked;
    vSource = function () {
        /* @preserve
            // 스키닝
            //#REDGL_DEFINE#vertexShareFunc#getSkinMatrix#

            // Sprite3D
            //#REDGL_DEFINE#vertexShareFunc#getSprite3DMatrix#

            void main(void) {
                gl_PointSize = uPointSize;
                vTexcoord = aTexcoord;

                // position 계산
                //#REDGL_DEFINE#skin#true# mat4 targetMatrix = uMMatrix *  getSkinMatrix() ;
                //#REDGL_DEFINE#skin#false# mat4 targetMatrix = uMMatrix;

                //#REDGL_DEFINE#sprite3D#true# gl_Position = uPMatrix * getSprite3DMatrix(uCameraMatrix , targetMatrix) *  vec4(aVertexPosition, 1.0);
                //#REDGL_DEFINE#sprite3D#true# if(!u_PerspectiveScale){
                //#REDGL_DEFINE#sprite3D#true#   gl_Position /= gl_Position.w;
                //#REDGL_DEFINE#sprite3D#true#   gl_Position.xy += aVertexPosition.xy * vec2((uPMatrix * targetMatrix)[0][0],(uPMatrix * targetMatrix)[1][1]);
                //#REDGL_DEFINE#sprite3D#true# }
                //#REDGL_DEFINE#sprite3D#false# gl_Position = uPMatrix * uCameraMatrix * targetMatrix *  vec4(aVertexPosition, 1.0);

                //#REDGL_DEFINE#directionalShadow#true# vResolution = uResolution;
                //#REDGL_DEFINE#directionalShadow#true# vShadowPos = cTexUnitConverter  *  uDirectionalShadowLightMatrix * targetMatrix * vec4(aVertexPosition, 1.0);
            }
        */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
        // 안개
        //#REDGL_DEFINE#fragmentShareFunc#fogFactor#
        //#REDGL_DEFINE#fragmentShareFunc#fog#

        // 그림자
        //#REDGL_DEFINE#fragmentShareFunc#decodeFloatShadow#
        //#REDGL_DEFINE#fragmentShareFunc#getShadowColor#

         uniform sampler2D u_videoTexture;
         uniform float u_alpha;
         void main(void) {
             vec4 finalColor = texture2D(u_videoTexture, vTexcoord);
             if(finalColor.a ==0.0) discard;
             finalColor.a = u_alpha;
             //#REDGL_DEFINE#directionalShadow#true# finalColor.rgb *= getShadowColor( vShadowPos, vResolution, uDirectionalShadowTexture);
             //#REDGL_DEFINE#fog#false# gl_FragColor = finalColor;
             //#REDGL_DEFINE#fog#true# gl_FragColor = fog( fogFactor(u_FogDistance, u_FogDensity), uFogColor, finalColor);
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedVideoMaterial`,
		 description : `
			 RedVideoMaterial Instance 생성
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 videoSrc : [
				 {type:'videoSrc'},
				 'String'
			 ]
		 },
		 extends : ['RedBaseMaterial'],
		 demo : '../example/material/RedVideoMaterial.html',
		 example : `
            RedVideoMaterial(
                RedGL Instance,
                RedBitmapTexture(RedGL Instance, src)
            )
		 `,
		 return : 'RedVideoMaterial Instance'
	 }
     :DOC*/
    RedVideoMaterial = function (redGL, videoTexture) {
        if (!(this instanceof RedVideoMaterial)) return new RedVideoMaterial(redGL, videoTexture);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedVideoMaterial : RedGL Instance만 허용.', redGL);
        this.makeProgramList(this, redGL, PROGRAM_NAME, vSource, fSource);
        /////////////////////////////////////////
        // 유니폼 프로퍼티
        this['videoTexture'] = videoTexture;
        this['alpha'] = 1;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedVideoMaterial.prototype = new RedBaseMaterial();
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`alpha`,
		 description : `기본값 : 1`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedVideoMaterial', 'alpha', 'number', {min: 0, max: 1});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`videoTexture`,
		 description : `videoTexture`,
		 return : 'RedVideoTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedVideoMaterial', 'videoTexture', 'samplerVideo', {essential: true});
    Object.freeze(RedVideoMaterial);
})();
"use strict";
var RedPBRMaterial;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedPBRMaterialProgram';
    var PROGRAM_OPTION_LIST = ['diffuseTexture', 'normalTexture', 'environmentTexture', 'occlusionTexture', 'emissiveTexture', 'roughnessTexture', 'useFlatMode','usePreMultiply'];
    var checked;
    vSource = function () {
        /* @preserve
            // 스키닝
            //#REDGL_DEFINE#vertexShareFunc#getSkinMatrix#

            // Sprite3D
            //#REDGL_DEFINE#vertexShareFunc#getSprite3DMatrix#

            void main(void) {
                gl_PointSize = uPointSize;
                // UV설정
                vTexcoord = aTexcoord;

                // normal 계산
               //#REDGL_DEFINE#skin#true# vVertexNormal = (uNMatrix * getSkinMatrix() * vec4(aVertexNormal,0.0)).xyz;
               //#REDGL_DEFINE#skin#false# vVertexNormal = (uNMatrix *  vec4(aVertexNormal,1.0)).xyz;

               // position 계산
                //#REDGL_DEFINE#skin#true# mat4 targetMatrix = uMMatrix *  getSkinMatrix() ;
                //#REDGL_DEFINE#skin#false# mat4 targetMatrix = uMMatrix;
                vVertexPosition =  targetMatrix *  vec4(aVertexPosition, 1.0);

                // 최종 포지션 계산
                //#REDGL_DEFINE#sprite3D#true# gl_Position = uPMatrix * getSprite3DMatrix(uCameraMatrix , targetMatrix) *  vec4(aVertexPosition, 1.0);
                //#REDGL_DEFINE#sprite3D#true# if(!u_PerspectiveScale){
                //#REDGL_DEFINE#sprite3D#true#   gl_Position /= gl_Position.w;
                //#REDGL_DEFINE#sprite3D#true#   gl_Position.xy += aVertexPosition.xy * vec2((uPMatrix * targetMatrix)[0][0],(uPMatrix * targetMatrix)[1][1]);
                //#REDGL_DEFINE#sprite3D#true# }
                //#REDGL_DEFINE#sprite3D#false# gl_Position = uPMatrix * uCameraMatrix * vVertexPosition;

                // 쉐도우 계산
                //#REDGL_DEFINE#directionalShadow#true# vResolution = uResolution;
                //#REDGL_DEFINE#directionalShadow#true# vShadowPos = cTexUnitConverter * uDirectionalShadowLightMatrix * targetMatrix *  vec4(aVertexPosition, 1.0);
            }
         */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
		// 안개
		//#REDGL_DEFINE#fragmentShareFunc#fogFactor#
		//#REDGL_DEFINE#fragmentShareFunc#fog#

		// 그림자
		//#REDGL_DEFINE#fragmentShareFunc#decodeFloatShadow#
		//#REDGL_DEFINE#fragmentShareFunc#getShadowColor#

        // flat노말
        //#REDGL_DEFINE#fragmentShareFunc#getFlatNormal#
        //#REDGL_DEFINE#fragmentShareFunc#cotangent_frame#
		//#REDGL_DEFINE#fragmentShareFunc#perturb_normal#

         uniform vec4 uBaseColorFactor;
         uniform float u_emissiveFactor;
         uniform float u_cutOff;

         //#REDGL_DEFINE#diffuseTexture# uniform sampler2D u_diffuseTexture;
         //#REDGL_DEFINE#normalTexture# uniform sampler2D u_normalTexture;
         //#REDGL_DEFINE#occlusionTexture# uniform sampler2D u_occlusionTexture;
         //#REDGL_DEFINE#environmentTexture# uniform samplerCube u_environmentTexture;
         //#REDGL_DEFINE#emissiveTexture# uniform sampler2D u_emissiveTexture;
         //#REDGL_DEFINE#roughnessTexture# uniform sampler2D u_roughnessTexture;
         //#REDGL_DEFINE#normalTexture# uniform float u_normalPower;


         uniform float u_specularPower;
         uniform float u_metallicFactor;
         uniform float u_roughnessFactor;
         uniform float u_occlusionPower;
         uniform float u_alpha;




         vec4 la;
         vec4 ld;
         vec4 ls;
         vec4 texelColor= vec4(0.0,0.0,0.0,0.0);
         vec4 emissiveColor;
         vec4 roughnessColor;
         vec4 occlusionColor;
         vec4 reflectionColor;
         vec4 specularLightColor= vec4(1.0, 1.0, 1.0, 1.0);
         vec4 finalColor;
         vec3 N;
         vec3 L;
         float lambertTerm;
         float specular;
         float specularTextureValue;
         float distanceLength;
         float attenuation;



         void main(void) {
            la = uAmbientLightColor * uAmbientLightColor.a;
            ld = vec4(0.0, 0.0, 0.0, 1.0);
            ls = vec4(0.0, 0.0, 0.0, 1.0);


            float tMetallicPower = u_metallicFactor;
            float tRoughnessPower = u_roughnessFactor;

            //#REDGL_DEFINE#roughnessTexture# roughnessColor = texture2D(u_roughnessTexture, vTexcoord);
            //#REDGL_DEFINE#roughnessTexture# tMetallicPower *= roughnessColor.b; // 메탈릭 산출 roughnessColor.b
            //#REDGL_DEFINE#roughnessTexture# tRoughnessPower *= roughnessColor.g; // 거칠기 산출 roughnessColor.g

            // diffuse 색상 산출
            texelColor = uBaseColorFactor;
            //#REDGL_DEFINE#diffuseTexture# texelColor *= texture2D(u_diffuseTexture, vTexcoord);
            //#REDGL_DEFINE#usePreMultiply# texelColor.rgb *= texelColor.a;

            // 컷오프 계산
            if(texelColor.a <= u_cutOff) discard;

            // 노멀값 계산
            N = normalize(vVertexNormal);
            vec4 normalColor = vec4(0.0);
            //#REDGL_DEFINE#normalTexture# normalColor = texture2D(u_normalTexture, vTexcoord);
            //#REDGL_DEFINE#useFlatMode# N = getFlatNormal(vVertexPosition.xyz);
            //#REDGL_DEFINE#normalTexture# N = perturb_normal(N, vVertexPosition.xyz, vTexcoord, normalColor.rgb) ;

            // 환경맵 계산
            vec3 R = reflect( vVertexPosition.xyz-uCameraPosition, N);
            //#REDGL_DEFINE#environmentTexture# reflectionColor = textureCube(u_environmentTexture, R);
            //#REDGL_DEFINE#environmentTexture# reflectionColor.rgb *= reflectionColor.a;

            // 환경맵 합성
            //#REDGL_DEFINE#environmentTexture# texelColor.rgb = mix( texelColor.rgb , reflectionColor.rgb , max(tMetallicPower-tRoughnessPower,0.0)*(1.0-tRoughnessPower));
            //#REDGL_DEFINE#environmentTexture# texelColor = mix( texelColor , vec4(0.04, 0.04, 0.04, 1.0) , tRoughnessPower * (tMetallicPower) * 0.5);



            // 라이팅 계산
            float shininess = 128.0 ;
            specularLightColor = vec4(1.0, 1.0, 1.0, 1.0);
            specularTextureValue =  1.0 ;
            for(int i=0; i<cDIRETIONAL_MAX; i++){
                if(i == uDirectionalLightNum) break;
                L = normalize(-uDirectionalLightPositionList[i]);
                lambertTerm = dot(N,-L);
                if(lambertTerm > 0.0){
                    ld += uDirectionalLightColorList[i] * texelColor * lambertTerm * uDirectionalLightIntensityList[i] * uDirectionalLightColorList[i].a;
                    specular = pow( max(dot(reflect(L, N), -L), 0.0), pow(shininess, 1.0-tRoughnessPower+0.04) );
                    specular *= pow(1.0-tRoughnessPower+0.04, 2.0 * (1.0-tMetallicPower)) ;
                    ls +=  specularLightColor * specular * u_specularPower * specularTextureValue * uDirectionalLightIntensityList[i]* uDirectionalLightColorList[i].a * (1.0-tRoughnessPower+0.04);
                }
            }

           for(int i=0;i<cPOINT_MAX;i++){
              if(i== uPointLightNum) break;
              L =  -uPointLightPositionList[i] + vVertexPosition.xyz;
              distanceLength = abs(length(L));
              if(uPointLightRadiusList[i]> distanceLength){
                  attenuation = 1.0 / (0.01 + 0.02 * distanceLength + 0.03 * distanceLength * distanceLength) * 0.5;
                  L = normalize(L);
                  lambertTerm = dot(N,-L);
                  if(lambertTerm > 0.0){
                     ld += uPointLightColorList[i] * texelColor * lambertTerm * attenuation * uPointLightIntensityList[i] ;
                     specular = pow( max(dot(reflect(L, N), -N), 0.0), pow(shininess, 1.0-tRoughnessPower+0.04) );
                     specular *= pow(1.0-tRoughnessPower+0.04, 2.0 * (1.0-tMetallicPower)) ;
                     ls +=  specularLightColor * specular * uPointLightIntensityList[i]  * uPointLightColorList[i].a * (1.0-tRoughnessPower+0.04) ;
                  }
              }
           }

            finalColor = la * uAmbientIntensity + ld + ls;
            finalColor.a = texelColor.a * u_alpha ;

            // 그림자 계산
            //#REDGL_DEFINE#directionalShadow#true# finalColor.rgb = mix(finalColor.rgb, finalColor.rgb * getShadowColor( vShadowPos, vResolution, uDirectionalShadowTexture), 0.5);

            // 이미시브합성
            //#REDGL_DEFINE#emissiveTexture# emissiveColor = texture2D(u_emissiveTexture, vTexcoord);
            //#REDGL_DEFINE#emissiveTexture# emissiveColor.rgb *= emissiveColor.a * u_emissiveFactor;
            //#REDGL_DEFINE#emissiveTexture# emissiveColor.rgb *= u_emissiveFactor;
            //#REDGL_DEFINE#emissiveTexture# finalColor.rgb += emissiveColor.rgb;

            // 오클루젼 합성
            //#REDGL_DEFINE#occlusionTexture# occlusionColor = texture2D(u_occlusionTexture, vTexcoord);
            //#REDGL_DEFINE#occlusionTexture# finalColor.rgb = mix(finalColor.rgb, finalColor.rgb * occlusionColor.r, occlusionColor.r * u_occlusionPower);

            // 최종결과 산출
            //#REDGL_DEFINE#fog#false# gl_FragColor = finalColor;
            //#REDGL_DEFINE#fog#true# gl_FragColor = fog( fogFactor(u_FogDistance, u_FogDensity), uFogColor, finalColor);
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedPBRMaterial`,
		 description : `
			 RedPBRMaterial Instance 생성
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 diffuseTexture : [
				 {type:'RedBitmapTexture'}
			 ],
			 environmentTexture : [
				 {type:'RedBitmapCubeTexture'}
			 ],
			 normalTexture : [
				 {type:'RedBitmapTexture'}
			 ],
			 occlusionTexture : [
				 {type:'RedBitmapTexture'}
			 ],
			 emissiveTexture : [
				 {type:'RedBitmapTexture'}
			 ],
			 roughnessTexture : [
				 {type:'RedBitmapTexture'}
			 ]
		 },
		 extends : ['RedBaseMaterial'],
		 demo : '../example/material/RedPBRMaterial.html',
		 example : `
			 RedPBRMaterial(
				 RedGL Instance,
				 RedBitmapTexture(RedGL Instance, src), // diffuseTexture
				 RedBitmapCubeTexture(RedGL Instance, srcList),
				 RedBitmapTexture(RedGL Instance, src), // normalTexture
				 RedBitmapTexture(RedGL Instance, src), // occlusionTexture
				 RedBitmapTexture(RedGL Instance, src), // emissiveTexture
				 RedBitmapTexture(RedGL Instance, src) // roughnessTexture
			 )
		 `,
		 return : 'RedPBRMaterial Instance'
	 }
     :DOC*/
    RedPBRMaterial = function (redGL,
                               diffuseTexture,
                               environmentTexture,
                               normalTexture,
                               occlusionTexture,
                               emissiveTexture,
                               roughnessTexture
    ) {
        if (!(this instanceof RedPBRMaterial)) return new RedPBRMaterial(
            redGL,
            diffuseTexture,
            environmentTexture,
            normalTexture,
            occlusionTexture,
            emissiveTexture,
            roughnessTexture
        );
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedPBRMaterial : RedGL Instance만 허용.', redGL);
        this.makeProgramList(this, redGL, PROGRAM_NAME, vSource, fSource, PROGRAM_OPTION_LIST);
        /////////////////////////////////////////
        // 유니폼 프로퍼티
        this['diffuseTexture'] = diffuseTexture;
        this['environmentTexture'] = environmentTexture;
        this['normalTexture'] = normalTexture;
        this['occlusionTexture'] = occlusionTexture;
        this['emissiveTexture'] = emissiveTexture;
        this['roughnessTexture'] = roughnessTexture;

        this['normalPower'] = 1;
        this['specularPower'] = 1;
        this['occlusionPower'] = 1;


        this['metallicFactor'] = 1;
        this['roughnessFactor'] = 0.1;
        this['baseColorFactor'] = [1, 1, 1, 1]
        this['emissiveFactor'] = 1;
        this['alpha'] = 1;
        this['cutOff'] = 0;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['useFlatMode'] = false
        this['usePreMultiply'] = false
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedPBRMaterial.prototype = new RedBaseMaterial();
    var samplerOption = {
        callback: function () {
            this._searchProgram(PROGRAM_NAME, PROGRAM_OPTION_LIST)
        }
    };
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`alpha`,
		 description : `기본값 : 1`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial', 'alpha', 'number', {min: 0, max: 1});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`cutOff`,
		 description : `기본값 : 0`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial', 'cutOff', 'number', {min: 0, max: 1});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`diffuseTexture`,
		 description : `diffuseTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial', 'diffuseTexture', 'sampler2D', samplerOption);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`environmentTexture`,
		 description : `environmentTexture`,
		 return : 'RedBitmapCubeTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial', 'environmentTexture', 'samplerCube', {
        callback: samplerOption.callback
    });
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`normalTexture`,
		 description : `normalTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial', 'normalTexture', 'sampler2D', samplerOption);

    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`occlusionTexture`,
		 description : `occlusionTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial', 'occlusionTexture', 'sampler2D', samplerOption);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`emissiveTexture`,
		 description : `emissiveTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial', 'emissiveTexture', 'sampler2D', samplerOption);

    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`roughnessTexture`,
		 description : `roughnessTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial', 'roughnessTexture', 'sampler2D', samplerOption);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`normalPower`,
		 description : `기본값 : 1`,
		 return : 'number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial', 'normalPower', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`specularPower`,
		 description : `기본값 : 1`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial', 'specularPower', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`metallicFactor`,
		 description : `기본값 : 1`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial', 'metallicFactor', 'number', {'min': 0, 'max': 1});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`emissiveFactor`,
		 description : `기본값 : 1`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial', 'emissiveFactor', 'number', {'min': 0, 'max': 1});

    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`roughnessFactor`,
		 description : `기본값 : 0.1`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial', 'roughnessFactor', 'number', {'min': 0, 'max': 1});

    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`occlusionPower`,
		 description : `기본값 : 1`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial', 'occlusionPower', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`useFlatMode`,
		 description : `
		    flatMode 사용여부
		    기본값 : true
		 `,
		 return : 'boolean'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial', 'useFlatMode', 'boolean', samplerOption);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`usePreMultiply`,
		 description : `
		    usePreMultiply 사용여부
		    기본값 : false
		 `,
		 return : 'boolean'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial', 'usePreMultiply', 'boolean', samplerOption);
    Object.freeze(RedPBRMaterial);
})();
"use strict";
var RedColorPointCloudMaterial;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'colorPointCloudProgram';
    var checked;
    vSource = function () {
        /* @preserve

         void main(void) {
            vVertexColor = aVertexColor;
            if(uOrthographicYn){
                gl_Position = uPMatrix * uCameraMatrix * uMMatrix * vec4(aVertexPosition.x, -aVertexPosition.y, aVertexPosition.z, 1.0);
                gl_PointSize = abs(aPointSize)/gl_Position.w;
            }else {
                gl_Position = uPMatrix * uCameraMatrix * uMMatrix * vec4(aVertexPosition, 1.0);
                gl_PointSize = abs(aPointSize)/gl_Position.w * uResolution.y;
            }
         }
         */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
        // 안개
        //#REDGL_DEFINE#fragmentShareFunc#fogFactor#
        //#REDGL_DEFINE#fragmentShareFunc#fog#

         uniform float u_alpha;
         void main(void) {
             vec4 finalColor = vVertexColor;
             finalColor.a *= u_alpha;
             //#REDGL_DEFINE#fog#false# gl_FragColor = finalColor;
             //#REDGL_DEFINE#fog#true# gl_FragColor = fog( fogFactor(u_FogDistance, u_FogDensity), uFogColor, finalColor);
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedColorPointCloudMaterial`,
		 description : `
			 RedColorPointCloudMaterial.
			 속성으로 컬러를 가지 않는다.
			 단순히 RedPointCloud의 interleave 버퍼의 aVertexColor 값을 처리해 주는 역할을 한다.
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 demo : '../example/material/RedColorPointCloudMaterial.html',
		 extends : ['RedBaseMaterial'],
		 example : `
		     RedColorPointCloudMaterial(RedGL Instance));
		 `,
		 return : 'RedColorPointCloudMaterial Instance'
	 }
     :DOC*/
    RedColorPointCloudMaterial = function (redGL) {
        if (!(this instanceof RedColorPointCloudMaterial)) return new RedColorPointCloudMaterial(redGL);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedColorPointCloudMaterial : RedGL Instance만 허용.', redGL);
        this.makeProgramList(this, redGL, PROGRAM_NAME, vSource, fSource);
        /////////////////////////////////////////
        // 유니폼 프로퍼티
        this['alpha'] = 1;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedColorPointCloudMaterial.prototype = new RedBaseMaterial();
    /**DOC:
     {
 	     code : 'PROPERTY',
		 title :`alpha`,
		 description : `기본값 : 1`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedColorPointCloudMaterial', 'alpha', 'number', {min: 0, max: 1});
    Object.freeze(RedColorPointCloudMaterial);
})();
"use strict";
var RedPBRMaterial_System;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedPBRMaterialSystemProgram';
    var PROGRAM_OPTION_LIST = [
        'diffuseTexture', 'normalTexture', 'environmentTexture', 'occlusionTexture', 'emissiveTexture', 'roughnessTexture',
        'useFlatMode', 'useMaterialDoubleSide', 'useVertexTangent','useVertexColor_0','usePreMultiply'
    ];
    var checked;
    vSource = function () {
        /* @preserve
            // 스키닝
            //#REDGL_DEFINE#vertexShareFunc#getSkinMatrix#

            // Sprite3D
            //#REDGL_DEFINE#vertexShareFunc#getSprite3DMatrix#
            //#REDGL_DEFINE#useVertexColor_0# attribute vec4 aVertexColor_0;
            //#REDGL_DEFINE#useVertexColor_0# varying vec4 vVertexColor_0;
            //#REDGL_DEFINE#useVertexTangent# attribute vec4 aVertexTangent;
            //#REDGL_DEFINE#useVertexTangent# varying vec4 vVertexTangent;
            void main(void) {
                gl_PointSize = uPointSize;
                // UV설정
                vTexcoord = aTexcoord;
                vTexcoord1 = aTexcoord1;
                //#REDGL_DEFINE#useVertexColor_0# vVertexColor_0 = aVertexColor_0;
                //#REDGL_DEFINE#useVertexTangent# vVertexTangent = aVertexTangent;
                // normal 계산
               //#REDGL_DEFINE#skin#true# vVertexNormal = (uNMatrix * getSkinMatrix() * vec4(aVertexNormal,0.0)).xyz;
               //#REDGL_DEFINE#skin#false# vVertexNormal = (uNMatrix *  vec4(aVertexNormal,1.0)).xyz;

               // position 계산
                //#REDGL_DEFINE#skin#true# mat4 targetMatrix = uMMatrix *  getSkinMatrix() ;
                //#REDGL_DEFINE#skin#false# mat4 targetMatrix = uMMatrix;
                vVertexPosition =  targetMatrix *  vec4(aVertexPosition, 1.0);

                // 최종 포지션 계산
                //#REDGL_DEFINE#sprite3D#true# gl_Position = uPMatrix * getSprite3DMatrix(uCameraMatrix , targetMatrix) *  vec4(aVertexPosition, 1.0);
                //#REDGL_DEFINE#sprite3D#true# if(!u_PerspectiveScale){
                //#REDGL_DEFINE#sprite3D#true#   gl_Position /= gl_Position.w;
                //#REDGL_DEFINE#sprite3D#true#   gl_Position.xy += aVertexPosition.xy * vec2((uPMatrix * targetMatrix)[0][0],(uPMatrix * targetMatrix)[1][1]);
                //#REDGL_DEFINE#sprite3D#true# }
                //#REDGL_DEFINE#sprite3D#false# gl_Position = uPMatrix * uCameraMatrix * vVertexPosition;

                // 쉐도우 계산
                //#REDGL_DEFINE#directionalShadow#true# vResolution = uResolution;
                //#REDGL_DEFINE#directionalShadow#true# vShadowPos = cTexUnitConverter * uDirectionalShadowLightMatrix * targetMatrix *  vec4(aVertexPosition, 1.0);
            }
         */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
		// 안개
		//#REDGL_DEFINE#fragmentShareFunc#fogFactor#
		//#REDGL_DEFINE#fragmentShareFunc#fog#

		// 그림자
		//#REDGL_DEFINE#fragmentShareFunc#decodeFloatShadow#
		//#REDGL_DEFINE#fragmentShareFunc#getShadowColor#

        // flat노말
        //#REDGL_DEFINE#fragmentShareFunc#getFlatNormal#
        //#REDGL_DEFINE#fragmentShareFunc#cotangent_frame#
		//#REDGL_DEFINE#fragmentShareFunc#perturb_normal#

        //#REDGL_DEFINE#useVertexColor_0# varying vec4 vVertexColor_0;
        //#REDGL_DEFINE#useVertexTangent# varying vec4 vVertexTangent;
         uniform vec4 uBaseColorFactor;
         uniform vec3 uEmissiveFactor;
         uniform float u_cutOff;

         //#REDGL_DEFINE#diffuseTexture# uniform sampler2D u_diffuseTexture;
         //#REDGL_DEFINE#normalTexture# uniform sampler2D u_normalTexture;
         //#REDGL_DEFINE#occlusionTexture# uniform sampler2D u_occlusionTexture;
         //#REDGL_DEFINE#environmentTexture# uniform samplerCube u_environmentTexture;
         //#REDGL_DEFINE#emissiveTexture# uniform sampler2D u_emissiveTexture;
         //#REDGL_DEFINE#roughnessTexture# uniform sampler2D u_roughnessTexture;
         //#REDGL_DEFINE#normalTexture# uniform float u_normalPower;


         uniform float u_specularPower;
         uniform float u_metallicFactor;
         uniform float u_roughnessFactor;
         uniform float u_occlusionPower;
         uniform float u_alpha;



        uniform int u_diffuseTexCoordIndex;
        uniform int u_occlusionTexCoordIndex;
        uniform int u_emissiveTexCoordIndex;
        uniform int u_roughnessTexCoordIndex;
        uniform int u_normalTexCoordIndex;





         vec4 la;
         vec4 ld;
         vec4 ls;
         vec4 texelColor= vec4(0.0,0.0,0.0,0.0);
         vec4 emissiveColor;
         vec4 roughnessColor;
         vec4 occlusionColor;
         vec4 reflectionColor;
         vec4 specularLightColor= vec4(1.0, 1.0, 1.0, 1.0);
         vec4 finalColor;
         vec3 N;
         vec3 L;
         float lambertTerm;
         float specular;
         float specularTextureValue;
         float distanceLength;
         float attenuation;

        vec2 u_diffuseTexCoord ;
        vec2 u_occlusionTexCoord;
        vec2 u_emissiveTexCoord;
        vec2 u_roughnessTexCoord;
        vec2 u_normalTexCoord;



         void main(void) {
            la = uAmbientLightColor * uAmbientLightColor.a;
            ld = vec4(0.0, 0.0, 0.0, 1.0);
            ls = vec4(0.0, 0.0, 0.0, 1.0);

            u_diffuseTexCoord = u_diffuseTexCoordIndex==0 ? vTexcoord : vTexcoord1;
            u_normalTexCoord = u_normalTexCoordIndex==0 ? vTexcoord : vTexcoord1;
            u_occlusionTexCoord = u_occlusionTexCoordIndex==0 ? vTexcoord : vTexcoord1;
            u_emissiveTexCoord = u_emissiveTexCoordIndex==0 ? vTexcoord : vTexcoord1;
            u_roughnessTexCoord  = u_roughnessTexCoordIndex==0 ? vTexcoord : vTexcoord1;

            float tMetallicPower = u_metallicFactor;
            float tRoughnessPower = u_roughnessFactor;

            //#REDGL_DEFINE#roughnessTexture# roughnessColor = texture2D(u_roughnessTexture, u_roughnessTexCoord);
            //#REDGL_DEFINE#roughnessTexture# tMetallicPower *= roughnessColor.b; // 메탈릭 산출 roughnessColor.b
            //#REDGL_DEFINE#roughnessTexture# tRoughnessPower *= roughnessColor.g; // 거칠기 산출 roughnessColor.g

            // diffuse 색상 산출

            texelColor = uBaseColorFactor;
            //#REDGL_DEFINE#useVertexColor_0# texelColor *= clamp(vVertexColor_0,0.0,1.0) ;


            //#REDGL_DEFINE#diffuseTexture# texelColor *= texture2D(u_diffuseTexture, u_diffuseTexCoord);
            //#REDGL_DEFINE#usePreMultiply# //#REDGL_DEFINE#diffuseTexture# texelColor.rgb *= texelColor.a;


            // 노멀값 계산
            N = normalize(vVertexNormal);
            //#REDGL_DEFINE#useMaterialDoubleSide# vec3 fdx = dFdx(vVertexPosition.xyz);
            //#REDGL_DEFINE#useMaterialDoubleSide# vec3 fdy = dFdy(vVertexPosition.xyz);
            //#REDGL_DEFINE#useMaterialDoubleSide# vec3 faceNormal = normalize(cross(fdx,fdy));
            bool backFaceYn = false;
            //#REDGL_DEFINE#useMaterialDoubleSide# if (dot (vVertexNormal, faceNormal) < 0.0) { N = -N; backFaceYn = true; };


            vec4 normalColor = vec4(0.0);
            //#REDGL_DEFINE#normalTexture# normalColor = texture2D(u_normalTexture, u_normalTexCoord);
            //#REDGL_DEFINE#useFlatMode# N = getFlatNormal(vVertexPosition.xyz);
            //#REDGL_DEFINE#normalTexture# N = perturb_normal(N, vVertexPosition.xyz, backFaceYn ?  1.0 - u_normalTexCoord : u_normalTexCoord, vec3(normalColor.r, 1.0- normalColor.g, normalColor.b) );



            //#REDGL_DEFINE#useVertexTangent# //#REDGL_DEFINE#normalTexture# vec3 pos_dx = dFdx(vVertexPosition.xyz);
            //#REDGL_DEFINE#useVertexTangent# //#REDGL_DEFINE#normalTexture# vec3 pos_dy = dFdy(vVertexPosition.xyz);
            //#REDGL_DEFINE#useVertexTangent# //#REDGL_DEFINE#normalTexture# vec3 tex_dx = dFdx(vec3(u_normalTexCoord, 0.0));
            //#REDGL_DEFINE#useVertexTangent# //#REDGL_DEFINE#normalTexture# vec3 tex_dy = dFdy(vec3(u_normalTexCoord, 0.0));
            //#REDGL_DEFINE#useVertexTangent# //#REDGL_DEFINE#normalTexture# vec3 t = (tex_dy.t * pos_dx - tex_dx.t * pos_dy) / (tex_dx.s * tex_dy.t - tex_dy.s * tex_dx.t);
            //#REDGL_DEFINE#useVertexTangent# //#REDGL_DEFINE#normalTexture# vec3 ng = normalize(vVertexNormal);
            //#REDGL_DEFINE#useVertexTangent# //#REDGL_DEFINE#normalTexture# t = normalize(t - ng * dot(ng, t));
            //#REDGL_DEFINE#useVertexTangent# //#REDGL_DEFINE#normalTexture# vec3 b = normalize(cross(ng, t));
            //#REDGL_DEFINE#useVertexTangent# //#REDGL_DEFINE#normalTexture# mat3 tbn = mat3(t, b, ng);
            //#REDGL_DEFINE#useVertexTangent# //#REDGL_DEFINE#normalTexture# N = normalize(tbn * ((2.0 * normalColor.rgb - 1.0) * vec3(1.0, 1.0 * vVertexTangent.w,1.0)));
            //#REDGL_DEFINE#useVertexTangent# //#REDGL_DEFINE#normalTexture# N = backFaceYn ? -N : N;



            // 환경맵 계산
            vec3 R = reflect( vVertexPosition.xyz-uCameraPosition, N);
            //#REDGL_DEFINE#environmentTexture# reflectionColor = textureCube(u_environmentTexture, R);
            //#REDGL_DEFINE#usePreMultiply# //#REDGL_DEFINE#environmentTexture# reflectionColor.rgb *= reflectionColor.a;

            // 환경맵 합성
            //#REDGL_DEFINE#environmentTexture# texelColor.rgb = mix( texelColor.rgb , reflectionColor.rgb , max(tMetallicPower-tRoughnessPower,0.0)*(1.0-tRoughnessPower));
            //#REDGL_DEFINE#environmentTexture# texelColor = mix( texelColor , vec4(0.04, 0.04, 0.04, 1.0) , tRoughnessPower * (tMetallicPower) * 0.5);

            // 컷오프 계산
            if(texelColor.a <= u_cutOff) discard;

            // 라이팅 계산
            float shininess = 128.0 ;
            specularLightColor = vec4(1.0, 1.0, 1.0, 1.0);
            specularTextureValue =  1.0 ;
            for(int i=0; i<cDIRETIONAL_MAX; i++){
                if(i == uDirectionalLightNum) break;
                L = normalize(-uDirectionalLightPositionList[i]);
                lambertTerm = dot(N,-L);
                if(lambertTerm > 0.0){
                    ld += uDirectionalLightColorList[i] * texelColor * lambertTerm * uDirectionalLightIntensityList[i] * uDirectionalLightColorList[i].a;
                    specular = pow( max(dot(reflect(L, N), -L), 0.0), pow(shininess, 1.0-tRoughnessPower+0.04) );
                    specular *= pow(1.0-tRoughnessPower+0.04, 2.0 * (1.0-tMetallicPower)) ;
                    ls +=  specularLightColor * specular * u_specularPower * specularTextureValue * uDirectionalLightIntensityList[i]* uDirectionalLightColorList[i].a * (1.0-tRoughnessPower+0.04);
                }
            }

           for(int i=0;i<cPOINT_MAX;i++){
              if(i== uPointLightNum) break;
              L =  -uPointLightPositionList[i] + vVertexPosition.xyz;
              distanceLength = abs(length(L));
              if(uPointLightRadiusList[i]> distanceLength){
                  attenuation = 1.0 / (0.01 + 0.02 * distanceLength + 0.03 * distanceLength * distanceLength) * 0.5;
                  L = normalize(L);
                  lambertTerm = dot(N,-L);
                  if(lambertTerm > 0.0){
                     ld += uPointLightColorList[i] * texelColor * lambertTerm * attenuation * uPointLightIntensityList[i] ;
                     specular = pow( max(dot(reflect(L, N), -N), 0.0), pow(shininess, 1.0-tRoughnessPower+0.04) );
                     specular *= pow(1.0-tRoughnessPower+0.04, 2.0 * (1.0-tMetallicPower)) ;
                     ls +=  specularLightColor * specular * uPointLightIntensityList[i]  * uPointLightColorList[i].a * (1.0-tRoughnessPower+0.04) ;
                  }
              }
           }

            finalColor = la * uAmbientIntensity + ld + ls;
            finalColor.a = texelColor.a * u_alpha ;

            // 그림자 계산
            //#REDGL_DEFINE#directionalShadow#true# finalColor.rgb = mix(finalColor.rgb, finalColor.rgb * getShadowColor( vShadowPos, vResolution, uDirectionalShadowTexture), 0.5);

            // 이미시브합성
            //#REDGL_DEFINE#emissiveTexture# emissiveColor = texture2D(u_emissiveTexture, u_emissiveTexCoord);
            //#REDGL_DEFINE#usePreMultiply# //#REDGL_DEFINE#emissiveTexture# emissiveColor.rgb *= emissiveColor.a;
            //#REDGL_DEFINE#emissiveTexture# emissiveColor.rgb *= uEmissiveFactor;
            //#REDGL_DEFINE#emissiveTexture# finalColor.rgb += emissiveColor.rgb;

            // 오클루젼 합성
            //#REDGL_DEFINE#occlusionTexture# occlusionColor = texture2D(u_occlusionTexture, u_occlusionTexCoord);
            //#REDGL_DEFINE#occlusionTexture# finalColor.rgb = mix(finalColor.rgb, finalColor.rgb * occlusionColor.r, occlusionColor.r * u_occlusionPower);

            // 최종결과 산출
            //#REDGL_DEFINE#fog#false# gl_FragColor = finalColor;
            //#REDGL_DEFINE#fog#true# gl_FragColor = fog( fogFactor(u_FogDistance, u_FogDensity), uFogColor, finalColor);
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedPBRMaterial_System`,
		 description : `
		     RedGLTFLoader에서 모델을 파싱할때 생성되는 PBR재질.
		     일반사용은 금지함.
			 RedPBRMaterial_System Instance 생성.
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 diffuseTexture : [
				 {type:'RedBitmapTexture'}
			 ],
			 environmentTexture : [
				 {type:'RedBitmapCubeTexture'}
			 ],
			 normalTexture : [
				 {type:'RedBitmapTexture'}
			 ],
			 occlusionTexture : [
				 {type:'RedBitmapTexture'}
			 ],
			 emissiveTexture : [
				 {type:'RedBitmapTexture'}
			 ],
			 roughnessTexture : [
				 {type:'RedBitmapTexture'}
			 ]
		 },
		 extends : ['RedBaseMaterial'],
		 demo : '../example/loader/gltf/RedGLTFLoader.html',
		 example : `
			 RedPBRMaterial_System(
				 RedGL Instance,
				 RedBitmapTexture(RedGL Instance, src), // diffuseTexture
				 RedBitmapCubeTexture(RedGL Instance, srcList),
				 RedBitmapTexture(RedGL Instance, src), // normalTexture
				 RedBitmapTexture(RedGL Instance, src), // occlusionTexture
				 RedBitmapTexture(RedGL Instance, src), // emissiveTexture
				 RedBitmapTexture(RedGL Instance, src) // roughnessTexture
			 )
		 `,
		 return : 'RedPBRMaterial_System Instance'
	 }
     :DOC*/
    RedPBRMaterial_System = function (redGL,
                                      diffuseTexture,
                                      environmentTexture,
                                      normalTexture,
                                      occlusionTexture,
                                      emissiveTexture,
                                      roughnessTexture
    ) {
        if (!(this instanceof RedPBRMaterial_System)) return new RedPBRMaterial_System(
            redGL,
            diffuseTexture,
            environmentTexture,
            normalTexture,
            occlusionTexture,
            emissiveTexture,
            roughnessTexture
        );
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedPBRMaterial_System : RedGL Instance만 허용.', redGL);
        this.makeProgramList(this, redGL, PROGRAM_NAME, RedGLUtil.getStrFromComment(vSource.toString()), RedGLUtil.getStrFromComment(fSource.toString()), PROGRAM_OPTION_LIST);
        /////////////////////////////////////////
        // 유니폼 프로퍼티
        this['diffuseTexture'] = diffuseTexture;
        this['environmentTexture'] = environmentTexture;
        this['normalTexture'] = normalTexture;
        this['occlusionTexture'] = occlusionTexture;
        this['emissiveTexture'] = emissiveTexture;
        this['roughnessTexture'] = roughnessTexture;

        this['normalPower'] = 1;
        this['specularPower'] = 1;
        this['metallicFactor'] = 1;
        this['roughnessFactor'] = 1;

        this['diffuseTexCoordIndex'] = 0
        this['occlusionTexCoordIndex'] = 0
        this['emissiveTexCoordIndex'] = 0
        this['roughnessTexCoordIndex'] = 0;
        this['normalTexCoordIndex'] = 0

        this['occlusionPower'] = 1;
        this['baseColorFactor'] = null
        this['emissiveFactor'] = null;
        this['alpha'] = 1;
        this['cutOff'] = 0;

        /////////////////////////////////////////
        // 일반 프로퍼티
        this['useMaterialDoubleSide'] = false
        this['useVertexColor_0'] = false
        this['useFlatMode'] = false
        this['useVertexTangent'] = false
        this['usePreMultiply'] = false
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        this['_needSearchProgram'] = null
        console.log(this);
    };
    RedPBRMaterial_System.prototype = new RedBaseMaterial();
    var samplerOption = {
        callback: function () {
            var self = this;
            cancelAnimationFrame(this['_needSearchProgram']);
            this['_needSearchProgram'] = requestAnimationFrame(function () {
                self._searchProgram(PROGRAM_NAME, PROGRAM_OPTION_LIST)
                self['_needSearchProgram'] = null
            });

        }
    };
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`alpha`,
		 description : `기본값 : 1`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial_System', 'alpha', 'number', {min: 0, max: 1});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`cutOff`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial_System', 'cutOff', 'number', {min: 0, max: 1});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`diffuseTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial_System', 'diffuseTexture', 'sampler2D', samplerOption);
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial_System', 'diffuseTexCoordIndex', 'number');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`environmentTexture`,
		 return : 'RedBitmapCubeTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial_System', 'environmentTexture', 'samplerCube', {
        callback: samplerOption.callback
    });
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`normalTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial_System', 'normalTexture', 'sampler2D', samplerOption);
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial_System', 'normalTexCoordIndex', 'number');

    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`occlusionTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial_System', 'occlusionTexture', 'sampler2D', samplerOption);
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial_System', 'occlusionTexCoordIndex', 'number');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`emissiveTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial_System', 'emissiveTexture', 'sampler2D', samplerOption);
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial_System', 'emissiveTexCoordIndex', 'number');

    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`roughnessTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial_System', 'roughnessTexture', 'sampler2D', samplerOption);
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial_System', 'roughnessTexCoordIndex', 'number');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`normalPower`,
		 description : `기본값 : 1`,
		 return : 'number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial_System', 'normalPower', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`specularPower`,
		 description : `기본값 : 1`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial_System', 'specularPower', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`metallicFactor`,
		 description : `기본값 : 1`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial_System', 'metallicFactor', 'number', {'min': 0, 'max': 1});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`roughnessFactor`,
		 description : `기본값 : 1`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial_System', 'roughnessFactor', 'number', {'min': 0, 'max': 1});

    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`occlusionPower`,
		 description : `기본값 : 1`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial_System', 'occlusionPower', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`useFlatMode`,
		 description : `
		    flatMode 사용여부
		    기본값 : true
		 `,
		 return : 'boolean'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial_System', 'useFlatMode', 'boolean', samplerOption);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`useMaterialDoubleSide`,
		 description : `
		    gltf 파싱에 따른 재질에서 더블사이드 사용여부
		    기본값 : false
		 `,
		 return : 'boolean'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial_System', 'useMaterialDoubleSide', 'boolean', samplerOption);

    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`useVertexColor_0`,
		 description : `
		    aVertexColor_0 사용여부
		    기본값 : true
		 `,
		 return : 'boolean'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial_System', 'useVertexColor_0', 'boolean', samplerOption);
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial_System', 'useVertexTangent', 'boolean', samplerOption);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`usePreMultiply`,
		 description : `
		    usePreMultiply 사용여부
		    기본값 : false
		 `,
		 return : 'boolean'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPBRMaterial_System', 'usePreMultiply', 'boolean', samplerOption);
    

    Object.freeze(RedPBRMaterial_System);
})();
"use strict";
var RedTextMaterial;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedTextMaterialProgram';
    var PROGRAM_OPTION_LIST = [];
    var checked;
    vSource = function () {
        /* @preserve
            // Sprite3D
            //#REDGL_DEFINE#vertexShareFunc#getSprite3DMatrix#
            const mat4 c3dScale = mat4(
                1.0/1024.0, 0.0, 0.0, 0.0,
                0.0, 1.0/1024.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                0.0, 0.0, 0.0, 1.0
            );

            uniform float u_width;
            uniform float u_height;

            void main(void) {
                gl_PointSize = uPointSize;

                vTexcoord = aTexcoord;

                // position 계산
                mat4 targetMatrix;
                if(uOrthographicYn){
                      targetMatrix = uMMatrix * mat4(
                        u_width, 0.0, 0.0, 0.0,
                        0.0, u_height, 0.0, 0.0,
                        0.0, 0.0, 1.0, 0.0,
                        0.0, 0.0, 0.0, 1.0
                    ) ;
                    gl_Position = uPMatrix * uCameraMatrix * targetMatrix *  vec4(aVertexPosition, 1.0);
                }else{
                    targetMatrix = uMMatrix * mat4(
                        u_width/uResolution.y, 0.0, 0.0, 0.0,
                        0.0, u_height/uResolution.y, 0.0, 0.0,
                        0.0, 0.0, 1.0, 0.0,
                        0.0, 0.0, 0.0, 1.0
                    ) ;
                    //#REDGL_DEFINE#sprite3D#true# gl_Position = uPMatrix * getSprite3DMatrix(uCameraMatrix , targetMatrix) *  vec4(aVertexPosition, 1.0);
                    //#REDGL_DEFINE#sprite3D#true# if(!u_PerspectiveScale){
                    //#REDGL_DEFINE#sprite3D#true#   gl_Position /= gl_Position.w;
                    //#REDGL_DEFINE#sprite3D#true#   gl_Position.xy += aVertexPosition.xy * vec2((uPMatrix * targetMatrix)[0][0],(uPMatrix * targetMatrix)[1][1]);
                    //#REDGL_DEFINE#sprite3D#true# }
                    //#REDGL_DEFINE#sprite3D#false# gl_Position = uPMatrix * uCameraMatrix * targetMatrix *  vec4(aVertexPosition, 1.0);
                }


                //#REDGL_DEFINE#directionalShadow#true# vResolution = uResolution;
                //#REDGL_DEFINE#directionalShadow#true# vShadowPos = cTexUnitConverter  *  uDirectionalShadowLightMatrix * targetMatrix * vec4(aVertexPosition, 1.0);
            }
         */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
        // 안개
        //#REDGL_DEFINE#fragmentShareFunc#fogFactor#
        //#REDGL_DEFINE#fragmentShareFunc#fog#

        // 그림자
        //#REDGL_DEFINE#fragmentShareFunc#decodeFloatShadow#
        //#REDGL_DEFINE#fragmentShareFunc#getShadowColor#

         uniform sampler2D u_diffuseTexture;
         uniform float u_alpha;

         void main(void) {
             vec4 finalColor = texture2D(u_diffuseTexture, vTexcoord);
             finalColor.a *= u_alpha;
             if(finalColor.a == 0.0) discard;

             //#REDGL_DEFINE#directionalShadow#true# finalColor.rgb *= getShadowColor( vShadowPos, vResolution, uDirectionalShadowTexture);
             //#REDGL_DEFINE#fog#false# gl_FragColor = finalColor;
             //#REDGL_DEFINE#fog#true# gl_FragColor = fog( fogFactor(u_FogDistance, u_FogDensity), uFogColor, finalColor);
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedTextMaterial`,
		 description : `
			 RedTextMaterial Instance 생성자.
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 diffuseTexture : [
				 {type:'RedBitmapTexture'}
			 ]
		 },
		 extends : ['RedBaseMaterial'],
		 demo : '../example/material/RedTextMaterial.html',
		 example : `
			 RedTextMaterial( RedGL Instance, RedBitmapTexture(RedGL Instance, src) )
		 `,
		 return : 'RedTextMaterial Instance'
	 }
     :DOC*/
    RedTextMaterial = function (redGL, diffuseTexture) {
        if (!(this instanceof RedTextMaterial)) return new RedTextMaterial(redGL, diffuseTexture);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedTextMaterial : RedGL Instance만 허용.', redGL);
        this.makeProgramList(this, redGL, PROGRAM_NAME, vSource, fSource, PROGRAM_OPTION_LIST);
        /////////////////////////////////////////
        // 유니폼 프로퍼티
        this['diffuseTexture'] = diffuseTexture;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['alpha'] = 1;
        this['width'] = 2
        this['height'] = 2
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedTextMaterial.prototype = new RedBaseMaterial();
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`diffuseTexture`,
		 description : `diffuseTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedTextMaterial', 'diffuseTexture', 'sampler2D', {essential: true});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`alpha`,
		 description : `기본값 : 1`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedTextMaterial', 'alpha', 'number', {min: 0, max: 1});
    RedDefinePropertyInfo.definePrototype('RedTextMaterial', 'width', 'number', {
        min: 2,
        callback: function (v) {
            this['_width'] = v;
        }
    });
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`height`,
		 description : `세로영역크기`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedTextMaterial', 'height', 'number', {
        min: 2,
        callback: function (v) {
            this['_height'] = v;
        }
    });
    Object.freeze(RedTextMaterial);
})();
"use strict";
var RedAmbientLight;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedAmbientLight`,
		 description : `
		    기본 환경광.
			RedAmbientLight Instance 생성자.
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 hex : [
				 {type:'hex'},
				 '기본값 : #fff'
			 ],
			 alpha : [
				 {type:'number'},
				 '기본값 : 0.1'
			 ]
		 },
		 extends : [
		    'RedBaseLight'
		 ],
		 demo : '../example/light/RedAmbientLight.html',
		 example: `
			 RedAmbientLight(RedGL Instance, '#fff', 1);
		 `,
		 return : 'RedAmbientLight Instance'
	 }
     :DOC*/
    RedAmbientLight = function (redGL, hexColor, alpha) {
        if (!(this instanceof RedAmbientLight)) return new RedAmbientLight(redGL, hexColor, alpha);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedAmbientLight : RedGL Instance만 허용.', '입력값 : ' + redGL);
        // 유니폼 프로퍼티
        this['_lightColor'] = new Float32Array(4);
        // 일반 프로퍼티
        this['intensity'] = 1;
        this['alpha'] = alpha == undefined ? 0.1 : alpha;
        this['color'] = hexColor ? hexColor : '#fff';
        this['_UUID'] = RedGL.makeUUID();
        console.log(this);
    };
    /**DOC:
     {
		 title :`RedAmbientLight.TYPE`,
		 code : 'CONST',
		 description : `RedAmbientLight 타입상수`,
		 return : 'String'
	 }
     :DOC*/
    RedAmbientLight['TYPE'] = 'RedAmbientLight';
    RedAmbientLight.prototype = new RedBaseLight();
    /**DOC:
     {
		 title :`type`,
		 code : 'PROPERTY',
		 description : `인스턴스 생성시 RedAmbientLight['TYPE']값이 자동 주입됨`,
		 return : 'String'
	 }
     :DOC*/
    Object.defineProperty(RedAmbientLight.prototype, 'TYPE', {
        configurable: false,
        writable: false,
        value: RedAmbientLight['TYPE']
    });
    Object.freeze(RedAmbientLight);
})();
"use strict";
var RedDirectionalLight;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedDirectionalLight`,
		 description : `
		    기본 직사광.
			RedDirectionalLight Instance 생성자.
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 hex : [
				 {type:'hex'},
				 '기본값 : #fff'
			 ],
			 alpha : [
				 {type:'number'},
				 '기본값 : 1'
			 ]
		 },
		 extends : ['RedBaseLight'],
		 demo : '../example/light/RedDirectionalLight.html',
		 example: `
		    RedDirectionalLight(RedGL Instance, '#fff', 1);
		 `,
		 return : 'RedDirectionalLight Instance'
	 }
     :DOC*/
    RedDirectionalLight = function (redGL, hexColor, alpha) {
        if (!(this instanceof RedDirectionalLight)) return new RedDirectionalLight(redGL, hexColor, alpha);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedDirectionalLight : RedGL Instance만 허용.', '입력값 : ' + redGL);
        // 유니폼 프로퍼티
        this['_lightColor'] = new Float32Array(4);
        // 일반 프로퍼티
        this['intensity'] = 1;
        this['alpha'] = alpha == undefined ? 1 : alpha;
        this['color'] = hexColor ? hexColor : '#fff';
        /**DOC:
         {
	         code : 'PROPERTY',
			 title :`x`,
			 description : `
			 기본값 : 0
			 포지션값은 광원계산시 0,0,0을 바라보는 방향벡터로 계산됨
			 `,
			 return : 'Number'
		 }
         :DOC*/
        this['x'] = 0;
        /**DOC:
         {
	         code : 'PROPERTY',
			 title :`y`,
			 description : `
			 기본값 : 0
			 포지션값은 광원계산시 0,0,0을 바라보는 방향벡터로 계산됨
			 `,
			 return : 'Number'
		 }
         :DOC*/
        this['y'] = -1;
        /**DOC:
         {
	         code : 'PROPERTY',
			 title :`z`,
			 description : `
			 기본값 : 0
			 포지션값은 광원계산시 0,0,0을 바라보는 방향벡터로 계산됨
			 `,
			 return : 'Number'
		 }
         :DOC*/
        this['z'] = 0;
        this['_UUID'] = RedGL.makeUUID();
        /**DOC:
         {
	         code : 'PROPERTY',
			 title :`debug`,
			 description : `디버그오브젝트 활성화 여부`,
			 return : 'Boolean'
		 }
         :DOC*/
        this['debug'] = false;
        this['_debugObject'] = RedSprite3D(
            redGL,
            RedBitmapMaterial(
                redGL,
                RedBitmapTexture(
                    redGL,
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozQjcyMEREMTUyMDYxMUU4OTRDNTgzQTBBMEY2MkFFNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODA1NTI0RjUyMDYxMUU4QkVBQTg3NjZCN0M1OUI2OCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDODA1NTI0RTUyMDYxMUU4QkVBQTg3NjZCN0M1OUI2OCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowNmFjYmZjZi05YjBkLThlNGItODZiNy1kNWViYWNjZDg4OGMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0I3MjBERDE1MjA2MTFFODk0QzU4M0EwQTBGNjJBRTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4vVcpuAAAHNUlEQVR42uxbeWyURRT/tiw9OAJYUekfeBCFNmqlkAgRtURQaTywWIhGSfDAAzmkggcoKopKRQXFKKZqNGmkqGAkGEQFhaQenGrAI3iUpKilaiPSytKt74XfF6evM/vN7n67+xn6kl/Sb3bmvTdvZt68eTMNtbe3O8cyhboM0GWALgN0LKkJpUv2lYQFBFbgYcI7aZF6bcf+ZmXI8L0IlYShhBLCbELPTCiSKQOcTRimfA8nFP/fDTCEMJrQw2bpEVqV71ZLXXpARmHQDDCZ8DnhI8IrFkZoI0SVb/77iEXnX4WMzyAzEAbIJSwk9Mb3RMKMFMzWmYQK/N0bMnODYAB2q42i7B5CkY+dZ153i7JGyM64Af4hVIk13cdjFoQsy1yaAZ6qz6iC7ED4gJWEjaLsRkKpoX53MX1zUaajUvBSaSNkBmoXuI/QonyHCXMIeZq6PxJ+Vb5/I/ykqZcHHmGljGXcG8RtcCfhRVFWpjgulfahEzvQjn1GvaZeBXio9AJhV1ADoUcITaJsmKHuKvxWgr91NFx8N0FG2gOhbpb1WMGbxXRd6SE/lg61wrneRPjdT51tDkOTELe3YvrVWPC9CnH+h4SPlfKLCKMQChco/oEN1UD4krAF7Vy6EO14uay2kH0N4XZCDmFJpwEQhyEvAwxF1OV66MOEd8G4znIkuJNTCNcjhO3jUb+ZsIfwOqLKFks5IzFQlxOyURYhnAvjJXQa7Cu2J2Y8gbCBsJhwskf7SzCizxJGWHTejSFGoM0W8IhFA6HLBuiWLbbbvsn4gJ2GKd8T29NWeGodHx6NdXByWQn6pxLwqDT8XgEd5hiO0zXog5HCHkr8QbiO8AMOHwPF78fDUZWL9cmeep6B527CNsK3hAMKn8HYFYo0HX2S0I8wXyRUag0y6nFwWuBl5bDFSPCiuR/WvItwg6bO+YoB7jR0fjthBXxIg0FWAdbwVIy+SvOwyzytyNTRyzDYnlSlxEYh6hunePCLsV75t82aNrx7PCiiv1h0IurfajC2K+t9ZSd5j7AIv1mnxBLNCXJK61KMEiuxCdvOds0U5o48lGCcsgDt5RIqwUGoFMbfAQMcjDcn6GdSlPfe5aJsKWFWksHaM8gFqDSN8HxC3FKUFM3CulXpa2xPydJi8FJpql+6+2WACwiDNCPX4APvBvBSaRBkBsYAY+AXXOItbo2PZ5Y14Kn6oDF+MA7HyPMVI5I6IrI2XPY9Yb9SfpZoX6c5FSZDTeA5OIZM3jnOgL7t4lDUhiN0i40BLkNkVYjGUc0pqxGxQS1m0QBR5xvHf5I8B0A268eJWL5d6q/RNwSD7EYaba2XAZZrIj5J/bA9rYbFszUj5jdJntnoWHfoMtjCT50iDZCpm6HAkG4GTMMSKFKmjzRaI6wewfdhUSc/BbpKnoehXwS6LMQSaNPo24bQuMrGAGuRkChWHIi6nrjNd0pYGxUOkWlICgwgee5X1nstQvDTYZB20ccInGCr7S7A3vLTOJT7inCFSE7k++gL8sFTypQG2Z+pOOADEYezQxrv4+iPF07uIGQGJhD6hLBXlM3C8TZZKtCcJ/ZCZmAMEMVZX6UzCXN94D0XvFRaodnv02qAXkhHLXL+u/6qRrCh0kybrIzHcXim5jhcjb9LocPVIhS3pmM+IRLPDCiE5TcrnXegQDn+ZuGzNW25I5zcvMXDLxSgzjpD52crHSx3Ot47joNu1U4cL0hsZkAIcfbkGCFyKpOiLj3qdEyK8uXL24a65qRonBkhjvmf42YGQQeQCXpL45QqkcxI1tFG4QiXaPzXBJxd+hvaciL3DudodjuhJXCOofN/I6zky8tVBo/MCvPN7vYEPXYUbcs0nXd/XwUdqqBTp/FGHxLeBf5EGOkSJyLfJIzFqPzs0X49nNV0RJbNFh1vRt3paLveo349dBmLmaieSyLoQ1I+QL0c5UTkGxad4PVZgmjNj8vRMfAbNlkmvhy9DUmdpC9H1ZliO41V59SKkTFtTe4Vdpvh9/NgxFyFt22qrZuWb4LboG3n+dDykkitTfTgG4v3JKfjW6LqOI7abekMhV2ar1Fwq6FuBZzcNkf/jEbX9jixFSZNfl6McP6gTgQn6xCmymQkxxP80us05XDDT2D3iXp5cLpl4qg+0kn0nVAKX4s/Jjp/BNuT7oED5+ZOEKHvqYa8RJXTMTOdB1m+kF8GmIQRdMR63WSoH3E6P5aOGOpuUg4/Lo2GzEAYIAc5xFyxly+L0abdssylZSKGyIXMnCAYIKQJRZ/QHI2TIeb1uCjr74f+fhiApy9fkvyFbw5Plzr+E88C90UIy3rAsX9AZaSwT8q9RviCcJJz9FXZIQu5WWIgvN71Mc8pyC384li+AEmXARwoZKtU1On8WNrm6fshp/Oj7EDsAvHSLhHkbMM5IO0UzpAB+Oj6FPJ4IRxaDmZCka5/nOwyQJcBjm0D/CvAAF/S81D+EWScAAAAAElFTkSuQmCC'
                )
            )
        );
        console.log(this);
    };
    /**DOC:
     {
		 title :`RedDirectionalLight.TYPE`,
		 code : 'CONST',
		 description : `RedDirectionalLight 타입상수`,
		 return : 'String'
	 }
     :DOC*/
    RedDirectionalLight['TYPE'] = 'RedDirectionalLight';
    RedDirectionalLight.prototype = new RedBaseLight();
    /**DOC:
     {
         code : 'PROPERTY',
		 title :`type`,
		 description : `RedDirectionalLight['TYPE']`,
		 return : 'String'
	 }
     :DOC*/
    Object.defineProperty(RedDirectionalLight.prototype, 'TYPE', {
        configurable: false,
        writable: false,
        value: RedDirectionalLight['TYPE']
    });
    Object.freeze(RedDirectionalLight);
})();
"use strict";
var RedPointLight;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedPointLight`,
		 description : `
			 RedPointLight Instance 생성
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 hex : [
				 {type:'hex'},
				 '기본값 : #fff'
			 ],
			 alpha : [
				 {type:'number'},
				 '기본값 : 1'
			 ]
		 },
		 extends : [
		    'RedBaseLight'
		 ],
		 demo : '../example/light/RedPointLight.html',
		 example: `
			 RedPointLight(RedGL Instance, '#fff', 1);
		 `,
		 return : 'RedPointLight Instance'
	 }
     :DOC*/
    RedPointLight = function (redGL, hexColor, alpha) {
        if (!(this instanceof RedPointLight)) return new RedPointLight(redGL, hexColor, alpha);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedPointLight : RedGL Instance만 허용.', '입력값 : ' + redGL);
        // 유니폼 프로퍼티
        this['_lightColor'] = new Float32Array(4);
        // 일반 프로퍼티
        this['intensity'] = 1;
        this['alpha'] = alpha == undefined ? 1 : alpha;
        this['color'] = hexColor ? hexColor : '#fff';
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`x`,
			 description : `기본값 : 0`,
			 return : 'Number'
		 }
         :DOC*/
        this['x'] = 0;
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`y`,
			 description : `기본값 : 0`,
			 return : 'Number'
		 }
         :DOC*/
        this['y'] = 0;
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`z`,
			 description : `기본값 : 0`,
			 return : 'Number'
		 }
         :DOC*/
        this['z'] = 0;
        this['radius'] = 1;
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`debug`,
			 description : `디버그오브젝트 활성화 여부`,
			 return : 'Boolean'
		 }
         :DOC*/
        this['debug'] = false;
        this['_debugObject'] = RedMesh(redGL, RedSphere(redGL, 1, 16, 16, 16), RedColorMaterial(redGL));
        this['_debugObject']['drawMode'] = redGL.gl.LINE_STRIP;
        this['_UUID'] = RedGL.makeUUID();
        console.log(this);
    };
    /**DOC:
     {
		 title :`RedPointLight.TYPE`,
		 code : 'CONST',
		 description : `RedPointLight 타입상수`,
		 return : 'String'
	 }
     :DOC*/
    RedPointLight['TYPE'] = 'RedPointLight';
    RedPointLight.prototype = new RedBaseLight;
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`type`,
		 description : `RedPointLight['TYPE']`,
		 return : 'String'
	 }
     :DOC*/
    Object.defineProperty(RedPointLight.prototype, 'TYPE', {
        configurable: false,
        writable: false,
        value: RedPointLight['TYPE']
    });
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`radius`,
		 description : `
		 점광의 반지름
		 기본값 : 1
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPointLight', 'radius', 'number', {'min': 0});
    Object.freeze(RedPointLight);
})();
"use strict";
var JsonModelLoader;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`JsonModelLoader`,
		 description : `
			 <h1>>현재 단순테스트용</h1>
			 실제로 사용할지 여부는 미정.
		 `,
		 return : 'void'
	 }
     :DOC*/
    JsonModelLoader = function (redGL, key, src, callback) {
        if ((!(this instanceof JsonModelLoader))) return new JsonModelLoader(redGL, key, src, callback)
        console.log('~~~~~~~~~~~')
        var request = new XMLHttpRequest();
        request.open("GET", src, true);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
            request.onreadystatechange = function () {
                if (request.readyState == 4) {
                    var jsonData;
                    var interleaveData, indexData;
                    var i, len;
                    interleaveData = []
                    indexData = []
                    jsonData = JSON.parse(request.responseText)
                    i = 0, len = jsonData['position'].length / 3
                    for (i; i < len; i++) {
                        interleaveData.push(jsonData['position'][i * 3], jsonData['position'][i * 3 + 1], jsonData['position'][i * 3 + 2])
                        interleaveData.push(jsonData['normal'][i * 3], jsonData['normal'][i * 3 + 1], jsonData['normal'][i * 3 + 2])
                        if (jsonData['uvs']) interleaveData.push(jsonData['uvs'][i * 2], jsonData['uvs'][i * 2 + 1])
                        else interleaveData.push(0, 0)
                    }
                    console.log(jsonData)
                    console.log(interleaveData)
                    if (callback) {
                        // TODO: 유일키 방어
                        callback(
                            RedBuffer(
                                redGL,
                                key,
                                RedBuffer.ARRAY_BUFFER,
                                new Float32Array(interleaveData),
                                [
                                    RedInterleaveInfo('aVertexPosition', 3),
                                    RedInterleaveInfo('aVertexNormal', 3),
                                    RedInterleaveInfo('aTexcoord', 2)
                                ]
                            ),
                            RedBuffer(
                                redGL,
                                key,
                                RedBuffer.ELEMENT_ARRAY_BUFFER,
                                new Uint16Array(jsonData['index'])
                            )
                        )
                    }
                }
            }
        request.send();
    }
    Object.freeze(JsonModelLoader)
})()
"use strict";
var RedMTLLoader;
(function () {
    var parser;
    var RedMTLResult;
    RedMTLResult = function () {
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedMTLResult`,
		 description : `
			 OBJ 로딩시 mtl로딩이 필요하면 자동으로 호출됨
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 path : [
				 {type:'String'},
				 '파일이 위치한 경로'
			 ],
			 fileName : [
				 {type:'String'},
				 '파일이름'
			 ],
			 callback : [
				 {type:'Function'},
				 '로딩완료시 실행될 콜백'
			 ]
		 },
		 return : 'void'
	 }
     :DOC*/
    RedMTLLoader = function (redGL, path, fileName, callback) {
        if ((!(this instanceof RedMTLLoader))) return new RedMTLLoader(redGL, path, fileName, callback);
        console.log('~~~~~~~~~~~');
        var self = this;
        var request = new XMLHttpRequest();
        request.open("GET", path + fileName, true);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                self['complete'] = true;
                if (request.status == 200) {
                    var data;
                    data = parser(self, redGL, request.responseText);
                    self['parseData'] = data;
                } else {
                    self['parseData'] = new RedMTLResult();
                }
                if (callback) callback(self['parseData']);
            }
        };
        request.addEventListener('error', function (e) {
            console.log('에럿', e);
        });
        request.send();
        this['path'] = path;
        this['fileName'] = fileName;
        this['complete'] = false;
        this['parseData'] = null;
    };
    parser = function (target, redGL, data) {
        var info, resultInfo;
        var lines;
        var reg_newmtl, reg_Ns, reg_Ka, reg_Kd, reg_Ks, reg_Ni, reg_d, reg_illum, reg_map_Kd, reg_map_Ns, reg_map_Ks,
            red_map_bump;
        var currentMaterialInfo;
        info = {};
        reg_newmtl = /^(newmtl )/;
        reg_Ns = /^(Ns )/; // uShininess
        reg_Ka = /^(Ka )/;
        reg_Kd = /^(Kd )/; // 컬러
        reg_Ks = /^(Ks )/;
        reg_Ni = /^(Ni )/; // 굴절률
        reg_d = /^(d )/;
        reg_illum = /^(illum )/;
        reg_map_Kd = /^(map_Kd )/;
        reg_map_Ks = /^(map_Ks )/;
        reg_map_Ns = /^(map_Ns )/;
        red_map_bump = /^(map_bump )/;
        data = data.replace(/^\#[\s\S]+?\n/g, '');
        lines = data.split("\n");
        // 재질 정보 정의
        lines.forEach(function (line) {
            if (reg_newmtl.test(line)) {
                // console.log(line)
                var tName;
                tName = line.replace('newmtl ', '').trim();
                currentMaterialInfo = {
                    name: tName
                };
                info[tName] = currentMaterialInfo;
            }

            // 암비안트
            else if (reg_Ka.test(line)) currentMaterialInfo['Ka'] = line.replace('Ka ', '').split(' ');
            // 디퓨즈
            else if (reg_Kd.test(line)) currentMaterialInfo['Kd'] = line.replace('Kd ', '').split(' ');
            // 스페큘러
            else if (reg_Ks.test(line)) currentMaterialInfo['Ks'] = line.replace('Ks ', '').split(' ');
            //uShininess
            else if (reg_Ns.test(line)) currentMaterialInfo['Ns'] = +line.replace('Ns ', '');
            // 굴절률
            else if (reg_Ni.test(line)) currentMaterialInfo['Ni'] = +line.replace('Ni ', '');
            // 디졸브라는데 뭐래 -_-
            else if (reg_d.test(line)) currentMaterialInfo['d'] = +line.replace('d ', '');
            else if (reg_illum.test(line)) {
                // illum illum_#
                // The "illum" statement specifies the illumination model to use in the
                // material.  Illumination models are mathematical equations that represent
                // various material lighting and shading effects.
                // "illum_#"can be a number from 0 to 10.  The illumination models are
                // summarized below; for complete descriptions see "Illumination models" on
                // page 5-30.
                currentMaterialInfo['illum'] = +line.replace('illum ', '');
                switch (currentMaterialInfo['illum']) {
                    case 0:
                        // 0		Color on and Ambient off
                        break;
                    case 1:
                        // 1		Color on and Ambient on
                        break;
                    case 2:
                        // 2		Highlight on
                        break;
                    case 3:
                        // 3		Reflection on and Ray trace on
                        break;
                    case 4:
                        // 4		Transparency: Glass on
                        break;
                    case 5:
                        // 5		Reflection: Fresnel on and Ray trace on
                        break;
                    case 6:
                        // 6		Transparency: Refraction on
                        break;
                    case 7:
                        // 7		Transparency: Refraction on
                        break;
                    case 8:
                        // 8		Reflection on and Ray trace off
                        break;
                    case 9:
                        // 9		Transparency: Glass on
                        break;
                    case 10:
                        // 10		Casts shadows onto invisible surfaces
                        break;
                }
            }
            // map_Ka lemur.tga           # the ambient texture map
            // map_Kd lemur.tga           # the diffuse texture map (most of the time, it will
            //                            # be the same as the ambient texture map)
            // map_Ks lemur.tga           # specular color texture map
            // map_Ns lemur_spec.tga      # specular highlight component
            // map_d lemur_alpha.tga      # the alpha texture map
            // map_bump lemur_bump.tga    # some implementations use 'map_bump' instead of 'bump' below
            else if (reg_map_Kd.test(line)) currentMaterialInfo['map_Kd'] = target['path'] + line.replace('map_Kd ', '');
            else if (reg_map_Ns.test(line)) currentMaterialInfo['map_Ns'] = target['path'] + line.replace('map_Ns ', '');
            // else if (reg_map_Ks.test(line)) currentMaterialInfo['map_Ks'] = target['path'] + line.replace('map_Ks ', '');
            else if (red_map_bump.test(line)) currentMaterialInfo['map_bump'] = target['path'] + (line.replace('map_bump ', '').split(' ')[2]);
        });
        resultInfo = new RedMTLResult();
        for (var k in info) {
            resultInfo[k] = info[k];
        }
        console.log(resultInfo);
        return resultInfo
    };
    Object.freeze(RedMTLLoader);
})();
"use strict";
var RedOBJLoader;
(function () {
    var parser;
    var setMesh;
    var setMaterial;
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedOBJLoader`,
		 description : `
			 OBJ 로더.
			 애니메이션은 지원하지 않음(GLTF만 지원)
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 path : [
				 {type:'String'},
				 '파일이 위치한 경로'
			 ],
			 fileName : [
				 {type:'String'},
				 '파일이름'
			 ],
			 callback : [
				 {type:'Function'},
				 '로딩완료시 실행될 콜백'
			 ]
		 },
		 demo : '../example/loader/obj/RedOBJLoader.html',
		 example : `
		    // OBJ 로딩
            RedOBJLoader(
                RedGL Instance, // redGL
                assetPath + 'obj/', // assetRootPath
                'female.obj', // fileName
                function (v) { // callback
                    console.log(v);
                    tScene.addChild(v['resultMesh'])
                }
            )
		 `,
		 return : 'void'
	 }
     :DOC*/
    //TODO: 환경맵 파싱
    //TODO: bump 값 상세파싱
    RedOBJLoader = function (redGL, path, fileName, callback) {
        if ((!(this instanceof RedOBJLoader))) return new RedOBJLoader(redGL, path, fileName, callback)
        console.log('~~~~~~~~~~~')
        var self = this;
        var request = new XMLHttpRequest();
        request.open("GET", path + fileName, true);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                var data;
                self['result'] = parser(self, redGL, request.responseText)
                self['modelParsingComplete'] = true
                self['resultMesh'] = data
                if (callback) {
                    if (self['mtlLoader']) {
                        if (self['mtlLoader']['complete']) {
                            console.log('모델 파싱 종료 & 재질 파싱 종료');
                            callback(self['result'])
                        }
                        else console.log('모델 파싱 종료 & 재질 파싱중')
                    } else {
                        console.log('모델 파싱 종료 & 재질 없음');
                        callback(self['result'])
                    }
                }
            }
        }
        request.send();
        this['path'] = path;
        this['fileName'] = fileName;
        this['mtlLoader'] = null;
        this['modelParsingComplete'] = false;
        this['callback'] = callback;
        this['resultMesh'] = RedMesh(redGL)
        this['resultMesh']['name'] = 'instanceOfRedOBJLoader_' + RedGL.makeUUID()
        this['result'] = null;
    }
    setMaterial = function (redGL, tObjInfo, tMtlLoader) {
        // console.log(tObjInfo)
        // console.log('tMtlLoader', tMtlLoader)
        var k;
        var tMtlData, tMeshData
        var cacheTexture;
        cacheTexture = {}
        for (k in tObjInfo) {
            var tMaterial;
            var tMesh
            var tTexture;
            tMeshData = tObjInfo[k]
            tMesh = tMeshData['mesh']
            if (tMeshData['use'] && tMeshData['resultInterleave'].length) {
                var r, g, b;
                var ableLight
                ableLight = tMeshData['ableLight']
                // console.log(tMeshData)
                // console.log('해석할 재질키', tMeshData['materialKey'])
                //
                tMtlData = tMtlLoader['parseData'][tMeshData['materialKey']]
                if (tMtlData) {
                    if (tMtlData['map_Kd']) {
                        // 비트맵 기반으로 해석
                        console.log('tMtlData', tMtlData)
                        if (cacheTexture[tMtlData['map_Kd']]) tTexture = cacheTexture[tMtlData['map_Kd']]
                        else {
                            tTexture = RedBitmapTexture(redGL, tMtlData['map_Kd'])
                            cacheTexture[tMtlData['map_Kd']] = tTexture
                        }
                        if (ableLight) tMaterial = RedStandardMaterial(redGL, tTexture);
                        else tMaterial = RedBitmapMaterial(redGL, tTexture);
                    }
                    else if (tMtlData['Kd']) {
                        // 컬러기반으로 해석
                        r = tMtlData['Kd'][0] * 255;
                        g = tMtlData['Kd'][1] * 255;
                        b = tMtlData['Kd'][2] * 255;
                        if (ableLight) tMaterial = RedColorPhongTextureMaterial(redGL, RedGLUtil.rgb2hex(r, g, b));
                        else {
                            if (tMeshData['ableNormal']) tMaterial = RedColorPhongMaterial(redGL, RedGLUtil.rgb2hex(r, g, b));
                            else tMaterial = RedColorMaterial(redGL, RedGLUtil.rgb2hex(r, g, b));
                        }
                    }
                    if (tMaterial) {
                        // 스페큘러텍스쳐
                        if (tMtlData['map_Ns']) {
                            if (cacheTexture[tMtlData['map_Ns']]) tTexture = cacheTexture[tMtlData['map_Ns']]
                            else {
                                tTexture = RedBitmapTexture(redGL, tMtlData['map_Ns'])
                                cacheTexture[tMtlData['map_Ns']] = tTexture
                            }
                            tMaterial['specularTexture'] = tTexture
                        }
                        if (tMtlData['map_bump']) {
                            if (cacheTexture[tMtlData['map_bump']]) tTexture = cacheTexture[tMtlData['map_bump']]
                            else {
                                tTexture = RedBitmapTexture(redGL, tMtlData['map_bump'])
                                cacheTexture[tMtlData['map_bump']] = tTexture
                            }
                            tMaterial['normalTexture'] = tTexture
                        }
                        // shininess
                        if (tMtlData['Ns'] != undefined) tMaterial['shininess'] = tMtlData['Ns']
                        // 메쉬에 재질 적용
                        tMeshData['mesh']['material'] = tMaterial
                    }
                } else {
                    console.log('스킵')
                }
            }
        }
    }
    setMesh = function (redGL, parentMesh, childrenInfo) {
        for (var k in childrenInfo) {
            var tData;
            tData = childrenInfo[k]
            // console.log('!!!', k, tData)
            var tMesh;
            if (!tData['use']) {
                tMesh = RedMesh(redGL)
            } else {
                // 인터리브 버퍼 생성
                var tInterleaveInfo = []
                var interleaveBuffer, indexBuffer
                if (tData['resultPosition'].length) tInterleaveInfo.push(RedInterleaveInfo('aVertexPosition', 3))
                if (tData['resultNormal'].length) tInterleaveInfo.push(RedInterleaveInfo('aVertexNormal', 3))
                if (tData['resultUV'].length) tInterleaveInfo.push(RedInterleaveInfo('aTexcoord', 2))
                interleaveBuffer = RedBuffer(
                    redGL,
                    k + '_interleave',
                    RedBuffer.ARRAY_BUFFER,
                    new Float32Array(tData['resultInterleave'].length ? tData['resultInterleave'] : tData['resultPosition']),
                    tInterleaveInfo
                )
                if (tData['index'].length) {
                    // 인덱스 버퍼 생성
                    if (tData['index'].length) {
                        indexBuffer = RedBuffer(
                            redGL,
                            k + '_index',
                            RedBuffer.ELEMENT_ARRAY_BUFFER,
                            new Uint16Array(tData['index'])
                        )
                    }
                }
                var tempMaterial;
                if (tData['resultUV'].length && tData['resultNormal'].length) tempMaterial = RedColorPhongTextureMaterial(redGL, '#00ff00')
                else {
                    if (tData['resultNormal']) tempMaterial = RedColorPhongMaterial(redGL, '#00ff00')
                    else tempMaterial = RedColorMaterial(redGL, '#0000ff')
                }
                tMesh = RedMesh(redGL, RedGeometry(interleaveBuffer, indexBuffer), tempMaterial);
                tData['ableUV'] = tData['resultUV'].length ? true : false
                tData['ableNormal'] = tData['resultNormal'].length ? true : false
                tData['ableLight'] = tData['ableUV'] & tData['ableNormal'] ? true : false
            }
            tMesh['name'] = k
            tData['mesh'] = tMesh
            parentMesh.addChild(tMesh)
            setMesh(redGL, tMesh, tData['childrenInfo'])
        }
    }
    var parseObj;
    parseObj = (function () {
        var regObject, regGroup;
        var regVertex, regNormal, redUV;
        var regIndex, regIndex2, regIndex3, regIndex4;
        var regMtllib;
        var regUseMtl;
        regMtllib = /^(mtllib )/;
        regUseMtl = /^(usemtl )/;
        regObject = /^o /;
        regGroup = /^g /;
        regVertex = /v( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/;
        regNormal = /vn( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/;
        redUV = /vt( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/;
        regIndex = /f\s+(([\d]{1,}[\s]?){3,})+/;
        regIndex2 = /f\s+((([\d]{1,}\/[\d]{1,}[\s]?){3,})+)/;
        regIndex3 = /f\s+((([\d]{1,}\/[\d]{1,}\/[\d]{1,}[\s]?){3,})+)/;
        regIndex4 = /f\s+((([\d]{1,}\/\/[\d]{1,}[\s]?){3,})+)/
        return function (redGL, tRedOBJLoader, lineList) {
            var info; // 단편 구조로 정보구성
            var infoHierarchy; // 하이라키 구조로 정보구성
            var pointInfo;
            ;
            // 현재 바라볼 메쉬정보
            var currentMeshInfo;
            // 현재 그룹이름
            var currentGroupName;
            // 재질로더
            var tMtlLoader;
            // 전체 삼각형 구성정보.
            pointInfo = {
                position: [],
                normal: [],
                uv: [],
                //
                points: [],
                normalPoints: [],
                uvPoints: []
            }
            infoHierarchy = {};
            info = {};
            var i;
            var hasObjectName;
            i = lineList.length
            while (i--) {
                if (regObject.test(lineList[i])) {
                    hasObjectName = true
                    break
                }
            }
            if (!hasObjectName) {
                var tName;
                var tInfo;
                tName = 'objModel' + RedGL.makeUUID()
                tInfo = {
                    name: tName,
                    groupName: tName,
                    index: [],
                    position: [],
                    resultPosition: [],
                    resultNormal: [],
                    resultUV: [],
                    resultInterleave: [],
                    use: true,
                    childrenInfo: {}
                }
                infoHierarchy[tName] = currentMeshInfo = tInfo;
                info[tName] = currentMeshInfo
                currentGroupName = tName
            }
            lineList.forEach(function (line) {
                if (regMtllib.test(line)) {
                    console.log('regMtllib', '재질파일정보', line)
                    tMtlLoader = RedMTLLoader(redGL, tRedOBJLoader['path'], line.split(' ')[1], function (v) {
                        tRedOBJLoader['mtlLoader'] = v
                        if (tRedOBJLoader['modelParsingComplete']) {
                            if (tRedOBJLoader['callback']) {
                                console.log('재질에서 - 재질 파싱 종료 & 재질 파싱 종료');
                                setMaterial(redGL, info, tMtlLoader)
                                tRedOBJLoader['callback'](tRedOBJLoader['result'])
                            }
                            else console.log('RedOBJLoader 콜백없음')
                        } else console.log('재질에서 - 파싱 진행중 & 재질 파싱 종료')
                    })
                    tRedOBJLoader['mtlLoader'] = tMtlLoader
                    return
                }
                if (regUseMtl.test(line)) {
                    var tName;
                    var tInfo;
                    tName = line.split(' ').slice(1).join('').trim()
                    info[currentGroupName]['materialKey'] = tName
                    console.log('regUseMtl', line, '재질사용', regUseMtl.test(line), info[currentGroupName])
                }
                // 그룹 검색
                else if (regGroup.test(line)) {
                    var tName;
                    var tInfo;
                    tName = line.split(' ').slice(1).join('').trim()
                    // console.log('name', tName)
                    // console.log('currentGroupName', currentGroupName)
                    // 그룹으로 판정될 경우 현재 그룹은 컨테이너로만 사용한다.
                    infoHierarchy[currentGroupName]['use'] = false
                    tInfo = {
                        name: tName,
                        groupName: currentGroupName,
                        materialKey: tName.replace(currentGroupName + '_', ''),
                        index: [],
                        position: currentMeshInfo['position'],
                        resultPosition: [],
                        resultNormal: [],
                        resultUV: [],
                        resultInterleave: [],
                        use: true,
                        childrenInfo: {}
                    }
                    // 현재 메쉬 정보를 저장
                    info[tName] = currentMeshInfo = tInfo;
                    // 현재 그룹의 자식정보에 현재 메쉬 정보 추가
                    infoHierarchy[currentGroupName]['childrenInfo'][tName] = currentMeshInfo
                    // 이름이없는 오브젝트가 처음으로 생성되었을떄 사용안함으로 변경함
                    // console.log('regGroup', line, '신규그룹오브젝트', regGroup.test(line))
                }
                // 오브젝트 검색
                else if (regObject.test(line)) {
                    var tName;
                    var tInfo;
                    tName = line.split(' ').slice(1).join('').trim()
                    // console.log('name', tName)
                    tInfo = {
                        name: tName,
                        groupName: tName,
                        materialKey: tName,
                        index: [],
                        position: [],
                        resultPosition: [],
                        resultNormal: [],
                        resultUV: [],
                        resultInterleave: [],
                        use: true,
                        childrenInfo: {}
                    }
                    // 하이라키 정보에 추가
                    infoHierarchy[tName] = currentMeshInfo = tInfo;
                    // 현재 메쉬 정보 저장
                    info[tName] = currentMeshInfo;
                    // 현재 그룹이름을 현재 오브젝트 이름으로 설정
                    currentGroupName = tName;
                    // console.log('regObject', line, '신규오브젝트', regObject.test(line))
                }
                // 포지션 검색
                if (regVertex.test(line)) {
                    var tPosition;
                    tPosition = line.split(' ');
                    pointInfo['position'].push(+tPosition[1], +tPosition[2], +tPosition[3])
                    currentMeshInfo['position'].push(+tPosition[1], +tPosition[2], +tPosition[3])
                    pointInfo['points'][pointInfo['points'].length] = [+tPosition[1], +tPosition[2], +tPosition[3]]
                    // console.log('regVertex', line, regVertex.test(line))
                }
                // 노말 검색
                else if (regNormal.test(line)) {
                    var tNormal;
                    tNormal = line.split(' ');
                    pointInfo['normal'].push(+tNormal[1], +tNormal[2], +tNormal[3])
                    pointInfo['normalPoints'][pointInfo['normalPoints'].length] = [+tNormal[1], +tNormal[2], +tNormal[3]]
                    // console.log('regNormal', line, regNormal.test(line))
                }
                //UV 검색
                else if (redUV.test(line)) {
                    var tUV;
                    tUV = line.split(' ');
                    pointInfo['uv'].push(+tUV[1], 1-tUV[2])
                    pointInfo['uvPoints'][pointInfo['uvPoints'].length] = [+tUV[1], 1-tUV[2]]
                    // console.log('redUV', line, redUV.test(line))
                }
                // 인덱스 검색 1//1 1//1 1//1 v//n
                else if (regIndex4.test(line)) {
                    var tData;
                    var tIndex, tNIndex;
                    tData = line.split(' ').slice(1, 4);
                    tData.forEach(function (v) {
                        var tPoint, tNormalPoint;
                        var max;
                        max = 0
                        v = v.split('/')
                        tIndex = +v[0] - 1
                        tNIndex = +v[2] - 1
                        tPoint = pointInfo['points'][tIndex]
                        tNormalPoint = pointInfo['normalPoints'][tNIndex]
                        if (pointInfo['position'].length) max += 3
                        if (pointInfo['normal'].length) max += 3
                        //
                        currentMeshInfo['index'].push(currentMeshInfo['resultInterleave'].length / max)
                        //
                        if (pointInfo['position'].length) {
                            currentMeshInfo['resultPosition'].push(tPoint[0], tPoint[1], tPoint[2])
                            currentMeshInfo['resultInterleave'].push(tPoint[0], tPoint[1], tPoint[2])
                        }
                        if (pointInfo['normal'].length) {
                            currentMeshInfo['resultNormal'].push(tNormalPoint[0], tNormalPoint[1], tNormalPoint[2])
                            currentMeshInfo['resultInterleave'].push(tNormalPoint[0], tNormalPoint[1], tNormalPoint[2])
                        }
                    })
                    // console.log(tData)
                    // console.log('regIndex4', line, regIndex4.test(line))
                }
                // 인덱스 검색 1/1/1 1/1/1 1/1/1  v/uv/n
                else if (regIndex3.test(line)) {
                    var tData;
                    var tIndex, tUVIndex, tNIndex;
                    tData = line.split(' ').slice(1, 5);
                    // console.log('tData',tData)
                    if (tData.length == 4) {
                        var t0 = tData[3]
                        tData[3] = tData[0]
                        tData[4] = tData[2]
                        tData[5] = t0
                    }
                    tData.forEach(function (v) {
                        var tPoint, tNormalPoint, tUVPoints;
                        var max;
                        max = 0
                        v = v.split('/')
                        tIndex = +v[0] - 1
                        tUVIndex = +v[1] - 1
                        tNIndex = +v[2] - 1
                        tPoint = pointInfo['points'][tIndex]
                        tUVPoints = pointInfo['uvPoints'][tUVIndex]
                        tNormalPoint = pointInfo['normalPoints'][tNIndex]
                        if (pointInfo['position'].length) max += 3
                        if (pointInfo['normal'].length) max += 3
                        if (pointInfo['uv'].length) max += 2
                        //
                        currentMeshInfo['index'].push(currentMeshInfo['resultInterleave'].length / max)
                        //
                        if (pointInfo['position'].length) {
                            currentMeshInfo['resultPosition'].push(tPoint[0], tPoint[1], tPoint[2])
                            currentMeshInfo['resultInterleave'].push(tPoint[0], tPoint[1], tPoint[2])
                        }
                        if (pointInfo['normal'].length) {
                            currentMeshInfo['resultNormal'].push(tNormalPoint[0], tNormalPoint[1], tNormalPoint[2])
                            currentMeshInfo['resultInterleave'].push(tNormalPoint[0], tNormalPoint[1], tNormalPoint[2])
                        }
                        if (pointInfo['uv'].length) {
                            currentMeshInfo['resultUV'].push(tUVPoints[0], tUVPoints[1])
                            currentMeshInfo['resultInterleave'].push(tUVPoints[0], tUVPoints[1])
                        }
                    })
                    // console.log(tData)
                    // console.log('regIndex3', line, regIndex3.test(line))
                } // 인덱스 검색 1/1 1/1 1/1 v/uv
                else if (regIndex2.test(line)) {
                    var tData;
                    var tIndex, tUVIndex;
                    tData = line.split(' ').slice(1, 4);
                    tData.forEach(function (v) {
                        var tPoint, tUVPoints;
                        var max;
                        max = 0
                        v = v.split('/')
                        tIndex = +v[0] - 1
                        tUVIndex = +v[1] - 1
                        tPoint = pointInfo['points'][tIndex]
                        tUVPoints = pointInfo['uvPoints'][tUVIndex]
                        if (pointInfo['position'].length) max += 3
                        if (pointInfo['uv'].length) max += 2
                        //
                        currentMeshInfo['index'].push(currentMeshInfo['resultInterleave'].length / max)
                        //
                        if (pointInfo['position'].length) {
                            currentMeshInfo['resultPosition'].push(tPoint[0], tPoint[1], tPoint[2])
                            currentMeshInfo['resultInterleave'].push(tPoint[0], tPoint[1], tPoint[2])
                        }
                        if (pointInfo['uv'].length) {
                            currentMeshInfo['resultUV'].push(tUVPoints[0], tUVPoints[1])
                            currentMeshInfo['resultInterleave'].push(tUVPoints[0], tUVPoints[1])
                        }
                    })
                    // console.log(tData)
                    // console.log('regIndex2', line, regIndex3.test(line))
                }
                else if (regIndex.test(line)) {
                    // 인덱스 검색 1 1 1 1// 인덱스 검색 1 1 1 1
                    var tIndex;
                    tIndex = line.split(' ');
                    currentMeshInfo['resultInterleave'] = currentMeshInfo['resultPosition'] = currentMeshInfo['position']
                    currentMeshInfo['index'].push(+tIndex[1] - 1, +tIndex[2] - 1, +tIndex[3] - 1)
                    currentMeshInfo['index'].push(+tIndex[1] - 1, +tIndex[3] - 1, +tIndex[4] - 1)
                    // console.log('regIndex', line, regIndex.test(line))
                }
            })
            return {
                info: info,
                infoHierarchy: infoHierarchy
            }
        }
    })();
    parser = function (tRedOBJLoader, redGL, rawData) {
        console.log('파싱시작', tRedOBJLoader['path'] + tRedOBJLoader['fileName'])
        // console.log(rawData)
        rawData = rawData.replace(/^\#[\s\S]+?\n/g, '');
        var RedOBJResult;
        var parsedData = parseObj(redGL, tRedOBJLoader, rawData.split("\n"))
        setMesh(redGL, tRedOBJLoader['resultMesh'], parsedData['infoHierarchy'])
        RedOBJResult = function (v) {
            for (var k in v) this[k] = v[k]
            console.log(this)
        }
        return new RedOBJResult(
            {
                fileName: tRedOBJLoader['fileName'],
                path: tRedOBJLoader['path'],
                resultMesh: tRedOBJLoader['resultMesh'],
                parseRawInfo: parsedData['info'],
                parseInfoHierarchy: parsedData['infoHierarchy'],
                parseInfoMaterial: tRedOBJLoader['mtlLoader']
            }
        )
    }
    Object.freeze(RedOBJLoader)
})()
"use strict";
var Red3DSLoader;
(function () {
    var NULL_CHUNK = 0x0000;
    var M3DMAGIC = 0x4D4D;
    var SMAGIC = 0x2D2D;
    var LMAGIC = 0x2D3D;
    var MLIBMAGIC = 0x3DAA;
    var MATMAGIC = 0x3DFF;
    var CMAGIC = 0xC23D;
    var M3D_VERSION = 0x0002;
    var M3D_KFVERSION = 0x0005;
    var COLOR_F = 0x0010;
    var COLOR_24 = 0x0011;
    var LIN_COLOR_24 = 0x0012;
    var LIN_COLOR_F = 0x0013;
    var INT_PERCENTAGE = 0x0030;
    var FLOAT_PERCENTAGE = 0x0031;
    var MDATA = 0x3D3D;
    var MESH_VERSION = 0x3D3E;
    var MASTER_SCALE = 0x0100;
    var LO_SHADOW_BIAS = 0x1400;
    var HI_SHADOW_BIAS = 0x1410;
    var SHADOW_MAP_SIZE = 0x1420;
    var SHADOW_SAMPLES = 0x1430;
    var SHADOW_RANGE = 0x1440;
    var SHADOW_FILTER = 0x1450;
    var RAY_BIAS = 0x1460;
    var O_CONSTS = 0x1500;
    var AMBIENT_LIGHT = 0x2100;
    var BIT_MAP = 0x1100;
    var SOLID_BGND = 0x1200;
    var V_GRADIENT = 0x1300;
    var USE_BIT_MAP = 0x1101;
    var USE_SOLID_BGND = 0x1201;
    var USE_V_GRADIENT = 0x1301;
    var FOG = 0x2200;
    var FOG_BGND = 0x2210;
    var LAYER_FOG = 0x2302;
    var DISTANCE_CUE = 0x2300;
    var DCUE_BGND = 0x2310;
    var USE_FOG = 0x2201;
    var USE_LAYER_FOG = 0x2303;
    var USE_DISTANCE_CUE = 0x2301;
    var MAT_ENTRY = 0xAFFF;
    var MAT_NAME = 0xA000;
    var MAT_AMBIENT = 0xA010;
    var MAT_DIFFUSE = 0xA020;
    var MAT_SPECULAR = 0xA030;
    var MAT_SHININESS = 0xA040;
    var MAT_SHIN2PCT = 0xA041;
    var MAT_TRANSPARENCY = 0xA050;
    var MAT_XPFALL = 0xA052;
    var MAT_USE_XPFALL = 0xA240;
    var MAT_REFBLUR = 0xA053;
    var MAT_SHADING = 0xA100;
    var MAT_USE_REFBLUR = 0xA250;
    var MAT_SELF_ILLUM = 0xA084;
    var MAT_TWO_SIDE = 0xA081;
    var MAT_DECAL = 0xA082;
    var MAT_ADDITIVE = 0xA083;
    var MAT_WIRE = 0xA085;
    var MAT_FACEMAP = 0xA088;
    var MAT_TRANSFALLOFF_IN = 0xA08A;
    var MAT_PHONGSOFT = 0xA08C;
    var MAT_WIREABS = 0xA08E;
    var MAT_WIRE_SIZE = 0xA087;
    var MAT_TEXMAP = 0xA200;
    var MAT_SXP_TEXT_DATA = 0xA320;
    var MAT_TEXMASK = 0xA33E;
    var MAT_SXP_TEXTMASK_DATA = 0xA32A;
    var MAT_TEX2MAP = 0xA33A;
    var MAT_SXP_TEXT2_DATA = 0xA321;
    var MAT_TEX2MASK = 0xA340;
    var MAT_SXP_TEXT2MASK_DATA = 0xA32C;
    var MAT_OPACMAP = 0xA210;
    var MAT_SXP_OPAC_DATA = 0xA322;
    var MAT_OPACMASK = 0xA342;
    var MAT_SXP_OPACMASK_DATA = 0xA32E;
    var MAT_BUMPMAP = 0xA230;
    var MAT_SXP_BUMP_DATA = 0xA324;
    var MAT_BUMPMASK = 0xA344;
    var MAT_SXP_BUMPMASK_DATA = 0xA330;
    var MAT_SPECMAP = 0xA204;
    var MAT_SXP_SPEC_DATA = 0xA325;
    var MAT_SPECMASK = 0xA348;
    var MAT_SXP_SPECMASK_DATA = 0xA332;
    var MAT_SHINMAP = 0xA33C;
    var MAT_SXP_SHIN_DATA = 0xA326;
    var MAT_SHINMASK = 0xA346;
    var MAT_SXP_SHINMASK_DATA = 0xA334;
    var MAT_SELFIMAP = 0xA33D;
    var MAT_SXP_SELFI_DATA = 0xA328;
    var MAT_SELFIMASK = 0xA34A;
    var MAT_SXP_SELFIMASK_DATA = 0xA336;
    var MAT_REFLMAP = 0xA220;
    var MAT_REFLMASK = 0xA34C;
    var MAT_SXP_REFLMASK_DATA = 0xA338;
    var MAT_ACUBIC = 0xA310;
    var MAT_MAPNAME = 0xA300;
    var MAT_MAP_TILING = 0xA351;
    var MAT_MAP_TEXBLUR = 0xA353;
    var MAT_MAP_USCALE = 0xA354;
    var MAT_MAP_VSCALE = 0xA356;
    var MAT_MAP_UOFFSET = 0xA358;
    var MAT_MAP_VOFFSET = 0xA35A;
    var MAT_MAP_ANG = 0xA35C;
    var MAT_MAP_COL1 = 0xA360;
    var MAT_MAP_COL2 = 0xA362;
    var MAT_MAP_RCOL = 0xA364;
    var MAT_MAP_GCOL = 0xA366;
    var MAT_MAP_BCOL = 0xA368;
    var NAMED_OBJECT = 0x4000;
    var N_DIRECT_LIGHT = 0x4600;
    var DL_OFF = 0x4620;
    var DL_OUTER_RANGE = 0x465A;
    var DL_INNER_RANGE = 0x4659;
    var DL_MULTIPLIER = 0x465B;
    var DL_EXCLUDE = 0x4654;
    var DL_ATTENUATE = 0x4625;
    var DL_SPOTLIGHT = 0x4610;
    var DL_SPOT_ROLL = 0x4656;
    var DL_SHADOWED = 0x4630;
    var DL_LOCAL_SHADOW2 = 0x4641;
    var DL_SEE_CONE = 0x4650;
    var DL_SPOT_RECTANGULAR = 0x4651;
    var DL_SPOT_ASPECT = 0x4657;
    var DL_SPOT_PROJECTOR = 0x4653;
    var DL_SPOT_OVERSHOOT = 0x4652;
    var DL_RAY_BIAS = 0x4658;
    var DL_RAYSHAD = 0x4627;
    var N_CAMERA = 0x4700;
    var CAM_SEE_CONE = 0x4710;
    var CAM_RANGES = 0x4720;
    var OBJ_HIDDEN = 0x4010;
    var OBJ_VIS_LOFTER = 0x4011;
    var OBJ_DOESNT_CAST = 0x4012;
    var OBJ_DONT_RECVSHADOW = 0x4017;
    var OBJ_MATTE = 0x4013;
    var OBJ_FAST = 0x4014;
    var OBJ_PROCEDURAL = 0x4015;
    var OBJ_FROZEN = 0x4016;
    var N_TRI_OBJECT = 0x4100;
    var POINT_ARRAY = 0x4110;
    var POINT_FLAG_ARRAY = 0x4111;
    var FACE_ARRAY = 0x4120;
    var MSH_MAT_GROUP = 0x4130;
    var SMOOTH_GROUP = 0x4150;
    var MSH_BOXMAP = 0x4190;
    var TEX_VERTS = 0x4140;
    var MESH_MATRIX = 0x4160;
    var MESH_COLOR = 0x4165;
    var MESH_TEXTURE_INFO = 0x4170;
    var KFDATA = 0xB000;
    var KFHDR = 0xB00A;
    var KFSEG = 0xB008;
    var KFCURTIME = 0xB009;
    var AMBIENT_NODE_TAG = 0xB001;
    var OBJECT_NODE_TAG = 0xB002;
    var CAMERA_NODE_TAG = 0xB003;
    var TARGET_NODE_TAG = 0xB004;
    var LIGHT_NODE_TAG = 0xB005;
    var L_TARGET_NODE_TAG = 0xB006;
    var SPOTLIGHT_NODE_TAG = 0xB007;
    var NODE_ID = 0xB030;
    var NODE_HDR = 0xB010;
    var PIVOT = 0xB013;
    var INSTANCE_NAME = 0xB011;
    var MORPH_SMOOTH = 0xB015;
    var BOUNDBOX = 0xB014;
    var POS_TRACK_TAG = 0xB020;
    var COL_TRACK_TAG = 0xB025;
    var ROT_TRACK_TAG = 0xB021;
    var SCL_TRACK_TAG = 0xB022;
    var MORPH_TRACK_TAG = 0xB026;
    var FOV_TRACK_TAG = 0xB023;
    var ROLL_TRACK_TAG = 0xB024;
    var HOT_TRACK_TAG = 0xB027;
    var FALL_TRACK_TAG = 0xB028;
    var HIDE_TRACK_TAG = 0xB029;
    var POLY_2D = 0x5000;
    var SHAPE_OK = 0x5010;
    var SHAPE_NOT_OK = 0x5011;
    var SHAPE_HOOK = 0x5020;
    var PATH_3D = 0x6000;
    var PATH_MATRIX = 0x6005;
    var SHAPE_2D = 0x6010;
    var M_SCALE = 0x6020;
    var M_TWIST = 0x6030;
    var M_TEETER = 0x6040;
    var M_FIT = 0x6050;
    var M_BEVEL = 0x6060;
    var XZ_CURVE = 0x6070;
    var YZ_CURVE = 0x6080;
    var INTERPCT = 0x6090;
    var DEFORM_LIMIT = 0x60A0;
    var USE_CONTOUR = 0x6100;
    var USE_TWEEN = 0x6110;
    var USE_SCALE = 0x6120;
    var USE_TWIST = 0x6130;
    var USE_TEETER = 0x6140;
    var USE_FIT = 0x6150;
    var USE_BEVEL = 0x6160;
    var DEFAULT_VIEW = 0x3000;
    var VIEW_TOP = 0x3010;
    var VIEW_BOTTOM = 0x3020;
    var VIEW_LEFT = 0x3030;
    var VIEW_RIGHT = 0x3040;
    var VIEW_FRONT = 0x3050;
    var VIEW_BACK = 0x3060;
    var VIEW_USER = 0x3070;
    var VIEW_CAMERA = 0x3080;
    var VIEW_WINDOW = 0x3090;
    var VIEWPORT_LAYOUT_OLD = 0x7000;
    var VIEWPORT_DATA_OLD = 0x7010;
    var VIEWPORT_LAYOUT = 0x7001;
    var VIEWPORT_DATA = 0x7011;
    var VIEWPORT_DATA_3 = 0x7012;
    var VIEWPORT_SIZE = 0x7020;
    var NETWORK_VIEW = 0x7030;
    var parser
    /**DOC:
     {
		 constructorYn : true,
		 title :`Red3DSLoader`,
		 description : `
			 3DS 로더.
			 애니메이션은 지원하지 않음(GLTF만 지원)
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 path : [
				 {type:'String'},
				 '파일이 위치한 경로'
			 ],
			 fileName : [
				 {type:'String'},
				 '파일이름'
			 ],
			 callback : [
				 {type:'Function'},
				 '로딩완료시 실행될 콜백'
			 ]
		 },
		 example : `
		    // 3ds 로딩
            Red3DSLoader(
                RedGL Instance, // redGL
                assetPath + '3ds/portalgun/', // assetRootPath
                'portalgun.3ds', // fileName
                function (v) { // callback
                    console.log('로딩성공', v);
                    (RedScene Instance).addChild(v['resultMesh']);
                }
            )
		 `,
		 demo : '../example/loader/3ds/Red3DSLoader.html',
		 return : 'void'
	 }
     :DOC*/
    Red3DSLoader = function (redGL, path, fileName, callback) {
        if ((!(this instanceof Red3DSLoader))) return new Red3DSLoader(redGL, path, fileName, callback)
        console.log('~~~~~~~~~~~')
        var self = this;
        var request = new XMLHttpRequest();
        request.open("GET", path + fileName, true);
        request.responseType = 'arraybuffer'
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status === 200) {
                console.log(request)
                self['result'] = parser(self, redGL, request['response'])
                if (callback) {
                    console.log('모델 파싱 종료');
                    callback(self['result'])
                }
            } else {
                console.log(request)
            }
        }
        request.send();
        this['redGL'] = redGL;
        this['position'] = 0;
        this['materials'] = {}
        this['meshs'] = []
        this['path'] = path;
        this['fileName'] = fileName;
        this['callback'] = callback;
        this['resultMesh'] = RedMesh(redGL)
        this['resultMesh']['name'] = 'instanceOfRed3DSLoader_' + RedGL.makeUUID()
        this['result'] = null;
    };
    parser = (function () {
        var readFile;
        var readChunk, nextChunk, endChunk;
        var readWord, readSize, readString, readByte, readColor, readMap;
        var resetPosition;
        var readMeshData;
        var readMesh;
        var readFloat;
        var readNamedObject;
        var readFaceArray;
        var readMaterialEntry
        var readMaterialGroup;
        readChunk = function (target, dataView) {
            var t0 = {};
            t0['cur'] = target['position'];
            t0['id'] = readWord(target, dataView);
            t0['size'] = readSize(target, dataView);
            t0['end'] = t0['cur'] + t0['size'];
            t0['cur'] += 6;
            console.log('readChunk', t0)
            return t0;
        }
        nextChunk = function (target, dataView, chunk) {
            if (chunk['cur'] >= chunk['end']) return 0;
            target['position'] = chunk['cur'];
            try {
                var next = readChunk(target, dataView);
                chunk['cur'] += next['size'];
                console.log('nextChunk', next['id'])
                return next['id'];
            } catch (e) {
                console.log('Unable to read chunk at ' + target['position']);
                return 0;
            }
        }
        endChunk = function (target, chunk) {
            target['position'] = chunk['end'];
        }
        readWord = function (target, dataView) {
            var t0 = dataView.getUint16(target['position'], true);
            target['position'] += 2;
            return t0;
        }
        readSize = function (target, dataView) {
            var t0 = dataView.getUint32(target['position'], true);
            target['position'] += 4;
            return t0;
        }
        readByte = function (target, dataView) {
            var to = dataView.getUint8(target['position'], true);
            target['position'] += 1;
            return to;
        }
        readString = function (target, dataView, maxLength) {
            var t0 = '';
            var i, t1;
            for (i = 0; i < maxLength; i++) {
                t1 = readByte(target, dataView);
                if (!t1) break;
                t0 += String.fromCharCode(t1);
            }
            return t0;
        }
        readFloat = function (target, dataView) {
            try {
                var v = dataView.getFloat32(target['position'], true);
                target['position'] += 4;
                return v;
            } catch (e) {
                console.log(e + ' ' + target['position'] + ' ' + dataView.byteLength);
            }
        }
        readColor = function (target, dataView) {
            var chunk = readChunk(target, dataView);
            var color;
            if (chunk['id'] === COLOR_24 || chunk['id'] === LIN_COLOR_24) {
                color = RedGLUtil.rgb2hex(readByte(target, dataView), readByte(target, dataView), readByte(target, dataView))
                console.log('      Color: ' + color);
            } else if (chunk['id'] === COLOR_F || chunk['id'] === LIN_COLOR_F) {
                color = RedGLUtil.rgb2hex(readByte(target, dataView), readByte(target, dataView), readByte(target, dataView))
                console.log('      Color: ' + color);
            } else console.log('      Unknown color chunk: ' + chunk.toString(16));
            endChunk(target, chunk);
            return color;
        }
        resetPosition = function (target) {
            target['position'] -= 6;
        }
        readMap = function (target, dataView, path) {
            var chunk = readChunk(target, dataView);
            var next = nextChunk(target, dataView, chunk);
            var texture = {};
            // var loader = new THREE.TextureLoader(this.manager);
            // loader.setPath(path);
            while (next !== 0) {
                switch (next) {
                    case  MAT_MAPNAME :
                        var name = readString(target, dataView, 128);
                        texture = RedBitmapTexture(target['redGL'], path + name);
                        console.log('      File: ' + path + name);
                        break;
                    case  MAT_MAP_UOFFSET :
                        if (!texture.offset) texture.offset = {};
                        texture.offset.x = readFloat(target, dataView);
                        console.log('      OffsetX: ' + texture.offset.x);
                        break;
                    case  MAT_MAP_VOFFSET :
                        if (!texture.offset) texture.offset = {};
                        texture.offset.y = readFloat(target, dataView);
                        console.log('      OffsetY: ' + texture.offset.y);
                        break;
                    case  MAT_MAP_USCALE :
                        if (!texture.repeat) texture.repeat = {};
                        texture.repeat.x = readFloat(target, dataView);
                        console.log('      RepeatX: ' + texture.repeat.x);
                        break;
                    case  MAT_MAP_VSCALE :
                        if (!texture.repeat) texture.repeat = {};
                        texture.repeat.y = readFloat(target, dataView);
                        console.log('      RepeatY: ' + texture.repeat.y);
                        break;
                    default :
                        console.log('      Unknown map chunk: ' + next.toString(16));
                        break;
                }
                next = nextChunk(target, dataView, chunk);
            }
            endChunk(target, chunk);
            return texture;
        }
        readMaterialEntry = function (target, dataView, path) {
            var chunk = readChunk(target, dataView);
            var next = nextChunk(target, dataView, chunk);
            var materialInfo = {};
            while (next !== 0) {
                switch (next) {
                    case MAT_NAME :
                        materialInfo['name'] = readString(target, dataView, 64);
                        console.log('   Name: ' + materialInfo['name']);
                        break;
                    case MAT_WIRE :
                        console.log('   Wireframe');
                        materialInfo['wireframe'] = true;
                        break;
                    case MAT_WIRE_SIZE :
                        var value = readByte(target, dataView);
                        // 와이어프레임넓이는 이제 사용하지않음으로 버림
                        // materialInfo['wireframe']Linewidth = value;
                        console.log('   Wireframe Thickness: ' + value);
                        break;
                    case MAT_TWO_SIDE :
                        //TODO: 메쉬에 재질 적용할때 메쉬에 주입되어야함
                        // materialInfo.side = THREE.DoubleSide;
                        console.log('   DoubleSided');
                        break;
                    case MAT_ADDITIVE :
                        console.log('   Additive Blending');
                        //TODO: 메쉬에 재질 적용할때 메쉬에 주입되어야함
                        // materialInfo.blending = THREE.AdditiveBlending;
                        break;
                    case MAT_DIFFUSE :
                        console.log('   Diffuse Color');
                        materialInfo['color'] = readColor(target, dataView);
                        break;
                    case MAT_SPECULAR :
                        console.log('   Specular Color');
                        // materialInfo['specularColor'] = readColor(target, dataView);
                        break;
                    case MAT_AMBIENT :
                        console.log('   Ambient color');
                        // materialInfo['color'] = readColor(target, dataView);
                        break;
                    case MAT_SHININESS :
                        var shininess = readWord(target, dataView);
                        materialInfo['shininess'] = shininess;
                        console.log('   Shininess : ' + shininess);
                        break;
                    case MAT_TEXMAP :
                        console.log('   ColorMap');
                        console.log(target, dataView)
                        resetPosition(target, dataView);
                        materialInfo['diffuseTexture'] = readMap(target, dataView, path);
                        break;
                    case MAT_BUMPMAP :
                        console.log('   BumpMap');
                        resetPosition(target, dataView);
                        materialInfo['normalTexture'] = readMap(target, dataView, path);
                        break;
                    case MAT_OPACMAP :
                        console.log('   OpacityMap');
                        resetPosition(target, dataView);
                        // materialInfo['alphaMapTexture'] = readMap(target,data, path);
                        break;
                    case MAT_SPECMAP :
                        console.log('   SpecularMap');
                        resetPosition(target, dataView);
                        materialInfo['specularTexture'] = readMap(target, dataView, path);
                        break;
                    default :
                        console.log('   Unknown materialInfo chunk: ' + next.toString(16));
                        break;
                }
                next = nextChunk(target, dataView, chunk);
            }
            // 재질 판단
            // TODO: RedEnvironmentMaterial 파싱추가해야됨
            // 회사에 3D맥스를 깔고싶구나 -_-;;
            var resultMaterial
            if (materialInfo['diffuseTexture']) {
                if ('shininess' in materialInfo) {
                    resultMaterial = RedStandardMaterial(target['redGL'], materialInfo['diffuseTexture'])
                    resultMaterial['normalTexture'] = materialInfo['normalTexture']
                    resultMaterial['specularTexture'] = materialInfo['specularTexture']
                } else resultMaterial = RedBitmapTexture(target['redGL'], materialInfo['diffuseTexture'])
            } else {
                if (materialInfo['normalTexture'] || materialInfo['specularTexture']) resultMaterial = RedColorPhongTextureMaterial(target['redGL'])
                else {
                    if ('shininess' in materialInfo) resultMaterial = RedColorPhongMaterial(target['redGL'])
                    else RedColorMaterial(target['redGL'])
                }
                resultMaterial['color'] = materialInfo['color']
            }
            endChunk(target, chunk);
            console.log('파싱정보', materialInfo)
            resultMaterial['shininess'] = materialInfo['shininess']
            resultMaterial['name'] = materialInfo['name']
            target.materials[materialInfo['name']] = resultMaterial;
        }
        readMeshData = function (target, dataView, path) {
            var chunk = readChunk(target, dataView);
            var next = nextChunk(target, dataView, chunk);
            while (next !== 0) {
                switch (next) {
                    case MESH_VERSION :
                        var version = +readSize(target, dataView);
                        console.log('Mesh Version: ' + version);
                        break;
                    case MASTER_SCALE :
                        var scale = readFloat(target, dataView);
                        console.log('Master scale: ' + scale);
                        target['resultMesh']['scaleX'] = scale
                        target['resultMesh']['scaleY'] = scale
                        target['resultMesh']['scaleZ'] = scale
                        break;
                    case NAMED_OBJECT :
                        console.log('Named Object');
                        resetPosition(target, dataView);
                        readNamedObject(target, dataView);
                        break;
                    case MAT_ENTRY :
                        console.log('Material');
                        resetPosition(target, dataView);
                        readMaterialEntry(target, dataView, path);
                        break;
                    default :
                        console.log('Unknown MDATA chunk: ' + next.toString(16));
                        break;
                }
                next = nextChunk(target, dataView, chunk);
            }
        }
        readMaterialGroup = function (target, dataView) {
            var chunk = readChunk(target, dataView);
            var name = readString(target, dataView, 64);
            var numFaces = readWord(target, dataView);
            console.log('         Name: ' + name);
            console.log('         Faces: ' + numFaces);
            var index = [];
            for (var i = 0; i < numFaces; ++i) index.push(readWord(target, dataView));
            return {
                name: name,
                index: index
            };
        }
        readFaceArray = function (target, dataView, mesh) {
            var chunk = readChunk(target, dataView);
            var faces = readWord(target, dataView);
            console.log('   Faces: ' + faces);
            var index = [];
            for (var i = 0; i < faces; ++i) {
                index.push(readWord(target, dataView), readWord(target, dataView), readWord(target, dataView));
                var visibility = readWord(target, dataView);
            }
            // mesh.geometry.setIndex( index );
            //The rest of the FACE_ARRAY chunk is subchunks
            while (target['position'] < chunk['end']) {
                var chunk = readChunk(target, dataView);
                if (chunk['id'] === MSH_MAT_GROUP) {
                    console.log('      Material Group');
                    resetPosition(target, dataView);
                    var tGroup = readMaterialGroup(target, dataView);
                    console.log(tGroup)
                    var material = target.materials[tGroup['name']];
                    if (material !== undefined) {
                        mesh['material'] = material;
                        if (material['name'] === '') material['name'] = mesh['name'];
                    }
                } else console.log('      Unknown face array chunk: ' + chunk.toString(16));
                endChunk(target, chunk);
            }
            endChunk(target, chunk);
            return index
        }
        readMesh = function (target, dataView) {
            var chunk = readChunk(target, dataView);
            var next = nextChunk(target, dataView, chunk);
            var uvs = [];
            var indices;
            var mesh = RedMesh(target['redGL'])
            var i, len;
            while (next !== 0) {
                switch (next) {
                    case POINT_ARRAY :
                        var points = readWord(target, dataView);
                        console.log('   Vertex: ' + points);
                        //BufferGeometry
                        var vertices = [];
                        for (i = 0; i < points; i++) {
                            vertices.push(
                                readFloat(target, dataView),
                                readFloat(target, dataView),
                                readFloat(target, dataView)
                            );
                        }
                        break
                    case FACE_ARRAY :
                        resetPosition(target, dataView);
                        indices = readFaceArray(target, dataView, mesh);
                        break
                    case TEX_VERTS :
                        var texels = readWord(target, dataView);
                        console.log('   UV: ' + texels);
                        //BufferGeometry
                        var uvs = [];
                        for (i = 0; i < texels; i++) {
                            uvs.push(readFloat(target, dataView));
                            uvs.push(1-readFloat(target, dataView));
                        }
                        break
                    case MESH_MATRIX :
                        console.log('   Tranformation Matrix (TODO)');
                        var values = [];
                        for (i = 0; i < 12; i++) values[i] = readFloat(target, dataView);
                        var matrix = mat4.create()
                        //X Line
                        matrix[0] = values[0];
                        matrix[1] = values[6];
                        matrix[2] = values[3];
                        matrix[3] = values[9];
                        //Y Line
                        matrix[4] = values[2];
                        matrix[5] = values[8];
                        matrix[6] = values[5];
                        matrix[7] = values[11];
                        //Z Line
                        matrix[8] = values[1];
                        matrix[9] = values[7];
                        matrix[10] = values[4];
                        matrix[11] = values[10];
                        //W Line
                        matrix[12] = 0;
                        matrix[13] = 0;
                        matrix[14] = 0;
                        matrix[15] = 1;
                        // matrix.transpose();
                        // var inverse = mat4.craete();
                        // inverse.getInverse(matrix, true);
                        // geometry.applyMatrix(inverse);
                        // matrix.decompose(mesh['position'], mesh.quaternion, mesh.scale);
                        break;
                    default :
                        console.log('   Unknown mesh chunk: ' + next.toString(16));
                        break
                }
                next = nextChunk(target, dataView, chunk);
            }
            endChunk(target, chunk);
            // geometry.computeVertexNormals();
            var interleaveBuffer;
            var indexBuffer;
            var normalData = RedGLUtil.calculateNormals(vertices, indices)
            console.log('vertices', vertices)
            console.log('normalData', normalData)
            var interleaveData = []
            i = 0, len = vertices.length / 3
            for (i; i < len; i++) {
                interleaveData.push(vertices[i * 3 + 0], vertices[i * 3 + 1], vertices[i * 3 + 2])
                interleaveData.push(normalData[i * 3 + 0], normalData[i * 3 + 1], normalData[i * 3 + 2])
                if (uvs.length) interleaveData.push(uvs[i * 2 + 0], uvs[i * 2 + 1])
            }
            var interleaveInfo = []
            interleaveInfo.push(RedInterleaveInfo('aVertexPosition', 3))
            interleaveInfo.push(RedInterleaveInfo('aVertexNormal', 3))
            if (uvs.length) interleaveInfo.push(RedInterleaveInfo('aTexcoord', 2))
            interleaveBuffer = RedBuffer(target['redGL'], 'testRed3DS', RedBuffer.ARRAY_BUFFER, new Float32Array(interleaveData), interleaveInfo)
            indexBuffer = RedBuffer(target['redGL'], 'testRed3DS', RedBuffer.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices))
            var tGeo = RedGeometry(interleaveBuffer, indexBuffer)
            mesh.geometry = tGeo
            mesh['name'] = 'mesh' + RedGL.makeUUID();
            mesh.matrix = matrix
            return mesh;
        }
        readNamedObject = function (target, dataView) {
            var chunk = readChunk(target, dataView);
            var name = readString(target, dataView, 64);
            chunk['cur'] = target['position'];
            var next = nextChunk(target, dataView, chunk);
            var tMesh;
            while (next !== 0) {
                if (next === N_TRI_OBJECT) {
                    resetPosition(target, dataView);
                    tMesh = readMesh(target, dataView);
                    tMesh['name'] = name;
                    target['meshs'].push(tMesh)
                    console.log('readNamedObject', name)
                } else console.log('Unknown named object chunk: ' + next.toString(16));
                next = nextChunk(target, dataView, chunk);
            }
            endChunk(target, chunk);
        }
        readFile = function (target, arrayBuffer, path) {
            var dataView = new DataView(arrayBuffer);
            console.log('dataView', dataView)
            var chunk = readChunk(target, dataView);
            if (chunk['id'] === MLIBMAGIC || chunk['id'] === CMAGIC || chunk['id'] === M3DMAGIC) {
                var next = nextChunk(target, dataView, chunk);
                while (next !== 0) {
                    switch (next) {
                        case M3D_VERSION :
                            console.log('3DS file version: ' + readSize(target, dataView));
                            break;
                        case MDATA :
                            resetPosition(target, dataView);
                            readMeshData(target, dataView, path);
                            break;
                        default :
                            console.log('Unknown main chunk: ' + next.toString(16));
                            break;
                    }
                    next = nextChunk(target, dataView, chunk);
                }
            }
            console.log('Parsed');
        };
        return function (tRed3DSLoader, redGL, rawData) {
            console.log('파싱시작', tRed3DSLoader['path'] + tRed3DSLoader['fileName']);
            // console.log('rawData', rawData);
            readFile(tRed3DSLoader, rawData, tRed3DSLoader['path'])
            console.log(tRed3DSLoader)
            tRed3DSLoader.meshs.forEach(function (v) {
                tRed3DSLoader.resultMesh.addChild(v)
            })
            return {
                fileName: tRed3DSLoader['fileName'],
                path: tRed3DSLoader['path'],
                resultMesh: tRed3DSLoader['resultMesh']
            }
        }
    })();
    Object.freeze(Red3DSLoader);
})
();
"use strict";
var RedDAELoader;
(function () {
    var parser, parseMaterial, parseMesh, parseAnimation;
    var makePointList;
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedDAELoader`,
		 description : `
			 DAE 로더.
			 애니메이션은 지원하지 않음(GLTF만 지원)
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 path : [
				 {type:'String'},
				 '파일이 위치한 경로'
			 ],
			 fileName : [
				 {type:'String'},
				 '파일이름'
			 ],
			 callback : [
				 {type:'Function'},
				 '로딩완료시 실행될 콜백'
			 ]
		 },
	     demo : '../example/loader/dae/RedDAELoader.html',
		 example : `
		    // DAE 로딩
            RedDAELoader(
                RedGL Instance, // redGL
                assetPath + 'dae/', // assetRootPath
                'test1.dae', // fileName
                function (v) { // callback
                    console.log('로딩성공', v);
                    (RedScene Instance).addChild(v['resultMesh']);
                }
            )
		 `,
		 return : 'void'
	 }
     :DOC*/

    RedDAELoader = function (redGL, path, fileName, callback) {
        if ((!(this instanceof RedDAELoader))) return new RedDAELoader(redGL, path, fileName, callback)
        console.log('~~~~~~~~~~~')
        var self = this;
        var request = new XMLHttpRequest();
        request.open("GET", path + fileName, true);
        request.setRequestHeader("Content-Type", "application/xml; charset=UTF-8")
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status === 200) {
                console.log(request)
                console.log(request['responseText'])
                var t0 = new DOMParser();
                self['result'] = parser(self, redGL, t0.parseFromString(request['responseText'], "text/xml"))
                if (callback) {
                    console.log('모델 파싱 종료');
                    callback(self['result'])
                }
            } else {
                console.log(request)
            }
        }
        request.send();
        this['path'] = path;
        this['fileName'] = fileName;
        this['callback'] = callback;
        this['resultMesh'] = RedMesh(redGL)
        this['resultMesh']['name'] = 'instanceOfRedDAELoader_' + RedGL.makeUUID()
        this['result'] = null;
    }
    makePointList = function (parseSourceDatas) {
        var i, len;
        var t0;
        var tPosition, tNormal, tTexcoord;
        var pointList = [];
        var normalPointList = [];
        var uvPointList = [];
        // 구성을 찾고..
        t0 = parseSourceDatas[0].querySelector('float_array')
        tPosition = t0 ? t0.textContent.split(' ').map(Number) : null
        t0 = parseSourceDatas[1].querySelector('float_array')
        tNormal = t0 ? t0.textContent.split(' ').map(Number) : null
        t0 = parseSourceDatas[2].querySelector('float_array')
        tTexcoord = t0 ? t0.textContent.split(' ').map(Number) : null
        console.log('tPosition', tPosition)
        console.log('tNormal', tNormal)
        console.log('tTexcoord', tTexcoord)
        // 포인트를 만든다
        i = 0, len = tPosition.length / 3
        for (i; i < len; i++) {
            pointList.push(
                [
                    tPosition[i * 3 + 0],
                    tPosition[i * 3 + 1],
                    tPosition[i * 3 + 2]
                ]
            )
        }
        if (tNormal) {
            i = 0, len = tNormal.length / 3
            for (i; i < len; i++) {
                normalPointList.push(
                    [
                        tNormal[i * 3 + 0],
                        tNormal[i * 3 + 1],
                        tNormal[i * 3 + 2]
                    ]
                )
            }
        }
        if (tTexcoord) {
            i = 0, len = tTexcoord.length / 2
            for (i; i < len; i++) {
                uvPointList.push([
                    tTexcoord[i * 2 + 0],
                    1-tTexcoord[i * 2 + 1]
                ])
            }
            console.log('pointList', pointList)
            console.log('normalPointList', normalPointList)
            console.log('uvPointList', uvPointList)
        }
        return {
            pointList: pointList,
            normalPointList: normalPointList,
            uvPointList: uvPointList
        }
    }
    parseMaterial = (function () {
        var parseLibrary_images;
        var parseLibrary_effects;
        var parseLibrary_materials;
        parseLibrary_images = function (redGL, tRedDAELoader, rawData) {
            var map = {}
            var images = rawData.querySelectorAll('library_images image')
            images.forEach(function (v) {
                map[v.getAttribute('id')] = RedBitmapTexture(redGL, tRedDAELoader['path'] + v.querySelector('init_from').textContent)
            })
            return map
        }
        parseLibrary_effects = function (rawData, textureMap) {
            var map = {}
            var effects = rawData.querySelectorAll('library_effects effect')
            effects.forEach(function (v) {
                if (v.querySelector('newparam init_from')) {
                    map[v.getAttribute('id')] = {
                        texture: textureMap[v.querySelector('newparam init_from').textContent]
                    }
                }
            })
            return map
        }
        parseLibrary_materials = function (rawData, effectMap) {
            var map = {}
            var materials = rawData.querySelectorAll('library_materials material')
            materials.forEach(function (v) {
                console.log(v.querySelector('instance_effect').getAttribute('url').replace('#', ''))
                map[v.getAttribute('id')] = {
                    effect: effectMap[v.querySelector('instance_effect').getAttribute('url').replace('#', '')]
                }
            })
            return map
        }
        return function (redGL, tRedDAELoader, rawData) {
            var textureMap = parseLibrary_images(redGL, tRedDAELoader, rawData)
            var effectMap = parseLibrary_effects(rawData, textureMap)
            var materialMap = parseLibrary_materials(rawData, effectMap)
            console.log('텍스쳐로 만들어야 할 녀석들', textureMap)
            console.log('이펙트', effectMap)
            console.log('재직', materialMap)
            return {
                textureMap: textureMap,
                effectMap: effectMap,
                materialMap: materialMap
            }
        }
    })();
    parseMesh = function (tRedDAELoader, redGL, rawData) {
        var meshList = rawData.querySelectorAll('library_geometries geometry mesh')
        meshList.forEach(function (mesh) {
            var sourceList
            var pointInfo;
            var materialInfo;
            sourceList = mesh.querySelectorAll('source')
            // 포인트 리스트 만들기
            pointInfo = makePointList(sourceList)
            console.log('pointInfo', pointInfo)
            // 재질 관련 정보를 해석한다.
            materialInfo = parseMaterial(redGL, tRedDAELoader, rawData)
            // 폴리곤 해석
            var sourceNum = mesh.querySelectorAll('source').length;
            mesh.querySelectorAll('polylist').forEach(function (pData, pDataIndex) {
                var tInterleaveBufferData = []
                var tPolylistIndices = pData.querySelector('p').textContent.split(' ')
                var t_indexDataIndex = []
                var t_normalDataindex = []
                var t_coordDataIndex = []
                var tResultIndexData = []
                var tInterleaveBuffer;
                var tIndexBuffer;
                var tResultMesh;
                tPolylistIndices.forEach(function (v, index) {
                    if (index % sourceNum == 0) t_indexDataIndex.push(+v)
                    else if (index % sourceNum == 1) t_normalDataindex.push(+v)
                    else if (index % sourceNum === 2) t_coordDataIndex.push(+v)
                })
                // 버퍼데이터생성
                var idxMap = {}
                t_indexDataIndex.forEach(function (v, index) {
                    tInterleaveBufferData[v * 8 + 0] = pointInfo['pointList'][v][0]
                    tInterleaveBufferData[v * 8 + 1] = pointInfo['pointList'][v][1]
                    tInterleaveBufferData[v * 8 + 2] = pointInfo['pointList'][v][2]
                    // 해당인덱스에 해당하는 인터리브 버퍼상의 위치
                    if (!idxMap[v]) idxMap[v] = []
                    idxMap[v].push(index)
                    tInterleaveBufferData[v * 8 + 3] = pointInfo['normalPointList'][t_normalDataindex[index]][0]
                    tInterleaveBufferData[v * 8 + 4] = pointInfo['normalPointList'][t_normalDataindex[index]][1]
                    tInterleaveBufferData[v * 8 + 5] = pointInfo['normalPointList'][t_normalDataindex[index]][2]
                    tInterleaveBufferData[v * 8 + 6] = pointInfo['uvPointList'][t_coordDataIndex[index]][0]
                    tInterleaveBufferData[v * 8 + 7] = pointInfo['uvPointList'][t_coordDataIndex[index]][1]
                    tResultIndexData.push(v)
                })
                // 버퍼생성
                tInterleaveBuffer = RedBuffer(
                    redGL,
                    'daeInterleaveBuffer' + RedGL.makeUUID(),
                    RedBuffer.ARRAY_BUFFER,
                    new Float32Array(tInterleaveBufferData),
                    [
                        RedInterleaveInfo('aVertexPosition', 3),
                        RedInterleaveInfo('aVertexNormal', 3),
                        RedInterleaveInfo('aTexcoord', 2)
                    ]
                )
                tIndexBuffer = RedBuffer(
                    redGL,
                    'daeIndexData' + RedGL.makeUUID(),
                    RedBuffer.ELEMENT_ARRAY_BUFFER,
                    new Uint16Array(tResultIndexData)
                )
                tResultMesh = RedMesh(redGL)
                tResultMesh['geometry'] = RedGeometry(tInterleaveBuffer, tIndexBuffer)
                //TODO: 재질 결정 로직 들어가야함
                console.log('그래서 재질은?', pData.getAttribute('material'))
                if (materialInfo['materialMap'][pData.getAttribute('material')]['effect']) {
                    var tTexture = materialInfo['materialMap'][pData.getAttribute('material')]['effect']['texture']
                    tResultMesh['material'] = RedStandardMaterial(redGL, tTexture)
                } else tResultMesh['material'] = RedColorPhongMaterial(redGL)
                console.log('그래서 텍스쳐는?', tTexture)
                // 대상 메쉬를 결과메쉬에 추가
                tRedDAELoader['resultMesh'].addChild(tResultMesh)
            })
        })
    }
    parser = function (tRedDAELoader, redGL, rawData) {
        console.log('파싱시작', tRedDAELoader['path'] + tRedDAELoader['fileName'])
        parseMesh(tRedDAELoader, redGL, rawData)
        return {
            fileName: tRedDAELoader['fileName'],
            path: tRedDAELoader['path'],
            resultMesh: tRedDAELoader['resultMesh']
        }
    }
    Object.freeze(RedDAELoader)
})()
"use strict";
var RedGLTFLoader;
(function () {
    var parser
    var WEBGL_COMPONENT_TYPES = {
        5120: Int8Array,
        5121: Uint8Array,
        5122: Int16Array,
        5123: Uint16Array,
        5125: Uint32Array,
        5126: Float32Array
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedGLTFLoader`,
		 description : `
			 GLTF 로더.
			 애니메이션 지원함.
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 path : [
				 {type:'String'},
				 '파일이 위치한 경로'
			 ],
			 fileName : [
				 {type:'String'},
				 '파일이름'
			 ],
			 callback : [
				 {type:'Function'},
				 '로딩완료시 실행될 콜백'
			 ]
		 },
		 example : `
		    // GLTF 로딩
            RedGLTFLoader(
                RedGL Instance, // redGL
                assetPath + 'glTF/basic/', // assetRootPath
                'DamagedHelmet.gltf', // fileName
                function (v) { // callBack
                    tScene.addChild(v['resultMesh'])
                },
                RedBitmapCubeTexture( // environmentTexture
                    RedGL Instance,
                    [
                        assetPath + 'cubemap/posx.png',
                        assetPath + 'cubemap/negx.png',
                        assetPath + 'cubemap/posy.png',
                        assetPath + 'cubemap/negy.png',
                        assetPath + 'cubemap/posz.png',
                        assetPath + 'cubemap/negz.png'
                    ]
                )
            );
		 `,
		 demo : '../example/loader/gltf/RedGLTFLoader.html',
		 return : 'void'
	 }
     :DOC*/

    var fileLoader = function (src, type, onLoader, onError) {
        var request = new XMLHttpRequest();
        request.open("GET", src, true);
        // request.overrideMimeType('model/gltf+json')
        // request.setRequestHeader("Content-Type", (type ? type : "application/xml; ") + 'charset=UTF-8')
        request.onreadystatechange = function (e) {
            if (request.readyState == 4 && request.status === 200) {
                console.log(request)
                onLoader(request)
            } else {
                onError(request, e)
            }
        }
        request.send();
    }
    var arrayBufferLoader = function (src, onLoader, onError) {
        var request = new XMLHttpRequest();
        request.open("GET", src, true);
        request.overrideMimeType('application/octet-stream')
        request.responseType = "arraybuffer";
        request.onreadystatechange = function (e) {
            if (request.readyState == 4 && request.status === 200) {
                console.log(request)
                onLoader(request)
            } else {
                onError(request, e)
            }
        }
        request.send();
    }
    RedGLTFLoader = function (redGL, path, fileName, callback, environmentTexture, parsingOption) {
        if ((!(this instanceof RedGLTFLoader))) return new RedGLTFLoader(redGL, path, fileName, callback, environmentTexture, parsingOption)
        console.log('~~~~~~~~~~~')
        var self = this;
        if (fileName.indexOf('.glb') > -1) {
            /////////////////////////
            var BINPACKER_HEADER_MAGIC = 'BINP';
            var BINPACKER_HEADER_LENGTH = 12;
            var BINPACKER_CHUNK_TYPE_JSON = 0x4e4f534a;
            var BINPACKER_CHUNK_TYPE_BINARY = 0x004e4942;
            var convertUint8ArrayToString;
            convertUint8ArrayToString = function (array) {
                var str = '';
                array.map(function (item) {
                    str += String.fromCharCode(item)
                });
                return str;
            };
            /////////////////////////
            arrayBufferLoader(
                path + fileName,
                function (request) {
                    console.log(request['response'])

                    var content = null;
                    var contentArray = null;
                    var body = null;
                    var byteOffset = null;

                    var chunkIndex = 0;
                    var chunkLength = 0;
                    var chunkType = null;

                    var headerView = new DataView(request['response'], BINPACKER_HEADER_LENGTH);
                    var header = {
                        magic: convertUint8ArrayToString(new Uint8Array(request['response'], 0, 4)),
                        version: headerView.getUint32(4, true),
                        length: headerView.getUint32(8, true)
                    };
                    console.log(headerView)
                    console.log(header)

                    var chunkView = new DataView(request['response'], BINPACKER_HEADER_LENGTH);

                    while (chunkIndex < chunkView.byteLength) {
                        chunkLength = chunkView.getUint32(chunkIndex, true);
                        chunkIndex += 4;

                        chunkType = chunkView.getUint32(chunkIndex, true);
                        chunkIndex += 4;

                        if (chunkType === BINPACKER_CHUNK_TYPE_JSON) {
                            contentArray = new Uint8Array(
                                request['response'],
                                BINPACKER_HEADER_LENGTH + chunkIndex,
                                chunkLength
                            );
                            content = convertUint8ArrayToString(contentArray);
                        } else if (chunkType === BINPACKER_CHUNK_TYPE_BINARY) {
                            byteOffset = BINPACKER_HEADER_LENGTH + chunkIndex;
                            body = request['response'].slice(byteOffset, byteOffset + chunkLength);
                        }

                        chunkIndex += chunkLength;
                    }

                    if (content === null) {
                        throw new Error('JSON content not found');
                    }

                    var jsonChunk = JSON.parse(content);
                    var binaryChunk = body;
                    if (jsonChunk['images']) {
                        jsonChunk['images'].forEach(function (v) {
                            console.log(v)
                            if (v['mimeType'] === 'image/png' || v['mimeType'] === 'image/jpeg' || v['mimeType'] === 'image/gif') {
                                console.log(binaryChunk)
                                var tS, tE;
                                tS = jsonChunk['bufferViews'][v['bufferView']]['byteOffset'] || 0
                                var tt = binaryChunk.slice(
                                    tS,
                                    tS + jsonChunk['bufferViews'][v['bufferView']]['byteLength']
                                )

                                var test = new Blob([new Uint8Array(tt)], {
                                    type: v['mimeType']
                                });
                                v['uri'] = URL.createObjectURL(test)


                            }
                        })
                    }

                    console.log(jsonChunk)
                    console.log(binaryChunk)
                    parser(self, redGL, jsonChunk, function () {
                        if (callback) {
                            console.log('모델 파싱 종료');
                            callback(self)
                        }
                    }, binaryChunk)
                },
                function (request, error) {
                    console.log(request, error)
                }
            )
        } else {
            fileLoader(
                path + fileName,
                null,
                function (request) {

                    parser(self, redGL, JSON.parse(request['response']), function () {
                        if (callback) {
                            console.log('모델 파싱 종료');
                            callback(self)
                        }
                    })
                },
                function (request, error) {
                    console.log(request, error)
                }
            )
        }

        this['redGL'] = redGL;

        this['path'] = path;
        this['fileName'] = fileName;
        this['resultMesh'] = RedMesh(redGL)
        this['resultMesh']['name'] = 'instanceOfRedGLTFLoader_' + RedGL.makeUUID()
        this['parsingResult'] = {
            groups: [],
            materials: [],
            uris: {
                buffers: []
            },
            textures: {},
            cameras: [],
            animations: []
        }
        this['parsingOption'] = parsingOption
        this['environmentTexture'] = environmentTexture || null
        var _currentAnimationInfo = null
        this['stopAnimation'] = function () {
            console.log('_currentAnimationInfo', _currentAnimationInfo, loopList.indexOf(_currentAnimationInfo))
            if (loopList.indexOf(_currentAnimationInfo) > -1) {
                loopList.splice(loopList.indexOf(_currentAnimationInfo), 1)
            }
            console.log('loopList', loopList)
        }
        this['playAnimation'] = function (animationData) {
            loopList.push(
                _currentAnimationInfo = {
                    startTime: performance.now(),
                    targetAnimationData: animationData
                }
            )
            // console.log('loopList', loopList)
        }
        console.log(this)
    };
    RedDefinePropertyInfo.definePrototype('RedGLTFLoader', 'environmentTexture', 'samplerCube', {
        callback: function (v) {
            this['parsingResult']['materials'].forEach(function (v2) {
                if ('environmentTexture' in v2) v2['environmentTexture'] = v
            })
        }
    });
    var loopList = []
    RedGLTFLoader['animationLooper'] = (function () {
        var currentTime, previousTime, nextTime;
        var prevRotation, nextRotation;
        var prevTranslation, nextTranslation;
        var prevScale, nextScale;
        var interpolationValue;
        var targetAnimationData
        return function (time) {
            // console.log('loopList',loopList)

            loopList.forEach(function (v) {
                prevRotation = null
                nextRotation = null
                prevTranslation = null
                nextTranslation = null
                targetAnimationData = v['targetAnimationData']

                targetAnimationData.forEach(function (aniData, stepIndex) {
                    currentTime = ((time - v['startTime']) % (targetAnimationData['maxTime'] * 1000)) / 1000
                    // console.log(currentTime,aniData['minTime'] )
                    var target = aniData['target']
                    var nextIndex, prevIndex
                    prevIndex = aniData['time'].length - 1
                    nextIndex = 0
                    previousTime = aniData['time'][prevIndex]
                    nextTime = aniData['time'][nextIndex]
                    var len = aniData['time'].length
                    var i = 0
                    for (i; i < len; i++) {
                        var tTime = aniData['time'][i]
                        var index = i
                        if (tTime < currentTime) {
                            prevIndex = index
                            previousTime = aniData['time'][prevIndex]
                            if (aniData['time'][prevIndex + 1] == undefined) {
                                nextIndex = 0
                                nextTime = aniData['time'][nextIndex]
                            } else {
                                nextIndex = prevIndex + 1
                                nextTime = aniData['time'][nextIndex]
                            }
                        }
                        if (index == 0 && (currentTime < aniData['time'][i])) {
                            prevIndex = len - 1
                            previousTime = aniData['time'][prevIndex]
                            nextIndex = index
                            nextTime = aniData['time'][nextIndex]
                            currentTime = tTime
                            break
                        }
                        if (index == len - 1 && (currentTime > tTime)) {
                            prevIndex = 0
                            previousTime = aniData['time'][prevIndex]
                            nextIndex = len - 1
                            nextTime = aniData['time'][nextIndex]
                            currentTime = tTime
                            break
                        }
                    }

                    if (aniData['interpolation'] == 'CUBICSPLINE') {
                        interpolationValue = (currentTime - previousTime) / (nextTime - previousTime)
                        var interpolationValue = nextTime - previousTime;
                        if (interpolationValue.toString() == 'NaN') interpolationValue = 0
                        var p = (currentTime - previousTime) / interpolationValue;
                        if (p.toString() == 'NaN') p = 0
                        var pp = p * p;
                        var ppp = pp * p;

                        var s2 = -2 * ppp + 3 * pp;
                        var s3 = ppp - pp;
                        var s0 = 1 - s2;
                        var s1 = s3 - pp + p;

                        if (target) {
                            var startV, startOut, endV, endIn
                            if (aniData['key'] == 'translation') {
                                nextTranslation = [
                                    aniData['data'][prevIndex * 9 + 3],
                                    aniData['data'][prevIndex * 9 + 4],
                                    aniData['data'][prevIndex * 9 + 5]
                                ]
                                prevTranslation = [
                                    aniData['data'][nextIndex * 9 + 3],
                                    aniData['data'][nextIndex * 9 + 4],
                                    aniData['data'][nextIndex * 9 + 5]
                                ]
                                var prevTranslationOut = [
                                    aniData['data'][prevIndex * 9 + 6],
                                    aniData['data'][prevIndex * 9 + 7],
                                    aniData['data'][prevIndex * 9 + 8]
                                ]
                                var nextTranslationIn = [
                                    aniData['data'][nextIndex * 9 + 0],
                                    aniData['data'][nextIndex * 9 + 1],
                                    aniData['data'][nextIndex * 9 + 2]
                                ]
                                startV = prevTranslation[0];
                                if (prevIndex != len - 1) {

                                    startOut = prevTranslationOut[0] * interpolationValue;
                                    endV = nextTranslation[0];
                                    endIn = nextTranslationIn[0] * interpolationValue;
                                    target.x = s0 * startV + s1 * startOut + s2 * endV + s3 * endIn;
                                    startV = prevTranslation[1];
                                    startOut = prevTranslationOut[1] * interpolationValue;
                                    endV = nextTranslation[1];
                                    endIn = nextTranslationIn[1] * interpolationValue;
                                    target.y = s0 * startV + s1 * startOut + s2 * endV + s3 * endIn;
                                    startV = prevTranslation[2];
                                    startOut = prevTranslationOut[2] * interpolationValue;
                                    endV = nextTranslation[2];
                                    endIn = nextTranslationIn[2] * interpolationValue;
                                    target.z = s0 * startV + s1 * startOut + s2 * endV + s3 * endIn;
                                }
                                // console.log(target.y)
                            }
                            if (aniData['key'] == 'rotation') {
                                // var rotationMTX = mat4.create()
                                // var tRotation = [0, 0, 0]
                                var tQuaternion = [
                                    aniData['data'][nextIndex * 12 + 4],
                                    aniData['data'][nextIndex * 12 + 5],
                                    aniData['data'][nextIndex * 12 + 6],
                                    aniData['data'][nextIndex * 12 + 7]
                                ]
                                nextRotation = tQuaternion

                                var tQuaternion = [
                                    aniData['data'][prevIndex * 12 + 4],
                                    aniData['data'][prevIndex * 12 + 5],
                                    aniData['data'][prevIndex * 12 + 6],
                                    aniData['data'][prevIndex * 12 + 7]
                                ]
                                prevRotation = tQuaternion

                                var prevRotationOut = [
                                    aniData['data'][prevIndex * 12 + 8],
                                    aniData['data'][prevIndex * 12 + 9],
                                    aniData['data'][prevIndex * 12 + 10],
                                    aniData['data'][prevIndex * 12 + 11]
                                ]
                                var nextRotationIn = [
                                    aniData['data'][nextIndex * 12 + 0],
                                    aniData['data'][nextIndex * 12 + 1],
                                    aniData['data'][nextIndex * 12 + 2],
                                    aniData['data'][nextIndex * 12 + 3]
                                ]
                                quat.normalize(prevRotation, prevRotation)
                                quat.normalize(nextRotation, nextRotation)
                                quat.normalize(prevRotationOut, prevRotationOut)
                                quat.normalize(nextRotationIn, nextRotationIn)
                                var tQuat = []

                                if (prevIndex != len - 1) {
                                    startV = prevRotation[0];
                                    startOut = prevRotationOut[0] * interpolationValue;
                                    endV = nextRotation[0];
                                    endIn = nextRotationIn[0] * interpolationValue;
                                    tQuat[0] = s0 * startV + s1 * startOut + s2 * endV + s3 * endIn;
                                    //
                                    startV = prevRotation[1];
                                    startOut = prevRotationOut[1] * interpolationValue;
                                    endV = nextRotation[1];
                                    endIn = nextRotationIn[1] * interpolationValue;
                                    tQuat[1] = s0 * startV + s1 * startOut + s2 * endV + s3 * endIn;
                                    //
                                    startV = prevRotation[2];
                                    startOut = prevRotationOut[2] * interpolationValue;
                                    endV = nextRotation[2];
                                    endIn = nextRotationIn[2] * interpolationValue;
                                    tQuat[2] = s0 * startV + s1 * startOut + s2 * endV + s3 * endIn;
                                    //
                                    startV = prevRotation[3];
                                    startOut = prevRotationOut[3] * interpolationValue;
                                    endV = nextRotation[3];
                                    endIn = nextRotationIn[3] * interpolationValue;
                                    tQuat[3] = s0 * startV + s1 * startOut + s2 * endV + s3 * endIn;

                                    var rotationMTX = []
                                    var tRotation = [0, 0, 0]
                                    RedGLUtil.quaternionToRotationMat4(tQuat, rotationMTX)
                                    RedGLUtil.mat4ToEuler(rotationMTX, tRotation)
                                    tRotation[0] = -(tRotation[0] * 180 / Math.PI)
                                    tRotation[1] = -(tRotation[1] * 180 / Math.PI)
                                    tRotation[2] = -(tRotation[2] * 180 / Math.PI)
                                    target.rotationX = tRotation[0]
                                    target.rotationY = tRotation[1]
                                    target.rotationZ = tRotation[2]
                                }
                            }
                            if (aniData['key'] == 'scale') {
                                nextScale = [
                                    aniData['data'][prevIndex * 9 + 3],
                                    aniData['data'][prevIndex * 9 + 4],
                                    aniData['data'][prevIndex * 9 + 5]
                                ]
                                prevScale = [
                                    aniData['data'][nextIndex * 9 + 3],
                                    aniData['data'][nextIndex * 9 + 4],
                                    aniData['data'][nextIndex * 9 + 5]
                                ]
                                var prevScaleOut = [
                                    aniData['data'][prevIndex * 9 + 6],
                                    aniData['data'][prevIndex * 9 + 7],
                                    aniData['data'][prevIndex * 9 + 8]
                                ]
                                var nextScaleIn = [
                                    aniData['data'][nextIndex * 9 + 0],
                                    aniData['data'][nextIndex * 9 + 1],
                                    aniData['data'][nextIndex * 9 + 2]
                                ]

                                startV = prevScale[0];
                                if (prevIndex != len - 1) {
                                    startOut = prevScaleOut[0] * interpolationValue;
                                    endV = nextScale[0];
                                    endIn = nextScaleIn[0] * interpolationValue;
                                    target.scaleX = s0 * startV + s1 * startOut + s2 * endV + s3 * endIn;
                                    //
                                    startV = prevScale[1];
                                    startOut = prevScaleOut[1] * interpolationValue;
                                    endV = nextScale[1];
                                    endIn = nextScaleIn[1] * interpolationValue;
                                    target.scaleY = s0 * startV + s1 * startOut + s2 * endV + s3 * endIn;
                                    //
                                    startV = prevScale[2];
                                    startOut = prevScaleOut[2] * interpolationValue;
                                    endV = nextScale[2];
                                    endIn = nextScaleIn[2] * interpolationValue;
                                    target.scaleZ = s0 * startV + s1 * startOut + s2 * endV + s3 * endIn;
                                }
                                ;
                            }
                            if (aniData['key'] == 'weights') {
                                // console.log(aniData)
                                // aniData['targets'].forEach(function (targetMesh) {
                                //     var targetData = targetMesh['geometry']['interleaveBuffer']['data']
                                //     var originData = targetMesh['_morphInfo']['origin']
                                //     targetData.forEach(function (v, index) {
                                //         if (index % targetMesh['geometry']['interleaveBuffer']['stride'] < 3) {
                                //             var prev, next
                                //             prev = originData[index]
                                //             next = originData[index]
                                //             var morphLen = targetMesh['_morphInfo']['list'].length
                                //             targetMesh['_morphInfo']['list'].forEach(function (v, morphIndex) {
                                //                 if (morphIndex % 3 == 1) {
                                //                     prev += aniData['data'][prevIndex * morphLen + morphIndex] * v['interleaveData'][index]
                                //                     next += aniData['data'][nextIndex * morphLen + morphIndex] * v['interleaveData'][index]
                                //                 }
                                //
                                //             })
                                //             targetData[index] = prev + interpolationValue * (next - prev)
                                //         }
                                //     })
                                //     targetMesh['geometry']['interleaveBuffer'].upload(targetData)
                                // })
                                aniData['targets'].forEach(function (targetMesh) {
                                    var targetData = targetMesh['geometry']['interleaveBuffer']['data']
                                    var originData = targetMesh['_morphInfo']['origin']
                                    var stride = targetMesh['geometry']['interleaveBuffer']['stride']
                                    var index = 0;
                                    var LOOP_NUM = targetData.length / stride
                                    var prev, next
                                    var prev1, next1
                                    var prev2, next2
                                    var baseIndex
                                    var morphLen = targetMesh['_morphInfo']['list'].length
                                    var tAniData = aniData['data']
                                    var tMorphList = targetMesh['_morphInfo']['list']
                                    for (index; index < LOOP_NUM; index++) {
                                        baseIndex = index * stride
                                        prev = originData[baseIndex]
                                        next = originData[baseIndex]
                                        prev1 = originData[baseIndex + 1]
                                        next1 = originData[baseIndex + 1]
                                        prev2 = originData[baseIndex + 2]
                                        next2 = originData[baseIndex + 2]

                                        var morphIndex = morphLen
                                        var prevAniData;
                                        var nextAniData;
                                        var morphInterleaveData;
                                        while (morphIndex--) {
                                            if (morphIndex % 3 == 1) {
                                                prevAniData = tAniData[prevIndex * morphLen + morphIndex]
                                                nextAniData = tAniData[nextIndex * morphLen + morphIndex]
                                                morphInterleaveData = tMorphList[morphIndex]['interleaveData']
                                                prev += prevAniData * morphInterleaveData[baseIndex]
                                                next += nextAniData * morphInterleaveData[baseIndex]
                                                prev1 += prevAniData * morphInterleaveData[baseIndex + 1]
                                                next1 += nextAniData * morphInterleaveData[baseIndex + 1]
                                                prev2 += prevAniData * morphInterleaveData[baseIndex + 2]
                                                next2 += nextAniData * morphInterleaveData[baseIndex + 2]
                                            }
                                        }
                                        targetData[baseIndex] = prev + interpolationValue * (next - prev)
                                        targetData[baseIndex + 1] = prev1 + interpolationValue * (next1 - prev1)
                                        targetData[baseIndex + 2] = prev2 + interpolationValue * (next2 - prev2)
                                    }
                                    targetMesh['geometry']['interleaveBuffer'].upload(targetData)
                                })
                            }
                        }
                        return
                    } else {
                        if (aniData['interpolation'] == 'STEP') {
                            interpolationValue = 0
                        } else interpolationValue = (currentTime - previousTime) / (nextTime - previousTime)
                        if (interpolationValue.toString() == 'NaN') interpolationValue = 0
                        if (aniData['key'] == 'rotation') {
                            // var rotationMTX = mat4.create()
                            // var tRotation = [0, 0, 0]
                            var tQuaternion = [
                                aniData['data'][nextIndex * 4],
                                aniData['data'][nextIndex * 4 + 1],
                                aniData['data'][nextIndex * 4 + 2],
                                aniData['data'][nextIndex * 4 + 3]
                            ]
                            // RedGLUtil.quaternionToRotationMat4(tQuaternion, rotationMTX)
                            // RedGLUtil.mat4ToEuler(rotationMTX, tRotation)
                            // tRotation[0] = -(tRotation[0] * 180 / Math.PI)
                            // tRotation[1] = -(tRotation[1] * 180 / Math.PI)
                            // tRotation[2] = -(tRotation[2] * 180 / Math.PI)
                            nextRotation = tQuaternion
                            //
                            // var rotationMTX = mat4.create()
                            // var tRotation = [0, 0, 0]
                            var tQuaternion = [
                                aniData['data'][prevIndex * 4],
                                aniData['data'][prevIndex * 4 + 1],
                                aniData['data'][prevIndex * 4 + 2],
                                aniData['data'][prevIndex * 4 + 3]
                            ]
                            // RedGLUtil.quaternionToRotationMat4(tQuaternion, rotationMTX)
                            // RedGLUtil.mat4ToEuler(rotationMTX, tRotation)
                            // tRotation[0] = -(tRotation[0] * 180 / Math.PI)
                            // tRotation[1] = -(tRotation[1] * 180 / Math.PI)
                            // tRotation[2] = -(tRotation[2] * 180 / Math.PI)
                            prevRotation = tQuaternion
                        }
                        if (aniData['key'] == 'translation') {
                            nextTranslation = [
                                aniData['data'][nextIndex * 3],
                                aniData['data'][nextIndex * 3 + 1],
                                aniData['data'][nextIndex * 3 + 2]
                            ]
                            prevTranslation = [
                                aniData['data'][prevIndex * 3],
                                aniData['data'][prevIndex * 3 + 1],
                                aniData['data'][prevIndex * 3 + 2]
                            ]
                        }
                        if (aniData['key'] == 'scale') {
                            nextScale = [
                                aniData['data'][nextIndex * 3],
                                aniData['data'][nextIndex * 3 + 1],
                                aniData['data'][nextIndex * 3 + 2]
                            ]
                            prevScale = [
                                aniData['data'][prevIndex * 3],
                                aniData['data'][prevIndex * 3 + 1],
                                aniData['data'][prevIndex * 3 + 2]
                            ]
                        }
                        if (target) {
                            if (aniData['key'] == 'translation') {
                                // console.log(interpolationValue,nextTranslation , prevTranslation)
                                target.x = prevTranslation[0] + interpolationValue * (nextTranslation[0] - prevTranslation[0])
                                target.y = prevTranslation[1] + interpolationValue * (nextTranslation[1] - prevTranslation[1])
                                target.z = prevTranslation[2] + interpolationValue * (nextTranslation[2] - prevTranslation[2])
                                // console.log(target.y)
                            }
                            if (aniData['key'] == 'rotation') {
                                var tQuat = []
                                quat.normalize(prevRotation, prevRotation)
                                quat.normalize(nextRotation, nextRotation)
                                var ax = prevRotation[0], ay = prevRotation[1], az = prevRotation[2],
                                    aw = prevRotation[3];
                                var bx = nextRotation[0], by = nextRotation[1], bz = nextRotation[2],
                                    bw = nextRotation[3];


                                var omega, cosom, sinom, scale0, scale1;
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
                                if ((1.0 - cosom) > glMatrix.EPSILON) {
                                    // standard case (slerp)
                                    omega = Math.acos(cosom);
                                    sinom = Math.sin(omega);
                                    scale0 = Math.sin((1.0 - interpolationValue) * omega) / sinom;
                                    scale1 = Math.sin(interpolationValue * omega) / sinom;
                                } else {
                                    // "from" and "to" quaternions are very close
                                    //  ... so we can do a linear interpolation
                                    scale0 = 1.0 - interpolationValue;
                                    scale1 = interpolationValue;
                                }
                                // calculate final values
                                tQuat[0] = scale0 * ax + scale1 * bx;
                                tQuat[1] = scale0 * ay + scale1 * by;
                                tQuat[2] = scale0 * az + scale1 * bz;
                                tQuat[3] = scale0 * aw + scale1 * bw;

                                var rotationMTX = []
                                var tRotation = [0, 0, 0]
                                RedGLUtil.quaternionToRotationMat4(tQuat, rotationMTX)
                                RedGLUtil.mat4ToEuler(rotationMTX, tRotation)
                                tRotation[0] = -(tRotation[0] * 180 / Math.PI)
                                tRotation[1] = -(tRotation[1] * 180 / Math.PI)
                                tRotation[2] = -(tRotation[2] * 180 / Math.PI)
                                // console.log(prevRotation, nextRotation)
                                target.rotationX = tRotation[0]
                                target.rotationY = tRotation[1]
                                target.rotationZ = tRotation[2]
                                // console.log(prevIndex, nextIndex)
                                // console.log(parseInt(prevRotation[2]), parseInt(nextRotation[2]))
                                // console.log(target.rotationX ,target.rotationY ,target.rotationZ )
                            }
                            if (aniData['key'] == 'scale') {
                                target.scaleX = prevScale[0] + interpolationValue * (nextScale[0] - prevScale[0])
                                target.scaleY = prevScale[1] + interpolationValue * (nextScale[1] - prevScale[1])
                                target.scaleZ = prevScale[2] + interpolationValue * (nextScale[2] - prevScale[2])
                            }
                            if (aniData['key'] == 'weights') {
                                // console.log(aniData)
                                aniData['targets'].forEach(function (targetMesh) {
                                    var targetData = targetMesh['geometry']['interleaveBuffer']['data']
                                    var originData = targetMesh['_morphInfo']['origin']
                                    var stride = targetMesh['geometry']['interleaveBuffer']['stride']
                                    var index = 0;
                                    var LOOP_NUM = targetData.length / stride
                                    var prev, next
                                    var prev1, next1
                                    var prev2, next2
                                    var baseIndex
                                    var morphLen = targetMesh['_morphInfo']['list'].length
                                    var tAniData = aniData['data']
                                    var tMorphList = targetMesh['_morphInfo']['list']
                                    for (index; index < LOOP_NUM; index++) {
                                        baseIndex = index * stride
                                        prev = originData[baseIndex]
                                        next = originData[baseIndex]
                                        prev1 = originData[baseIndex + 1]
                                        next1 = originData[baseIndex + 1]
                                        prev2 = originData[baseIndex + 2]
                                        next2 = originData[baseIndex + 2]

                                        var morphIndex = morphLen
                                        var prevAniData;
                                        var nextAniData;
                                        var morphInterleaveData;
                                        while (morphIndex--) {
                                            prevAniData = tAniData[prevIndex * morphLen + morphIndex]
                                            nextAniData = tAniData[nextIndex * morphLen + morphIndex]
                                            morphInterleaveData = tMorphList[morphIndex]['interleaveData']
                                            prev += prevAniData * morphInterleaveData[baseIndex]
                                            next += nextAniData * morphInterleaveData[baseIndex]
                                            prev1 += prevAniData * morphInterleaveData[baseIndex + 1]
                                            next1 += nextAniData * morphInterleaveData[baseIndex + 1]
                                            prev2 += prevAniData * morphInterleaveData[baseIndex + 2]
                                            next2 += nextAniData * morphInterleaveData[baseIndex + 2]
                                        }
                                        targetData[baseIndex] = prev + interpolationValue * (next - prev)
                                        targetData[baseIndex + 1] = prev1 + interpolationValue * (next1 - prev1)
                                        targetData[baseIndex + 2] = prev2 + interpolationValue * (next2 - prev2)
                                    }
                                    targetMesh['geometry']['interleaveBuffer'].upload(targetData)
                                })


                            }
                        }
                    }

                })
            })
        }
    })();
    parser = (function () {
        var checkAsset;
        var getBaseResource;
        var getBufferResources;
        var parseScene;
        var makeMesh;
        var parseAnimations;
        var parseNode;
        var parseCameras;
        var checkTRSAndMATRIX;
        /*
            glTF는 asset 속성이 있어야한다.
            최소한 버전을 반드시 포함해야함.
         */
        checkAsset = function (json) {
            // console.log(json)
            if (json['asset'] === undefined) RedGLUtil.throwFunc('RedGLTFLoader - asset은 반드시 정의되어야함')
            if (json['asset'].version[0] < 2) RedGLUtil.throwFunc('RedGLTFLoader - asset의 버전은 2.0이상이어야함')
        }
        getBufferResources = function (redGLTFLoader, data, callback) {
            var allNum = 0, loadedNum = 0
            var tList = []
            data['buffers'].forEach(function (v, index) {
                v['_redURIkey'] = 'buffers'
                v['_redURIIndex'] = index
                tList.push(v)
            })
            tList.forEach(function (v) {
                // console.log('버퍼테이터', v)
                allNum++
                if (v['uri'] instanceof ArrayBuffer) {
                    loadedNum++
                    redGLTFLoader['parsingResult']['uris'][v['_redURIkey']][v['_redURIIndex']] = new DataView(v['uri']);
                    if (loadedNum == allNum) {
                        console.log("redGLTFLoader['parsingResult']['uris']", redGLTFLoader['parsingResult']['uris'])
                        console.log("uris로딩현황", loadedNum, loadedNum)
                        if (callback) callback()
                    }
                } else {
                    var tSrc = v['uri'].substr(0, 5) == 'data:' ? v['uri'] : redGLTFLoader['path'] + v['uri']
                    // console.log('tSrc', tSrc)
                    arrayBufferLoader(
                        tSrc,
                        function (request) {
                            loadedNum++
                            console.log(request)
                            // console.log(request.response)
                            redGLTFLoader['parsingResult']['uris'][v['_redURIkey']][v['_redURIIndex']] = new DataView(request.response);
                            if (loadedNum == allNum) {
                                console.log("redGLTFLoader['parsingResult']['uris']", redGLTFLoader['parsingResult']['uris'])
                                console.log("uris로딩현황", loadedNum, loadedNum)
                                if (callback) callback()
                            }
                        },
                        function (request, error) {
                            console.log(request, error)
                        }
                    )
                }

            })
        }
        /*
            전체 데이터중 외부소스데이터를 모두 실제화 해둔다.
         */
        getBaseResource = function (redGLTFLoader, json, callback) {
            // for (var k in json) {
            //     // console.log(k, json[k])
            //     switch (k) {
            //         case 'asset' :
            //             console.log('TODO : asset 내부 리소스 로딩');
            //             break;
            //         case 'scene' :
            //             console.log('TODO : scene 내부 리소스 로딩');
            //             break;
            //         case 'scenes' :
            //             console.log('TODO : scenes 내부 리소스 로딩');
            //             break;
            //         case 'nodes' :
            //             console.log('TODO : nodes 내부 리소스 로딩');
            //             break;
            //         case 'meshes' :
            //             console.log('TODO : meshes 내부 리소스 로딩');
            //             break;
            //         case 'buffers' :
            //             console.log('TODO : buffers 내부 리소스 로딩');
            //             break;
            //         case 'bufferViews' :
            //             console.log('TODO : bufferViews 내부 리소스 로딩');
            //             break;
            //         case 'skins' :
            //             console.log('TODO : skins 내부 리소스 로딩');
            //             break;
            //         case 'accessors' :
            //             console.log('TODO : accessors 내부 리소스 로딩');
            //             break;
            //         case 'images' :
            //             console.log('TODO : images 내부 리소스 로딩');
            //             break;
            //         case 'materials' :
            //             console.log('TODO : materials 내부 리소스 로딩');
            //             break;
            //         case 'samplers' :
            //             console.log('TODO : samplers 내부 리소스 로딩');
            //             break;
            //         case 'textures' :
            //             console.log('TODO : textures 내부 리소스 로딩');
            //             break;
            //         case 'cameras' :
            //             console.log('TODO : images 내부 리소스 로딩');
            //             break;
            //         case 'animations' :
            //             console.log('TODO : images 내부 리소스 로딩');
            //             break;
            //         default :
            //             console.log(k, '고려안한거임');
            //             break;
            //     }
            // }
            getBufferResources(redGLTFLoader, json, callback);
        }
        parseCameras = function (redGLTFLoader, json) {
            console.log(json)
            if (json['cameras']) {
                json['cameras'].forEach(function (v) {
                    console.log('카메라', v)
                    var t0 = RedCamera()
                    if (v['type'] == 'orthographic') {
                        t0.orthographicYn = true
                    }
                    else {
                        t0['fov'] = v['perspective']['yfov'] * 180 / Math.PI
                        t0['farClipping'] = v['perspective']['zfar']
                        t0['nearClipping'] = v['perspective']['znear']
                    }
                    redGLTFLoader['parsingResult']['cameras'].push(t0)
                })
            }
        }
        parseScene = function (redGLTFLoader, json, callback) {
            console.log('parseScene 시작')
            console.log(json)
            var i, len;
            var nodesInScene;
            var nodeIndex;
            nodesInScene = json['scenes'][0]['nodes']
            i = 0;
            len = nodesInScene.length;
            var tick = function () {
                nodeIndex = nodesInScene[i];
                parseNode(redGLTFLoader, json, nodeIndex, json['nodes'][nodeIndex], redGLTFLoader['resultMesh']);
                i++;
                if (i == len) {
                    if (callback) callback()
                }
                else requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
            // json['scenes'][0]['nodes'].forEach(function (nodeIndex) {
            //     // console.log('노드를 찾음', nodeIndex)
            //     parseNode(redGLTFLoader, json, nodeIndex, json['nodes'][nodeIndex], redGLTFLoader['resultMesh'])
            // })
        }
        checkTRSAndMATRIX = (function () {
            var rotationMTX = mat4.create()
            var tRotation = [0, 0, 0]
            var tQuaternion = []
            var tScale = []
            var tMatrix
            return function (target, info) {
                if ('matrix' in info) {
                    // parseMatrix
                    tMatrix = info['matrix']
                    // console.log('~~~', info, tMatrix)
                    // mat4.getRotation(tQuaternion, tMatrix)
                    // if (tQuaternion[3] < 0) console.log('tQuaternion', tQuaternion)
                    // RedGLUtil.quaternionToRotationMat4(tQuaternion, rotationMTX)
                    RedGLUtil.mat4ToEuler(tMatrix, tRotation)
                    target.rotationX = -(tRotation[0] * 180 / Math.PI)
                    target.rotationY = -(tRotation[1] * 180 / Math.PI)
                    target.rotationZ = -(tRotation[2] * 180 / Math.PI)
                    target.x = tMatrix[12]
                    target.y = tMatrix[13]
                    target.z = tMatrix[14]
                    mat4.getScaling(tScale, tMatrix)
                    target.scaleX = tScale[0]
                    target.scaleY = tScale[1]
                    target.scaleZ = tScale[2]
                }
                if ('rotation' in info) {
                    // 로데이션은 쿼터니언으로 들어온다.
                    tQuaternion = info['rotation'];
                    RedGLUtil.quaternionToRotationMat4(tQuaternion, rotationMTX)
                    RedGLUtil.mat4ToEuler(rotationMTX, tRotation)
                    target.rotationX = -(tRotation[0] * 180 / Math.PI)
                    target.rotationY = -(tRotation[1] * 180 / Math.PI)
                    target.rotationZ = -(tRotation[2] * 180 / Math.PI)
                }
                if ('translation' in info) {
                    // 위치
                    target.x = info['translation'][0];
                    target.y = info['translation'][1];
                    target.z = info['translation'][2];
                }
                if ('scale' in info) {
                    // 스케일
                    target.scaleX = info['scale'][0];
                    target.scaleY = info['scale'][1];
                    target.scaleZ = info['scale'][2];
                }
            }
        })();
        var checkJoint = function (redGLTFLoader, skinInfo, nodes, v) {
            var tJointMesh = nodes[v]['RedMesh']
            if (tJointMesh) {
                var tJointMesh = nodes[v]['RedMesh']
                skinInfo['joints'].push(tJointMesh)
                tJointMesh.geometry = RedSphere(redGLTFLoader['redGL'], 0.05, 3, 3, 3)
                tJointMesh.material = RedColorMaterial(redGLTFLoader['redGL'])
                tJointMesh.drawMode = redGLTFLoader['redGL'].gl.LINE_LOOP
                tJointMesh.depthTestFunc = redGLTFLoader['redGL'].gl.NEVER
            } else requestAnimationFrame(function () {
                checkJoint(redGLTFLoader, skinInfo, nodes, v)
            })
        }
        var parseSkin = function (redGLTFLoader, json, info, tMesh) {
            console.log('스킨설정!', info)
            var skinInfo = {
                joints: [],
                inverseBindMatrices: []
            }
            var nodes = json['nodes']
            info['joints'].forEach(function (v) {
                console.log(json['nodes'][v])
                checkJoint(redGLTFLoader, skinInfo, nodes, v)
            })
            // 스켈레톤 정보가 있으면 정보와 메쉬를 연결해둔다.
            if (info['skeleton']) skinInfo['skeleton'] = json['nodes'][info['skeleton']]['RedMesh']
            // 액세서 구하고..
            // 정보 파싱한다.
            var accessorIndex = info['inverseBindMatrices']
            var accessorInfo = new RedGLTF_AccessorInfo(redGLTFLoader, json, accessorIndex)
            var tBYTES_PER_ELEMENT = accessorInfo['componentType_BYTES_PER_ELEMENT'];
            var tBufferViewByteStride = accessorInfo['bufferViewByteStride'];
            var tBufferURIDataView = accessorInfo['bufferURIDataView'];
            var tGetMethod = accessorInfo['getMethod'];
            var tType = accessorInfo['accessor']['type'];
            var tCount = accessorInfo['accessor']['count'];
            var strideIndex = 0;
            var stridePerElement = tBufferViewByteStride / tBYTES_PER_ELEMENT
            var i = accessorInfo['startIndex']
            var len
            switch (tType) {
                case 'MAT4' :
                    if (tBufferViewByteStride) {
                        len = i + tCount * (tBufferViewByteStride / tBYTES_PER_ELEMENT)
                        for (i; i < len; i++) {
                            if (strideIndex % stridePerElement < 16) {
                                skinInfo['inverseBindMatrices'].push(tBufferURIDataView[tGetMethod](i * tBYTES_PER_ELEMENT, true))
                            }
                            strideIndex++
                        }
                    } else {
                        len = i + tCount * 16;
                        for (i; i < len; i++) {
                            skinInfo['inverseBindMatrices'].push(tBufferURIDataView[tGetMethod](i * tBYTES_PER_ELEMENT, true))
                            strideIndex++
                        }
                    }
                    break
                default :
                    console.log('알수없는 형식 엑세서 타입', tType)
                    break
            }
            skinInfo['inverseBindMatrices'] = new Float32Array(skinInfo['inverseBindMatrices'])
            tMesh['skinInfo'] = skinInfo
            // console.log(skinInfo)
        }
        parseNode = (function () {
            return function (redGLTFLoader, json, nodeIndex, info, parentMesh) {
                if ('mesh' in info) {
                    var tMeshIndex = info['mesh']
                    // console.log('nodeInfo', info)
                    // console.log('parentMesh', parentMesh)
                    makeMesh(redGLTFLoader, json, json['meshes'][tMeshIndex]).forEach(function (tMesh) {
                        info['RedMesh'] = tMesh
                        parentMesh.addChild(tMesh)
                        // console.log("메쉬인덱스를 찾음", tMeshIndex, parentMesh)
                        checkTRSAndMATRIX(tMesh, info)
                        // tMesh.matrix = matrix
                        // tMesh.autoUpdateMatrix = false
                        if ('children' in info) {
                            info['children'].forEach(function (index) {
                                parseNode(redGLTFLoader, json, index, json['nodes'][index], tMesh)
                            })
                        }
                        if ('skin' in info) {
                            requestAnimationFrame(function () {
                                parseSkin(redGLTFLoader, json, json['skins'][info['skin']], tMesh)
                            })
                        }
                    })
                }
                else {
                    var tGroup
                    // console.log('차일드 정보로 구성된 정보임', info)

                    if (redGLTFLoader['parsingResult']['groups'][nodeIndex]) {
                        console.log('기존에 존재!', redGLTFLoader['parsingResult']['groups'][nodeIndex])
                        tGroup = redGLTFLoader['parsingResult']['groups'][nodeIndex]
                        info['RedMesh'] = tGroup
                    } else {
                        tGroup = RedMesh(redGLTFLoader['redGL'])
                        parentMesh.addChild(tGroup)
                        info['RedMesh'] = tGroup
                        redGLTFLoader['parsingResult']['groups'][nodeIndex] = tGroup
                        redGLTFLoader['parsingResult']['groups'][nodeIndex]['name'] = info['name']
                    }
                    checkTRSAndMATRIX(tGroup, info)
                    // 카메라가 있으면 또 연결시킴
                    if ('camera' in info) {
                        redGLTFLoader['parsingResult']['cameras'][info['camera']]['_parentMesh'] = parentMesh
                        redGLTFLoader['parsingResult']['cameras'][info['camera']]['_targetMesh'] = tGroup
                        var tCameraMesh = RedMesh(redGLTFLoader['redGL'])
                        tGroup.addChild(tCameraMesh)
                        redGLTFLoader['parsingResult']['cameras'][info['camera']]['_cameraMesh'] = tCameraMesh
                    }
                    // tGroup.matrix = matrix
                    // tGroup.autoUpdateMatrix = false
                    if ('children' in info) {
                        info['children'].forEach(function (index) {
                            parseNode(redGLTFLoader, json, index, json['nodes'][index], tGroup)
                        })
                    }
                    if ('skin' in info) {
                        requestAnimationFrame(function () {
                            parseSkin(redGLTFLoader, json, json['skins'][info['skin']], tGroup)
                        })
                    }
                }
            }
        })()
        var parseSparse = function (redGLTFLoader, key, tAccessors, json, vertices, uvs, uvs1, normals, jointWeights, joints) {
            if (tAccessors['sparse']) {
                var sparseVerties = []
                var sparseNormals = []
                var sparseUvs = [];
                (function () {
                    var tSparse = tAccessors['sparse']
                    var tSparseValuesAccessors = tSparse['values']
                    console.log('tSparseValuesAccessors', tSparseValuesAccessors)
                    var tBufferView = json['bufferViews'][tSparseValuesAccessors['bufferView']]
                    var tBufferIndex = tBufferView['buffer']
                    var tBuffer = json['buffers'][tBufferIndex]
                    var tBufferURIDataView;
                    if (tBuffer['uri']) {
                        tBufferURIDataView = redGLTFLoader['parsingResult']['uris']['buffers'][tBufferIndex]
                    }
                    var i, len;
                    var tComponentType
                    var tMethod;
                    tComponentType = WEBGL_COMPONENT_TYPES[tAccessors['componentType']]
                    if (tComponentType == Float32Array) tMethod = 'getFloat32'
                    if (tComponentType == Uint32Array) tMethod = 'getUint32'
                    if (tComponentType == Uint16Array) tMethod = 'getUint16'
                    if (tComponentType == Int16Array) tMethod = 'getInt16'
                    if (tComponentType == Uint8Array) tMethod = 'getUint8'
                    if (tComponentType == Int8Array) tMethod = 'getInt8'
                    var tAccessorBufferOffset = tAccessors['byteOffset'] || 0
                    var tBufferViewOffset = tBufferView['byteOffset'] || 0
                    i = (tBufferViewOffset + tAccessorBufferOffset) / tComponentType['BYTES_PER_ELEMENT']
                    switch (tAccessors['type']) {
                        case 'VEC3' :
                            len = i + (tComponentType['BYTES_PER_ELEMENT'] * tSparse['count']) / tComponentType['BYTES_PER_ELEMENT'] * 3
                            console.log('오오오오', key, i, len)
                            for (i; i < len; i++) {
                                if (key == 'NORMAL') sparseNormals.push(tBufferURIDataView[tMethod](i * tComponentType['BYTES_PER_ELEMENT'], true))
                                else if (key == 'POSITION') sparseVerties.push(tBufferURIDataView[tMethod](i * tComponentType['BYTES_PER_ELEMENT'], true))
                            }
                            // console.log('인터리브 버퍼 데이터', vertices)
                            break
                        case 'VEC2' :
                            len = i + (tComponentType['BYTES_PER_ELEMENT'] * tSparse['count']) / tComponentType['BYTES_PER_ELEMENT'] * 2
                            // console.log(i, len)
                            for (i; i < len; i++) {
                                if (key == 'TEXCOORD_0') {
                                    sparseUvs.push(tBufferURIDataView[tMethod](i * tComponentType['BYTES_PER_ELEMENT'], true))
                                }
                            }
                            // console.log('인터리브 버퍼 데이터', vertices)
                            break
                        default :
                            console.log('알수없는 형식 엑세서 타입', tAccessors['type'])
                            break
                    }
                })();
                // console.log(sparseVerties)
                // console.log(sparseNormals)
                // console.log(sparseUvs);
                var tSparse = tAccessors['sparse']
                var tSparseAccessors = tSparse['indices']
                // console.log('tSparseAccessors', tSparseAccessors)
                var tBufferView = json['bufferViews'][tSparseAccessors['bufferView']]
                var tBufferIndex = tBufferView['buffer']
                var tBuffer = json['buffers'][tBufferIndex]
                var tBufferURIDataView;
                if (tBuffer['uri']) {
                    tBufferURIDataView = redGLTFLoader['parsingResult']['uris']['buffers'][tBufferIndex]
                }
                var i, len;
                var tComponentType
                var tMethod;
                tComponentType = WEBGL_COMPONENT_TYPES[tSparseAccessors['componentType']]
                if (tComponentType == Uint16Array) tMethod = 'getUint16'
                else if (tComponentType == Uint8Array) tMethod = 'getUint8'
                var tAccessorBufferOffset = tSparseAccessors['byteOffset'] || 0
                var tBufferViewOffset = tBufferView['byteOffset'] || 0
                i = (tBufferViewOffset + tAccessorBufferOffset) / tComponentType['BYTES_PER_ELEMENT']
                //
                len = i + (tComponentType['BYTES_PER_ELEMENT'] * tSparse['count']) / tComponentType['BYTES_PER_ELEMENT']
                // console.log('오오오오', key, i, len)
                var sparseIndex = 0
                for (i; i < len; i++) {
                    var targetIndex = tBufferURIDataView[tMethod](i * tComponentType['BYTES_PER_ELEMENT'], true)
                    // console.log('몇번째껄 부르는건가', targetIndex)
                    vertices[targetIndex * 3] = sparseVerties[sparseIndex * 3]
                    vertices[targetIndex * 3 + 1] = sparseVerties[sparseIndex * 3 + 1]
                    vertices[targetIndex * 3 + 2] = sparseVerties[sparseIndex * 3 + 2]
                    sparseIndex++
                    // indices.push(tBufferURIDataView[tMethod](i * tComponentType['BYTES_PER_ELEMENT'], true))
                }
            }
        }
        var RedGLTF_AccessorInfo = function (redGLTFLoader, json, accessorIndex) {
            this['accessor'] = json['accessors'][accessorIndex];
            this['bufferView'] = json['bufferViews'][this['accessor']['bufferView']];
            this['bufferIndex'] = this['bufferView']['buffer'];
            this['buffer'] = json['buffers'][this['bufferIndex']]
            this['bufferURIDataView'] = null
            if (this['buffer']['uri']) {
                this['bufferURIDataView'] = redGLTFLoader['parsingResult']['uris']['buffers'][this['bufferIndex']]
            }
            ////////////////////////////
            this['componentType'] = WEBGL_COMPONENT_TYPES[this['accessor']['componentType']]
            this['componentType_BYTES_PER_ELEMENT'] = this['componentType']['BYTES_PER_ELEMENT'];
            switch (this['componentType']) {
                case Float32Array :
                    this['getMethod'] = 'getFloat32'
                    break
                case Uint32Array :
                    this['getMethod'] = 'getUint32'
                    break
                case Uint16Array :
                    this['getMethod'] = 'getUint16'
                    break
                case Int16Array :
                    this['getMethod'] = 'getInt16'
                    break
                case Uint8Array :
                    this['getMethod'] = 'getUint8'
                    break
                case Int8Array :
                    this['getMethod'] = 'getInt8'
                    break
                default :
                    RedGLUtil.throwFunc('파싱할수없는 타입', this['componentType'])
            }
            this['accessorBufferOffset'] = this['accessor']['byteOffset'] || 0
            this['bufferViewOffset'] = this['bufferView']['byteOffset'] || 0
            this['bufferViewByteStride'] = this['bufferView']['byteStride'] || 0
            this['startIndex'] = (this['bufferViewOffset'] + this['accessorBufferOffset']) / this['componentType_BYTES_PER_ELEMENT'];
            // console.log('해당 bufferView 정보', this['bufferView'])
            // console.log('바라볼 버퍼 인덱스', this['bufferIndex'])
            // console.log('바라볼 버퍼', this['buffer'])
            // console.log('바라볼 버퍼데이터', this['bufferURIDataView'])
            // console.log('바라볼 엑세서', this['accessor'])
            // console.log('this['componentType']', this['componentType'])
            // console.log("this['getMethod']", this['getMethod'])
            // console.log("this['bufferView']['byteOffset']", this['bufferView']['byteOffset'])
            // console.log("this['accessor']['byteOffset']", this['accessor']['byteOffset'])
        }
        var parseAttributeInfo = function (redGLTFLoader, json, key, accessorInfo, vertices, uvs, uvs1, normals, jointWeights, joints, verticesColor_0, tangents) {
            var tBYTES_PER_ELEMENT = accessorInfo['componentType_BYTES_PER_ELEMENT'];
            var tBufferViewByteStride = accessorInfo['bufferViewByteStride'];
            var tBufferURIDataView = accessorInfo['bufferURIDataView'];
            var tGetMethod = accessorInfo['getMethod'];
            var tType = accessorInfo['accessor']['type'];
            var tCount = accessorInfo['accessor']['count'];
            var strideIndex = 0;
            var stridePerElement = tBufferViewByteStride / tBYTES_PER_ELEMENT
            var i = accessorInfo['startIndex']
            var len
            switch (tType) {
                case 'VEC4' :
                    if (tBufferViewByteStride) {
                        len = i + tCount * (tBufferViewByteStride / tBYTES_PER_ELEMENT)
                        for (i; i < len; i++) {
                            if (strideIndex % stridePerElement < 4) {
                                if (key == 'WEIGHTS_0') jointWeights.push(tBufferURIDataView[tGetMethod](i * tBYTES_PER_ELEMENT, true))
                                else if (key == 'JOINTS_0') joints.push(tBufferURIDataView[tGetMethod](i * tBYTES_PER_ELEMENT, true))
                                else if (key == 'COLOR_0') verticesColor_0.push(tBufferURIDataView[tGetMethod](i * tBYTES_PER_ELEMENT, true))
                                else if (key == 'TANGENT') tangents.push(tBufferURIDataView[tGetMethod](i * tBYTES_PER_ELEMENT, true))
                                // else RedGLUtil.throwFunc('VEC4에서 현재 지원하고 있지 않는 키', key)
                            }
                            strideIndex++
                        }
                    } else {
                        len = i + tCount * 4;
                        for (i; i < len; i++) {
                            if (key == 'WEIGHTS_0') jointWeights.push(tBufferURIDataView[tGetMethod](i * tBYTES_PER_ELEMENT, true))
                            else if (key == 'JOINTS_0') joints.push(tBufferURIDataView[tGetMethod](i * tBYTES_PER_ELEMENT, true))
                            else if (key == 'COLOR_0') verticesColor_0.push(tBufferURIDataView[tGetMethod](i * tBYTES_PER_ELEMENT, true))
                            else if (key == 'TANGENT') tangents.push(tBufferURIDataView[tGetMethod](i * tBYTES_PER_ELEMENT, true))
                            // else RedGLUtil.throwFunc('VEC4에서 현재 지원하고 있지 않는 키', key)
                            strideIndex++
                        }
                    }
                    break
                case 'VEC3' :
                    if (tBufferViewByteStride) {
                        len = i + tCount * (tBufferViewByteStride / tBYTES_PER_ELEMENT)
                        for (i; i < len; i++) {
                            if (strideIndex % stridePerElement < 3) {
                                if (key == 'NORMAL') normals.push(tBufferURIDataView[tGetMethod](i * tBYTES_PER_ELEMENT, true))
                                else if (key == 'POSITION') vertices.push(tBufferURIDataView[tGetMethod](i * tBYTES_PER_ELEMENT, true))
                                else if (key == 'COLOR_0') {
                                    verticesColor_0.push(tBufferURIDataView[tGetMethod](i * tBYTES_PER_ELEMENT, true))
                                    if (strideIndex % stridePerElement == 2) verticesColor_0.push(1)
                                }
                                // else if ( key == 'TANGENT' ) tangents.push(tBufferURIDataView[tGetMethod](i * tBYTES_PER_ELEMENT, true))
                                // else RedGLUtil.throwFunc('VEC3에서 현재 지원하고 있지 않는 키', key)
                            }
                            strideIndex++
                        }
                    } else {
                        len = i + tCount * 3;
                        for (i; i < len; i++) {
                            if (key == 'NORMAL') normals.push(tBufferURIDataView[tGetMethod](i * tBYTES_PER_ELEMENT, true))
                            else if (key == 'POSITION') vertices.push(tBufferURIDataView[tGetMethod](i * tBYTES_PER_ELEMENT, true))
                            else if (key == 'COLOR_0') {
                                verticesColor_0.push(tBufferURIDataView[tGetMethod](i * tBYTES_PER_ELEMENT, true))
                                if (strideIndex % 3 == 2) verticesColor_0.push(1)
                            }
                            // else if ( key == 'TANGENT' ) tangents.push(tBufferURIDataView[tGetMethod](i * tBYTES_PER_ELEMENT, true))
                            // else RedGLUtil.throwFunc('VEC3에서 현재 지원하고 있지 않는 키', key)
                            strideIndex++
                        }
                        // console.log('인터리브 버퍼 데이터', vertices)
                    }
                    break
                case 'VEC2' :
                    if (tBufferViewByteStride) {
                        len = i + tCount * (tBufferViewByteStride / tBYTES_PER_ELEMENT)
                        for (i; i < len; i++) {
                            if (strideIndex % stridePerElement < 2) {
                                if (key == 'TEXCOORD_0') {
                                    uvs.push(tBufferURIDataView[tGetMethod](i * tBYTES_PER_ELEMENT, true))
                                } else if (key == 'TEXCOORD_1') {
                                    uvs1.push(tBufferURIDataView[tGetMethod](i * tBYTES_PER_ELEMENT, true))
                                }
                                else RedGLUtil.throwFunc('VEC2에서 현재 지원하고 있지 않는 키', key)
                            }
                            strideIndex++
                        }
                    } else {
                        len = i + tCount * 2;
                        for (i; i < len; i++) {
                            if (key == 'TEXCOORD_0') {
                                uvs.push(tBufferURIDataView[tGetMethod](i * tBYTES_PER_ELEMENT, true))
                            } else if (key == 'TEXCOORD_1') {
                                uvs1.push(tBufferURIDataView[tGetMethod](i * tBYTES_PER_ELEMENT, true))
                            } else RedGLUtil.throwFunc('VEC2에서 현재 지원하고 있지 않는 키', key)
                            strideIndex++
                        }
                    }
                    break
                default :
                    console.log('알수없는 형식 엑세서 타입', tType)
                    break
            }
        }
        var RedGLTF_MorphInfo = function (redGLTFLoader, json, primitiveData, weightsData) {
            var morphList = []
            if (primitiveData['targets']) {
                primitiveData['targets'].forEach(function (v2) {
                    var tMorphData = {
                        vertices: [],
                        verticesColor_0: [],
                        normals: [],
                        uvs: [],
                        uvs1: [],
                        jointWeights: [],
                        joints: [],
                        tangents: []
                    }
                    morphList.push(tMorphData)
                    for (var key in v2) {
                        var vertices = tMorphData['vertices']
                        var verticesColor_0 = tMorphData['verticesColor_0']
                        var normals = tMorphData['normals']
                        var uvs = tMorphData['uvs']
                        var uvs1 = tMorphData['uvs1']
                        var jointWeights = tMorphData['jointWeights']
                        var joints = tMorphData['joints']
                        var tangents = tMorphData['tangents']
                        var accessorIndex = v2[key]
                        var accessorInfo = new RedGLTF_AccessorInfo(redGLTFLoader, json, accessorIndex)
                        // 어트리뷰트 갈궈서 파악함
                        parseAttributeInfo(
                            redGLTFLoader, json, key, accessorInfo,
                            vertices, uvs, uvs1, normals, jointWeights, joints, verticesColor_0, tangents
                        )
                        // 스파스 정보도 갈굼
                        if (accessorInfo['accessor']['sparse']) parseSparse(redGLTFLoader, key, accessorInfo['accessor'], json, vertices, uvs, uvs1, normals, jointWeights, joints)
                    }
                })
            }
            this['list'] = morphList
            morphList['weights'] = weightsData || []
            this['origin'] = null
        }
        var parseIndicesInfo = function (redGLTFLoader, json, key, accessorInfo, indices) {
            var tBYTES_PER_ELEMENT = accessorInfo['componentType_BYTES_PER_ELEMENT'];
            var tBufferURIDataView = accessorInfo['bufferURIDataView'];
            var tGetMethod = accessorInfo['getMethod'];
            var tType = accessorInfo['accessor']['type'];
            var tCount = accessorInfo['accessor']['count'];
            var i = accessorInfo['startIndex']
            var len;
            // console.log('인덱스!!', accessorInfo)
            switch (tType) {
                case 'SCALAR' :
                    len = i + tCount
                    // console.log(i, len)
                    for (i; i < len; i++) {
                        indices.push(tBufferURIDataView[tGetMethod](i * tBYTES_PER_ELEMENT, true))
                    }
                    // console.log('인덱스버퍼 데이터', indices)
                    break
                default :
                    console.log('알수없는 형식 엑세서 타입', accessorInfo['accessor'])
                    break
            }
        }
        var parseMaterialInfo = (function () {
            var getURL = function (redGLTFLoader, json, sourceIndex) {
                if (json['images'][sourceIndex]['uri'].indexOf('blob:http') > -1) {
                    return json['images'][sourceIndex]['uri']
                } else {
                    return (json['images'][sourceIndex]['uri'].indexOf(';base64,') > -1 ? '' : redGLTFLoader['path']) + json['images'][sourceIndex]['uri']
                }
            }
            var getSamplerInfo = function (redGLTFLoader, json, samplerIndex) {
                var result = {}
                if (json['samplers']) {
                    var t0 = json['samplers'][samplerIndex]
                    if ('magFilter' in t0) result['mag'] = t0['magFilter']
                    if ('minFilter' in t0) result['min'] = t0['minFilter']
                    if ('wrapS' in t0) result['wrap_s'] = t0['wrapS']
                    if ('wrapT' in t0) result['wrap_t'] = t0['wrapT']
                } else {
                    console.log('있긴하냐', samplerIndex)
                }
                result['string'] = JSON.stringify(result)
                // console.log('result', result)
                return result
            }
            return function (redGLTFLoader, json, v) {
                var tMaterial
                var doubleSide = false
                var alphaMode;
                var alphaCutoff = 0.5
                if ('material' in v) {
                    var tIndex = v['material']
                    var tMaterialInfo = json['materials'][tIndex]
                    if ('doubleSided' in tMaterialInfo) doubleSide = tMaterialInfo['doubleSided'] ? true : false
                    if ('alphaMode' in tMaterialInfo) alphaMode = tMaterialInfo['alphaMode']
                    if ('alphaCutoff' in tMaterialInfo) alphaCutoff = tMaterialInfo['alphaCutoff']
                    var diffseTexture, normalTexture, roughnessTexture, emissiveTexture, occlusionTexture;
                    // console.log('tMaterialInfo', tMaterialInfo)
                    if ('baseColorTexture' in tMaterialInfo['pbrMetallicRoughness']) {
                        var baseTextureIndex = tMaterialInfo['pbrMetallicRoughness']['baseColorTexture']['index']
                        var baseTextureInfo = json['textures'][baseTextureIndex]
                        var diffuseSourceIndex = baseTextureInfo['source']
                        var tURL = getURL(redGLTFLoader, json, diffuseSourceIndex)
                        var samplerIndex = baseTextureInfo['sampler']
                        var option = getSamplerInfo(redGLTFLoader, json, samplerIndex)
                        var tKey = tURL + option['string']
                        if (redGLTFLoader['parsingResult']['textures'][tKey]) diffseTexture = redGLTFLoader['parsingResult']['textures'][tKey]
                        else diffseTexture = redGLTFLoader['parsingResult']['textures'][tKey] = RedBitmapTexture(redGLTFLoader['redGL'], tURL, option)
                        // var t0 = document.createElement('img')
                        // t0.src = json['images'][diffuseSourceIndex]['uri']
                        // t0.style.cssText = 'position:absolute;top:0px;left:0px;width:500px'
                        // document.body.appendChild(t0)
                    }
                    if ('metallicRoughnessTexture' in tMaterialInfo['pbrMetallicRoughness']) {
                        var roughnessTextureIndex = tMaterialInfo['pbrMetallicRoughness']['metallicRoughnessTexture']['index']
                        var roughnessTextureInfo = json['textures'][roughnessTextureIndex]
                        var roughnessSourceIndex = roughnessTextureInfo['source']
                        var tURL = getURL(redGLTFLoader, json, roughnessSourceIndex)
                        var samplerIndex = roughnessTextureInfo['sampler']
                        var option = getSamplerInfo(redGLTFLoader, json, samplerIndex)
                        var tKey = tURL + option['string']
                        if (redGLTFLoader['parsingResult']['textures'][tKey]) roughnessTexture = redGLTFLoader['parsingResult']['textures'][tKey]
                        else roughnessTexture = redGLTFLoader['parsingResult']['textures'][tKey] = RedBitmapTexture(redGLTFLoader['redGL'], tURL, option)
                        // var t0 = document.createElement('img')
                        // t0.src = json['images'][roughnessSourceIndex]['uri']
                        // t0.style.cssText = 'position:absolute;top:0px;left:0px;width:500px'
                        // document.body.appendChild(t0)
                    }
                    var normalTextureIndex = tMaterialInfo['normalTexture']
                    if (normalTextureIndex != undefined) {
                        normalTextureIndex = normalTextureIndex['index']
                        var normalTextureInfo = json['textures'][normalTextureIndex]
                        var normalSourceIndex = normalTextureInfo['source']
                        var tURL = getURL(redGLTFLoader, json, normalSourceIndex)
                        var samplerIndex = normalTextureInfo['sampler']
                        var option = getSamplerInfo(redGLTFLoader, json, samplerIndex)
                        var tKey = tURL + option['string']
                        if (redGLTFLoader['parsingResult']['textures'][tKey]) normalTexture = redGLTFLoader['parsingResult']['textures'][tKey]
                        else normalTexture = redGLTFLoader['parsingResult']['textures'][tKey] = RedBitmapTexture(redGLTFLoader['redGL'], tURL, option)
                        // var t0 = document.createElement('img')
                        // t0.src = json['images'][normalSourceIndex]['uri']
                        // t0.style.cssText = 'position:absolute;top:0px;left:0px;width:500px'
                        // document.body.appendChild(t0)
                    }
                    var emissiveTextureIndex = tMaterialInfo['emissiveTexture']
                    if (emissiveTextureIndex != undefined) {
                        emissiveTextureIndex = emissiveTextureIndex['index']
                        var emissiveTextureInfo = json['textures'][emissiveTextureIndex]
                        var emissiveSourceIndex = emissiveTextureInfo['source']
                        var tURL = getURL(redGLTFLoader, json, emissiveSourceIndex)
                        var samplerIndex = emissiveTextureInfo['sampler']
                        var option = getSamplerInfo(redGLTFLoader, json, samplerIndex)
                        var tKey = tURL + option['string']
                        if (redGLTFLoader['parsingResult']['textures'][tKey]) emissiveTexture = redGLTFLoader['parsingResult']['textures'][tKey]
                        else emissiveTexture = redGLTFLoader['parsingResult']['textures'][tKey] = RedBitmapTexture(redGLTFLoader['redGL'], tURL, option)
                        // var t0 = document.createElement('img')
                        // t0.src = json['images'][emissiveSourceIndex]['uri']
                        // t0.style.cssText = 'position:absolute;top:0px;left:0px;width:500px'
                        // document.body.appendChild(t0)
                    }
                    var occlusionTextureIndex = tMaterialInfo['occlusionTexture']
                    if (occlusionTextureIndex != undefined) {
                        occlusionTextureIndex = occlusionTextureIndex['index']
                        var occlusionTextureInfo = json['textures'][occlusionTextureIndex]
                        var occlusionSourceIndex = occlusionTextureInfo['source']
                        var tURL = getURL(redGLTFLoader, json, occlusionSourceIndex)
                        var samplerIndex = occlusionTextureInfo['sampler']
                        var option = getSamplerInfo(redGLTFLoader, json, samplerIndex)
                        var tKey = tURL + option['string']
                        if (redGLTFLoader['parsingResult']['textures'][tKey]) occlusionTexture = redGLTFLoader['parsingResult']['textures'][tKey]
                        else occlusionTexture = redGLTFLoader['parsingResult']['textures'][tKey] = RedBitmapTexture(redGLTFLoader['redGL'], tURL, option)
                        // var t0 = document.createElement('img')
                        // t0.src = json['images'][occlusionSourceIndex]['uri']
                        // t0.style.cssText = 'position:absolute;top:0px;left:0px;width:500px'
                        // document.body.appendChild(t0)
                    }
                    var metallicFactor, roughnessFactor
                    if ('metallicFactor' in tMaterialInfo['pbrMetallicRoughness']) {
                        metallicFactor = tMaterialInfo['pbrMetallicRoughness']['metallicFactor']
                    }
                    if ('roughnessFactor' in tMaterialInfo['pbrMetallicRoughness']) {
                        roughnessFactor = tMaterialInfo['pbrMetallicRoughness']['roughnessFactor']
                    }
                    var tColor
                    // if (!redGLTFLoader['environmentTexture']) {
                    //     redGLTFLoader['environmentTexture'] = RedBitmapCubeTexture(redGLTFLoader['redGL'], [
                    //         '../asset/cubemap/SwedishRoyalCastle/px.jpg',
                    //         '../asset/cubemap/SwedishRoyalCastle/nx.jpg',
                    //         '../asset/cubemap/SwedishRoyalCastle/py.jpg',
                    //         '../asset/cubemap/SwedishRoyalCastle/ny.jpg',
                    //         '../asset/cubemap/SwedishRoyalCastle/pz.jpg',
                    //         '../asset/cubemap/SwedishRoyalCastle/nz.jpg'
                    //     ])
                    // }
                    var env = redGLTFLoader['environmentTexture']
                    // Type	Description	Required
                    // baseColorFactor	number [4]	The material's base color factor.	No, default: [1,1,1,1]
                    // baseColorTexture	object	The base color texture.	No
                    // metallicFactor	number	The metalness of the material.	No, default: 1
                    // roughnessFactor	number	The roughness of the material.	No, default: 1
                    // metallicRoughnessTexture	object	The metallic-roughness texture.	No
                    tMaterial = RedPBRMaterial_System(redGLTFLoader['redGL'], diffseTexture, env, normalTexture, occlusionTexture, emissiveTexture, roughnessTexture, null)
                    if (tMaterialInfo['pbrMetallicRoughness'] && tMaterialInfo['pbrMetallicRoughness']['baseColorFactor']) tColor = tMaterialInfo['pbrMetallicRoughness']['baseColorFactor']
                    else tColor = [1.0, 1.0, 1.0, 1.0]
                    tMaterial['baseColorFactor'] = tColor
                    if (tMaterialInfo['pbrMetallicRoughness']) {
                        tMaterial.metallicFactor = metallicFactor != undefined ? metallicFactor : 1;
                        tMaterial.roughnessFactor = roughnessFactor != undefined ? roughnessFactor : 1;
                    }
                    tMaterial.emissiveFactor = tMaterialInfo.emissiveFactor != undefined ? tMaterialInfo.emissiveFactor : [1, 1, 1];
                    if (tMaterialInfo['pbrMetallicRoughness']) {
                        if (tMaterialInfo['pbrMetallicRoughness']['metallicRoughnessTexture']) tMaterial['roughnessTexCoordIndex'] = tMaterialInfo['pbrMetallicRoughness']['metallicRoughnessTexture']['texCoord'] || 0
                        if (tMaterialInfo['pbrMetallicRoughness']['baseColorTexture']) tMaterial['diffuseTexCoordIndex'] = tMaterialInfo['pbrMetallicRoughness']['baseColorTexture']['texCoord'] || 0
                    }
                    if (tMaterialInfo['occlusionTexture']) {
                        tMaterial['occlusionTexCoordIndex'] = tMaterialInfo['occlusionTexture']['texCoord'] || 0
                        tMaterial['occlusionPower'] = tMaterialInfo['occlusionTexture']['strength'] || 1
                    }
                    if (tMaterialInfo['emissiveTexture']) tMaterial['emissiveTexCoordIndex'] = tMaterialInfo['emissiveTexture']['texCoord'] || 0
                    if (tMaterialInfo['normalTexture']) tMaterial['normalTexCoordIndex'] = tMaterialInfo['normalTexture']['texCoord'] || 0

                } else {
                    var tColor = [(Math.random()), (Math.random()), (Math.random()), 1]
                    tMaterial = RedPBRMaterial_System(redGLTFLoader['redGL'])
                    tMaterial['baseColorFactor'] = tColor
                }
                return [tMaterial, doubleSide, alphaMode, alphaCutoff]
            }
        })();
        var makeInterleaveData = function (interleaveData, vertices, verticesColor_0, normalData, uvs, uvs1, jointWeights, joints, tangents) {
            var i = 0, len = vertices.length / 3
            var idx = 0
            for (i; i < len; i++) {
                if (vertices.length) {
                    interleaveData[idx++] = vertices[i * 3 + 0];
                    interleaveData[idx++] = vertices[i * 3 + 1];
                    interleaveData[idx++] = vertices[i * 3 + 2];
                    // interleaveData.push(vertices[i * 3 + 0], vertices[i * 3 + 1], vertices[i * 3 + 2])
                }
                if (verticesColor_0.length) {
                    interleaveData[idx++] = verticesColor_0[i * 4 + 0];
                    interleaveData[idx++] = verticesColor_0[i * 4 + 1];
                    interleaveData[idx++] = verticesColor_0[i * 4 + 2];
                    interleaveData[idx++] = verticesColor_0[i * 4 + 3];
                    // interleaveData.push(verticesColor_0[i * 4 + 0], verticesColor_0[i * 4 + 1], verticesColor_0[i * 4 + 2], verticesColor_0[i * 4 + 3])
                } else {
                    interleaveData[idx++] = 0;
                    interleaveData[idx++] = 0;
                    interleaveData[idx++] = 0;
                    interleaveData[idx++] = 0;
                    // interleaveData.push(0, 0, 0, 0)
                }
                if (normalData.length) {
                    interleaveData[idx++] = normalData[i * 3 + 0];
                    interleaveData[idx++] = normalData[i * 3 + 1];
                    interleaveData[idx++] = normalData[i * 3 + 2];
                    // interleaveData.push(normalData[i * 3 + 0], normalData[i * 3 + 1], normalData[i * 3 + 2])
                }
                if (!uvs.length) uvs.push(0, 0)
                if (uvs.length) {
                    interleaveData[idx++] = uvs[i * 2 + 0];
                    interleaveData[idx++] = uvs[i * 2 + 1];
                    // interleaveData.push(uvs[i * 2 + 0], uvs[i * 2 + 1])
                }
                if (uvs1.length) {
                    interleaveData[idx++] = uvs1[i * 2 + 0];
                    interleaveData[idx++] = uvs1[i * 2 + 1];
                    // interleaveData.push(uvs1[i * 2 + 0], uvs1[i * 2 + 1])
                }
                else if (uvs.length) {
                    interleaveData[idx++] = uvs[i * 2 + 0];
                    interleaveData[idx++] = uvs[i * 2 + 1];
                    // interleaveData.push(uvs[i * 2 + 0], uvs[i * 2 + 1])
                }
                if (jointWeights.length) {
                    interleaveData[idx++] = jointWeights[i * 4 + 0];
                    interleaveData[idx++] = jointWeights[i * 4 + 1];
                    interleaveData[idx++] = jointWeights[i * 4 + 2];
                    interleaveData[idx++] = jointWeights[i * 4 + 3];
                    // interleaveData.push(jointWeights[i * 4 + 0], jointWeights[i * 4 + 1], jointWeights[i * 4 + 2], jointWeights[i * 4 + 3])
                }
                if (joints.length) {
                    interleaveData[idx++] = joints[i * 4 + 0];
                    interleaveData[idx++] = joints[i * 4 + 1];
                    interleaveData[idx++] = joints[i * 4 + 2];
                    interleaveData[idx++] = joints[i * 4 + 3];
                    // interleaveData.push(joints[i * 4 + 0], joints[i * 4 + 1], joints[i * 4 + 2], joints[i * 4 + 3])
                }
                if (tangents.length) {
                    interleaveData[idx++] = tangents[i * 4 + 0];
                    interleaveData[idx++] = tangents[i * 4 + 1];
                    interleaveData[idx++] = tangents[i * 4 + 2];
                    interleaveData[idx++] = tangents[i * 4 + 3];
                    // interleaveData.push(tangents[i * 4 + 0], tangents[i * 4 + 1], tangents[i * 4 + 2], tangents[i * 4 + 3])
                }
                else {
                    interleaveData[idx++] = 0;
                    interleaveData[idx++] = 0;
                    interleaveData[idx++] = 0;
                    interleaveData[idx++] = 0;
                    // interleaveData.push(0, 0, 0, 0)
                }
            }
        }
        makeMesh = function (redGLTFLoader, json, meshData) {
            // console.log('parseMesh :')
            // console.log(meshData)
            var tName, tDoubleSide, tAlphaMode, tAlphaCutoff
            if (meshData['name']) tName = meshData['name']
            var tMeshList = []
            meshData['primitives'].forEach(function (v, index) {
                var tMesh;
                var tMaterial
                var indices = []
                // 어트리뷰트에서 파싱되는놈들
                var vertices = []
                var verticesColor_0 = []
                var uvs = []
                var uvs1 = []
                var normals = []
                var jointWeights = []
                var joints = []
                var tangents = []
                var tDrawMode;
                // console.log(v, index)
                // 형상 파싱
                if (v['attributes']) {
                    // console.log('TODO: 어트리뷰트 파싱')
                    for (var key in v['attributes']) {
                        // console.log(k, '파싱')
                        // 엑세서를 통해서 정보파악하고
                        var accessorIndex = v['attributes'][key];
                        var accessorInfo = new RedGLTF_AccessorInfo(redGLTFLoader, json, accessorIndex)
                        // 어트리뷰트 갈궈서 파악함
                        parseAttributeInfo(
                            redGLTFLoader, json, key, accessorInfo,
                            vertices, uvs, uvs1, normals, jointWeights, joints, verticesColor_0, tangents
                        )
                        // 스파스 정보도 갈굼
                        if (accessorInfo['accessor']['sparse']) parseSparse(redGLTFLoader, key, accessorInfo['accessor'], json, vertices, uvs, uvs1, normals, jointWeights, joints)
                    }
                }
                // 인덱스 파싱
                if ('indices' in v) {
                    // console.log('TODO: 인덱스 파싱')
                    // 버퍼뷰의 위치를 말하므로...이를 추적파싱항
                    var accessorIndex = v['indices']
                    var accessorInfo = new RedGLTF_AccessorInfo(redGLTFLoader, json, accessorIndex)
                    parseIndicesInfo(
                        redGLTFLoader, json, key, accessorInfo, indices
                    )
                }
                // 재질파싱
                tMaterial = parseMaterialInfo(redGLTFLoader, json, v)
                tDoubleSide = tMaterial[1]
                tAlphaMode = tMaterial[2]
                tAlphaCutoff = tMaterial[3]
                tMaterial = tMaterial[0]
                if (tMaterial instanceof RedPBRMaterial_System) redGLTFLoader['parsingResult']['materials'].push(tMaterial)
                // 모드 파싱
                if ('mode' in v) {
                    // 0 POINTS
                    // 1 LINES
                    // 2 LINE_LOOP
                    // 3 LINE_STRIP
                    // 4 TRIANGLES
                    // 5 TRIANGLE_STRIP
                    // 6 TRIANGLE_FAN
                    // console.log('primitiveMode ', v['mode'])
                    switch (v['mode']) {
                        case 0 :
                            tDrawMode = redGLTFLoader['redGL'].gl.POINTS
                            break
                        case 1 :
                            tDrawMode = redGLTFLoader['redGL'].gl.LINES
                            break
                        case 2 :
                            tDrawMode = redGLTFLoader['redGL'].gl.LINE_LOOP
                            break
                        case 3 :
                            tDrawMode = redGLTFLoader['redGL'].gl.LINE_STRIP
                            break
                        case 4 :
                            tDrawMode = redGLTFLoader['redGL'].gl.TRIANGLES
                            break
                        case 5 :
                            tDrawMode = redGLTFLoader['redGL'].gl.TRIANGLE_STRIP
                            break
                        case 6 :
                            tDrawMode = redGLTFLoader['redGL'].gl.TRIANGLE_FAN
                            break
                    }
                }
                /////////////////////////////////////////////////////////
                // 최종데이터 생산
                var normalData
                if (normals.length) normalData = normals
                else normalData = RedGLUtil.calculateNormals(vertices, indices)
                // console.log('vertices', vertices)
                // console.log('normalData', normalData)
                var interleaveData = []

                makeInterleaveData(interleaveData, vertices, verticesColor_0, normalData, uvs, uvs1, jointWeights, joints, tangents)
                // console.log('interleaveData', interleaveData)
                /////////////////////////////////////////////////////////
                // 메쉬 생성
                var tGeo
                var tInterleaveInfoList = []
                if (vertices.length) tInterleaveInfoList.push(RedInterleaveInfo('aVertexPosition', 3))
                tInterleaveInfoList.push(RedInterleaveInfo('aVertexColor_0', 4))
                if (normalData.length) tInterleaveInfoList.push(RedInterleaveInfo('aVertexNormal', 3))
                if (uvs.length) tInterleaveInfoList.push(RedInterleaveInfo('aTexcoord', 2))
                if (uvs1.length) tInterleaveInfoList.push(RedInterleaveInfo('aTexcoord1', 2))
                else if (uvs.length) tInterleaveInfoList.push(RedInterleaveInfo('aTexcoord1', 2))
                if (jointWeights.length) tInterleaveInfoList.push(RedInterleaveInfo('aVertexWeight', 4))
                if (joints.length) tInterleaveInfoList.push(RedInterleaveInfo('aVertexJoint', 4))
                tInterleaveInfoList.push(RedInterleaveInfo('aVertexTangent', 4))
                tGeo = RedGeometry(
                    RedBuffer(
                        redGLTFLoader['redGL'],
                        'testGLTF_interleaveBuffer_' + RedGL.makeUUID(),
                        RedBuffer.ARRAY_BUFFER,
                        new Float32Array(interleaveData),
                        tInterleaveInfoList
                    ),
                    indices.length ? RedBuffer(
                        redGLTFLoader['redGL'],
                        'testGLTF_indexBuffer_' + RedGL.makeUUID(),
                        RedBuffer.ELEMENT_ARRAY_BUFFER,
                        redGLTFLoader['redGL'].gl.glExtension['OES_element_index_uint'] ? new Uint32Array(indices) : new Uint16Array(indices)
                    ) : null
                )
                if (!tMaterial) {
                    RedGLUtil.throwFunc('재질을 파싱할수없는경우 ', v)
                    // tMaterial = RedColorPhongMaterial(redGLTFLoader['redGL'], RedGLUtil.rgb2hex(parseInt(Math.random() * 255), parseInt(Math.random() * 255), parseInt(Math.random() * 255)))
                }
                // console.log('tMaterial', tMaterial)
                tMesh = RedMesh(redGLTFLoader['redGL'], tGeo, tMaterial)
                if (tName) {
                    tMesh.name = tName
                    if (redGLTFLoader['parsingOption']) {
                        for (var k in redGLTFLoader['parsingOption']) {
                            if (tName.toLowerCase().indexOf(k) > -1) {
                                redGLTFLoader['parsingOption'][k](tMesh)
                            }
                        }
                    }

                }
                if (tDrawMode) tMesh.drawMode = tDrawMode
                else tMesh.drawMode = redGLTFLoader['redGL'].gl.TRIANGLES
                //
                if (tDoubleSide) {
                    tMesh.useCullFace = false
                    tMaterial.useMaterialDoubleSide = true
                }
                // console.log('tAlphaMode', tAlphaMode)
                // console.log('tAlphaCutoff', tAlphaCutoff)
                switch (tAlphaMode) {
                    // TODO

                    case 'BLEND' :
                        tMesh['useTransparentSort'] = true
                        break
                    case 'MASK' :
                        tMesh.useBlendMode = false
                        tMaterial.cutOff = tAlphaCutoff
                        break
                    default :
                        tMesh.useBlendMode = false
                        tMaterial._cutOff = -0.1
                    // tMesh.useBlendMode = false
                }
                if (verticesColor_0.length) tMaterial.useVertexColor_0 = true
                if (tangents.length) tMaterial.useVertexTangent = true
                // console.log('tDoubleSide', tDoubleSide)
                // console.log('tMesh', tMesh)
                /////////////////////////////////////////////////////////
                // 모프리스트 설정
                var morphInfo = new RedGLTF_MorphInfo(redGLTFLoader, json, v, meshData['weights'])
                morphInfo['list'].forEach(function (v) {
                    var normalData
                    if (v['normals'].length) normalData = v['normals']
                    else normalData = RedGLUtil.calculateNormals(v['vertices'], indices)
                    // console.log('vertices', vertices)
                    // console.log('normalData', normalData)
                    var interleaveData = []
                    makeInterleaveData(interleaveData, v['vertices'], v['verticesColor_0'], normalData, v['uvs'], v['uvs1'], v['jointWeights'], v['joints'], v['tangents'])
                    // var i = 0, len = v['vertices'].length / 3
                    // for (i; i < len; i++) {
                    //     if (v['vertices'].length) interleaveData.push(v['vertices'][i * 3 + 0], v['vertices'][i * 3 + 1], v['vertices'][i * 3 + 2])
                    //     if (v['verticesColor_0'].length) interleaveData.push(v['verticesColor_0'][i * 4 + 0], v['verticesColor_0'][i * 4 + 1], v['verticesColor_0'][i * 4 + 2], v['verticesColor_0'][i * 4 + 3])
                    //     else interleaveData.push(0, 0, 0, 0)
                    //     if (normalData.length) interleaveData.push(normalData[i * 3 + 0], normalData[i * 3 + 1], normalData[i * 3 + 2])
                    //     if (!v['uvs'].length) v['uvs'].push(0, 0)
                    //     if (v['uvs'].length) interleaveData.push(v['uvs'][i * 2 + 0], v['uvs'][i * 2 + 1])
                    //     if (v['uvs1'].length) interleaveData.push(v['uvs1'][i * 2 + 0], v['uvs1'][i * 2 + 1])
                    //     else if (v['uvs'].length) interleaveData.push(v['uvs'][i * 2 + 0], v['uvs'][i * 2 + 1])
                    //     if (v['jointWeights'].length) interleaveData.push(v['jointWeights'][i * 4 + 0], v['jointWeights'][i * 4 + 1], v['jointWeights'][i * 4 + 2], v['jointWeights'][i * 4 + 3])
                    //     if (v['joints'].length) interleaveData.push(v['joints'][i * 4 + 0], v['joints'][i * 4 + 1], v['joints'][i * 4 + 2], v['joints'][i * 4 + 3])
                    //     if (v['tangents'].length) interleaveData.push(v['tangents'][i * 4 + 0], v['tangents'][i * 4 + 1], v['tangents'][i * 4 + 2], v['tangents'][i * 4 + 3])
                    //     else interleaveData.push(0, 0, 0, 0)
                    //
                    // }
                    v['interleaveData'] = interleaveData
                });
                tMesh['_morphInfo'] = morphInfo
                tMesh['_morphInfo']['origin'] = new Float32Array(interleaveData)
                console.log('모프리스트', tMesh['_morphInfo'])
                // console.log(morphInfo)
                /////////////////////////////////////////////////////
                var targetData = tMesh['geometry']['interleaveBuffer']['data']
                var NUM = 0
                tInterleaveInfoList.forEach(function (v) {
                    NUM += v['size']
                })
                var gap = 0
                tMesh['_morphInfo']['list'].forEach(function (v, index) {
                    // console.log('tInterleaveInfoList', tInterleaveInfoList)
                    // console.log('NUM', NUM)
                    var i = 0, len = targetData.length / NUM
                    var tWeights = tMesh['_morphInfo']['list']['weights'][index] == undefined ? 0.5 : tMesh['_morphInfo']['list']['weights'][index]
                    for (i; i < len; i++) {
                        targetData[i * NUM + 0] += v['vertices'][i * 3 + 0] * tWeights
                        targetData[i * NUM + 1] += v['vertices'][i * 3 + 1] * tWeights
                        targetData[i * NUM + 2] += v['vertices'][i * 3 + 2] * tWeights
                    }
                });
                tMesh['geometry']['interleaveBuffer'].upload(targetData)
                tMesh['_morphInfo']['origin'] = new Float32Array(targetData)
                /////////////////////////////////////////////////////
                v['RedMesh'] = tMesh
                tMeshList.push(tMesh)
                // console.log('vertices', vertices)
                // console.log('normalData', normalData)
                // console.log('uvs', uvs)
                // console.log('joints', joints)
                // console.log('jointWeights', jointWeights)
                // console.log('indices', indices)
            })
            return tMeshList
        }
        parseAnimations = (function () {
            var parseAnimationInfo;
            parseAnimationInfo = function (redGLTFLoader, json, accessorIndex) {
                // console.log('accessorIndex', accessorIndex)
                var dataList = []
                var accessorInfo = new RedGLTF_AccessorInfo(redGLTFLoader, json, accessorIndex)
                var tBYTES_PER_ELEMENT = accessorInfo['componentType_BYTES_PER_ELEMENT'];
                // var tBufferViewByteStride = accessorInfo['bufferViewByteStride'];
                var tBufferURIDataView = accessorInfo['bufferURIDataView'];
                var tGetMethod = accessorInfo['getMethod'];
                var tType = accessorInfo['accessor']['type'];
                var tCount = accessorInfo['accessor']['count'];
                // var strideIndex = 0;
                // var stridePerElement = tBufferViewByteStride / tBYTES_PER_ELEMENT
                var i = accessorInfo['startIndex']
                var len
                switch (tType) {
                    case 'SCALAR' :
                        len = i + tCount * 1;
                        for (i; i < len; i++) {
                            dataList.push(tBufferURIDataView[tGetMethod](i * tBYTES_PER_ELEMENT, true))
                        }
                        // console.log('타임 데이터', dataList)
                        break
                    case 'VEC4' :
                        len = i + tCount * 4;
                        for (i; i < len; i++) {
                            dataList.push(tBufferURIDataView[tGetMethod](i * tBYTES_PER_ELEMENT, true))
                        }
                        // console.log('값 데이터', dataList)
                        break
                    case 'VEC3' :
                        len = i + tCount * 3;
                        for (i; i < len; i++) {
                            dataList.push(tBufferURIDataView[tGetMethod](i * tBYTES_PER_ELEMENT, true))
                        }
                        // console.log('값 데이터', dataList)
                        break
                    default :
                        console.log('알수없는 형식 엑세서 타입', accessorInfo['accessor'])
                        break
                }
                return dataList
            }
            return function (redGLTFLoader, json) {
                console.log('애니메이션 파싱시작')
                var nodes = json['nodes']
                var meshes = json['meshes']
                var accessors = json['accessors']
                if (!json['animations']) json['animations'] = []
                json['animations'].forEach(function (v, index) {
                    // console.log(v)
                    var samplers = v['samplers'];
                    //TODO: 용어를 정리해봐야겠음.
                    // 이걸 애니메이션 클립으로 봐야하는가..
                    var animationClip = []

                    animationClip['minTime'] = 10000000;
                    animationClip['maxTime'] = -1;
                    // animationClip['name'] = 'animation_' + index;
                    animationClip['name'] = v['name'];
                    // 로더에 애니메이션 데이터들을 입력함
                    redGLTFLoader['parsingResult']['animations'].push(animationClip)
                    // 채널을 돌면서 파악한다.
                    v['channels'].forEach(function (channel, channelIndex) {
                        var tSampler;
                        var tChannelTargetData;
                        var tMesh;
                        var tNode;
                        var aniTrack; //
                        var targets = []
                        tSampler = samplers[channel['sampler']];
                        // console.log('tSampler', tSampler)
                        tChannelTargetData = channel['target'];
                        tNode = nodes[tChannelTargetData['node']];
                        if ('mesh' in tNode) {
                            tMesh = tNode['RedMesh']
                            meshes[tNode['mesh']]['primitives'].forEach(function (v) {
                                targets.push(v['RedMesh'])
                                v['RedMesh'].geometry.drawMode = redGLTFLoader['redGL']['gl'].DYNAMIC_DRAW
                            })
                        } else {
                            var tGroup
                            //TODO: 이거 개선해야함
                            // console.log('여기로 오는경우가 있는건가')
                            if (redGLTFLoader['parsingResult']['groups'][tChannelTargetData['node']]) {
                                tGroup = redGLTFLoader['parsingResult']['groups'][tChannelTargetData['node']]
                                // console.log('tGroup', tGroup)
                                tMesh = tGroup;
                            } else {
                                console.log('여기로 오는경우가 있는건가2')
                                return
                            }
                        }
                        // console.log('애니메이션 대상메쉬', tMesh)
                        // console.log(tChannelTargetData['path'])
                        if (
                            tChannelTargetData['path'] == 'scale'
                            || tChannelTargetData['path'] == 'rotation'
                            || tChannelTargetData['path'] == 'translation'
                            || tChannelTargetData['path'] == 'weights'
                        ) {
                            // console.log('path', tChannelTargetData['path'])
                            // // 시간축은 샘플의 input
                            // console.log('시간축', tSampler['input'])
                            // console.log('시간엑세서 데이터', tSampler['input'])
                            // console.log('시간축 데이터리스트', animationData['time'])
                            // // 로테이션 축은 샘플의 output
                            // console.log('translation', tSampler['output'])
                            // console.log('translation 엑세서 데이터', tSampler['output'])
                            // console.log('scale 데이터리스트', t0)

                            animationClip.push(aniTrack = {
                                    key: tChannelTargetData['path'],
                                    time: parseAnimationInfo(redGLTFLoader, json, tSampler['input']),
                                    data: parseAnimationInfo(redGLTFLoader, json, tSampler['output']),
                                    interpolation: tSampler['interpolation'],
                                    target: tMesh,
                                    targets: targets
                                }
                            )
                        } else {
                            console.log('파싱할수없는 데이터', tChannelTargetData['path'])
                        }
                        if (aniTrack) {
                            if (animationClip['minTime'] > aniTrack['time'][0]) animationClip['minTime'] = aniTrack['time'][0]
                            if (animationClip['maxTime'] < aniTrack['time'][aniTrack['time'].length - 1]) animationClip['maxTime'] = aniTrack['time'][aniTrack['time'].length - 1]
                        }
                        // console.log('animationData', animationData)
                    })
                    console.log('animationClip', animationClip)
                });
                if (redGLTFLoader['parsingResult']['animations'].length) {
                    redGLTFLoader['parsingResult']['animations'].forEach(function (v) {
                        redGLTFLoader.playAnimation(v)
                    })
                    // redGLTFLoader.playAnimation(redGLTFLoader['parsingResult']['animations'][7])


                }

            }
        })();
        return function (redGLTFLoader, redGL, json, callBack, binaryChunk) {
            console.log('파싱시작', redGLTFLoader['path'] + redGLTFLoader['fileName']);
            // console.log('rawData', json);
            checkAsset(json);
            if (binaryChunk) {
                console.log(json)
                console.log(binaryChunk)
                json.buffers[0]['uri'] = binaryChunk
                getBaseResource(redGLTFLoader, json,
                    function () {
                        // 리소스 로딩이 완료되면 다음 진행
                        parseCameras(redGLTFLoader, json)
                        parseScene(redGLTFLoader, json, function () {
                            parseAnimations(redGLTFLoader, json)
                            if (callBack) callBack();
                        })

                    }
                )
            } else {
                getBaseResource(redGLTFLoader, json,
                    function () {
                        // 리소스 로딩이 완료되면 다음 진행
                        parseCameras(redGLTFLoader, json)
                        parseScene(redGLTFLoader, json, function () {
                            parseAnimations(redGLTFLoader, json)
                            if (callBack) callBack();
                        })

                    }
                )
            }
        }
    })();
    Object.freeze(RedGLTFLoader);
})();
"use strict";
var RedAxis;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedAxis`,
		 description : `
			 RedAxis Instance 생성기
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
		 },
		 extends : [
		    'RedBaseContainer',
		    'RedBaseObject3D'
		 ],
		 demo : '../example/object3D/RedAxis.html',
		 example : `
			 var tScene;
			 tScene = RedScene();
			 tScene['axis'] = RedAxis(redGL Instance)
		 `,
		 return : 'RedAxis Instance'
	 }
     :DOC*/
    RedAxis = function (redGL) {
        if (!(this instanceof RedAxis)) return new RedAxis(redGL);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedAxis : RedGL Instance만 허용.', redGL);
        var tArrowMesh;
        var tAxis;
        var tBox, tArrow;
        var tMatX, tMatY, tMatZ;
        RedBaseObject3D['build'].call(this, redGL.gl);
        tBox = RedBox(redGL);
        tArrow = RedCylinder(redGL, 0, 0.5);
        tMatX = RedColorMaterial(redGL, '#ff0000');
        tMatY = RedColorMaterial(redGL, '#00ff00');
        tMatZ = RedColorMaterial(redGL, '#0000ff');
        ////////////////////////////////////////////
        // xAxis
        tArrowMesh = RedMesh(redGL, tArrow, tMatX);
        tAxis = RedMesh(redGL, tBox, tMatX);
        tAxis.scaleX = tAxis.scaleY = tAxis.scaleZ = 0.1;
        tAxis.scaleX = 5;
        tArrowMesh.x = 5;
        tArrowMesh.rotationZ = 90
        tAxis.x = 2.5;
        this['children'].push(tAxis);
        this['children'].push(tArrowMesh);
        ////////////////////////////////////////////
        // yAxis
        tArrowMesh = RedMesh(redGL, tArrow, tMatY);
        tAxis = RedMesh(redGL, tBox, tMatY);
        tAxis.scaleX = tAxis.scaleY = tAxis.scaleZ = 0.1;
        tAxis.scaleY = 5;
        tArrowMesh.y = 5;
        tAxis.y = 2.5;
        this['children'].push(tAxis);
        this['children'].push(tArrowMesh);
        ////////////////////////////////////////////
        // zAxis
        tArrowMesh = RedMesh(redGL, tArrow, tMatZ);
        tAxis = RedMesh(redGL, tBox, tMatZ);
        tAxis.scaleX = tAxis.scaleY = tAxis.scaleZ = 0.1;
        tAxis.scaleZ = 5;
        tArrowMesh.z = 5;
        tArrowMesh.rotationX = -90
        tAxis.z = 2.5;
        this['children'].push(tAxis);
        this['children'].push(tArrowMesh);
        ////////////////////////////////////////////
        this['children'].push(RedMesh(redGL, RedSphere(redGL, 0.25, 16, 16, 16), RedColorMaterial(redGL, '#ff00ff')));
        this['_UUID'] = RedGL.makeUUID();
    };
    RedAxis.prototype = new RedBaseContainer();
    Object.freeze(RedAxis);
})();
"use strict";
var RedGrid;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedGrid`,
		 description : `
			 RedGrid Instance 생성기
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 size : [
				 {type:'uint'},
				 `격자 크기`
			 ],
			 divisions : [
				 {type:'uint'},
				 `격자 수`
			 ],
			 color1 : [
				 {type:'hex'},
				 `기준선 컬러`
			 ],
			 color2 : [
				 {type:'hex'},
				 `격자선 컬러`
			 ]
		 },
		 demo : '../example/object3D/RedGrid.html',
		 extends : [
		    'RedBaseContainer',
		    'RedBaseObject3D'
		 ],
		 example : `
			 var tScene;
			 tScene = RedScene Instance;
			 tScene['grid'] = RedGrid(RedGL Instance);
			 tScene['grid'].color1 = '#fff';
			 tScene['grid'].color2 = '#fff';
			 tScene['grid'].size = 100;
			 tScene['grid'].divisions = 100;
		 `,
		 return : 'RedGrid Instance'
	 }
     :DOC*/
    RedGrid = function (redGL, size, divisions, color1, color2) {
        if (!(this instanceof RedGrid)) return new RedGrid(redGL, size, divisions, color1, color2);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedGrid : RedGL Instance만 허용.', redGL);
        var tGL;
        tGL = redGL.gl;
        RedBaseObject3D['build'].call(this, tGL);
        this['_redGL'] = redGL;
        this['size'] = size || 100;
        this['divisions'] = divisions || 100;
        this['color1'] = color1 || '#cccccc';
        this['color2'] = color2 || '#666666';
        this['geometry'] = this['_makeGridGeometry']();
        this['material'] = RedGridMaterial(redGL);
        this['drawMode'] = tGL.LINES;
        this['_UUID'] = RedGL.makeUUID();
        console.log(this);
    };
    RedGrid.prototype = new RedBaseContainer();
    RedGrid.prototype['_makeGridGeometry'] = (function () {
        var center, step, halfSize;
        var i, k, tColor;
        return function () {
            if (this['color2']) {
                var interleaveData = [];
                center = this['_divisions'] / 2;
                step = this['_size'] / this['_divisions'];
                halfSize = this['_size'] / 2;
                for (i = 0, k = -halfSize; i <= this['_divisions']; i++ , k += step) {
                    tColor = i === center ? RedGLUtil.hexToRGB_ZeroToOne(this['color1']) : RedGLUtil.hexToRGB_ZeroToOne(this['color2']);
                    interleaveData.push(
                        -halfSize, 0, k, tColor[0], tColor[1], tColor[2], 1,
                        halfSize, 0, k, tColor[0], tColor[1], tColor[2], 1,
                        k, 0, -halfSize, tColor[0], tColor[1], tColor[2], 1,
                        k, 0, halfSize, tColor[0], tColor[1], tColor[2], 1
                    );
                }
                return RedGeometry(
                    RedBuffer(
                        this['_redGL'],
                        'gridInterleaveBuffer_' + this['_size'] + '_' + this['_divisions'] + '_' + this['color1'] + '_' + this['color2'],
                        RedBuffer.ARRAY_BUFFER,
                        new Float32Array(interleaveData),
                        [
                            RedInterleaveInfo('aVertexPosition', 3),
                            RedInterleaveInfo('aVertexColor', 4)
                        ]
                    )
                )
            }
        }
    })();
    RedGrid.prototype['_update'] = function () {
        this['geometry'] = this['_makeGridGeometry']()
    };
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`size`,
		 description : `size`,
		 params : {
			 size : [
				 {type:'uint'},
				 `격자 크기`
			 ]
		 },
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedGrid', 'size', 'number', {
        min: 1,
        callback: function () {
            this['_update']()
        }
    });
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`divisions`,
		 description : `divisions`,
		 params : {
			 size : [
				 {type:'uint'},
				 `격자 수`
			 ]
		 },
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedGrid', 'divisions', 'number', {
        min: 1,
        callback: function () {
            this['_update']()
        }
    });
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`color1`,
		 description : `중앙 그리드 색상`,
		 params : {
			 size : [
				 {type:'hex'},
				 `기준선 컬러`
			 ]
		 },
		 return : 'hex'
	 }
     :DOC*/
    Object.defineProperty(RedGrid.prototype, 'color1', {
        get: function () {
            return this['_color1']
        },
        set: function (hex) {
            RedGLUtil.regHex(hex) || RedGLUtil.throwFunc('RedGrid : color1 hex 형식만 허용.', hex);
            this['_color1'] = hex;
            this['_update']()
            return this['_color1']
        }
    });
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`color2`,
		 description : `그리드 색상`,
		 params : {
			 size : [
				 {type:'hex'},
				 `격자 컬러`
			 ]
		 },
		 return : 'hex'
	 }
     :DOC*/
    Object.defineProperty(RedGrid.prototype, 'color2', {
        get: function () {
            return this['_color2']
        },
        set: function (hex) {
            RedGLUtil.regHex(hex) || RedGLUtil.throwFunc('RedGrid : color2 hex 형식만 허용.', hex);
            this['_color2'] = hex;
            this['_update']()
            return this['_color2']
        }
    });
    Object.defineProperty(RedGrid.prototype, 'material', {
        get: function () {
            return this['_material'];
        },
        set: function (v) {
            v instanceof RedGridMaterial || RedGLUtil.throwFunc('RedGrid : RedGridMaterial Instance만 허용.', '입력값 : ' + v);
            this['_material'] = v;
        }
    });
    Object.freeze(RedGrid);
})();
"use strict";
var RedMesh;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedMesh`,
		 description : `
			 RedMesh Instance 생성기
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 geometry : [
				 {type:'RedGeometry'}
			 ],
			 material : [
				 {type:'RedBaseMaterial 확장 Instance'}
			 ]
		 },
		 demo : '../example/object3D/RedMesh.html',
		 extends : [
		    'RedBaseContainer',
		    'RedBaseObject3D'
		 ],
		 example : `
			 var tScene;
			 var tMesh;
			 tScene = RedScene();
			 tMesh = RedMesh( RedGL Instance, RedBox(RedGL Instance), RedColorMaterial(RedGL Instance, '#ff0000' ));
			 tScene.addChild(tMesh);
		 `,
		 return : 'RedMesh Instance'
	 }
     :DOC*/
    RedMesh = function (redGL, geometry, material) {
        if (!(this instanceof RedMesh)) return new RedMesh(redGL, geometry, material);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedMesh : RedGL Instance만 허용.', redGL);
        RedBaseObject3D['build'].call(this, redGL.gl);
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`geometry`,
			 description : `geometry`,
			 return : 'RedGeometry'
		 }
         :DOC*/
        this['geometry'] = geometry;
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`material`,
			 description : `material`,
			 return : 'RedBaseMaterial 확장 Instance'
		 }
         :DOC*/
        this['material'] = material;
        this['_UUID'] = RedGL.makeUUID();
    };
    RedMesh.prototype = new RedBaseContainer();
    /**DOC:
     {
		 code : 'PROPERTY',
		 title :`perspectiveScale`,
		 description : `
		 퍼스펙티브에 스케일이 반응할것인가 여부
		 기본값 true
		 `,
		 return : 'Boolean'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedMesh', 'perspectiveScale', 'boolean', false);
    /**DOC:
     {
		 code : 'PROPERTY',
		 title :`sprite3DYn`,
		 description : `
		 sprite3D 모드 사용 여부
		 기본값 true
		 `,
		 return : 'Boolean'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedMesh', 'sprite3DYn', 'boolean', false);
    Object.freeze(RedMesh);
})();
"use strict";
var RedLine;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedLine`,
		 description : `
			 RedLine Instance 생성기
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 material : [
				 {type:'RedColorMaterial Instance'}
			 ]
		 },
		 extends : [
		    'RedBaseContainer',
		    'RedBaseObject3D'
		 ],
		 demo : '../example/object3D/RedLine.html',
		 example : `
            var tLine;
            var tX, tY, tZ;
            var i;
            tLine = RedLine(RedGL Instance, RedColorMaterial( RedGL Instance ) ); // RedLine Instance 생성
            i = 60;
            tX = tY = tZ = 0;
            while (i--) {
                tX += Math.random() * 0.5;
                tY += Math.random() * 0.5;
                tZ += Math.random() * 0.5;
                tLine.addPoint(tX, tY, tZ); // 포인트 추가
            }
		 `,
		 return : 'RedLine Instance'
	 }
     :DOC*/
    RedLine = function (redGL, material) {
        if (!(this instanceof RedLine)) return new RedLine(redGL, material);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedLine : RedGL Instance만 허용.', redGL);
        material = material || RedColorMaterial(redGL);
        material instanceof RedColorMaterial || RedGLUtil.throwFunc('RedLine : RedColorMaterial Instance만 허용.');
        var tGL;
        tGL = redGL.gl;
        RedBaseObject3D['build'].call(this, tGL);
        this['_interleaveData'] = [];
        this['_indexData'] = [];
        this['_UUID'] = RedGL.makeUUID();
        this['_interleaveBuffer'] = RedBuffer(
            redGL,
            'RedLine_InterleaveBuffer_' + this['_UUID'],
            RedBuffer.ARRAY_BUFFER,
            new Float32Array(this['_interleaveData']),
            [
                RedInterleaveInfo('aVertexPosition', 3)
            ]
        );
        this['geometry'] = RedGeometry(this['_interleaveBuffer'] /*,this['_indexBuffer']*/);
        this['material'] = material;
        this['drawMode'] = tGL.LINE_STRIP;
    };
    RedLine.prototype = new RedBaseContainer();
    /**DOC:
     {
	     code : 'METHOD',
		 title :`addPoint`,
		 description : `
			 라인 포인트 추가
		 `,
		 parmas : {
			 x : [{type:'Number'}],
			 y : [{type:'Number'}],
			 z : [{type:'Number'}]
		 },
		 return : 'void'
	 }
     :DOC*/
    RedLine.prototype['addPoint'] = function (x, y, z) {
        // var tIndex = this['_interleaveData'].length / 3;
        typeof x == 'number' || RedGLUtil.throwFunc('RedLine : addPoint - x값은 숫자만 허용', '입력값 : ' + x);
        typeof y == 'number' || RedGLUtil.throwFunc('RedLine : addPoint - y값은 숫자만 허용', '입력값 : ' + y);
        typeof z == 'number' || RedGLUtil.throwFunc('RedLine : addPoint - z값은 숫자만 허용', '입력값 : ' + z);
        this['_interleaveData'].push(x, y, z);
        // this['_indexData'].push(tIndex);
        this['_upload']();
    };
    /**DOC:
     {
	     code : 'METHOD',
		 title :`removeAllPoint`,
		 description : `
			 라인 포인트 전체 제거
		 `,
		 return : 'void'
	 }
     :DOC*/
    RedLine.prototype['removeAllPoint'] = function () {
        this['_interleaveData'].length = 0;
        // indexData.length = 0;
        this['_upload']();
    };
    RedLine.prototype['_upload'] = function () {
        this['_interleaveBuffer'].upload(new Float32Array(this['_interleaveData']));
        // this['_indexBuffer']['upload'](new Uint16Array(this['_indexData']));
    };
    Object.defineProperty(RedLine.prototype, 'geometry', {
        get: function () {
            return this['_geometry'];
        },
        set: function (v) {
            if (this['_geometry']) RedGLUtil.throwFunc('RedLine : geometry - 임의로 설정을 허용하지 않음', '입력값 : ' + v);
            this['_geometry'] = v;
        }
    });
    Object.defineProperty(RedLine.prototype, 'material', {
        get: function () {
            return this['_material'];
        },
        set: function (v) {
            v instanceof RedColorMaterial || RedGLUtil.throwFunc('RedLine : RedColorMaterial Instance만 허용.', '입력값 : ' + v);
            this['_material'] = v;
        }
    });
    Object.freeze(RedLine);
})();
"use strict";
var RedSkyBox;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedSkyBox`,
		 description : `
			 RedSkyBox Instance 생성기
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 srcList : [
				 {type:'Array'},
				 `스카이박스 이미지 리스트`
			 ]
		 },
         extends : [
		    'RedBaseObject3D'
		 ],
		 demo : '../example/object3D/RedSkyBox.html',
		 example : `
            var tScene3D;
            tScene3D = RedScene( RedGL Instance );
            tScene3D.skyBox = RedSkyBox(
                RedGL Instance,
                [
                'asset/cubemap/SwedishRoyalCastle/px.jpg',
                'asset/cubemap/SwedishRoyalCastle/nx.jpg',
                'asset/cubemap/SwedishRoyalCastle/ny.jpg',
                'asset/cubemap/SwedishRoyalCastle/py.jpg',
                'asset/cubemap/SwedishRoyalCastle/pz.jpg',
                'asset/cubemap/SwedishRoyalCastle/nz.jpg'
                ]
            );
		 `,
		 return : 'RedSkyBox Instance'
	 }
     :DOC*/
    RedSkyBox = function (redGL, srcList) {
        if (!(this instanceof RedSkyBox)) return new RedSkyBox(redGL, srcList);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedSkyBox : RedGL Instance만 허용.', redGL);
        RedBaseObject3D['build'].call(this, redGL.gl);
        this['geometry'] = RedBox(redGL);
        this['material'] = RedSkyBoxMaterial(redGL, RedBitmapCubeTexture(redGL, srcList));
        this['cullFace'] = redGL.gl.FRONT;
        this['_UUID'] = RedGL.makeUUID();
        console.log(this);
    };
    RedSkyBox.prototype = new RedBaseObject3D();
    Object.defineProperty(RedSkyBox.prototype, 'geometry', {
        get: function () {
            return this['_geometry'];
        },
        set: function (v) {
            if (this['_geometry']) RedGLUtil.throwFunc('RedSkyBox : geometry - 임의로 설정을 허용하지 않음', '입력값 : ' + v);
            this['_geometry'] = v;
        }
    });
    Object.defineProperty(RedSkyBox.prototype, 'material', {
        get: function () {
            return this['_material'];
        },
        set: function (v) {
            v instanceof RedSkyBoxMaterial || RedGLUtil.throwFunc('RedSkyBox : RedSkyBoxMaterial Instance만 허용.', '입력값 : ' + v);
            this['_material'] = v;
        }
    });
    Object.freeze(RedSkyBox);
})();
"use strict";
var RedSprite3D;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedSprite3D`,
		 description : `
			 RedSprite3D Instance 생성기
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 material : [
				 {type:'RedBaseMaterial 확장 Instance'}
			 ]
		 },
		 extends : [
		    'RedBaseContainer',
		    'RedBaseObject3D'
		 ],
		 demo : '../example/object3D/RedSprite3D.html',
		 example : `
			 var tScene;
			 var tSprite3D;
			 tScene = RedScene();
			 tSprite3D = RedSprite3D(RedGL Instance, RedColorMaterial(RedGL Instance))
			 tScene.addChild(tSprite3D)
		 `,
		 return : 'RedSprite3D Instance'
	 }
     :DOC*/
    RedSprite3D = function (redGL, material) {
        if (!(this instanceof RedSprite3D)) return new RedSprite3D(redGL, material);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedSprite3D : RedGL Instance만 허용.', redGL);
        RedBaseObject3D['build'].call(this, redGL.gl);
        this['geometry'] = RedPlane(redGL, 1, 1, 0);
        this['material'] = material;
        this['perspectiveScale'] = true;
        this['sprite3DYn'] = true;
        this['useCullFace'] = false;
        this['_UUID'] = RedGL.makeUUID();
    };
    RedSprite3D.prototype = new RedBaseContainer();
    /**DOC:
     {
		 code : 'PROPERTY',
		 title :`perspectiveScale`,
		 description : `
		 퍼스펙티브에 스케일이 반응할것인가 여부
		 기본값 true
		 `,
		 return : 'Boolean'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedSprite3D', 'perspectiveScale', 'boolean', true);
    /**DOC:
     {
		 code : 'PROPERTY',
		 title :`sprite3DYn`,
		 description : `
		 sprite3D 모드 사용 여부
		 기본값 true
		 `,
		 return : 'Boolean'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedSprite3D', 'sprite3DYn', 'boolean', true);
    /**DOC:
     {
		 code : 'PROPERTY',
		 title :`material`,
		 description : `material`,
		 return : 'RedBaseMaterial 확장 Instance'
	 }
     :DOC*/
    Object.defineProperty(RedSprite3D.prototype, 'material', {
        get: function () {
            return this['_material'];
        },
        set: function (v) {
            if (
                !(v instanceof RedColorMaterial)
                && !(v instanceof RedBitmapMaterial)
                && !(v instanceof RedSheetMaterial)
                && !(v instanceof RedVideoMaterial)
            ) {
                RedGLUtil.throwFunc('RedSprite3D : RedColorMaterial or RedBitmapMaterial or RedSheetMaterial Instance만 허용.', '입력값 : ' + v)
            }
            this['_material'] = v;
        }
    });
    Object.freeze(RedSprite3D);
})();
"use strict";
var RedPointCloud;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedPointCloud`,
		 description : `
			 포인트 클라우드 기저층
		 `,
		 return : 'RedPointCloud Instance'
	 }
     :DOC*/
    RedPointCloud = function () {
    };
    RedPointCloud.prototype = new RedBaseContainer();
    /**DOC:
     {
		 code : 'METHOD',
		 title :`update`,
		 description : `인터리브 정보 업데이터`,
		 params : {
		    interleaveData : [
		        { type : 'Array' },
		        '인터리브 데이터'
		    ]
		 },
		 return : 'void'
	 }
     :DOC*/
    RedPointCloud.prototype['update'] = function (interleaveData) {
        this['_geometry']['interleaveBuffer'].upload(new Float32Array(interleaveData));
    };
    Object.defineProperty(RedPointCloud.prototype, 'geometry', {
        get: function () {
            return this['_geometry'];
        },
        set: function (v) {
            if (this['_geometry']) RedGLUtil.throwFunc('RedPointCloud : geometry - 임의 설정을 허용하지 않음', '입력값 : ' + v);
            this['_geometry'] = v;
        }
    });
    Object.freeze(RedPointCloud);
})();
"use strict";
var RedParticleUnit;
//////////////////////////////////////////////////////////
// 연구중
//////////////////////////////////////////////////////////
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedParticleUnit`,
		 description : `
			 RedParticleUnit Instance 생성기.
			 RedParticleEmitter 사용시 내부적으로 사용되는 객체.
		 `,
		 params : {
			 lifeTime : [
				 {type:'Number'}
			 ]
		 },
		 return : 'RedParticleUnit Instance'
	 }
     :DOC*/
    RedParticleUnit = function (lifeTime) {
        this['startTime'] = null;
        this['age'] = 0;
        this['lifeTime'] = lifeTime.length == 2 ? Math.random() * (lifeTime[1] - lifeTime[0]) + lifeTime[0] : lifeTime[0];
        this['initLifeTime'] = this['lifeTime'];
        this['_gravitySum'] = 0;
    };
    /**DOC:
     {
		 code : 'addRule',
		 title :`addRule`,
		 description : `
		    룰 추가 매서드
		 `,
		 params : {
		    key : [
		        {type : 'String'}
		    ],
		    option : [
		        {type : 'Object'}
		    ]
		 },
		 return : 'void'
	 }
     :DOC*/
    RedParticleUnit.prototype.addRule = function (key, option) {
        this[key] = {
            startCenter: null,
            start: option['start'].length == 2 ? Math.random() * (option['start'][1] - option['start'][0]) + option['start'][0] : option['start'],
            end: option['end'].length == 2 ? Math.random() * (option['end'][1] - option['end'][0]) + option['end'][0] : option['end'],
            ease: option['ease']
        };
        this[key]['gap'] = this[key]['end'] - this[key]['start']
    };
    Object.freeze(RedParticleUnit);
})();
"use strict";
var RedColorPointCloud;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedColorPointCloud`,
		 description : `
			 비트맵 포인트 클라우드
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 interleaveData : [
				 {type:'Array'}
			 ],
			 interleaveDefineInfoList : [
				 {type:'Array'}
			 ],
			 material : [
				 {type : 'RedColorPointCloudMaterial'}
			 ]
		 },
		 demo : '../example/particle/RedColorPointCloud.html',
		 extends : [
		    'RedBaseContainer',
		    'RedBaseObject3D'
		 ],
		 return : 'RedColorPointCloud Instance'
	 }
     :DOC*/
    RedColorPointCloud = function (redGL, interleaveData, interleaveDefineInfoList) {
        if (!(this instanceof RedColorPointCloud)) return new RedColorPointCloud(redGL, interleaveData, interleaveDefineInfoList);
        interleaveData instanceof Array || RedGLUtil.throwFunc('RedLine : interleaveData - Array Instance만 허용.', '입력값 :', redGL);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedLine : RedGL Instance만 허용.', redGL);
        var tGL;
        tGL = redGL.gl;
        RedBaseObject3D['build'].call(this, tGL);
        this['_UUID'] = RedGL.makeUUID();
        //TODO interleaveDefineInfoList 검증강화
        this['geometry'] = RedGeometry(
            RedBuffer(
                redGL,
                'RedColorPointCloud_' + this['_UUID'],
                RedBuffer.ARRAY_BUFFER,
                new Float32Array(interleaveData),
                interleaveDefineInfoList,
                redGL.gl.DYNAMIC_DRAW
            )
        );
        this['_material'] = RedColorPointCloudMaterial(redGL);
        this['drawMode'] = tGL.POINTS;
        this['useDepthMask'] = false;
    };
    RedColorPointCloud.prototype = new RedPointCloud();
    /**DOC:
     {
		 code : 'PROPERTY',
		 title :`material`,
		 description : `material`,
		 return : 'RedColorPointCloudMaterial or RedBitmapPointCloudMaterial Instance'
	 }
     :DOC*/
    Object.defineProperty(RedColorPointCloud.prototype, 'material', {
        get: function () {
            return this['_material'];
        },
        set: function (v) {
            v instanceof RedColorPointCloudMaterial
            || RedGLUtil.throwFunc('RedColorPointCloud : material - RedColorPointCloudMaterial Instance 만 허용.');
            this['_material'] = v;
        }
    });
    Object.freeze(RedColorPointCloud);
})();
"use strict";
var RedBitmapPointCloud;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedBitmapPointCloud`,
		 description : `
			 비트맵 포인트 클라우드
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 interleaveData : [
				 {type:'Array'}
			 ],
			 interleaveDefineInfoList : [
				 {type:'Array'}
			 ],
			 material : [
				 {type : 'RedBitmapPointCloudMaterial'}
			 ]
		 },
		 demo : '../example/particle/RedBitmapPointCloud.html',
		 extends : [
		    'RedBaseContainer',
		    'RedBaseObject3D'
		 ],
		 return : 'RedBitmapPointCloud Instance'
	 }
     :DOC*/
    RedBitmapPointCloud = function (redGL, interleaveData, interleaveDefineInfoList, material) {
        if (!(this instanceof RedBitmapPointCloud)) return new RedBitmapPointCloud(redGL, interleaveData, interleaveDefineInfoList, material);
        interleaveData instanceof Array || RedGLUtil.throwFunc('RedLine : interleaveData - Array Instance만 허용.', '입력값 :', redGL);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedLine : RedGL Instance만 허용.', redGL);
        var tGL;
        tGL = redGL.gl;
        RedBaseObject3D['build'].call(this, tGL);
        this['_UUID'] = RedGL.makeUUID();
        //TODO interleaveDefineInfoList 검증강화
        this['geometry'] = RedGeometry(
            RedBuffer(
                redGL,
                'RedBitmapPointCloud_' + this['_UUID'],
                RedBuffer.ARRAY_BUFFER,
                new Float32Array(interleaveData),
                interleaveDefineInfoList,
                redGL.gl.DYNAMIC_DRAW
            )
        );
        this['material'] = material;
        this['drawMode'] = tGL.POINTS;
        this['useDepthMask'] = false;
    };
    RedBitmapPointCloud.prototype = new RedPointCloud();
    /**DOC:
     {
		 code : 'PROPERTY',
		 title :`material`,
		 description : `material`,
		 return : 'RedBitmapPointCloudMaterial Instance'
	 }
     :DOC*/
    Object.defineProperty(RedBitmapPointCloud.prototype, 'material', {
        get: function () {
            return this['_material'];
        },
        set: function (v) {
            v instanceof RedBitmapPointCloudMaterial
            || RedGLUtil.throwFunc('RedBitmapPointCloud : material - RedBitmapPointCloudMaterial Instance만 허용.');
            this['_material'] = v;
        }
    });
    Object.freeze(RedBitmapPointCloud);
})();
"use strict";
//////////////////////////////////////////////////////////
// 연구중
//////////////////////////////////////////////////////////
var RedParticleEmitter;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedParticleEmitter`,
		 description : `
			 파티클 방출기
			 <h1>이건코드정리부터해야겠음</h1>
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 defineObject : [
			    {type:'Object'},
			    '파티클 정의 오브젝트'
			 ],
			 material : [
			    {type:'RedParticleMaterial Instance'},
			 ]
		 },
		 demo : '../example/particle/RedParticleEmitter.html',
		 extends : [
		    'RedBaseContainer',
		    'RedBaseObject3D'
		 ],
		 return : 'RedParticleEmitter Instance'
	 }
     :DOC*/
    RedParticleEmitter = function (redGL, defineObject, diffuseTexture) {
        if (!(this instanceof RedParticleEmitter)) return new RedParticleEmitter(redGL, defineObject, diffuseTexture);
        RedBaseObject3D['build'].call(this, redGL.gl);
        this['list'] = [];
        this['_interleaveData'] = [];
        this['info'] = defineObject;
        this['geometry'] = RedGeometry(RedBuffer(
            redGL,
            'RedParticleEmitter_Buffer' + RedGL.makeUUID(),
            RedBuffer.ARRAY_BUFFER,
            new Float32Array(this['_interleaveData']),
            [
                RedInterleaveInfo('aVertexPosition', 3),
                RedInterleaveInfo('aPointSize', 1),
                RedInterleaveInfo('aVertexColor', 4)
            ],
            redGL.gl.DYNAMIC_DRAW
        ));
        this['_material'] = RedParticleMaterial(redGL, diffuseTexture);
        this['drawMode'] = redGL.gl.POINTS;
        this['blendSrc'] = redGL.gl.SRC_ALPHA;
        this['blendDst'] = redGL.gl.ONE;
        this['useDepthMask'] = false;
        this['_UUID'] = RedGL.makeUUID();
    };
    RedParticleEmitter.TINT_RANDOM = 'random'
    RedParticleEmitter.QuintIn = 1;
    RedParticleEmitter.QuintOut = 2;
    RedParticleEmitter.QuintInOut = 3;
    //
    RedParticleEmitter.BackIn = 4;
    RedParticleEmitter.BackOut = 5;
    RedParticleEmitter.BackInOut = 6;
    //
    RedParticleEmitter.CircIn = 7;
    RedParticleEmitter.CircOut = 8;
    RedParticleEmitter.CircInOut = 9;
    //
    RedParticleEmitter.CubicIn = 10;
    RedParticleEmitter.CubicOut = 11;
    RedParticleEmitter.CubicInOut = 12;
    //
    RedParticleEmitter.ExpoIn = 13;
    RedParticleEmitter.ExpoOut = 14;
    RedParticleEmitter.ExpoInOut = 15;
    //
    RedParticleEmitter.QuadIn = 16;
    RedParticleEmitter.QuadOut = 17;
    RedParticleEmitter.QuadInOut = 18;
    //
    RedParticleEmitter.QuartIn = 19;
    RedParticleEmitter.QuartOut = 20;
    RedParticleEmitter.QuartInOut = 21;
    //
    RedParticleEmitter.SineIn = 22;
    RedParticleEmitter.SineOut = 23;
    RedParticleEmitter.SineInOut = 24;
    RedParticleEmitter.ElasticIn = 25;
    RedParticleEmitter.ElasticOut = 26;
    RedParticleEmitter.ElasticInOut = 27;
    RedParticleEmitter.prototype = new RedBaseObject3D();
    RedParticleEmitter.prototype['reset'] = function () {
        this.list.length = 0;
        this._interleaveData.length = 0;
    }
    RedParticleEmitter.prototype['update'] = (function () {
        return function (time) {
            time = time + 2000
            var POW, SIN, COS, SQRT, PI, PI2, HPI;
            var i, i2, tParticle;
            var lifeRatio;
            var tIndex;
            var tInfo, tInfoParticle, newParticle;
            ///
            var tEase;
            var tTweenKeyList;
            var tTweenKey;
            var tTargetIndex;
            var n;
            //
            POW = Math.pow;
            SIN = Math.sin;
            COS = Math.cos;
            SQRT = Math.sqrt;
            PI = Math.PI;
            HPI = PI * 0.5;
            PI2 = PI * 2;
            i = this['list']['length'];
            // 맥스보다 갯수가 적으면 추가함
            tInfo = this['info'];
            tInfoParticle = tInfo['particle'];
            if (i < tInfo['max']) {
                i2 = tInfo['emitCount'];
                if (i2 + i > tInfo['max']) i2 = tInfo['max'] - i;
                while (i2--) {
                    newParticle = this['list'][i + i2] = new RedParticleUnit(tInfo['lifeTime']);
                    this['_interleaveData'].push(this.x, this.y, this.z);
                    this['_interleaveData'].push(0);
                    if (tInfo['tint'] == RedParticleEmitter.TINT_RANDOM) this['_interleaveData'].push(Math.random(), Math.random(), Math.random(), 1);
                    else this['_interleaveData'].push(tInfo['tint'][0], tInfo['tint'][1], tInfo['tint'][2], 1);
                    // 룰추가
                    if (tInfo['particle']) {
                        if (tInfoParticle['movementX']) newParticle.addRule('movementX', tInfoParticle['movementX']);
                        if (tInfoParticle['movementY']) newParticle.addRule('movementY', tInfoParticle['movementY']);
                        if (tInfoParticle['movementZ']) newParticle.addRule('movementZ', tInfoParticle['movementZ']);
                        if (tInfoParticle['scale']) newParticle.addRule('scale', tInfoParticle['scale']);
                        if (tInfoParticle['alpha']) newParticle.addRule('alpha', tInfoParticle['alpha']);
                    }
                }
            }
            //////////////////////////////////
            i = this['list']['length'];
            tTweenKeyList = 'movementX,movementY,movementZ,scale,alpha'.split(',');
            while (i--) {
                tParticle = this['list'][i];
                if (!tParticle['startTime']) {
                    tParticle['startTime'] = time;
                    tParticle['age'] = 0;
                }
                tParticle['age'] = time - tParticle['startTime'];
                lifeRatio = tParticle['age'] / tParticle['lifeTime'];
                tIndex = i * 8;
                if (lifeRatio < 1) {
                    //////////////////////////////////
                    //////////////////////////////////
                    n = lifeRatio;
                    ////////////////////////
                    if (!tParticle['startCenter']) tParticle['startCenter'] = [this.x, this.y, this.z];
                    i2 = tTweenKeyList.length;
                    while (i2--) {
                        tTweenKey = tTweenKeyList[i2];
                        n = lifeRatio;
                        // 트윈을 여기서 결정
                        tEase = tParticle[tTweenKey]['ease'];
                        if (tEase) {
                            // QuintIn
                            tEase == 1 ? n = n * n * n * n * n :
                                // QuintOut
                                tEase == 2 ? n = ((n -= 1) * n * n * n * n) + 1 :
                                    // QuintInOut
                                    tEase == 3 ? n = ((n = n * 2) < 1) ? n * n * n * n * n * 0.5 : 0.5 * ((n -= 2) * n * n * n * n + 2) :
                                        ////////////////////////
                                        // BackIn
                                        tEase == 4 ? n = n * n * (n * 1.70158 + n - 1.70158) :
                                            // BackOut
                                            tEase == 5 ? n = (n -= 1) * n * (n * 1.70158 + n + 1.70158) + 1 :
                                                // BackInOut
                                                tEase == 6 ? n = ((n = n * 2) < 1) ? 0.5 * n * n * (n * 1.70158 + n - 1.70158) : 0.5 * (n -= 2) * n * (n * 1.70158 + n + 1.70158) + 1 :
                                                    ////////////////////////
                                                    // CircIn
                                                    tEase == 7 ? n = -1 * (SQRT(1 - n * n) - 1) :
                                                        // CircOut
                                                        tEase == 8 ? n = SQRT(1 - (n -= 1) * n) :
                                                            // CircInOut
                                                            tEase == 9 ? n = ((n = n * 2) < 1) ? -0.5 * (SQRT(1 - n * n) - 1) : 0.5 * SQRT(1 - (n -= 2) * n) + 0.5 :
                                                                ////////////////////////
                                                                // CubicIn
                                                                tEase == 10 ? n = n * n * n :
                                                                    // CubicOut
                                                                    tEase == 11 ? n = ((n -= 1) * n * n) + 1 :
                                                                        // CubicInOut
                                                                        tEase == 12 ? n = ((n = n * 2) < 1) ? n * n * n * 0.5 : 0.5 * ((n -= 2) * n * n + 2) :
                                                                            ////////////////////////
                                                                            // ExpoIn
                                                                            tEase == 13 ? n = n == 0.0 ? 0.0 : POW(2, 10 * (n - 1)) :
                                                                                // ExpoOut
                                                                                tEase == 14 ? n = n == 1.0 ? 1.0 : -POW(2, -10 * n) + 1 :
                                                                                    // ExpoInOut
                                                                                    tEase == 15 ? n = ((n = n * 2) < 1) ? (n == 0.0 ? 0.0 : 0.5 * POW(2, 10 * (n - 1))) : (n == 2.0 ? 1.0 : -0.5 * POW(2, -10 * (n - 1)) + 1) :
                                                                                        ////////////////////////
                                                                                        // QuadIn
                                                                                        tEase == 16 ? n = n * n :
                                                                                            // QuadOut
                                                                                            tEase == 17 ? n = ((2 - n) * n) :
                                                                                                // QuadInOut
                                                                                                tEase == 18 ? n = ((n = n * 2) < 1) ? n * n * 0.5 : 0.5 * ((2 - (n -= 1)) * n + 1) :
                                                                                                    ////////////////////////
                                                                                                    // QuartIn
                                                                                                    tEase == 19 ? n = n * n * n * n :
                                                                                                        // QuartOut
                                                                                                        tEase == 20 ? n = 1 - ((n -= 1) * n * n * n) :
                                                                                                            // QuartInOut
                                                                                                            tEase == 21 ? n = ((n = n * 2) < 1) ? n * n * n * n * 0.5 : 1 - ((n -= 2) * n * n * n * 0.5) :
                                                                                                                ////////////////////////
                                                                                                                // SineIn
                                                                                                                tEase == 22 ? n = -COS(n * HPI) + 1 :
                                                                                                                    // SineOut
                                                                                                                    tEase == 23 ? n = SIN(n * HPI) :
                                                                                                                        // SineInOut
                                                                                                                        tEase == 24 ? n = (-COS(n * PI) + 1) * 0.5 :
                                                                                                                            ////////////////////////
                                                                                                                            // ElasticIn
                                                                                                                            tEase == 25 ? n = n === 0.0 ? 0.0 : n === 1.0 ? 1.0 : -1 * POW(2, 10 * (n -= 1)) * SIN((n - 0.075) * (PI2) / 0.3) :
                                                                                                                                // ElasticOut
                                                                                                                                tEase == 26 ? n = n === 0.0 ? 0.0 : n === 1.0 ? 1.0 : POW(2, -10 * n) * SIN((n - 0.075) * (PI2) / 0.3) + 1 :
                                                                                                                                    // ElasticInOut
                                                                                                                                    tEase == 27 ? n =
                                                                                                                                            (
                                                                                                                                                (n === 0.0 ? 0.0 : (n === 1.0 ? 1.0 : n *= 2)),
                                                                                                                                                    (n < 1) ?
                                                                                                                                                        -0.5 * POW(2, 10 * (n -= 1)) * SIN((n - 0.075) * (PI2) / 0.3) :
                                                                                                                                                        0.5 * POW(2, -10 * (n -= 1)) * SIN((n - 0.075) * (PI2) / 0.3) + 1
                                                                                                                                            ) :
                                                                                                                                        n;
                        }
                        if (tTweenKey == 'movementX') tTargetIndex = 0;
                        if (tTweenKey == 'movementY') tTargetIndex = 1;
                        if (tTweenKey == 'movementZ') tTargetIndex = 2;
                        if (tTweenKey == 'scale') tTargetIndex = 3;
                        if (tTweenKey == 'alpha') tTargetIndex = 7;
                        if (tTargetIndex < 3) {
                            this['_interleaveData'][tIndex + tTargetIndex] = tParticle['startCenter'][tTargetIndex] + tParticle[tTweenKey]['start'] + tParticle[tTweenKey]['gap'] * n;
                        } else {
                            this['_interleaveData'][tIndex + tTargetIndex] = tParticle[tTweenKey]['start'] + tParticle[tTweenKey]['gap'] * n;
                        }
                        // 중력계산
                        if (tInfo['gravity']) tParticle['_gravitySum'] -= tInfo['gravity'];
                        this['_interleaveData'][tIndex + 1] += tParticle['_gravitySum'];
                    }
                } else {
                    this['_interleaveData'][tIndex + 0] = tParticle['startCenter'][0] = this.x;
                    this['_interleaveData'][tIndex + 1] = tParticle['startCenter'][1] = this.y;
                    this['_interleaveData'][tIndex + 2] = tParticle['startCenter'][2] = this.z;
                    this['_interleaveData'][tIndex + 3] = tParticle['scale']['start'];
                    if (tInfo['tint'] == RedParticleEmitter.TINT_RANDOM) {
                        this['_interleaveData'][tIndex + 4] = Math.random();
                        this['_interleaveData'][tIndex + 5] = Math.random();
                        this['_interleaveData'][tIndex + 6] = Math.random();
                    } else {
                        this['_interleaveData'][tIndex + 4] = tInfo['tint'][0];
                        this['_interleaveData'][tIndex + 5] = tInfo['tint'][1];
                        this['_interleaveData'][tIndex + 6] = tInfo['tint'][2];
                    }
                    this['_interleaveData'][tIndex + 7] = 0;

                    tParticle['_gravitySum'] = 0;
                    tParticle['startTime'] = null;
                    tParticle['age'] = -1;
                }
            }
            this['_geometry']['interleaveBuffer'].upload(new Float32Array(this['_interleaveData']))
        }
    })();
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`diffuseTexture`,
		 description :`diffuseTexture`,
		 return : 'RedBitmapTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedParticleEmitter', 'diffuseTexture', 'sampler2D', {
        callback: function (v) {
            this.material.diffuseTexture = v
        }
    });
    Object.freeze(RedParticleEmitter);
})();
"use strict";
var RedBox;
(function () {
    var makeData;
    makeData = (function () {
        var numberOfVertices;
        var groupStart;
        var buildPlane;
        buildPlane = function (interleaveData, indexData, u, v, w, udir, vdir, width, height, depth, gridX, gridY) {
            var segmentWidth = width / gridX;
            var segmentHeight = height / gridY;
            var widthHalf = width / 2, heightHalf = height / 2;
            var depthHalf = depth / 2;
            var gridX1 = gridX + 1, gridY1 = gridY + 1;
            var vertexCounter = 0;
            var groupCount = 0;
            var ix, iy;
            var vector = [];
            for (iy = 0; iy < gridY1; iy++) {
                var y = iy * segmentHeight - heightHalf;
                for (ix = 0; ix < gridX1; ix++) {
                    var x = ix * segmentWidth - widthHalf;
                    // set values to correct vector component
                    vector[u] = x * udir, vector[v] = y * vdir, vector[w] = depthHalf,
                        interleaveData.push(vector.x, vector.y, vector.z), // position
                        vector[u] = 0, vector[v] = 0, vector[w] = depth > 0 ? 1 : -1,
                        interleaveData.push(vector.x, vector.y, vector.z), // normal
                        interleaveData.push(ix / gridX,  (iy / gridY)), // texcoord
                        vertexCounter += 1; // counters
                }
            }
            // indices
            for (iy = 0; iy < gridY; iy++) {
                for (ix = 0; ix < gridX; ix++) {
                    var a = numberOfVertices + ix + gridX1 * iy;
                    var b = numberOfVertices + ix + gridX1 * (iy + 1);
                    var c = numberOfVertices + (ix + 1) + gridX1 * (iy + 1);
                    var d = numberOfVertices + (ix + 1) + gridX1 * iy;
                    indexData.push(a, b, d, b, c, d);
                    groupCount += 6;
                }
            }
            groupStart += groupCount;
            numberOfVertices += vertexCounter;
        };
        return function (redGL, type, width, height, depth, wSegments, hSegments, dSegments) {
            ////////////////////////////////////////////////////////////////////////////
            // 데이터 생성!
            // buffers Data
            var interleaveData = [];
            var indexData = [];
            numberOfVertices = 0;
            groupStart = 0;
            buildPlane(interleaveData, indexData, 'z', 'y', 'x', -1, -1, depth, height, width, dSegments, hSegments, 0); // px
            buildPlane(interleaveData, indexData, 'z', 'y', 'x', 1, -1, depth, height, -width, dSegments, hSegments, 1); // nx
            buildPlane(interleaveData, indexData, 'x', 'z', 'y', 1, 1, width, depth, height, wSegments, dSegments, 2); // py
            buildPlane(interleaveData, indexData, 'x', 'z', 'y', 1, -1, width, depth, -height, wSegments, dSegments, 3); // ny
            buildPlane(interleaveData, indexData, 'x', 'y', 'z', 1, -1, width, height, depth, wSegments, hSegments, 4); // pz
            buildPlane(interleaveData, indexData, 'x', 'y', 'z', -1, -1, width, height, -depth, wSegments, hSegments, 5); // nz
            ////////////////////////////////////////////////////////////////////////////
            // console.log(redGL['__datas']['RedPrimitive'])
            return {
                interleaveData: interleaveData,
                indexData: indexData,
                type: type,
                interleaveBuffer: RedBuffer(
                    redGL,
                    type + '_interleaveBuffer',
                    RedBuffer.ARRAY_BUFFER,
                    new Float32Array(interleaveData),
                    [
                        RedInterleaveInfo('aVertexPosition', 3),
                        RedInterleaveInfo('aVertexNormal', 3),
                        RedInterleaveInfo('aTexcoord', 2)
                    ]
                ),
                indexBuffer: RedBuffer(
                    redGL,
                    type + '_indexBuffer',
                    RedBuffer.ELEMENT_ARRAY_BUFFER,
                    new Uint16Array(indexData)
                )
            }
        }
    })();
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedBox`,
		 description : `
			 Box 형태의 RedGeometry 생성
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 width : [
				 {type:'uint'},
				 '기본값 : 1'
			 ],
			 height : [
				 {type:'uint'},
				 '기본값 : 1'
			 ],
			 depth : [
				 {type:'uint'},
				 '기본값 : 1'
			 ],
			 widthSegments : [
				 {type:'uint'},
				 '기본값 : 1'
			 ],
			 heightSegments : [
				 {type:'uint'},
				 '기본값 : 1'
			 ],
			 depthSegments : [
				 {type:'uint'},
				 '기본값 : 1'
			 ]
		 },
		 extends : [
		    'RedGeometry'
		 ],
		 demo : '../example/primitives/RedBox.html',
		 example : `
			 RedBox(RedGL Instance);
			 RedBox(RedGL Instance, 1, 1, 1);
			 RedBox(RedGL Instance, 1, 1, 1, 16, 16, 16);
		 `,
		 return : 'RedBox Instance'
	 }
     :DOC*/
    RedBox = function (redGL, width, height, depth, wSegments, hSegments, dSegments) {
        if (!(this instanceof RedBox)) return new RedBox(redGL, width, height, depth, wSegments, hSegments, dSegments);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedBox : RedGL Instance만 허용.', redGL);
        var tType, tPrimitiveData;
        width = width || 1;
        height = height || 1;
        depth = depth || 1;
        wSegments = wSegments || 1;
        hSegments = hSegments || 1;
        dSegments = dSegments || 1;
        tType = 'RedBox' + '_' + width + '_' + height + '_' + depth + '_' + wSegments + '_' + hSegments + '_' + dSegments;
        // 유일키 방어
        if (!redGL['_datas']['Primitives']) redGL['_datas']['Primitives'] = {};
        if (redGL['_datas']['Primitives'][tType]) return redGL['_datas']['Primitives'][tType];
        else redGL['_datas']['Primitives'][tType] = this;
        //
        tPrimitiveData = makeData(redGL, tType, width, height, depth, wSegments, hSegments, dSegments);
        this['interleaveBuffer'] = tPrimitiveData['interleaveBuffer'];
        this['indexBuffer'] = tPrimitiveData['indexBuffer'];
        this['interleaveBuffer']['isPrimitiveBuffer'] = true
        this['indexBuffer']['isPrimitiveBuffer'] = true
        this['_UUID'] = RedGL.makeUUID();
        console.log(this)
    };
    RedBox.prototype = Object.create(RedGeometry.prototype);
    Object.freeze(RedBox);
})();

"use strict";
var RedCylinder;
(function () {
    var makeData;
    makeData = (function () {
        var generateTorso;
        var generateCap;
        //TODO 정리
        return function (redGL, type, radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength) {
            ////////////////////////////////////////////////////////////////////////////
            // 데이터 생성!
            // buffers Data
            var interleaveData = [];
            var indexData = [];
            //
            var index = 0;
            var indexArray = [];
            var halfHeight = height / 2;
            var groupStart = 0;

            generateTorso = function () {
                var x, y;
                var normal = [];
                var vertex = [];
                var groupCount = 0;
                // this will be used to calculate the normal
                var slope = (radiusBottom - radiusTop) / height;
                // generate vertices, normals and uvs
                for (y = 0; y <= heightSegments; y++) {
                    var indexRow = [];
                    var v = y / heightSegments;
                    // calculate the radius of the current row
                    var radius = v * (radiusBottom - radiusTop) + radiusTop;
                    for (x = 0; x <= radialSegments; x++) {
                        var u = x / radialSegments;
                        var theta = u * thetaLength + thetaStart;
                        var sinTheta = Math.sin(theta);
                        var cosTheta = Math.cos(theta);
                        // vertex
                        vertex[0] = radius * sinTheta;
                        vertex[1] = -v * height + halfHeight;
                        vertex[2] = radius * cosTheta;
                        interleaveData.push(vertex[0], vertex[1], vertex[2]);
                        // normal
                        normal[0] = sinTheta;
                        normal[1] = slope;
                        normal[2] = cosTheta;
                        vec3.normalize(normal, normal);
                        interleaveData.push(normal[0], normal[1], normal[2]);
                        // uv
                        interleaveData.push(u, v);
                        // save index of vertex in respective row
                        indexRow.push(index++);
                    }
                    // now save vertices of the row in our index array
                    indexArray.push(indexRow);
                }
                // generate indices
                for (x = 0; x < radialSegments; x++) {
                    for (y = 0; y < heightSegments; y++) {
                        // we use the index array to access the correct indices
                        var a = indexArray [y][x];
                        var b = indexArray[y + 1][x];
                        var c = indexArray[y + 1][x + 1];
                        var d = indexArray[y][x + 1];
                        // faces
                        indexData.push(a, b, d);
                        indexData.push(b, c, d);
                        // update group counter
                        groupCount += 6;
                    }
                }
                groupStart += groupCount;
            };
            generateCap = function (top) {
                var x, centerIndexStart, centerIndexEnd;
                var uv = [];
                var vertex = [];
                var groupCount = 0;
                var radius = (top === true) ? radiusTop : radiusBottom;
                var sign = (top === true) ? 1 : -1;
                // save the index of the first center vertex
                centerIndexStart = index;
                // first we generate the center vertex data of the cap.
                // because the geometry needs one set of uvs per face,
                // we must generate a center vertex per face/segment
                for (x = 1; x <= radialSegments; x++) {
                    // vertex
                    interleaveData.push(0, halfHeight * sign, 0);
                    // normal
                    interleaveData.push(0, sign, 0);
                    // uv
                    interleaveData.push(0.5, 0.5);
                    // increase index
                    index++;
                }
                // save the index of the last center vertex
                centerIndexEnd = index;
                // now we generate the surrounding vertices, normals and uvs
                for (x = 0; x <= radialSegments; x++) {
                    var u = x / radialSegments;
                    var theta = u * thetaLength + thetaStart;
                    var cosTheta = Math.cos(theta);
                    var sinTheta = Math.sin(theta);
                    // vertex
                    vertex[0] = radius * sinTheta;
                    vertex[1] = halfHeight * sign;
                    vertex[2] = radius * cosTheta;
                    interleaveData.push(vertex[0], vertex[1], vertex[2]);
                    // normal
                    interleaveData.push(0, sign, 0);
                    // uv
                    uv[0] = (cosTheta * 0.5) + 0.5;
                    uv[1] = (sinTheta * 0.5 * sign) + 0.5;
                    interleaveData.push(uv[0], 1-uv[1]);
                    // increase index
                    index++;
                }
                // generate indices
                for (x = 0; x < radialSegments; x++) {
                    var c = centerIndexStart + x;
                    var i = centerIndexEnd + x;
                    if (top === true) {
                        // face top
                        indexData.push(i, i + 1, c);
                    } else {
                        // face bottom
                        indexData.push(i + 1, i, c);
                    }
                    groupCount += 3;
                }
                // calculate new start value for groups
                groupStart += groupCount;

            }
            generateTorso();
            if (openEnded === false) {
                if (radiusTop > 0) generateCap(true);
                if (radiusBottom > 0) generateCap(false);
            }

            ////////////////////////////////////////////////////////////////////////////
            // console.log(redGL['__datas']['RedPrimitive'])
            return {
                interleaveData: interleaveData,
                indexData: indexData,
                type: type,
                interleaveBuffer: RedBuffer(
                    redGL,
                    type + '_interleaveBuffer',
                    RedBuffer.ARRAY_BUFFER,
                    new Float32Array(interleaveData),
                    [
                        RedInterleaveInfo('aVertexPosition', 3),
                        RedInterleaveInfo('aVertexNormal', 3),
                        RedInterleaveInfo('aTexcoord', 2)
                    ]
                ),
                indexBuffer: RedBuffer(
                    redGL,
                    type + '_indexBuffer',
                    RedBuffer.ELEMENT_ARRAY_BUFFER,
                    new Uint16Array(indexData)
                )
            }
        }
    })();
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedCylinder`,
		 description : `
			 RedCylinder 형태의 RedGeometry 생성
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 radiusTop : [
				 {type:'number'},
				 '기본값 : 1'
			 ],
			 radiusBottom : [
				 {type:'number'},
				 '기본값 : 1'
			 ],
			 height : [
				 {type:'number'},
				 '기본값 : 1'
			 ],
			 radialSegments : [
				 {type:'uint'},
				 '기본값 : 8'
			 ],
			 heightSegments : [
				 {type:'uint'},
				 '기본값 : 1'
			 ],
			 openEnded : [
				 {type:'Boolean'},
				 '기본값 : false'
			 ],
			 thetaStart : [
				 {type:'number'},
				 'thetaStart'
			 ],
			 thetaLength : [
				 {type:'number'},
				 'thetaLength'
			 ]
		 },
		 extends : [
		    'RedGeometry'
		 ],
		 demo : '../example/primitives/RedCylinder.html',
		 return : 'RedCylinder Instance'
	 }
     :DOC*/
    RedCylinder = function (redGL, radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength) {
        if (!(this instanceof RedCylinder)) return new RedCylinder(redGL, radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedPrimitive : RedGL Instance만 허용.', redGL);
        var tType, tPrimitiveData;
        radiusTop = radiusTop !== undefined ? radiusTop : 1;
        radiusBottom = radiusBottom !== undefined ? radiusBottom : 1;
        height = height !== undefined ? height : 1;
        radialSegments = Math.floor(radialSegments) || 8;
        heightSegments = Math.floor(heightSegments) || 1;
        openEnded = openEnded !== undefined ? openEnded : false;
        thetaStart = thetaStart !== undefined ? thetaStart : 0.0;
        thetaLength = thetaLength !== undefined ? thetaLength : Math.PI * 2;
        tType = 'RedCylinder' + '_' + radiusTop + '_' + radiusBottom + '_' + height + '_' + radialSegments + '_' + heightSegments + '_' + openEnded + '_' + thetaStart + '_' + thetaLength;
        // 유일키 방어
        if (!redGL['_datas']['Primitives']) redGL['_datas']['Primitives'] = {};
        if (redGL['_datas']['Primitives'][tType]) return redGL['_datas']['Primitives'][tType];
        else redGL['_datas']['Primitives'][tType] = this;
        //
        tPrimitiveData = makeData(redGL, tType, radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength);
        this['interleaveBuffer'] = tPrimitiveData['interleaveBuffer'];
        this['indexBuffer'] = tPrimitiveData['indexBuffer'];
        this['interleaveBuffer']['isPrimitiveBuffer'] = true
        this['indexBuffer']['isPrimitiveBuffer'] = true
        this['_UUID'] = RedGL.makeUUID();
        console.log(this)
    };
    RedCylinder.prototype = Object.create(RedGeometry.prototype);
    Object.freeze(RedCylinder);
})();
"use strict";
var RedPlane;
(function () {
    var makeData;
    makeData = (function () {
        var width_half, height_half;
        var gridX, gridY;
        var gridX1, gridY1;
        var segment_width, segment_height;
        var ix, iy;
        var tX, tY;
        var a, b, c, d;
        return function (redGL, type, width, height, wSegments, hSegments, flipY) {
            width_half = width / 2;
            height_half = height / 2;
            gridX = Math.floor(wSegments) || 1;
            gridY = Math.floor(hSegments) || 1;
            gridX1 = gridX + 1;
            gridY1 = gridY + 1;
            segment_width = width / gridX;
            segment_height = height / gridY;
            ////////////////////////////////////////////////////////////////////////////
            // 데이터 생성!
            // buffers Datas
            var interleaveData = [];
            var indexData = [];
            // interleaveData
            for (iy = 0; iy < gridY1; iy++) {
                tY = iy * segment_height - height_half;
                for (ix = 0; ix < gridX1; ix++) {
                    tX = ix * segment_width - width_half;
                    // position, normal, texcoord
                    interleaveData.push(tX, -tY, 0, 0, 0, 1, ix / gridX, flipY ? (1 - (iy / gridY)) : (iy / gridY));
                }
            }
            // indexData
            for (iy = 0; iy < gridY; iy++) {
                for (ix = 0; ix < gridX; ix++) {
                    a = ix + gridX1 * iy;
                    b = ix + gridX1 * (iy + 1);
                    c = (ix + 1) + gridX1 * (iy + 1);
                    d = (ix + 1) + gridX1 * iy;
                    indexData.push(a, b, d, b, c, d)
                }
            }
            ////////////////////////////////////////////////////////////////////////////
            return {
                interleaveData: interleaveData,
                indexData: indexData,
                type: type,
                interleaveBuffer: RedBuffer(
                    redGL,
                    type + '_interleaveBuffer',
                    RedBuffer.ARRAY_BUFFER,
                    new Float32Array(interleaveData),
                    [
                        RedInterleaveInfo('aVertexPosition', 3),
                        RedInterleaveInfo('aVertexNormal', 3),
                        RedInterleaveInfo('aTexcoord', 2)
                    ]
                ),
                indexBuffer: RedBuffer(
                    redGL,
                    type + '_indexBuffer',
                    RedBuffer.ELEMENT_ARRAY_BUFFER,
                    new Uint32Array(indexData)
                )
            }
        }
    })();
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedPlane`,
		 description : `
			 RedPlane Instance 생성기.
			 Box 형태의 RedGeometry 생성
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 width : [
				 {type:'uint'},
				 '기본값 : 1'
			 ],
			 height : [
				 {type:'uint'},
				 '기본값 : 1'
			 ],
			 widthSegments : [
				 {type:'uint'},
				 '기본값 : 1'
			 ],
			 heightSegments : [
				 {type:'uint'},
				 '기본값 : 1'
			 ]
		 },
		 extends : [
		    'RedGeometry'
		 ],
		 demo : '../example/primitives/RedPlane.html',
		 example : `
			 RedPlane(RedGL Instance);
			 RedPlane(RedGL Instance, 1, 1);
			 RedPlane(RedGL Instance, 1, 1, 16, 16);
		 `,
		 return : 'RedPlane Instance'
	 }
     :DOC*/
    RedPlane = function (redGL, width, height, wSegments, hSegments, flipY) {
        if (!(this instanceof RedPlane)) return new RedPlane(redGL, width, height, wSegments, hSegments, flipY);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedPlane : RedGL Instance만 허용.', redGL);
        var tType, tPrimitiveData;
        width = width || 1;
        height = height || 1;
        wSegments = wSegments || 1;
        hSegments = hSegments || 1;
        tType = 'RedPlane' + '_' + width + '_' + height + '_' + wSegments + '_' + hSegments+'_'+flipY;
        // 유일키 방어
        if (!redGL['_datas']['Primitives']) redGL['_datas']['Primitives'] = {};
        if (redGL['_datas']['Primitives'][tType]) return redGL['_datas']['Primitives'][tType];
        else redGL['_datas']['Primitives'][tType] = this;
        //
        tPrimitiveData = makeData(redGL, tType, width, height, wSegments, hSegments, flipY);
        this['interleaveBuffer'] = tPrimitiveData['interleaveBuffer'];
        this['indexBuffer'] = tPrimitiveData['indexBuffer'];
        this['interleaveBuffer']['isPrimitiveBuffer'] = true
        this['indexBuffer']['isPrimitiveBuffer'] = true
        this['_UUID'] = RedGL.makeUUID();
        console.log(this);
    };
    RedPlane.prototype = Object.create(RedGeometry.prototype);
    Object.freeze(RedPlane);
})();
"use strict";
var RedSphere;
(function () {
    var makeData;
    makeData = (function () {
        var thetaEnd;
        var ix, iy;
        var index
        var grid = [];
        var a, b, c, d;
        var vertex = new Float32Array([0, 0, 0]);
        var normal = new Float32Array([0, 0, 0]);
        return function (redGL, type, radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) {
            thetaEnd = thetaStart + thetaLength;
            index = 0;
            grid.length = 0;
            vertex[0] = 0;
            vertex[1] = 0;
            vertex[2] = 0;
            normal[0] = 0;
            normal[1] = 0;
            normal[2] = 0;
            ////////////////////////////////////////////////////////////////////////////
            // 데이터 생성!
            // buffers Data
            var interleaveData = [];
            var indexData = [];
            // generate vertices, normals and uvs
            for (iy = 0; iy <= heightSegments; iy++) {
                var verticesRow = [];
                var v = iy / heightSegments;
                for (ix = 0; ix <= widthSegments; ix++) {
                    var u = ix / widthSegments;
                    // vertex
                    vertex.x = -radius * Math.cos(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength);
                    vertex.y = radius * Math.cos(thetaStart + v * thetaLength);
                    vertex.z = radius * Math.sin(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength);
                    interleaveData.push(vertex.x, vertex.y, vertex.z);
                    // normal
                    normal[0] = vertex.x;
                    normal[1] = vertex.y;
                    normal[2] = vertex.z;
                    vec3.normalize(normal, normal);
                    interleaveData.push(normal[0], normal[1], normal[2]);
                    // uv
                    interleaveData.push(u,  v);
                    verticesRow.push(index++);
                }
                grid.push(verticesRow);
            }
            // indices
            for (iy = 0; iy < heightSegments; iy++) {
                for (ix = 0; ix < widthSegments; ix++) {
                    a = grid[iy][ix + 1];
                    b = grid[iy][ix];
                    c = grid[iy + 1][ix];
                    d = grid[iy + 1][ix + 1];
                    if (iy !== 0 || thetaStart > 0) indexData.push(a, b, d);
                    if (iy !== heightSegments - 1 || thetaEnd < Math.PI) indexData.push(b, c, d);
                }
            }
            ////////////////////////////////////////////////////////////////////////////
            // console.log(redGL['__datas']['RedPrimitive'])
            return {
                interleaveData: interleaveData,
                indexData: indexData,
                type: type,
                interleaveBuffer: RedBuffer(
                    redGL,
                    type + '_interleaveBuffer',
                    RedBuffer.ARRAY_BUFFER,
                    new Float32Array(interleaveData),
                    [
                        RedInterleaveInfo('aVertexPosition', 3),
                        RedInterleaveInfo('aVertexNormal', 3),
                        RedInterleaveInfo('aTexcoord', 2)
                    ]
                ),
                indexBuffer: RedBuffer(
                    redGL,
                    type + '_indexBuffer',
                    RedBuffer.ELEMENT_ARRAY_BUFFER,
                    new Uint16Array(indexData)
                )
            }
        }
    })();
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedSphere`,
		 description : `
			 RedSphere Instance 생성기.
			 Box 형태의 RedGeometry 생성
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 radius : [
				 {type:'number'},
				 '기본값 : 1'
			 ],
			 widthSegments : [
				 {type:'uint'},
				 '기본값 : 8'
			 ],
			 heightSegments : [
				 {type:'uint'},
				 '기본값 : 6'
			 ],
			 phiStart : [
				 {type:'uint'},
				 '기본값 : 0'
			 ],
			 phiLength : [
				 {type:'uint'},
				 '기본값 : Math.PI * 2'
			 ],
			 thetaStart : [
				 {type:'uint'},
				 '기본값 : 0'
			 ],
			 thetaLength : [
				 {type:'Number'},
				 '기본값 : Math.PI'
			 ]
		 },

		 extends : [
		    'RedGeometry'
		 ],
		 demo : '../example/primitives/RedSphere.html',
		 example : `
			 RedSphere(RedGL Instance);
			 RedSphere(RedGL Instance, 1);
			 RedSphere(RedGL Instance, 1, 16,16,16);
		 `,
		 return : 'RedSphere Instance'
	 }
     :DOC*/
    RedSphere = function (redGL, radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) {
        if (!(this instanceof RedSphere)) return new RedSphere(redGL, radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedPrimitive : RedGL Instance만 허용.', redGL);
        var tType, tPrimitiveData;
        radius = radius || 1;
        widthSegments = Math.max(3, Math.floor(widthSegments) || 8);
        heightSegments = Math.max(2, Math.floor(heightSegments) || 6);
        phiStart = phiStart !== undefined ? phiStart : 0;
        phiLength = phiLength !== undefined ? phiLength : Math.PI * 2;
        thetaStart = thetaStart !== undefined ? thetaStart : 0;
        thetaLength = thetaLength !== undefined ? thetaLength : Math.PI;
        tType = 'RedSphere' + '_' + radius + '_' + widthSegments + '_' + heightSegments + '_' + phiStart + '_' + phiLength + '_' + thetaStart + '_' + thetaLength;
        // 유일키 방어
        if (!redGL['_datas']['Primitives']) redGL['_datas']['Primitives'] = {};
        if (redGL['_datas']['Primitives'][tType]) return redGL['_datas']['Primitives'][tType];
        else redGL['_datas']['Primitives'][tType] = this;
        //
        tPrimitiveData = makeData(redGL, tType, radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
        this['interleaveBuffer'] = tPrimitiveData['interleaveBuffer'];
        this['indexBuffer'] = tPrimitiveData['indexBuffer'];
        this['interleaveBuffer']['isPrimitiveBuffer'] = true
        this['indexBuffer']['isPrimitiveBuffer'] = true
        this['_UUID'] = RedGL.makeUUID();
        console.log(this)
    };
    RedSphere.prototype = Object.create(RedGeometry.prototype);
    Object.freeze(RedSphere);
})();
"use strict";
var RedProgram;
(function () {
    var makeWebGLProgram, updateLocation;
    var samplerIndex, MAX_SAMPLER_INDEX;
    samplerIndex = 2;
    makeWebGLProgram = (function () {
        var tProgram;
        var tVMap, tFMap, k;
        return function (gl, key, vs, fs) {
            tProgram = gl.createProgram();
            gl.attachShader(tProgram, vs['webglShader']);
            gl.attachShader(tProgram, fs['webglShader']);
            // 유니폼 파싱데이터 찾고
            if (vs['parseData']['uniform']) {
                tVMap = vs['parseData']['uniform']['map'];
                tFMap = fs['parseData']['uniform']['map'];
                // 프레그먼트와 버텍스에 중복 유니폼 선언이 존재하는지 검색함
                for (k in tVMap) if (tFMap[k]) RedGLUtil.throwFunc("vertexShader와 fragmentShader에 중복된 유니폼 선언이 존재함.", "중복선언 : " + k);
            }
            // 상수 파싱데이터 찾고
            if (vs['parseData']['const']) {
                tVMap = vs['parseData']['const']['map'];
                tFMap = fs['parseData']['const']['map'];
                // 프레그먼트와 버텍스에 중복 상수 선언이 존재하는지 검색함
                for (k in tVMap) if (tFMap[k]) RedGLUtil.throwFunc("vertexShader와 fragmentShader에 중복된 상수 선언이 존재함.", "중복선언 : " + k);
            }
            gl.linkProgram(tProgram);
            if (!gl.getProgramParameter(tProgram, gl.LINK_STATUS)) RedGLUtil.throwFunc("RedProgram : 프로그램을 초기화 할 수 없습니다.", gl.getProgramInfoLog(tProgram));
            // 프로그램 정보를 입력함.
            tProgram['key'] = key;
            tProgram['vShaderKey'] = vs['key'];
            tProgram['vShaderOriginSource'] = vs['originSource'];
            tProgram['fShaderKey'] = fs['key'];
            tProgram['fShaderOriginKey'] = vs['originSource'];
            return tProgram;
        }
    })();
    updateLocation = (function () {
        var AttributeLocationInfo;
        var UniformLocationInfo;
        var materialPropertyNameMAP = {};
        var totalUpdateLocationTime = 0;
        AttributeLocationInfo = function () {
        };
        UniformLocationInfo = function () {
        };
        return function (self, gl, shader) {
            var startTime = performance.now();
            var i, v, tList;
            var tIndex;
            // attributeLocation 정보 생성
            if (shader['parseData']['attribute']) {
                tList = shader['parseData']['attribute']['list'];
                i = tList.length;
                while (i--) {
                    // shader['parseData']['attribute']['list'].forEach(function (v) {
                    v = tList[i];
                    var tLocationInfo = new AttributeLocationInfo();
                    tLocationInfo['_UUID'] = RedGL.makeUUID();
                    tLocationInfo['location'] = gl.getAttribLocation(self['webglProgram'], v['name']);
                    if (tLocationInfo['location'] == -1) tLocationInfo['msg'] = '쉐이더 main 함수에서 사용되고 있지 않음', tLocationInfo['use'] = false;
                    else tLocationInfo['use'] = true;
                    tLocationInfo['attributeType'] = v['attributeType'];
                    tLocationInfo['name'] = v['name'];
                    tLocationInfo['enabled'] = false;
                    tIndex = self['attributeLocation'].length;
                    if (tLocationInfo['location'] != -1) self['attributeLocation'][tIndex] = tLocationInfo;
                    self['attributeLocation'][tLocationInfo['name']] = tLocationInfo;
                    // })
                }
            }
            // uniformLocation 정보 생성
            if (shader['parseData']['uniform']) {
                tList = shader['parseData']['uniform']['list'];
                i = tList.length;
                while (i--) {
                    // shader['parseData']['uniform']['list'].forEach(function (v) {
                    v = tList[i];
                    var arrayNum, tRenderType, tRenderTypeIndex, tRenderMethod;
                    var tLocationInfo = new UniformLocationInfo();
                    tLocationInfo['_UUID'] = RedGL.makeUUID();
                    tLocationInfo['uniformType'] = v['uniformType'];
                    // renderType 조사
                    arrayNum = v['arrayNum'];
                    tRenderTypeIndex = 100000;
                    switch (v['uniformType']) {
                        case 'sampler2D':
                            tRenderType = 'sampler2D';
                            tRenderTypeIndex = 0;
                            tRenderMethod = 'uniform1i';
                            tLocationInfo['samplerIndex'] = samplerIndex;
                            samplerIndex++;
                            if (samplerIndex == MAX_SAMPLER_INDEX) samplerIndex = 2;
                            break;
                        case 'samplerCube':
                            tRenderType = 'samplerCube';
                            tRenderTypeIndex = 1;
                            tRenderMethod = 'uniform1i';
                            tLocationInfo['samplerIndex'] = samplerIndex;
                            samplerIndex++;
                            if (samplerIndex == MAX_SAMPLER_INDEX) samplerIndex = 2;
                            break;
                        case 'float':
                            tRenderType = 'float';
                            tRenderTypeIndex = arrayNum ? 12 : 11;
                            tRenderMethod = arrayNum ? 'uniform1fv' : 'uniform1f';
                            break;
                        case 'int':
                            tRenderType = 'int';
                            tRenderTypeIndex = arrayNum ? 12 : 11;
                            tRenderMethod = arrayNum ? 'uniform1iv' : 'uniform1i';
                            break;
                        case 'bool':
                            tRenderType = 'bool';
                            tRenderTypeIndex = arrayNum ? 12 : 11;
                            tRenderMethod = arrayNum ? 'uniform1iv' : 'uniform1i';
                            break;
                        case 'vec4':
                            tRenderType = 'vec';
                            tRenderTypeIndex = 12;
                            tRenderMethod = 'uniform4fv';
                            break;
                        case 'vec3':
                            tRenderType = 'vec';
                            tRenderTypeIndex = 12;
                            tRenderMethod = 'uniform3fv';
                            break;
                        case 'vec2':
                            tRenderType = 'vec';
                            tRenderTypeIndex = 12;
                            tRenderMethod = 'uniform2fv';
                            break;
                        case 'ivec4':
                            tRenderType = 'vec';
                            tRenderTypeIndex = 12;
                            tRenderMethod = 'uniform4iv';
                            break;
                        case 'ivec3':
                            tRenderType = 'vec';
                            tRenderTypeIndex = 12;
                            tRenderMethod = 'uniform3iv';
                            break;
                        case 'ivec2':
                            tRenderType = 'vec';
                            tRenderTypeIndex = 12;
                            tRenderMethod = 'uniform2iv';
                            break;
                        case 'bvec4':
                            tRenderType = 'vec';
                            tRenderTypeIndex = 12;
                            tRenderMethod = 'uniform4iv';
                            break;
                        case 'bvec3':
                            tRenderType = 'vec';
                            tRenderTypeIndex = 12;
                            tRenderMethod = 'uniform3iv';
                            break;
                        case 'bvec2':
                            tRenderType = 'vec';
                            tRenderTypeIndex = 12;
                            tRenderMethod = 'uniform2iv';
                            break;
                        case 'mat4':
                            tRenderType = 'mat';
                            tRenderTypeIndex = 13;
                            tRenderMethod = 'uniformMatrix4fv';
                            break;
                        case 'mat3':
                            tRenderType = 'mat';
                            tRenderTypeIndex = 13;
                            tRenderMethod = 'uniformMatrix3fv';
                            break;
                        case 'mat2':
                            tRenderType = 'mat';
                            tRenderTypeIndex = 13;
                            tRenderMethod = 'uniformMatrix2fv';
                            break;
                    }
                    // console.log('samplerIndex', samplerIndex)
                    tLocationInfo['location'] = gl.getUniformLocation(self['webglProgram'], v['name']);
                    tLocationInfo['renderType'] = tRenderType;
                    tLocationInfo['renderMethod'] = tRenderMethod;
                    tLocationInfo['renderTypeIndex'] = tRenderTypeIndex;
                    tLocationInfo['name'] = v['name'];
                    if (!materialPropertyNameMAP[v['name']]) materialPropertyNameMAP[v['name']] = v['name'].charAt(1).toLowerCase() + v['name'].substr(2);
                    tLocationInfo['materialPropertyName'] = materialPropertyNameMAP[v['name']];
                    tLocationInfo['arrayNum'] = v['arrayNum'];
                    if (!tLocationInfo['location']) {
                        tLocationInfo['msg'] = '쉐이더 main 함수에서 사용되고 있지 않음';
                        tLocationInfo['use'] = false;
                    }
                    else tLocationInfo['use'] = true;
                    if (v['systemUniformYn']) {
                        tIndex = self['systemUniformLocation'].length;
                        if (tLocationInfo['use']) self['systemUniformLocation'][tIndex] = tLocationInfo;
                        self['systemUniformLocation'][v['name']] = tLocationInfo;
                    } else {
                        tIndex = self['uniformLocation'].length;
                        if (tLocationInfo['use']) self['uniformLocation'][tIndex] = tLocationInfo;
                        self['uniformLocation'][v['name']] = tLocationInfo;
                    }
                }
                // })
            }
            totalUpdateLocationTime += performance.now() - startTime;
            console.log('totalUpdateLocationTime', self,totalUpdateLocationTime);
        }
    })();
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedProgram`,
		 description : `
			 RedProgram Instance 생성기
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 key : [
				 {type:'String'},
				 `고유키`
			 ],
			 vSource : [
				 {type:'string'},
				 `버텍스 쉐이더 소스`
			 ],
			 fSource : [
				 {type:'string'},
				 `프레그먼트 쉐이더 소스`
			 ]
		 },
		 return : 'RedProgram Instance'
	 }
     :DOC*/
    RedProgram = function (redGL, key, vSource, fSource) {
        var tGL;
        var vertexShader, fragmentShader;
        if (!(this instanceof RedProgram)) return new RedProgram(redGL, key, vSource, fSource);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedProgram : RedGL Instance만 허용.', '입력값 : ' + redGL);
        typeof key == 'string' || RedGLUtil.throwFunc('RedProgram : key - 문자열만 허용.', '입력값 : ' + key);
        tGL = redGL.gl;
        // 데이터 공간확보
        if (!redGL['_datas']['RedProgram']) {
            redGL['_datas']['RedProgram'] = {};
            redGL['_datas']['RedProgramList'] = [];
        }
        if (RedProgram.hasKey(redGL, key)) return redGL['_datas']['RedProgram'][key];
        else {
            vertexShader = vSource ? RedShader(redGL, key + '_VS', RedShader['VERTEX'], vSource) : null;
            fragmentShader = fSource ? RedShader(redGL, key + '_FS', RedShader['FRAGMENT'], fSource) : null;
            if (!vertexShader || !fragmentShader) RedGLUtil.throwFunc('RedProgram : 신규 생성시 vertexShader, fragmentShader 모두 입력해야함.');
            else redGL['_datas']['RedProgram'][key] = this;
            redGL['_datas']['RedProgramList'].push(this);
        }
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`key`,
			 description : `고유키`,
			 return : 'String'
		 }
         :DOC*/
        this['key'] = key;
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`webglProgram`,
			 description : `실제 프로그램(WebGLProgram Instance)`,
			 return : 'WebGLShader'
		 }
         :DOC*/
        this['webglProgram'] = makeWebGLProgram(tGL, key, vertexShader, fragmentShader);
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`attributeLocation`,
			 description : `어리뷰트 로케이션 정보`,
			 return : 'Array'
		 }
         :DOC*/
        this['attributeLocation'] = [];
        /**DOC:
         {
		     code : 'PROPERTY',
		     code : 'PROPERTY',
			 title :`uniformLocation`,
			 description : `유니폼 로케이션 정보`,
			 return : 'Array'
		 }
         :DOC*/
        this['uniformLocation'] = [];
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`systemUniformLocation`,
			 description : `시스템 유니폼 로케이션 정보`,
			 return : 'Array'
		 }
         :DOC*/
        this['systemUniformLocation'] = [];
        // 쉐이더 로케이션 찾기
        tGL.useProgram(this['webglProgram']);
        MAX_SAMPLER_INDEX = redGL['detect']['texture']['MAX_COMBINED_TEXTURE_IMAGE_UNITS'];
        updateLocation(this, tGL, vertexShader);
        updateLocation(this, tGL, fragmentShader);
        this['_UUID'] = RedGL.makeUUID();
        console.log(this)
    };
    RedProgram.prototype = {};
    /**DOC:
     {
		 title :`RedProgram.hasKey`,
		 code: 'STATIC METHOD',
		 description : '키에 해당하는 쉐이더 존재 여부 반환',
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 key : [
				 {type:'String'},
				 `고유키`
			 ]
		 },
		 example : `
			 RedProgram.haskey(RedGL Instance, '찾고자하는키')
		 `,
		 return : 'Boolean'
	 }
     :DOC*/
    RedProgram['hasKey'] = function (redGL, key) {
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedProgram : RedGL Instance만 허용.', '입력값 : ' + redGL);
        if (!redGL['_datas']['RedProgram']) {
            redGL['_datas']['RedProgram'] = {};
            redGL['_datas']['RedProgramList'] = [];
        }
        return redGL['_datas']['RedProgram'][key] ? true : false;
    };
    //TODO: 이걸좀 정리해야하는데..
    RedProgram['makeProgram'] = (function () {
        return function (redGL, programName, vSource, fSource, subProgramOption) {
            if (programName.indexOf('_') > -1) RedGLUtil.throwFunc('RedProgram : 프로그램이름에 _ 는 허용하지 않음.', '입력값 : ' + programName);
            vSource = typeof vSource == 'string' ? vSource : RedGLUtil.getStrFromComment(vSource.toString());
            fSource = typeof fSource == 'string' ? fSource : RedGLUtil.getStrFromComment(fSource.toString());
            var t0;
            var hasFog = false;
            var hasSprite3D = false;
            var hasDirectionalShadow = false;
            var hasSkin = false

            // 전처리
            for (var k in RedSystemShaderCode.vertexShareFunc) {
                t0 = new RegExp('\/\/\#REDGL_DEFINE\#vertexShareFunc\#' + k + '\#', 'gi');
                // console.log('~~~~',t0)
                vSource = vSource.replace(t0, RedSystemShaderCode.vertexShareFunc[k]);
            }
            for (var k in RedSystemShaderCode.fragmentShareFunc) {
                t0 = new RegExp('\/\/\#REDGL_DEFINE\#fragmentShareFunc\#' + k + '\#', 'gi');
                // console.log('~~~~',t0)
                fSource = fSource.replace(t0, RedSystemShaderCode.fragmentShareFunc[k]);
            }

            if (subProgramOption) {
                subProgramOption.sort();
                programName += '_' + subProgramOption.join('_');
                var i = subProgramOption.length;
                // option에 해당하는 주석을 코드로 전환시킨다.
                while (i--) {
                    if (subProgramOption[i] == 'fog') hasFog = true;
                    if (subProgramOption[i] == 'sprite3D') hasSprite3D = true;
                    if (subProgramOption[i] == 'directionalShadow') hasDirectionalShadow = true;
                    if (subProgramOption[i] == 'skin') hasSkin = true;
                    if (subProgramOption[i] == 'fog' || subProgramOption[i] == 'sprite3D' || subProgramOption[i] == 'directionalShadow' || subProgramOption[i] == 'skin') continue;
                    t0 = new RegExp('\/\/\#REDGL_DEFINE\#' + subProgramOption[i] + '\#', 'gi');
                    // console.log(t0)
                    vSource = vSource.replace(t0, '');
                    fSource = fSource.replace(t0, '');
                }
            }

            // fog 처리
            t0 = new RegExp('\/\/\#REDGL_DEFINE\#fog\#' + (hasFog ? 'true' : 'false') + '\#', 'gi');
            vSource = vSource.replace(t0, '');
            fSource = fSource.replace(t0, '');
            // sprite3D 처리
            t0 = new RegExp('\/\/\#REDGL_DEFINE\#sprite3D\#' + (hasSprite3D ? 'true' : 'false') + '\#', 'gi');
            vSource = vSource.replace(t0, '');
            fSource = fSource.replace(t0, '');
            // directionalShadow 처리
            t0 = new RegExp('\/\/\#REDGL_DEFINE\#directionalShadow\#' + (hasDirectionalShadow ? 'true' : 'false') + '\#', 'gi');
            vSource = vSource.replace(t0, '');
            fSource = fSource.replace(t0, '');
            // skin 처리
            t0 = new RegExp('\/\/\#REDGL_DEFINE\#skin\#' + (hasSkin ? 'true' : 'false') + '\#', 'gi');
            vSource = vSource.replace(t0, '');
            fSource = fSource.replace(t0, '');

            //
            // console.log(vSource, fSource)
            return RedProgram(redGL, programName, vSource, fSource, subProgramOption)
        };
    })();
    Object.freeze(RedProgram);
})();
"use strict";
var RedSystemShaderCode;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedSystemShaderCode`,
		 description : `
			 쉐이더 기본 정의 코드.
			 RedGL이 Instance 화 되면 RedSystemShaderCode.init 가 자동으로 실행되며 RedSystemShaderCode 를 실질적으로 구성한다.
		 `,
		 return : 'RedSystemShaderCode'
	 }
     :DOC*/
    RedSystemShaderCode = {};
    RedSystemShaderCode['init'] = function (redGL) {
        var maxDirectionalLight = 3;
        var maxPointLight = 8;
        var maxJoint;
        var tDETECT = redGL.detect
        console.log('tDETECT', tDETECT);
        // 버텍스 쉐이더에 100개의 유니폼 벡터 정의를 남겨둔다.;;
        var maxJoint;
        maxJoint = parseInt(Math.floor(Math.min((tDETECT.vertexShader.MAX_VERTEX_UNIFORM_VECTORS - 64) / 8, 128)))
        maxPointLight = parseInt(Math.floor(Math.min((tDETECT.fragmentShader.MAX_FRAGMENT_UNIFORM_VECTORS - 64) / 4, 128)))
        console.log('maxJoint', maxJoint)
        // if (RedGLDetect.BROWSER_INFO.browser == 'ie' && RedGLDetect.BROWSER_INFO.browserVer == 11) maxJoint = 50
        // else if (RedGLDetect.BROWSER_INFO.browser == 'iphone' || RedGLDetect.BROWSER_INFO.browser == 'ipad') maxJoint = 8
        // else maxJoint = RedGLDetect.BROWSER_INFO.isMobile ? 64 : 1024
        RedSystemShaderCode = {
            /**DOC:
             {
				 code: 'CONST',
				 title :`RedSystemShaderCode.vertexShareDeclare`,
				 description : `
					 버텍스 쉐이더 공용 정의 리스트
				 `,
				 return : 'Array'
			 }
             :DOC*/
            vertexShareDeclare: [
                'attribute vec3 aVertexPosition',
                'attribute vec3 aVertexNormal',
                'attribute vec4 aVertexColor',
                'attribute vec4 aVertexWeight',
                'attribute vec4 aVertexJoint',

                'varying vec4 vVertexPosition',
                'varying vec3 vVertexNormal',

                'varying vec4 vVertexColor',
                'attribute float aPointSize',
                'uniform float uPointSize',
                'attribute vec2 aTexcoord',
                'attribute vec2 aTexcoord1',
                'varying vec2 vTexcoord',
                'varying vec2 vTexcoord1',

                'uniform bool uOrthographicYn',

                // 'uniform vec4 uAtlascoord',
                'uniform float uTime',
                'varying float vTime',
                'uniform vec2 uResolution',
                'varying vec2 vResolution',
                'uniform mat4 uMMatrix',
                'uniform mat4 uNMatrix',
                'uniform mat4 uPMatrix',
                'uniform mat4 uCameraMatrix',
                'uniform bool u_PerspectiveScale',
                // shadow
                'uniform mat4 uDirectionalShadowLightMatrix',
                'varying highp vec4 vShadowPos',
                'const mat4 cTexUnitConverter = mat4(0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.5, 0.5, 0.5, 1.0)',

                'uniform mat4 uJointMatrix[' + maxJoint + ']',
                'uniform mat4 uInverseBindMatrixForJoint[' + maxJoint + ']',
                'uniform mat4 uGlobalTransformOfNodeThatTheMeshIsAttachedTo'
            ],
            /**DOC:
             {
				 code: 'CONST',
				 title :`RedSystemShaderCode.fragmentShareDeclare`,
				 description : `
					 프레그먼트 쉐이더 공용 정의 리스트
				 `,
				 return : 'Array'
			 }
             :DOC*/
            fragmentShareDeclare: [
                'varying vec4 vVertexPosition',
                'varying vec3 vVertexNormal',

                'varying vec4 vVertexColor',
                'varying vec2 vTexcoord',
                'varying vec2 vTexcoord1',
                'varying float vTime',
                'varying vec2 vResolution',
                'uniform vec3 uCameraPosition',

                // fog
                'uniform float u_FogDistance',
                'uniform float u_FogDensity',
                'uniform vec4 uFogColor',
                // 디렉셔널
                'const int cDIRETIONAL_MAX = ' + maxDirectionalLight,
                'uniform vec3 uDirectionalLightPositionList[' + maxDirectionalLight + ']',
                'uniform vec4 uDirectionalLightColorList[' + maxDirectionalLight + ']',
                'uniform float uDirectionalLightIntensityList[' + maxDirectionalLight + ']',
                'uniform int uDirectionalLightNum',
                //포인트라이트
                'const int cPOINT_MAX = ' + maxPointLight,
                'uniform vec3 uPointLightPositionList[' + maxPointLight + ']',
                'uniform vec4 uPointLightColorList[' + maxPointLight + ']',
                'uniform float uPointLightRadiusList[' + maxPointLight + ']',
                'uniform float uPointLightIntensityList[' + maxPointLight + ']',
                'uniform int uPointLightNum',
                // 암비안트
                'uniform vec4 uAmbientLightColor',
                'uniform float uAmbientIntensity',
                // shadow
                'uniform sampler2D uDirectionalShadowTexture',
                'varying highp vec4 vShadowPos'
            ],
            /**DOC:
             {
				 code: 'CONST',
				 title :`RedSystemShaderCode.systemUniform`,
				 description : `
					 시스템 유니폼 정보
				 `,
				 return : 'Object'
			 }
             :DOC*/
            systemUniform: {},
            /**DOC:
             {
				 code: 'CONST',
				 title :`RedSystemShaderCode.vertexShareFunc`,
				 description : `
					 버텍스 쉐이더 공용 함수 리스트
				 `,
				 return : 'Object'
			 }
             :DOC*/
            vertexShareFunc: {
                getSkinMatrix:
                    [
                        '//#REDGL_DEFINE#skin#true#  mat4 getSkinMatrix(){',
                        '//#REDGL_DEFINE#skin#true#      mat4 skinMat =',
                        '//#REDGL_DEFINE#skin#true#      aVertexWeight.x * uGlobalTransformOfNodeThatTheMeshIsAttachedTo * uJointMatrix[ int(aVertexJoint.x) ] * uInverseBindMatrixForJoint[int(aVertexJoint.x)]+',
                        '//#REDGL_DEFINE#skin#true#      aVertexWeight.y * uGlobalTransformOfNodeThatTheMeshIsAttachedTo * uJointMatrix[ int(aVertexJoint.y) ] * uInverseBindMatrixForJoint[int(aVertexJoint.y)]+',
                        '//#REDGL_DEFINE#skin#true#      aVertexWeight.z * uGlobalTransformOfNodeThatTheMeshIsAttachedTo * uJointMatrix[ int(aVertexJoint.z) ] * uInverseBindMatrixForJoint[int(aVertexJoint.z)]+',
                        '//#REDGL_DEFINE#skin#true#      aVertexWeight.w * uGlobalTransformOfNodeThatTheMeshIsAttachedTo * uJointMatrix[ int(aVertexJoint.w) ] * uInverseBindMatrixForJoint[int(aVertexJoint.w)];',
                        '//#REDGL_DEFINE#skin#true#      return skinMat;',
                        '//#REDGL_DEFINE#skin#true#  }'
                    ].join('\n'),
                getSprite3DMatrix:
                    [
                        'mat4 getSprite3DMatrix(mat4 cameraMTX, mat4 mvMatrix){',
                        '   mat4 cacheScale = mat4(',
                        '      mvMatrix[0][0], 0.0, 0.0, 0.0,',
                        '       0.0, mvMatrix[1][1], 0.0, 0.0,',
                        '      0.0, 0.0, 1.0, mvMatrix[2][2],',
                        '      0.0, 0.0, 0.0, 1.0',
                        '   );',
                        '   mat4 tMTX = cameraMTX * mvMatrix;',
                        '   tMTX[0][0] = 1.0, tMTX[0][1] = 0.0, tMTX[0][2] = 0.0,',
                        '   tMTX[1][0] = 0.0, tMTX[1][1] = 1.0, tMTX[1][2] = 0.0,',
                        '   tMTX[2][0] = 0.0, tMTX[2][1] = 0.0, tMTX[2][2] = 1.0;',
                        '   return tMTX * cacheScale;',
                        '}'
                    ].join('\n')

            },
            /**DOC:
             {
				 code: 'CONST',
				 title :`RedSystemShaderCode.vertexShareFunc`,
				 description : `
					 프레그먼트 쉐이더 공용 함수 리스트
				 `,
				 return : 'Object'
			 }
             :DOC*/
            fragmentShareFunc: {
                getFlatNormal: [
                    'vec3 getFlatNormal(vec3 vertexPosition){',
                    '   vec3 dx = dFdx(vVertexPosition.xyz);',
                    '   vec3 dy = dFdy(vVertexPosition.xyz);',
                    '   return normalize(cross(normalize(dx), normalize(dy)));',
                    '}'
                ].join('\n'),
                getDirectionalLightColor:
                    [
                        'vec4 getDirectionalLightColor(' +
                        '      vec4 texelColor,' +
                        '      vec3 N,' +
                        '      float shininess,' +
                        '      vec4 specularLightColor,' +
                        '      float specularTextureValue,' +
                        '      float specularPower' +
                        ') {',
                        '   vec3 L;',
                        '   float specular;',
                        '   float lambertTerm;',
                        '   vec4 ld = vec4(0.0, 0.0, 0.0, 1.0);',
                        '   vec4 ls = vec4(0.0, 0.0, 0.0, 1.0);',
                        '   for(int i=0; i<cDIRETIONAL_MAX; i++){',
                        '      if(i == uDirectionalLightNum) break;',
                        '      L = normalize(-uDirectionalLightPositionList[i]);',
                        '      lambertTerm = dot(N,-L);',
                        '      if(lambertTerm > 0.0){',
                        '         ld += uDirectionalLightColorList[i] * texelColor * lambertTerm * uDirectionalLightIntensityList[i];',
                        '         specular = pow( max(dot(reflect(L, N), -L), 0.0), shininess) * specularPower * specularTextureValue;',
                        '         ls +=  specularLightColor * specular * uDirectionalLightIntensityList[i] * uDirectionalLightColorList[i].a;',
                        '      }',
                        '   }',
                        '   return ld + ls;',
                        '}'
                    ].join('\n'),
                getPointLightColor:
                    [
                        'vec4 getPointLightColor(' +
                        '      vec4 texelColor,' +
                        '      vec3 N,' +
                        '      float shininess,' +
                        '      vec4 specularLightColor,' +
                        '      float specularTextureValue,' +
                        '      float specularPower' +
                        ') {',
                        '   vec3 L;',
                        '   float specular;',
                        '   float lambertTerm;',
                        '   vec4 ld = vec4(0.0, 0.0, 0.0, 1.0);',
                        '   vec4 ls = vec4(0.0, 0.0, 0.0, 1.0);',
                        '   float distanceLength;',
                        '   float attenuation;',
                        '   for(int i=0;i<cPOINT_MAX;i++){',
                        '      if(i== uPointLightNum) break;',
                        '      L =  -uPointLightPositionList[i] + vVertexPosition.xyz;',
                        '      distanceLength = abs(length(L));',
                        '      if(uPointLightRadiusList[i]> distanceLength){',
                        '          attenuation = 1.0 / (0.01 + 0.02 * distanceLength + 0.03 * distanceLength * distanceLength) * 0.5;',
                        '          L = normalize(L);',
                        '          lambertTerm = dot(N,-L);',
                        '          if(lambertTerm > 0.0){',
                        '             ld += uPointLightColorList[i] * texelColor * lambertTerm * attenuation * uPointLightIntensityList[i] ;',
                        '             specular = pow( max(dot( reflect(L, N), -N), 0.0), shininess) * specularPower * specularTextureValue;',
                        '             ls +=  specularLightColor * specular  * uPointLightIntensityList[i]  * uPointLightColorList[i].a ;',
                        '          }',
                        '      }',
                        '   }',
                        '   return ld + ls;',
                        '}'
                    ].join('\n'),
                fogFactor:
                    [
                        'float fogFactor(float perspectiveFar, float density){',
                        '   float flog_cord = gl_FragCoord.z / gl_FragCoord.w / perspectiveFar;',
                        '   float fog = flog_cord * density;',
                        '   if(1.0 - fog < 0.0) discard;',
                        '   return clamp(1.0 - fog, 0.0,  1.0);',
                        '}'
                    ].join('\n'),
                fog:
                    [
                        'vec4 fog(float fogFactor, vec4 fogColor, vec4 currentColor) {',
                        '   return mix(fogColor, currentColor, fogFactor);',
                        '}'
                    ].join('\n'),
                decodeFloatShadow:
                    [
                        'float decodeFloatShadow (vec4 color) {',
                        '   const vec4 cBitShift = vec4(',
                        '       1.0 / (256.0 * 256.0 * 256.0),',
                        '       1.0 / (256.0 * 256.0),',
                        '       1.0 / 256.0,',
                        '       1.0',
                        '   );',
                        '   return dot(color, cBitShift);',
                        '}'
                    ].join('\n'),
                getShadowColor:
                    [
                        'float getShadowColor ( vec4 shadowPos, vec2 resolution, sampler2D directionalShadowTexture ) {',
                        '   vec3 fragmentDepth = shadowPos.xyz;',
                        '   fragmentDepth.z -= 0.007; // cShadowAcneRemover',
                        '   float amountInLight = 0.0;',
                        '   for (int x = -1; x <= 1; x++) {',
                        '       for (int y = -1; y <= 1; y++) {',
                        '           vec2 tUV = fragmentDepth.xy + vec2( float(x)/resolution.x, float(y)/resolution.y );',
                        '           if(tUV.x<0.0) return 1.0;',
                        '           if(tUV.x>1.0) return 1.0;',
                        '           if(tUV.y<0.0) return 1.0;',
                        '           if(tUV.y>1.0) return 1.0;',
                        '           float texelDepth = decodeFloatShadow( texture2D(directionalShadowTexture, tUV) );',
                        '           if (fragmentDepth.z < texelDepth ) amountInLight += 1.0;',
                        '      }',
                        '   }',
                        '   amountInLight /= 9.0;',
                        '   amountInLight =  amountInLight;',
                        '   return amountInLight;',
                        '}'
                    ].join('\n'),
                cotangent_frame : [
                    'mat3 cotangent_frame(vec3 N, vec3 p, vec2 uv)',
                    '{',
                    '   vec3 dp1 = dFdx( p );',
                    '   vec3 dp2 = dFdy( p );',
                    '   vec2 duv1 = dFdx( uv );',
                    '   vec2 duv2 = dFdy( uv );',
                    '   ',
                    '   vec3 dp2perp = cross( dp2, N );',
                    '   vec3 dp1perp = cross( N, dp1 );',
                    '   vec3 T = dp2perp * duv1.x + dp1perp * duv2.x;',
                    '   vec3 B = dp2perp * duv1.y + dp1perp * duv2.y;',
                    '   ',
                    '   float invmax = inversesqrt( max( dot(T,T), dot(B,B) ) );',
                    '   return mat3( T * invmax, B * invmax, N );',
                    '}'
                ].join('\n'),
                perturb_normal : [
                    'vec3 perturb_normal( vec3 N, vec3 V, vec2 texcoord, vec3 normalColor )',
                    '   {',
                    '   ',
                    '   vec3 map = normalColor;',
                    '   map =  map * 255./127. - 128./127.;',
                    '   map.xy *= u_normalPower;',
                    '   mat3 TBN = cotangent_frame(N, V, texcoord);',
                    '   return normalize(TBN * map);',
                    '}'
                ].join('\n')
            }
        };
        /**DOC:
         {
			 code: 'CONST',
			 title :`RedSystemShaderCode.MAX_DIRECTIONAL_LIGHT`,
			 description : `
				 최대 허용 직사광 갯수
			 `,
			 return : 'Number'
		 }
         :DOC*/
        RedSystemShaderCode['MAX_DIRECTIONAL_LIGHT'] = maxDirectionalLight;
        /**DOC:
         {
			 code: 'CONST',
			 title :`RedSystemShaderCode.MAX_POINT_LIGHT`,
			 description : `
				 최대 허용 점광 갯수
			 `,
			 return : 'Number'
		 }
         :DOC*/
        RedSystemShaderCode['MAX_POINT_LIGHT'] = maxPointLight;
        RedSystemShaderCode['MAX_JOINT'] = maxJoint;
        [RedSystemShaderCode.vertexShareDeclare, RedSystemShaderCode.fragmentShareDeclare].forEach(function (data) {
            data.forEach(function (v) {
                v = v.split(' ')
                if (v[0] == 'uniform') {
                    RedSystemShaderCode.systemUniform[v[2]] = 1
                }
            })
        });

        // 맥스갯수를 찾아보자..

        var tVertexUniform = [];
        var tVertexVecNum = 0
        var testMap = {
            bool: 4, float: 4, int: 4, uint: 4,
            sampler2D: 4, samplerCube: 4,
            vec2: 4, vec3: 4, vec4: 4,
            mat2: 4, mat3: 8, mat4: 16
        }
        console.log('RedSystemShaderCode.vertexShareDeclare', RedSystemShaderCode.vertexShareDeclare)
        RedSystemShaderCode.vertexShareDeclare.forEach(function (v) {
            v = v.split(' ')
            console.log(v[0])
            if (v[0] == 'uniform') {
                var tNum;
                var tInfo;
                tInfo = {
                    value: v,
                    type: v[1],
                    num: tNum = v[2].indexOf('[') > -1 ? +(v[2].split('[')[1].replace(']', '')) * testMap[v[1]] : testMap[v[1]]
                }
                tVertexUniform.push(tInfo)
                tVertexVecNum += tNum
            }
        });
        console.log('tVertexUniform', tVertexUniform)
        console.log('tVertexVecNum', tVertexVecNum / 4)
        tVertexUniform = []
        tVertexVecNum = 0
        RedSystemShaderCode.fragmentShareDeclare.forEach(function (v) {
            v = v.split(' ')
            console.log(v[0])
            if (v[0] == 'uniform') {
                var tNum;
                var tInfo;
                tInfo = {
                    value: v,
                    type: v[1],
                    num: tNum = v[2].indexOf('[') > -1 ? +(v[2].split('[')[1].replace(']', '')) * testMap[v[1]] : testMap[v[1]]
                }
                tVertexUniform.push(tInfo)
                tVertexVecNum += tNum
            }
        });
        console.log('tFragmentUniform', tVertexUniform)
        console.log('tFragmentVecNum', tVertexVecNum / 4)

        console.log(RedSystemShaderCode)
        Object.freeze(RedSystemShaderCode)
    };
})
();
"use strict";
var RedShader;
(function () {
    var makeWebGLShader, compileWebGLShader, parserDefine, mergeSystemCode;
    makeWebGLShader = (function () {
        var t0;
        return function (gl, key, type) {
            switch (type) {
                case RedShader.VERTEX:
                    t0 = gl.createShader(gl.VERTEX_SHADER);
                    if (!t0) {
                        if (gl.isContextLost()) RedGLUtil.throwFunc('RedShader : 쉐이더를 생성실패! - WebGL 컨텍스트가 손실');
                        else RedGLUtil.throwFunc('RedShader : 쉐이더를 생성실패! - GPU메모리가 부족일 가능성이 큼');
                    }
                    t0['key'] = key;
                    t0['type'] = type;
                    return t0;
                    break;
                case RedShader.FRAGMENT:
                    t0 = gl.createShader(gl.FRAGMENT_SHADER);
                    if (!t0) {
                        if (gl.isContextLost()) RedGLUtil.throwFunc('RedShader : 쉐이더를 생성실패! - WebGL 컨텍스트가 손실');
                        else RedGLUtil.throwFunc('RedShader : 쉐이더를 생성실패! - GPU메모리가 부족일 가능성이 큼');
                    }
                    t0['key'] = key;
                    t0['type'] = type;
                    return t0;
                    break;
                default:
                    RedGLUtil.throwFunc('RedShader : 쉐이더 타입을 확인하세요. RedShader.VERTEX or RedShader.FRAGMENT 만 허용');
                    break
            }
        }
    })();
    compileWebGLShader = function (gl, type, shader, parseData) {
        gl.shaderSource(shader, parseData['lastSource']);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            // console.log(parseData)
            alert(gl.getShaderInfoLog(shader))
            RedGLUtil.throwFunc('RedShader : 쉐이더 컴파일에 실패하였습니다.\n', gl.getShaderInfoLog(shader))
        }
    };
    mergeSystemCode = (function () {
        var i, tDefineData;
        return function (type, sourceList) {
            var t0;
            switch (type) {
                case RedShader.VERTEX:
                    t0 = RedSystemShaderCode['vertexShareDeclare'].concat();
                    break;
                case RedShader.FRAGMENT:
                    t0 = RedSystemShaderCode['fragmentShareDeclare'].concat();
                    break;
                default:
                    RedGLUtil.throwFunc('RedShader : 쉐이더 타입을 확인하세요. RedShader.VERTEX or RedShader.FRAGMENT 만 허용');
                    break;
            }
            i = sourceList.length;
            while (i--) {
                tDefineData = sourceList[i];
                tDefineData = tDefineData.replace(';', '');
                if (t0.indexOf(tDefineData) == -1) t0.push(tDefineData);
                else {
                    console.log(RedSystemShaderCode);
                    RedGLUtil.throwFunc('RedShader : ', '\n1. 중복 선언 이거나', '\n2. RedSystemShaderCode에 정의된 선언\n', '입력값 : ' + tDefineData);
                }
            }
            return t0;
        }
    })();
    parserDefine = (function () {
        var parseData, checkDefineList;
        var mergeStr;
        return function (type, source) {
            source = source.replace(/\s+$/, '');
            source = source.replace(/  /g, '').trim();
            // console.log(source)
            parseData = {etc: ''};
            // 함수 제외 전부 검색
            checkDefineList = source.match(/attribute[\s\S]+?\;|uniform[\s\S]+?\;|varying[\s\S]+?\;|const[\s\S]+?\;|precision[\s\S]+?\;/g);
            checkDefineList = checkDefineList ? checkDefineList : [];
            checkDefineList = mergeSystemCode(type, checkDefineList);
            checkDefineList.sort();
            // console.log(checkList)
            // console.log(checkDefineList)
            checkDefineList.forEach(function (v) {
                var tCheckDefine;
                var tDefineType, tName, tDataType, tArrayNum, tValue;
                var tResultData;
                var tPrecision;
                v = v.trim();
                // 체크된 녀석은 소스에서 갈아치움
                source = source.replace(v + ';', '');
                // console.log(source)
                tCheckDefine = v.split(' ');
                if (tCheckDefine[1] == 'highp' || tCheckDefine[1] == 'mediump' || tCheckDefine[1] == 'lowp') {
                    // uniform highp vec4 uTest4; 같은 선언을 Precision값을 분리함
                    var temp;
                    temp = tCheckDefine[1];
                    tCheckDefine.splice(1, 1);
                    tCheckDefine.push(temp);
                    tPrecision = temp;
                }
                // console.log(v,tData)
                // 배열화 했을때 최소 2개여야함. ex) uniform vec2 uTest, uniform highp vec2 uTest2;
                // highp vec4 uTest4; 같은 선언의 경우 checkDefineList match시 걸리지 않으므로 상관없음
                if (tCheckDefine[2]) {
                    // 정의인경우
                    tDefineType = tCheckDefine[0]; // uniform, attribute, varying
                    tDataType = tCheckDefine[1]; // vec2, float, ...
                    tName = tCheckDefine[2].replace(';', '').split('['); // 이름은 배열인텍스 2번째로 간주함.
                    tValue = v.split('='); // 값을 찾음
                    tValue = tValue[1] ? tValue[1].trim().replace(';', '') : null; // 값이 있으면 값을 가져옴
                    tArrayNum = tName.length > 1 ? +tName[1].split(']')[0] : 0; // 이름이 uTest[2]와 같이 배열일경우 배열 길이를 가져옴
                    tName = tName[0]; // 최종 이름확보
                    // 이름 검증
                    switch (tDefineType) {
                        case 'precision':
                            break;
                        case 'attribute':
                            if (tName.charAt(0) != 'a') RedGLUtil.throwFunc('RedShader : attribute의 첫글자는 a로 시작해야합니다.', tName, tCheckDefine);
                            if (tName.charAt(1) != tName.charAt(1).toUpperCase()) RedGLUtil.throwFunc('RedShader : attribute의 두번째 글자는 대문자 시작해야합니다.', tName, tCheckDefine);
                            break;
                        case 'uniform':
                            if (tName.charAt(0) != 'u') RedGLUtil.throwFunc('RedShader : uniform의 첫글자는 u로 시작해야합니다.', tName, tCheckDefine);
                            if (tName.charAt(1) != tName.charAt(1).toUpperCase()) RedGLUtil.throwFunc('RedShader : uniform의 두번째 글자는 대문자 시작해야합니다.', tName, tCheckDefine);
                            break;
                        case 'varying':
                            if (tName.charAt(0) != 'v') RedGLUtil.throwFunc('RedShader : varying의 첫글자는 v로 시작해야합니다.', tName, tCheckDefine);
                            if (tName.charAt(1) != tName.charAt(1).toUpperCase()) RedGLUtil.throwFunc('RedShader : varying의 두번째 글자는 대문자 시작해야합니다.', tName, tCheckDefine);
                            break;
                        case 'const':
                            if (tName.charAt(0) != 'c') RedGLUtil.throwFunc('RedShader : const의 첫글자는 c로 시작해야합니다.', tName, tCheckDefine);
                            if (tName.charAt(1) != tName.charAt(1).toUpperCase()) RedGLUtil.throwFunc('RedShader : const의 두번째 글자는 대문자 시작해야합니다.', tName, tCheckDefine);
                            break;
                        default:
                            console.log('RedShader : 체크되지 못하는값인데 뭐냐', tName);
                            RedGLUtil.throwFunc('RedShader : 체크되지 못하는값인데 뭐냐', tName, tCheckDefine);
                            break;
                    }
                }
                else {
                    console.log('RedShader : 체크되지 못하는값인데 뭐냐', tCheckDefine);
                    RedGLUtil.throwFunc('RedShader : 체크되지 못하는값인데 뭐냐', tCheckDefine);
                    // 아래놈은 이제 사용하지 ㅇ낳음
                    // // 변수인경우
                    // console.log('여기냐', tCheckDefine)
                    // tDefineType = 'var';
                    // tDataType = tCheckDefine[0];
                    // tName = tCheckDefine[1].replace(';', '').split('[');
                    // tArrayNum = tName.length > 1 ? +tName[1].split(']')[0] : 0;
                    // tName = tName[0];
                }
                // 저장공간확보
                if (!parseData[tDefineType]) {
                    parseData[tDefineType] = {};
                    parseData[tDefineType]['list'] = [];
                    parseData[tDefineType]['map'] = {};
                    parseData[tDefineType]['source'] = '';
                }
                tResultData = {
                    name: tName,
                    arrayNum: tArrayNum,
                    value: tValue,
                    precision: tPrecision,
                    systemUniformYn: RedSystemShaderCode.systemUniform[tArrayNum ? tName + '[' + tArrayNum + ']' : tName] ? true : false
                };
                if (tDefineType == 'uniform') tResultData['uniformType'] = tDataType;
                if (tDefineType == 'attribute') tResultData['attributeType'] = tDataType;
                if (tDefineType == 'varying') tResultData['varyingType'] = tDataType;
                parseData[tDefineType]['list'].push(tResultData);
                parseData[tDefineType]['map'][tName] = v;
                parseData[tDefineType]['source'] += v + ';\n';
            });
            source += '\n';
            source = source.trim();
            // console.log(source)
            // 메인함수 및 변수 처리
            parseData['etc'] = source + '\n';
            mergeStr = type == RedShader.FRAGMENT ? '#extension GL_OES_standard_derivatives : enable\n' : '';
            if (parseData['precision']) mergeStr += parseData['precision']['source'] + '\n//const\n';
            if (parseData['const']) mergeStr += parseData['const']['source'] + '\n//attribute\n';
            if (parseData['attribute']) mergeStr += parseData['attribute']['source'] + '\n//uniform\n';
            if (parseData['uniform']) mergeStr += parseData['uniform']['source'] + '\n//varying\n';
            if (parseData['varying']) mergeStr += parseData['varying']['source'] + '\n//etc\n';
            if (parseData['etc']) mergeStr += parseData['etc'];
            parseData.lastSource = mergeStr;
            // console.log(parseData)
            if (type == RedShader.FRAGMENT && !parseData['precision']) RedGLUtil.throwFunc('RedShader : FRAGMENT Shader는 precision를 반드시 선언해야함');
            return parseData;
        }
    })();
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedShader`,
		 description : `
			 RedShader Instance 생성기
			 RedSystemShaderCode 소스와 머징된 RedShader Instance를 생성
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 key : [
				 {type:'String'},
				 `고유키`
			 ],
			 type : [
				 {type:'RedShader.VERTEX or RedShader.FRAGMENT'},
				 `버퍼 타입`
			 ],
			 source : [
				 {type:'String'},
				 `쉐이더 문자열 소스`
			 ],
		 },
		 example : `
		 RedShader(RedGL Instance, 'test', RedShader.VERTEX, 'vec3 test; void main(){}')
		 RedShader(RedGL Instance, 'test', RedShader.FRAGMENT, 'precision mediump float;vec3 test; void main(){test;}')
		 `,
		 return : 'RedShader Instance'
	 }
     :DOC*/
    RedShader = function (redGL, key, type, source) {
        var tGL;
        if (!(this instanceof RedShader)) return new RedShader(redGL, key, type, source);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedShader : RedGL Instance만 허용.', '입력값 : ' + redGL);
        typeof key == 'string' || RedGLUtil.throwFunc('RedShader : key - 문자열만 허용.', '입력값 : ' + key);
        if (type != RedShader['VERTEX'] && type != RedShader['FRAGMENT']) RedGLUtil.throwFunc('RedShader : type - RedShader.VERTEX or RedShader.FRAGMENT 만 허용.', '입력값 : ' + type);
        // 데이터 공간확보
        if (!redGL['_datas']['RedShader']) {
            redGL['_datas']['RedShader'] = {};
            redGL['_datas']['RedShader'][RedShader['VERTEX']] = {};
            redGL['_datas']['RedShader'][RedShader['FRAGMENT']] = {};
        }
        // 소스가 있을 경우 검증
        if (source) {
            typeof source == 'string' || RedGLUtil.throwFunc('RedShader : source - 문자열만 허용.');
            if (RedShader['hasKey'](redGL, key, type)) RedGLUtil.throwFunc('RedShader : key - 이미 정의된 키로 생성을 시도.', '\n키 :', key, '\n타입 :' + type);
            else redGL['_datas']['RedShader'][type][key] = this;
        } else {
            // 소스가 없을경우, 기존데이터에서 찾아옴
            if (RedShader['hasKey'](redGL, key, type)) return redGL['_datas']['RedShader'][type][key];
            else RedGLUtil.throwFunc('RedShader : ' + type + ' 타입에 존재하지 않는 key를 검색하려고합니다.', '입력값 : ' + key);
        }
        tGL = redGL.gl;
        /**DOC:
         {
		  code : 'PROPERTY',
		  title :`webglShader`,
		  description : `실제 쉐이더(WebGLShader Instance)`,
		  return : 'WebGLShader'
		 }
         :DOC*/
        this['webglShader'] = makeWebGLShader(tGL, key, type); // 쉐이더 생성
        /**DOC:
         {
		  code : 'PROPERTY',
		  title :`parseData`,
		  description : `쉐이더 해석 데이터`,
		  return : 'Object'
		 }
         :DOC*/
        this['parseData'] = parserDefine(type, source); // 소스 파싱
        this['originSource'] = source;
        compileWebGLShader(tGL, type, this['webglShader'], this['parseData']); // 쉐이더 컴파일
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`key`,
			 description : `고유키`,
			 return : 'String'
		 }
         :DOC*/
        this['key'] = key;
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`type`,
			 description : `RedShader.VERTEX or RedShader.FRAGMENT`,
			 return : 'String'
		 }
         :DOC*/
        this['type'] = type;
        this['_UUID'] = RedGL.makeUUID();
        Object.freeze(this);
        console.log(this);
    };
    /**DOC:
     {
		 title :`RedShader.hasKey`,
		 code: 'STATIC METHOD',
		 description : '키에 해당하는 쉐이더 존재 여부 반환',
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 key : [
				 {type:'String'},
				 `고유키`
			 ],
			 type : [
				 {type:'RedShader.VERTEX or RedShader.FRAGMENT'},
				 `버퍼 타입`
			 ]
		 },
		 example : `
			 RedShader.haskey(RedGL Instance, '찾고자하는키', RedShader.FRAGMENT or RedShader.VERTEX)
		 `,
		 return : 'Boolean'
	 }
     :DOC*/
    RedShader['hasKey'] = function (redGL, key, type) {
        return redGL['_datas']['RedShader'][type][key] ? true : false
    };
    /**DOC:
     {
		 title :`RedShader.FRAGMENT`,
		 code: 'CONST',
		 description : '프레그먼트 쉐이더 상수',
		 return : 'String'
	 }
     :DOC*/
    RedShader['FRAGMENT'] = 'fragmentShader';
    /**DOC:
     {
		 title :`RedShader.VERTEX`,
		 code: 'CONST',
		 description : '버텍스 쉐이더 상수',
		 return : 'String'
	 }
     :DOC*/
    RedShader['VERTEX'] = 'vertexShader';
    Object.freeze(RedShader)
})();
"use strict";
var RedRenderer;
//TODO: 캐싱전략을 좀더 고도화하는게 좋을듯
(function () {
    var _renderList = []
    var _renderTick;
    _renderTick = function (time) {
        //TODO: 시간보정을 굳이 할피요가 있을까..
        var i = _renderList.length
        var tRenderer;
        while (i--) {
            tRenderer = _renderList[i]
            tRenderer.worldRender(tRenderer['_redGL'], time);
            tRenderer['_callback'] ? tRenderer['_callback'](time) : 0

        }
        requestAnimationFrame(_renderTick)

    }
    requestAnimationFrame(_renderTick)
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedRenderer`,
		 description : `
			 RedRenderer Instance 생성자.
		 `,
		 example : `
		    var tRenderer = RedRenderer();
            tRenderer.start(
                redGL,
                function (time) {
                    // looper
                }
            );
		 `,
		 return : 'RedRenderer Instance'
	 }
     :DOC*/
    RedRenderer = function () {
        if (!(this instanceof RedRenderer)) return new RedRenderer();
        this.world = null;
        this['_tickKey'] = null;
        this['_callback'] = null;
        this['_UUID'] = RedGL.makeUUID();
        this['renderInfo'] = {};
        this['cacheState'] = [];
        this['cacheInfo'] = {
            cacheUniformInfo: [],
            cacheAttrInfo: [],
            cacheSamplerIndex: [],
            cacheTexture: [],
            cacheSystemUniformInfo: []
        };
        this['renderDebuger'] = RedRenderDebuger();
        this['worldRect'] = []
        this['_glInitialized'] = false
        console.log(this);
    };
    RedRenderer.prototype = {
        /**DOC:
         {
			 code:`METHOD`,
			 title :`start`,
			 description : `
				 렌더 시작
			 `,
			 params : {
				 redGL : [
					 {type : "RedGL"}
				 ],
				 callback : [
					 {type : "Function"},
					 '렌더시마다 실행될 콜백'
				 ]
			 },
			 example : `
			    var tRenderer = RedRenderer();
                tRenderer.start(
                    redGL,
                    function (time) {
                        // looper
                    }
                );
			 `,
			 return : 'void'
		 }
         :DOC*/

        start: function (redGL, callback) {
            redGL instanceof RedGL || RedGLUtil.throwFunc('RedGL Instance만 허용');
            if (!(redGL.world instanceof RedWorld)) RedGLUtil.throwFunc('RedWorld Instance만 허용');
            var self = this;
            self.stop()
            self.world = redGL.world;
            self['_redGL'] = redGL
            self['_callback'] = callback;
            _renderList.push(self)
        },
        /**DOC:
         {
			 code:`METHOD`,
			 title :`setDebugButton`,
			 description : `
				 디버그 버튼 생성
			 `,
			 example : `
			    var tRenderer = RedRenderer();
                tRenderer.setDebugButton();
			 `,
			 return : 'void'
		 }
         :DOC*/
        setDebugButton: function () {
            var sourceViewBt;
            var self = this
            if (window['document']) {
                document.body.appendChild(sourceViewBt = document.createElement('button'));
                sourceViewBt.style.cssText = 'position:fixed;left:10px;top:10px;background:rgb(91, 82, 170);color:#fff;z-index:10001;border:0;outline:none;cursor:pointer;padding:8px;font-size:11px;border-radius:5px'
                sourceViewBt.innerHTML = 'debugRenderInfo - ' + RedGL_VERSION.version
                sourceViewBt.addEventListener('click', function () {
                    self.renderDebuger.visible = !self.renderDebuger.visible
                })
            }
        },
        /**DOC:
         {
			 code:`METHOD`,
			 title :`render`,
			 description : `
				 단일 프레임 렌더
			 `,
			 params : {
				 redGL : [
					 {type : "RedGL"}
				 ],
				 time : [
					 {type : "Number"},
					 'time'
				 ]
			 },
			 example : `
			    var tRenderer = RedRenderer();
                tRenderer.render(RedGL Instance)
			 `,
			 return : 'void'
		 }
         :DOC*/
        render: function (redGL, time) {
            redGL instanceof RedGL || RedGLUtil.throwFunc('RedGL Instance만 허용');
            time = time || 0;
            this.world = redGL.world;
            this.worldRender(redGL, time);

        },
        /**DOC:
         {
			 code:`METHOD`,
			 title :`stop`,
			 description : `
				 렌더 중지
			 `,
			 example : `
                var tRenderer = RedRenderer();
                tRenderer.start(
                    redGL,
                    function (time) {
                        // looper
                    }
                );
                tRender.stop();
			 `,
			 return : 'void'
		 }
         :DOC*/
        stop: (function () {
            var t0;
            return function () {
                t0 = _renderList.indexOf(this);
                if (t0 == -1) {
                } else _renderList.splice(t0, 1);
            }
        })()
    };
    // 캐시관련
    var prevProgram_UUID;
    var transparentList = []
    RedRenderer.prototype.worldRender = (function () {
        var tWorldRect;
        var self;
        var valueParser;
        var updateSystemUniform;
        var glInitialize;
        var lightDebugRenderList;
        lightDebugRenderList = []
        // 숫자면 숫자로 %면 월드대비 수치로 변경해줌
        valueParser = (function () {
            var i;
            return function (rect) {
                i = rect.length;
                while (i--) {
                    if (typeof rect[i] == 'number') rect[i] = rect[i];
                    else {
                        if (i < 2) rect[i] = tWorldRect[i + 2] * parseFloat(rect[i]) / 100
                        else rect[i] = tWorldRect[i] * parseFloat(rect[i]) / 100
                    }
                }
                return rect;
            }
        })();
        updateSystemUniform = function (redGL, time, tView) {
            prevProgram_UUID = RedSystemUniformUpdater.update(redGL, this, time, tView, prevProgram_UUID, lightDebugRenderList)
        }
        glInitialize = function (gl) {
            // 뎁스데스티 설정
            gl.enable(gl.DEPTH_TEST);
            gl.depthFunc(gl.LEQUAL)
            // 컬링 페이스 설정
            gl.frontFace(gl.CCW)
            gl.enable(gl.CULL_FACE);
            gl.cullFace(gl.BACK)
            gl.enable(gl.SCISSOR_TEST);
            // 블렌드모드설정
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
            gl.disable(gl.DITHER)
            // gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
            // // 픽셀 블렌딩 결정
            // gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
            // 픽셀 플립 기본설정
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
        };
        return function (redGL, time) {
            var gl;
            var tScene;
            var tRenderInfo
            var tPerspectiveMTX;
            var tCamera
            var i;
            var len;
            var tView;
            var tViewRect;
            gl = redGL.gl;
            self = this;
            if (window['RedGLTFLoader']) RedGLTFLoader.animationLooper(time)
            // 캔버스 사이즈 적용
            tWorldRect = self['worldRect']
            tWorldRect[0] = 0;
            tWorldRect[1] = 0;
            tWorldRect[2] = gl.drawingBufferWidth;
            tWorldRect[3] = gl.drawingBufferHeight;
            gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
            gl.scissor(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
            transparentList.length = 0
            if (!self['_glInitialized']) glInitialize(gl), self['_glInitialized'] = true
            // console.log("worldRender", v['key'], t0)
            self['renderInfo'] = {}
            self['cacheInfo']['cacheAttrInfo'].length = 0
            // 일단 0번과 1번텍스트는 무조건 체운다.
            redGL.gl.activeTexture(redGL.gl.TEXTURE0);
            redGL.gl.bindTexture(redGL.gl.TEXTURE_2D, redGL['_datas']['emptyTexture']['2d']['webglTexture']);
            redGL.gl.activeTexture(redGL.gl.TEXTURE0 + 1);
            redGL.gl.bindTexture(redGL.gl.TEXTURE_CUBE_MAP, redGL['_datas']['emptyTexture']['3d']['webglTexture']);
            i = 0;
            len = self['world']['_viewList'].length
            for (i; i < len; i++) {
                // self['world']['_viewList'].forEach(function (tView) {
                tView = self['world']['_viewList'][i]
                ///////////////////////////////////
                // view의 위치/크기결정
                tViewRect = tView['_viewRect']
                tViewRect[0] = tView['_x'];
                tViewRect[1] = tView['_y'];
                tViewRect[2] = tView['_width'];
                tViewRect[3] = tView['_height'];
                tCamera = tView['camera'];
                tScene = tView['scene']
                // 위치/크기의 % 여부를 파싱
                valueParser(tViewRect);
                // 현재뷰에 대한 렌더 디버깅 정보
                if (!self['renderInfo'][tView['key']]) self['renderInfo'][tView['key']] = {}
                tRenderInfo = self['renderInfo'][tView['key']]
                tRenderInfo['orthographicYn'] = tCamera instanceof RedBaseController ? tCamera.camera['orthographicYn'] : tCamera['orthographicYn']
                tRenderInfo['x'] = tView['_x']
                tRenderInfo['y'] = tView['_y']
                tRenderInfo['width'] = tView['_width']
                tRenderInfo['height'] = tView['_height']
                tRenderInfo['viewRectX'] = tViewRect[0]
                tRenderInfo['viewRectY'] = tViewRect[1]
                tRenderInfo['viewRectWidth'] = tViewRect[2]
                tRenderInfo['viewRectHeight'] = tViewRect[3]
                tRenderInfo['key'] = tView['key']
                tRenderInfo['call'] = 0
                tRenderInfo['triangleNum'] = 0
                tRenderInfo['viewRenderTime'] = 0
                tRenderInfo['postEffectRenderTime'] = 0
                // viewport 크기설정
                gl.viewport(tViewRect[0], tWorldRect[3] - tViewRect[3] - tViewRect[1], tViewRect[2], tViewRect[3]);
                gl.scissor(tViewRect[0], tWorldRect[3] - tViewRect[3] - tViewRect[1], tViewRect[2], tViewRect[3]);
                // 배경 설정
                if (tScene['_useBackgroundColor']) {
                    if (tScene['_useFog']) gl.clearColor(tScene['_fogR'], tScene['_fogG'], tScene['_fogB'], 1);
                    else gl.clearColor(tScene['_r'], tScene['_g'], tScene['_b'], 1);
                    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
                } else {
                    gl.clearColor(0, 0, 0, 1);
                    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
                }
                // 카메라 메트릭스 설정
                if (tCamera instanceof RedBaseController) {
                    // 카메라 형식이 아닌경우 컨트롤러로 판단함
                    tCamera['update']();
                    tCamera = tCamera['camera'];
                }
                if (tCamera['autoUpdateMatrix']) tCamera['update']();
                // 퍼스펙티브 매트릭스 설정
                // view 에 적용할 카메라 퍼스펙티브를 계산
                tPerspectiveMTX = tCamera['perspectiveMTX'];
                mat4.identity(tPerspectiveMTX);
                if (tCamera['orthographicYn']) {
                    mat4.ortho(
                        tPerspectiveMTX,
                        -0.5, // left
                        0.5, // right
                        -0.5, // bottom
                        0.5, // top,
                        -tCamera['farClipping'],
                        tCamera['farClipping']
                    )
                    mat4.translate(tPerspectiveMTX, tPerspectiveMTX, [-0.5, 0.5, 0])
                    mat4.scale(tPerspectiveMTX, tPerspectiveMTX, [1 / tViewRect[2] * redGL['renderScale'] * window.devicePixelRatio, -1 / tViewRect[3] * redGL['renderScale'] * window.devicePixelRatio, 1]);
                    mat4.identity(tCamera['matrix'])
                    gl.disable(gl.CULL_FACE);
                    self['cacheState']['useCullFace'] = false
                } else {
                    mat4.perspective(
                        tPerspectiveMTX,
                        tCamera['fov'] * Math.PI / 180,
                        tViewRect[2] / tViewRect[3],
                        tCamera['nearClipping'],
                        tCamera['farClipping']
                    );
                    gl.enable(gl.CULL_FACE);
                    self['cacheState']['useCullFace'] = true
                }
                // 뎁스마스크 원상복구
                self['cacheState']['useDepthMask'] ? 0 : gl.depthMask(self['cacheState']['useDepthMask'] = true);
                // 마우스 이벤트 렌더
                if (tScene['mouseManager']) {
                    updateSystemUniform.apply(self, [redGL, time, tView])
                    tScene['mouseManager']['render'](redGL, self, tView, time, tRenderInfo)

                }
                // 디렉셔널 쉐도우 렌더
                if (tScene['shadowManager']['_directionalShadow']) {
                    updateSystemUniform.apply(self, [redGL, time, tView])
                    gl.disable(gl.BLEND);
                    gl.blendFunc(gl.ONE, gl.ONE);
                    self['cacheState']['useBlendMode'] = true
                    self['cacheState']['blendSrc'] = gl.ONE
                    self['cacheState']['blendDst'] = gl.ONE
                    tScene['shadowManager']['render'](redGL, self, tView, time, tRenderInfo)
                    gl.enable(gl.BLEND);
                    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
                    self['cacheState']['useBlendMode'] = true
                    self['cacheState']['blendSrc'] = gl.SRC_ALPHA
                    self['cacheState']['blendDst'] = gl.ONE_MINUS_SRC_ALPHA
                }

                // 포스트이펙트 확인
                if (tView['postEffectManager']['postEffectList'].length) {
                    tView['postEffectManager'].bind(gl);
                    // mat4.perspective(
                    // 	tPerspectiveMTX,
                    // 	tCamera['fov'] * Math.PI / 180,
                    // 	tView['postEffectManager']['frameBuffer']['width'] / tView['postEffectManager']['frameBuffer']['height'],
                    // 	tCamera['nearClipping'],
                    // 	tCamera['farClipping']
                    // );
                    gl.viewport(0, 0, tView['postEffectManager']['frameBuffer']['width'], tView['postEffectManager']['frameBuffer']['height']);
                    gl.scissor(0, 0, tView['postEffectManager']['frameBuffer']['width'], tView['postEffectManager']['frameBuffer']['height']);
                }
                ///////////////////////////////
                // 실제렌더 계산
                updateSystemUniform.apply(self, [redGL, time, tView])
                if (tScene['skyBox']) {
                    tScene['skyBox']['x'] = tCamera.x
                    tScene['skyBox']['y'] = tCamera.y
                    tScene['skyBox']['z'] = tCamera.z
                    tScene['skyBox']['scaleX'] = tScene['skyBox']['scaleY'] = tScene['skyBox']['scaleZ'] = tCamera['farClipping'] * 0.6
                    self.sceneRender(redGL, tScene, tCamera, tCamera['orthographicYn'], [tScene['skyBox']], time, tRenderInfo);
                }
                // 그리드가 있으면 그림
                if (tScene['grid']) self.sceneRender(redGL, tScene, tCamera, tCamera['orthographicYn'], [tScene['grid']], time, tRenderInfo);
                // 씬렌더 호출
                self.sceneRender(redGL, tScene, tCamera, tCamera['orthographicYn'], tScene['children'], time, tRenderInfo);
                if (transparentList.length) self.sceneRender(redGL, tScene, tCamera, tCamera['orthographicYn'], transparentList, time, tRenderInfo, null, true);

                // asix가 있으면 그림
                if (tScene['axis']) self.sceneRender(redGL, tScene, tCamera, tCamera['orthographicYn'], tScene['axis']['children'], time, tRenderInfo);
                // 디버깅 라이트 업데이트
                if (lightDebugRenderList.length) self.sceneRender(redGL, tScene, tCamera, tCamera['orthographicYn'], lightDebugRenderList, time, tRenderInfo);
                // 포스트이펙트 최종렌더
                tRenderInfo['viewRenderTime'] = performance.now();
                if (tView['postEffectManager']['postEffectList'].length) tView['postEffectManager'].render(redGL, gl, self, tView, time, tRenderInfo)
                tRenderInfo['postEffectRenderTime'] = performance.now() - tRenderInfo['viewRenderTime'];
                tRenderInfo['viewRenderTime'] -= time;
                // })
            }
            if (this['renderDebuger']['visible']) this['renderDebuger'].update(redGL, self['renderInfo'])
        }
    })();
    RedRenderer.prototype.sceneRender = (function () {
        var draw;
        var tPrevIndexBuffer_UUID;
        var tPrevInterleaveBuffer_UUID;
        var tPrevSamplerIndex;
        draw = function (redGL,
                         scene,
                         children,
                         camera,
                         orthographicYn,
                         time,
                         renderResultObj,
                         tCacheInfo,
                         tCacheState,
                         parentMTX,
                         subSceneMaterial,
                         transparentMode) {
            var i, i2;
            // 캐쉬관련
            var tGL = redGL.gl
            var tCacheInterleaveBuffer = tCacheInfo['cacheAttrInfo'];
            var tCacheUniformInfo = tCacheInfo['cacheUniformInfo'];
            var tCacheSamplerIndex = tCacheInfo['cacheSamplerIndex'];
            var tCacheTexture = tCacheInfo['cacheTexture'];
            // 오쏘고날 스케일 비율
            var orthographicYnScale = orthographicYn ? -1 : 1;
            //
            var CONVERT_RADIAN;
            //
            var tMesh, tGeometry, tMaterial;
            var tLODInfo;
            var tAttrGroup, tAttributeLocationInfo, tInterleaveDefineInfo, tInterleaveDefineUnit;
            var tUniformGroup, tSystemUniformGroup, tUniformLocationInfo, tWebGLUniformLocation,
                tWebGLAttributeLocation;
            var tInterleaveBuffer, tIndexBufferInfo;
            var tUniformValue
            var tRenderType, tRenderTypeIndex;
            var tMVMatrix, tNMatrix
            var tUUID;
            var tSamplerIndex;
            var tSprite3DYn, tLODData, tDirectionalShadowMaterialYn, tSkinInfo, tUseFog;
            var tProgram, tOptionProgramKey, tOptionProgram;
            // matix 관련
            var a,
                aSx, aSy, aSz, aCx, aCy, aCz, tRx, tRy, tRz,
                a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33,
                b0, b1, b2, b3,
                b00, b01, b02, b10, b11, b12, b20, b21, b22,
                aX, aY, aZ,
                inverse_c, inverse_d, inverse_e, inverse_g, inverse_f, inverse_h, inverse_i, inverse_j, inverse_k,
                inverse_l, inverse_n, inverse_o, inverse_A, inverse_m, inverse_p, inverse_r, inverse_s, inverse_B,
                inverse_t, inverse_u, inverse_v, inverse_w, inverse_x, inverse_y, inverse_z, inverse_C, inverse_D,
                inverse_E, inverse_q;
            // sin,cos 관련
            var tRadian, CPI, CPI2, C225, C127, C045, C157;
            // LOD 관련
            var lodX, lodY, lodZ, lodDistance;
            // 프로그램 성택관련
            var tUseDirectionalShadow
            var tProgramList;
            var tBaseProgramKey;
            //////////////// 변수값 할당 ////////////////
            CONVERT_RADIAN = Math.PI / 180;
            CPI = 3.141592653589793, CPI2 = 6.283185307179586, C225 = 0.225, C127 = 1.27323954, C045 = 0.405284735, C157 = 1.5707963267948966;
            //////////////// 렌더시작 ////////////////
            i = children.length
            var len3 = children.length - 1
            tUseFog = scene['_useFog']
            while (i--) {
                renderResultObj['call']++;
                tMesh = children[len3 - i];
                tMVMatrix = tMesh['matrix'];
                tNMatrix = tMesh['normalMatrix'];
                tGeometry = tMesh['_geometry'];
                tSprite3DYn = tMesh['_sprite3DYn'];
                tSkinInfo = tMesh['skinInfo']
                // LOD체크
                if (tMesh['useLOD']) {
                    lodX = camera.x - tMesh.x;
                    lodY = camera.y - tMesh.y;
                    lodZ = camera.z - tMesh.z
                    lodDistance = Math.abs(Math.sqrt(lodX * lodX + lodY * lodY + lodZ * lodZ));
                    tLODInfo = tMesh['_lodLevels']
                    for (var k in tLODInfo) {
                        tLODData = tLODInfo[k]
                        if (tLODData['distance'] < lodDistance) {
                            tMesh['_geometry'] = tLODData['geometry'];
                            tMesh['_material'] = tLODData['material'];
                        }
                    }
                }
                if (tGeometry) {
                    tMaterial = subSceneMaterial ? subSceneMaterial : tMesh['_material'];
                    tDirectionalShadowMaterialYn = tMaterial['_RedDirectionalShadowYn'];
                    // 마우스 이벤트 커러설정
                    tMaterial['_RedMouseEventMaterialYn'] ? tMaterial['color'] = tMesh['_mouseColorID'] : 0
                    // SpriteSheet체크
                    if (tMaterial['__RedSheetMaterialYn']) {
                        if (!tMaterial['_nextFrameTime']) tMaterial['_nextFrameTime'] = tMaterial['_perFrameTime'] + time
                        if (tMaterial['_playYn'] && tMaterial['_nextFrameTime'] < time) {
                            var gapFrame = parseInt((time - tMaterial['_nextFrameTime']) / tMaterial['_perFrameTime']);
                            gapFrame = gapFrame || 1
                            tMaterial['_nextFrameTime'] = tMaterial['_perFrameTime'] + time;
                            tMaterial['currentIndex'] += gapFrame;
                            if (tMaterial['currentIndex'] >= tMaterial['totalFrame']) {
                                if (tMaterial['_loop']) tMaterial['_playYn'] = true, tMaterial['currentIndex'] = 0;
                                else tMaterial['_playYn'] = false, tMaterial['currentIndex'] = tMaterial['totalFrame'] - 1
                            }
                        }
                        tMaterial['_sheetRect'][0] = 1 / tMaterial['_segmentW'];
                        tMaterial['_sheetRect'][1] = 1 / tMaterial['_segmentH'];
                        tMaterial['_sheetRect'][2] = (tMaterial['currentIndex'] % tMaterial['_segmentW']) / tMaterial['_segmentW'];
                        tMaterial['_sheetRect'][3] = Math.floor(tMaterial['currentIndex'] / tMaterial['_segmentH']) / tMaterial['_segmentH'];
                    }
                    // 재질 캐싱
                    // Program 판단
                    //TODO: 프로그램 생성로직정리후 선택로직 확정
                    tUseDirectionalShadow = scene['shadowManager']['_directionalShadow'];
                    tProgram = tMaterial['program']
                    if (tProgram['_prepareProgramYn']) {
                        tProgram = tMaterial['program'] = tProgram._makePrepareProgram();
                    }
                    tOptionProgramKey = null;
                    tOptionProgram = null;
                    tBaseProgramKey = tProgram['key']
                    tProgramList = tMaterial['_programList']
                    //TODO: 스킨관련 추가해야함
                    if (tProgramList) {
                        if (tUseDirectionalShadow) {
                            if (tUseFog && tSprite3DYn) tOptionProgramKey = 'directionalShadow_fog_sprite3D'
                            else if (tUseFog && tSkinInfo) tOptionProgramKey = 'directionalShadow_fog_skin'
                            else if (tSkinInfo) tOptionProgramKey = 'directionalShadow_skin'
                            else if (tSprite3DYn) tOptionProgramKey = 'directionalShadow_sprite3D'
                            else if (tUseFog) tOptionProgramKey = 'directionalShadow_fog'
                            else tOptionProgramKey = 'directionalShadow'
                        }
                        else {
                            if (tUseFog && tSprite3DYn) tOptionProgramKey = 'fog_sprite3D'
                            else if (tUseFog && tSkinInfo) tOptionProgramKey = 'fog_skin'
                            else if (tSkinInfo) tOptionProgramKey = 'skin'
                            else if (tSprite3DYn) tOptionProgramKey = 'sprite3D'
                            else if (tUseFog) tOptionProgramKey = 'fog'
                        }
                    }

                    if (tOptionProgramKey) {
                        tOptionProgram = tProgramList[tOptionProgramKey][tBaseProgramKey];
                        // try {
                        //     tOptionProgram['_prepareProgramYn']
                        // } catch (e) {
                        //     console.log(e, tProgram, tProgramList, tOptionProgramKey, tBaseProgramKey)
                        // }

                        if (tOptionProgram['_prepareProgramYn']) {
                            console.log(tProgramList, tOptionProgramKey, tBaseProgramKey)
                            tOptionProgram = tProgramList[tOptionProgramKey][tBaseProgramKey] = tOptionProgram._makePrepareProgram();
                        }
                        tProgram = tOptionProgram
                    }
                    //
                    prevProgram_UUID == tProgram['_UUID'] ? 0 : tGL.useProgram(tProgram['webglProgram']);
                    prevProgram_UUID = tProgram['_UUID'];
                    // 업데이트할 어트리뷰트와 유니폼 정보를 가져옴
                    tAttrGroup = tProgram['attributeLocation'];
                    tUniformGroup = tProgram['uniformLocation'];
                    tSystemUniformGroup = tProgram['systemUniformLocation'];
                    // 버퍼를 찾는다.
                    tInterleaveBuffer = tGeometry['interleaveBuffer']; // 인터리브 버퍼
                    tIndexBufferInfo = tGeometry['indexBuffer']; // 엘리먼트 버퍼
                    /////////////////////////////////////////////////////////////////////////
                    /////////////////////////////////////////////////////////////////////////
                    // 버퍼의 UUID
                    tUUID = tInterleaveBuffer['_UUID'];
                    // 실제 버퍼 바인딩하고
                    // 프로그램의 어트리뷰트를 순환한다.
                    i2 = tAttrGroup.length;
                    // interleaveDefineInfoList 정보를 가져온다.
                    tInterleaveDefineInfo = tInterleaveBuffer['interleaveDefineInfoList'];
                    tPrevInterleaveBuffer_UUID == tUUID ? 0 : tGL.bindBuffer(tGL.ARRAY_BUFFER, tInterleaveBuffer['webglBuffer']);
                    tPrevInterleaveBuffer_UUID = tUUID;
                    while (i2--) {
                        // 대상 어트리뷰트의 로케이션 정보를 구함
                        tAttributeLocationInfo = tAttrGroup[i2];
                        // 대상 어트리뷰트의 이름으로 interleaveDefineInfoList에서 단위 인터리브 정보를 가져온다.
                        tInterleaveDefineUnit = tInterleaveDefineInfo[tAttributeLocationInfo['name']];
                        /*
                         어트리뷰트 정보매칭이 안되는 녀석은 무시한다
                         이경우는 버퍼상에는 존재하지만 프로그램에서 사용하지 않는경우이다.
                        */
                        // webgl location도 알아낸다.
                        tWebGLAttributeLocation = tAttributeLocationInfo['location']
                        if (tInterleaveDefineUnit && tCacheInterleaveBuffer[tWebGLAttributeLocation] != tInterleaveDefineUnit['_UUID']) {
                            // 해당로케이션을 활성화된적이없으면 활성화 시킨다
                            tAttributeLocationInfo['enabled'] ? 0 : tGL.enableVertexAttribArray(tWebGLAttributeLocation);
                            tAttributeLocationInfo['enabled'] = 1;
                            tGL.vertexAttribPointer(
                                tWebGLAttributeLocation,
                                tInterleaveDefineUnit['size'],
                                tInterleaveBuffer['glArrayType'],
                                tInterleaveDefineUnit['normalize'],
                                tInterleaveBuffer['stride_BYTES_PER_ELEMENT'], //stride
                                tInterleaveDefineUnit['offset_BYTES_PER_ELEMENT'] //offset
                                // tInterleaveBuffer['stride'] * BYTES_PER_ELEMENT, //stride
                                // tInterleaveDefineUnit['offset'] * BYTES_PER_ELEMENT //offset
                            );
                            // 상태 캐싱
                            tCacheInterleaveBuffer[tWebGLAttributeLocation] = tInterleaveDefineUnit['_UUID']
                        }

                    }
                    /////////////////////////////////////////////////////////////////////////
                    /////////////////////////////////////////////////////////////////////////
                    // 유니폼 업데이트
                    i2 = tUniformGroup.length;
                    while (i2--) {
                        tUniformLocationInfo = tUniformGroup[i2];
                        tWebGLUniformLocation = tUniformLocationInfo['location'];
                        tUUID = tUniformLocationInfo['_UUID'];
                        tRenderTypeIndex = tUniformLocationInfo['renderTypeIndex'];
                        tRenderType = tUniformLocationInfo['renderType'];
                        tUniformValue = tMaterial[tUniformLocationInfo['materialPropertyName']];
                        // console.log(tCacheInfo)
                        if (tRenderType == 'sampler2D' || tRenderType == 'samplerCube') {
                            tSamplerIndex = tUniformLocationInfo['samplerIndex'];
                            // samplerIndex : 0,1 번은 생성용으로 쓴다.
                            if (tUniformValue) {
                                if (tCacheTexture[tSamplerIndex] != tUniformValue['_UUID']) {
                                    tPrevSamplerIndex == tSamplerIndex ? 0 : tGL.activeTexture(tGL.TEXTURE0 + (tPrevSamplerIndex = tSamplerIndex));
                                    if (tUniformValue['_videoDom']) {
                                        //TODO: 일단 비디오를 우겨넣었으니 정리를 해야함
                                        tGL.bindTexture(tGL.TEXTURE_2D, tUniformValue['webglTexture']);
                                        if (tUniformValue['_videoDom']['loaded']) tGL.texImage2D(tGL.TEXTURE_2D, 0, tGL.RGBA, tGL.RGBA, tGL.UNSIGNED_BYTE, tUniformValue['_videoDom'])
                                        tCacheTexture = [];
                                    } else tGL.bindTexture(tRenderType == 'sampler2D' ? tGL.TEXTURE_2D : tGL.TEXTURE_CUBE_MAP, tUniformValue['webglTexture']);
                                    tCacheSamplerIndex[tUUID] == tSamplerIndex ? 0 : tGL.uniform1i(tWebGLUniformLocation, tCacheSamplerIndex[tUUID] = tSamplerIndex);
                                    tCacheTexture[tSamplerIndex] = tUniformValue['_UUID'];

                                }
                                // // 아틀라스 UV검색
                                // if ( tSystemUniformGroup['uAtlascoord']['location'] ) {
                                // 	tUUID = tSystemUniformGroup['uAtlascoord']['_UUID']
                                // 	if ( tCacheUniformInfo[tUUID] != tUniformValue['atlascoord']['data']['_UUID'] ) {
                                // 		tGL.uniform4fv(tSystemUniformGroup['uAtlascoord']['location'], tUniformValue['atlascoord']['data'])
                                // 		tCacheUniformInfo[tUUID] = tUniformValue['atlascoord']['data']['_UUID']
                                // 	}
                                // }
                            }
                            else {
                                // TODO: 이제는 이놈들을 날릴수있을듯한데...
                                // console.log('설마',tUniformLocationInfo['materialPropertyName'])
                                if (tRenderType == 'sampler2D') {
                                    if (tCacheTexture[tSamplerIndex] != 0) {
                                        // tPrevSamplerIndex == 0 ? 0 : tGL.activeTexture(tGL.TEXTURE0);
                                        // tGL.bindTexture(tGL.TEXTURE_2D, redGL['_datas']['emptyTexture']['2d']['webglTexture']);
                                        tCacheSamplerIndex[tUUID] == 0 ? 0 : tGL.uniform1i(tWebGLUniformLocation, tCacheSamplerIndex[tUUID] = 0);
                                        tCacheTexture[tSamplerIndex] = 0;
                                        tPrevSamplerIndex = 0;
                                    }
                                } else {
                                    if (tCacheTexture[tSamplerIndex] != 1) {
                                        // tPrevSamplerIndex == 1 ? 0 : tGL.activeTexture(tGL.TEXTURE0 + 1);
                                        // tGL.bindTexture(tGL.TEXTURE_CUBE_MAP, redGL['_datas']['emptyTexture']['3d']['webglTexture']);
                                        tCacheSamplerIndex[tUUID] == 1 ? 0 : tGL.uniform1i(tWebGLUniformLocation, tCacheSamplerIndex[tUUID] = 1);
                                        tCacheTexture[tSamplerIndex] = 1;
                                        tPrevSamplerIndex = 1;
                                    }
                                }
                            }
                        } else {
                            tUniformValue == undefined ? RedGLUtil.throwFunc('RedRenderer : Material에 ', tUniformLocationInfo['materialPropertyName'], '이 정의 되지않았습니다.') : 0;
                            //TODO: 비교계산을 줄일수는 없을까...
                            tRenderTypeIndex < 13 ? tCacheUniformInfo[tUUID] == tUniformValue ? 0 : tGL[tUniformLocationInfo['renderMethod']](tWebGLUniformLocation, (tCacheUniformInfo[tUUID] = tRenderTypeIndex == 12 ? null : tUniformValue, tUniformValue)) :
                                tRenderTypeIndex == 13 ? tGL[tUniformLocationInfo['renderMethod']](tWebGLUniformLocation, false, tUniformValue) :
                                    RedGLUtil.throwFunc('RedRenderer : 처리할수없는 타입입니다.', 'tRenderType -', tRenderType)
                            // tRenderType == 'float' || tRenderType == 'int' || tRenderType == 'bool' ? tCacheUniformInfo[tUUID] == tUniformValue ? 0 : tGL[tUniformLocationInfo['renderMethod']](tWebGLUniformLocation, (tCacheUniformInfo[tUUID] = tUniformValue.length ? null : tUniformValue, tUniformValue)) :
                            // 	// tRenderType == 'int' ? noChangeUniform ? 0 : tGL[tUniformLocationInfo['renderMethod']](tWebGLUniformLocation, (tCacheUniformInfo[tUUID] = tUniformValue.length ? null : tUniformValue, tUniformValue)) :
                            // 	// 	tRenderType == 'bool' ? noChangeUniform ? 0 : tGL[tUniformLocationInfo['renderMethod']](tWebGLUniformLocation, (tCacheUniformInfo[tUUID] = tUniformValue.length ? null : tUniformValue, tUniformValue)) :
                            // 	tRenderType == 'vec' ? tGL[tUniformLocationInfo['renderMethod']](tWebGLUniformLocation, tUniformValue) :
                            // 		tRenderType == 'mat' ? tGL[tUniformLocationInfo['renderMethod']](tWebGLUniformLocation, false, tUniformValue) :
                            // 			RedGLUtil.throwFunc('RedRenderer : 처리할수없는 타입입니다.', 'tRenderType -', tRenderType)
                        }
                    }
                }
                /////////////////////////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////
                // tMVMatrix
                // tMVMatrix 초기화
                if (tMesh['autoUpdateMatrix']) {
                    tMVMatrix[0] = 1, tMVMatrix[1] = 0, tMVMatrix[2] = 0, tMVMatrix[3] = 0,
                        tMVMatrix[4] = 0, tMVMatrix[5] = 1, tMVMatrix[6] = 0, tMVMatrix[7] = 0,
                        tMVMatrix[8] = 0, tMVMatrix[9] = 0, tMVMatrix[10] = 1, tMVMatrix[11] = 0,
                        tMVMatrix[12] = 0, tMVMatrix[13] = 0, tMVMatrix[14] = 0, tMVMatrix[15] = 1,
                        a = tMVMatrix,
                        // tMVMatrix translate
                        aX = tMesh['x'], aY = tMesh['y'], aZ = tMesh['z'],
                        a[12] = a[0] * aX + a[4] * aY + a[8] * aZ + a[12],
                        a[13] = a[1] * aX + a[5] * aY + a[9] * aZ + a[13],
                        a[14] = a[2] * aX + a[6] * aY + a[10] * aZ + a[14],
                        a[15] = a[3] * aX + a[7] * aY + a[11] * aZ + a[15],
                        // tMVMatrix rotate
                        tSprite3DYn ?
                            (tRx = tRy = tRz = 0) :
                            (tRx = tMesh['rotationX'] * CONVERT_RADIAN, tRy = tMesh['rotationY'] * CONVERT_RADIAN, tRz = tMesh['rotationZ'] * CONVERT_RADIAN),
                        /////////////////////////
                        tRadian = tRx % CPI2,
                        tRadian < -CPI ? tRadian = tRadian + CPI2 : tRadian > CPI ? tRadian = tRadian - CPI2 : 0,
                        tRadian = tRadian < 0 ? C127 * tRadian + C045 * tRadian * tRadian : C127 * tRadian - C045 * tRadian * tRadian,
                        aSx = tRadian < 0 ? C225 * (tRadian * -tRadian - tRadian) + tRadian : C225 * (tRadian * tRadian - tRadian) + tRadian,
                        tRadian = (tRx + C157) % CPI2,
                        tRadian < -CPI ? tRadian = tRadian + CPI2 : tRadian > CPI ? tRadian = tRadian - CPI2 : 0,
                        tRadian = tRadian < 0 ? C127 * tRadian + C045 * tRadian * tRadian : C127 * tRadian - C045 * tRadian * tRadian,
                        aCx = tRadian < 0 ? C225 * (tRadian * -tRadian - tRadian) + tRadian : C225 * (tRadian * tRadian - tRadian) + tRadian,
                        tRadian = tRy % CPI2,
                        tRadian < -CPI ? tRadian = tRadian + CPI2 : tRadian > CPI ? tRadian = tRadian - CPI2 : 0,
                        tRadian = tRadian < 0 ? C127 * tRadian + C045 * tRadian * tRadian : C127 * tRadian - C045 * tRadian * tRadian,
                        aSy = tRadian < 0 ? C225 * (tRadian * -tRadian - tRadian) + tRadian : C225 * (tRadian * tRadian - tRadian) + tRadian,
                        tRadian = (tRy + C157) % CPI2,
                        tRadian < -CPI ? tRadian = tRadian + CPI2 : tRadian > CPI ? tRadian = tRadian - CPI2 : 0,
                        tRadian = tRadian < 0 ? C127 * tRadian + C045 * tRadian * tRadian : C127 * tRadian - C045 * tRadian * tRadian,
                        aCy = tRadian < 0 ? C225 * (tRadian * -tRadian - tRadian) + tRadian : C225 * (tRadian * tRadian - tRadian) + tRadian,
                        tRadian = tRz % CPI2,
                        tRadian < -CPI ? tRadian = tRadian + CPI2 : tRadian > CPI ? tRadian = tRadian - CPI2 : 0,
                        tRadian = tRadian < 0 ? C127 * tRadian + C045 * tRadian * tRadian : C127 * tRadian - C045 * tRadian * tRadian,
                        aSz = tRadian < 0 ? C225 * (tRadian * -tRadian - tRadian) + tRadian : C225 * (tRadian * tRadian - tRadian) + tRadian,
                        tRadian = (tRz + C157) % CPI2,
                        tRadian < -CPI ? tRadian = tRadian + CPI2 : tRadian > CPI ? tRadian = tRadian - CPI2 : 0,
                        tRadian = tRadian < 0 ? C127 * tRadian + C045 * tRadian * tRadian : C127 * tRadian - C045 * tRadian * tRadian,
                        aCz = tRadian < 0 ? C225 * (tRadian * -tRadian - tRadian) + tRadian : C225 * (tRadian * tRadian - tRadian) + tRadian,
                        /////////////////////////
                        a00 = a[0], a01 = a[1], a02 = a[2],
                        a10 = a[4], a11 = a[5], a12 = a[6],
                        a20 = a[8], a21 = a[9], a22 = a[10],
                        b00 = aCy * aCz, b01 = aSx * aSy * aCz - aCx * aSz, b02 = aCx * aSy * aCz + aSx * aSz,
                        b10 = aCy * aSz, b11 = aSx * aSy * aSz + aCx * aCz, b12 = aCx * aSy * aSz - aSx * aCz,
                        b20 = -aSy, b21 = aSx * aCy, b22 = aCx * aCy,
                        a[0] = a00 * b00 + a10 * b01 + a20 * b02, a[1] = a01 * b00 + a11 * b01 + a21 * b02, a[2] = a02 * b00 + a12 * b01 + a22 * b02,
                        a[4] = a00 * b10 + a10 * b11 + a20 * b12, a[5] = a01 * b10 + a11 * b11 + a21 * b12, a[6] = a02 * b10 + a12 * b11 + a22 * b12,
                        a[8] = a00 * b20 + a10 * b21 + a20 * b22, a[9] = a01 * b20 + a11 * b21 + a21 * b22, a[10] = a02 * b20 + a12 * b21 + a22 * b22,
                        // tMVMatrix scale
                        aX = tMesh['scaleX'], aY = tMesh['scaleY'] * orthographicYnScale, aZ = tMesh['scaleZ'],
                        a[0] = a[0] * aX, a[1] = a[1] * aX, a[2] = a[2] * aX, a[3] = a[3] * aX,
                        a[4] = a[4] * aY, a[5] = a[5] * aY, a[6] = a[6] * aY, a[7] = a[7] * aY,
                        a[8] = a[8] * aZ, a[9] = a[9] * aZ, a[10] = a[10] * aZ, a[11] = a[11] * aZ,
                        a[12] = a[12], a[13] = a[13], a[14] = a[14], a[15] = a[15],
                        // localMatrix
                        tMesh['localMatrix'][0] = a[0] , tMesh['localMatrix'][1] = a[1] , tMesh['localMatrix'][2] = a[2] , tMesh['localMatrix'][3] = a[3] ,
                        tMesh['localMatrix'][4] = a[4] , tMesh['localMatrix'][5] = a[5] , tMesh['localMatrix'][6] = a[6] , tMesh['localMatrix'][7] = a[7] ,
                    tMesh['localMatrix'][8] = a[8] , tMesh['localMatrix'][9] = a[9] , tMesh['localMatrix'][10] = a[10], tMesh['localMatrix'][11] = a[11] ,
                    tMesh['localMatrix'][12] = a[12], tMesh['localMatrix'][13] = a[13], tMesh['localMatrix'][14] = a[14], tMesh['localMatrix'][15] = a[15],
                    // 부모가있으면 곱함
                    parentMTX ? (
                        // 부모매트릭스 복사
                        // 매트립스 곱
                        a00 = parentMTX[0], a01 = parentMTX[1], a02 = parentMTX[2], a03 = parentMTX[3],
                            a10 = parentMTX[4], a11 = parentMTX[5], a12 = parentMTX[6], a13 = parentMTX[7],
                            a20 = parentMTX[8], a21 = parentMTX[9], a22 = parentMTX[10], a23 = parentMTX[11],
                            a30 = parentMTX[12], a31 = parentMTX[13], a32 = parentMTX[14], a33 = parentMTX[15],
                            // Cache only the current line of the second matrix
                            b0 = tMVMatrix[0], b1 = tMVMatrix[1], b2 = tMVMatrix[2], b3 = tMVMatrix[3],
                            tMVMatrix[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30,
                            tMVMatrix[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31,
                            tMVMatrix[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32,
                            tMVMatrix[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33,
                            b0 = tMVMatrix[4], b1 = tMVMatrix[5], b2 = tMVMatrix[6], b3 = tMVMatrix[7],
                            tMVMatrix[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30,
                            tMVMatrix[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31,
                            tMVMatrix[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32,
                            tMVMatrix[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33,
                            b0 = tMVMatrix[8], b1 = tMVMatrix[9], b2 = tMVMatrix[10], b3 = tMVMatrix[11],
                            tMVMatrix[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30,
                            tMVMatrix[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31,
                            tMVMatrix[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32,
                            tMVMatrix[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33,
                            b0 = tMVMatrix[12], b1 = tMVMatrix[13], b2 = tMVMatrix[14], b3 = tMVMatrix[15],
                            tMVMatrix[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30,
                            tMVMatrix[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31,
                            tMVMatrix[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32,
                            tMVMatrix[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33
                    ) : 0;
                }
                /////////////////////////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////
                if (tGeometry) tGL.uniformMatrix4fv(tSystemUniformGroup['uMMatrix']['location'], false, tMVMatrix)

                if (tSkinInfo) {
                    var globalTransformOfJointNode = []
                    var joints = tSkinInfo['joints']
                    var index = 0, len = joints.length
                    var globalTransformOfNodeThatTheMeshIsAttachedTo = [
                        tMesh['matrix'][0],
                        tMesh['matrix'][1],
                        tMesh['matrix'][2],
                        tMesh['matrix'][3],
                        tMesh['matrix'][4],
                        tMesh['matrix'][5],
                        tMesh['matrix'][6],
                        tMesh['matrix'][7],
                        tMesh['matrix'][8],
                        tMesh['matrix'][9],
                        tMesh['matrix'][10],
                        tMesh['matrix'][11],
                        tMesh['matrix'][12],
                        tMesh['matrix'][13],
                        tMesh['matrix'][14],
                        tMesh['matrix'][15]
                    ]
                    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    // 역구하고
                    // getInverse(globalTransformOfNodeThatTheMeshIsAttachedTo, globalTransformOfNodeThatTheMeshIsAttachedTo)
                    var te = globalTransformOfNodeThatTheMeshIsAttachedTo,
                        me = globalTransformOfNodeThatTheMeshIsAttachedTo,
                        n11 = me[0], n21 = me[1], n31 = me[2], n41 = me[3],
                        n12 = me[4], n22 = me[5], n32 = me[6], n42 = me[7],
                        n13 = me[8], n23 = me[9], n33 = me[10], n43 = me[11],
                        n14 = me[12], n24 = me[13], n34 = me[14], n44 = me[15],
                        t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44,
                        t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44,
                        t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44,
                        t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;
                    var det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;
                    if (det === 0) {
                        console.warn("can't invert matrix, determinant is 0");
                        return mat4.identity(globalTransformOfNodeThatTheMeshIsAttachedTo);
                    } else {
                        var detInv = 1 / det;
                        te[0] = t11 * detInv;
                        te[1] = (n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44) * detInv;
                        te[2] = (n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44) * detInv;
                        te[3] = (n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43) * detInv;
                        te[4] = t12 * detInv;
                        te[5] = (n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44) * detInv;
                        te[6] = (n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44) * detInv;
                        te[7] = (n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43) * detInv;
                        te[8] = t13 * detInv;
                        te[9] = (n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44) * detInv;
                        te[10] = (n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44) * detInv;
                        te[11] = (n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43) * detInv;
                        te[12] = t14 * detInv;
                        te[13] = (n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34) * detInv;
                        te[14] = (n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34) * detInv;
                        te[15] = (n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33) * detInv;
                    }
                    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    // 글로벌 조인트 노드병합함
                    //TODO: 여기 캐싱할 방법 찾아야함
                    for (index; index < len; index++) {
                        // 조인트 공간내에서의 전역
                        globalTransformOfJointNode[index * 16 + 0] = joints[index]['matrix'][0]
                        globalTransformOfJointNode[index * 16 + 1] = joints[index]['matrix'][1]
                        globalTransformOfJointNode[index * 16 + 2] = joints[index]['matrix'][2]
                        globalTransformOfJointNode[index * 16 + 3] = joints[index]['matrix'][3]
                        globalTransformOfJointNode[index * 16 + 4] = joints[index]['matrix'][4]
                        globalTransformOfJointNode[index * 16 + 5] = joints[index]['matrix'][5]
                        globalTransformOfJointNode[index * 16 + 6] = joints[index]['matrix'][6]
                        globalTransformOfJointNode[index * 16 + 7] = joints[index]['matrix'][7]
                        globalTransformOfJointNode[index * 16 + 8] = joints[index]['matrix'][8]
                        globalTransformOfJointNode[index * 16 + 9] = joints[index]['matrix'][9]
                        globalTransformOfJointNode[index * 16 + 10] = joints[index]['matrix'][10]
                        globalTransformOfJointNode[index * 16 + 11] = joints[index]['matrix'][11]
                        globalTransformOfJointNode[index * 16 + 12] = joints[index]['matrix'][12]
                        globalTransformOfJointNode[index * 16 + 13] = joints[index]['matrix'][13]
                        globalTransformOfJointNode[index * 16 + 14] = joints[index]['matrix'][14]
                        globalTransformOfJointNode[index * 16 + 15] = joints[index]['matrix'][15]
                    }
                    tGL.uniformMatrix4fv(tSystemUniformGroup['uGlobalTransformOfNodeThatTheMeshIsAttachedTo']['location'], false, globalTransformOfNodeThatTheMeshIsAttachedTo)
                    tGL.uniformMatrix4fv(tSystemUniformGroup['uJointMatrix']['location'], false, globalTransformOfJointNode)
                    tGL.uniformMatrix4fv(tSystemUniformGroup['uInverseBindMatrixForJoint']['location'], false, tSkinInfo['inverseBindMatrices'])
                }
                /////////////////////////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////
                // 노말매트릭스를 사용할경우
                if (tGeometry && tSystemUniformGroup && tSystemUniformGroup['uNMatrix']['location']) {
                    //클론
                    // mat4Inverse
                    inverse_c = tMVMatrix[0], inverse_d = tMVMatrix[1], inverse_e = tMVMatrix[2], inverse_g = tMVMatrix[3],
                        inverse_f = tMVMatrix[4], inverse_h = tMVMatrix[5], inverse_i = tMVMatrix[6], inverse_j = tMVMatrix[7],
                        inverse_k = tMVMatrix[8], inverse_l = tMVMatrix[9], inverse_n = tMVMatrix[10], inverse_o = tMVMatrix[11],
                        inverse_m = tMVMatrix[12], inverse_p = tMVMatrix[13], inverse_r = tMVMatrix[14], inverse_s = tMVMatrix[15],
                        inverse_A = inverse_c * inverse_h - inverse_d * inverse_f,
                        inverse_B = inverse_c * inverse_i - inverse_e * inverse_f,
                        inverse_t = inverse_c * inverse_j - inverse_g * inverse_f,
                        inverse_u = inverse_d * inverse_i - inverse_e * inverse_h,
                        inverse_v = inverse_d * inverse_j - inverse_g * inverse_h,
                        inverse_w = inverse_e * inverse_j - inverse_g * inverse_i,
                        inverse_x = inverse_k * inverse_p - inverse_l * inverse_m,
                        inverse_y = inverse_k * inverse_r - inverse_n * inverse_m,
                        inverse_z = inverse_k * inverse_s - inverse_o * inverse_m,
                        inverse_C = inverse_l * inverse_r - inverse_n * inverse_p,
                        inverse_D = inverse_l * inverse_s - inverse_o * inverse_p,
                        inverse_E = inverse_n * inverse_s - inverse_o * inverse_r,
                        inverse_q = inverse_A * inverse_E - inverse_B * inverse_D + inverse_t * inverse_C + inverse_u * inverse_z - inverse_v * inverse_y + inverse_w * inverse_x,
                        inverse_q = 1 / inverse_q,
                        tNMatrix[0] = (inverse_h * inverse_E - inverse_i * inverse_D + inverse_j * inverse_C) * inverse_q,
                        tNMatrix[1] = (-inverse_d * inverse_E + inverse_e * inverse_D - inverse_g * inverse_C) * inverse_q,
                        tNMatrix[2] = (inverse_p * inverse_w - inverse_r * inverse_v + inverse_s * inverse_u) * inverse_q,
                        tNMatrix[3] = (-inverse_l * inverse_w + inverse_n * inverse_v - inverse_o * inverse_u) * inverse_q,
                        tNMatrix[4] = (-inverse_f * inverse_E + inverse_i * inverse_z - inverse_j * inverse_y) * inverse_q,
                        tNMatrix[5] = (inverse_c * inverse_E - inverse_e * inverse_z + inverse_g * inverse_y) * inverse_q,
                        tNMatrix[6] = (-inverse_m * inverse_w + inverse_r * inverse_t - inverse_s * inverse_B) * inverse_q,
                        tNMatrix[7] = (inverse_k * inverse_w - inverse_n * inverse_t + inverse_o * inverse_B) * inverse_q,
                        tNMatrix[8] = (inverse_f * inverse_D - inverse_h * inverse_z + inverse_j * inverse_x) * inverse_q,
                        tNMatrix[9] = (-inverse_c * inverse_D + inverse_d * inverse_z - inverse_g * inverse_x) * inverse_q,
                        tNMatrix[10] = (inverse_m * inverse_v - inverse_p * inverse_t + inverse_s * inverse_A) * inverse_q,
                        tNMatrix[11] = (-inverse_k * inverse_v + inverse_l * inverse_t - inverse_o * inverse_A) * inverse_q,
                        tNMatrix[12] = (-inverse_f * inverse_C + inverse_h * inverse_y - inverse_i * inverse_x) * inverse_q,
                        tNMatrix[13] = (inverse_c * inverse_C - inverse_d * inverse_y + inverse_e * inverse_x) * inverse_q,
                        tNMatrix[14] = (-inverse_m * inverse_u + inverse_p * inverse_B - inverse_r * inverse_A) * inverse_q,
                        tNMatrix[15] = (inverse_k * inverse_u - inverse_l * inverse_B + inverse_n * inverse_A) * inverse_q,
                        // transpose
                        a01 = tNMatrix[1], a02 = tNMatrix[2], a03 = tNMatrix[3],
                        a12 = tNMatrix[6], a13 = tNMatrix[7], a23 = tNMatrix[11],
                        tNMatrix[1] = tNMatrix[4], tNMatrix[2] = tNMatrix[8], tNMatrix[3] = tNMatrix[12], tNMatrix[4] = a01, tNMatrix[6] = tNMatrix[9],
                        tNMatrix[7] = tNMatrix[13], tNMatrix[8] = a02, tNMatrix[9] = a12, tNMatrix[11] = tNMatrix[14],
                        tNMatrix[12] = a03, tNMatrix[13] = a13, tNMatrix[14] = a23,
                        // uNMatrix 입력
                        tGL.uniformMatrix4fv(tSystemUniformGroup['uNMatrix']['location'], false, tNMatrix)
                }
                if (tGeometry) {
                    /////////////////////////////////////////////////////////////////////////
                    /////////////////////////////////////////////////////////////////////////
                    // 상태처리
                    // 컬페이스 사용여부 캐싱처리
                    tCacheState['useCullFace'] != tMesh['useCullFace'] ? (tCacheState['useCullFace'] = tMesh['useCullFace']) ? tGL.enable(tGL.CULL_FACE) : tGL.disable(tGL.CULL_FACE) : 0;
                    // 컬페이스 캐싱처리
                    tCacheState['useCullFace'] ? tCacheState['cullFace'] != tMesh['cullFace'] ? tGL.cullFace(tCacheState['cullFace'] = tMesh['cullFace']) : 0 : 0;
                    // 뎁스마스크처리
                    tCacheState['useDepthMask'] != tMesh['useDepthMask'] ? tGL.depthMask(tCacheState['useDepthMask'] = tMesh['useDepthMask']) : 0;
                    // 뎁스테스트 사용여부 캐싱처리
                    tCacheState['useDepthTest'] != tMesh['useDepthTest'] ? (tCacheState['useDepthTest'] = tMesh['useDepthTest']) ? tGL.enable(tGL.DEPTH_TEST) : tGL.disable(tGL.DEPTH_TEST) : 0;
                    // 뎁스테스팅 캐싱처리
                    tCacheState['useDepthTest'] ? tCacheState['depthTestFunc'] != tMesh['depthTestFunc'] ? tGL.depthFunc(tCacheState['depthTestFunc'] = tMesh['depthTestFunc']) : 0 : 0;
                    if (tSystemUniformGroup['uPointSize']['use']) {
                        tCacheState['pointSize'] != tMesh['pointSize'] ? tGL.uniform1f(tSystemUniformGroup['uPointSize']['location'], tCacheState['pointSize'] = tMesh['pointSize']) : 0;
                    }
                    if (tSystemUniformGroup['u_PerspectiveScale']['location']) {
                        tUUID = tSystemUniformGroup['u_PerspectiveScale']['_UUID']
                        tUniformValue = tMesh['_perspectiveScale']
                        if (tCacheUniformInfo[tUUID] != tUniformValue) {
                            tGL[tSystemUniformGroup['u_PerspectiveScale']['renderMethod']](tSystemUniformGroup['u_PerspectiveScale']['location'], tUniformValue)
                            tCacheUniformInfo[tUUID] = tUniformValue
                        }
                    }
                    // // 블렌딩 사용여부 캐싱처리
                    if (!tDirectionalShadowMaterialYn) {
                        tCacheState['useBlendMode'] != tMesh['useBlendMode'] ? (tCacheState['useBlendMode'] = tMesh['useBlendMode']) ? tGL.enable(tGL.BLEND) : tGL.disable(tGL.BLEND) : 0;
                        // 블렌딩팩터 캐싱처리
                        if (tCacheState['blendSrc'] != tMesh['blendSrc'] || tCacheState['blendDst'] != tMesh['blendDst']) {
                            tGL.blendFunc(tMesh['blendSrc'], tMesh['blendDst']);
                            tCacheState['blendSrc'] = tMesh['blendSrc'];
                            tCacheState['blendDst'] = tMesh['blendDst'];
                        }
                    }
                    /////////////////////////////////////////////////////////////////////////
                    /////////////////////////////////////////////////////////////////////////
                    if (!transparentMode) {
                        if (tMesh['useTransparentSort']) {
                            transparentList.push(tMesh)
                            tMesh._renderAutoUpdateMatrix = tMesh.autoUpdateMatrix
                            tMesh.autoUpdateMatrix = false
                            continue
                        }
                    } else {
                        tMesh.autoUpdateMatrix = tMesh._renderAutoUpdateMatrix
                    }
                    // 드로우
                    if (tIndexBufferInfo) {
                        tPrevIndexBuffer_UUID == tIndexBufferInfo['_UUID'] ? 0 : tGL.bindBuffer(tGL.ELEMENT_ARRAY_BUFFER, tIndexBufferInfo['webglBuffer'])
                        //enum mode, long count, enum type, long offset
                        tGL.drawElements(
                            tMesh['drawMode'],
                            tIndexBufferInfo['pointNum'],
                            tIndexBufferInfo['glArrayType'],
                            0
                        );
                        tPrevIndexBuffer_UUID = tIndexBufferInfo['_UUID'];
                        renderResultObj['triangleNum'] += tIndexBufferInfo['triangleNum'];
                    } else {
                        tGL.drawArrays(tMesh['drawMode'], 0, tInterleaveBuffer['pointNum'])
                        renderResultObj['triangleNum'] += tInterleaveBuffer['triangleNum'];
                    }

                }
                /////////////////////////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////
                tMesh['children'].length ? draw(redGL, scene, tMesh['children'], camera, orthographicYn, time, renderResultObj, tCacheInfo, tCacheState, tMVMatrix, subSceneMaterial, transparentMode) : 0;
            }
        }
        return function (redGL, scene, camera, orthographicYn, children, time, renderResultObj, subSceneMaterial, transparentMode) {
            // if ( this['cacheState']['pointSize'] == undefined ) this['cacheState']['pointSize'] = null
            // if ( !this['cacheState']['useCullFace'] ) this['cacheState']['useCullFace'] = null
            // if ( !this['cacheState']['cullFace'] ) this['cacheState']['cullFace'] = null
            // if ( !this['cacheState']['useDepthTest'] ) this['cacheState']['useDepthTest'] = null
            // if ( !this['cacheState']['useDepthMask'] ) this['cacheState']['useDepthMask'] = null
            // if ( !this['cacheState']['depthTestFunc'] ) this['cacheState']['depthTestFunc'] = null
            // if ( !this['cacheState']['useBlendMode'] ) this['cacheState']['useBlendMode'] = null
            // if ( !this['cacheState']['blendSrc'] ) this['cacheState']['blendSrc'] = null
            // if ( !this['cacheState']['blendDst'] ) this['cacheState']['blendDst'] = null
            // this['cacheSamplerIndex'].length = 0
            this['cacheInfo']['cacheTexture'].length = 0
            // this['cacheInfo']['cacheTexture'][39] = null
            // console.log(this['cacheInfo']['cacheSamplerIndex'])
            tPrevIndexBuffer_UUID = null;
            tPrevInterleaveBuffer_UUID = null;
            tPrevSamplerIndex = null;
            draw(
                redGL,
                scene,
                children,
                camera,
                orthographicYn,
                time,
                renderResultObj,
                this['cacheInfo'],
                this['cacheState'],
                undefined,
                subSceneMaterial,
                transparentMode
            )
        }
    })()
    Object.freeze(RedRenderer);
})();

"use strict";
var RedRenderDebuger;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedRenderDebuger`,
		 description : `
			 RedRenderDebuger Instance 생성
			 렌더러 생성시 시스템적으로 자동생성됨.
			 시스템적으로 사용됨.
		 `,
		 return : 'RedRenderDebuger Instance'
	 }
     :DOC*/
    RedRenderDebuger = function () {
        if (!(this instanceof RedRenderDebuger)) return new RedRenderDebuger();
        if (window['HTMLCanvasElement']) {
            if (!this['renderResult']) {
                this['renderResult'] = document.createElement('div')
                this['_contentBox'] = document.createElement('div')
                this['_etcBox'] = document.createElement('div')
                this['renderResult'].appendChild(this['_contentBox'])
                this['renderResult'].appendChild(this['_etcBox'])
                this['renderResult'].style.cssText = 'position:absolute;bottom:0px;left:0px;color:#fff;font:11px Lucida Grande,sans-serif;font-size:11px;background:rgba(0,0,0,0.75);padding:3px;width:300px'
                this['_etcBox'].style.cssText = 'position:relative;color:#fff;font:11px Lucida Grande,sans-serif;font-size:11px;padding:3px;margin-top:10px;'
                var t0 = document.createElement('a');
                t0.style.padding = '5px';
                t0.style.borderRadius = '2px';
                t0.style.background = 'rgba(91, 82, 170,0.8)';
                t0.style.color = '#fff';
                t0.style.textDecoration = 'none';
                t0.style.display = 'block';
                t0.setAttribute('href', 'https://redcamel.github.io/RedGL2/redDoc/index.html');
                t0.innerHTML = 'API document';
                this['_etcBox'].appendChild(t0);
                t0 = document.createElement('a');
                t0.style.padding = '5px';
                t0.style.borderRadius = '2px';
                t0.style.background = 'rgba(91, 82, 170,0.8)';
                t0.style.color = '#fff';
                t0.style.textDecoration = 'none';
                t0.style.display = 'block';
                t0.style.marginTop = '2px';
                t0.setAttribute('href', 'https://github.com/redcamel/RedGL2');
                t0.innerHTML = 'GITHUB';
                this['_etcBox'].appendChild(t0);
            }
        }
        this['_visible'] = false
    }
    RedRenderDebuger.prototype = {
        update: function (redGL, renderInfo) {
            if (window['HTMLCanvasElement']) {
                this['_contentBox'].innerHTML = ''
                var t0 = ''
                var totalRenderTime = 0
                var postEffectRenderTime = 0
                for (var k in renderInfo) {
                    // console.log(tRenderer['renderInfo'][k])
                    t0 +=
                        '<div style="padding:5px">' +
                        '<div><b style="color:rgb(242, 169, 113)">RedView : key - ' + renderInfo[k]['key'] + '</b></div>' +
                        ' orthographicYn - ' + '<b style="color:rgb(191, 82, 170)">' + renderInfo[k]['orthographicYn'] + '</b>' +
                        ' <br>call - ' + '<b style="color:rgb(191, 82, 170)">' + renderInfo[k]['call'] + '</b>' +
                        ' <br>triangleNum - ' + '<b style="color:rgb(191, 82, 170)">' + renderInfo[k]['triangleNum'] + '</b>' +
                        ' <br> width - ' + '<b style="color:rgb(191, 82, 170)">' + renderInfo[k]['width'] + '</b>' +
                        ' / height - ' + '<b style="color:rgb(191, 82, 170)">' + renderInfo[k]['height'] + '</b>' +
                        ' <br> viewRectWidth - ' + '<b style="color:rgb(191, 82, 170)">' + renderInfo[k]['viewRectWidth'] + '</b>' +
                        ' / viewRectHeight - ' + '<b style="color:rgb(191, 82, 170)">' + renderInfo[k]['viewRectHeight'] + '</b>' +
                        ' <br> x - ' + '<b style="color:rgb(191, 82, 170)">' + renderInfo[k]['x'] + '</b>' +
                        ' / y - ' + '<b style="color:rgb(191, 82, 170)">' + renderInfo[k]['y'] + '</b>' +
                        '<div>renderTime</div>' +
                        '<div style="padding:5px 7px 7px 7px;background:rgba(0,0,0, 0.5);">' +
                        '<div>viewRenderTime - <b style="color:rgb(191, 82, 170)">' + renderInfo[k]['viewRenderTime'].toFixed(2) + 'ms</b></div>' +
                        '<div>baseRenderTime - <b style="color:rgb(191, 82, 170)">' + (renderInfo[k]['viewRenderTime'] - renderInfo[k]['postEffectRenderTime']).toFixed(2) + 'ms</b></div>' +
                        '<div>postEffectRenderTime - <b style="color:rgb(191, 82, 170)">' + renderInfo[k]['postEffectRenderTime'].toFixed(2) + 'ms</b></div>' +
                        '</div>' +
                        '</div>';
                    totalRenderTime += renderInfo[k]['viewRenderTime'];
                    postEffectRenderTime += renderInfo[k]['postEffectRenderTime'];
                }
                t0 += '<div style="padding:0px 5px">'
                t0 += '<div>renderScale : <span style="padding:3px;background:#000">' + redGL['renderScale'] + '</span></div>'
                t0 += '<div>totalRenderTime : <span style="padding:3px;background:#000">' + totalRenderTime.toFixed(2) + 'ms</span></div>'
                t0 += '<div>baseRenderTime : <span style="padding:3px;background:#000">' + (totalRenderTime - postEffectRenderTime).toFixed(2) + 'ms</span></div>'
                t0 += '<div>postEffectRenderTime : <span style="padding:3px;background:#000">' + postEffectRenderTime.toFixed(2) + 'ms</span></div>'
                t0 += '</div>';
                this['_contentBox'].innerHTML = t0;
            }
        }
    }
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`visible`,
		 description : `
			 RedRenderDebuger 정보 visible 여부
		 `,
		 return : 'Boolean'
	 }
     :DOC*/
    Object.defineProperty(RedRenderDebuger.prototype, 'visible', {
        get: function () {
            return this['_visible']
        },
        set: function (v) {
            this['_visible'] = v
            if (window['HTMLCanvasElement']) {
                if (this['_visible']) document.body.appendChild(this['renderResult'])
                else {
                    if (this['renderResult'].parentNode) document.body.removeChild(this['renderResult'])
                }
            }
        }
    })
    Object.freeze(RedRenderDebuger);
})();

"use strict";
var RedSystemUniformUpdater;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedSystemUniformUpdater`,
		 description : `
			 시스템 유니폼 전담 업데이터.
			 시스템 적으로 사용됨으로 사용자 접근은 필요없음.
		 `,
		 return : 'void'
	 }
     :DOC*/

    RedSystemUniformUpdater = {
        /**DOC:
         {
			 code:`STATIC METHOD`,
			 title :`update`,
			 description : `
				 시스템 유니폼 업데이터
			 `,
			 params : {
				 redGL : [
					 {type : "RedGL"}
				 ],
				 redRenderer : [
					 {type : "RedRenderer"}
				 ],
				 tView : [
					 {type : "RedView"}
				 ],
				 prevProgram_UUID : [
					 {type : "Int"}
				 ],
				 lightDebugRenderList : [
					 {type : "Array"}
				 ]
			 },
			 return : 'void'
		 }
         :DOC*/
        update: (function () {
            var prevRedGL;
            var tGL;
            var tProgram;
            var tSystemUniformGroup, tLocationInfo, tLocation, tUUID;
            var tValue, tValueStr;
            // 라이트관련
            var tDirectionalPositionList, tDirectionalLightColorList, tDirectionalLightIntensityList;
            var tPointLightPositionList, tPointLightColorList, tPointLightIntensityList, tPointLightRadiusList;
            var tLightList, tLight;
            var tLightData, tLightDebugObj;
            var tVector;
            //
            var i, k;
            var checkUniformInfo, needUpdateUniformInfo;
            // 쉐도우관련
            var tDirectionalShadowLightMatrix, tDirectionalShadowSize, tDirectionalShadowLightProjectionMatrix,
                tDirectionalShadowLightPosition;
            var tShadowSamplerIndex, prevShadowSamplerIndex;
            //
            var tCacheSystemUniformInfo;
            var tScene, tCamera, tViewRect;
            var programNum = 0;
            var changedProgramNum; // 프로그램 갯수가 변했는가
            var MAX_DIRECTIONAL_LIGHT_NUM;
            var MAX_POINT_LIGHT_NUM;
            //
            var tCheckData;

            //
            tVector = new Float32Array(3);
            return function (redGL, redRenderer, time, tView, prevProgram_UUID, lightDebugRenderList) {
                if (prevRedGL != redGL) checkUniformInfo = null
                if (!checkUniformInfo) {
                    MAX_DIRECTIONAL_LIGHT_NUM = RedSystemShaderCode.MAX_DIRECTIONAL_LIGHT;
                    MAX_POINT_LIGHT_NUM = RedSystemShaderCode.MAX_POINT_LIGHT;
                    checkUniformInfo = {
                        uTime: {cacheData: null, data: 0},
                        uResolution: {cacheData: null, data: new Float32Array([0, 0])},
                        u_FogDensity: {cacheData: null, data: 0},
                        uFogColor: {cacheData: null, data: new Float32Array([0, 0, 0, 0])},
                        u_FogDistance: {cacheData: null, data: 0},
                        uCameraMatrix: {cacheData: null, data: null},
                        uCameraPosition: {cacheData: null, data: new Float32Array([0, 0, 0])},
                        uPMatrix: {cacheData: null, data: null},
                        uOrthographicYn: {cacheData: null, data: false},
                        uAmbientLightColor: {cacheData: null, data: new Float32Array([0, 0, 0, 0])},
                        uAmbientIntensity: {cacheData: null, data: 1},
                        uDirectionalLightPositionList: {cacheData: null, data: []},
                        uDirectionalLightColorList: {cacheData: null, data: []},
                        uDirectionalLightIntensityList: {cacheData: null, data: []},
                        uDirectionalLightNum: {cacheData: null, data: 0},
                        uPointLightPositionList: {cacheData: null, data: []},
                        uPointLightColorList: {cacheData: null, data: []},
                        uPointLightIntensityList: {cacheData: null, data: []},
                        uPointLightRadiusList: {cacheData: null, data: []},
                        uPointLightNum: {cacheData: null, data: 0}
                    };
                    // 디렉셔널 쉐도우 관련
                    tDirectionalShadowLightPosition = new Float32Array(3);
                    tDirectionalShadowLightMatrix = new Float32Array(16);
                    tDirectionalShadowLightProjectionMatrix = new Float32Array(16);
                    // 디렉셔널 라이트 관련;
                    tDirectionalPositionList = new Float32Array(3 * MAX_DIRECTIONAL_LIGHT_NUM);
                    tDirectionalLightColorList = new Float32Array(4 * MAX_DIRECTIONAL_LIGHT_NUM);
                    tDirectionalLightIntensityList = new Float32Array(MAX_DIRECTIONAL_LIGHT_NUM);
                    // 포인트 라이트 관련
                    tPointLightPositionList = new Float32Array(3 * MAX_POINT_LIGHT_NUM);
                    tPointLightColorList = new Float32Array(4 * MAX_POINT_LIGHT_NUM);
                    tPointLightIntensityList = new Float32Array(MAX_POINT_LIGHT_NUM);
                    tPointLightRadiusList = new Float32Array(MAX_POINT_LIGHT_NUM);
                }
                tGL = redGL.gl;
                tScene = tView['scene'];
                tCamera = tView['camera'];
                tCamera = tCamera instanceof RedBaseController ? tCamera.camera : tCamera;
                tViewRect = tView['_viewRect'];
                tCacheSystemUniformInfo = redRenderer['cacheInfo']['cacheSystemUniformInfo'];
                prevShadowSamplerIndex = null;
                needUpdateUniformInfo = {};
                lightDebugRenderList.length = 0;
                // console.log('programNum', programNum)
                // 프로그램 변경여부 판단
                changedProgramNum = programNum != redGL['_datas']['RedProgramList'].length;
                programNum = 0;
                // 데이터 업데이트
                // 타임업데이트
                tCheckData = checkUniformInfo['uTime'];
                if (tCheckData['cacheData'] != time) {
                    needUpdateUniformInfo['uTime'] = tCheckData['data'] = time;
                    tCheckData['cacheData'] = time;
                }
                // 레롤루션업데이트
                tValueStr = JSON.stringify(tViewRect);
                tCheckData = checkUniformInfo['uResolution'];
                if (tCheckData['cacheData'] != tValueStr || changedProgramNum) {
                    tCheckData['data'][0] = tViewRect[2];
                    tCheckData['data'][1] = tViewRect[3];
                    needUpdateUniformInfo['uResolution'] = tCheckData['data'];
                    tCheckData['cacheData'] = tValueStr;
                }
                // 안개밀도 업데이트
                tValueStr = tScene['_fogDensity'];
                tCheckData = checkUniformInfo['u_FogDensity'];
                if (tCheckData['cacheData'] != tValueStr || changedProgramNum) {
                    needUpdateUniformInfo['u_FogDensity'] = tCheckData['data'] = tValueStr;
                    tCheckData['cacheData'] = tValueStr;
                }
                // 안개색상 업데이트
                tValueStr = tScene['_fogR'] + '_' + tScene['_fogG'] + '_' + tScene['_fogB'] + '_' + 1;
                tCheckData = checkUniformInfo['uFogColor'];
                if (tCheckData['cacheData'] != tValueStr || changedProgramNum) {
                    tCheckData['data'][0] = tScene['_fogR'];
                    tCheckData['data'][1] = tScene['_fogG'];
                    tCheckData['data'][2] = tScene['_fogB'];
                    tCheckData['data'][3] = 1;
                    needUpdateUniformInfo['uFogColor'] = tCheckData['data'];
                    tCheckData['cacheData'] = tValueStr;
                }
                // 안개 가시거리 업데이트
                tValueStr = tScene['_fogDistance'];
                tCheckData = checkUniformInfo['u_FogDistance'];
                if (tCheckData['cacheData'] != tValueStr || changedProgramNum) {
                    needUpdateUniformInfo['u_FogDistance'] = tCheckData['data'] = tValueStr;
                    tCheckData['cacheData'] = tValueStr;
                }
                // 카메라 매트릭스 업데이트
                tValueStr = JSON.stringify(tCamera['matrix']);
                tCheckData = checkUniformInfo['uCameraMatrix'];
                if (tCheckData['cacheData'] != tValueStr || changedProgramNum) {
                    needUpdateUniformInfo['uCameraMatrix'] = tCheckData['data'] = tCamera['matrix'];
                    tCheckData['cacheData'] = tValueStr;
                }

                if (tCamera['camera']) tValueStr = [tCamera.camera.x, tCamera.camera.y, tCamera.camera.z];
                else tValueStr = [tCamera.x, tCamera.y, tCamera.z];
                if (tCheckData['cacheData'] != tValueStr.join(',') || changedProgramNum) {
                    tCheckData = checkUniformInfo['uCameraPosition'];
                    needUpdateUniformInfo['uCameraPosition'] = tCheckData['data'] = tValueStr;
                    tCheckData['cacheData'] = tValueStr.join(',');
                }


                tValueStr = JSON.stringify(tCamera['orthographicYn']);
                tCheckData = checkUniformInfo['uOrthographicYn'];
                if (tCheckData['cacheData'] != tValueStr || changedProgramNum) {
                    needUpdateUniformInfo['uOrthographicYn'] = tCheckData['data'] = tCamera['orthographicYn'];
                    tCheckData['cacheData'] = tValueStr;
                }

                // 퍼스펙티브 매트릭스 업데이트
                tValueStr = JSON.stringify(tCamera['perspectiveMTX']);
                tCheckData = checkUniformInfo['uPMatrix'];
                if (tCheckData['cacheData'] != tValueStr || changedProgramNum) {
                    needUpdateUniformInfo['uPMatrix'] = tCheckData['data'] = tCamera['perspectiveMTX'];
                    tCheckData['cacheData'] = tValueStr;
                }
                // 암비안트 라이트 업데이트
                if (tLightData = tScene['_lightInfo'][RedAmbientLight['TYPE']]) {
                    tValueStr = JSON.stringify(tLightData['_lightColor']);
                    tCheckData = checkUniformInfo['uAmbientLightColor'];
                    if (tCheckData['cacheData'] != tValueStr || changedProgramNum) {
                        needUpdateUniformInfo['uAmbientLightColor'] = tCheckData['data'] = [
                            tLightData['_lightColor'][0],
                            tLightData['_lightColor'][1],
                            tLightData['_lightColor'][2],
                            tLightData['_lightColor'][3]
                        ];
                        tCheckData['cacheData'] = tValueStr;
                        needUpdateUniformInfo['uAmbientLightColor'][0] *= needUpdateUniformInfo['uAmbientLightColor'][3]
                        needUpdateUniformInfo['uAmbientLightColor'][1] *= needUpdateUniformInfo['uAmbientLightColor'][3]
                        needUpdateUniformInfo['uAmbientLightColor'][2] *= needUpdateUniformInfo['uAmbientLightColor'][3]
                    }
                    //
                    tValueStr = tLightData['_intensity'];
                    tCheckData = checkUniformInfo['uAmbientIntensity'];
                    if (tCheckData['cacheData'] != tValueStr || changedProgramNum) {
                        needUpdateUniformInfo['uAmbientIntensity'] = tCheckData['data'] = tLightData['_intensity'];
                        tCheckData['cacheData'] = tValueStr;
                    }
                }
                // 디렉셔널 라이트 업데이트
                tLightList = tScene['_lightInfo'][RedDirectionalLight['TYPE']];
                i = tLightList.length;
                while (i--) {
                    tLightData = tLightList[i];
                    tVector[0] = tLightData['x'];
                    tVector[1] = tLightData['y'];
                    tVector[2] = tLightData['z'];
                    if (tLightData['debug']) {
                        tLightDebugObj = tLightData['_debugObject'];
                        tLightDebugObj['x'] = tVector[0];
                        tLightDebugObj['y'] = tVector[1];
                        tLightDebugObj['z'] = tVector[2];
                        tLightDebugObj['_material']['_color'] = tLightData['_lightColor'];
                        lightDebugRenderList.push(tLightDebugObj);
                    }
                    //
                    vec3.normalize(tVector, tVector);
                    tDirectionalPositionList[0 + 3 * i] = tVector[0];
                    tDirectionalPositionList[1 + 3 * i] = tVector[1];
                    tDirectionalPositionList[2 + 3 * i] = tVector[2];
                    //
                    tDirectionalLightColorList[0 + 4 * i] = tLightData['_lightColor'][0] * tLightData['_lightColor'][3];
                    tDirectionalLightColorList[1 + 4 * i] = tLightData['_lightColor'][1] * tLightData['_lightColor'][3];
                    tDirectionalLightColorList[2 + 4 * i] = tLightData['_lightColor'][2] * tLightData['_lightColor'][3];
                    tDirectionalLightColorList[3 + 4 * i] = tLightData['_lightColor'][3];
                    tDirectionalLightIntensityList[i] = tLightData['_intensity'];
                }
                //
                tValueStr = JSON.stringify(tDirectionalPositionList);
                tCheckData = checkUniformInfo['uDirectionalLightPositionList'];
                if (tCheckData['cacheData'] != tValueStr || changedProgramNum) {
                    needUpdateUniformInfo['uDirectionalLightPositionList'] = tCheckData['data'] = tDirectionalPositionList;
                    tCheckData['cacheData'] = tValueStr;
                }
                //
                tValueStr = JSON.stringify(tDirectionalLightColorList);
                tCheckData = checkUniformInfo['uDirectionalLightColorList'];
                if (tCheckData['cacheData'] != tValueStr || changedProgramNum) {
                    needUpdateUniformInfo['uDirectionalLightColorList'] = tCheckData['data'] = tDirectionalLightColorList;
                    tCheckData['cacheData'] = tValueStr;
                }
                //
                tValueStr = JSON.stringify(tDirectionalLightIntensityList);
                tCheckData = checkUniformInfo['uDirectionalLightIntensityList'];
                if (tCheckData['cacheData'] != tValueStr || changedProgramNum) {
                    needUpdateUniformInfo['uDirectionalLightIntensityList'] = tCheckData['data'] = tDirectionalLightIntensityList;
                    tCheckData['cacheData'] = tValueStr;
                }
                //
                tValueStr = tLightList.length;
                tCheckData = checkUniformInfo['uDirectionalLightNum'];
                if (tCheckData['cacheData'] != tValueStr || changedProgramNum) {
                    needUpdateUniformInfo['uDirectionalLightNum'] = tCheckData['data'] = tValueStr;
                    tCheckData['cacheData'] = tValueStr;
                }
                // 포인트 라이트 업데이트
                tLightList = tScene['_lightInfo'][RedPointLight['TYPE']];
                i = tLightList.length;
                while (i--) {
                    tLightData = tLightList[i];
                    tVector[0] = tLightData['x'];
                    tVector[1] = tLightData['y'];
                    tVector[2] = tLightData['z'];
                    if (tLightData['debug']) {
                        tLightDebugObj = tLightData['_debugObject'];
                        tLightDebugObj['x'] = tVector[0];
                        tLightDebugObj['y'] = tVector[1];
                        tLightDebugObj['z'] = tVector[2];
                        tLightDebugObj['scaleX'] = tLightDebugObj['scaleY'] = tLightDebugObj['scaleZ'] = tLightData['_radius'];
                        tLightDebugObj['_material']['_color'] = tLightData['_lightColor'];
                        lightDebugRenderList.push(tLightDebugObj);
                    }
                    //
                    tPointLightPositionList[0 + 3 * i] = tVector[0];
                    tPointLightPositionList[1 + 3 * i] = tVector[1];
                    tPointLightPositionList[2 + 3 * i] = tVector[2];
                    tPointLightColorList[0 + 4 * i] = tLightData['_lightColor'][0] * tLightData['_lightColor'][3];
                    tPointLightColorList[1 + 4 * i] = tLightData['_lightColor'][1] * tLightData['_lightColor'][3];
                    tPointLightColorList[2 + 4 * i] = tLightData['_lightColor'][2] * tLightData['_lightColor'][3];
                    tPointLightColorList[3 + 4 * i] = tLightData['_lightColor'][3];
                    //
                    tPointLightIntensityList[i] = tLightData['_intensity'];
                    //
                    tPointLightRadiusList[i] = tLightData['_radius'];
                }
                //
                tValueStr = JSON.stringify(tPointLightPositionList);
                tCheckData = checkUniformInfo['uPointLightPositionList'];
                if (tCheckData['cacheData'] != tValueStr || changedProgramNum) {
                    needUpdateUniformInfo['uPointLightPositionList'] = tCheckData['data'] = tPointLightPositionList;
                    tCheckData['cacheData'] = tValueStr;
                }
                //
                tValueStr = JSON.stringify(tPointLightColorList);
                tCheckData = checkUniformInfo['uPointLightColorList'];
                if (tCheckData['cacheData'] != tValueStr || changedProgramNum) {
                    needUpdateUniformInfo['uPointLightColorList'] = tCheckData['data'] = tPointLightColorList;
                    tCheckData['cacheData'] = tValueStr;
                }
                //
                tValueStr = JSON.stringify(tPointLightIntensityList);
                tCheckData = checkUniformInfo['uPointLightIntensityList'];
                if (tCheckData['cacheData'] != tValueStr || changedProgramNum) {
                    needUpdateUniformInfo['uPointLightIntensityList'] = tCheckData['data'] = tPointLightIntensityList;
                    tCheckData['cacheData'] = tValueStr;
                }
                //
                tValueStr = JSON.stringify(tPointLightRadiusList);
                tCheckData = checkUniformInfo['uPointLightRadiusList'];
                if (tCheckData['cacheData'] != tValueStr || changedProgramNum) {
                    needUpdateUniformInfo['uPointLightRadiusList'] = tCheckData['data'] = tPointLightRadiusList;
                    tCheckData['cacheData'] = tValueStr;
                }
                //
                tValueStr = tLightList.length;
                tCheckData = checkUniformInfo['uPointLightNum'];
                if (tCheckData['cacheData'] != tValueStr || changedProgramNum) {
                    needUpdateUniformInfo['uPointLightNum'] = tCheckData['data'] = tValueStr;
                    tCheckData['cacheData'] = tValueStr;
                }
                // 디렉셔널 쉐도우 라이트 매트릭스 계산
                if (tScene['shadowManager']['_directionalShadow']) {
                    tDirectionalShadowLightMatrix[1] = tDirectionalShadowLightMatrix[2] = tDirectionalShadowLightMatrix[3] = tDirectionalShadowLightMatrix[4] = tDirectionalShadowLightMatrix[6] = tDirectionalShadowLightMatrix[7] = tDirectionalShadowLightMatrix[8] = tDirectionalShadowLightMatrix[9] = tDirectionalShadowLightMatrix[11] = tDirectionalShadowLightMatrix[12] = tDirectionalShadowLightMatrix[13] = tDirectionalShadowLightMatrix[14] = 0;
                    tDirectionalShadowLightMatrix[0] = tDirectionalShadowLightMatrix[5] = tDirectionalShadowLightMatrix[10] = tDirectionalShadowLightMatrix[15] = 1;
                    tDirectionalShadowSize = tScene['shadowManager']['_directionalShadow']['size'];
                    tLight = tScene['shadowManager']['_directionalShadow']['_light'];
                    mat4.ortho(tDirectionalShadowLightProjectionMatrix, -tDirectionalShadowSize, tDirectionalShadowSize, -tDirectionalShadowSize, tDirectionalShadowSize, -tDirectionalShadowSize, tDirectionalShadowSize);
                    tDirectionalShadowLightPosition[0] = 0;
                    tDirectionalShadowLightPosition[1] = 0;
                    tDirectionalShadowLightPosition[2] = 0;
                    if (tLight) {
                        tDirectionalShadowLightPosition[0] = tLight.x;
                        tDirectionalShadowLightPosition[1] = tLight.y;
                        tDirectionalShadowLightPosition[2] = tLight.z;
                        vec3.normalize(tDirectionalShadowLightPosition, tDirectionalShadowLightPosition);
                        mat4.lookAt(
                            tDirectionalShadowLightMatrix,
                            tDirectionalShadowLightPosition,
                            [0, 0, 0],
                            [0, 1, 0]
                        );
                        mat4.multiply(tDirectionalShadowLightMatrix, tDirectionalShadowLightProjectionMatrix, tDirectionalShadowLightMatrix);
                    }
                }
                // 실제업데이트
                // for ( var k in redGL['_datas']['RedProgram'] ) {
                i = redGL['_datas']['RedProgramList'].length;
                while (i--) {
                    programNum++;
                    tProgram = redGL['_datas']['RedProgramList'][i];
                    tGL.useProgram(tProgram['webglProgram']);
                    prevProgram_UUID = tProgram['_UUID'];
                    tSystemUniformGroup = tProgram['systemUniformLocation'];
                    // 디렉셔널 쉐도우 라이트 매트릭스
                    tLocationInfo = tSystemUniformGroup['uDirectionalShadowLightMatrix'];
                    tLocation = tLocationInfo['location'];
                    tUUID = tLocationInfo['_UUID'];
                    if (tLocation) {
                        if (tScene['shadowManager']['_directionalShadow']) {
                            tLight = tScene['shadowManager']['_directionalShadow']['_light'];
                            if (tLight) {
                                tValueStr = JSON.stringify(tDirectionalShadowLightMatrix);
                                if (tCacheSystemUniformInfo[tUUID] != tValueStr) {
                                    tGL.uniformMatrix4fv(tLocation, false, tDirectionalShadowLightMatrix);
                                    tCacheSystemUniformInfo[tUUID] = tValueStr;
                                }
                            }
                        }
                    }
                    // 디렉셔널 쉐도우 텍스쳐
                    tLocationInfo = tSystemUniformGroup['uDirectionalShadowTexture'];
                    if (tLocationInfo) {
                        tLocation = tLocationInfo['location'];
                        if (tLocation) {
                            tUUID = tLocationInfo['_UUID'];
                            if (tScene['shadowManager']['_directionalShadow']) tValue = tScene['shadowManager']['directionalShadow']['frameBuffer']['texture'];
                            else tValue = redGL['_datas']['emptyTexture']['2d'];
                            tShadowSamplerIndex = tLocationInfo['samplerIndex'];
                            if (tShadowSamplerIndex != prevShadowSamplerIndex) {
                                tGL.activeTexture(tGL.TEXTURE0 + tShadowSamplerIndex);
                                tGL.bindTexture(tGL.TEXTURE_2D, tValue['webglTexture']);
                                tGL[tLocationInfo['renderMethod']](tLocation, tShadowSamplerIndex);
                            }
                            prevShadowSamplerIndex = tShadowSamplerIndex;
                        }
                    }
                    // 업데이트
                    for (k in needUpdateUniformInfo) {
                        tLocationInfo = tSystemUniformGroup[k];
                        // if ( tLocationInfo ) {
                        tLocation = tLocationInfo['location'];
                        if (tLocation) {
                            tUUID = tLocationInfo['_UUID'];
                            tValue = needUpdateUniformInfo[k];
                            tLocationInfo['renderType'] == 'mat' ? tGL[tLocationInfo['renderMethod']](tLocation, false, tValue) : tGL[tLocationInfo['renderMethod']](tLocation, tValue);
                            tCacheSystemUniformInfo[tUUID] = null;
                        }
                        // }
                    }
                }
                return prevProgram_UUID
            }
        })()
    };
    Object.freeze(RedSystemUniformUpdater);
})();

"use strict";
var RedView;
(function () {
    var ViewMap;
    ViewMap = {};
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedView`,
		 description : `
			 고유 키를 기반으로 <b>RedScene</b>과 <b>RedCamera를</b> 쌍으로 하는 정보를 소유.
			 <b>RedWorld</b>에 등록되어지며 실제 렌더링시 필요한 그려질 <b>크기</b>와 <b>위치</b>를 결정한다.
		 `,
		 params : {
			 key :[
				 {type:'String'},
				 '고유키',
				 'key만 입력시에 기존에 존재하는 키일경우 <b>캐쉬된 Instance</b>를 반환'
			 ],
			 redGL : [
			    {type:'RedGL'},
			 ],
			 scene :[
				 {type:'RedScene'},
				 'RedScene Instance'
			 ],
			 camera :[
				 {type:'RedCamera'},
				 'RedCamera or RedController Instance'
			 ]
		 },
		 demo : '../example/etc/RedView.html',
		 example : `
			 var tWorld;
			 RedView('테스트뷰1', RedGL Instance, RedScene Instance, RedCamera Instance); // "테스트뷰1" 라는 키값을 가진 RedView 생성
			 RedView('테스트뷰2', RedGL Instance, RedScene Instance, RedCamera Instance); // "테스트뷰2" 라는 키값을 가진 RedView 생성
		 `,
		 return : 'RedView Instance'
	 }
     :DOC*/
    RedView = function (key, redGL, scene, camera) {
        if (ViewMap[key]) {
            if (scene || camera) RedGLUtil.throwFunc('RedView : ' + key, '는 이미 생성된 RedView key입니다.', '입력값 : ' + key);
            else return ViewMap[key];
        }
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedScene : RedGL Instance만 허용.', redGL);
        if (!(this instanceof RedView)) return new RedView(key, redGL, scene, camera);
        typeof key == 'string' || RedGLUtil.throwFunc('RedView : key : 문자열만 허용', '입력값 : ' + key);
        if (!scene && !camera) RedGLUtil.throwFunc('RedView : 존재하지 않는 key입니다.', '입력값 : ' + key);
        if (scene && !(scene instanceof RedScene)) RedGLUtil.throwFunc('RedView : RedScene Instance만 허용', '입력값 : ' + scene);
        if (camera) {
            if (camera && !(camera instanceof RedCamera) && !(camera instanceof RedBaseController)) RedGLUtil.throwFunc('RedView : RedCamera or XXController Instance만 허용');
        }
        else RedGLUtil.throwFunc('RedView : RedCamera or XXController Instance만 허용', '입력값 : ' + camera);
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`key`,
			 description : `고유키`,
			 return : 'String'
		 }
         :DOC*/
        this['key'] = key;
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`scene`,
			 description : `그려질 RedScene`,
			 return : 'RedScene'
		 }
         :DOC*/
        this['scene'] = scene;
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`postEffectManager`,
			 description : `
				 포스트 이펙트 매니저.
				 RedView 생성시 기본적으로 생성되어있음.
			 `,
			 return : 'RedPostEffectManager Instance'
		 }
         :DOC*/
        this['postEffectManager'] = RedPostEffectManager(redGL);
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`camera`,
			 description : `대상 RedScene을 관찰할 카메라`,
			 return : 'RedCamera or RedController'
		 }
         :DOC*/
        this['camera'] = camera;
        this['_width'] = '100%';
        this['_height'] = '100%';
        this['_x'] = 0;
        this['_y'] = 0;
        this['_viewRect'] = [0, 0, 0, 0];
        ViewMap[key] = this;
        console.log(this);
    };
    RedView.prototype = {
        /**DOC:
         {
			 code : 'METHOD',
			 title :`setSize`,
			 description : `
				  씬의 사이즈를 결정.
				  px, % 단위를 받음.
			 `,
			 params : {
			    width : [
			        { type : 'Number or %' }
			    ],
			    height : [
			        { type : 'Number or %' }
			    ]
			 },
			 example : `
				  var tWorld;
				  RedView('테스트뷰', RedGL Instance, RedScene Instance, RedCamera Instance); // "테스트뷰" 라는 키값을 가진 RedView 생성
				  RedView('테스트뷰').setSize(100,100); // 가로,세로 100px * 100px 설정
				  RedView('테스트뷰').setSize('50%',100); // 가로,세로 50% * 100px 설정 (RedGL이 소유하고 있는 캔버스 사이즈 기준으로 % 계산됨)
			 `,
			 return : 'void'
		 }
         :DOC*/
        setSize: function (width, height) {
            if (width == undefined) RedGLUtil.throwFunc('RedView setSize : width가 입력되지 않았습니다.');
            if (height == undefined) RedGLUtil.throwFunc('RedView setSize : height가 입력되지 않았습니다.');
            if (typeof width == 'number') this['_width'] = width < 0 ? 0 : width;
            else {
                if (width.indexOf('%') > -1 && (+width.replace('%', '') >= 0)) this['_width'] = width;
                else RedGLUtil.throwFunc('RedView setSize : width는 0이상의 숫자나 %만 허용.', width);
            }
            if (typeof height == 'number') this['_height'] = height < 0 ? 0 : height;
            else {
                if (height.indexOf('%') > -1 && (+height.replace('%', '') >= 0)) this['_height'] = height;
                else RedGLUtil.throwFunc('RedView setSize : height는 0이상의 숫자나 %만 허용.', height);
            }
        },
        /**DOC:
         {
			 code : 'METHOD',
			 title :`setLocation`,
			 description : `
				 씬의 위치를 결정.
				 px, % 단위를 받음.
			 `,
			 params : {
			    x : [
			        { type : 'Number or %' }
			    ],
			    y : [
			        { type : 'Number or %' }
			    ]
			 },
			 example : `
				  var tWorld;
				  RedView('테스트뷰', RedGL Instance, RedScene Instance, RedCamera Instance); // "테스트뷰" 라는 키값을 가진 RedView 생성
				  RedView('테스트뷰').setLocation(100,100); // x,y 100px * 100px 설정
				  RedView('테스트뷰').setLocation('50%',100); // x,y 50% * 100px 설정 (RedGL이 소유하고 있는 캔버스 사이즈 기준으로 % 계산됨)
			 `,
			 return : 'void'
		 }
         :DOC*/
        setLocation: function (x, y) {
            if (x == undefined) RedGLUtil.throwFunc('RedView setLocation : x가 입력되지 않았습니다.');
            if (y == undefined) RedGLUtil.throwFunc('RedView setLocation : y가 입력되지 않았습니다.');
            if (typeof x == 'number') this['_x'] = x < 0 ? 0 : x;
            else {
                if (x.indexOf('%') > -1 && (+x.replace('%', '') >= 0)) this['_x'] = x;
                else RedGLUtil.throwFunc('RedView setLocation : x는 0이상의 숫자나 %만 허용.', x);
            }
            if (typeof y == 'number') this['_y'] = y < 0 ? 0 : y;
            else {
                if (y.indexOf('%') > -1 && (+y.replace('%', '') >= 0)) this['_y'] = y;
                else RedGLUtil.throwFunc('RedView setLocation : y는 0이상의 숫자나 %만 허용.', y);
            }
        }
    };
    Object.freeze(RedView);
})();

"use strict";
var RedWorld;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedWorld`,
		 description : `
			 RedWorld Instance 생성자.
			 RedGL Instance 에 설정가능함.
			 RedView 목록을 관리함.
			 RedWorld 내의 RedView 를 렌더링 대상으로 함.
		 `,
		 demo : '../example/etc/RedWorld.html',
		 example : `
			 RedWorld(); // RedWorld Instance 생성
		 `,
		 return : 'RedWorld Instance'
	 }
     :DOC*/
    RedWorld = function () {
        if (!(this instanceof RedWorld)) return new RedWorld();
        this['_viewList'] = [];
        this['_viewMap'] = {};
        this['_UUID'] = RedGL.makeUUID();
        //Object.seal(this)
        console.log(this);
    };
    RedWorld.prototype = {
        /**DOC:
         {
			 code:`METHOD`,
			 title :`addView`,
			 description : `getViewList`,
			 params : {
				 redView :[
					 {type:'RedView'},
					 '추가할 RedView Instance'
				 ]
			 },
			 example : `
				 var testWorld = RedWorld(); // 월드생성
				 var testView = RedView( '뷰이름', RedGL Instance, RedScene Instance, RedCamera Instance ); // 뷰생성
				 testWorld.addView( testView ); // 뷰등록
			`,
			 return : 'void'
		 }
         :DOC*/
        addView: function (redView) {
            redView instanceof RedView || RedGLUtil.throwFunc('RedWorld :addView Instance만 허용함.', '입력값 : ' + redView);
            this['_viewMap'][redView['key']] = redView;
            this['_viewList'].push(redView);
        },
        /**DOC:
         {
			 code:`METHOD`,
			 title :`getView`,
			 description : `고유키 기반 뷰 검색`,
			 params : {
				 key :[
					 {type:'String'},
					 '고유키'
				 ]
			 },
			 example : `
				 var testWorld = RedWorld(); // 월드생성
				 var testView = RedView( '뷰이름', RedGL Instance, RedScene Instance, RedCamera Instance ); // 뷰생성
				 testWorld.addView( testView ); // 뷰등록
				 console.log( testWorld.getView('뷰이름') ); // testView 반환
				 testWorld.delView('뷰이름');
				 console.log( testWorld.getView('뷰이름') ); // undefined 반환
			`,
			 return : 'RedView'
		 }
         :DOC*/
        getView: function (key) {
            typeof key == 'string' || RedGLUtil.throwFunc('RedWorld :getView 문자열만 허용함.', '입력값 : ' + key);
            return this['_viewMap'][key]
        },
        /**DOC:
         {
			 code:`METHOD`,
			 title :`delView`,
			 description : `고유키 기반 뷰 삭제`,
			 params : {
				 key :[
					 {type:'String'},
					 '고유키'
				 ]
			 },
			 example : `
				 var testWorld = RedWorld(); // 월드생성
				 var testView = RedView( '뷰이름', RedGL Instance, RedScene Instance, RedCamera Instance ); // 뷰생성
				 testWorld.addView( testView ); // 뷰등록
				 console.log( testWorld.getView('뷰이름') ); // testView 반환
				 testWorld.delView('뷰이름');
				 console.log( testWorld.getView('뷰이름') ); // undefined 반환
			`,
			 return : 'void'
		 }
         :DOC*/
        delView: (function () {
            var t0, t1;
            return function (key) {
                typeof key == 'string' || RedGLUtil.throwFunc('RedWorld :delView 문자열만 허용함.', '입력값 : ' + key);
                if (t0 = this['_viewMap'][key]) {
                    t1 = this['_viewList'].indexOf(t0);
                    this['_viewList'].splice(t1, 1);
                    delete this['_viewMap'][key];
                }
            }
        })(),
        /**DOC:
         {
			 code:`METHOD`,
			 title :`hasView`,
			 description : `고유키 기반 뷰 존재여부 반환.`,
			 params : {
				 key :[
					 {type:'String'},
					 '고유키'
				 ]
			 },
			 example : `
				 var testWorld = RedWorld(); // 월드생성
				 var testView = RedView( '뷰이름', RedGL Instance, RedScene Instance, RedCamera Instance ); // 뷰생성
				 testWorld.addView( testView ); // 뷰등록
				 console.log(testWorld.hasView('뷰이름')) // true 반환
			`,
			 return : 'Boolean'
		 }
         :DOC*/
        hasView: function (key) {
            typeof key == 'string' || RedGLUtil.throwFunc('RedWorld :hasView 문자열만 허용함.', '입력값 : ' + key);
            return this['_viewMap'][key] ? true : false;
        },
        /**DOC:
         {
			 code:`METHOD`,
			 title :`getViewList`,
			 description : `고유키 기반 렌더정보 검색`,
			 params : {
				 key :[
					 {type:'String'},
					 '고유키'
				 ]
			 },
			 example : `
				 var testWorld = RedWorld(); // 월드생성
				 var testView = RedView( '뷰이름', RedGL Instance, RedScene Instance, RedCamera Instance ); // 뷰생성
				 var testView2 = RedView( '뷰이름2', RedGL Instance, RedScene Instance, RedCamera Instance ); // 뷰생성
				 testWorld.addView( testView ); // 뷰등록
				 testWorld.addView( testView2 ); // 뷰등록
				 console.log(testWorld.getViewList()); // 뷰리스트 반환
			`,
			 return : 'Array'
		 }
         :DOC*/
        getViewList: function () {
            return this['_viewList'].concat();
        }
    };
    Object.freeze(RedWorld);
})();

"use strict";
var RedScene;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedScene`,
		 description : `
		    RedScene Instance 생성자.
		    장면 구성의 기본단위.
		    RedBaseObject3D 확장 객체등을 자식으로 입력하거나 fog 등을 설정 할 수 있다.
		 `,
		 params : {
			 redGL : [
				 {type: 'RedGL Instance'}
			 ],
			 backgroundColor : [
				 {type: 'hex'},
				 '초기값 #000000'
			 ]
		 },
		 example : `
            var testScene;
            testScene = RedScene(RedGL Instance); // RedScene 생성 설정
            testScene.useBackgroundColor = true; // backgroundColor 사용여부 설정
            testScene.backgroundColor = '#fff; // backgroundColor (hex) 설정
            testScene.useFog = true; // fog 사용여부 설정
            testScene.fogDensity = 0.5; // fog 농도 설정
            testScene.fogDistance = 25; // fog 가시거리 설정
            testScene.fogColor = '#fff; // fog 컬러 설정
		 `,
		 demo : '../example/etc/RedScene.html',
		 extends : ['RedBaseContainer'],
		 return : 'RedScene Instance'
	 }
     :DOC*/
    RedScene = function (redGL, backgroundColor) {
        if (!(this instanceof RedScene)) return new RedScene(redGL, backgroundColor);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedScene : RedGL Instance만 허용.', redGL);
        this['backgroundColor'] = backgroundColor ? backgroundColor : '#000000';
        this['useBackgroundColor'] = true;
        this['useFog'] = false;
        this['fogDensity'] = 0.5;
        this['fogDistance'] = 25;
        this['fogColor'] = '#ffffff';
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`children`,
			 description : `자식 리스트`,
			 return : 'Array'
		 }
         :DOC*/
        this['children'] = [];
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`shadowManager`,
			 description : `
				 그림자 매니저.
				 RedScene Instance생성시 자동생성.
			 `,
			 return : 'RedShadowManager Instance'
		 }
         :DOC*/
        this['shadowManager'] = RedShadowManager(redGL);
        this['mouseManager'] = RedMouseEventManager(redGL)
        this['_lightInfo'] = {
            RedAmbientLight: null,
            RedDirectionalLight: [],
            RedPointLight: []
        };
        this['_UUID'] = RedGL.makeUUID();
        console.log(this);
    };
    var prototypeData = {
        /**DOC:
         {
			 title :`addLight`,
			 code : 'METHOD',
			 description : `
				 라이트 추가 매서드.
				 RedBaseLight 확장객체만 등록가능. ( RedAmbientLight, RedDirectionalLight, RedPointLight ).
				 하드웨어 상황에 따른 라이트별 허용갯수까지만 등록가능.
			 `,
			 params : {
			    light : [
			        { type : 'RedBaseLight' }
			    ]
			 },
			 example : `
                var testScene;
                var testLight;
                testScene = RedScene(RedGL Instance); // RedScene 생성 설정
                testLight = RedDirectionalLight(RedGL Instance); // 라이트 생성
                testScene.addLight( testLight ); // 라이트 추가
             `,
			 return : 'void'
		 }
         :DOC*/
        addLight: function (light) {
            switch (light['TYPE']) {
                case RedAmbientLight['TYPE']:
                    this['_lightInfo'][light['TYPE']] = light;
                    break;
                case RedDirectionalLight['TYPE']:
                    if (this['_lightInfo'][light['TYPE']].length == RedSystemShaderCode.MAX_DIRECTIONAL_LIGHT) RedGLUtil.throwFunc('RedScene : RedDirectionalLight ' + RedSystemShaderCode.MAX_DIRECTIONAL_LIGHT + '개 까지 허용.');
                    this['_lightInfo'][light['TYPE']].push(light);
                    break;
                case RedPointLight['TYPE']:
                    if (this['_lightInfo'][light['TYPE']].length == RedSystemShaderCode.MAX_POINT_LIGHT) RedGLUtil.throwFunc('RedScene : RedPointLight ' + RedSystemShaderCode.MAX_POINT_LIGHT + '개 까지 허용.');
                    this['_lightInfo'][light['TYPE']].push(light);
                    break;
                default:
                    RedGLUtil.throwFunc('RedScene : RedBaseLight 인스턴스만 가능');
            }
        },
        /**DOC:
         {
			 title :`removeLight`,
			 code : 'METHOD',
			 description : `
				 라이트 제거 매서드.
				 RedBaseLight 확장객체만 등록가능. ( RedAmbientLight, RedDirectionalLight, RedPointLight )
			 `,
			 params : {
			    light : [
			        { type : 'RedBaseLight' }
			    ]
			 },
			 example : `
                var testScene;
                var testLight;
                testScene = RedScene(RedGL Instance); // RedScene 생성 설정
                testLight = RedDirectionalLight(RedGL Instance); // 라이트 생성
                testScene.addLight( testLight ); // 라이트 추가
                testScene.removeLight( testLight ); // 라이트 제거
             `,
			 return : 'void'
		 }
         :DOC*/
        removeLight: (function () {
            var tIndex;
            return function (light) {
                switch (light['TYPE']) {
                    case RedAmbientLight['TYPE']:
                        if (this['_lightInfo'][light['TYPE']] == light) this['_lightInfo'][light['TYPE']] = null;
                        break;
                    case RedDirectionalLight['TYPE']:
                        tIndex = this['_lightInfo'][light['TYPE']].indexOf(light);
                        if (tIndex > -1) this['_lightInfo'][light['TYPE']].splice(tIndex, 1);
                        break;
                    case RedPointLight['TYPE']:
                        tIndex = this['_lightInfo'][light['TYPE']].indexOf(light);
                        if (tIndex > -1) this['_lightInfo'][light['TYPE']].splice(tIndex, 1);
                        break;
                    default:
                        RedGLUtil.throwFunc('RedScene : RedBaseLight 인스턴스만 가능')
                }
            }
        })()
    };
    RedScene.prototype = new RedBaseContainer();
    for (var k in prototypeData) RedScene.prototype[k] = prototypeData[k];
    /**DOC:
     {
		 code : 'PROPERTY',
		 title :`backgroundColor`,
		 description : `
			 배경 컬러설정.
			 알파설정은 불가능
		 `,
		 params : {
			 hex : [
				 {type: 'hex'},
				 'ex) #fff, #ffffff'
			 ]
		 },
		 return : 'hex'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedScene', 'backgroundColor', 'hex', {
        callback: (function () {
            var t0;
            return function () {
                t0 = RedGLUtil.hexToRGB_ZeroToOne.call(this, this['_backgroundColor']);
                this['_r'] = t0[0];
                this['_g'] = t0[1];
                this['_b'] = t0[2];
            }
        })()
    });
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`useBackgroundColor`,
		 description : `
			 backgroundColor 사용여부.
			 초기값 : true
		 `,
		 return : 'Boolean'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedScene', 'useBackgroundColor', 'boolean', true);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`useFog`,
		 description : `
			 fog 사용여부
			 초기값 : true
		 `,
		 return : 'Boolean'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedScene', 'useFog', 'boolean', true);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`fogDensity`,
		 description : `
			 fog 농도.
			 초기값 : 0.5
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedScene', 'fogDensity', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`fogDistance`,
		 description : `
			 fog 가시거리.
			 초기값 : 25.0
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedScene', 'fogDistance', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`fogColor`,
		 description : `
		     fog 컬러값.
			 초기값 : #ffffff
		 `,
		 return : 'hex'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedScene', 'fogColor', 'hex', {
        callback: (function () {
            var t0;
            return function () {
                t0 = RedGLUtil.hexToRGB_ZeroToOne.call(this, this['_fogColor']);
                this['_fogR'] = t0[0];
                this['_fogG'] = t0[1];
                this['_fogB'] = t0[2];
            }
        })()
    })
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`skyBox`,
		 description : `
			 skyBox get/set
		 `,
         example : `
            var testScene;
            var testSkyBox;
            testScene = RedScene(RedGL Instance); // RedScene 생성 설정
            testSkyBox = RedSkyBox(RedGL Instance, srcList); // skyBox 생성
            testScene.skyBox = testSkyBox; // skyBox 추가
         `,
		 return : 'RedSkyBox Instance'
	 }
     :DOC*/
    Object.defineProperty(RedScene.prototype, 'skyBox', {
        get: function () {
            return this['_skyBoxMesh']
        },
        set: function (v) {
            if (v && !(v instanceof RedSkyBox)) RedGLUtil.throwFunc('RedScene : RedSkyBox Instance만 허용.');
            this['_skyBoxMesh'] = v;
            return this['_skyBoxMesh']
        }
    });
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`grid`,
		 description : `
			 그리드 get/set
		 `,
         example : `
            var testScene;
            var testGrid;
            testScene = RedScene(RedGL Instance); // RedScene 생성 설정
            testGrid = RedGrid(RedGL Instance); // 그리드 생성
            testScene.grid = testGrid; // 그리드 설정
         `,
		 return : 'RedGrid Instance'
	 }
     :DOC*/
    Object.defineProperty(RedScene.prototype, 'grid', {
        get: function () {
            return this['_gridMesh']
        },
        set: function (v) {
            if (v && !(v instanceof RedGrid)) RedGLUtil.throwFunc('RedScene : RedGrid Instance만 허용.');
            this['_gridMesh'] = v;
            return this['_gridMesh'];
        }
    });
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`axis`,
		 description : `
			 axis get/set
		 `,
         example : `
            var testScene;
            var testAxis;
            testScene = RedScene(RedGL Instance); // RedScene 생성 설정
            testAxis = RedAxis(RedGL Instance); // axis 생성
            testScene.axis = testAxis; // axis 설정
         `,
		 return : 'RedAxis Instance'
	 }
     :DOC*/
    Object.defineProperty(RedScene.prototype, 'axis', {
        get: function () {
            return this['_axisMesh']
        },
        set: function (v) {
            if (v && !(v instanceof RedAxis)) RedGLUtil.throwFunc('RedScene : RedAxis Instance만 허용.');
            this['_axisMesh'] = v;
            return this['_axisMesh'];
        }
    });
    Object.freeze(RedScene);
})();

"use strict";
var RedCamera;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedCamera`,
		 description : `
			 RedCamera Instance 생성자.
		 `,
		 demo : '../example/camera/RedCamera.html',
		 example : `
			 RedCamera()
		 `,
		 return : 'RedCamera Instance'
	 }
     :DOC*/
    RedCamera = function () {
        if (!(this instanceof RedCamera)) return new RedCamera();
        /**DOC:
         {
			 code:`PROPERTY`,
			 title :`x`,
			 description : `기본값 : 0`,
			 return : 'Number'
		 }
         :DOC*/
        /**DOC:
         {
			 code:`PROPERTY`,
			 title :`y`,
			 description : `기본값 : 0`,
			 return : 'Number'
		 }
         :DOC*/
        /**DOC:
         {
			 code:`PROPERTY`,
			 title :`z`,
			 description : `기본값 : 0`,
			 return : 'Number'
		 }
         :DOC*/
        this['x'] = this['y'] = this['z'] = 0;
        /**DOC:
         {
			 code:`PROPERTY`,
			 title :`targetX`,
			 description : `
			 카메라가 바라볼 X위치
			 기본값 : 0
			 `,
			 return : 'Number'
		 }
         :DOC*/
        /**DOC:
         {
			 code:`PROPERTY`,
			 title :`targetY`,
			 description : `
			 카메라가 바라볼 Y위치
			 기본값 : 0
			 `,
			 return : 'Number'
		 }
         :DOC*/
        /**DOC:
         {
			 code:`PROPERTY`,
			 title :`targetZ`,
			 description : `
			 카메라가 바라볼 Z위치
			 기본값 : 0
			 `,
			 return : 'Number'
		 }
         :DOC*/
        this['targetX'] = this['targetY'] = this['targetZ'] = 0;
        /**DOC:
         {
			 code:`PROPERTY`,
			 title :`fov`,
			 description : `기본값 : 45degree`,
			 return : 'Number'
		 }
         :DOC*/
        this['fov'] = 60;
        /**DOC:
         {
			 code:`PROPERTY`,
			 title :`nearClipping`,
			 description : `기본값 : 0.1`,
			 return : 'Number'
		 }
         :DOC*/
        this['nearClipping'] = 0.1;
        /**DOC:
         {
			 code:`PROPERTY`,
			 title :`farClipping`,
			 description : `기본값 : 100000`,
			 return : 'Number'
		 }
         :DOC*/
        this['farClipping'] = 100000;
        /**DOC:
         {
			 code:`PROPERTY`,
			 title :`orthographicYn`,
			 description : `기본값 : false`,
			 return : 'Boolean'
		 }
         :DOC*/
        this['orthographicYn'] = false;
        /**DOC:
         {
			 code:`PROPERTY`,
			 title :`matrix`,
			 description : `
			 카메라 매트릭스
			 `,
			 return : 'mat4'
		 }
         :DOC*/
        this['matrix'] = mat4.create();
        /**DOC:
         {
			 code:`PROPERTY`,
			 title :`perspectiveMTX`,
			 description : `
			 orthographicYn값에따라 렌더링시 퍼스펙티브 or 오쏘고날 매트릭스로 자동 변경됨
			 `,
			 return : 'mat4'
		 }
         :DOC*/
        this['perspectiveMTX'] = mat4.create();
        this['autoUpdateMatrix'] = true;
        this['_UUID'] = RedGL.makeUUID();
    };
    RedCamera.prototype['update'] = function () {
        this.lookAt(this['targetX'], this['targetY'], this['targetZ']);
    };
    /**DOC:
     {
		 code:`PROPERTY`,
		 title :`lookAt`,
		 description : `
			 대상 위치를 바라보도록 matrix 설정.
			 실행시 targetX, targetY, targetZ, matrix가 변경됨.
		 `,
		 params : {
			 x : [{type : "Number"}],
			 y : [{type : "Number"}],
			 z : [{type : "Number"}]
		 },
		 example:`
		    RedCamera().lookAt(0,0,0); // 0,0,0을 바라보도록 설정
		 `,
		 return : 'mat4'
	 }
     :DOC*/
    RedCamera.prototype['lookAt'] = (function () {
        var up = new Float32Array([0, 1, 0]);
        var tPosition = [];
        return function (x, y, z) {
            tPosition[0] = this['targetX'] = x;
            tPosition[1] = this['targetY'] = y;
            tPosition[2] = this['targetZ'] = z;
            //out, eye, center, up
            mat4.identity(this['matrix']);
            mat4.lookAt(this['matrix'], [this.x, this.y, this.z], tPosition, up);
        }
    })();
    Object.freeze(RedCamera);
})();

"use strict";
var RedBasicController;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedBasicController`,
		 description : `
			 RedBasicController Instance 생성자.
		 `,
		 demo : '../example/camera/RedBasicController.html',
		 example : `
			 RedBasicController(redGL Instance)
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 extends : ['RedBaseController'],
		 return : 'RedBasicController Instance'
	 }
     :DOC*/
    RedBasicController = function (redGL) {
        var self;
        if (!(this instanceof RedBasicController)) return new RedBasicController(redGL);
        self = this;
        this['keyBuffer'] = {};
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`keyNameMapper`,
			 description : `
				 이동, 회전에 대한 기본 키맵퍼
				 기본값 :
			 `,
			 example : `
			 this['keyNameMapper'] = {
				 moveForward: 'w',
				 moveBack: 's',
				 moveLeft: 'a',
				 moveRight: 'd',
				 moveUp: 't',
				 moveDown: 'g',
				 //
				 turnLeft: 'q',
				 turnRight: 'e',
				 turnUp: 'r',
				 turnDown: 'f',
			 }
			 `,
			 return : 'Object'
		 }
         :DOC*/
        this['keyNameMapper'] = {
            moveForward: 'w',
            moveBack: 's',
            moveLeft: 'a',
            moveRight: 'd',
            moveUp: 't',
            moveDown: 'g',
            //
            turnLeft: 'q',
            turnRight: 'e',
            turnUp: 'r',
            turnDown: 'f'
        };
        this['speed'] = 1;
        this['delay'] = 0.1;
        this['speedRotation'] = 1;
        this['delayRotation'] = 0.1;
        this['maxAcceleration'] = 3;
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`camera`,
			 description : `
				 컨트롤러 생성시 자동생성됨
			 `,
			 return : 'RedCamera'
		 }
         :DOC*/
        this['camera'] = RedCamera();
        this['_desirePosition'] = [0, 0, 0];
        this['_desirePan'] = 0;
        this['_desireTilt'] = 0;
        this['_targetObject'] = RedMesh(redGL);
        (function (self) {
            var HD_keyDown;
            var HD_keyUp;
            var HD_down, HD_Move, HD_up;
            var sX, sY;
            var mX, mY;
            var tMove, tUp, tDown;
            tMove = RedGLDetect.BROWSER_INFO.move
            tUp = RedGLDetect.BROWSER_INFO.up
            tDown = RedGLDetect.BROWSER_INFO.down
            sX = 0, sY = 0;
            mX = 0, mY = 0;
            HD_keyDown = function (e) {
                self['keyBuffer'][e['key']] = 1
            };
            HD_keyUp = function (e) {
                self['keyBuffer'][e['key']] = 0
            };
            HD_down = function (e) {
                if (RedGLDetect.BROWSER_INFO.isMobile) {
                    e = e.targetTouches[0]
                    sX = e['clientX'], sY = e['clientY'];
                } else {
                    sX = e['x'], sY = e['y'];
                }
                redGL['_canvas'].addEventListener(tMove, HD_Move);
                window.addEventListener(tUp, HD_up);
            };
            HD_Move = function (e) {
                if (RedGLDetect.BROWSER_INFO.isMobile) {
                    e = e.targetTouches[0]
                    mX = e['clientX'] - sX, mY = e['clientY'] - sY;
                    sX = e['clientX'], sY = e['clientY'];
                } else {
                    mX = e['x'] - sX, mY = e['y'] - sY;
                    sX = e['x'], sY = e['y'];
                }
                self['_desirePan'] -= mX * self['_speedRotation'] * 0.1;
                self['_desireTilt'] -= mY * self['_speedRotation'] * 0.1;
            };
            HD_up = function () {
                redGL['_canvas'].removeEventListener(tMove, HD_Move);
                window.removeEventListener(tUp, HD_up);
            };
            window.addEventListener('keydown', HD_keyDown);
            window.addEventListener('keyup', HD_keyUp);
            redGL['_canvas'].addEventListener(tDown, HD_down);
        })(this);
    };
    RedBasicController.prototype = new RedBaseController();
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`speed`,
		 description : `
			 이동 속도
			 기본값 : 1
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedBasicController', 'speed', 'number', {min: 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`delay`,
		 description : `
			 이동 지연 속도
			 기본값 : 0.1
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedBasicController', 'delay', 'number', {min: 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`speedRotation`,
		 description : `
			 회전 속도
			 기본값 : 1
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedBasicController', 'speedRotation', 'number', {min: 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`delayRotation`,
		 description : `
			 회전 지연 속도
			 기본값 : 0.1
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedBasicController', 'delayRotation', 'number', {min: 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`maxAcceleration`,
		 description : `
			 최대 가속도 ( 이동 속도와 합쳐짐 )
			 기본값 : 3
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedBasicController', 'maxAcceleration', 'number', {min: 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`x`,
		 description : `x`,
		 return : 'Number'
	 }
     :DOC*/
    Object.defineProperty(RedBasicController.prototype, 'x', (function () {
        return {
            get: function () {
                return this['_targetObject']['x']
            },
            set: function (v) {
                this['_targetObject']['x'] = v;
                this['_desirePosition'][0] = v;
            }
        }
    })());
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`y`,
		 description : `y`,
		 return : 'Number'
	 }
     :DOC*/
    Object.defineProperty(RedBasicController.prototype, 'y', (function () {
        return {
            get: function () {
                return this['_targetObject']['y']
            },
            set: function (v) {
                this['_targetObject']['y'] = v;
                this['_desirePosition'][1] = v;
            }
        }
    })());
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`z`,
		 description : `z`,
		 return : 'Number'
	 }
     :DOC*/
    Object.defineProperty(RedBasicController.prototype, 'z', (function () {
        return {
            get: function () {
                return this['_targetObject']['z']
            },
            set: function (v) {
                this['_targetObject']['z'] = v;
                this['_desirePosition'][2] = v;
            }
        }
    })());
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`tilt`,
		 description : `tilt`,
		 return : 'Number'
	 }
     :DOC*/
    Object.defineProperty(RedBasicController.prototype, 'tilt', (function () {
        return {
            get: function () {
                return this['_desireTilt']
            },
            set: function (v) {
                this['_targetObject']['rotationX'] = v;
                this['_desireTilt'] = v;
            }
        }
    })());
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`pan`,
		 description : `pan`,
		 return : 'Number'
	 }
     :DOC*/
    Object.defineProperty(RedBasicController.prototype, 'pan', (function () {
        return {
            get: function () {
                return this['_desirePan']
            },
            set: function (v) {
                this['_targetObject']['rotationY'] = v;
                this['_desirePan'] = v;
            }
        }
    })());
    /**DOC:
     {
	     code : 'METHOD',
		 title :`update`,
		 description : '업데이트',
		 return : 'void'
	 }
     :DOC*/
    RedBasicController.prototype['update'] = (function () {
        var up = new Float32Array([0, 1, 0]);
        var tPan, tTilt
        var targetObject;
        var move, rotate;
        var tSpeed, tSpeedRotation;
        var tDelay, tDelayRotation;
        var tMTX0, tMTX1;
        var displacementMTX;
        var displacementVec3;
        var tCamera;
        var currentAcceleration;
        var tKeyBuffer;
        var tKeyNameMapper;
        var tDesirePosition;
        displacementMTX = mat4.create();
        tMTX0 = mat4.create();
        tMTX1 = mat4.create();
        displacementVec3 = vec3.create();
        currentAcceleration = 0;
        return function () {
            tPan = 0;
            tTilt = 0;
            move = false;
            rotate = false;
            tSpeed = this['_speed'];
            tSpeedRotation = this['_speedRotation'];
            tDelay = this['_delay'];
            tDelayRotation = this['_delayRotation'];
            tCamera = this['camera'];
            tDesirePosition = this['_desirePosition'];
            tKeyBuffer = this['keyBuffer'];
            tKeyNameMapper = this['keyNameMapper'];
            displacementVec3[0] = 0;
            displacementVec3[1] = 0;
            displacementVec3[2] = 0;
            // 움직임 체크
            if (tKeyBuffer[tKeyNameMapper['turnLeft']]) rotate = true, tPan = tSpeedRotation;
            if (tKeyBuffer[tKeyNameMapper['turnRight']]) rotate = true, tPan = -tSpeedRotation;
            if (tKeyBuffer[tKeyNameMapper['turnUp']]) rotate = true, tTilt = tSpeedRotation;
            if (tKeyBuffer[tKeyNameMapper['turnDown']]) rotate = true, tTilt = -tSpeedRotation;
            if (tKeyBuffer[tKeyNameMapper['moveForward']]) move = true, displacementVec3[2] = -currentAcceleration * tSpeed;
            if (tKeyBuffer[tKeyNameMapper['moveBack']]) move = true, displacementVec3[2] = currentAcceleration * tSpeed;
            if (tKeyBuffer[tKeyNameMapper['moveLeft']]) move = true, displacementVec3[0] = -currentAcceleration * tSpeed;
            if (tKeyBuffer[tKeyNameMapper['moveRight']]) move = true, displacementVec3[0] = currentAcceleration * tSpeed;
            if (tKeyBuffer[tKeyNameMapper['moveUp']]) move = true, displacementVec3[1] = currentAcceleration * tSpeed;
            if (tKeyBuffer[tKeyNameMapper['moveDown']]) move = true, displacementVec3[1] = -currentAcceleration * tSpeed;
            // 가속도 계산
            if (rotate || move) {
                currentAcceleration += 0.1;
                if (currentAcceleration > this['_maxAcceleration']) currentAcceleration = this['_maxAcceleration']
            } else {
                currentAcceleration += -0.1;
                if (currentAcceleration < 0) currentAcceleration = 0
            }
            //
            targetObject = this['_targetObject'];
            // pan,tilt 설정
            if (rotate) {
                this['_desirePan'] += tPan;
                this['_desireTilt'] += tTilt;
            }
            // pan,tilt 타겟오브젝트에 반영
            targetObject['rotationY'] += (this['_desirePan'] - targetObject['rotationY']) * tDelayRotation;
            targetObject['rotationX'] += (this['_desireTilt'] - targetObject['rotationX']) * tDelayRotation;
            if (move || rotate) {
                tMTX0 = targetObject['matrix'];
                // 이동 매트릭스구함
                mat4.identity(displacementMTX);
                mat4.rotateY(displacementMTX, displacementMTX, targetObject['rotationY'] * Math.PI / 180);
                mat4.rotateX(displacementMTX, displacementMTX, targetObject['rotationX'] * Math.PI / 180);
                mat4.translate(displacementMTX, displacementMTX, displacementVec3);
                // 오브젝트에 적용할 x,y,z를 찾아냄
                mat4.identity(tMTX0);
                mat4.translate(tMTX0, tMTX0, [targetObject['x'], targetObject['y'], targetObject['z']]);
                mat4.multiply(tMTX0, tMTX0, displacementMTX);
                tDesirePosition[0] = tMTX0[12];
                tDesirePosition[1] = tMTX0[13];
                tDesirePosition[2] = tMTX0[14];
            }
            // 이동 계산
            targetObject['x'] += (tDesirePosition[0] - targetObject['x']) * tDelay;
            targetObject['y'] += (tDesirePosition[1] - targetObject['y']) * tDelay;
            targetObject['z'] += (tDesirePosition[2] - targetObject['z']) * tDelay;
            // pan,tilt 타겟오브젝트에 반영
            targetObject['rotationY'] += (this['_desirePan'] - targetObject['rotationY']) * tDelayRotation;
            targetObject['rotationX'] += (this['_desireTilt'] - targetObject['rotationX']) * tDelayRotation;
            // 타겟 오브젝트 최종적용
            tMTX0 = targetObject['matrix'];
            mat4.identity(tMTX0);
            mat4.translate(tMTX0, tMTX0, [targetObject['x'], targetObject['y'], targetObject['z']]);
            mat4.rotateY(tMTX0, tMTX0, targetObject['rotationY'] * Math.PI / 180);
            mat4.rotateX(tMTX0, tMTX0, targetObject['rotationX'] * Math.PI / 180);
            // 카메라를 오브젝트 바로 뒤에 위치시킴
            tMTX1 = mat4.clone(tMTX0);
            mat4.translate(tMTX1, tMTX1, [0, 0, 0.01]);
            tCamera['x'] = tMTX1[12];
            tCamera['y'] = tMTX1[13];
            tCamera['z'] = tMTX1[14];

            // 카메라는 대상 오브젝트를 바라봄
            tCamera.lookAt(targetObject['x'], targetObject['y'], targetObject['z']);
            // console.log('RedBasicController update')
        }
    })();
    Object.freeze(RedBasicController);
})();

"use strict";
var RedObitController;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedObitController`,
		 description : `
			 RedObitController Instance 생성자.
		 `,
		 demo : '../example/camera/RedObitController.html',
		 example : `
			 RedObitController(RedGL Instance)
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 extends : ['RedBaseController'],
		 return : 'RedObitController Instance'
	 }
     :DOC*/
    RedObitController = function (redGL) {
        var self;
        if (!(this instanceof RedObitController)) return new RedObitController(redGL);
        self = this;
        this['centerX'] = 0;
        this['centerY'] = 0;
        this['centerZ'] = 0;
        //
        this['distance'] = 15;
        this['speedDistance'] = 2;
        this['delayDistance'] = 0.1;
        //
        this['speedRotation'] = 3;
        this['delayRotation'] = 0.1;
        this['tilt'] = 0;
        this['minTilt'] = -90;
        this['maxTilt'] = 90;
        this['pan'] = 0;
        /**DOC:
         {
		     code : 'PROPERTY',
			 title :`camera`,
			 description : `
				 컨트롤러 생성시 자동생성됨
			 `,
			 return : 'RedCamera'
		 }
         :DOC*/
        this['camera'] = RedCamera();
        this['_currentPan'] = 0;
        this['_currentTilt'] = 0;
        this['_currentDistance'] = 0;
        (function (self) {
            var HD_down, HD_Move, HD_up, HD_wheel;
            var sX, sY;
            var mX, mY;
            var tMove, tUp, tDown;
            tMove = RedGLDetect.BROWSER_INFO.move
            tUp = RedGLDetect.BROWSER_INFO.up
            tDown = RedGLDetect.BROWSER_INFO.down
            sX = 0, sY = 0;
            mX = 0, mY = 0;
            HD_down = function (e) {
                if (RedGLDetect.BROWSER_INFO.isMobile) {
                    console.log(e)
                    e = e.targetTouches[0]
                    sX = e['clientX'], sY = e['clientY'];
                } else {
                    sX = e['x'], sY = e['y'];
                }
                redGL['_canvas'].addEventListener(tMove, HD_Move);
                window.addEventListener(tUp, HD_up);
            };
            HD_Move = function (e) {
                if (RedGLDetect.BROWSER_INFO.isMobile) {
                    e = e.targetTouches[0]
                    mX = e['clientX'] - sX, mY = e['clientY'] - sY;
                    sX = e['clientX'], sY = e['clientY'];
                } else {
                    mX = e['x'] - sX, mY = e['y'] - sY;
                    sX = e['x'], sY = e['y'];
                }
                self['_pan'] -= mX * self['_speedRotation'] * 0.1;
                self['_tilt'] -= mY * self['_speedRotation'] * 0.1;
            };
            HD_up = function () {
                redGL['_canvas'].removeEventListener(tMove, HD_Move);
                window.removeEventListener(tUp, HD_up);
            };
            HD_wheel = function (e) {
                console.log(e);
                self['distance'] += e['deltaY'] / 100 * self['_speedDistance']
            };
            redGL['_canvas'].addEventListener(tDown, HD_down);
            redGL['_canvas'].addEventListener('wheel', HD_wheel);
        })(this);
    };
    RedObitController.prototype = new RedBaseController();

    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`centerX`,
		 description : `회전축 X 포지션`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedObitController', 'centerX', 'number');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`centerY`,
		 description : `회전축 Y 포지션`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedObitController', 'centerY', 'number');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`centerZ`,
		 description : `회전축 Z 포지션`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedObitController', 'centerZ', 'number');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`distance`,
		 description : `회전축과의 거리`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedObitController', 'distance', 'number', {min: 1});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`speedDistance`,
		 description : `
			 거리 속도
			 기본값 : 2
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedObitController', 'speedDistance', 'number', {min: 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`delayDistance`,
		 description : `
			 거리 지연 속도
			 기본값 : 0.1
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedObitController', 'delayDistance', 'number', {min: 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`speedRotation`,
		 description : `
			 회전 속도
			 기본값 : 3
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedObitController', 'speedRotation', 'number', {min: 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`delayRotation`,
		 description : `
			 회전 지연 속도
			 기본값 : 0.1
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedObitController', 'delayRotation', 'number', {min: 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`pan`,
		 description : `pan`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedObitController', 'pan', 'number');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`tilt`,
		 description : `tilt`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedObitController', 'tilt', 'number');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`maxTilt`,
		  description : `
			 기본값 : 90
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedObitController', 'maxTilt', 'number', {min: -90, max: 90});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`minTilt`,
		  description : `
			 기본값 : -90
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedObitController', 'minTilt', 'number', {min: -90, max: 90});
    /**DOC:
     {
	     code : 'METHOD',
		 title :`update`,
		 description : '업데이트',
		 return : 'void'
	 }
     :DOC*/
    RedObitController.prototype['update'] = (function () {
        var tDelayRotation;
        var tCamera;
        var tMTX0;
        var PER_PI;
        PER_PI = Math.PI / 180;
        return function () {
            if (this['_tilt'] < this['_minTilt']) this['_tilt'] = this['_minTilt'];
            if (this['_tilt'] > this['_maxTilt']) this['_tilt'] = this['_maxTilt'];
            tDelayRotation = this['_delayRotation'];
            tCamera = this['camera'];
            tMTX0 = tCamera['matrix'];
            this['_currentPan'] += (this['_pan'] - this['_currentPan']) * tDelayRotation;
            this['_currentTilt'] += (this['_tilt'] - this['_currentTilt']) * tDelayRotation;
            this['_currentDistance'] += (this['_distance'] - this['_currentDistance']) * this['_delayDistance'];
            mat4.identity(tMTX0);
            mat4.translate(tMTX0, tMTX0, [this['_centerX'], this['_centerY'], this['_centerZ']]);
            mat4.rotateY(tMTX0, tMTX0, this['_currentPan'] * PER_PI);
            mat4.rotateX(tMTX0, tMTX0, this['_currentTilt'] * PER_PI);
            mat4.translate(tMTX0, tMTX0, [0, 0, this['_currentDistance']]);
            tCamera['x'] = tMTX0[12];
            tCamera['y'] = tMTX0[13];
            tCamera['z'] = tMTX0[14];
            // 카메라는 대상 오브젝트를 바라봄
            tCamera.lookAt(this['_centerX'], this['_centerY'], this['_centerZ']);
            // console.log(this['_tilt'], this['_pan'])
            // console.log('RedObitController update')
        }
    })();
    Object.freeze(RedObitController);
})();

"use strict";
var RedGridMaterial;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedGridMaterialProgram';
    var checked;
    vSource = function () {
        /* @preserve
         void main(void) {
             vVertexColor = aVertexColor;
             gl_Position = uPMatrix * uCameraMatrix* uMMatrix * vec4(aVertexPosition, 1.0);
         }
         */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
        // 안개
        //#REDGL_DEFINE#fragmentShareFunc#fogFactor#
        //#REDGL_DEFINE#fragmentShareFunc#fog#

         void main(void) {
             vec4 finalColor = vVertexColor;
             //#REDGL_DEFINE#fog#false# gl_FragColor = finalColor;
             //#REDGL_DEFINE#fog#true# gl_FragColor = fog( fogFactor(u_FogDistance, u_FogDensity), uFogColor, finalColor);
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedGridMaterial`,
		 description : `
			 RedGrid Instance 새성시 내부적으로 자동으로 생성됨.
			 시스템적으로 사용됨
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 extends : ['RedBaseMaterial'],
		 return : 'RedGridMaterial Instance'
	 }
     :DOC*/
    RedGridMaterial = function (redGL) {
        if (!(this instanceof RedGridMaterial)) return new RedGridMaterial(redGL);
        this.makeProgramList(this, redGL, PROGRAM_NAME, vSource, fSource);
        // 유니폼 프로퍼티
        // 일반 프로퍼티
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedGridMaterial.prototype = new RedBaseMaterial();
    Object.freeze(RedGridMaterial);
})();
"use strict";
var RedSkyBoxMaterial;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedSkyBoxMaterialProgram';
    var checked;
    vSource = function () {
        /* @preserve
         varying vec3 vReflectionCubeCoord;
         void main(void) {
             vReflectionCubeCoord = (uMMatrix *vec4(aVertexPosition, 0.0)).xyz;
             gl_Position = uPMatrix * uCameraMatrix * uMMatrix * vec4(aVertexPosition, 1.0);
         }
         */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
        // 안개
        //#REDGL_DEFINE#fragmentShareFunc#fogFactor#
        //#REDGL_DEFINE#fragmentShareFunc#fog#

         uniform samplerCube u_skyBoxTexture;
         varying vec3 vReflectionCubeCoord;
         void main(void) {
             vec4 finalColor = textureCube(u_skyBoxTexture, vReflectionCubeCoord);
             //#REDGL_DEFINE#fog#false# gl_FragColor = finalColor;
             //#REDGL_DEFINE#fog#true# gl_FragColor = fog( fogFactor(u_FogDistance, u_FogDensity), uFogColor, finalColor);
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedSkyBoxMaterial`,
		 description : `
			 RedSkyBox Instance 생성시 내부적으로 자동으로 생성됨.
			 시스템적으로 사용됨.
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 skyBoxTexture : [
				 {type:'RedBitmapCubeTexture'}
			 ]
		 },
		 extends : [
		    'RedBaseMaterial'
		 ],
		 return : 'RedSkyBoxMaterial Instance'
	 }
     :DOC*/
    RedSkyBoxMaterial = function (redGL, skyBoxTexture) {
        if (!(this instanceof RedSkyBoxMaterial)) return new RedSkyBoxMaterial(redGL, skyBoxTexture);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedSkyBoxMaterial : RedGL Instance만 허용.', redGL);
        this.makeProgramList(this, redGL, PROGRAM_NAME, vSource, fSource);
        /////////////////////////////////////////
        // 유니폼 프로퍼티
        this['skyBoxTexture'] = skyBoxTexture;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedSkyBoxMaterial.prototype = new RedBaseMaterial();
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`skyBoxTexture`,
		 description :`skyBoxTexture`,
		 return : 'RedBitmapCubeTexture'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedSkyBoxMaterial', 'skyBoxTexture', 'samplerCube', {essential: true});
    Object.freeze(RedSkyBoxMaterial)
})();
"use strict";
var RedDirectionalShadowMaterial;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedDirectionalShadowMaterialProgram';
    var checked;
    vSource = function () {
        /* @preserve
        // 스키닝
        //#REDGL_DEFINE#vertexShareFunc#getSkinMatrix#

        // Sprite3D
        //#REDGL_DEFINE#vertexShareFunc#getSprite3DMatrix#
         void main(void) {
            // position 계산
            //#REDGL_DEFINE#skin#true# mat4 targetMatrix = uMMatrix *  getSkinMatrix() ;
            //#REDGL_DEFINE#skin#false# mat4 targetMatrix = uMMatrix;

            //#REDGL_DEFINE#sprite3D#true# gl_Position = getSprite3DMatrix(uDirectionalShadowLightMatrix , targetMatrix) *  vec4(aVertexPosition, 1.0);
            //#REDGL_DEFINE#sprite3D#true# if(!u_PerspectiveScale){
            //#REDGL_DEFINE#sprite3D#true#   gl_Position /= gl_Position.w;
            //#REDGL_DEFINE#sprite3D#true#   gl_Position.xy += aVertexPosition.xy * vec2((uPMatrix * targetMatrix)[0][0],(uPMatrix * targetMatrix)[1][1]);
            //#REDGL_DEFINE#sprite3D#true# }
            //#REDGL_DEFINE#sprite3D#false# gl_Position = uDirectionalShadowLightMatrix * targetMatrix *  vec4(aVertexPosition, 1.0);

         }
         */
    };
    fSource = function () {
        /* @preserve
        precision mediump float;
        vec4 encodeFloat (float depth) {
            const vec4 cBitShift = vec4(
                256.0 * 256.0 * 256.0,
                256.0 * 256.0,
                256.0,
                1.0
            );
            const vec4 cBitMask = vec4(
                0.0,
                1.0 / 256.0,
                1.0 / 256.0,
                1.0 / 256.0
            );
            vec4 comp = fract(depth * cBitShift);
            comp -= comp.xxyz * cBitMask;
            return comp;
        }
        void main(void) {
            vec4 finalColor = encodeFloat(gl_FragCoord.z);
            // if(finalColor.a < 0.5) finalColor = vec4(0.0, 0.0, 0.0, 1.0);
            gl_FragColor = finalColor;
        }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedDirectionalShadowMaterial`,
		 description : `
			 RedDirectionalShadow 의 뎁스를 생성하기 위한 재질
			 시스템적으로 사용됨
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 extends : ['RedBaseMaterial'],
		 return : 'RedDirectionalShadowMaterial Instance'
	 }
     :DOC*/
    RedDirectionalShadowMaterial = function (redGL) {
        if (!(this instanceof RedDirectionalShadowMaterial)) return new RedDirectionalShadowMaterial(redGL);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedDirectionalShadowMaterial : RedGL Instance만 허용.', redGL);
        /////////////////////////////////////////
        // 유니폼 프로퍼티
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['_RedDirectionalShadowYn'] = true;
        this.makeProgramList(this, redGL, PROGRAM_NAME, vSource, fSource);
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedDirectionalShadowMaterial.prototype = new RedBaseMaterial();
    Object.freeze(RedDirectionalShadowMaterial)
})();
"use strict";
var RedPostEffectMaterial;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedPostEffectMaterialProgram';
    var checked;
    vSource = function () {
        /* @preserve
         void main(void) {
             vTexcoord = aTexcoord;
             gl_Position = uPMatrix * uMMatrix *  vec4(aVertexPosition, 1.0);
         }
         */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
         uniform sampler2D u_diffuseTexture;
         void main(void) {
             gl_FragColor = texture2D(u_diffuseTexture, vTexcoord);
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedPostEffectMaterial`,
		 description : `
			 포스트이펙트 최종 이미지를 생성하기 위한재질.
			 시스템적으로 사용됨.
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 diffuseTexture : [
				 {type:'RedBitmapTexture'},
				 'RedBitmapTexture Instance'
			 ]
		 },
		 extends : ['RedBaseMaterial'],
		 return : 'RedPostEffectMaterial Instance'
	 }
     :DOC*/
    RedPostEffectMaterial = function (redGL, diffuseTexture) {
        if (!(this instanceof RedPostEffectMaterial)) return new RedPostEffectMaterial(redGL, diffuseTexture);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedPostEffectMaterial : RedGL Instance만 허용.', redGL);
        /////////////////////////////////////////
        // 유니폼 프로퍼티
        this['diffuseTexture'] = diffuseTexture;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['program'] = RedProgram['makeProgram'](redGL, PROGRAM_NAME, vSource, fSource);
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedPostEffectMaterial.prototype = new RedBaseMaterial();
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`diffuseTexture`,
		 description :`diffuseTexture`,
		 return : 'RedPostEffectMaterial'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffectMaterial', 'diffuseTexture', 'sampler2D', {essential: true});
    Object.freeze(RedPostEffectMaterial);
})();
"use strict";
var RedDirectionalShadow;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedDirectionalShadow`,
		 description : `
			 RedDirectionalShadow Instance 생성.
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 demo : '../example/shadow/RedDirectionalShadow.html',
		 return : 'RedDirectionalShadow Instance'
	 }
     :DOC*/
    RedDirectionalShadow = function (redGL, light) {
        if (!(this instanceof RedDirectionalShadow)) return new RedDirectionalShadow(redGL, light);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedDirectionalShadow : RedGL Instance만 허용.', redGL);
        this['_directionalShadowMaterial'] = RedDirectionalShadowMaterial(redGL);
        this['frameBuffer'] = RedFrameBuffer(redGL);
        this['light'] = light;
        this['width'] = 2048;
        this['height'] = 2048;
        this['size'] = 20;
        this['_UUID'] = RedGL.makeUUID();
        this['_castingList'] = [];
        console.log(this);
    };
    /**DOC:
     {
		 code:`METHOD`,
		 title :`addCasting`,
		 description : `
			 그림자 케스팅할 오브젝트 추가
		 `,
		 params : {
		    target : [
		        { type : 'RedBaseObject3D' }
		    ]
		 },
	     return : 'void'
	 }
     :DOC*/
    RedDirectionalShadow.prototype['addCasting'] = function (target) {
        if (!(target instanceof RedBaseObject3D)) RedGLUtil.throwFunc('addCasting', 'RedBaseObject3D Instance만 가능', '입력값 : ' + target);
        this['_castingList'].push(target)


    };
    /**DOC:
     {
		 code:`METHOD`,
		 title :`removeCasting`,
		 description : `
			 캐스팅 제거
		 `,
		 params : {
		    target : [
		        { type : 'RedBaseObject3D' }
		    ]
		 },
		 return : 'void'
	 }
     :DOC*/
    RedDirectionalShadow.prototype['removeCasting'] = (function () {
        var t0;
        return function (v) {
            t0 = this['_castingList'].indexOf(v);
            if (t0 == -1) RedGLUtil.throwFunc('removeCasting', '존재하지 않는 대상을 삭제하려고 함');
            else this['_castingList'].splice(t0, 1);

        }
    })();
    /**DOC:
     {
		 code:`PROPERTY`,
		 title :`light`,
		 description : `
			 그림자를 반영할 RedDirectionalLight 지정
		 `,
		 return : 'RedDirectionalLight Instance'
	 }
     :DOC*/
    Object.defineProperty(RedDirectionalShadow.prototype, 'light', {
        get: function () {
            return this['_light']
        },
        set: function (v) {
            (v && v instanceof RedDirectionalLight) || RedGLUtil.throwFunc('RedDirectionalShadow - light : RedDirectionalLight Instance만 허용.', v);
            this['_light'] = v;
        }
    });
    /**DOC:
     {
		 code:`PROPERTY`,
		 title :`width`,
		 description : `
			 프레임버퍼 width
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedDirectionalShadow', 'width', 'number', {'min': 1});
    /**DOC:
     {
		 code:`PROPERTY`,
		 title :`height`,
		 description : `
			 프레임버퍼 height
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedDirectionalShadow', 'height', 'number', {'min': 1});
    /**DOC:
     {
		 code:`PROPERTY`,
		 title :`size`,
		 description : `
			 그림자 영역 크기
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedDirectionalShadow', 'size', 'number', {'min': 1});
    Object.freeze(RedDirectionalShadow);
})();
"use strict";
var RedShadowManager;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedShadowManager`,
		 description : `
			 RedShadowManager Instance 생성.
			 RedScene 생성시 내부속성으로 자동생성됨.
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 return : 'RedShadowManager Instance'
	 }
     :DOC*/
    RedShadowManager = function (redGL) {
        if (!(this instanceof RedShadowManager)) return new RedShadowManager(redGL);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedShadowManager : RedGL Instance만 허용.', redGL);
        this['_UUID'] = RedGL.makeUUID();
        console.log(this);
    };
    RedShadowManager.prototype = {
        render: (function () {
            var gl;
            var tViewRect, tWorldRect;
            var tDirectionalShadow;
            var tWidth, tHeight;
            return function (redGL, redRenderer, tView, time, renderInfo) {
                tDirectionalShadow = this['_directionalShadow'];
                if (tDirectionalShadow) {
                    gl = redGL.gl;
                    tWorldRect = redRenderer['worldRect'];
                    tViewRect = tView['_viewRect'];
                    tWidth = tDirectionalShadow['width'];
                    tHeight = tDirectionalShadow['height'];
                    tDirectionalShadow['frameBuffer'].width = tWidth;
                    tDirectionalShadow['frameBuffer'].height = tHeight;
                    tDirectionalShadow['frameBuffer'].bind(redGL.gl);
                    gl.viewport(0, 0, tWidth, tHeight);
                    gl.scissor(0, 0, tWidth, tHeight);
                    gl.clearColor(0, 0, 0, 1)
                    gl.clearDepth(1.0)
                    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
                    redRenderer.sceneRender(redGL, tView['scene'], tView['camera'], tView['camera']['orthographicYn'], tDirectionalShadow['_castingList'], time, renderInfo, tDirectionalShadow['_directionalShadowMaterial']);
                    tDirectionalShadow['frameBuffer'].unbind(redGL.gl);
                    gl.viewport(tViewRect[0], tWorldRect[3] - tViewRect[3] - tViewRect[1], tViewRect[2], tViewRect[3]);
                    gl.scissor(tViewRect[0], tWorldRect[3] - tViewRect[3] - tViewRect[1], tViewRect[2], tViewRect[3]);
                }
            }
        })()
    };
    /**DOC:
     {
		 code:`PROPERTY`,
		 title :`directionalShadow`,
		 description : `
			 directionalShadow 지정
		 `,
		 params : {
		    shadow : [
		        { type : 'RedDirectionalShadow' }
		    ]
		 },
		 return : 'directionalShadow Instance'
	 }
     :DOC*/
    Object.defineProperty(RedShadowManager.prototype, 'directionalShadow', {
        get: function () {
            return this['_directionalShadow']
        },
        set: function (shadow) {
            (!shadow || shadow instanceof RedDirectionalShadow) || RedGLUtil.throwFunc('RedShadowManager - directionalShadow : RedDirectionalShadow Instance만 허용.', shadow);
            this['_directionalShadow'] = shadow
        }
    });
    Object.freeze(RedShadowManager);
})();
"use strict";
var RedText;
(function () {
    var setTexture;
    var setStylePrototype;
    setStylePrototype = (function () {
        return function (target, k, baseValue) {
            var tStyle;
            tStyle = target['_svg'].querySelector('td').style;
            target['_' + k] = baseValue;
            Object.defineProperty(target, k, {
                get: function () {
                    return target['_' + k]
                },
                set: function (v) {
                    target['_' + k] = v;
                    tStyle[k] = typeof v == 'number' ? (v += 'px') : v;
                    setTexture(target)
                }
            });
            target[k] = baseValue;
        }
    })();
    setTexture = function (target) {
        target['_height'] = +target['_height'];
        target['_svg'].setAttribute('width', target['_width']);
        target['_svg'].setAttribute('height', target['_height']);
        target['_svg'].querySelector('foreignObject').setAttribute('height', target['_height']);
        target['_svg'].querySelector('table').style.height = target['_height'] + 'px';
        target['_img'].src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(target['_svg'].outerHTML);
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedText`,
		 description : `
			 RedText Instance 생성.
			 RedScene 생성시 내부속성으로 자동생성됨.
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ],
			 width : [
				 {type:'Number'}
			 ],
			 height : [
				 {type:'Number'}
			 ]
		 },
		 demo : '../example/text/RedText.html',
		 return : 'RedText Instance'
	 }
     :DOC*/
    RedText = function (redGL, width, height) {
        if (!(this instanceof RedText)) return new RedText(redGL, width, height);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedText : RedGL Instance만 허용.', redGL);
        RedBaseObject3D['build'].call(this, redGL.gl);
        var self = this;
        // 이미지 생성용 캔버스
        this['_cvs'] = null;
        this['_ctx'] = null;

        // SVG 생성
        this['_svg'] = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this['_svg'].setAttribute('xmlns', "http://www.w3.org/2000/svg");
        this['_svg'].style = 'position:absolute;top:0px;left:0px;text-align:center;z-index:10';
        this['_svg'].innerHTML = '<foreignObject  width="100%" style="position:absolute;top:0;left:0">' +
            '   <table xmlns="http://www.w3.org/1999/xhtml" style="border-collapse: collapse;position:table;top:0;left:0;width:100%;table-layout:fixed">' +
            '       <tr xmlns="http://www.w3.org/1999/xhtml">' +
            '       <td xmlns="http://www.w3.org/1999/xhtml"  > </td>' +
            '       </tr>' +
            '   </table>' +
            '</foreignObject>';
        // document.body.appendChild(this['_svg'])
        /////////////////////
        //////////////////////
        this['geometry'] = RedPlane(redGL, 1, 1);
        this['material'] = RedTextMaterial(redGL, RedBitmapTexture(redGL, this['_cvs']));
        //////////////////////
        this['blendSrc'] = redGL.gl.ONE;
        this['blendDst'] = redGL.gl.ONE_MINUS_SRC_ALPHA;
        // this['useDepthMask'] = false;
        this['useCullFace'] = false;
        this['perspectiveScale'] = true;
        this['sprite3DYn'] = false;
        this['_img'] = new Image();
        width = width || 256;
        height = height || 256;
        if (width > redGL['detect']['texture']['MAX_TEXTURE_SIZE']) width = redGL['detect']['texture']['MAX_TEXTURE_SIZE'];
        if (height > redGL['detect']['texture']['MAX_TEXTURE_SIZE']) height = redGL['detect']['texture']['MAX_TEXTURE_SIZE'];
        this['width'] = width;
        this['height'] = height;
        // 기본 스타일 프로퍼티
        /**DOC:
         {
            code : 'PROPERTY',
            title :`padding`,
            description : `padding - Css 속성사용`,
            return : 'Number'
        }
         :DOC*/
        setStylePrototype(this, 'padding', 0);
        /**DOC:
         {
            code : 'PROPERTY',
            title :`background`,
            description : `background - Css 속성사용`,
            return : 'hex'
        }
         :DOC*/
        setStylePrototype(this, 'background', '');
        /**DOC:
         {
            code : 'PROPERTY',
            title :`color`,
            description : `color - Css 속성사용`,
            return : 'hex'
        }
         :DOC*/
        setStylePrototype(this, 'color', '#000');
        /**DOC:
         {
            code : 'PROPERTY',
            title :`fontFamily`,
            description : `fontFamily - Css 속성사용`,
            return : 'String'
        }
         :DOC*/
        setStylePrototype(this, 'fontFamily', 'Arial');
        /**DOC:
         {
            code : 'PROPERTY',
            title :`fontSize`,
            description : `fontSize - Css 속성사용`,
            return : 'Number'
        }
         :DOC*/
        setStylePrototype(this, 'fontSize', 16);
        /**DOC:
         {
            code : 'PROPERTY',
            title :`fontWeight`,
            description : `fontWeight - Css 속성사용`,
            return : 'String'
        }
         :DOC*/
        setStylePrototype(this, 'fontWeight', 'normal');
        /**DOC:
         {
            code : 'PROPERTY',
            title :`fontStyle`,
            description : `fontStyle - Css 속성사용`,
            return : 'String'
        }
         :DOC*/
        setStylePrototype(this, 'fontStyle', 'normal');
        /**DOC:
         {
            code : 'PROPERTY',
            title :`lineHeight`,
            description : `lineHeight - Css 속성사용`,
            return : 'Number'
        }
         :DOC*/
        setStylePrototype(this, 'lineHeight', 16 * 1.5);
        /**DOC:
         {
            code : 'PROPERTY',
            title :`letterSpacing`,
            description : `letterSpacing - Css 속성사용`,
            return : 'Number'
        }
         :DOC*/
        setStylePrototype(this, 'letterSpacing', 0);
        /**DOC:
         {
            code : 'PROPERTY',
            title :`wordBreak`,
            description : `wordBreak - Css 속성사용`,
            return : 'String'
        }
         :DOC*/
        setStylePrototype(this, 'wordBreak', 'break-all');
        /**DOC:
         {
            code : 'PROPERTY',
            title :`verticalAlign`,
            description : `verticalAlign - Css 속성사용`,
            return : 'String'
        }
         :DOC*/
        setStylePrototype(this, 'verticalAlign', 'middle');
        /**DOC:
         {
            code : 'PROPERTY',
            title :`textAlign`,
            description : `textAlign - Css 속성사용`,
            return : 'String'
        }
         :DOC*/
        setStylePrototype(this, 'textAlign', 'center');

        //////////////////////
        this['_img'].onload = function () {
            var tW, tH;
            tW = self['_width'];
            tH = self['_height'];
            if(tW%2==0) tW+=1;
            if(tH%2==0) tH+=1;
            self['_cvs'] = window['OffscreenCanvas'] ? new OffscreenCanvas(tW, tH) : document.createElement('canvas');
            self['_ctx'] = self['_cvs'].getContext('2d');
            console.log(tW, tH);
            self['_cvs']['width'] = tW;
            self['_cvs']['height'] = tH;
            self['_ctx'].clearRect(0, 0, tW, tH);
            // self['scaleX'] = self['_width'];
            // self['scaleY'] = self['_height'];
            self['_ctx'].drawImage(self['_img'], 0, 0, tW, tH);
            self['material'].width = tW
            self['material'].height = tH
            self['material'].diffuseTexture.src = self['_cvs']
            self['material'].diffuseTexture.option = {
                min: redGL.gl.LINEAR,
                mag: redGL.gl.LINEAR,
                wrap_s: redGL.gl.CLAMP_TO_EDGE,
                wrap_t: redGL.gl.CLAMP_TO_EDGE
            }

        };
        this['useTransparentSort'] = true
        this['_UUID'] = RedGL.makeUUID();
        console.log(this);
    };
    RedText.prototype = new RedBaseObject3D();
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`perspectiveScale`,
		 description : `perspectiveScale`,
		 return : 'boolean'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedText', 'perspectiveScale', 'boolean', true);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`sprite3DYn`,
		 description : `sprite3DYn`,
		 return : 'boolean'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedText', 'sprite3DYn', 'boolean', true);
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`width`,
		 description : `가로영역크기`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedText', 'width', 'number', {
        min: 2,
        callback: function (v) {
            this['_width'] = v;
            this['material']['width'] = v;
            setTexture(this);
        }
    });
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`height`,
		 description : `세로영역크기`,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedText', 'height', 'number', {
        min: 2,
        callback: function (v) {
            this['_height'] = v;
            this['material']['height'] = v;
            setTexture(this);
        }
    });
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`text`,
		 description : `텍스트값, html 허용`,
		 return : 'Number'
	 }
     :DOC*/
    Object.defineProperty(RedText.prototype, 'text', {
        get: function () {
            return this['_text']
        },
        set: (function () {
            var tSVG, tHTMLContainer;
            return function (v) {
                tSVG = this['_svg'];
                tHTMLContainer = tSVG.querySelector('foreignObject td');
                this['_text'] = v.replace(/\<br\>/gi, '<div/>');
                // console.log(this['_svg'].querySelector('foreignObject div'))
                // console.log(this['_svg'].width)
                // this['_svg'].setAttribute('width', 100000);
                // this['_svg'].setAttribute('height', 100000);
                var self = this
                var t0 = this['_text'].match(/<img .*?>/g)
                var t1 = []
                var result = this['_text'];
                t0 = t0 || []
                console.log(t0)
                var max = t0.length
                var loaded = 0
                t0.forEach(function (v) {
                    console.log(v, v.match(/src\s*=\s*(\'|\").*?(\'|\")/g))
                    var tSrc = v.match(/src\s*=\s*(\'|\").*?(\'|\")/g)[0]
                    tSrc = tSrc.replace(/src\s*=\s*(\'|\")/g, '').replace(/(\'|\")/g, '')
                    console.log(tSrc)
                    var test = document.createElement('div')
                    test.innerHTML = v;
                    var img = test.querySelector('img');
                    img.onload = function () {
                        var canvas = document.createElement('canvas');
                        canvas.width = img.style.width ? +img.style.width : img.width;
                        canvas.height = img.style.height ? +img.style.height : img.height;
                        var ctx = canvas.getContext('2d')
                        ctx.scale(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight)
                        ctx.drawImage(img, 0, 0);
                        tInfo.result = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink" width="' + img.width + '" height="' + img.height + '" display="inline" style="vertical-align: middle;display: inline-block">' +
                            '<image xlink:href="' + (canvas.toDataURL('image/png')) + '" height="' + img.height + 'px" width="' + img.width + 'px" />' +
                            '</svg>'
                        loaded++
                        if (loaded == max) {
                            t1.forEach(function (v) {
                                result = result.replace(v.source, v.result)
                            })
                            tHTMLContainer.innerHTML = result;
                            setTexture(self)
                        }
                        img.onload = null

                    }
                    var tInfo = {
                        source: v,
                        sourceSrc: tSrc,
                        result: ''
                    }
                    t1.push(tInfo)
                });
                if (t0.length == 0) {
                    tHTMLContainer.innerHTML = result;
                    setTexture(this)
                }
            }
        })()
    });
    Object.freeze(RedText);
})();
"use strict";
var RedMouseEventManager;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedMouseEventManager`,
		 description : `
			 RedMouseEventManager Instance 생성.
			 RedScene 생성시 내부속성으로 자동생성됨.
			 시스템적으로 사용됨.
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 return : 'RedMouseEventManager Instance'
	 }
     :DOC*/
    RedMouseEventManager = function (redGL) {
        if (!(this instanceof RedMouseEventManager)) return new RedMouseEventManager(redGL);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedMouseEventManager : RedGL Instance만 허용.', redGL);
        this['frameBuffer'] = RedFrameBuffer(redGL);
        this['_mouseEventMaterial'] = RedMouseEventMaterial(redGL)
        this['_mouseEventListObject'] = {}
        this['_mouseEventList'] = []
        this['_prevInfo'] = null
        this['_UUID'] = RedGL.makeUUID();
        console.log(this);
    };
    RedMouseEventManager.prototype = {
        add: function (target, type, handler) {
            var key = target['_mouseColorID']
            if (!this['_mouseEventListObject'][key]) {
                this['_mouseEventListObject'][key] = {target: target}
                this['_mouseEventList'].push(target)
            }
            this['_mouseEventListObject'][key][type] = handler
            // console.log(this['_mouseEventListObject'])
        },
        remove: function (target, type) {
            var t0 = this['_mouseEventList'].indexOf(target)
            if (t0 > -1) {
                this['_mouseEventList'].splice(t0, 1)
                delete this['_mouseEventListObject'][target['_mouseColorID']]
            }
        },
        render: (function () {
            var gl;
            var tViewRect, tWorldRect;
            var tWidth, tHeight;
            var pixelValues = new Uint8Array(4);
            var renderScale = 1
            var fireList = []
            var fireEvent = function () {
                if (fireList.length) {
                    var v = fireList.pop()
                    v['info'][v['type']].call(v['info']['target'], {
                        target: v['info']['target'],
                        type: v['info']['type']
                    })
                }

            }
            return function (redGL, redRenderer, tView, time, renderInfo) {
                if (this['_mouseEventList'].length) {
                    renderScale = redGL.renderScale;
                    gl = redGL.gl;
                    tWorldRect = redRenderer['worldRect'];
                    tViewRect = tView['_viewRect'];
                    tWidth = tViewRect[2];
                    tHeight = tViewRect[3];
                    this['frameBuffer'].width = tWidth;
                    this['frameBuffer'].height = tHeight;
                    this['frameBuffer'].bind(redGL.gl);
                    redRenderer.sceneRender(redGL, tView['scene'], tView['camera'], tView['camera']['orthographicYn'], this['_mouseEventList'], time, renderInfo, this['_mouseEventMaterial']);
                    // 추출
                    gl.readPixels(redGL['_mouseEventInfo'].x * renderScale, (tViewRect[3] - redGL['_mouseEventInfo'].y * renderScale), 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixelValues)
                    // console.log(pixelValues)

                    var currentInfo = this['_mouseEventListObject'][pixelValues.toString()]
                    var tEventType
                    if (currentInfo) {
                        if (redGL['_mouseEventInfo']['type'] == RedGLDetect.BROWSER_INFO.down) {
                            tEventType = 'down'
                            console.log('다운')
                            if (tEventType && currentInfo[tEventType]) {
                                currentInfo[tEventType].call(currentInfo['target'], {
                                    target: currentInfo['target'],
                                    type: tEventType
                                })
                            }
                        }
                        if (redGL['_mouseEventInfo']['type'] == RedGLDetect.BROWSER_INFO.up) {
                            tEventType = 'up'
                            console.log('업')
                            if (tEventType && currentInfo[tEventType]) {
                                currentInfo[tEventType].call(currentInfo['target'], {
                                    target: currentInfo['target'],
                                    type: tEventType
                                })
                            }
                        }
                        if (this['_prevInfo'] && this['_prevInfo'] != currentInfo) {
                            tEventType = 'out'
                            console.log('아웃')
                            if (tEventType && this['_prevInfo'][tEventType]) {
                                this['_prevInfo'][tEventType].call(this['_prevInfo']['target'], {
                                    target: this['_prevInfo']['target'],
                                    type: tEventType
                                })
                            }
                        }
                        if (this['_prevInfo'] != currentInfo) {
                            tEventType = 'over'
                            if (tEventType && currentInfo[tEventType]) {
                                currentInfo[tEventType].call(currentInfo['target'], {
                                    target: currentInfo['target'],
                                    type: tEventType
                                })
                            }
                            console.log('오버')
                        }

                        this['_prevInfo'] = currentInfo
                    } else {
                        tEventType = 'out'
                        if (this['_prevInfo'] && this['_prevInfo'][tEventType]) {
                            console.log('아웃')
                            fireList.push(
                                {
                                    info: this['_prevInfo'],
                                    type: tEventType,

                                }
                            )
                        }
                        this['_prevInfo'] = null
                    }
                    fireEvent()
                    redGL['_mouseEventInfo'] = {
                        type: null,
                        x: 0,
                        y: 0
                    }
                    //
                    if (this['_prevInfo']) document.body.style.cursor = 'pointer'
                    else document.body.style.cursor = 'default'
                    this['frameBuffer'].unbind(redGL.gl);


                }
            }
        })()
    }
    Object.freeze(RedMouseEventManager);
})();
"use strict";
var RedMouseEventMaterial;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedMouseEventMaterialProgram';
    var checked;
    vSource = function () {
        /* @preserve
        // 스키닝
        //#REDGL_DEFINE#vertexShareFunc#getSkinMatrix#

        // Sprite3D
        //#REDGL_DEFINE#vertexShareFunc#getSprite3DMatrix#
        void main(void) {
            gl_PointSize = uPointSize;

            // position 계산
            //#REDGL_DEFINE#skin#true# mat4 targetMatrix = uMMatrix *  getSkinMatrix() ;
            //#REDGL_DEFINE#skin#false# mat4 targetMatrix = uMMatrix;

            //#REDGL_DEFINE#sprite3D#true# gl_Position = uPMatrix * getSprite3DMatrix(uCameraMatrix , targetMatrix) *  vec4(aVertexPosition, 1.0);
            //#REDGL_DEFINE#sprite3D#true# if(!u_PerspectiveScale){
            //#REDGL_DEFINE#sprite3D#true#   gl_Position /= gl_Position.w;
            //#REDGL_DEFINE#sprite3D#true#   gl_Position.xy += aVertexPosition.xy * vec2((uPMatrix * targetMatrix)[0][0],(uPMatrix * targetMatrix)[1][1]);
            //#REDGL_DEFINE#sprite3D#true# }
            //#REDGL_DEFINE#sprite3D#false# gl_Position = uPMatrix * uCameraMatrix * targetMatrix *  vec4(aVertexPosition, 1.0);

        }
         */
    };
    fSource = function () {
        /* @preserve
        precision mediump float;
        uniform vec4 uColor;
        void main(void) {
            gl_FragColor = uColor / 255.0;
        }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedMouseEventMaterial`,
		 description : `
			 마우스 이벤트 처리를 위한 색상 UUID를 그리기위한 재질
			 시스템적으로 사용됨.
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 extends : ['RedBaseMaterial'],
		 return : 'RedMouseEventMaterial Instance'
	 }
     :DOC*/
    RedMouseEventMaterial = function (redGL) {
        if (!(this instanceof RedMouseEventMaterial)) return new RedMouseEventMaterial(redGL);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedMouseEventMaterial : RedGL Instance만 허용.', redGL);
        /////////////////////////////////////////
        // 유니폼 프로퍼티
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['_RedMouseEventMaterialYn'] = true;
        this['color'] = null
        this.makeProgramList(this, redGL, PROGRAM_NAME, vSource, fSource);
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedMouseEventMaterial.prototype = new RedBaseMaterial();
    Object.freeze(RedMouseEventMaterial)
})();
"use strict";
var RedPostEffectManager;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedPostEffectManager`,
		 description : `
			 RedPostEffectManager Instance 생성.
			 RedScene 생성시 내부속성으로 자동생성됨.
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 demo : '../example/RedPostEffect.html',
		 return : 'RedPostEffectManager Instance'
	 }
     :DOC*/
    RedPostEffectManager = function (redGL) {
        if (!(this instanceof RedPostEffectManager)) return new RedPostEffectManager(redGL);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedPostEffectManager : RedGL Instance만 허용.', redGL);
        /**DOC:
         {
			title :`frameBuffer`,
			code : 'PROPERTY',
			description : `
				이펙트 렌더링시 사용될 프레임버퍼
			`,
			return : 'RedFrameBuffer Instance'
		}
         :DOC*/
        Object.defineProperty(this, 'frameBuffer', {value: RedFrameBuffer(redGL)});
        Object.defineProperty(this, 'finalMaterial', {value: RedPostEffectMaterial(redGL, this['frameBuffer']['texture'])});
        /**DOC:
         {
			title :`postEffectList`,
			code : 'PROPERTY',
			description : `
				이펙트 리스트
			`,
			return : 'Array'
		}
         :DOC*/
        Object.defineProperty(this, 'postEffectList', {value: []});
        Object.defineProperty(this, 'children', {value: [RedMesh(redGL, RedPlane(redGL, 1, 1, 1, 1, true), this['finalMaterial'])]});
        this['_UUID'] = RedGL.makeUUID();
        console.log(this);
    };
    RedPostEffectManager.prototype = {
        /**DOC:
         {
			title :`addEffect`,
			code : 'METHOD',
			description : `
				postEffect 추가
			`,
			params : {
				postEffect : [
					{type:'PostEffect Instance'}
				]
			},
			return : 'void'
		}
         :DOC*/
        addEffect: function (postEffect) {
            postEffect instanceof RedBasePostEffect || RedGLUtil.throwFunc('RedPostEffectManager : addEffect - RedBasePostEffect Instance만 허용.', '입력값 : ' + postEffect);
            this['postEffectList'].push(postEffect);
        },
        /**DOC:
         {
			title :`removeEffect`,
			code : 'METHOD',
			description : `
				postEffect 제거
			`,
			params : {
				postEffect : [
					{type:'PostEffect Instance'}
				]
			},
			return : 'void'
		}
         :DOC*/
        removeEffect: (function () {
            var t0;
            return function (postEffect) {
                t0 = this['postEffectList'].indexOf(postEffect);
                if (t0 != -1) this['postEffectList'].splice(t0, 1);
            }
        })(),
        /**DOC:
         {
			title :`removeAllEffect`,
			code : 'METHOD',
			description : `
				모든 postEffect 제거
			`,
			return : 'void'
		}
         :DOC*/
        removeAllEffect: function () {
            this['postEffectList'].length = 0;
        },
        /**DOC:
         {
			title :`bind`,
			code : 'METHOD',
			description : `
				프레임 버퍼 바인딩.
				렌더러에서 자동호출됨.
			`,
			params : {
				gl : [
					{type:'WebGL Context'}
				]
			},
			return : 'void'
		}
         :DOC*/
        bind: function (gl) {
            this['frameBuffer'].bind(gl);
        },
        /**DOC:
         {
			title :`unbind`,
			code : 'METHOD',
			description : `
				프레임 버퍼 언바인딩.
				렌더러에서 자동호출됨.
			`,
			params : {
				gl : [
					{type:'WebGL Context'}
				]
			},
			return : 'void'
		}
         :DOC*/
        unbind: function (gl) {
            this['frameBuffer'].unbind(gl);
        },
        render: (function () {
            var tQuadMesh;
            var originFrameBufferTexture, lastFrameBufferTexture;
            var setViewportScissorAndBaseUniform;
            var prevWidth, prevHeight;
            var tCamera;
            var drawEffect;
            var setSystemUniform;
            var tCacheSystemUniformInfo;
            setSystemUniform = (function () {
                var tProgram;
                var tLocationInfo;
                var tSystemUniformLocation;
                var tLocation;
                var tUUID;
                var tResolution;
                var tPerspectiveMTX;
                var tValueStr;
                tPerspectiveMTX = mat4.create();
                tResolution = new Float32Array(2);
                return function (gl, camera, effect, width, height) {
                    // 최종메쉬의 재질을 현재 이펙트로 변경
                    tQuadMesh['_material'] = effect;
                    // 프로그램을 변경
                    tProgram = tQuadMesh['_material']['program'];
                    gl.useProgram(tProgram['webglProgram']);
                    // 시스템 유니폼중 업데이트 해야할 목록 처리
                    tSystemUniformLocation = tProgram['systemUniformLocation'];
                    // 퍼스펙티브 매트릭스 처리
                    tLocationInfo = tSystemUniformLocation['uPMatrix'];
                    if (tLocationInfo) {
                        tLocation = tLocationInfo['location'];
                        tUUID = tLocationInfo['_UUID'];
                        if (tLocation) {
                            mat4.ortho(
                                tPerspectiveMTX,
                                -0.5, // left
                                0.5, // right
                                -0.5, // bottom
                                0.5, // top,
                                -camera['farClipping'],
                                camera['farClipping']
                            );
                            mat4.scale(tPerspectiveMTX, tPerspectiveMTX, [1, -1, 1]);
                            tValueStr = JSON.stringify(tPerspectiveMTX);
                            if (tCacheSystemUniformInfo[tUUID] != tValueStr) {
                                gl.uniformMatrix4fv(tLocation, false, tPerspectiveMTX);
                                tCacheSystemUniformInfo[tUUID] = tValueStr;
                            }
                        }
                    }
                    // 레졸루션 정보 처리
                    tLocationInfo = tSystemUniformLocation['uResolution'];
                    if (tLocationInfo) {
                        tLocation = tLocationInfo['location'];
                        tUUID = tLocationInfo['_UUID'];
                        if (tLocation) {
                            tResolution[0] = width;
                            tResolution[1] = height;
                            tValueStr = JSON.stringify(tResolution);
                            if (tCacheSystemUniformInfo[tUUID] != tValueStr) {
                                gl.uniform2fv(tLocation, tResolution);
                                tCacheSystemUniformInfo[tUUID] = tValueStr;
                            }
                        }
                    }
                }
            })();
            setViewportScissorAndBaseUniform = (function () {
                var tWidth, tHeight;
                return function (gl, camera, effect, viewRect) {
                    tWidth = effect['frameBuffer']['width'] = viewRect[2];
                    tHeight = effect['frameBuffer']['height'] = viewRect[3];
                    if (prevWidth != tWidth || prevHeight != tHeight) {
                        gl.viewport(0, 0, tWidth, tHeight);
                        gl.scissor(0, 0, tWidth, tHeight);
                    }
                    // 해당 이펙트의 프레임버퍼 유니폼 정보 업데이트
                    setSystemUniform(gl, camera, effect, tWidth, tHeight);
                    prevWidth = tWidth;
                    prevHeight = tHeight;
                }
            })();
            drawEffect = function (redGL, effect, quadChildren, redView, redRenderer, time, renderInfo) {
                // console.log('Render Effect', v)
                var tParentFrameBufferTexture;
                var tSubFrameBufferList; // 서브에서 씬자체를 그려야할때 사용;
                var tGL;
                var i, len;
                var i2, len2, tSubScene;
                var tScene, tViewRect;
                tGL = redGL.gl;
                tScene = redView['scene'];
                tViewRect = redView['_viewRect'];
                ////////////////////////////////////////////////////////////////////////////
                // 이펙트 최종결과를 생성하기전 전처리 진행
                if (effect['_process'] && effect['_process'].length) {
                    tParentFrameBufferTexture = lastFrameBufferTexture;
                    i = 0;
                    len = effect['_process'].length;
                    for (i; i < len; i++) drawEffect(redGL, effect['_process'][i], quadChildren, redView, redRenderer, time, renderInfo);
                }
                ////////////////////////////////////////////////////////////////////////////
                // 이펙트 서브신버퍼를 사용한다면 그림
                tSubFrameBufferList = effect['_subFrameBufferList'];
                if (tSubFrameBufferList && tSubFrameBufferList.length) {
                    i2 = 0;
                    len2 = tSubFrameBufferList.length;
                    for (i2; i2 < len2; i2++) {
                        tSubScene = tSubFrameBufferList[i2];
                        tSubScene['frameBuffer']['width'] = tViewRect[2];
                        tSubScene['frameBuffer']['height'] = tViewRect[3];
                        tSubScene['frameBuffer'].bind(tGL);
                        tGL.clear(tGL.COLOR_BUFFER_BIT | tGL.DEPTH_BUFFER_BIT);
                        redRenderer.sceneRender(redGL, tScene, tCamera, tCamera['orthographicYn'], tScene['children'], time, renderInfo, tSubScene['renderMaterial'], true, true);
                        tSubScene['frameBuffer'].unbind(tGL);
                        prevWidth = tSubScene['frameBuffer']['width'];
                        prevHeight = tSubScene['frameBuffer']['height'];
                        // 서브 신버퍼에 프로세스 처리
                        if (tSubScene['_process'] && tSubScene['_process'].length) {
                            i = 0;
                            len = tSubScene['_process'].length;
                            for (i; i < len; i++) drawEffect(redGL, tSubScene['_process'][i], quadChildren, tScene, redRenderer, time, renderInfo);
                        }
                    }
                }
                ////////////////////////////////////////////////////////////////////////////
                // 이펙트 처리
                if (effect['frameBuffer']) {
                    setViewportScissorAndBaseUniform(tGL, tCamera, effect, tViewRect);
                    // 해당 이펙트의 프레임 버퍼를 바인딩
                    effect.bind(tGL);
                    // 해당 이펙트의 기본 텍스쳐를 지난 이펙트의 최종 텍스쳐로 업로드
                    effect.updateTexture(
                        lastFrameBufferTexture,
                        tParentFrameBufferTexture
                    );
                    // 해당 이펙트를 렌더링하고
                    redRenderer.sceneRender(redGL, tScene, tCamera, true, quadChildren, time, renderInfo, null, true, true);
                    // 해당 이펙트의 프레임 버퍼를 언바인딩한다.
                    effect.unbind(tGL);
                    // 현재 이펙트를 최종 텍스쳐로 기록하고 다음 이펙트가 있을경우 활용한다.
                    lastFrameBufferTexture = effect['frameBuffer']['texture'];
                    // console.log(effect)
                }
            };
            return (function () {
                var self;
                var tEffectList;
                var i, len;
                var tScene;
                var tViewRect, tWorldRect;
                tEffectList = [];
                return function (redGL, gl, redRenderer, redView, time, renderInfo) {
                    self = this;
                    prevWidth = null;
                    prevHeight = null;
                    tScene = redView['scene'];
                    tCamera = redView['camera'] instanceof RedBaseController ? redView['camera']['camera'] : redView['camera'];
                    tViewRect = redView['_viewRect'];
                    tWorldRect = redRenderer['worldRect'];
                    tCacheSystemUniformInfo = redRenderer['cacheInfo']['cacheSystemUniformInfo'];
                    ////////////////////////////////////////////////////////////////////////////
                    // 포스트 이펙터 언바인딩
                    self.unbind(gl);
                    tQuadMesh = self['children'][0];
                    ////////////////////////////////////////////////////////////////////////////
                    // 프레임 버퍼 정보를 캐싱
                    lastFrameBufferTexture = originFrameBufferTexture = self['frameBuffer']['texture'];
                    ////////////////////////////////////////////////////////////////////////////
                    // 최종결과는 RedView의 사이즈와 동일하게 한다.
                    self['frameBuffer']['width'] = tViewRect[2];
                    self['frameBuffer']['height'] = tViewRect[3];
                    ////////////////////////////////////////////////////////////////////////////
                    // 렌더링할 이펙트 리스트를 정리한다.
                    tEffectList.length = 0;
                    i = 0;
                    len = self['postEffectList'].length;
                    for (i; i < len; i++) tEffectList[i] = self['postEffectList'][i];
                    // 안티알리어싱 모드가 적용되어있으면 추가한다.
                    if (self['antialiasing']) tEffectList.push(self['antialiasing']);
                    //TODO: 감마를 여기서 추가해야할듯
                    ////////////////////////////////////////////////////////////////////////////
                    // 이펙트 렌더
                    i = 0;
                    len = tEffectList.length;
                    for (i; i < len; i++) drawEffect(redGL, tEffectList[i], self['children'], redView, redRenderer, time, renderInfo);
                    ////////////////////////////////////////////////////////////////////////////
                    // 이펙트가 존재한다면 최종 이펙트의 프레임버퍼 결과물을 최종으로 렌더링한다.
                    if (lastFrameBufferTexture != originFrameBufferTexture) {
                        self['finalMaterial']['diffuseTexture'] = lastFrameBufferTexture;
                        gl.viewport(tViewRect[0], tWorldRect[3] - tViewRect[3] - tViewRect[1], tViewRect[2], tViewRect[3]);
                        gl.scissor(tViewRect[0], tWorldRect[3] - tViewRect[3] - tViewRect[1], tViewRect[2], tViewRect[3]);
                        // 최종 재질을 기준으로 필요한 기본 유니폼을 세팅한다.
                        setSystemUniform(gl, tCamera, self['finalMaterial'], tViewRect[2], tViewRect[3], true);
                        redRenderer.sceneRender(redGL, tScene, tCamera, true, self['children'], time, renderInfo, null, true);
                    }
                    self['finalMaterial']['diffuseTexture'] = self['frameBuffer']['texture'];
                }
            })();
        })()
    };
    /**DOC:
     {
		title :`antialiasing`,
		code : 'PROPERTY',
		description : `
			안티알리어싱 설정
			현재는 RedPostEffect_FXAA만 등록가능
		`,
		return : 'Array'
	}
     :DOC*/
    Object.defineProperty(RedPostEffectManager.prototype, 'antialiasing', {
        get: function () {
            return this['_antialiasing']
        },
        set: function (v) {
            if (v) v instanceof RedPostEffect_FXAA || RedGLUtil.throwFunc('RedPostEffectManager : antialiasing - RedPostEffect_FXAA Instance만 허용.', '입력값 : ' + v);
            this['_antialiasing'] = v;
        }
    });
    Object.freeze(RedPostEffectManager);
})();
"use strict";
var RedBasePostEffect;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedBasePostEffect`,
		 description : `
			 포스트 이펙트 정의 사용되는 기저층
		 `,
		 extends:['RedBaseMaterial'],
		 return : 'RedBasePostEffect Instance'
	 }
     :DOC*/
    RedBasePostEffect = function () {
    };
    RedBasePostEffect.prototype = new RedBaseMaterial();
    RedBasePostEffect.prototype['bind'] = RedPostEffectManager.prototype['bind'];
    RedBasePostEffect.prototype['unbind'] = RedPostEffectManager.prototype['unbind'];
    /**DOC:
     {
		title :`updateTexture`,
		code : 'METHOD',
		description : `
			포스트이펙트 정의시 반드시 재정의 되어야함.
			포스트 이펙트 내부에서 사용되는 텍스쳐를 업데이트함.
		`,
		return : 'void'
	}
     :DOC*/
    RedBasePostEffect.prototype['updateTexture'] = function () {
        RedGLUtil.throwFunc('RedBasePostEffect - updateTexture : 반드시 재정의해야함')
    };
    /**DOC:
     {
		title :`_process`,
		code : 'PROPERTY',
		description : `
			해당포스트 이펙트 처리전 전처리과정이 필요할 경우 사용.
		`,
		return : 'void'
	}
     :DOC*/
    RedBasePostEffect.prototype['_process'] = [];
    /**DOC:
     {
		title :`_subFrameBufferList`,
		code : 'PROPERTY',
		description : `
			해당포스트 이펙트에서 개별적인 프레임 버퍼가 추가로 필요할 경우 사용.
		`,
		return : 'void'
	}
     :DOC*/
    RedBasePostEffect.prototype['_subFrameBufferList'] = [];
    Object.freeze(RedBasePostEffect);
})();
"use strict";
var RedPostEffect_Bloom;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedPostEffectBloomProgram';
    var checked;
    vSource = function () {
        /* @preserve
         void main(void) {
         vTexcoord = aTexcoord;
            gl_Position = uPMatrix * uMMatrix *  vec4(aVertexPosition, 1.0);
         }
         */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
         uniform sampler2D u_diffuseTexture;
         uniform sampler2D u_blurTexture;
         uniform float u_exposure;
         uniform float u_bloomStrength;

         void main() {
             vec4 finalColor = texture2D(u_diffuseTexture, vTexcoord);
             vec4 thresholdColor = finalColor;
             vec4 blurColor = texture2D(u_blurTexture, vTexcoord);
             finalColor.rgb = (finalColor.rgb  + blurColor.rgb * u_bloomStrength) * u_exposure;
             gl_FragColor = finalColor ;
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedPostEffect_Bloom`,
		 description : `
			 Bloom 이펙트
			 postEffectManager.addEffect( effect Instance ) 로 추가.
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 extends : [
		    'RedBasePostEffect',
		    'RedBaseMaterial'
		 ],
		 demo : '../example/postEffect/bloom/RedPostEffect_Bloom.html',
		 example : `
            var effect;
            effect = RedPostEffect_Bloom(RedGL Instance); // 포스트이펙트 생성
            // postEffectManager는 RedView 생성시 자동생성됨.
            (RedView Instance)['postEffectManager'].addEffect(effect); // 뷰에 이펙트 추가
		 `,
		 return : 'RedPostEffect_Bloom Instance'
	 }
     :DOC*/
    RedPostEffect_Bloom = function (redGL) {
        if (!(this instanceof RedPostEffect_Bloom)) return new RedPostEffect_Bloom(redGL);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedPostEffect_Bloom : RedGL Instance만 허용.', redGL);
        this['frameBuffer'] = RedFrameBuffer(redGL);
        this['diffuseTexture'] = null;
        this['blurTexture'] = null;
        this['exposure'] = 1;
        this['bloomStrength'] = 1.2;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['_process'] = [
            RedPostEffect_BloomThreshold(redGL),
            RedPostEffect_BlurX(redGL),
            RedPostEffect_BlurY(redGL)
        ];
        this['blur'] = 20;
        this['threshold'] = 75;
        this['program'] = RedProgram['makeProgram'](redGL, PROGRAM_NAME, vSource, fSource);
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedPostEffect_Bloom.prototype = new RedBasePostEffect();
    RedPostEffect_Bloom.prototype['updateTexture'] = function (lastFrameBufferTexture, parentFrameBufferTexture) {
        this['diffuseTexture'] = parentFrameBufferTexture;
        this['blurTexture'] = lastFrameBufferTexture;
    };
    RedDefinePropertyInfo.definePrototype('RedPostEffect_Bloom', 'diffuseTexture', 'sampler2D');
    RedDefinePropertyInfo.definePrototype('RedPostEffect_Bloom', 'blurTexture', 'sampler2D');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`exposure`,
		 description : `
			 확산 강도.
			 기본값 : 1
			 min : 0
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_Bloom', 'exposure', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`bloomStrength`,
		 description : `
			 블룸 강도
			 기본값 : 1.2
			 min : 0
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_Bloom', 'bloomStrength', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`threshold`,
		 description : `
			 최소 유효값
			 기본값 : 75
			 min : 0
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_Bloom', 'threshold', 'number', {
        min: 0,
        callback: function (v) {
            this['_process'][0]['threshold'] = v;
            this['_threshold'] = this['_process'][0]['threshold']
        }
    });
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`blur`,
		 description : `
			 blur 정도.
			 기본값 : 20
			 min : 0
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_Bloom', 'blur', 'number', {
        min: 0, callback: function (v) {
            this['_process'][1]['size'] = v;
            this['_process'][2]['size'] = v;
        }
    });
    Object.freeze(RedPostEffect_Bloom);
})();
"use strict";
var RedPostEffect_BloomThreshold;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME;
    var checked;
    vSource = function () {
        /* @preserve
         void main(void) {
             vTexcoord = aTexcoord;
             gl_Position = uPMatrix * uMMatrix *  vec4(aVertexPosition, 1.0);
         }
         */
    };
    fSource = function () {
        /* @preserve
         precision highp float;
         uniform sampler2D u_diffuseTexture;
         uniform float u_threshold_value;

         void main() {
             vec4 finalColor = texture2D(u_diffuseTexture, vTexcoord);
             if(0.2126 * finalColor.r + 0.7152 * finalColor.g + 0.0722 * finalColor.b < u_threshold_value)  finalColor.r = finalColor.g = finalColor.b = 0.0;
             gl_FragColor = finalColor;
         }
         */
    };
    PROGRAM_NAME = 'RedPostEffectBloomThresholdProgram';
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedPostEffect_BloomThreshold`,
		 description : `
			 BloomThreshold 이펙트
			 RedPostEffect_Bloom 내부에서 사용하는 절차 이펙트
			 시스템적으로 사용됨.
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 extends : [
		    'RedBasePostEffect',
		    'RedBaseMaterial'
		 ],
		 example : `
            var effect;
            effect = RedPostEffect_BloomThreshold(RedGL Instance); // 포스트이펙트 생성
            // postEffectManager는 RedView 생성시 자동생성됨.
            (RedView Instance)['postEffectManager'].addEffect(effect); // 뷰에 이펙트 추가
		 `,
		 return : 'RedPostEffect_BloomThreshold Instance'
	 }
     :DOC*/
    RedPostEffect_BloomThreshold = function (redGL) {
        if (!(this instanceof RedPostEffect_BloomThreshold)) return new RedPostEffect_BloomThreshold(redGL);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedPostEffect_BloomThreshold : RedGL Instance만 허용.', redGL);
        this['frameBuffer'] = RedFrameBuffer(redGL);
        this['diffuseTexture'] = null;
        this['threshold'] = 128;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['program'] = RedProgram['makeProgram'](redGL, PROGRAM_NAME, vSource, fSource);
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedPostEffect_BloomThreshold.prototype = new RedBasePostEffect();
    RedPostEffect_BloomThreshold.prototype['updateTexture'] = function (lastFrameBufferTexture) {
        this['diffuseTexture'] = lastFrameBufferTexture;
    };
    RedDefinePropertyInfo.definePrototype('RedPostEffect_BloomThreshold', 'diffuseTexture', 'sampler2D');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`threshold`,
		 description : `
			 최소 유효값
			 기본값 : 128
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_BloomThreshold', 'threshold', 'number', {
        min: 0, max: 255, callback: function (v) {
            this['_threshold_value'] = v / 255
        }
    });
    Object.freeze(RedPostEffect_BloomThreshold);
})();
"use strict";
var RedPostEffect_Blur;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedPostEffectBlurProgram';
    var checked;
    vSource = function () {
        /* @preserve
         void main(void) {
             vTexcoord = aTexcoord;
             vResolution = uResolution;
             gl_Position = uPMatrix * uMMatrix *  vec4(aVertexPosition, 1.0);
         }
         */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
         uniform sampler2D u_diffuseTexture;
         void main(void) {
             vec2 px = vec2(1.0/vResolution.x, 1.0/vResolution.y);
             vec4 finalColor = vec4(0.0);
             finalColor += texture2D(u_diffuseTexture, vTexcoord + vec2(-7.0*px.x, -7.0*px.y))*0.0044299121055113265;
             finalColor += texture2D(u_diffuseTexture, vTexcoord + vec2(-6.0*px.x, -6.0*px.y))*0.00895781211794;
             finalColor += texture2D(u_diffuseTexture, vTexcoord + vec2(-5.0*px.x, -5.0*px.y))*0.0215963866053;
             finalColor += texture2D(u_diffuseTexture, vTexcoord + vec2(-4.0*px.x, -4.0*px.y))*0.0443683338718;
             finalColor += texture2D(u_diffuseTexture, vTexcoord + vec2(-3.0*px.x, -3.0*px.y))*0.0776744219933;
             finalColor += texture2D(u_diffuseTexture, vTexcoord + vec2(-2.0*px.x, -2.0*px.y))*0.115876621105;
             finalColor += texture2D(u_diffuseTexture, vTexcoord + vec2(-1.0*px.x, -1.0*px.y))*0.147308056121;
             finalColor += texture2D(u_diffuseTexture, vTexcoord                             )*0.159576912161;
             finalColor += texture2D(u_diffuseTexture, vTexcoord + vec2( 1.0*px.x,  1.0*px.y))*0.147308056121;
             finalColor += texture2D(u_diffuseTexture, vTexcoord + vec2( 2.0*px.x,  2.0*px.y))*0.115876621105;
             finalColor += texture2D(u_diffuseTexture, vTexcoord + vec2( 3.0*px.x,  3.0*px.y))*0.0776744219933;
             finalColor += texture2D(u_diffuseTexture, vTexcoord + vec2( 4.0*px.x,  4.0*px.y))*0.0443683338718;
             finalColor += texture2D(u_diffuseTexture, vTexcoord + vec2( 5.0*px.x,  5.0*px.y))*0.0215963866053;
             finalColor += texture2D(u_diffuseTexture, vTexcoord + vec2( 6.0*px.x,  6.0*px.y))*0.00895781211794;
             finalColor += texture2D(u_diffuseTexture, vTexcoord + vec2( 7.0*px.x,  7.0*px.y))*0.0044299121055113265;
             gl_FragColor = finalColor;
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedPostEffect_Blur`,
		 description : `
			 기본 블러 이펙트
			 postEffectManager.addEffect( effect Instance ) 로 추가.
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 extends : [
		    'RedBasePostEffect',
		    'RedBaseMaterial'
		 ],
		 demo : '../example/postEffect/blur/RedPostEffect_Blur.html',
		 example : `
            var effect;
            effect = RedPostEffect_Blur(RedGL Instance); // 포스트이펙트 생성
            // postEffectManager는 RedView 생성시 자동생성됨.
            (RedView Instance)['postEffectManager'].addEffect(effect); // 뷰에 이펙트 추가
		 `,
		 return : 'RedPostEffect_Blur Instance'
	 }
     :DOC*/
    RedPostEffect_Blur = function (redGL) {
        if (!(this instanceof RedPostEffect_Blur)) return new RedPostEffect_Blur(redGL);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedPostEffect_Blur : RedGL Instance만 허용.', redGL);
        this['frameBuffer'] = RedFrameBuffer(redGL);
        this['diffuseTexture'] = null;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['program'] = RedProgram['makeProgram'](redGL, PROGRAM_NAME, vSource, fSource);
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedPostEffect_Blur.prototype = new RedBasePostEffect();
    RedPostEffect_Blur.prototype['updateTexture'] = function (lastFrameBufferTexture) {
        this['diffuseTexture'] = lastFrameBufferTexture;
    };
    RedDefinePropertyInfo.definePrototype('RedPostEffect_Blur', 'diffuseTexture', 'sampler2D');
    Object.freeze(RedPostEffect_Blur);
})();
"use strict";
var RedPostEffect_BlurX;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedPostEffectBlurXProgram';
    var checked;
    vSource = function () {
        /* @preserve
         void main(void) {
             vTexcoord = aTexcoord;
             vResolution = uResolution;
             gl_Position = uPMatrix * uMMatrix *  vec4(aVertexPosition, 1.0);
         }
         */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
         uniform sampler2D u_diffuseTexture;
         uniform float u_size;
         float random(vec3 scale, float seed) {
            return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
         }
         void main() {
             vec4 finalColor = vec4(0.0);
             vec2 delta;
             float total = 0.0;
             float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
             delta = vec2(u_size/vResolution.x,0.0);
             for (float t = -10.0; t <= 10.0; t++) {
                 float percent = (t + offset - 0.5) / 10.0;
                 float weight = 1.0 - abs(percent);
                 vec4 sample = texture2D(u_diffuseTexture, vTexcoord + delta * percent);
                 sample.rgb *= sample.a;
                 finalColor += sample * weight;
                 total += weight;
             }
             finalColor = finalColor / total;
             finalColor.rgb /= finalColor.a + 0.00001;
             gl_FragColor =  finalColor ;
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedPostEffect_BlurX`,
		 description : `
			 X축 블러 이펙트
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 extends : [
		    'RedBasePostEffect',
		    'RedBaseMaterial'
		 ],
		 demo : '../example/postEffect/blur/RedPostEffect_BlurX.html',
		 example : `
            var effect;
            effect = RedPostEffect_BlurX(RedGL Instance); // 포스트이펙트 생성
            // postEffectManager는 RedView 생성시 자동생성됨.
            (RedView Instance)['postEffectManager'].addEffect(effect); // 뷰에 이펙트 추가
		 `,
		 return : 'RedPostEffect_BlurX Instance'
	 }
     :DOC*/
    RedPostEffect_BlurX = function (redGL) {
        if (!(this instanceof RedPostEffect_BlurX)) return new RedPostEffect_BlurX(redGL);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedPostEffect_BlurX : RedGL Instance만 허용.', redGL);
        this['frameBuffer'] = RedFrameBuffer(redGL);
        this['diffuseTexture'] = null;
        this['size'] = 50;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['program'] = RedProgram['makeProgram'](redGL, PROGRAM_NAME, vSource, fSource);
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedPostEffect_BlurX.prototype = new RedBasePostEffect();
    RedPostEffect_BlurX.prototype['updateTexture'] = function (lastFrameBufferTexture) {
        this['diffuseTexture'] = lastFrameBufferTexture;
    };
    RedDefinePropertyInfo.definePrototype('RedPostEffect_BlurX', 'diffuseTexture', 'sampler2D');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`size`,
		 description : `
			 블러 사이즈
			 기본값 : 50
			 min : 0
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_BlurX', 'size', 'number', {'min': 0});
    Object.freeze(RedPostEffect_BlurX);
})();
"use strict";
var RedPostEffect_BlurY;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedPostEffectBlurYProgram';
    var checked;
    vSource = function () {
        /* @preserve
         void main(void) {
             vTexcoord = aTexcoord;
             vResolution = uResolution;
             gl_Position = uPMatrix * uMMatrix *  vec4(aVertexPosition, 1.0);
         }
         */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
         uniform sampler2D u_diffuseTexture;
         uniform float u_size;
         float random(vec3 scale, float seed) {
             return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
         }
         void main() {
             vec4 finalColor = vec4(0.0);
             vec2 delta;
             float total = 0.0;
             float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
             delta = vec2(0.0, u_size/vResolution.y);
             for (float t = -10.0; t <= 10.0; t++) {
                 float percent = (t + offset - 0.5) / 10.0;
                 float weight = 1.0 - abs(percent);
                 vec4 sample = texture2D(u_diffuseTexture, vTexcoord + delta * percent);
                 sample.rgb *= sample.a;
                 finalColor += sample * weight;
                 total += weight;
             }
             finalColor = finalColor / total;
             finalColor.rgb /= finalColor.a + 0.00001;
             gl_FragColor =   finalColor ;
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedPostEffect_BlurY`,
		 description : `
			 Y축 블러 이펙트
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 extends : [
		    'RedBasePostEffect',
		    'RedBaseMaterial'
		 ],
		 demo : '../example/postEffect/blur/RedPostEffect_BlurY.html',
		 example : `
            var effect;
            effect = RedPostEffect_BlurY(RedGL Instance); // 포스트이펙트 생성
            // postEffectManager는 RedView 생성시 자동생성됨.
            (RedView Instance)['postEffectManager'].addEffect(effect); // 뷰에 이펙트 추가
		 `,
		 return : 'RedPostEffect_BlurY Instance'
	 }
     :DOC*/
    RedPostEffect_BlurY = function (redGL) {
        if (!(this instanceof RedPostEffect_BlurY)) return new RedPostEffect_BlurY(redGL);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedPostEffect_BlurY : RedGL Instance만 허용.', redGL);
        this['frameBuffer'] = RedFrameBuffer(redGL);
        this['diffuseTexture'] = null;
        this['size'] = 50;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['program'] = RedProgram['makeProgram'](redGL, PROGRAM_NAME, vSource, fSource);
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedPostEffect_BlurY.prototype = new RedBasePostEffect();
    RedPostEffect_BlurY.prototype['updateTexture'] = function (lastFrameBufferTexture) {
        this['diffuseTexture'] = lastFrameBufferTexture;
    };
    RedDefinePropertyInfo.definePrototype('RedPostEffect_BlurY', 'diffuseTexture', 'sampler2D');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`size`,
		 description : `
			 블러 사이즈
			 기본값 : 50
			 min : 0
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_BlurY', 'size', 'number', {'min': 0});
    Object.freeze(RedPostEffect_BlurY);
})();
"use strict";
var RedPostEffect_GaussianBlur;
(function () {
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedPostEffect_GaussianBlur`,
		 description : `
			 가우시안 블러 이펙트
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 extends : [
		    'RedBasePostEffect',
		    'RedBaseMaterial'
		 ],
		 demo : '../example/postEffect/blur/RedPostEffect_GaussianBlur.html',
		 example : `
            var effect;
            effect = RedPostEffect_GaussianBlur(RedGL Instance); // 포스트이펙트 생성
            // postEffectManager는 RedView 생성시 자동생성됨.
            (RedView Instance)['postEffectManager'].addEffect(effect); // 뷰에 이펙트 추가
		 `,
		 return : 'RedPostEffect_GaussianBlur Instance'
	 }
     :DOC*/
    RedPostEffect_GaussianBlur = function (redGL) {
        if (!(this instanceof RedPostEffect_GaussianBlur)) return new RedPostEffect_GaussianBlur(redGL);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedPostEffect_GaussianBlur : RedGL Instance만 허용.', redGL);
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['_UUID'] = RedGL.makeUUID();
        this['_process'] = [
            RedPostEffect_BlurX(redGL),
            RedPostEffect_BlurY(redGL)
        ];
        this['radius'] = 1;
        console.log(this);
    };
    RedPostEffect_GaussianBlur.prototype = new RedBasePostEffect();
    RedPostEffect_GaussianBlur.prototype['updateTexture'] = function () {
    };
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`radius`,
		 description : `
			 가우시간 블러강도
			 기본값 : 1
			 min: 0.1
			 max: 255
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_GaussianBlur', 'radius', 'number', {
        min: 0.1, max: 255, callback: function (v) {
            this['_process'][0]['size'] = v;
            this['_process'][1]['size'] = v;
        }
    });
    Object.freeze(RedPostEffect_GaussianBlur);
})();
"use strict";
var RedPostEffect_ZoomBlur;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedPostEffectZoomBlurProgram';
    var checked;
    vSource = function () {
        /* @preserve
         void main(void) {
             vTexcoord = aTexcoord;
             gl_Position = uPMatrix * uMMatrix *  vec4(aVertexPosition, 1.0);
         }
         */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
         uniform sampler2D u_diffuseTexture;
         uniform float u_centerX;
         uniform float u_centerY;
         uniform float u_amount_value;
         float random(vec3 scale, float seed) {
            return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
         }
         void main(void) {
             vec4 finalColor = vec4(0.0);
             vec2 center = vec2(u_centerX+0.5,-u_centerY+0.5);
             vec2 toCenter = center - vTexcoord ;
             float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
             float total = 0.0;

             for (float t = 0.0; t <= 30.0; t++) {
                 float percent = (t + offset) / 30.0;
                 float weight = 3.0 * (percent - percent * percent);
                 vec4 sample = texture2D(u_diffuseTexture, vTexcoord + toCenter * percent * u_amount_value );
                 sample.rgb *= sample.a;
                 finalColor += sample * weight;
                 total += weight;
             }
             gl_FragColor = finalColor / total;
             gl_FragColor.rgb /= gl_FragColor.a + 0.00001;
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedPostEffect_ZoomBlur`,
		 description : `
			 줌 블러 이펙트
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 extends : [
		    'RedBasePostEffect',
		    'RedBaseMaterial'
		 ],
		 demo : '../example/postEffect/blur/RedPostEffect_ZoomBlur.html',
		 example : `
            var effect;
            effect = RedPostEffect_ZoomBlur(RedGL Instance); // 포스트이펙트 생성
            // postEffectManager는 RedView 생성시 자동생성됨.
            (RedView Instance)['postEffectManager'].addEffect(effect); // 뷰에 이펙트 추가
		 `,
		 return : 'RedPostEffect_ZoomBlur Instance'
	 }
     :DOC*/
    RedPostEffect_ZoomBlur = function (redGL) {
        if (!(this instanceof RedPostEffect_ZoomBlur)) return new RedPostEffect_ZoomBlur(redGL);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedPostEffect_ZoomBlur : RedGL Instance만 허용.', redGL);
        this['frameBuffer'] = RedFrameBuffer(redGL);
        this['diffuseTexture'] = null;
        this['centerX'] = 0.0;
        this['centerY'] = 0.0;
        this['amount'] = 38;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['program'] = RedProgram['makeProgram'](redGL, PROGRAM_NAME, vSource, fSource);
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedPostEffect_ZoomBlur.prototype = new RedBasePostEffect();
    RedPostEffect_ZoomBlur.prototype['updateTexture'] = function (lastFrameBufferTexture) {
        this['diffuseTexture'] = lastFrameBufferTexture;
    };
    RedDefinePropertyInfo.definePrototype('RedPostEffect_ZoomBlur', 'diffuseTexture', 'sampler2D');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`centerX`,
		 description : `
			 정중앙 중심의 가로 위치
			 기본값 : 0.0
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_ZoomBlur', 'centerX', 'number');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`centerY`,
		 description : `
			 정중앙 중심의 세로 위치
			 기본값 : 0.0
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_ZoomBlur', 'centerY', 'number');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`amount`,
		 description : `
			 강도
			 기본값 : 38
			 min: 1
			 max: 100
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_ZoomBlur', 'amount', 'number', {
        min: 1, max: 100, callback: function (v) {
            this['_amount_value'] = v / 100
        }
    });
    Object.freeze(RedPostEffect_ZoomBlur);
})();
"use strict";
var RedPostEffect_BrightnessContrast;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedPostEffectBrightnessContrastProgram';
    var checked;
    vSource = function () {
        /* @preserve
         void main(void) {
             vTexcoord = aTexcoord;
             gl_Position = uPMatrix * uMMatrix *  vec4(aVertexPosition, 1.0);
         }
         */
    }
    fSource = function () {
        /* @preserve
         precision mediump float;
         uniform sampler2D u_diffuseTexture;
         uniform float u_brightness_value;
         uniform float u_contrast_value;
         void main(void) {
             vec4 finalColor = texture2D(u_diffuseTexture, vTexcoord );
             if (u_contrast_value > 0.0) finalColor.rgb = (finalColor.rgb - 0.5) / (1.0 - u_contrast_value) + 0.5;
             else finalColor.rgb = (finalColor.rgb - 0.5) * (1.0 + u_contrast_value) + 0.5;
             finalColor.rgb += u_brightness_value;
             gl_FragColor = finalColor;
         }
         */
    }
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedPostEffect_BrightnessContrast`,
		 description : `
			 BrightnessContrast 이펙트
			 postEffectManager.addEffect( effect Instance ) 로 추가.
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 extends : [
		    'RedBasePostEffect',
		    'RedBaseMaterial'
		 ],
		 demo : '../example/postEffect/adjustments/RedPostEffect_BrightnessContrast.html',
		 example : `
            var effect;
            effect = RedPostEffect_BrightnessContrast(RedGL Instance); // 포스트이펙트 생성
            // postEffectManager는 RedView 생성시 자동생성됨.
            (RedView Instance)['postEffectManager'].addEffect(effect); // 뷰에 이펙트 추가
		 `,
		 return : 'RedPostEffect_BrightnessContrast Instance'
	 }
     :DOC*/
    RedPostEffect_BrightnessContrast = function (redGL) {
        if (!(this instanceof RedPostEffect_BrightnessContrast)) return new RedPostEffect_BrightnessContrast(redGL);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedPostEffect_BrightnessContrast : RedGL Instance만 허용.', redGL);
        this['frameBuffer'] = RedFrameBuffer(redGL);
        this['diffuseTexture'] = null;
        this['brightness'] = 0;
        this['contrast'] = 0;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['program'] = RedProgram['makeProgram'](redGL, PROGRAM_NAME, vSource, fSource);
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedPostEffect_BrightnessContrast.prototype = new RedBasePostEffect();
    RedPostEffect_BrightnessContrast.prototype['updateTexture'] = function (lastFrameBufferTexture) {
        this['diffuseTexture'] = lastFrameBufferTexture;
    };
    RedDefinePropertyInfo.definePrototype('RedPostEffect_BrightnessContrast', 'diffuseTexture', 'sampler2D');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`brightness`,
		 description : `
			 밝기
			 기본값 : 0
			 min : -150
			 max : 150
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_BrightnessContrast', 'brightness', 'number', {
        min: -150, max: 150, callback: function (v) {
            this['_brightness_value'] = v / 255
        }
    });
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`contrast`,
		 description : `
			 대조
			 기본값 : 0
			 min: -50
			 max: 100
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_BrightnessContrast', 'contrast', 'number', {
        min: -50, max: 100, callback: function (v) {
            this['_contrast_value'] = v / 255
        }
    });
    Object.freeze(RedPostEffect_BrightnessContrast);
})();
"use strict";
var RedPostEffect_Threshold;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedPostEffectThresholdProgram';
    var checked;
    vSource = function () {
        /* @preserve
         void main(void) {
             vTexcoord = aTexcoord;
             gl_Position = uPMatrix * uMMatrix *  vec4(aVertexPosition, 1.0);
         }
         */
    };
    fSource = function () {
        /* @preserve
         precision highp float;
         uniform sampler2D u_diffuseTexture;
         uniform float u_threshold_value;
         void main() {
             vec4 finalColor = texture2D(u_diffuseTexture, vTexcoord);
             float v;
             if(0.2126 * finalColor.r + 0.7152 * finalColor.g + 0.0722 * finalColor.b >= u_threshold_value) v = 1.0;
             else v = 0.0;
             finalColor.r = finalColor.g = finalColor.b = v;
             gl_FragColor = finalColor;
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedPostEffect_Threshold`,
		 description : `
			 Threshold 이펙트
			 postEffectManager.addEffect( effect Instance ) 로 추가.
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 extends : [
		    'RedBasePostEffect',
		    'RedBaseMaterial'
		 ],
		 demo : '../example/postEffect/adjustments/RedPostEffect_Threshold.html',
		 example : `
            var effect;
            effect = RedPostEffect_Threshold(RedGL Instance); // 포스트이펙트 생성
            // postEffectManager는 RedView 생성시 자동생성됨.
            (RedView Instance)['postEffectManager'].addEffect(effect); // 뷰에 이펙트 추가
		 `,
		 return : 'RedPostEffect_Threshold Instance'
	 }
     :DOC*/
    RedPostEffect_Threshold = function (redGL) {
        if (!(this instanceof RedPostEffect_Threshold)) return new RedPostEffect_Threshold(redGL);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedPostEffect_Threshold : RedGL Instance만 허용.', redGL);
        this['frameBuffer'] = RedFrameBuffer(redGL);
        this['diffuseTexture'] = null;
        this['threshold'] = 128;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['program'] = RedProgram['makeProgram'](redGL, PROGRAM_NAME, vSource, fSource);
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedPostEffect_Threshold.prototype = new RedBasePostEffect();
    RedPostEffect_Threshold.prototype['updateTexture'] = function (lastFrameBufferTexture) {
        this['diffuseTexture'] = lastFrameBufferTexture;
    };
    RedDefinePropertyInfo.definePrototype('RedPostEffect_Threshold', 'diffuseTexture', 'sampler2D');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`threshold`,
		 description : `
			 최소 유효값
			 기본값 : 128
			 min: 1
			 max: 255
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_Threshold', 'threshold', 'number', {
        min: 1, max: 255, callback: function (v) {
            this['_threshold_value'] = v / 255
        }
    });
    Object.freeze(RedPostEffect_Threshold);
})();
"use strict";
var RedPostEffect_Invert;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedPostEffectInvertProgram';
    var checked;
    vSource = function () {
        /* @preserve
         void main(void) {
             vTexcoord = aTexcoord;
             gl_Position = uPMatrix * uMMatrix *  vec4(aVertexPosition, 1.0);
         }
         */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
         uniform sampler2D u_diffuseTexture;

         void main(void) {
             vec4 finalColor = texture2D(u_diffuseTexture, vTexcoord);
             finalColor.r = 1.0 - finalColor.r;
             finalColor.g = 1.0 - finalColor.g;
             finalColor.b = 1.0 - finalColor.b;
             gl_FragColor = finalColor;
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedPostEffect_Invert`,
		 description : `
			 Invert 이펙트
			 postEffectManager.addEffect( effect Instance ) 로 추가.
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 extends : [
		    'RedBasePostEffect',
		    'RedBaseMaterial'
		 ],
		 demo : '../example/postEffect/adjustments/RedPostEffect_Invert.html',
		 example : `
            var effect;
            effect = RedPostEffect_Invert(RedGL Instance); // 포스트이펙트 생성
            // postEffectManager는 RedView 생성시 자동생성됨.
            (RedView Instance)['postEffectManager'].addEffect(effect); // 뷰에 이펙트 추가
		 `,
		 return : 'RedPostEffect_Invert Instance'
	 }
     :DOC*/
    RedPostEffect_Invert = function (redGL) {
        if (!(this instanceof RedPostEffect_Invert)) return new RedPostEffect_Invert(redGL);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedPostEffect_Invert : RedGL Instance만 허용.', redGL);
        this['frameBuffer'] = RedFrameBuffer(redGL);
        this['diffuseTexture'] = null;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['program'] = RedProgram['makeProgram'](redGL, PROGRAM_NAME, vSource, fSource);
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedPostEffect_Invert.prototype = new RedBasePostEffect();
    RedPostEffect_Invert.prototype['updateTexture'] = function (lastFrameBufferTexture) {
        this['diffuseTexture'] = lastFrameBufferTexture;
    };
    RedDefinePropertyInfo.definePrototype('RedPostEffect_Invert', 'diffuseTexture', 'sampler2D');
    Object.freeze(RedPostEffect_Invert);
})();
"use strict";
var RedPostEffect_Gray;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedPostEffectGrayProgram';
    var checked;
    vSource = function () {
        /* @preserve
         void main(void) {
             vTexcoord = aTexcoord;
             vResolution = uResolution;
             gl_Position = uPMatrix * uMMatrix *  vec4(aVertexPosition, 1.0);
         }
         */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
         uniform sampler2D u_diffuseTexture;
         void main(void) {
             vec4 finalColor = texture2D(u_diffuseTexture, vTexcoord);
             highp float gray = (finalColor.r  + finalColor.g + finalColor.b)/3.0;
             gl_FragColor = vec4( gray, gray, gray, 1.0);
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedPostEffect_Gray`,
		 description : `
			 Gray 이펙트
			 postEffectManager.addEffect( effect Instance ) 로 추가.
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 extends : [
		    'RedBasePostEffect',
		    'RedBaseMaterial'
		 ],
		 demo : '../example/postEffect/adjustments/RedPostEffect_Gray.html',
		 example : `
            var effect;
            effect = RedPostEffect_Gray(RedGL Instance); // 포스트이펙트 생성
            // postEffectManager는 RedView 생성시 자동생성됨.
            (RedView Instance)['postEffectManager'].addEffect(effect); // 뷰에 이펙트 추가
		 `,
		 return : 'RedPostEffect_Gray Instance'
	 }
     :DOC*/
    RedPostEffect_Gray = function (redGL) {
        if (!(this instanceof RedPostEffect_Gray)) return new RedPostEffect_Gray(redGL);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedPostEffect_Gray : RedGL Instance만 허용.', redGL);
        this['frameBuffer'] = RedFrameBuffer(redGL);
        this['diffuseTexture'] = null;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['program'] = RedProgram['makeProgram'](redGL, PROGRAM_NAME, vSource, fSource);
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedPostEffect_Gray.prototype = new RedBasePostEffect();
    RedPostEffect_Gray.prototype['updateTexture'] = function (lastFrameBufferTexture) {
        this['diffuseTexture'] = lastFrameBufferTexture;
    };
    RedDefinePropertyInfo.definePrototype('RedPostEffect_Gray', 'diffuseTexture', 'sampler2D');
    Object.freeze(RedPostEffect_Gray);
})();
"use strict";
var RedPostEffect_HueSaturation;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedPostEffectHueSaturationProgram';
    var checked;
    vSource = function () {
        /* @preserve
         void main(void) {
             vTexcoord = aTexcoord;
             gl_Position = uPMatrix * uMMatrix *  vec4(aVertexPosition, 1.0);
         }
         */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
         uniform sampler2D u_diffuseTexture;
         uniform float u_hue_value;
         uniform float u_saturation_value;
         void main(void) {
             vec4 finalColor = texture2D(u_diffuseTexture, vTexcoord );
             float angle = u_hue_value * 3.1415926535897932384626433832795;
             float s = sin(angle), c = cos(angle);
             vec3 weights = (vec3(2.0 * c, -sqrt(3.0) * s - c, sqrt(3.0) * s - c) + 1.0) / 3.0;
             float len = length(finalColor.rgb);

             finalColor.rgb = vec3(
                 dot(finalColor.rgb, weights.xyz),
                 dot(finalColor.rgb, weights.zxy),
                 dot(finalColor.rgb, weights.yzx)
             );

             float average = (finalColor.r + finalColor.g + finalColor.b) / 3.0;
             if (u_saturation_value > 0.0) finalColor.rgb += (average - finalColor.rgb) * (1.0 - 1.0 / (1.001 - u_saturation_value));
             else finalColor.rgb += (average - finalColor.rgb) * (-u_saturation_value);
             gl_FragColor = finalColor;
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedPostEffect_HueSaturation`,
		 description : `
			 HueSaturation 이펙트
			 postEffectManager.addEffect( effect Instance ) 로 추가.
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 extends : [
		    'RedBasePostEffect',
		    'RedBaseMaterial'
		 ],
		 demo : '../example/postEffect/adjustments/RedPostEffect_HueSaturation.html',
		 example : `
            var effect;
            effect = RedPostEffect_HueSaturation(RedGL Instance); // 포스트이펙트 생성
            // postEffectManager는 RedView 생성시 자동생성됨.
            (RedView Instance)['postEffectManager'].addEffect(effect); // 뷰에 이펙트 추가
		 `,
		 return : 'RedPostEffect_HueSaturation Instance'
	 }
     :DOC*/
    RedPostEffect_HueSaturation = function (redGL) {
        if (!(this instanceof RedPostEffect_HueSaturation)) return new RedPostEffect_HueSaturation(redGL);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedPostEffect_HueSaturation : RedGL Instance만 허용.', redGL);
        this['frameBuffer'] = RedFrameBuffer(redGL);
        this['diffuseTexture'] = null;
        this['hue'] = 0;
        this['saturation'] = 0;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['program'] = RedProgram['makeProgram'](redGL, PROGRAM_NAME, vSource, fSource);
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedPostEffect_HueSaturation.prototype = new RedBasePostEffect();
    RedPostEffect_HueSaturation.prototype['updateTexture'] = function (lastFrameBufferTexture) {
        this['diffuseTexture'] = lastFrameBufferTexture;
    };
    RedDefinePropertyInfo.definePrototype('RedPostEffect_HueSaturation', 'diffuseTexture', 'sampler2D');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`hue`,
		 description : `
			 색조
			 기본값 : 0
			 min: -180
			 max: 180
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_HueSaturation', 'hue', 'number', {
        min: -180, max: 180, callback: function (v) {
            this['_hue_value'] = v / 180
        }
    });
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`saturation`,
		 description : `
			 채도
			 기본값 : 0
			 min: -100
			 max: 100
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_HueSaturation', 'saturation', 'number', {
        min: -100, max: 100, callback: function (v) {
            this['_saturation_value'] = v / 100
        }
    });
    Object.freeze(RedPostEffect_HueSaturation);
})();
"use strict";
var RedPostEffect_HalfTone;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedPostEffectHalfToneProgram';
    var checked;
    vSource = function () {
        /* @preserve
         void main(void) {
             vTexcoord = aTexcoord;
             vResolution = uResolution;
             gl_Position = uPMatrix * uMMatrix *  vec4(aVertexPosition, 1.0);
         }
         */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
         uniform sampler2D u_diffuseTexture;
         uniform float u_centerX;
         uniform float u_centerY;
         uniform float u_angle;
         uniform float u_radius;
         uniform bool u_grayMode;
         float pattern(float angle) {
             angle = angle * 3.141592653589793/180.0;
             float s = sin(angle), c = cos(angle);
             vec2 tex = vTexcoord;
             tex.x -= u_centerX + 0.5;
             tex.y -= u_centerY + 0.5;
             vec2 point = vec2(
             c * tex.x - s * tex.y,
             s * tex.x + c * tex.y
             ) * vResolution / u_radius;
             return (sin(point.x) * sin(point.y)) * 4.0;
         }
         void main(void) {
             vec4 finalColor = texture2D(u_diffuseTexture, vTexcoord);
             if(u_grayMode) {
                 float average = (finalColor.r + finalColor.g + finalColor.b) / 3.0;
                 gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern(u_angle)), finalColor.a);
             }else{
                 vec3 cmy = 1.0 - finalColor.rgb;
                 float k = min(cmy.x, min(cmy.y, cmy.z));
                 cmy = (cmy - k) / (1.0 - k);
                 cmy = clamp(cmy * 10.0 - 3.0 + vec3(pattern(u_angle + 0.26179), pattern(u_angle + 1.30899), pattern(u_angle)), 0.0, 1.0);
                 k = clamp(k * 10.0 - 5.0 + pattern(u_angle + 0.78539), 0.0, 1.0);
                 gl_FragColor = vec4(1.0 - cmy - k, finalColor.a);
            }
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedPostEffect_HalfTone`,
		 description : `
			 HalfTone 이펙트
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 extends : [
		    'RedBasePostEffect',
		    'RedBaseMaterial'
		 ],
		 demo : '../example/postEffect/pixelate/RedPostEffect_HalfTone.html',
		 example : `
            var effect;
            effect = RedPostEffect_HalfTone(RedGL Instance); // 포스트이펙트 생성
            // postEffectManager는 RedView 생성시 자동생성됨.
            (RedView Instance)['postEffectManager'].addEffect(effect); // 뷰에 이펙트 추가
		 `,
		 return : 'RedPostEffect_HalfTone Instance'
	 }
     :DOC*/
    RedPostEffect_HalfTone = function (redGL) {
        if (!(this instanceof RedPostEffect_HalfTone)) return new RedPostEffect_HalfTone(redGL);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedPostEffect_HalfTone : RedGL Instance만 허용.', redGL);
        this['frameBuffer'] = RedFrameBuffer(redGL);
        this['diffuseTexture'] = null;
        this['centerX'] = 0.0;
        this['centerY'] = 0.0;
        this['angle'] = 0;
        this['radius'] = 2;
        this['grayMode'] = false;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['program'] = RedProgram['makeProgram'](redGL, PROGRAM_NAME, vSource, fSource);
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedPostEffect_HalfTone.prototype = new RedBasePostEffect();
    RedPostEffect_HalfTone.prototype['updateTexture'] = function (lastFrameBufferTexture) {
        this['diffuseTexture'] = lastFrameBufferTexture;
    };
    RedDefinePropertyInfo.definePrototype('RedPostEffect_HalfTone', 'diffuseTexture', 'sampler2D');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`centerX`,
		 description : `
			 기본값 0.0
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_HalfTone', 'centerX', 'number');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`centerY`,
		 description : `
			 기본값 0.0
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_HalfTone', 'centerY', 'number');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`angle`,
		 description : `
			 기본값 0.0
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_HalfTone', 'angle', 'number');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`grayMode`,
		 description : `
			 기본값 false
		 `,
		 return : 'Boolean'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_HalfTone', 'grayMode', 'boolean');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`radius`,
		 description : `
			 기본값 2
			 min : 0
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_HalfTone', 'radius', 'number', {'min': 0});
    Object.freeze(RedPostEffect_HalfTone);
})();
"use strict";
var RedPostEffect_Pixelize;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedPostEffectPixelizeProgram';
    var checked;
    vSource = function () {
        /* @preserve
         void main(void) {
             vTexcoord = aTexcoord;
             vResolution = uResolution;
             gl_Position = uPMatrix * uMMatrix *  vec4(aVertexPosition, 1.0);
         }
         */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
         uniform sampler2D u_diffuseTexture;
         uniform float u_width;
         uniform float u_height;
         void main(void) {
             vec4 finalColor;
             float dx = 1.0/vResolution.x * u_width;
             float dy = 1.0/vResolution.y * u_height;
             vec2 coord = vec2(
                 dx * (floor(vTexcoord.x / dx) + 0.5),
                 dy * (floor(vTexcoord.y / dy) + 0.5)
             );
             finalColor = texture2D(u_diffuseTexture, coord);
             gl_FragColor = finalColor;
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedPostEffect_Pixelize`,
		 description : `
			 Pixelize 효과
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 extends : [
		    'RedBasePostEffect',
		    'RedBaseMaterial'
		 ],
		 demo : '../example/postEffect/pixelate/RedPostEffect_Pixelize.html',
		 example : `
            var effect;
            effect = RedPostEffect_Pixelize(RedGL Instance); // 포스트이펙트 생성
            // postEffectManager는 RedView 생성시 자동생성됨.
            (RedView Instance)['postEffectManager'].addEffect(effect); // 뷰에 이펙트 추가
		 `,
		 return : 'RedPostEffect_Pixelize Instance'
	 }
     :DOC*/
    RedPostEffect_Pixelize = function (redGL) {
        if (!(this instanceof RedPostEffect_Pixelize)) return new RedPostEffect_Pixelize(redGL);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedPostEffect_Pixelize : RedGL Instance만 허용.', redGL);
        this['frameBuffer'] = RedFrameBuffer(redGL);
        this['diffuseTexture'] = null;
        this['width'] = 5;
        this['height'] = 5;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['program'] = RedProgram['makeProgram'](redGL, PROGRAM_NAME, vSource, fSource);
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedPostEffect_Pixelize.prototype = new RedBasePostEffect();
    RedPostEffect_Pixelize.prototype['updateTexture'] = function (lastFrameBufferTexture) {
        this['diffuseTexture'] = lastFrameBufferTexture;
    };
    RedDefinePropertyInfo.definePrototype('RedPostEffect_Pixelize', 'diffuseTexture', 'sampler2D');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`width`,
		 description : `
			 픽셀화 가로 크기
			 기본값 : 5
			 min : 0
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_Pixelize', 'width', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`height`,
		 description : `
			 픽셀화 세로 크기
			 기본값 : 5
			 min : 0
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_Pixelize', 'height', 'number', {'min': 0});
    Object.freeze(RedPostEffect_Pixelize);
})();
"use strict";
var RedPostEffect_Convolution;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedPostEffectConvolutionProgram';
    var checked;
    vSource = function () {
        /* @preserve
         void main(void) {
             vTexcoord = aTexcoord;
             vResolution = uResolution;
             gl_Position = uPMatrix * uMMatrix *  vec4(aVertexPosition, 1.0);
         }
         */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
         uniform sampler2D u_diffuseTexture;
         uniform mat3 u_kernel;
         uniform float uKernelWeight;
         void main(void) {
             vec2 perPX = vec2(1.0/vResolution.x, 1.0/vResolution.y);
             vec4 finalColor = vec4(0.0);
             finalColor += texture2D(u_diffuseTexture, vTexcoord + perPX * vec2(-1.0, -1.0)) * u_kernel[0][0] ;
             finalColor += texture2D(u_diffuseTexture, vTexcoord + perPX * vec2( 0.0, -1.0)) * u_kernel[0][1] ;
             finalColor += texture2D(u_diffuseTexture, vTexcoord + perPX * vec2( 1.0, -1.0)) * u_kernel[0][2] ;
             finalColor += texture2D(u_diffuseTexture, vTexcoord + perPX * vec2(-1.0,  0.0)) * u_kernel[1][0] ;
             finalColor += texture2D(u_diffuseTexture, vTexcoord + perPX * vec2( 0.0,  0.0)) * u_kernel[1][1] ;
             finalColor += texture2D(u_diffuseTexture, vTexcoord + perPX * vec2( 1.0,  0.0)) * u_kernel[1][2] ;
             finalColor += texture2D(u_diffuseTexture, vTexcoord + perPX * vec2(-1.0,  1.0)) * u_kernel[2][0] ;
             finalColor += texture2D(u_diffuseTexture, vTexcoord + perPX * vec2( 0.0,  1.0)) * u_kernel[2][1] ;
             finalColor += texture2D(u_diffuseTexture, vTexcoord + perPX * vec2( 1.0,  1.0)) * u_kernel[2][2] ;
             highp float weight;
             weight = uKernelWeight;
             if (0.01 > weight) {
                weight = 1.0;
             }
             gl_FragColor = vec4((finalColor / uKernelWeight).rgb, 1.0);
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedPostEffect_Convolution`,
		 description : `
			 Convolution 이펙트
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 extends : [
		    'RedBasePostEffect',
		    'RedBaseMaterial'
		 ],
		 demo : '../example/postEffect/RedPostEffect_Convolution.html',
		 example : `
            var effect;
            effect = RedPostEffect_DoF(RedGL Instance, RedPostEffect_Convolution.SHARPEN); // 포스트이펙트 생성
            // postEffectManager는 RedView 생성시 자동생성됨.
            (RedView Instance)['postEffectManager'].addEffect(effect); // 뷰에 이펙트 추가
		 `,
		 return : 'RedPostEffect_Convolution Instance'
	 }
     :DOC*/
    RedPostEffect_Convolution = function (redGL, kernel) {
        if (!(this instanceof RedPostEffect_Convolution)) return new RedPostEffect_Convolution(redGL, kernel);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedPostEffect_Convolution : RedGL Instance만 허용.', redGL);
        this['frameBuffer'] = RedFrameBuffer(redGL);
        this['diffuseTexture'] = null;
        this['kernel'] = kernel;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['program'] = RedProgram['makeProgram'](redGL, PROGRAM_NAME, vSource, fSource);
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedPostEffect_Convolution.prototype = new RedBasePostEffect();
    RedPostEffect_Convolution.prototype['updateTexture'] = function (lastFrameBufferTexture) {
        this['diffuseTexture'] = lastFrameBufferTexture;
    };
    RedDefinePropertyInfo.definePrototype('RedPostEffect_Convolution', 'diffuseTexture', 'sampler2D');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`kernel`,
		 description : `
			 커널값.
			 3 * 3 매트릭스 형식의 배열
		 `,
		 return : 'Array'
	 }
     :DOC*/
    Object.defineProperty(RedPostEffect_Convolution.prototype, 'kernel', {
        get: function () {
            if (!this['_kernel']) this['_kernel'] = RedPostEffect_Convolution['NORMAL'];
            return this['_kernel']
        },
        set: function (v) {
            this['_kernel'] = v
        }
    });
    Object.defineProperty(RedPostEffect_Convolution.prototype, 'kernelWeight', (function () {
        var sum;
        var k;
        return {
            get: function () {
                sum = 0;
                for (k in this['kernel']) sum += this['kernel'][k];
                return sum;
            }
        }
    })());
    /**DOC:
     {
		 title :`RedPostEffect_Convolution.NORMAL`,
		 code : 'CONST',
		 description : `
			 <code>
			 [
				 0, 0, 0,
				 0, 1, 0,
				 0, 0, 0
			 ]
			 </code>
		 `,
		 return : 'Array'
	 }
     :DOC*/
    RedPostEffect_Convolution['NORMAL'] = [
        0, 0, 0,
        0, 1, 0,
        0, 0, 0
    ];
    /**DOC:
     {
		 title :`RedPostEffect_Convolution.SHARPEN`,
		 code : 'CONST',
		 description : `
			 <code>
			 [
				 0, -1, 0,
				 -1, 5, -1,
				 0, -1, 0
			 ]
			 </code>
		 `,
		 return : 'Array'
	 }
     :DOC*/
    RedPostEffect_Convolution['SHARPEN'] = [
        0, -1, 0,
        -1, 5, -1,
        0, -1, 0
    ];
    /**DOC:
     {
		 title :`RedPostEffect_Convolution.BLUR`,
		 code : 'CONST',
		 description : `
			 <code>
			 [
				 1, 1, 1,
				 1, 1, 1,
				 1, 1, 1
			 ]
			 </code>
		 `,
		 return : 'Array'
	 }
     :DOC*/
    RedPostEffect_Convolution['BLUR'] = [
        1, 1, 1,
        1, 1, 1,
        1, 1, 1
    ];
    /**DOC:
     {
		 title :`RedPostEffect_Convolution.EDGE`,
		 code : 'CONST',
		 description : `
			 <code>
			 [
				 0, 1, 0,
				 1, -4, 1,
				 0, 1, 0
			 ]
			 </code>
		 `,
		 return : 'Array'
	 }
     :DOC*/
    RedPostEffect_Convolution['EDGE'] = [
        0, 1, 0,
        1, -4, 1,
        0, 1, 0
    ];
    /**DOC:
     {
		 title :`RedPostEffect_Convolution.EMBOSS`,
		 code : 'CONST',
		 description : `
			 <code>
			 [
				 -2, -1, 0,
				 -1, 1, 1,
				 0, 1, 2
			 ]
			 </code>
		 `,
		 return : 'Array'
	 }
     :DOC*/
    RedPostEffect_Convolution['EMBOSS'] = [
        -2, -1, 0,
        -1, 1, 1,
        0, 1, 2
    ];
    Object.freeze(RedPostEffect_Convolution);
})();
"use strict";
var RedPostEffect_DoF;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedPostEffectDoFProgram';
    var checked;
    vSource = function () {
        /* @preserve
         void main(void) {
             vTexcoord = aTexcoord;
             gl_Position = uPMatrix * uMMatrix *  vec4(aVertexPosition, 1.0);
         }
         */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
         uniform sampler2D u_diffuseTexture;
         uniform sampler2D u_blurTexture;
         uniform sampler2D u_depthTexture;
         void main() {
             vec4 finalColor = texture2D(u_diffuseTexture, vTexcoord);
             vec4 blurColor = texture2D(u_blurTexture, vTexcoord);
             vec4 depthColor = texture2D(u_depthTexture, vTexcoord);
             finalColor.rgb *= (depthColor.r);
             blurColor.rgb *= (1.0-depthColor.r);
             gl_FragColor =  (finalColor + blurColor) ;
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedPostEffect_DoF`,
		 description : `
			 피사계 심도 이펙트
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 extends : [
		    'RedBasePostEffect',
		    'RedBaseMaterial'
		 ],
		 demo : '../example/postEffect/dof/RedPostEffect_DoF.html',
		 example : `
            var effect;
            effect = RedPostEffect_DoF(RedGL Instance); // 포스트이펙트 생성
            // postEffectManager는 RedView 생성시 자동생성됨.
            (RedView Instance)['postEffectManager'].addEffect(effect); // 뷰에 이펙트 추가
		 `,
		 return : 'RedPostEffect_DoF Instance'
	 }
     :DOC*/
    RedPostEffect_DoF = function (redGL) {
        if (!(this instanceof RedPostEffect_DoF)) return new RedPostEffect_DoF(redGL);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedPostEffect_DoF : RedGL Instance만 허용.', redGL);
        this['frameBuffer'] = RedFrameBuffer(redGL);
        this['diffuseTexture'] = null;
        this['blurTexture'] = null;
        this['depthTexture'] = null;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['_subFrameBufferList'] = [
            {
                frameBuffer: RedFrameBuffer(redGL),
                renderMaterial: RedPostEffect_DoF_DepthMaterial(redGL),
                process: []
            }
        ];
        this['_process'] = [
            RedPostEffect_BlurX(redGL),
            RedPostEffect_BlurY(redGL)
        ];
        this['focusLength'] = 15;
        this['blur'] = 10;
        this['program'] = RedProgram['makeProgram'](redGL, PROGRAM_NAME, vSource, fSource);
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedPostEffect_DoF.prototype = new RedBasePostEffect();
    RedPostEffect_DoF.prototype['updateTexture'] = function (lastFrameBufferTexture, parentFrameBufferTexture) {
        this['diffuseTexture'] = parentFrameBufferTexture;
        this['blurTexture'] = lastFrameBufferTexture;
        this['depthTexture'] = this['_subFrameBufferList'][0]['frameBuffer']['texture']
    };
    RedDefinePropertyInfo.definePrototype('RedPostEffect_DoF', 'diffuseTexture', 'sampler2D');
    RedDefinePropertyInfo.definePrototype('RedPostEffect_DoF', 'blurTexture', 'sampler2D');
    RedDefinePropertyInfo.definePrototype('RedPostEffect_DoF', 'depthTexture', 'sampler2D');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`blur`,
		 description : `
			 blur
			 기본값 : 50
			 min : 0
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_DoF', 'blur', 'number', {
        min: 0, callback: function (v) {
            this['_process'][0]['size'] = v;
            this['_process'][1]['size'] = v;
        }
    });
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`focusLength`,
		 description : `
			 focusLength
			 기본값 : 15
		 `,
		 return : 'Number'
	 }
     :DOC*/
    Object.defineProperty(RedPostEffect_DoF.prototype, 'focusLength', (function () {
        return {
            get: function () {
                return this['_subFrameBufferList'][0]['renderMaterial']['focusLength']
            },
            set: function (v) {
                this['_subFrameBufferList'][0]['renderMaterial']['focusLength'] = v
            }
        }
    })());
    Object.freeze(RedPostEffect_DoF);
})();
"use strict";
var RedPostEffect_DoF_DepthMaterial;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedPostEffectDoFdepthProgram';
    var checked;
    vSource = function () {
        /* @preserve
            // 스키닝
            //#REDGL_DEFINE#vertexShareFunc#getSkinMatrix#

            // Sprite3D
            //#REDGL_DEFINE#vertexShareFunc#getSprite3DMatrix#

            void main(void) {
                gl_PointSize = uPointSize;

                //#REDGL_DEFINE#skin#true# mat4 targetMatrix = uMMatrix *  getSkinMatrix() ;
			    //#REDGL_DEFINE#skin#false# mat4 targetMatrix = uMMatrix;

                //#REDGL_DEFINE#sprite3D#true# gl_Position = uPMatrix * getSprite3DMatrix(uCameraMatrix , targetMatrix) *  vec4(aVertexPosition, 1.0);
                //#REDGL_DEFINE#sprite3D#true# if(!u_PerspectiveScale){
                //#REDGL_DEFINE#sprite3D#true#   gl_Position /= gl_Position.w;
                //#REDGL_DEFINE#sprite3D#true#   gl_Position.xy += aVertexPosition.xy * vec2(targetMatrix[0][0],targetMatrix[1][1] * uResolution.x/uResolution.y);
                //#REDGL_DEFINE#sprite3D#true# }
                //#REDGL_DEFINE#sprite3D#false# gl_Position = uPMatrix * uCameraMatrix * targetMatrix * vec4(aVertexPosition, 1.0);
            }
        */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
         uniform float u_focusLength;
         void main(void) {
             float depth = 1.0 - gl_FragCoord.z / gl_FragCoord.w / u_focusLength;
             gl_FragColor = vec4(depth, depth, depth, 1.0);
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedPostEffect_DoF_DepthMaterial`,
		 description : `
			 피사계 심도 뎁스 처리 재질
			 시스템적으로 사용됨
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 extends : [
		    'RedBasePostEffect',
		    'RedBaseMaterial'
		 ],
		 example : `
			 RedPostEffect_DoF_DepthMaterial(RedGL Instance)
		 `,
		 return : 'RedPostEffect_DoF_DepthMaterial Instance'
	 }
     :DOC*/
    RedPostEffect_DoF_DepthMaterial = function (redGL) {
        if (!(this instanceof RedPostEffect_DoF_DepthMaterial)) return new RedPostEffect_DoF_DepthMaterial(redGL);
        /////////////////////////////////////////
        // 유니폼 프로퍼티
        this['focusLength'] = 15;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this.makeProgramList(this, redGL, PROGRAM_NAME, vSource, fSource);
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedPostEffect_DoF_DepthMaterial.prototype = new RedBasePostEffect();
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`focusLength`,
		 description : `
			 focusLength
			 기본값 : 15
			 min : 0
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_DoF_DepthMaterial', 'focusLength', 'number', {'min': 0});
    Object.freeze(RedPostEffect_DoF_DepthMaterial)
})();
"use strict";
var RedPostEffect_Film;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedPostEffectFilmProgram';
    var checked;
    vSource = function () {
        /* @preserve
         void main(void) {
             vTexcoord = aTexcoord;
             vTime = uTime;
             gl_Position = uPMatrix * uMMatrix *  vec4(aVertexPosition, 1.0);
         }
         */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
         uniform bool u_grayMode;
         uniform sampler2D u_diffuseTexture;
         uniform float u_noiseIntensity; // noise effect intensity value (0 = no effect, 1 = full effect)
         uniform float u_scanlineIntensity; // scanlines effect intensity value (0 = no effect, 1 = full effect)
         uniform float u_scanlineCount; // scanlines effect count value (0 = no effect, 4096 = full effect)

         void main() {
             // sample the source
             vec4 diffuseColor = texture2D( u_diffuseTexture, vTexcoord );

             // make some noise
             float x = vTexcoord.x * vTexcoord.y * vTime;
             x = mod( x, 13.0 ) * mod( x, 123.0 );
             float dx = mod( x, 0.01 );

             // add noise
             vec3 finalColor = diffuseColor.rgb + diffuseColor.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );

             // get us a sine and cosine
             vec2 sc = vec2( sin( vTexcoord.y * u_scanlineCount ), cos( vTexcoord.y * u_scanlineCount ) );

             // add scanlines
             finalColor += diffuseColor.rgb * vec3( sc.x, sc.y, sc.x ) * u_scanlineIntensity;

             // interpolate between source and result by intensity
             finalColor = diffuseColor.rgb + clamp( u_noiseIntensity, 0.0, 1.0 ) * ( finalColor - diffuseColor.rgb );

             // convert to grayscale if desired
             if( u_grayMode ) finalColor = vec3( finalColor.r * 0.3 + finalColor.g * 0.59 + finalColor.b * 0.11 );
             gl_FragColor =  vec4( finalColor, diffuseColor.a );
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedPostEffect_Film`,
		 description : `
			 Film 이펙트
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 extends : [
		    'RedBasePostEffect',
		    'RedBaseMaterial'
		 ],
		 demo : '../example/postEffect/RedPostEffect_Film.html',
		 example : `
            var effect;
            effect = RedPostEffect_Film(RedGL Instance); // 포스트이펙트 생성
            // postEffectManager는 RedView 생성시 자동생성됨.
            (RedView Instance)['postEffectManager'].addEffect(effect); // 뷰에 이펙트 추가
		 `,
		 return : 'RedPostEffect_Film Instance'
	 }
     :DOC*/
    RedPostEffect_Film = function (redGL) {
        if (!(this instanceof RedPostEffect_Film)) return new RedPostEffect_Film(redGL);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedPostEffect_Film : RedGL Instance만 허용.', redGL);
        this['frameBuffer'] = RedFrameBuffer(redGL);
        this['diffuseTexture'] = null;
        this['grayMode'] = false;
        this['scanlineIntensity'] = 0.5;
        this['noiseIntensity'] = 0.5;
        this['scanlineCount'] = 2048;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['program'] = RedProgram['makeProgram'](redGL, PROGRAM_NAME, vSource, fSource);
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedPostEffect_Film.prototype = new RedBasePostEffect();
    RedPostEffect_Film.prototype['updateTexture'] = function (lastFrameBufferTexture) {
        this['diffuseTexture'] = lastFrameBufferTexture;
    };
    RedDefinePropertyInfo.definePrototype('RedPostEffect_Film', 'diffuseTexture', 'sampler2D');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`grayMode`,
		 description : `
			 그레이모드
			 기본값 : false
		 `,
		 return : 'Boolean'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_Film', 'grayMode', 'boolean');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`scanlineIntensity`,
		 description : `
			 스캔라인강도
			 기본값 : 0.5
			 min : 0
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_Film', 'scanlineIntensity', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`noiseIntensity`,
		 description : `
			 노이즈강도
			 기본값 : 0.5
			 min : 0
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_Film', 'noiseIntensity', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`scanlineCount`,
		 description : `
			 스캔라인 수
			 기본값 : 2048
			 min : 0
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_Film', 'scanlineCount', 'number', {'min': 0});
    Object.freeze(RedPostEffect_Film);
})();
"use strict";
var RedPostEffect_Vignetting;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedPostEffectVignettingProgram';
    var checked;
    vSource = function () {
        /* @preserve
         void main(void) {
            vTexcoord = aTexcoord;
            gl_Position = uPMatrix * uMMatrix *  vec4(aVertexPosition, 1.0);
         }
         */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
         uniform sampler2D u_diffuseTexture;
         uniform float u_size;
         uniform float u_intensity;
         void main(void) {
             vec4 finalColor = texture2D(u_diffuseTexture, vTexcoord );
             float dist = distance(vTexcoord, vec2(0.5, 0.5));
             finalColor.rgb *= smoothstep(0.8, u_size * 0.799, dist * (u_intensity + u_size));
             gl_FragColor = finalColor;
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedPostEffect_Vignetting`,
		 description : `
			 RedPostEffect_Vignetting Instance 생성.
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 extends : [
		    'RedBasePostEffect',
		    'RedBaseMaterial'
		 ],
		 demo : '../example/postEffect/RedPostEffect_Vignetting.html',
		 example : `
            var effect;
            effect = RedPostEffect_Vignetting(RedGL Instance); // 포스트이펙트 생성
            // postEffectManager는 RedView 생성시 자동생성됨.
            (RedView Instance)['postEffectManager'].addEffect(effect); // 뷰에 이펙트 추가
		 `,
		 return : 'RedPostEffect_Vignetting Instance'
	 }
     :DOC*/
    RedPostEffect_Vignetting = function (redGL) {
        if (!(this instanceof RedPostEffect_Vignetting)) return new RedPostEffect_Vignetting(redGL);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedPostEffect_Vignetting : RedGL Instance만 허용.', redGL);
        this['frameBuffer'] = RedFrameBuffer(redGL);
        this['diffuseTexture'] = null;
        this['size'] = 0.1;
        this['intensity'] = 0.85;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['program'] = RedProgram['makeProgram'](redGL, PROGRAM_NAME, vSource, fSource);
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedPostEffect_Vignetting.prototype = new RedBasePostEffect();
    RedPostEffect_Vignetting.prototype['updateTexture'] = function (lastFrameBufferTexture) {
        this['diffuseTexture'] = lastFrameBufferTexture;
    };
    RedDefinePropertyInfo.definePrototype('RedPostEffect_Vignetting', 'diffuseTexture', 'sampler2D');
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`intensity`,
		 description : `
			 비네팅 강도
			 기본값 : 0.85
			 min : 0
	 `,
	 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_Vignetting', 'intensity', 'number', {'min': 0});
    /**DOC:
     {
	     code : 'PROPERTY',
		 title :`size`,
		 description : `
			 비네팅사이즈
			 기본값 : 0.1
			 min : 0
		 `,
		 return : 'Number'
	 }
     :DOC*/
    RedDefinePropertyInfo.definePrototype('RedPostEffect_Vignetting', 'size', 'number', {'min': 0});
    Object.freeze(RedPostEffect_Vignetting);
})();
"use strict";
var RedPostEffect_FXAA;
(function () {
    var vSource, fSource;
    var PROGRAM_NAME = 'RedPostEffectFXAAProgram';
    var checked;
    vSource = function () {
        /* @preserve
         void main(void) {
             vTexcoord = aTexcoord;
             vResolution = uResolution;
             gl_Position = uPMatrix * uMMatrix *  vec4(aVertexPosition, 1.0);
         }
         */
    };
    fSource = function () {
        /* @preserve
         precision mediump float;
         uniform sampler2D u_diffuseTexture;
         const float cFXAA_REDUCE_MIN = 1.0/ 128.0;
         const float cFXAA_REDUCE_MUL = 1.0 / 8.0;
         const float cFXAA_SPAN_MAX = 8.0;
         void main() {
             vec4 finalColor;
             vec2 inverseVP = vec2(1.0 / vResolution.x, 1.0 / vResolution.y);
             vec2 fragCoord = gl_FragCoord.xy;
             vec3 rgbNW = texture2D(u_diffuseTexture, (fragCoord + vec2(-1.0, -1.0)) * inverseVP).xyz;
             vec3 rgbNE = texture2D(u_diffuseTexture, (fragCoord + vec2(1.0, -1.0)) * inverseVP).xyz;
             vec3 rgbSW = texture2D(u_diffuseTexture, (fragCoord + vec2(-1.0, 1.0)) * inverseVP).xyz;
             vec3 rgbSE = texture2D(u_diffuseTexture, (fragCoord + vec2(1.0, 1.0)) * inverseVP).xyz;
             vec3 rgbM  = texture2D(u_diffuseTexture, fragCoord  * inverseVP).xyz;
             vec3 luma = vec3(0.299, 0.587, 0.114);
             float lumaNW = dot(rgbNW, luma);
             float lumaNE = dot(rgbNE, luma);
             float lumaSW = dot(rgbSW, luma);
             float lumaSE = dot(rgbSE, luma);
             float lumaM  = dot(rgbM,  luma);
             float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
             float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

             vec2 dir;
             dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
             dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

             float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) * (0.25 * cFXAA_REDUCE_MUL), cFXAA_REDUCE_MIN);

             float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
             dir = min(
                 vec2(cFXAA_SPAN_MAX, cFXAA_SPAN_MAX),
                 max( vec2(-cFXAA_SPAN_MAX, -cFXAA_SPAN_MAX), dir * rcpDirMin)
             ) * inverseVP;

             vec3 rgbA = 0.5 * (
                 texture2D(u_diffuseTexture, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                 texture2D(u_diffuseTexture, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz
             );
             vec3 rgbB = rgbA * 0.5 + 0.25 * (
                 texture2D(u_diffuseTexture, fragCoord * inverseVP + dir * -0.5).xyz +
                 texture2D(u_diffuseTexture, fragCoord * inverseVP + dir * 0.5).xyz
             );

             float lumaB = dot(rgbB, luma);
             if ((lumaB < lumaMin) || (lumaB > lumaMax)) finalColor = vec4(rgbA, 1.0);
             else finalColor = vec4(rgbB, 1.0);

             gl_FragColor = finalColor;
         }
         */
    };
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedPostEffect_FXAA`,
		 description : `
			 FXAA 안티알리어싱 이펙트
			 postEffectManager.antialiasing 속성으로 지정 가능함.
		 `,
		 params : {
			 redGL : [
				 {type:'RedGL'}
			 ]
		 },
		 extends : [
		    'RedBasePostEffect',
		    'RedBaseMaterial'
		 ],
		 demo : '../example/postEffect/antialiasing/RedPostEffect_FXAA.html',
		 example : `
            var effect;
            effect = RedPostEffect_FXAA(RedGL Instance); // 포스트이펙트 생성
            // postEffectManager는 RedView 생성시 자동생성됨.
            (RedView Instance)['postEffectManager']['antialiasing'] = effect; // 뷰에 이펙트 설정
		 `,
		 return : 'RedPostEffect_FXAA Instance'
	 }
     :DOC*/
    RedPostEffect_FXAA = function (redGL) {
        if (!(this instanceof RedPostEffect_FXAA)) return new RedPostEffect_FXAA(redGL);
        redGL instanceof RedGL || RedGLUtil.throwFunc('RedPostEffect_FXAA : RedGL Instance만 허용.', redGL);
        this['frameBuffer'] = RedFrameBuffer(redGL);
        this['diffuseTexture'] = null;
        /////////////////////////////////////////
        // 일반 프로퍼티
        this['program'] = RedProgram['makeProgram'](redGL, PROGRAM_NAME, vSource, fSource);
        this['_UUID'] = RedGL.makeUUID();
        if (!checked) {
            this.checkUniformAndProperty();
            checked = true;
        }
        console.log(this);
    };
    RedPostEffect_FXAA.prototype = new RedBasePostEffect();
    RedPostEffect_FXAA.prototype['updateTexture'] = function (lastFrameBufferTexture) {
        this['diffuseTexture'] = lastFrameBufferTexture;
    };
    RedDefinePropertyInfo.definePrototype('RedPostEffect_FXAA', 'diffuseTexture', 'sampler2D');
    Object.freeze(RedPostEffect_FXAA);
})();
"use strict"
var RedGLOffScreen;
(function () {
    var RedWorkerCode;
    var WORKER_BLOB;
    /**DOC:
     {
		 constructorYn : true,
		 title :`RedGLOffScreen`,
		 description : `
			 RedGLOffScreen 런처
		 `,
		 params : {
			 canvas : [
				 {type:'Canvas Element'}
			 ],
			 w : [
				 {type:'Uint'}
			 ],
			 h : [
				 {type:'Uint'}
			 ],
			 redGLSrc : [
				 {type:'String'},
				 'redGL 라이브러리파일 경로'
			 ],
			 hostSrc : [
				 {type:'String'},
				 '호스트경로'
			 ]
		 },
		 extends : [
		    'RedBaseMaterial'
		 ],
		 demo : '../example/launcher/RedGLOffScreen.html',
		 example : `
			<body>
                <canvas id="testCanvas"></canvas>
                <script>
                    var canvas = document.getElementById('testCanvas')
                    var redGLSrc = '../release/RedGL.min.js' // redGL 라이브러리 경로
                    var hostSrc = 'workerHost2.js' // 호스트 코드 경로
                    RedGLOffScreen(canvas, 1024, 768, redGLSrc, hostSrc)
                </script>
			</body>
		 `,
		 return : 'RedGLOffScreen Instance'
	 }
     :DOC*/
    RedGLOffScreen = function (canvas, w, h, redGLSrc, hostSrc) {
        if (!(this instanceof RedGLOffScreen)) return new RedGLOffScreen(canvas, w, h, redGLSrc, hostSrc);
        RedGLDetect.getBrowserInfo()
        var self = this;
        self['htmlCanvas'] = canvas;
        self['redGLSrc'] = redGLSrc;
        fetch(hostSrc)
            .then(function (v) {
                // console.log('성공', v)
                v.text().then(function (v2) {
                    self['hostCode'] = '' +
                        "\ncanvas.tagName = 'CANVAS';" +
                        "\nreturn RedGL(canvas, function (v) {\n" +
                        'var _host_ = ' + v2 + ';\n' +
                        '_host_.call(this);\n' +
                        "\n});";
                    self.setSize(w, h);
                })
            })
            .catch(function (v) {
                console.log('실패', v);
            })

    };
    RedGLOffScreen.prototype['updatePostMessage'] = function (run) {
        if (!run) throw 'RedGLOffScreen.prototype[\'updatePostMessage\'] - run을 정의해야합니다.' + run;
        if (!run['name']) throw 'RedGLOffScreen.prototype[\'updatePostMessage\'] - run객체의 name을 정의해야합니다.' + run['name'];
        this['worker'].postMessage({
            state: 'update',
            run: run
        });
    };
    RedGLOffScreen.prototype._init = function (canvas, w, h) {
        var self = this;
        if (this['worker']) this['worker'].terminate();
        console.log(canvas.cloneNode());
        var tParentNode = this['htmlCanvas'].parentNode;
        console.log(tParentNode);
        var newNode = canvas.cloneNode(true);
        tParentNode.replaceChild(newNode, this['htmlCanvas']);
        this['htmlCanvas'] = newNode;
        var MOUSE_KEY_LIST = 'x,y,clientX,clientY,pageX,pageY,screenX,screenY,layerX,layerY,detail,shiftKey,altKey,ctrlKey,movementX,movementY,button,type,which,deltaX,deltaY,deltaZ,timeStamp,targetTouches'.split(',');
        var KEY_LIST = 'shiftKey,altKey,ctrlKey,key,keyCode,location,code,charCode,detail,timeStamp,which,type'.split(',');
        var mouseEventList = [RedGLDetect.BROWSER_INFO.move, RedGLDetect.BROWSER_INFO.down, RedGLDetect.BROWSER_INFO.up];
        var keyEvnetList = 'keydown,keyup,keypress'.split(',');
        mouseEventList.forEach(function (v) {
            self['htmlCanvas'].addEventListener(v, function (e) {
                console.log(e);
                var customEvent = {};
                MOUSE_KEY_LIST.forEach(function (v) {
                    if (v == 'targetTouches' && e[v]) {
                        var t0 = []
                        var i = e[v].length
                        while (i--) {
                            var v2 = e[v][i]
                            t0.push({
                                clientX: v2['clientX'],
                                clientY: v2['clientY'],
                                force: v2['force'],
                                identifier: v2['identifier'],
                                pageX: v2['pageX'],
                                pageY: v2['pageY'],
                                radiusX: v2['radiusX'],
                                radiusY: v2['radiusY'],
                                rotationAngle: v2['rotationAngle'],
                                screenX: v2['screenX'],
                                screenY: v2['screenY']
                            })
                        }
                        customEvent[v] = t0;
                    } else {
                        customEvent[v] = e[v];
                    }

                });
                self['worker'].postMessage({
                    state: e.type,
                    event: customEvent
                });
            })
        });
        keyEvnetList.forEach(function (v) {
            window.addEventListener(v, function (e) {
                console.log(e);
                var customEvent = {};
                KEY_LIST.forEach(function (v) {
                    customEvent[v] = e[v];
                });
                self['worker'].postMessage({
                    state: e.type,
                    event: customEvent
                });
            })
        });

        this['offScreenCanvas'] = this['htmlCanvas'].transferControlToOffscreen();
        this['offScreenCanvas'].width = w;
        this['offScreenCanvas'].height = h;
        //
        this['worker'] = null;
        WORKER_BLOB = new Blob([RedWorkerCode], {type: 'application/javascript'});
        this['worker'] = new Worker(URL.createObjectURL(WORKER_BLOB));
        console.log(this['worker']);


        var pathList = document.location.pathname.split('/');
        if (pathList[pathList.length - 1].indexOf('.') > -1) pathList.pop();
        console.log(pathList);

        var url = this['redGLSrc'].split('/');
        url.forEach(function (v, index) {
            if (v === '..') {
                pathList.pop();
                url[index] = '';
            }
            if (v === '.') url[index] = '';
        });
        console.log(url);

        this['worker'].postMessage({
            canvas: this['offScreenCanvas'],
            state: 'init',
            redGLSrc: document.location.origin + pathList.join('/') + '/' + url.join('/'),
            hostCode: this['hostCode'].toString()
        }, [this['offScreenCanvas']]);
    };
    RedGLOffScreen.prototype['setSize'] = (function () {
        var W, H;
        var prevW, prevH;
        var ratio;
        var tCVS;
        prevW = 0;
        prevH = 0;
        return function (width, height, force) {
            if (width === undefined) RedGLUtil.throwFunc('RedGL setSize : width가 입력되지 않았습니다.');
            if (height === undefined) RedGLUtil.throwFunc('RedGL setSize : height가 입력되지 않았습니다.');
            W = this['_width'] = width;
            H = this['_height'] = height;
            if (typeof W !== 'number') {
                if (W.indexOf('%') > -1) W = (document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth) * parseFloat(W) / 100;
                else RedGLUtil.throwFunc('RedGL setSize : width는 0이상의 숫자나 %만 허용.', W);
            }
            if (typeof H !== 'number') {
                if (H.indexOf('%') > -1) H = window.innerHeight * parseFloat(H) / 100;
                else RedGLUtil.throwFunc('RedGL setSize : height는 0이상의 숫자나 %만 허용.', H);
            }
            ratio = window['devicePixelRatio'] || 1;
            tCVS = this['_canvas'];
            if (prevW !== W || prevH !== H || force) {
                prevW = W;
                prevH = H;
            }
            W = parseInt(W)
            H = parseInt(H)
            this._init(this['htmlCanvas'], W, H);
        }
    })();
    ////////////////////////
    (function () {
        RedWorkerCode = function () {
            this['window'] = this
            console.log(window);
            var WorkerMain; // 호스트 문자열을 함수로 생성
            var WorkerMainInstance; // 인스턴스 (실제론 RedGL 인스턴스)
            onmessage = function (event) {
                console.log('~~~~~~~~', event);
                switch (event.data.state) {
                    case 'init':
                        if (!WorkerMain) {
                            console.log(event.data.redGLSrc);
                            importScripts(event.data.redGLSrc);
                            WorkerMain = new Function('canvas', event.data.hostCode);
                        }
                        console.log(WorkerMain);
                        WorkerMainInstance = new WorkerMain(event.data.canvas);
                        break;
                    case 'update':
                        console.log('여기로오겠지', WorkerMainInstance);
                        console.log(event.data.run);
                        // RedGLInstance내에 userInterface를 정의하고 이에 접근함
                        var tArg = event.data.run['args'];
                        WorkerMainInstance['userInterface'][event.data.run['name']][typeof tArg == 'array' ? 'apply' : 'call'](WorkerMainInstance, event.data.run['args']);
                        break;
                    case RedGLDetect.BROWSER_INFO.move:
                        var evt = new Event(RedGLDetect.BROWSER_INFO.move);
                        var e = event.data.event;
                        for (var k in e) {
                            evt[k] = e[k];
                        }
                        console.log(evt);
                        WorkerMainInstance['_canvas'].dispatchEvent(evt);
                        break;
                    case RedGLDetect.BROWSER_INFO.down:
                        var evt = new Event(RedGLDetect.BROWSER_INFO.down);
                        var e = event.data.event;
                        for (var k in e) {
                            evt[k] = e[k];
                        }
                        console.log(evt);
                        WorkerMainInstance['_canvas'].dispatchEvent(evt);
                        // mousemove(event.data.event)
                        break;
                    case RedGLDetect.BROWSER_INFO.up:
                        var evt = new Event(RedGLDetect.BROWSER_INFO.up);
                        var e = event.data.event;
                        for (var k in e) {
                            evt[k] = e[k];
                        }
                        console.log(evt);
                        this['window'].dispatchEvent(evt);
                        // mousemove(event.data.event)
                        break;
                    case 'wheel':
                        var evt = new Event('wheel');
                        var e = event.data.event;
                        for (var k in e) {
                            evt[k] = e[k];
                        }
                        console.log(evt);
                        WorkerMainInstance['_canvas'].dispatchEvent(evt);
                        break;
                    case 'keydown':
                        var evt = new Event('keydown');
                        var e = event.data.event;
                        for (var k in e) {
                            evt[k] = e[k];
                        }
                        console.log(evt);
                        this['window'].dispatchEvent(evt);
                        break;
                    case 'keyup':
                        var evt = new Event('keyup');
                        var e = event.data.event;
                        for (var k in e) {
                            evt[k] = e[k];
                        }
                        console.log(evt);
                        this['window'].dispatchEvent(evt);
                        break;
                    case 'keypress':
                        var evt = new Event('keypress');
                        var e = event.data.event;
                        for (var k in e) {
                            evt[k] = e[k];
                        }
                        console.log(evt.type);
                        this['window'].dispatchEvent(evt);
                        break;
                    default:
                        break;
                }
            }
        }
        RedWorkerCode = RedWorkerCode.toString().replace(/^function ?. ?\) ?\{|\}\;?$/g, '');
    })();
})();var RedGL_VERSION = {version : 'RedGL Release. last update( 2019-03-07 11:55:51)' };console.log(RedGL_VERSION);