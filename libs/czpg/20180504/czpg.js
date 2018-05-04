(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.CZPG = {})));
}(this, (function (exports) { 'use strict';

const ATTRIB_POSITION_NAME = 'a_position';
const ATTRIB_POSITION_LOC = 0;
const ATTRIB_UV_NAME = 'a_uv';
const ATTRIB_UV_LOC = 1;
const ATTRIB_NORMAL_NAME = 'a_normal';
const ATTRIB_NORMAL_LOC = 2;
const ATTRIB_BARYCENTRIC_NAME = 'a_barycentric';
const ATTRIB_BARYCENTRIC_LOC = 4;
const UNIFORM_WORLD_MAT_NAME = 'u_worldMat';
const UNIFORM_VIEW_MAT_NAME = 'u_viewMat';
const UNIFORM_PROJ_MAT_NAME = 'u_projMat';
const UNIFORM_MVP_MAT_NAME = 'u_mvpMat';
const UNIFORM_VP_MAT_NAME = 'u_vpMat';
const UNIFORM_NORMAL_MAT_NAME = 'u_normMat';
const UNIFORM_MAIN_TEXTURE_NAME = 'u_texture';
const UNIFORM_PREFIX = 'u_';
const UNIFORM_CAMPOS = 'u_camPos';
const ATTRIB_JOINT_0_NAME = 'a_joint';
const ATTRIB_WEIGHT_0_NAME = 'a_weight';
const ATTRIB_UV_1_NAME = 'a_uv1';
const ATTRIB_JOINT_1_NAME = 'a_joint1';
const ATTRIB_WEIGHT_1_NAME = 'a_weight1';
const ATTRIB_TANGENT_NAME = 'a_tangent';
const ATTRIB_VERTEX_COLOR_NAME = 'a_color';


// WebGLContext
const LINES = 1;
const LINE_STRIP = 3;
const TRIANGLES = 4;
const TRIANGLE_STRIP = 5;

const DYNAMIC_DRAW = 35048;

// Shader Defines
const DEFINE_FLAT = 'FLAT';

// texture filter
const NEAREST = 9728;
const LINEAR = 9729;
const NEAREST_MIPMAP_NEAREST = 9984;
const NEAREST_MIPMAP_LINEAR = 9986;
const LINEAR_MIPMAP_NEAREST = 9985;
const LINEAR_MIPMAP_LINEAR = 9987;

const CLAMP_TO_EDGE = 33071;
const MIRRORED_REPEAT = 33648;
const REPEAT = 10497;

const RADIAN_PER_DEGREE = Math.PI / 180;
const EPS = 0.000001;

const PMath = {

    RADIAN_PER_DEGREE,

    degree2Radian( degree ) {

        return degree * RADIAN_PER_DEGREE;

    },

    clamp( value, min, max ) {

        return Math.max( min, Math.min( max, value ) );

    },

    map( value, min, max, tarMin, tarMax ) {

        return tarMin + ( tarMax - tarMin ) * ( value - min ) / ( max - min );

    },

    arrayEquals( a, b ) {

        if ( a.length !== b.length ) return false;

        const length = a.length;
        for ( let i = 0; i < length; i ++ )
            if ( Math.abs( a[ i ] - b[ i ] ) > EPS * Math.max( 1.0, Math.abs( a[ i ] ), Math.abs( b[ i ] ) ) )
                return false;

        return true;

    },

    arrayClone( a ) {

        const Type = a.constructor;
        const length = a.length;
        const out = new Type( length );
        for ( let i = 0; i < length; i ++ )
            out[ i ] = a[ i ];

        return out;

    },

};

/* eslint no-param-reassign: 0 */
function Vector3( x, y, z ) {

    this.raw = [];
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;

}

Object.defineProperties( Vector3.prototype, {

    x: {
        get() {

            return this.raw[ 0 ];

        },
        set( v ) {

            this.raw[ 0 ] = v;

        },
    },

    y: {
        get() {

            return this.raw[ 1 ];

        },
        set( v ) {

            this.raw[ 1 ] = v;

        },
    },

    z: {
        get() {

            return this.raw[ 2 ];

        },
        set( v ) {

            this.raw[ 2 ] = v;

        },
    },

} );

Object.assign( Vector3.prototype, {

    length( v ) {

        // Only get the magnitude of this vector
        if ( v === undefined )
            return Math.sqrt( ( this.x * this.x ) + ( this.y * this.y ) + ( this.z * this.z ) );

        // Get magnitude based on another vector
        const x = v.x - this.x;
        const y = v.y - this.y;
        const z = v.z - this.z;

        return Math.sqrt( ( x * x ) + ( y * y ) + ( z * z ) );

    },

    squareLength( v ) {

        if ( v === undefined )
            return ( this.x * this.x ) + ( this.y * this.y ) + ( this.z * this.z );

        const x = v.x - this.x;
        const y = v.y - this.y;
        const z = v.z - this.z;

        return ( x * x ) + ( y * y ) + ( z * z );

    },

    normalize() {

        const mag = this.length();
        this.x /= mag;
        this.y /= mag;
        this.z /= mag;
        return this;

    },

    set( x, y, z ) {

        this.x = x;
        this.y = y;
        this.z = z;
        return this;

    },

    setFromSpherical( s ) {

        Vector3.fromSpherical( this.raw, s );
        return this;

    },

    setFromArray( array, offset ) {

        if ( offset === undefined ) offset = 0;
        this.x = array[ offset ];
        this.y = array[ offset + 1 ];
        this.z = array[ offset + 2 ];

        return this;

    },

    // XYZ order
    setFromRotationMatrix( m ) {

        const te = m.raw || m;
        const m11 = te[ 0 ];
        const m12 = te[ 4 ];
        const m13 = te[ 8 ];
        const m22 = te[ 5 ];
        const m23 = te[ 9 ];
        const m32 = te[ 6 ];
        const m33 = te[ 10 ];

        this.y = Math.asin( PMath.clamp( m13, - 1, 1 ) );

        if ( Math.abs( m13 ) < 0.99999 ) {

            this.x = Math.atan2( - m23, m33 );
            this.z = Math.atan2( - m12, m11 );

        } else {

            this.x = Math.atan2( m32, m22 );
            this.z = 0;

        }

        return this;

    },

    multiScalar( v ) {

        this.x *= v;
        this.y *= v;
        this.z *= v;
        return this;

    },

    getArray() {

        return this.raw;

    },

    getFloatArray() {

        return new Float32Array( this.raw );

    },

    clone() {

        return new Vector3( this.x, this.y, this.z );

    },

    copy( v ) {

        this.x = v.x;
        this.y = v.y;
        this.z = v.z;

        return this;

    },

    sub( v ) {

        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;

        return this;

    },

    add( v ) {

        this.x += v.x;
        this.y += v.y;
        this.z += v.z;

        return this;

    },

    subVectors( a, b ) {

        this.x = a.x - b.x;
        this.y = a.y - a.y;
        this.z = a.z - a.y;

        return this;

    },

    dot( v ) {

        this.dotVectors( this, v );
        return this;

    },

    cross( v, frag ) {

        const result = frag || new Vector3();
        Vector3.crossVectors( result.raw, this.raw, v.raw );
        return result;

    },

    applyQuaternion( q ) {

        Vector3.transformQuat( this.raw, this.raw, q.raw );
        return this;

    },

    dotVectors( v1, v2 ) {

        return ( v1.x * v2.z ) + ( v1.y * v2.y ) + ( v1.z * v2.z );

    },

} );

Object.assign( Vector3, {

    crossVectors( out, v1, v2 ) {

        const ax = v1[ 0 ];
        const ay = v1[ 1 ];
        const az = v1[ 2 ];
        const bx = v2[ 0 ];
        const by = v2[ 1 ];
        const bz = v2[ 2 ];
        out[ 0 ] = ay * bz - az * by;
        out[ 1 ] = az * bx - ax * bz;
        out[ 2 ] = ax * by - ay * bx;

        return out;

    },

    fromSpherical( out, s ) {

        const sinPhiRadius = Math.sin( s.phi ) * s.radius;

        out[ 0 ] = sinPhiRadius * Math.sin( s.theta );
        out[ 1 ] = Math.cos( s.phi ) * s.radius;
        out[ 2 ] = sinPhiRadius * Math.cos( s.theta );

        return out;

    },

    transformQuat( out, a, q ) {

        const x = a[ 0 ];
        const y = a[ 1 ];
        const z = a[ 2 ];
        const qx = q[ 0 ];
        const qy = q[ 1 ];
        const qz = q[ 2 ];
        const qw = q[ 3 ];

        // calculate quat * vector
        const ix = qw * x + qy * z - qz * y;
        const iy = qw * y + qz * x - qx * z;
        const iz = qw * z + qx * y - qy * x;
        const iw = - qx * x - qy * y - qz * z;

        // calculate result * inverse quat
        out[ 0 ] = ix * qw + iw * - qx + iy * - qz - iz * - qy;
        out[ 1 ] = iy * qw + iw * - qy + iz * - qx - ix * - qz;
        out[ 2 ] = iz * qw + iw * - qz + ix * - qy - iy * - qx;

        return out;

    },

} );

/* eslint no-param-reassign: 0 no-mixed-operators:0 */
function Quaternion( x, y, z, w ) {

    this.raw = [];
    if ( arguments.length === 1 )
        this.raw = x.slice( 0, 4 );
    else {

        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
        this.w = typeof w === 'undefined' ? 1 : w;

    }

}

Object.defineProperties( Quaternion.prototype, {

    x: {
        get() {

            return this.raw[ 0 ];

        },

        set( v ) {

            this.raw[ 0 ] = v;

        },
    },

    y: {
        get() {

            return this.raw[ 1 ];

        },

        set( v ) {

            this.raw[ 1 ] = v;

        },
    },

    z: {
        get() {

            return this.raw[ 2 ];

        },

        set( v ) {

            this.raw[ 2 ] = v;

        },
    },

    w: {
        get() {

            return this.raw[ 3 ];

        },

        set( v ) {

            this.raw[ 3 ] = v;

        },
    },

} );

Object.assign( Quaternion.prototype, {

    set( x, y, z, w ) {

        if ( arguments.length === 1 )
            this.raw = x.slice( 0, 4 );
        else {

            this.x = x;
            this.y = y;
            this.z = z;
            this.w = w;

        }

        return this;

    },

    clone() {

        return new Quaternion( this.raw );

    },

    getArray() {

        return this.raw;

    },

    setFromEuler( x, y, z ) {

        Quaternion.fromEuler( this.raw, x, y, z );
        return this;

    },

    length() {

        return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w );

    },

    normalize() {

        Quaternion.normalize( this.raw, this.raw );
        return this;

    },

    setFromUnitVectors: ( function () {

        let v1 = new Vector3();
        const ESP = 0.000001;

        return function setFromUnitVectors( vFrom, vTo ) {

            v1 = new Vector3();
            let r = vFrom.dot( vTo ) + 1;

            if ( r < ESP ) {

                r = 0;
                if ( Math.abs( vFrom.x ) > Map.abs( vFrom.z ) )
                    v1.set( - vFrom.y, vFrom.x, 0 );
                else
                    v1.set( 0, - vFrom.z, vFrom.y );

            } else
                Vector3.cross( v1, vFrom, vTo );

            this.x = v1.x;
            this.y = v1.y;
            this.z = v1.z;
            this.w = v1.w;

            this.normalize();
            return this;

        };

    }() ),

    invert() {

        Quaternion.invert( this.raw, this.raw );
        return this;

    },

} );

Object.assign( Quaternion, {

    normalize( out, a ) {

        let l = Math.sqrt( a[ 0 ] * a[ 0 ] + a[ 1 ] * a[ 1 ] + a[ 2 ] * a[ 2 ] + a[ 3 ] * a[ 3 ] );

        if ( l === 0 ) {

            out[ 0 ] = 0;
            out[ 1 ] = 0;
            out[ 2 ] = 0;
            out[ 3 ] = 1;

        } else {

            l = 1 / l;
            out[ 0 ] = a[ 0 ] * l;
            out[ 1 ] = a[ 1 ] * l;
            out[ 2 ] = a[ 2 ] * l;
            out[ 3 ] = a[ 3 ] * l;

        }

        return out;

    },

    fromEuler( out, x, y, z ) {

        // XYZ order
        const cos = Math.cos;
        const sin = Math.sin;

        const c1 = cos( x / 2 );
        const c2 = cos( y / 2 );
        const c3 = cos( z / 2 );

        const s1 = sin( x / 2 );
        const s2 = sin( y / 2 );
        const s3 = sin( z / 2 );

        out[ 0 ] = s1 * c2 * c3 + c1 * s2 * s3;
        out[ 1 ] = c1 * s2 * c3 - s1 * c2 * s3;
        out[ 2 ] = c1 * c2 * s3 + s1 * s2 * c3;
        out[ 3 ] = c1 * c2 * c3 - s1 * s2 * s3;

    },

    invert( out, a ) {

        const a0 = a[ 0 ];
        const a1 = a[ 1 ];
        const a2 = a[ 2 ];
        const a3 = a[ 3 ];
        const dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
        const invDot = dot ? 1.0 / dot : 0;

        out[ 0 ] = - a0 * invDot;
        out[ 1 ] = - a1 * invDot;
        out[ 2 ] = - a2 * invDot;
        out[ 3 ] = a3 * invDot;

        return out;

    },

    lerp( out, a, b, t ) {

        const ax = a[ 0 ];
        const ay = a[ 1 ];
        const az = a[ 2 ];
        const aw = a[ 3 ];
        out[ 0 ] = ax + t * ( b[ 0 ] - ax );
        out[ 1 ] = ay + t * ( b[ 1 ] - ay );
        out[ 2 ] = az + t * ( b[ 2 ] - az );
        out[ 3 ] = aw + t * ( b[ 3 ] - aw );
        return out;

    },

    slerp( out, a, b, t ) {

        // benchmarks:
        //    http://jsperf.com/quaternion-slerp-implementations
        const ax = a[ 0 ];
        const ay = a[ 1 ];
        const az = a[ 2 ];
        const aw = a[ 3 ];
        let bx = b[ 0 ];
        let by = b[ 1 ];
        let bz = b[ 2 ];
        let bw = b[ 3 ];
        let omega;
        let cosom;
        let sinom;
        let scale0;
        let scale1;
        // calc cosine
        cosom = ax * bx + ay * by + az * bz + aw * bw;
        // adjust signs (if necessary)
        if ( cosom < 0.0 ) {

            cosom = - cosom;
            bx = - bx;
            by = - by;
            bz = - bz;
            bw = - bw;

        }
        // calculate coefficients
        if ( ( 1.0 - cosom ) > 0.000001 ) {

            // standard case (slerp)
            omega = Math.acos( cosom );
            sinom = Math.sin( omega );
            scale0 = Math.sin( ( 1.0 - t ) * omega ) / sinom;
            scale1 = Math.sin( t * omega ) / sinom;

        } else {

            // "from" and "to" quaternions are very close
            //  ... so we can do a linear interpolation
            scale0 = 1.0 - t;
            scale1 = t;

        }
        // calculate final values
        out[ 0 ] = scale0 * ax + scale1 * bx;
        out[ 1 ] = scale0 * ay + scale1 * by;
        out[ 2 ] = scale0 * az + scale1 * bz;
        out[ 3 ] = scale0 * aw + scale1 * bw;
        return out;

    },

    fromMatrix4( out, m ) {

        // http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm

        // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

        const m11 = m[ 0 ];
        const m12 = m[ 4 ];
        const m13 = m[ 8 ];
        const m21 = m[ 1 ];
        const m22 = m[ 5 ];
        const m23 = m[ 9 ];
        const m31 = m[ 2 ];
        const m32 = m[ 6 ];
        const m33 = m[ 10 ];

        const trace = m11 + m22 + m33;
        let s;

        if ( trace > 0 ) {

            s = 0.5 / Math.sqrt( trace + 1.0 );

            out[ 3 ] = 0.25 / s;
            out[ 0 ] = ( m32 - m23 ) * s;
            out[ 1 ] = ( m13 - m31 ) * s;
            out[ 2 ] = ( m21 - m12 ) * s;

        } else if ( m11 > m22 && m11 > m33 ) {

            s = 2.0 * Math.sqrt( 1.0 + m11 - m22 - m33 );

            out[ 3 ] = ( m32 - m23 ) / s;
            out[ 0 ] = 0.25 * s;
            out[ 1 ] = ( m12 + m21 ) / s;
            out[ 2 ] = ( m13 + m31 ) / s;

        } else if ( m22 > m33 ) {

            s = 2.0 * Math.sqrt( 1.0 + m22 - m11 - m33 );

            out[ 3 ] = ( m13 - m31 ) / s;
            out[ 0 ] = ( m12 + m21 ) / s;
            out[ 1 ] = 0.25 * s;
            out[ 2 ] = ( m23 + m32 ) / s;

        } else {

            s = 2.0 * Math.sqrt( 1.0 + m33 - m11 - m22 );

            out[ 3 ] = ( m21 - m12 ) / s;
            out[ 0 ] = ( m13 + m31 ) / s;
            out[ 1 ] = ( m23 + m32 ) / s;
            out[ 2 ] = 0.25 * s;

        }

        return out;

    },

} );

/* eslint no-param-reassign: 0 */
function Matrix4() {

    this.raw = Matrix4.identity();

}

Object.assign( Matrix4.prototype, {

    translate( x, y, z ) {

        if ( x.x !== undefined ) {

            Matrix4.translate( this.raw, x.x, x.y, x.z );
            return this;

        }
        Matrix4.translate( this.raw, x, y, z );
        return this;

    },

    rotateX( rad ) {

        Matrix4.rotateX( this.raw, rad );
        return this;

    },

    rotateY( rad ) {

        Matrix4.rotateY( this.raw, rad );
        return this;

    },

    rotateZ( rad ) {

        Matrix4.rotateZ( this.raw, rad );
        return this;

    },

    applyQuaternion: ( function () {

        const matArray = new Array( 16 );
        return function applyQuaternion( quat ) {

            Matrix4.fromQuat( matArray, typeof quat.x === 'undefined' ? quat : quat.raw );
            Matrix4.mult( this.raw, this.raw, matArray );
            return this;

        };

    }() ),

    scale( x, y, z ) {

        if ( x.x !== undefined ) {

            Matrix4.scale( this.raw, x.x, x.y, x.z );
            return this;

        }

        Matrix4.scale( this.raw, x, y, z );
        return this;

    },

    invert() {

        Matrix4.invert( this.raw, this.raw );
        return this;

    },

    resetRotation() {

        for ( let i = 0; i < this.raw.length; i ++ ) {

            if ( i >= 12 && i <= 14 ) continue; // eslint-disable-line
            this.raw[ i ] = ( i % 5 === 0 ) ? 1 : 0;

        }

        return this;

    },

    reset() {

        for ( let i = 0; i < this.raw.length; i ++ )
            this.raw[ i ] = ( i % 5 === 0 ) ? 1 : 0;
        return this;

    },

    fromTRS( translate, quaternion, scale ) {

        Matrix4.fromRotationTranslationScale( this.raw, quaternion, translate, scale );
        return this;

    },

} );

Object.assign( Matrix4, {

    identity( out ) {

        if ( out ) {

            out[ 0 ] = 1;
            out[ 5 ] = 1;
            out[ 10 ] = 1;
            out[ 15 ] = 1;
            return out;

        }

        const a = new Float32Array( 16 );
        a[ 0 ] = 1;
        a[ 5 ] = 1;
        a[ 10 ] = 1;
        a[ 15 ] = 1;
        return a;

    },

    perspective( out, fov, aspect, near, far ) {

        const f = 1.0 / Math.tan( fov / 2 );
        const nf = 1 / ( near - far );
        out[ 0 ] = f / aspect;
        out[ 1 ] = 0;
        out[ 2 ] = 0;
        out[ 3 ] = 0;
        out[ 4 ] = 0;
        out[ 5 ] = f;
        out[ 6 ] = 0;
        out[ 7 ] = 0;
        out[ 8 ] = 0;
        out[ 9 ] = 0;
        out[ 10 ] = ( far + near ) * nf;
        out[ 11 ] = - 1;
        out[ 12 ] = 0;
        out[ 13 ] = 0;
        out[ 14 ] = 2 * far * near * nf;
        out[ 15 ] = 0;

        return out;

    },

    ortho( out, left, right, bottom, top, near, far ) {

        const lr = 1 / ( left - right );
        const bt = 1 / ( bottom - top );
        const nf = 1 / ( near - far );
        out[ 0 ] = - 2 * lr;
        out[ 1 ] = 0;
        out[ 3 ] = 0;
        out[ 4 ] = 0;
        out[ 5 ] = - 2 * bt;
        out[ 6 ] = 0;
        out[ 7 ] = 0;
        out[ 8 ] = 0;
        out[ 9 ] = 0;
        out[ 10 ] = 2 * nf;
        out[ 11 ] = 0;
        out[ 12 ] = ( left + right ) * lr;
        out[ 13 ] = ( top + bottom ) * bt;
        out[ 14 ] = ( far + near ) * nf;
        out[ 15 ] = 1;

        return out;

    },

    transpose( out, a ) {

        if ( out === a ) {

            const a01 = a[ 1 ];
            const a02 = a[ 2 ];
            const a03 = a[ 3 ];
            const a12 = a[ 6 ];
            const a13 = a[ 7 ];
            const a23 = a[ 11 ];
            out[ 1 ] = a[ 4 ];
            out[ 2 ] = a[ 8 ];
            out[ 3 ] = a[ 12 ];
            out[ 4 ] = a01;
            out[ 6 ] = a[ 9 ];
            out[ 7 ] = a[ 13 ];
            out[ 8 ] = a02;
            out[ 9 ] = a12;
            out[ 11 ] = a[ 14 ];
            out[ 12 ] = a03;
            out[ 13 ] = a13;
            out[ 14 ] = a23;

        } else {

            out[ 0 ] = a[ 0 ];
            out[ 1 ] = a[ 4 ];
            out[ 2 ] = a[ 8 ];
            out[ 3 ] = a[ 12 ];
            out[ 4 ] = a[ 1 ];
            out[ 5 ] = a[ 5 ];
            out[ 6 ] = a[ 9 ];
            out[ 7 ] = a[ 13 ];
            out[ 8 ] = a[ 2 ];
            out[ 9 ] = a[ 6 ];
            out[ 10 ] = a[ 10 ];
            out[ 11 ] = a[ 14 ];
            out[ 12 ] = a[ 3 ];
            out[ 13 ] = a[ 7 ];
            out[ 14 ] = a[ 11 ];
            out[ 15 ] = a[ 15 ];

        }

        return out;

    },

    normalMat3( out, a ) {

        const a00 = a[ 0 ];
        const a01 = a[ 1 ];
        const a02 = a[ 2 ];
        const a03 = a[ 3 ];
        const a10 = a[ 4 ];
        const a11 = a[ 5 ];
        const a12 = a[ 6 ];
        const a13 = a[ 7 ];
        const a20 = a[ 8 ];
        const a21 = a[ 9 ];
        const a22 = a[ 10 ];
        const a23 = a[ 11 ];
        const a30 = a[ 12 ];
        const a31 = a[ 13 ];
        const a32 = a[ 14 ];
        const a33 = a[ 15 ];

        const b00 = ( a00 * a11 ) - ( a01 * a10 );
        const b01 = ( a00 * a12 ) - ( a02 * a10 );
        const b02 = ( a00 * a13 ) - ( a03 * a10 );
        const b03 = ( a01 * a12 ) - ( a02 * a11 );
        const b04 = ( a01 * a13 ) - ( a03 * a11 );
        const b05 = ( a02 * a13 ) - ( a03 * a12 );
        const b06 = ( a20 * a31 ) - ( a21 * a30 );
        const b07 = ( a20 * a32 ) - ( a22 * a30 );
        const b08 = ( a20 * a33 ) - ( a23 * a30 );
        const b09 = ( a21 * a32 ) - ( a22 * a31 );
        const b10 = ( a21 * a33 ) - ( a23 * a31 );
        const b11 = ( a22 * a33 ) - ( a23 * a32 );

        let det = ( ( b00 * b11 ) - ( b01 * b10 ) ) + ( b02 * b09 ) + ( ( b03 * b08 ) - ( b04 * b07 ) ) + ( b05 * b06 );

        if ( ! det ) return null;

        det = 1.0 / det;

        out[ 0 ] = ( a11 * b11 - a12 * b10 + a13 * b09 ) * det;
        out[ 1 ] = ( a12 * b08 - a10 * b11 - a13 * b07 ) * det;
        out[ 2 ] = ( a10 * b10 - a11 * b08 + a13 * b06 ) * det;

        out[ 3 ] = ( a02 * b10 - a01 * b11 - a03 * b09 ) * det;
        out[ 4 ] = ( a00 * b11 - a02 * b08 + a03 * b07 ) * det;
        out[ 5 ] = ( a01 * b08 - a00 * b10 - a03 * b06 ) * det;

        out[ 6 ] = ( a31 * b05 - a32 * b04 + a33 * b03 ) * det;
        out[ 7 ] = ( a32 * b02 - a30 * b05 - a33 * b01 ) * det;
        out[ 8 ] = ( a30 * b04 - a31 * b02 + a33 * b00 ) * det;

        return out;

    },

    transformVec4( out, m, v ) {

        out[ 0 ] = m[ 0 ] * v[ 0 ] + m[ 4 ] * v[ 1 ] + m[ 8 ] * v[ 2 ] + m[ 12 ] * v[ 3 ];
        out[ 1 ] = m[ 1 ] * v[ 0 ] + m[ 5 ] * v[ 1 ] + m[ 9 ] * v[ 2 ] + m[ 13 ] * v[ 3 ];
        out[ 2 ] = m[ 2 ] * v[ 0 ] + m[ 6 ] * v[ 1 ] + m[ 10 ] * v[ 2 ] + m[ 14 ] * v[ 3 ];
        out[ 3 ] = m[ 3 ] * v[ 0 ] + m[ 7 ] * v[ 1 ] + m[ 11 ] * v[ 2 ] + m[ 15 ] * v[ 3 ];

        return out;

    },

    mult( out, a, b ) {

        const a00 = a[ 0 ];
        const a01 = a[ 1 ];
        const a02 = a[ 2 ];
        const a03 = a[ 3 ];
        const a10 = a[ 4 ];
        const a11 = a[ 5 ];
        const a12 = a[ 6 ];
        const a13 = a[ 7 ];
        const a20 = a[ 8 ];
        const a21 = a[ 9 ];
        const a22 = a[ 10 ];
        const a23 = a[ 11 ];
        const a30 = a[ 12 ];
        const a31 = a[ 13 ];
        const a32 = a[ 14 ];
        const a33 = a[ 15 ];

        let b0 = b[ 0 ];
        let b1 = b[ 1 ];
        let b2 = b[ 2 ];
        let b3 = b[ 3 ];

        out[ 0 ] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[ 1 ] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[ 2 ] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[ 3 ] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

        b0 = b[ 4 ]; b1 = b[ 5 ]; b2 = b[ 6 ]; b3 = b[ 7 ];
        out[ 4 ] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[ 5 ] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[ 6 ] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[ 7 ] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

        b0 = b[ 8 ]; b1 = b[ 9 ]; b2 = b[ 10 ]; b3 = b[ 11 ];
        out[ 8 ] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[ 9 ] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[ 10 ] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[ 11 ] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

        b0 = b[ 12 ]; b1 = b[ 13 ]; b2 = b[ 14 ]; b3 = b[ 15 ];
        out[ 12 ] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[ 13 ] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[ 14 ] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[ 15 ] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

        return out;

    },

    scale( out, x, y, z ) {

        out[ 0 ] *= x;
        out[ 1 ] *= x;
        out[ 2 ] *= x;
        out[ 3 ] *= x;
        out[ 4 ] *= y;
        out[ 5 ] *= y;
        out[ 6 ] *= y;
        out[ 7 ] *= y;
        out[ 8 ] *= z;
        out[ 9 ] *= z;
        out[ 10 ] *= z;
        out[ 11 ] *= z;

        return out;

    },

    rotateY( out, rad ) {

        const s = Math.sin( rad );
        const c = Math.cos( rad );
        const a00 = out[ 0 ];
        const a01 = out[ 1 ];
        const a02 = out[ 2 ];
        const a03 = out[ 3 ];
        const a20 = out[ 8 ];
        const a21 = out[ 9 ];
        const a22 = out[ 10 ];
        const a23 = out[ 11 ];

        out[ 0 ] = a00 * c - a20 * s;
        out[ 1 ] = a01 * c - a21 * s;
        out[ 2 ] = a02 * c - a22 * s;
        out[ 3 ] = a03 * c - a23 * s;
        out[ 8 ] = a00 * s + a20 * c;
        out[ 9 ] = a01 * s + a21 * c;
        out[ 10 ] = a02 * s + a22 * c;
        out[ 11 ] = a03 * s + a23 * c;

        return out;

    },

    rotateX( out, rad ) {

        const s = Math.sin( rad );
        const c = Math.cos( rad );
        const a10 = out[ 4 ];
        const a11 = out[ 5 ];
        const a12 = out[ 6 ];
        const a13 = out[ 7 ];
        const a20 = out[ 8 ];
        const a21 = out[ 9 ];
        const a22 = out[ 10 ];
        const a23 = out[ 11 ];

        out[ 4 ] = a10 * c + a20 * s;
        out[ 5 ] = a11 * c + a21 * s;
        out[ 6 ] = a12 * c + a22 * s;
        out[ 7 ] = a13 * c + a23 * s;
        out[ 8 ] = a20 * c - a10 * s;
        out[ 9 ] = a21 * c - a11 * s;
        out[ 10 ] = a22 * c - a12 * s;
        out[ 11 ] = a23 * c - a13 * s;

        return out;

    },

    rotateZ( out, rad ) {

        const s = Math.sin( rad );
        const c = Math.cos( rad );
        const a00 = out[ 0 ];
        const a01 = out[ 1 ];
        const a02 = out[ 2 ];
        const a03 = out[ 3 ];
        const a10 = out[ 4 ];
        const a11 = out[ 5 ];
        const a12 = out[ 6 ];
        const a13 = out[ 7 ];

        out[ 0 ] = a00 * c + a10 * s;
        out[ 1 ] = a01 * c + a11 * s;
        out[ 2 ] = a02 * c + a12 * s;
        out[ 3 ] = a03 * c + a13 * s;
        out[ 4 ] = a10 * c - a00 * s;
        out[ 5 ] = a11 * c - a01 * s;
        out[ 6 ] = a12 * c - a02 * s;
        out[ 7 ] = a13 * c - a03 * s;

        return out;

    },

    rotate( out, rad, axis ) {

        let x = axis[ 0 ];
        let y = axis[ 1 ];
        let z = axis[ 2 ];
        let len = Math.sqrt( x * x + y * y + z * z );

        if ( Math.abs( len ) < 0.000001 ) return null;

        len = 1 / len;
        x *= len;
        y *= len;
        z *= len;

        const s = Math.sin( rad );
        const c = Math.cos( rad );
        const t = 1 - c;

        const a00 = out[ 0 ]; const a01 = out[ 1 ]; const a02 = out[ 2 ]; const a03 = out[ 3 ];
        const a10 = out[ 4 ]; const a11 = out[ 5 ]; const a12 = out[ 6 ]; const a13 = out[ 7 ];
        const a20 = out[ 8 ]; const a21 = out[ 9 ]; const a22 = out[ 10 ]; const a23 = out[ 11 ];

        const b00 = x * x * t + c; const b01 = y * x * t + z * s; const b02 = z * x * t - y * s;
        const b10 = x * y * t - z * s; const b11 = y * y * t + c; const b12 = z * y * t + x * s;
        const b20 = x * z * t + y * s; const b21 = y * z * t - x * s; const b22 = z * z * t + c;

        out[ 0 ] = a00 * b00 + a10 * b01 + a20 * b02;
        out[ 1 ] = a01 * b00 + a11 * b01 + a21 * b02;
        out[ 2 ] = a02 * b00 + a12 * b01 + a22 * b02;
        out[ 3 ] = a03 * b00 + a13 * b01 + a23 * b02;
        out[ 4 ] = a00 * b10 + a10 * b11 + a20 * b12;
        out[ 5 ] = a01 * b10 + a11 * b11 + a21 * b12;
        out[ 6 ] = a02 * b10 + a12 * b11 + a22 * b12;
        out[ 7 ] = a03 * b10 + a13 * b11 + a23 * b12;
        out[ 8 ] = a00 * b20 + a10 * b21 + a20 * b22;
        out[ 9 ] = a01 * b20 + a11 * b21 + a21 * b22;
        out[ 10 ] = a02 * b20 + a12 * b21 + a22 * b22;
        out[ 11 ] = a03 * b20 + a13 * b21 + a23 * b22;

        return out;

    },

    invert( out, mat ) {

        if ( mat === undefined ) mat = out; // If input isn't sent, then output is also input

        const a00 = mat[ 0 ];
        const a01 = mat[ 1 ];
        const a02 = mat[ 2 ];
        const a03 = mat[ 3 ];
        const a10 = mat[ 4 ];
        const a11 = mat[ 5 ];
        const a12 = mat[ 6 ];
        const a13 = mat[ 7 ];
        const a20 = mat[ 8 ];
        const a21 = mat[ 9 ];
        const a22 = mat[ 10 ];
        const a23 = mat[ 11 ];
        const a30 = mat[ 12 ];
        const a31 = mat[ 13 ];
        const a32 = mat[ 14 ];
        const a33 = mat[ 15 ];

        const b00 = a00 * a11 - a01 * a10;
        const b01 = a00 * a12 - a02 * a10;
        const b02 = a00 * a13 - a03 * a10;
        const b03 = a01 * a12 - a02 * a11;
        const b04 = a01 * a13 - a03 * a11;
        const b05 = a02 * a13 - a03 * a12;
        const b06 = a20 * a31 - a21 * a30;
        const b07 = a20 * a32 - a22 * a30;
        const b08 = a20 * a33 - a23 * a30;
        const b09 = a21 * a32 - a22 * a31;
        const b10 = a21 * a33 - a23 * a31;
        const b11 = a22 * a33 - a23 * a32;

        let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

        if ( ! det ) return false;

        det = 1.0 / det;

        out[ 0 ] = ( a11 * b11 - a12 * b10 + a13 * b09 ) * det;
        out[ 1 ] = ( a02 * b10 - a01 * b11 - a03 * b09 ) * det;
        out[ 2 ] = ( a31 * b05 - a32 * b04 + a33 * b03 ) * det;
        out[ 3 ] = ( a22 * b04 - a21 * b05 - a23 * b03 ) * det;
        out[ 4 ] = ( a12 * b08 - a10 * b11 - a13 * b07 ) * det;
        out[ 5 ] = ( a00 * b11 - a02 * b08 + a03 * b07 ) * det;
        out[ 6 ] = ( a32 * b02 - a30 * b05 - a33 * b01 ) * det;
        out[ 7 ] = ( a20 * b05 - a22 * b02 + a23 * b01 ) * det;
        out[ 8 ] = ( a10 * b10 - a11 * b08 + a13 * b06 ) * det;
        out[ 9 ] = ( a01 * b08 - a00 * b10 - a03 * b06 ) * det;
        out[ 10 ] = ( a30 * b04 - a31 * b02 + a33 * b00 ) * det;
        out[ 11 ] = ( a21 * b02 - a20 * b04 - a23 * b00 ) * det;
        out[ 12 ] = ( a11 * b07 - a10 * b09 - a12 * b06 ) * det;
        out[ 13 ] = ( a00 * b09 - a01 * b07 + a02 * b06 ) * det;
        out[ 14 ] = ( a31 * b01 - a30 * b03 - a32 * b00 ) * det;
        out[ 15 ] = ( a20 * b03 - a21 * b01 + a22 * b00 ) * det;

        return true;

    },

    translate( out, x, y, z ) {

        out[ 12 ] = out[ 0 ] * x + out[ 4 ] * y + out[ 8 ] * z + out[ 12 ];
        out[ 13 ] = out[ 1 ] * x + out[ 5 ] * y + out[ 9 ] * z + out[ 13 ];
        out[ 14 ] = out[ 2 ] * x + out[ 6 ] * y + out[ 10 ] * z + out[ 14 ];
        out[ 15 ] = out[ 3 ] * x + out[ 7 ] * y + out[ 11 ] * z + out[ 15 ];

        return out;

    },

    lookAt( out, eye, target, up ) {

        let x0;
        let x1;
        let x2;
        let y0;
        let y1;
        let y2;
        let z0;
        let z1;
        let z2;
        let len;
        const eyex = eye[ 0 ];
        const eyey = eye[ 1 ];
        const eyez = eye[ 2 ];
        const upx = up[ 0 ];
        const upy = up[ 1 ];
        const upz = up[ 2 ];
        const centerx = target[ 0 ];
        const centery = target[ 1 ];
        const centerz = target[ 2 ];
        if ( Math.abs( eyex - centerx ) < 0.000001 &&
            Math.abs( eyey - centery ) < 0.000001 &&
            Math.abs( eyez - centerz ) < 0.000001 )
            return this.identity( out );

        z0 = eyex - centerx;
        z1 = eyey - centery;
        z2 = eyez - centerz;
        len = 1 / Math.sqrt( z0 * z0 + z1 * z1 + z2 * z2 );
        z0 *= len;
        z1 *= len;
        z2 *= len;
        x0 = upy * z2 - upz * z1;
        x1 = upz * z0 - upx * z2;
        x2 = upx * z1 - upy * z0;
        len = Math.sqrt( x0 * x0 + x1 * x1 + x2 * x2 );
        if ( ! len ) {

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
        len = Math.sqrt( y0 * y0 + y1 * y1 + y2 * y2 );
        if ( ! len ) {

            y0 = 0;
            y1 = 0;
            y2 = 0;

        } else {

            len = 1 / len;
            y0 *= len;
            y1 *= len;
            y2 *= len;

        }
        out[ 0 ] = x0;
        out[ 1 ] = y0;
        out[ 2 ] = z0;
        out[ 3 ] = 0;
        out[ 4 ] = x1;
        out[ 5 ] = y1;
        out[ 6 ] = z1;
        out[ 7 ] = 0;
        out[ 8 ] = x2;
        out[ 9 ] = y2;
        out[ 10 ] = z2;
        out[ 11 ] = 0;
        out[ 12 ] = - ( x0 * eyex + x1 * eyey + x2 * eyez );
        out[ 13 ] = - ( y0 * eyex + y1 * eyey + y2 * eyez );
        out[ 14 ] = - ( z0 * eyex + z1 * eyey + z2 * eyez );
        out[ 15 ] = 1;

        return out;

    },

    equals: ( function () {

        const EPS = 0.000001;

        return function equals( a, b ) {

            const a0 = a[ 0 ];
            const a1 = a[ 1 ];
            const a2 = a[ 2 ];
            const a3 = a[ 3 ];
            const a4 = a[ 4 ];
            const a5 = a[ 5 ];
            const a6 = a[ 6 ];
            const a7 = a[ 7 ];
            const a8 = a[ 8 ];
            const a9 = a[ 9 ];
            const a10 = a[ 10 ];
            const a11 = a[ 11 ];
            const a12 = a[ 12 ];
            const a13 = a[ 13 ];
            const a14 = a[ 14 ];
            const a15 = a[ 15 ];
            const b0 = b[ 0 ];
            const b1 = b[ 1 ];
            const b2 = b[ 2 ];
            const b3 = b[ 3 ];
            const b4 = b[ 4 ];
            const b5 = b[ 5 ];
            const b6 = b[ 6 ];
            const b7 = b[ 7 ];
            const b8 = b[ 8 ];
            const b9 = b[ 9 ];
            const b10 = b[ 10 ];
            const b11 = b[ 11 ];
            const b12 = b[ 12 ];
            const b13 = b[ 13 ];
            const b14 = b[ 14 ];
            const b15 = b[ 15 ];

            return ( Math.abs( a0 - b0 ) <= EPS * Math.max( 1.0, Math.abs( a0 ), Math.abs( b0 ) ) &&
              Math.abs( a1 - b1 ) <= EPS * Math.max( 1.0, Math.abs( a1 ), Math.abs( b1 ) ) &&
              Math.abs( a2 - b2 ) <= EPS * Math.max( 1.0, Math.abs( a2 ), Math.abs( b2 ) ) &&
              Math.abs( a3 - b3 ) <= EPS * Math.max( 1.0, Math.abs( a3 ), Math.abs( b3 ) ) &&
              Math.abs( a4 - b4 ) <= EPS * Math.max( 1.0, Math.abs( a4 ), Math.abs( b4 ) ) &&
              Math.abs( a5 - b5 ) <= EPS * Math.max( 1.0, Math.abs( a5 ), Math.abs( b5 ) ) &&
              Math.abs( a6 - b6 ) <= EPS * Math.max( 1.0, Math.abs( a6 ), Math.abs( b6 ) ) &&
              Math.abs( a7 - b7 ) <= EPS * Math.max( 1.0, Math.abs( a7 ), Math.abs( b7 ) ) &&
              Math.abs( a8 - b8 ) <= EPS * Math.max( 1.0, Math.abs( a8 ), Math.abs( b8 ) ) &&
              Math.abs( a9 - b9 ) <= EPS * Math.max( 1.0, Math.abs( a9 ), Math.abs( b9 ) ) &&
              Math.abs( a10 - b10 ) <= EPS * Math.max( 1.0, Math.abs( a10 ), Math.abs( b10 ) ) &&
              Math.abs( a11 - b11 ) <= EPS * Math.max( 1.0, Math.abs( a11 ), Math.abs( b11 ) ) &&
              Math.abs( a12 - b12 ) <= EPS * Math.max( 1.0, Math.abs( a12 ), Math.abs( b12 ) ) &&
              Math.abs( a13 - b13 ) <= EPS * Math.max( 1.0, Math.abs( a13 ), Math.abs( b13 ) ) &&
              Math.abs( a14 - b14 ) <= EPS * Math.max( 1.0, Math.abs( a14 ), Math.abs( b14 ) ) &&
              Math.abs( a15 - b15 ) <= EPS * Math.max( 1.0, Math.abs( a15 ), Math.abs( b15 ) ) );

        };

    }() ),

    clone( a ) {

        const out = new Float32Array( 16 );
        out[ 0 ] = a[ 0 ];
        out[ 1 ] = a[ 1 ];
        out[ 2 ] = a[ 2 ];
        out[ 3 ] = a[ 3 ];
        out[ 4 ] = a[ 4 ];
        out[ 5 ] = a[ 5 ];
        out[ 6 ] = a[ 6 ];
        out[ 7 ] = a[ 7 ];
        out[ 8 ] = a[ 8 ];
        out[ 9 ] = a[ 9 ];
        out[ 10 ] = a[ 10 ];
        out[ 11 ] = a[ 11 ];
        out[ 12 ] = a[ 12 ];
        out[ 13 ] = a[ 13 ];
        out[ 14 ] = a[ 14 ];
        out[ 15 ] = a[ 15 ];

        return out;

    },

    copy( out, a ) {

        out[ 0 ] = a[ 0 ];
        out[ 1 ] = a[ 1 ];
        out[ 2 ] = a[ 2 ];
        out[ 3 ] = a[ 3 ];
        out[ 4 ] = a[ 4 ];
        out[ 5 ] = a[ 5 ];
        out[ 6 ] = a[ 6 ];
        out[ 7 ] = a[ 7 ];
        out[ 8 ] = a[ 8 ];
        out[ 9 ] = a[ 9 ];
        out[ 10 ] = a[ 10 ];
        out[ 11 ] = a[ 11 ];
        out[ 12 ] = a[ 12 ];
        out[ 13 ] = a[ 13 ];
        out[ 14 ] = a[ 14 ];
        out[ 15 ] = a[ 15 ];

        return out;

    },

    fromQuat( out, q ) {

        const x = q[ 0 ];
        const y = q[ 1 ];
        const z = q[ 2 ];
        const w = q[ 3 ];
        const x2 = x + x;
        const y2 = y + y;
        const z2 = z + z;
        const xx = x * x2;
        const yx = y * x2;
        const yy = y * y2;
        const zx = z * x2;
        const zy = z * y2;
        const zz = z * z2;
        const wx = w * x2;
        const wy = w * y2;
        const wz = w * z2;
        out[ 0 ] = 1 - yy - zz;
        out[ 1 ] = yx + wz;
        out[ 2 ] = zx - wy;
        out[ 3 ] = 0;
        out[ 4 ] = yx - wz;
        out[ 5 ] = 1 - xx - zz;
        out[ 6 ] = zy + wx;
        out[ 7 ] = 0;
        out[ 8 ] = zx + wy;
        out[ 9 ] = zy - wx;
        out[ 10 ] = 1 - xx - yy;
        out[ 11 ] = 0;
        out[ 12 ] = 0;
        out[ 13 ] = 0;
        out[ 14 ] = 0;
        out[ 15 ] = 1;

        return out;

    },

    fromRotationTranslation( out, q, v ) {

        // Quaternion math
        const x = q[ 0 ];
        const y = q[ 1 ];
        const z = q[ 2 ];
        const w = q[ 3 ];
        const x2 = x + x;
        const y2 = y + y;
        const z2 = z + z;
        const xx = x * x2;
        const xy = x * y2;
        const xz = x * z2;
        const yy = y * y2;
        const yz = y * z2;
        const zz = z * z2;
        const wx = w * x2;
        const wy = w * y2;
        const wz = w * z2;
        out[ 0 ] = 1 - ( yy + zz );
        out[ 1 ] = xy + wz;
        out[ 2 ] = xz - wy;
        out[ 3 ] = 0;
        out[ 4 ] = xy - wz;
        out[ 5 ] = 1 - ( xx + zz );
        out[ 6 ] = yz + wx;
        out[ 7 ] = 0;
        out[ 8 ] = xz + wy;
        out[ 9 ] = yz - wx;
        out[ 10 ] = 1 - ( xx + yy );
        out[ 11 ] = 0;
        out[ 12 ] = v[ 0 ];
        out[ 13 ] = v[ 1 ];
        out[ 14 ] = v[ 2 ];
        out[ 15 ] = 1;
        return out;

    },

    fromRotationTranslationScale( out, q, v, s ) {

        const x = q[ 0 ];
        const y = q[ 1 ];
        const z = q[ 2 ];
        const w = q[ 3 ];
        const x2 = x + x;
        const y2 = y + y;
        const z2 = z + z;
        const xx = x * x2;
        const xy = x * y2;
        const xz = x * z2;
        const yy = y * y2;
        const yz = y * z2;
        const zz = z * z2;
        const wx = w * x2;
        const wy = w * y2;
        const wz = w * z2;
        const sx = s[ 0 ];
        const sy = s[ 1 ];
        const sz = s[ 2 ];
        out[ 0 ] = ( 1 - ( yy + zz ) ) * sx;
        out[ 1 ] = ( xy + wz ) * sx;
        out[ 2 ] = ( xz - wy ) * sx;
        out[ 3 ] = 0;
        out[ 4 ] = ( xy - wz ) * sy;
        out[ 5 ] = ( 1 - ( xx + zz ) ) * sy;
        out[ 6 ] = ( yz + wx ) * sy;
        out[ 7 ] = 0;
        out[ 8 ] = ( xz + wy ) * sz;
        out[ 9 ] = ( yz - wx ) * sz;
        out[ 10 ] = ( 1 - ( xx + yy ) ) * sz;
        out[ 11 ] = 0;
        out[ 12 ] = v[ 0 ];
        out[ 13 ] = v[ 1 ];
        out[ 14 ] = v[ 2 ];
        out[ 15 ] = 1;

        return out;

    },

    getTranslation( out, mat ) {

        out[ 0 ] = mat[ 12 ];
        out[ 1 ] = mat[ 13 ];
        out[ 2 ] = mat[ 14 ];
        return out;

    },

    getScaling( out, mat ) {

        const m11 = mat[ 0 ];
        const m12 = mat[ 1 ];
        const m13 = mat[ 2 ];
        const m21 = mat[ 4 ];
        const m22 = mat[ 5 ];
        const m23 = mat[ 6 ];
        const m31 = mat[ 8 ];
        const m32 = mat[ 9 ];
        const m33 = mat[ 10 ];
        out[ 0 ] = Math.sqrt( m11 * m11 + m12 * m12 + m13 * m13 );
        out[ 1 ] = Math.sqrt( m21 * m21 + m22 * m22 + m23 * m23 );
        out[ 2 ] = Math.sqrt( m31 * m31 + m32 * m32 + m33 * m33 );
        return out;

    },

    getRotation( out, mat ) {

        // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
        const trace = mat[ 0 ] + mat[ 5 ] + mat[ 10 ];
        let S = 0;
        if ( trace > 0 ) {

            S = Math.sqrt( trace + 1.0 ) * 2;
            out[ 3 ] = 0.25 * S;
            out[ 0 ] = ( mat[ 6 ] - mat[ 9 ] ) / S;
            out[ 1 ] = ( mat[ 8 ] - mat[ 2 ] ) / S;
            out[ 2 ] = ( mat[ 1 ] - mat[ 4 ] ) / S;

        } else if ( ( mat[ 0 ] > mat[ 5 ] ) && ( mat[ 0 ] > mat[ 10 ] ) ) {

            S = Math.sqrt( 1.0 + mat[ 0 ] - mat[ 5 ] - mat[ 10 ] ) * 2;
            out[ 3 ] = ( mat[ 6 ] - mat[ 9 ] ) / S;
            out[ 0 ] = 0.25 * S;
            out[ 1 ] = ( mat[ 1 ] + mat[ 4 ] ) / S;
            out[ 2 ] = ( mat[ 8 ] + mat[ 2 ] ) / S;

        } else if ( mat[ 5 ] > mat[ 10 ] ) {

            S = Math.sqrt( 1.0 + mat[ 5 ] - mat[ 0 ] - mat[ 10 ] ) * 2;
            out[ 3 ] = ( mat[ 8 ] - mat[ 2 ] ) / S;
            out[ 0 ] = ( mat[ 1 ] + mat[ 4 ] ) / S;
            out[ 1 ] = 0.25 * S;
            out[ 2 ] = ( mat[ 6 ] + mat[ 9 ] ) / S;

        } else {

            S = Math.sqrt( 1.0 + mat[ 10 ] - mat[ 0 ] - mat[ 5 ] ) * 2;
            out[ 3 ] = ( mat[ 1 ] - mat[ 4 ] ) / S;
            out[ 0 ] = ( mat[ 8 ] + mat[ 2 ] ) / S;
            out[ 1 ] = ( mat[ 6 ] + mat[ 9 ] ) / S;
            out[ 2 ] = 0.25 * S;

        }
        return out;

    },

    determinant( m ) {


        const n11 = m[ 0 ];
        const n12 = m[ 4 ];
        const n13 = m[ 8 ];
        const n14 = m[ 12 ];
        const n21 = m[ 1 ];
        const n22 = m[ 5 ];
        const n23 = m[ 9 ];
        const n24 = m[ 13 ];
        const n31 = m[ 2 ];
        const n32 = m[ 6 ];
        const n33 = m[ 10 ];
        const n34 = m[ 14 ];
        const n41 = m[ 3 ];
        const n42 = m[ 7 ];
        const n43 = m[ 11 ];
        const n44 = m[ 15 ];

        // TODO: make this more efficient
        // ( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )

        return (
            n41 * (
                + n14 * n23 * n32
                - n13 * n24 * n32
                - n14 * n22 * n33
                + n12 * n24 * n33
                + n13 * n22 * n34
                - n12 * n23 * n34
            ) +
            n42 * (
                + n11 * n23 * n34
                - n11 * n24 * n33
                + n14 * n21 * n33
                - n13 * n21 * n34
                + n13 * n24 * n31
                - n14 * n23 * n31
            ) +
            n43 * (
                + n11 * n24 * n32
                - n11 * n22 * n34
                - n14 * n21 * n32
                + n12 * n21 * n34
                + n14 * n22 * n31
                - n12 * n24 * n31
            ) +
            n44 * (
                - n13 * n22 * n31
                - n11 * n23 * n32
                + n11 * n22 * n33
                + n13 * n21 * n32
                - n12 * n21 * n33
                + n12 * n23 * n31
            )
        );

    },

    decompose( m, position, quaternion, scale ) {

        const te = Matrix4.clone( m );

        let sx = Math.sqrt( ( te[ 0 ] * te[ 0 ] ) + ( te[ 1 ] * te[ 1 ] ) + ( te[ 2 ] * te[ 2 ] ) );
        const sy = Math.sqrt( ( te[ 4 ] * te[ 4 ] ) + ( te[ 5 ] * te[ 5 ] ) + ( te[ 6 ] * te[ 6 ] ) );
        const sz = Math.sqrt( ( te[ 8 ] * te[ 8 ] ) + ( te[ 9 ] * te[ 9 ] ) + ( te[ 10 ] * te[ 10 ] ) );

        // if determine is negative, we need to invert one scale
        const det = Matrix4.determinant( te );
        if ( det < 0 ) sx = - sx;

        position[ 0 ] = te[ 12 ];
        position[ 1 ] = te[ 13 ];
        position[ 2 ] = te[ 14 ];

        // scale the rotation part

        const invSX = 1 / sx;
        const invSY = 1 / sy;
        const invSZ = 1 / sz;

        te[ 0 ] *= invSX;
        te[ 1 ] *= invSX;
        te[ 2 ] *= invSX;

        te[ 4 ] *= invSY;
        te[ 5 ] *= invSY;
        te[ 6 ] *= invSY;

        te[ 8 ] *= invSZ;
        te[ 9 ] *= invSZ;
        te[ 10 ] *= invSZ;

        Quaternion.fromMatrix4( quaternion, te );

        scale[ 0 ] = sx;
        scale[ 1 ] = sy;
        scale[ 2 ] = sz;

    },

} );

const isArrayBuffer = window.SharedArrayBuffer
    ? function isArrayBufferOrSharedArrayBuffer( ary ) {

        return ary && ary.buffer && ( ary.buffer instanceof ArrayBuffer || ary.buffer instanceof window.SharedArrayBuffer );

    } : function isArrayBuffer( ary ) {

        return ary && ary.buffer && ary.buffer instanceof ArrayBuffer;

    };

const BYTE = 0x1400;
const UNSIGNED_BYTE = 0x1401;
const SHORT = 0x1402;
const UNSIGNED_SHORT = 0x1403;
const INT = 0x1404;
const UNSIGNED_INT = 0x1405;
const FLOAT = 0x1406;
const UNSIGNED_SHORT_4_4_4_4 = 0x8033;
const UNSIGNED_SHORT_5_5_5_1 = 0x8034;
const UNSIGNED_SHORT_5_6_5 = 0x8363;
const HALF_FLOAT = 0x140B;
const UNSIGNED_INT_2_10_10_10_REV = 0x8368;
const UNSIGNED_INT_10F_11F_11F_REV = 0x8C3B;
const UNSIGNED_INT_5_9_9_9_REV = 0x8C3E;
const FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8DAD;
const UNSIGNED_INT_24_8 = 0x84FA;

const glTypeToTypedArray = {};
{

    const tt = glTypeToTypedArray;
    tt[ BYTE ] = Int8Array;
    tt[ UNSIGNED_BYTE ] = Uint8Array;
    tt[ SHORT ] = Int16Array;
    tt[ UNSIGNED_SHORT ] = Uint16Array;
    tt[ INT ] = Int32Array;
    tt[ UNSIGNED_INT ] = Uint32Array;
    tt[ FLOAT ] = Float32Array;
    tt[ UNSIGNED_SHORT_4_4_4_4 ] = Uint16Array;
    tt[ UNSIGNED_SHORT_5_5_5_1 ] = Uint16Array;
    tt[ UNSIGNED_SHORT_5_6_5 ] = Uint16Array;
    tt[ HALF_FLOAT ] = Uint16Array;
    tt[ UNSIGNED_INT_2_10_10_10_REV ] = Uint32Array;
    tt[ UNSIGNED_INT_10F_11F_11F_REV ] = Uint32Array;
    tt[ UNSIGNED_INT_5_9_9_9_REV ] = Uint32Array;
    tt[ FLOAT_32_UNSIGNED_INT_24_8_REV ] = Uint32Array;
    tt[ UNSIGNED_INT_24_8 ] = Uint32Array;

}

function getGLTypeFromTypedArrayType( typedArrayType ) {

    switch ( typedArrayType ) {

    case Int8Array:
        return BYTE;
    case Uint8Array:
        return UNSIGNED_BYTE;
    case Uint8ClampedArray:
        return UNSIGNED_BYTE;
    case Int16Array:
        return SHORT;
    case Uint16Array:
        return UNSIGNED_SHORT;
    case Int32Array:
        return INT;
    case Uint32Array:
        return UNSIGNED_INT;
    case Float32Array:
        return FLOAT;
    default:
        throw new Error( 'unsupported typed array type' );

    }

}

function getGLTypeFromTypedArray( typedArray ) {

    if ( typedArray instanceof Int8Array ) return BYTE;
    if ( typedArray instanceof Uint8Array ) return UNSIGNED_BYTE;
    if ( typedArray instanceof Uint8ClampedArray ) return UNSIGNED_BYTE;
    if ( typedArray instanceof Int16Array ) return SHORT;
    if ( typedArray instanceof Uint16Array ) return UNSIGNED_SHORT;
    if ( typedArray instanceof Int32Array ) return INT;
    if ( typedArray instanceof Uint32Array ) return UNSIGNED_INT;
    if ( typedArray instanceof Float32Array ) return FLOAT;
    throw new Error( 'unsupported typed array type' );

}

function getTypedArrayTypeFromGLType( type ) {

    const arrayType = glTypeToTypedArray[ type ];
    if ( ! arrayType ) throw new Error( 'unkonw gl type' );
    return arrayType;

}

function getTypedArray( array, Type = Float32Array ) {

    if ( isArrayBuffer( array ) )
        return array;
    return new Type( array );

}

function Transform() {

    this._position = new Vector3( 0, 0, 0 );
    this._scale = new Vector3( 1, 1, 1 );
    this._rotation = new Vector3( 0, 0, 0 );
    this._quaternion = new Quaternion();
    this.matrix = new Matrix4();
    this.normMat = new Float32Array( 9 );
    this.worldMatrix = new Matrix4();

    this.forward = new Float32Array( 4 );
    this.up = new Float32Array( 4 );
    this.right = new Float32Array( 4 );

    this._needUpdateMatrix = false;
    this.needUpdateWorldMatrix = true;

}

Object.defineProperties( Transform.prototype, {

    position: {

        get() {

            return this._position.getArray().slice();

        },

        set( v ) {

            this.setPosition( v );

        },

    },

    scale: {

        get() {

            return this._scale.getArray().slice();

        },

        set( v ) {

            this.setScale( v );

        },

    },

    rotation: {

        get() {

            return this._rotation.getArray().slice();

        },

        set( v ) {

            this.setRotation( v );

        },

    },

    quaternion: {

        get() {

            return this._quaternion.getArray().slice();

        },

        set( v ) {

            this.setQuaternion( v );

        },

    },

} );

Object.assign( Transform.prototype, {

    updateMatrix() {

        if ( this._needUpdateMatrix ) {

            this.matrix.fromTRS( this._position.raw, this._quaternion.raw, this._scale.raw );
            this._needUpdateMatrix = false;

        }

        return this;

    },

    updateNormalMatrix() {

        Matrix4.normalMat3( this.normMat, this.worldMatrix.raw );
        return this;

    },

    updateDirection() {

        Matrix4.transformVec4( this.forward, this.worldMatrix.raw, [ 0, 0, 1, 0 ] );
        Matrix4.transformVec4( this.up, this.worldMatrix.raw, [ 0, 1, 0, 0 ] );
        Matrix4.transformVec4( this.right, this.worldMatrix.raw, [ 1, 0, 0, 0 ] );
        return this;

    },

    copyToWorldMatrix() {

        Matrix4.copy( this.worldMatrix.raw, this.matrix.raw );
        return this;

    },

    getMatrix() {

        return this.matrix.raw;

    },

    getWorldMatrix() {

        return this.worldMatrix.raw;

    },

    getNormalMatrix() {

        return this.normMat;

    },

    reset() {

        this._position.set( 0, 0, 0 );
        this._scale.set( 1, 1, 1 );
        this._rotation.set( 0, 0, 0 );
        this._quaternion.set( 0, 0, 0, 1 );

    },

    updateEuler: ( function () {

        const mat4 = new Matrix4();

        return function updateEular() {

            mat4.reset().applyQuaternion( this._quaternion );
            this._rotation.setFromRotationMatrix( mat4.raw );

        };

    }() ),

    updateQuaternion() {

        this._quaternion.setFromEuler( ...this.rotation );

    },

    setScale( ...args ) {

        if ( args.length === 1 ) {

            if ( args[ 0 ] instanceof Vector3 )
                return this.setScale( ...args[ 0 ].getArray() );

            if ( ( Array.isArray( args[ 0 ] ) || isArrayBuffer( args[ 0 ] ) ) && args[ 0 ].length === 3 )
                return this.setScale( ...args[ 0 ] );

        } else if ( args.length === 3 ) {

            this._scale.set( ...args );
            this._needUpdateMatrix = true;
            this.needUpdateWorldMatrix = true;

        }

        return this;

    },

    setPosition( ...args ) {

        if ( args.length === 1 ) {

            if ( args[ 0 ] instanceof Vector3 )
                return this.setPosition( ...args[ 0 ].getArray() );

            if ( ( Array.isArray( args[ 0 ] ) || isArrayBuffer( args[ 0 ] ) ) && args[ 0 ].length === 3 )
                return this.setPosition( ...args[ 0 ] );

        } else if ( args.length === 3 ) {

            this._position.set( ...args );
            this._needUpdateMatrix = true;
            this.needUpdateWorldMatrix = true;

        }

        return this;

    },

    setRotation( ...args ) {

        if ( args.length === 1 ) {

            if ( args[ 0 ] instanceof Vector3 )
                return this.setRotation( ...args[ 0 ].getArray() );

            if ( ( Array.isArray( args[ 0 ] ) || isArrayBuffer( args[ 0 ] ) ) && args[ 0 ].length === 3 )
                return this.setRotation( ...args[ 0 ] );

        } else if ( args.length === 3 ) {

            this._rotation.set( ...args );
            this.updateQuaternion();
            this._needUpdateMatrix = true;
            this.needUpdateWorldMatrix = true;

        }

        return this;

    },

    setQuaternion( ...args ) {

        if ( args.length === 1 ) {

            if ( args[ 0 ] instanceof Quaternion )
                return this.setQuaternion( ...( args[ 0 ].getArray() ) );

            if ( ( Array.isArray( args[ 0 ] ) || isArrayBuffer( args[ 0 ] ) ) && args[ 0 ].length === 4 )
                return this.setQuaternion( ...args[ 0 ] );

        } else if ( args.length === 4 ) {

            this._quaternion.set( ...args );
            this.updateEuler();
            this._needUpdateMatrix = true;
            this.needUpdateWorldMatrix = true;

        }

        return this;

    },

    getVec3Position() {

        return this._position;

    },

    clone() {

        const transform = new Transform();
        transform.position = this.position;
        transform.quaternion = this.quaternion;
        transform.scale = this.scale;
        return transform;

    },

} );

function isWebGL2( gl ) {

    return !! gl.texStorage2D;

}

const glEnumToString = ( function () {

    const haveEnumsForType = {};
    const enums = {};

    function addEnums( gl ) {

        const type = gl.constructor.name;
        if ( ! haveEnumsForType[ type ] ) {

            /* eslint-disable */
            for ( const key in gl )
                if ( typeof gl[ key ] === 'number' ) {

                    const existing = enums[ gl[ key ] ];
                    enums[ gl[ key ] ] = existing ? `${existing} | ${key}` : key;

                }
            /* eslint-enable */
            haveEnumsForType[ type ] = true;

        }

    }

    return function ( gl, value ) {

        addEnums( gl );
        return enums[ value ] || ( `0x${value.toString( 16 )}` );

    };

}() );

function getHTMLElementSrc( id ) {

    const ele = document.getElementById( id );

    if ( ! ele || ele.textContent === '' )
        throw new Error( `${id} shader element does not exist or have text.` );

    const idx = ele.textContent.indexOf( '#version 300 es' );
    return ele.textContent.slice( idx );

}

function addLineNum( str ) {

    const lines = str.split( '\n' );
    const limitLength = ( lines.length + 1 ).toString().length + 6;
    let prefix;
    return lines.map( ( line, index ) => {

        prefix = `0:${index + 1}`;
        if ( prefix.length >= limitLength )
            return prefix.substring( 0, limitLength ) + line;

        for ( let i = 0; i < limitLength - prefix.length; i ++ )
            prefix += ' ';

        return prefix + line;

    } ).join( '\n' );

}

function createShader( gl, src, type ) {

    const shader = gl.createShader( type );
    gl.shaderSource( shader, src );
    gl.compileShader( shader );

    if ( ! gl.getShaderParameter( shader, gl.COMPILE_STATUS ) )
        throw new Error( `Error compiling shader: \n${addLineNum( src )} \n\n${gl.getShaderInfoLog( shader )}` );

    return shader;

}

function createProgram( gl, vs, fs, opts = {} ) {

    let vShader;
    let fShader;

    if ( typeof vs === 'string' && vs.length < 20 ) {

        const src = getHTMLElementSrc( vs );
        vShader = createShader( gl, src, gl.VERTEX_SHADER );

    } else if ( typeof vs === 'string' )
        vShader = createShader( gl, vs, gl.VERTEX_SHADER );

    if ( typeof fs === 'string' && fs.length < 20 ) {

        const src = getHTMLElementSrc( fs );
        fShader = createShader( gl, src, gl.FRAGMENT_SHADER );

    } else if ( typeof fs === 'string' )
        fShader = createShader( gl, fs, gl.FRAGMENT_SHADER );

    const prog = gl.createProgram();
    gl.attachShader( prog, vShader );
    gl.attachShader( prog, fShader );

    gl.bindAttribLocation( prog, ATTRIB_POSITION_LOC, ATTRIB_POSITION_NAME );
    gl.bindAttribLocation( prog, ATTRIB_NORMAL_LOC, ATTRIB_NORMAL_NAME );
    gl.bindAttribLocation( prog, ATTRIB_UV_LOC, ATTRIB_UV_NAME );
    gl.bindAttribLocation( prog, ATTRIB_BARYCENTRIC_LOC, ATTRIB_BARYCENTRIC_NAME );

    if ( opts.transformFeedbackVaryings ) {

        let varyings = opts.transformFeedbackVaryings;
        if ( ! Array.isArray( varyings ) )
            varyings = Object.keys( varyings );
        gl.transformFeedbackVaryings( prog, varyings, opts.transformFeedbackMode || gl.SEPARATE_ATTRIBS );

    }

    gl.linkProgram( prog );

    if ( ! gl.getProgramParameter( prog, gl.LINK_STATUS ) )
        throw new Error( `Error createing shader program.\n\n${gl.getProgramInfoLog( prog )}` );

    if ( opts.validateProgram === undefined || opts.validateProgram ) {

        gl.validateProgram( prog );
        if ( ! gl.getProgramParameter( prog, gl.VALIDATE_STATUS ) )
            throw new Error( `Error validating shader program.\n\n${gl.getProgramInfoLog( prog )}` );

    }

    gl.detachShader( prog, vShader );
    gl.detachShader( prog, fShader );
    gl.deleteShader( vShader );
    gl.deleteShader( fShader );

    return prog;

}


const FLOAT$1 = 0x1406;
const FLOAT_VEC2 = 0x8B50;
const FLOAT_VEC3 = 0x8B51;
const FLOAT_VEC4 = 0x8B52;
const INT$1 = 0x1404;
const INT_VEC2 = 0x8B53;
const INT_VEC3 = 0x8B54;
const INT_VEC4 = 0x8B55;
const BOOL = 0x8B56;
const BOOL_VEC2 = 0x8B57;
const BOOL_VEC3 = 0x8B58;
const BOOL_VEC4 = 0x8B59;
const FLOAT_MAT2 = 0x8B5A;
const FLOAT_MAT3 = 0x8B5B;
const FLOAT_MAT4 = 0x8B5C;
const SAMPLER_2D = 0x8B5E;
const SAMPLER_CUBE = 0x8B60;
const SAMPLER_3D = 0x8B5F;
const SAMPLER_2D_SHADOW = 0x8B62;
const FLOAT_MAT2x3 = 0x8B65; // eslint-disable-line
const FLOAT_MAT2x4 = 0x8B66; // eslint-disable-line
const FLOAT_MAT3x2 = 0x8B67; // eslint-disable-line
const FLOAT_MAT3x4 = 0x8B68; // eslint-disable-line
const FLOAT_MAT4x2 = 0x8B69; // eslint-disable-line
const FLOAT_MAT4x3 = 0x8B6A; // eslint-disable-line
const SAMPLER_2D_ARRAY = 0x8DC1;
const SAMPLER_2D_ARRAY_SHADOW = 0x8DC4;
const SAMPLER_CUBE_SHADOW = 0x8DC5;
const UNSIGNED_INT$1 = 0x1405;
const UNSIGNED_INT_VEC2 = 0x8DC6;
const UNSIGNED_INT_VEC3 = 0x8DC7;
const UNSIGNED_INT_VEC4 = 0x8DC8;
const INT_SAMPLER_2D = 0x8DCA;
const INT_SAMPLER_3D = 0x8DCB;
const INT_SAMPLER_CUBE = 0x8DCC;
const INT_SAMPLER_2D_ARRAY = 0x8DCF;
const UNSIGNED_INT_SAMPLER_2D = 0x8DD2;
const UNSIGNED_INT_SAMPLER_3D = 0x8DD3;
const UNSIGNED_INT_SAMPLER_CUBE = 0x8DD4;
const UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8DD7;

const TEXTURE_2D = 0x0DE1;
const TEXTURE_CUBE_MAP = 0x8513;
const TEXTURE_3D = 0x806F;
const TEXTURE_2D_ARRAY = 0x8C1A;


const typeMap = {};

function getBindPointForSamplerType( gl, type ) {

    return typeMap[ type ].bindPoint;

}

function floatSetter( gl, location ) {

    return function ( v ) {

        gl.uniform1f( location, v );

    };

}

function floatArraySetter( gl, location ) {

    return function ( v ) {

        gl.uniform1fv( location, v );

    };

}

function floatVec2Setter( gl, location ) {

    return function ( v ) {

        gl.uniform2fv( location, v );

    };

}

function floatVec3Setter( gl, location ) {

    return function ( v ) {

        gl.uniform3fv( location, v );

    };

}

function floatVec4Setter( gl, location ) {

    return function ( v ) {

        gl.uniform4fv( location, v );

    };

}

function intSetter( gl, location ) {

    return function ( v ) {

        gl.uniform1i( location, v );

    };

}

function intArraySetter( gl, location ) {

    return function ( v ) {

        gl.uniform1iv( location, v );

    };

}

function intVec2Setter( gl, location ) {

    return function ( v ) {

        gl.uniform2iv( location, v );

    };

}

function intVec3Setter( gl, location ) {

    return function ( v ) {

        gl.uniform3iv( location, v );

    };

}

function intVec4Setter( gl, location ) {

    return function ( v ) {

        gl.uniform4iv( location, v );

    };

}

function uintSetter( gl, location ) {

    return function ( v ) {

        gl.uniform1ui( location, v );

    };

}

function uintArraySetter( gl, location ) {

    return function ( v ) {

        gl.uniform1uiv( location, v );

    };

}

function uintVec2Setter( gl, location ) {

    return function ( v ) {

        gl.uniform2uiv( location, v );

    };

}

function uintVec3Setter( gl, location ) {

    return function ( v ) {

        gl.uniform3uiv( location, v );

    };

}

function uintVec4Setter( gl, location ) {

    return function ( v ) {

        gl.uniform4uiv( location, v );

    };

}

function floatMat2Setter( gl, location ) {

    return function ( v ) {

        gl.uniformMatrix2fv( location, false, v );

    };

}

function floatMat3Setter( gl, location ) {

    return function ( v ) {

        gl.uniformMatrix3fv( location, false, v );

    };

}

function floatMat4Setter( gl, location ) {

    return function ( v ) {

        gl.uniformMatrix4fv( location, false, v );

    };

}

function floatMat23Setter( gl, location ) {

    return function ( v ) {

        gl.uniformMatrix2x3fv( location, false, v );

    };

}

function floatMat32Setter( gl, location ) {

    return function ( v ) {

        gl.uniformMatrix3x2fv( location, false, v );

    };

}

function floatMat24Setter( gl, location ) {

    return function ( v ) {

        gl.uniformMatrix2x4fv( location, false, v );

    };

}

function floatMat42Setter( gl, location ) {

    return function ( v ) {

        gl.uniformMatrix4x2fv( location, false, v );

    };

}

function floatMat34Setter( gl, location ) {

    return function ( v ) {

        gl.uniformMatrix3x4fv( location, false, v );

    };

}

function floatMat43Setter( gl, location ) {

    return function ( v ) {

        gl.uniformMatrix4x3fv( location, false, v );

    };

}

function samplerSetter( gl, type, unit, location ) {

    const bindPoint = getBindPointForSamplerType( gl, type );
    return isWebGL2( gl ) ? function ( textureOrPair ) {

        let texture;
        let sampler;
        if ( textureOrPair instanceof WebGLTexture ) {

            texture = textureOrPair;
            sampler = null;

        } else {

            texture = textureOrPair.texture;
            sampler = textureOrPair.sampler;

        }
        gl.uniform1i( location, unit );
        gl.activeTexture( gl.TEXTURE0 + unit );
        gl.bindTexture( bindPoint, texture );
        gl.bindSampler( unit, sampler );

    } : function ( texture ) {

        gl.uniform1i( location, unit );
        gl.activeTexture( gl.TEXTURE0 + unit );
        gl.bindTexture( bindPoint, texture );

    };

}

function samplerArraySetter( gl, type, unit, location, size ) {

    const bindPoint = getBindPointForSamplerType( gl, type );
    const units = new Int32Array( size );
    for ( let ii = 0; ii < size; ++ ii )
        units[ ii ] = unit + ii;


    return isWebGL2( gl ) ? function ( textures ) {

        gl.uniform1iv( location, units );
        textures.forEach( ( textureOrPair, index ) => {

            gl.activeTexture( gl.TEXTURE0 + units[ index ] );
            let texture;
            let sampler;
            if ( textureOrPair instanceof WebGLTexture ) {

                texture = textureOrPair;
                sampler = null;

            } else {

                texture = textureOrPair.texture;
                sampler = textureOrPair.sampler;

            }
            gl.bindSampler( unit, sampler );
            gl.bindTexture( bindPoint, texture );

        } );

    } : function ( textures ) {

        gl.uniform1iv( location, units );
        textures.forEach( ( texture, index ) => {

            gl.activeTexture( gl.TEXTURE0 + units[ index ] );
            gl.bindTexture( bindPoint, texture );

        } );

    };

}

typeMap[ FLOAT$1 ] = {
    Type: Float32Array, size: 4, setter: floatSetter, arraySetter: floatArraySetter,
};
typeMap[ FLOAT_VEC2 ] = { Type: Float32Array, size: 8, setter: floatVec2Setter };
typeMap[ FLOAT_VEC3 ] = { Type: Float32Array, size: 12, setter: floatVec3Setter };
typeMap[ FLOAT_VEC4 ] = { Type: Float32Array, size: 16, setter: floatVec4Setter };
typeMap[ INT$1 ] = {
    Type: Int32Array, size: 4, setter: intSetter, arraySetter: intArraySetter,
};
typeMap[ INT_VEC2 ] = { Type: Int32Array, size: 8, setter: intVec2Setter };
typeMap[ INT_VEC3 ] = { Type: Int32Array, size: 12, setter: intVec3Setter };
typeMap[ INT_VEC4 ] = { Type: Int32Array, size: 16, setter: intVec4Setter };
typeMap[ UNSIGNED_INT$1 ] = {
    Type: Uint32Array, size: 4, setter: uintSetter, arraySetter: uintArraySetter,
};
typeMap[ UNSIGNED_INT_VEC2 ] = { Type: Uint32Array, size: 8, setter: uintVec2Setter };
typeMap[ UNSIGNED_INT_VEC3 ] = { Type: Uint32Array, size: 12, setter: uintVec3Setter };
typeMap[ UNSIGNED_INT_VEC4 ] = { Type: Uint32Array, size: 16, setter: uintVec4Setter };
typeMap[ BOOL ] = {
    Type: Uint32Array, size: 4, setter: intSetter, arraySetter: intArraySetter,
};
typeMap[ BOOL_VEC2 ] = { Type: Uint32Array, size: 8, setter: intVec2Setter };
typeMap[ BOOL_VEC3 ] = { Type: Uint32Array, size: 12, setter: intVec3Setter };
typeMap[ BOOL_VEC4 ] = { Type: Uint32Array, size: 16, setter: intVec4Setter };
typeMap[ FLOAT_MAT2 ] = { Type: Float32Array, size: 16, setter: floatMat2Setter };
typeMap[ FLOAT_MAT3 ] = { Type: Float32Array, size: 36, setter: floatMat3Setter };
typeMap[ FLOAT_MAT4 ] = { Type: Float32Array, size: 64, setter: floatMat4Setter };
typeMap[ FLOAT_MAT2x3 ] = { Type: Float32Array, size: 24, setter: floatMat23Setter };
typeMap[ FLOAT_MAT2x4 ] = { Type: Float32Array, size: 32, setter: floatMat24Setter };
typeMap[ FLOAT_MAT3x2 ] = { Type: Float32Array, size: 24, setter: floatMat32Setter };
typeMap[ FLOAT_MAT3x4 ] = { Type: Float32Array, size: 48, setter: floatMat34Setter };
typeMap[ FLOAT_MAT4x2 ] = { Type: Float32Array, size: 32, setter: floatMat42Setter };
typeMap[ FLOAT_MAT4x3 ] = { Type: Float32Array, size: 48, setter: floatMat43Setter };
typeMap[ SAMPLER_2D ] = {
    Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D,
};
typeMap[ SAMPLER_CUBE ] = {
    Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP,
};
typeMap[ SAMPLER_3D ] = {
    Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_3D,
};
typeMap[ SAMPLER_2D_SHADOW ] = {
    Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D,
};
typeMap[ SAMPLER_2D_ARRAY ] = {
    Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY,
};
typeMap[ SAMPLER_2D_ARRAY_SHADOW ] = {
    Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY,
};
typeMap[ SAMPLER_CUBE_SHADOW ] = {
    Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP,
};
typeMap[ INT_SAMPLER_2D ] = {
    Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D,
};
typeMap[ INT_SAMPLER_3D ] = {
    Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_3D,
};
typeMap[ INT_SAMPLER_CUBE ] = {
    Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP,
};
typeMap[ INT_SAMPLER_2D_ARRAY ] = {
    Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY,
};
typeMap[ UNSIGNED_INT_SAMPLER_2D ] = {
    Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D,
};
typeMap[ UNSIGNED_INT_SAMPLER_3D ] = {
    Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_3D,
};
typeMap[ UNSIGNED_INT_SAMPLER_CUBE ] = {
    Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP,
};
typeMap[ UNSIGNED_INT_SAMPLER_2D_ARRAY ] = {
    Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY,
};

function floatAttribSetter( gl, index ) {

    return function ( b ) {

        gl.bindBuffer( gl.ARRAY_BUFFER, b.buffer );
        gl.enableVertexAttribArray( index );
        gl.vertexAttribPointer( index, b.numComponents || b.size, b.type || gl.FLOAT, b.normalize || false, b.stride || 0, b.offset || 0 );

        if ( b.divisor !== undefined )
            gl.vertexAttribDivisor( index, b.divisor );

    };

}

function intAttribSetter( gl, index ) {

    return function ( b ) {

        gl.bindBuffer( gl.ARRAY_BUFFER, b.buffer );
        gl.enableVertexAttribArray( index );
        gl.vertexAttribIPointer( index, b.numComponents || b.size, b.type || gl.INT, b.stride || 0, b.offset || 0 );

        if ( b.divisor !== undefined )
            gl.vertexAttribDivisor( index, b.divisor );

    };

}

function matAttribSetter( gl, index, typeInfo ) {

    const defaultSize = typeInfo.size;
    const count = typeInfo.count;

    return function ( b ) {

        gl.bindBuffer( gl.ARRAY_BUFFER, b.buffer );
        const numComponents = b.size || b.numComponents || defaultSize;
        const size = numComponents / count;
        const type = b.type || gl.FLOAT;
        const typeInfoNew = typeMap[ type ];
        const stride = typeInfoNew.size * numComponents;
        const normalize = b.normalize || false;
        const offset = b.offset || 0;
        const rowOffset = stride / count;
        for ( let i = 0; i < count; ++ i ) {

            gl.enableVertexAttribArray( index + i );
            gl.vertexAttribPointer( index + i, size, type, normalize, stride, offset + ( rowOffset * i ) );

            if ( b.divisor !== undefined )
                gl.vertexAttribDivisor( index + i, b.divisor );

        }

    };

}

const attrTypeMap = {};
attrTypeMap[ FLOAT$1 ] = { size: 4, setter: floatAttribSetter };
attrTypeMap[ FLOAT_VEC2 ] = { size: 8, setter: floatAttribSetter };
attrTypeMap[ FLOAT_VEC3 ] = { size: 12, setter: floatAttribSetter };
attrTypeMap[ FLOAT_VEC4 ] = { size: 16, setter: floatAttribSetter };
attrTypeMap[ INT$1 ] = { size: 4, setter: intAttribSetter };
attrTypeMap[ INT_VEC2 ] = { size: 8, setter: intAttribSetter };
attrTypeMap[ INT_VEC3 ] = { size: 12, setter: intAttribSetter };
attrTypeMap[ INT_VEC4 ] = { size: 16, setter: intAttribSetter };
attrTypeMap[ UNSIGNED_INT$1 ] = { size: 4, setter: intAttribSetter };
attrTypeMap[ UNSIGNED_INT_VEC2 ] = { size: 8, setter: intAttribSetter };
attrTypeMap[ UNSIGNED_INT_VEC3 ] = { size: 12, setter: intAttribSetter };
attrTypeMap[ UNSIGNED_INT_VEC4 ] = { size: 16, setter: intAttribSetter };
attrTypeMap[ BOOL ] = { size: 4, setter: intAttribSetter };
attrTypeMap[ BOOL_VEC2 ] = { size: 8, setter: intAttribSetter };
attrTypeMap[ BOOL_VEC3 ] = { size: 12, setter: intAttribSetter };
attrTypeMap[ BOOL_VEC4 ] = { size: 16, setter: intAttribSetter };
attrTypeMap[ FLOAT_MAT2 ] = { size: 4, setter: matAttribSetter, count: 2 };
attrTypeMap[ FLOAT_MAT3 ] = { size: 9, setter: matAttribSetter, count: 3 };
attrTypeMap[ FLOAT_MAT4 ] = { size: 16, setter: matAttribSetter, count: 4 };

function isBuiltIn( info ) {

    const name = info.name;
    return name.startsWith( 'gl_' ) || name.startsWith( 'webgl_' );

}

function createAttributesSetters( gl, program ) {

    const attribSetters = {};

    const numAttribs = gl.getProgramParameter( program, gl.ACTIVE_ATTRIBUTES );
    for ( let i = 0; i < numAttribs; i ++ ) {

        const attribInfo = gl.getActiveAttrib( program, i );
        if ( isBuiltIn( attribInfo ) )
            continue; // eslint-disable-line
        const index = gl.getAttribLocation( program, attribInfo.name );
        const typeInfo = attrTypeMap[ attribInfo.type ];
        const setter = typeInfo.setter( gl, index, typeInfo );
        setter.location = index;
        attribSetters[ attribInfo.name ] = setter;

    }

    return attribSetters;

}

function setAttributes( setters, buffers ) {

    Object.keys( buffers ).forEach( ( attrib ) => {

        const setter = setters[ attrib ];
        if ( setter )
            setter( buffers[ attrib ] );

    } );

}

function createUniformSetters( gl, program ) {

    let textureUnit = 0;

    function createUnifromSetter( uniformInfo ) {

        const location = gl.getUniformLocation( program, uniformInfo.name );
        const isArray = ( uniformInfo.size > 1 && uniformInfo.name.substr( - 3 ) === '[0]' );
        const type = uniformInfo.type;
        const typeInfo = typeMap[ type ];
        if ( ! typeInfo )
            throw new Error( `unknown type: 0x${type.toString( 16 )}` );
        let setter;
        if ( typeInfo.bindPoint ) {

            const uint = textureUnit;
            textureUnit += uniformInfo.size;
            if ( isArray )
                setter = typeInfo.arraySetter( gl, type, uint, location, uniformInfo.size );
            else
                setter = typeInfo.setter( gl, type, uint, location, uniformInfo.size );

        } else if ( typeInfo.arraySetter && isArray )
            setter = typeInfo.arraySetter( gl, location );
        else
            setter = typeInfo.setter( gl, location );

        setter.location = location;
        return setter;

    }

    const uniformSetters = {};
    const numUnifroms = gl.getProgramParameter( program, gl.ACTIVE_UNIFORMS );

    for ( let i = 0; i < numUnifroms; i ++ ) {

        const uniformInfo = gl.getActiveUniform( program, i );
        if ( isBuiltIn( uniformInfo ) )
            continue; // eslint-disable-line
        let name = uniformInfo.name;
        if ( name.substr( - 3 ) === '[0]' )
            name = name.substr( 0, name.length - 3 );

        const setter = createUnifromSetter( uniformInfo );
        uniformSetters[ name ] = setter;

    }

    const keyMap = {};
    uniformSetters.keyMap = keyMap;
    Object.keys( uniformSetters ).forEach( ( key ) => {

        if ( key.indexOf( UNIFORM_PREFIX ) === 0 )
            keyMap[ key.replace( UNIFORM_PREFIX, '' ) ] = key;

    } );

    return uniformSetters;

}

function setUniforms( setters, ...unifroms ) {

    const numArgs = unifroms.length;
    for ( let i = 0; i < numArgs; i ++ ) {

        const vals = unifroms[ i ];
        if ( Array.isArray( vals ) ) {

            const numVals = vals.length;
            for ( let j = 0; j < numVals; j ++ )
                setUniforms( setters, vals[ j ] );

        } else
            Object.keys( vals ).forEach( ( name ) => {

                let setter = setters[ name ];
                if ( setter === undefined && Object.prototype.hasOwnProperty.call( setters.keyMap, name ) )
                    setter = setters[ setters.keyMap[ name ] ];

                if ( setter )
                    setter( vals[ name ] );

            } );

    }

}

function createUniformBlockSpec( gl, program ) {

    const numUnifroms = gl.getProgramParameter( program, gl.ACTIVE_UNIFORMS );
    const uniformData = [];
    const uniformIndices = [];

    for ( let i = 0; i < numUnifroms; i ++ ) {

        uniformIndices.push( i );
        uniformData.push( {} );
        const uniformInfo = gl.getActiveUniform( program, i );
        if ( isBuiltIn( uniformInfo ) )
            break;
        uniformData[ i ].name = uniformInfo.name;

    }

    [
        [ 'UNIFORM_TYPE', 'type' ],
        [ 'UNIFORM_SIZE', 'size' ],
        [ 'UNIFORM_BLOCK_INDEX', 'blockIndex' ],
        [ 'UNIFORM_OFFSET', 'offset' ],
    ].forEach( ( pair ) => {

        const gname = pair[ 0 ];
        const key = pair[ 1 ];
        gl.getActiveUniforms( program, uniformIndices, gl[ gname ] ).forEach( ( value, idx ) => {

            uniformData[ idx ][ key ] = value;

        } );

    } );

    const blockSpecs = {};

    const numUniformBlock = gl.getProgramParameter( program, gl.ACTIVE_UNIFORM_BLOCKS );
    for ( let i = 0; i < numUniformBlock; i ++ ) {

        const name = gl.getActiveUniformBlockName( program, i );
        const blockSpec = {
            index: i,
            usedByVertexShader: gl.getActiveUniformBlockParameter( program, i, gl.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER ),
            usedByFragmentShader: gl.getActiveUniformBlockParameter( program, i, gl.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER ),
            size: gl.getActiveUniformBlockParameter( program, i, gl.UNIFORM_BLOCK_DATA_SIZE ),
            uniformIndices: gl.getActiveUniformBlockParameter( program, i, gl.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES ),
        };

        blockSpec.used = blockSpec.usedByVertexShader || blockSpec.usedByFragmentShader;
        blockSpecs[ name ] = blockSpec;

    }

    return {
        blockSpecs,
        uniformData,
    };

}

const arraySuffixRE = /\[\d+\]\.$/;

function createUniformBlockInfo( gl, program, uniformBlockSpec, blockName ) {

    const blockSpecs = uniformBlockSpec.blockSpecs;
    const uniformData = uniformBlockSpec.uniformData;
    const blockSpec = blockSpecs[ blockName ];
    if ( ! blockSpec ) {

        console.warn( `no uniform block object named: ${blockName}` );
        return {
            name: blockName,
            uniforms: {},
        };

    }

    const array = new ArrayBuffer( blockSpec.size );
    const buffer = gl.createBuffer();
    const uniformBufferIndex = blockSpec.index;
    gl.bindBuffer( gl.UNIFORM_BUFFER, buffer );
    gl.uniformBlockBinding( program, blockSpec.index, uniformBufferIndex );

    let prefix = `${blockName}.`;
    if ( arraySuffixRE.test( prefix ) )
        prefix = prefix.replace( arraySuffixRE, '.' );

    const uniforms = {};
    blockSpec.uniformIndices.forEach( ( uniformidx ) => {

        const data = uniformData[ uniformidx ];
        const typeInfo = typeMap[ data.type ];
        const Type = typeInfo.Type;
        const length = data.size * typeInfo.size;
        let name = data.name;
        if ( name.substr( 0, prefix.length ) === prefix )
            name = name.substr( prefix.length );
        uniforms[ name ] = new Type( array, data.offset, length / Type.BYTES_PER_ELEMENT );

    } );

    return {
        name: blockName,
        array,
        typedArray: new Float32Array( array ),
        buffer,
        uniforms,
    };

}

function createUniformBlockInfos( gl, program, uniformBlockSpec ) {

    const uboInfos = {};
    Object.keys( uniformBlockSpec.blockSpecs ).forEach( ( blockName ) => {

        uboInfos[ blockName ] = createUniformBlockInfo( gl, program, uniformBlockSpec, blockName );

    } );

    return uboInfos;

}

function bindUniformBlock( gl, uniformBlockSpec, uniformBlcokInfo ) {

    const blockSpec = uniformBlockSpec.blockSpecs[ uniformBlcokInfo.name ];
    if ( blockSpec ) {

        const bufferBindIndex = blockSpec.index;
        gl.bindBufferRange( gl.UNIFORM_BUFFER, bufferBindIndex, uniformBlcokInfo.buffer, uniformBlcokInfo.offset || 0, uniformBlcokInfo.array.byteLength );

        return true;

    }
    return false;

}

function setUniformBlock( gl, uniformBlockSpec, uniformBlockInfo ) {

    if ( bindUniformBlock( gl, uniformBlockSpec, uniformBlockInfo ) )
        gl.bufferData( gl.UNIFORM_BUFFER, uniformBlockInfo.array, gl.DYNAMIC_DRAW );

}

function setBlockUniforms( uniformBlockInfo, values ) {

    const uniforms = uniformBlockInfo.uniforms;
    let changed = false;
    Object.keys( values ).forEach( ( name ) => {

        const array = uniforms[ name ];

        if ( array ) {

            const value = values[ name ];
            if ( value.length )
                array.set( value );
            else
                array[ 0 ] = value;

            changed = true;

        }

    } );

    return changed;

}

function setBlockUniformsForProgram( gl, uniformBlockSpec, uniformBlockInfos, values ) {

    Object.keys( uniformBlockInfos ).forEach( ( blockName ) => {

        if ( setBlockUniforms( uniformBlockInfos[ blockName ], values ) )
            setUniformBlock( gl, uniformBlockSpec, uniformBlockInfos[ blockName ] );
        else
            bindUniformBlock( gl, uniformBlockSpec, uniformBlockInfos[ blockName ] );

    } );

}

function createTransformFeedbackInfo( gl, program ) {

    const info = {};
    const numVaryings = gl.getProgramParameter( program, gl.TRANSFORM_FEEDBACK_VARYINGS );
    for ( let i = 0; i < numVaryings; i ++ ) {

        const varying = gl.getTransformFeedbackVarying( program, i );
        info[ varying.name ] = {
            index: i,
            type: varying.type,
            size: varying.size,
        };

    }

    return info;

}

function bindTransformFeedbackInfo( gl, transformfeedbaclnfo, bufferInfo ) {

    if ( bufferInfo.attribs )
        bufferInfo = bufferInfo.attribs; // eslint-disable-line

    Object.keys( bufferInfo ).forEach( ( name ) => {

        const varying = transformfeedbaclnfo[ name ];
        if ( varying ) {

            const buf = bufferInfo[ name ];
            if ( buf.offset )
                gl.bindBufferRange( gl.TRANSFORM_FEEDBACK_BUFFER, varying.index, buf.buffer, buf.offset, buf.size );
            else
                gl.bindBufferBase( gl.TRANSFORM_FEEDBACK_BUFFER, varying.index, buf.buffer );

        }

    } );

}

function unbindTransformFeedbackInfo( gl, transformfeedbaclnfo, bufferInfo ) {

    if ( bufferInfo.attribs )
        bufferInfo = bufferInfo.attribs; // eslint-disable-line

    Object.keys( bufferInfo ).forEach( ( name ) => {

        const varying = transformfeedbaclnfo[ name ];
        if ( varying )
            gl.bindBufferBase( gl.TRANSFORM_FEEDBACK_BUFFER, varying.index, null );

    } );

}

function createTransformFeedback( gl, program, transformfeedbaclnfo, bufferInfo ) {

    const tf = gl.createTransformFeedback();
    gl.bindTransformFeedback( gl.TRANSFORM_FEEDBACK, tf );
    gl.useProgram( program );
    bindTransformFeedbackInfo( gl, transformfeedbaclnfo, bufferInfo );
    gl.bindTransformFeedback( gl.TRANSFORM_FEEDBACK, null );
    unbindTransformFeedbackInfo( gl, transformfeedbaclnfo, bufferInfo );

    return tf;

}

function createVertexArray( gl, bufferInfo, program, attribSetters ) {

    const vao = gl.createVertexArray();
    gl.bindVertexArray( vao );
    setAttributes( attribSetters || createAttributesSetters( gl, program ), bufferInfo.attribs );
    if ( bufferInfo.indices )
        gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, bufferInfo.indices );

    gl.bindBuffer( gl.ARRAY_BUFFER, null );
    gl.bindVertexArray( null );
    return vao;

}

function isIndices( name ) {

    return name === 'index' || name === 'indices';

}

function getArray( array ) {

    return array.length ? array : array.data;

}

function getTypedArray$1( array, name ) {

    if ( isArrayBuffer( array ) ) return array;

    if ( isIndices( name ) ) return new Uint16Array( array );

    return new Float32Array( array );

}

const colorRE = /color|colour/i;
const textureRE = /uv|coord/i;

function guessNumComponentsFromName( name, length ) {

    let numComponents;
    if ( colorRE.test( name ) ) numComponents = 4;
    else if ( textureRE.test( name ) ) numComponents = 2;
    else numComponents = 3;

    if ( length % numComponents > 0 )
        throw new Error( `Can not guess numComponents for attribute ${name}.` );

    return numComponents;

}

function getNumComponents( array, name ) {

    return array.numComponents || array.size || guessNumComponentsFromName( name, getArray( array ).length );

}

function createBufferFromTypedArray( gl, typedArray, type = gl.ARRAY_BUFFER, drawType = gl.STATIC_DRAW ) {

    if ( typedArray instanceof WebGLBuffer )
        return typedArray;

    const buffer = gl.createBuffer();
    gl.bindBuffer( type, buffer );
    gl.bufferData( type, typedArray, drawType );
    return buffer;

}

const positionNames = [ 'position', 'positions', 'a_position' ];

function getNumElementsFromNonIndicedArrays( arrays ) {

    let key;
    let i;
    for ( i = 0; i < positionNames.length; i ++ )
        if ( positionNames[ i ] in arrays ) {

            key = positionNames[ i ];
            break;

        }

    if ( i === positionNames.length ) [ key ] = Object.keys( arrays );
    const array = arrays[ key ];
    const dataArray = getArray( array );
    return dataArray.length / getNumComponents( array, key );

}

function getBytesPerValueForGLType( gl, type ) {

    if (type === gl.BYTE)           return 1;  // eslint-disable-line
    if (type === gl.UNSIGNED_BYTE)  return 1;  // eslint-disable-line
    if (type === gl.SHORT)          return 2;  // eslint-disable-line
    if (type === gl.UNSIGNED_SHORT) return 2;  // eslint-disable-line
    if (type === gl.INT)            return 4;  // eslint-disable-line
    if (type === gl.UNSIGNED_INT)   return 4;  // eslint-disable-line
    if (type === gl.FLOAT)          return 4;  // eslint-disable-line
    return 0;

}

function getNumElementsFromAttribs( gl, attribs ) {

    let key;
    let i;
    for ( i = 0; i < positionNames.length; i ++ )
        if ( positionNames[ i ] in attribs ) {

            key = positionNames[ i ];
            break;

        }

    if ( i === positionNames.length ) [ key ] = Object.keys( attribs );
    const attrib = attribs[ key ];
    gl.bindBuffer( gl.ARRAY_BUFFER, attrib.buffer );
    const numBytes = gl.getBufferParameter( gl.ARRAY_BUFFER, gl.BUFFER_SIZE );
    gl.bindBuffer( gl.ARRAY_BUFFER, null );

    let numElements;
    if ( attrib.stride !== 0 )
        numElements = Math.floor( ( numBytes - attrib.offset ) / attrib.stride ); // need consider padding end
    else {

        const bytesPerValue = getBytesPerValueForGLType( gl, attrib.type );
        const totalElements = ( numBytes - attrib.offset ) / bytesPerValue;
        const numComponents = attrib.numComponents || attrib.size;
        numElements = totalElements / numComponents;
        if ( numElements % 1 !== 0 )
            throw new Error( `numComponent ${numComponents} not correct for length ${totalElements}` );

    }

    return numElements;

}

function createBufferFromArray( gl, array, name ) {

    const type = name === 'indices' ? gl.ELEMENT_ARRAY_BUFFER : gl.ARRAY_BUFFER;
    const typedArray = getTypedArray$1( getArray( array ), name );
    return createBufferFromTypedArray( gl, typedArray, type, array.drawType );

}

function createBuffersFromArrays( gl, arrays ) {

    const buffers = {};

    Object.keys( arrays ).forEach( ( key ) => {

        buffers[ key ] = createBufferFromArray( gl, arrays[ key ], key );

    } );

    if ( arrays.indices )
        buffers.numElements = arrays.indices.length;
    else
        buffers.numElements = getNumElementsFromNonIndicedArrays( arrays );

    return buffers;

}

function createAttribsFromArrays( gl, arrays ) {

    const attribs = {};

    Object.keys( arrays ).forEach( ( key ) => {

        if ( ! isIndices( key ) ) {

            const array = arrays[ key ];
            const attribName = array.name || array.attrib || array.attribName || key;
            const normalization = array.normalize !== undefined ? array.normalize : false;
            let buffer;
            let type;
            let numComponents;
            if ( typeof array === 'number' || typeof array.data === 'number' ) {

                const numEle = array.data || array;
                const arrayType = array.type || Float32Array;
                const numBytes = numEle * arrayType.BYTES_PER_ELEMENT;
                type = getGLTypeFromTypedArrayType( arrayType );
                numComponents = array.numComponents || array.size || guessNumComponentsFromName( key, numEle );
                buffer = gl.createBuffer();
                gl.bindBuffer( gl.ARRAY_BUFFER, buffer );
                gl.bufferData( gl.ARRAY_BUFFER, numBytes, array.drawType || gl.STATIC_DRAW );

            } else {

                const typedArray = getTypedArray$1( getArray( array ), key );
                buffer = array.buffer || createBufferFromTypedArray( gl, typedArray, gl.ARRAY_BUFFER, array.drawType );
                type = getGLTypeFromTypedArray( typedArray );
                numComponents = getNumComponents( array, key );
                array.numComponents = numComponents;

            }

            attribs[ attribName ] = {
                buffer,
                numComponents,
                type,
                normalize: normalization,
                stride: array.stride || 0,
                offset: array.offset || 0,
                divisor: typeof array.divisor === 'undefined' ? undefined : array.divisor,
                drawType: array.drawType || gl.STATIC_DRAW,
            };

        }

    } );

    return attribs;

}

function createBufferInfoFromArrays( gl, arrays ) {

    const bufferInfo = {
        attribs: createAttribsFromArrays( gl, arrays ),
    };

    const { indices } = arrays;
    if ( indices ) {

        const newIndices = getTypedArray$1( getArray( indices ), 'indices' );
        bufferInfo.indices = createBufferFromTypedArray( gl, newIndices, gl.ELEMENT_ARRAY_BUFFER );
        bufferInfo.numElements = newIndices.length;
        bufferInfo.elementType = getGLTypeFromTypedArray( newIndices );

    } else
        bufferInfo.numElements = getNumElementsFromAttribs( gl, bufferInfo.attribs );

    return bufferInfo;

}

function setTypedArrayToBuffer( gl, buffer, typedArray, drawType = gl.DYNAMIC_DRAW ) {

    gl.bindBuffer( gl.ARRAY_BUFFER, buffer );
    gl.bufferData( gl.ARRAY_BUFFER, typedArray, drawType );

}

function Matrix3() {

    this.raw = Matrix3.identity();

}

Object.assign( Matrix3, {

    identity() {

        const a = new Float32Array( 9 );
        a[ 0 ] = 1;
        a[ 4 ] = 1;
        a[ 8 ] = 1;

        return a;

    },

    equals: ( function () {

        const EPS = 0.000001;

        return function equals( a, b ) {

            const a0 = a[ 0 ];
            const a1 = a[ 1 ];
            const a2 = a[ 2 ];
            const a3 = a[ 3 ];
            const a4 = a[ 4 ];
            const a5 = a[ 5 ];
            const a6 = a[ 6 ];
            const a7 = a[ 7 ];
            const a8 = a[ 8 ];

            const b0 = b[ 0 ];
            const b1 = b[ 1 ];
            const b2 = b[ 2 ];
            const b3 = b[ 3 ];
            const b4 = b[ 4 ];
            const b5 = b[ 5 ];
            const b6 = b[ 6 ];
            const b7 = b[ 7 ];
            const b8 = b[ 8 ];

            return ( Math.abs( a0 - b0 ) <= EPS * Math.max( 1.0, Math.abs( a0 ), Math.abs( b0 ) ) &&
              Math.abs( a1 - b1 ) <= EPS * Math.max( 1.0, Math.abs( a1 ), Math.abs( b1 ) ) &&
              Math.abs( a2 - b2 ) <= EPS * Math.max( 1.0, Math.abs( a2 ), Math.abs( b2 ) ) &&
              Math.abs( a3 - b3 ) <= EPS * Math.max( 1.0, Math.abs( a3 ), Math.abs( b3 ) ) &&
              Math.abs( a4 - b4 ) <= EPS * Math.max( 1.0, Math.abs( a4 ), Math.abs( b4 ) ) &&
              Math.abs( a5 - b5 ) <= EPS * Math.max( 1.0, Math.abs( a5 ), Math.abs( b5 ) ) &&
              Math.abs( a6 - b6 ) <= EPS * Math.max( 1.0, Math.abs( a6 ), Math.abs( b6 ) ) &&
              Math.abs( a7 - b7 ) <= EPS * Math.max( 1.0, Math.abs( a7 ), Math.abs( b7 ) ) &&
              Math.abs( a8 - b8 ) <= EPS * Math.max( 1.0, Math.abs( a8 ), Math.abs( b8 ) ) );

        };

    }() ),

    clone( a ) {

        const out = new Float32Array( 9 );
        out[ 0 ] = a[ 0 ];
        out[ 1 ] = a[ 1 ];
        out[ 2 ] = a[ 2 ];
        out[ 3 ] = a[ 3 ];
        out[ 4 ] = a[ 4 ];
        out[ 5 ] = a[ 5 ];
        out[ 6 ] = a[ 6 ];
        out[ 7 ] = a[ 7 ];
        out[ 8 ] = a[ 8 ];

        return out;

    },

} );

function Shader( gl, vs, fs, opts ) {

    this.cullFace = true;
    this.blend = false;
    this.depth = true;
    this.sampleBlend = false;
    this.shaders = [ vs, fs ];
    this.program = null;
    this.programs = [];
    this.programMap = [];
    this.gl = gl;
    this.opts = opts;
    this.camera = null;
    this.currentUniformObj = {};
    this.uniformObj = {};
    this.programInfos = [];
    this.uniformObjs = [];
    this._programUpdated = false;

    this.setDefines();

}

function equalSign( a, b ) {

    return a === b;

}

Object.assign( Shader.prototype, {

    activate() {

        if ( Shader.currentProgram !== this.program ) {

            this.gl.useProgram( this.program );
            Shader.currentProgram = this.program;

        }
        return this;

    },

    deactivate() {

        this.gl.useProgram( null );
        Shader.currentProgram = null;
        return this;

    },

    setUniformObjProp( prop, value, equalsFun = equalSign ) {

        if ( this.currentUniformObj[ prop ] === undefined || ! equalsFun( this.currentUniformObj[ prop ], value ) ) {

            this.uniformObj[ prop ] = value;
            this.currentUniformObj[ prop ] = value;

            if ( equalsFun === Matrix4.equals )
                this.currentUniformObj[ prop ] = Matrix4.clone( value );
            else if ( equalsFun === Matrix3.equals )
                this.currentUniformObj[ prop ] = Matrix3.clone( value );
            else if ( Array.isArray( value ) )
                this.currentUniformObj[ prop ] = value.slice();
            else if ( equalsFun === PMath.arrayEquals )
                this.currentUniformObj[ prop ] = PMath.arrayClone( value );

        }

    },

    setUniformObj( obj ) {

        Object.keys( obj ).forEach( ( prop ) => {

            if ( obj[ prop ].length === 16 && typeof obj[ prop ][ 0 ] === 'number' )
                this.setUniformObjProp( prop, obj[ prop ], Matrix4.equals );
            else if ( obj[ prop ].length === 9 && typeof obj[ prop ][ 0 ] === 'number' )
                this.setUniformObjProp( prop, obj[ prop ], Matrix3.equals );
            else if ( obj[ prop ].length && typeof obj[ prop ][ 0 ] === 'number' )
                this.setUniformObjProp( prop, obj[ prop ], PMath.arrayEquals );
            else
                this.setUniformObjProp( prop, obj[ prop ] );

        } );
        return this;

    },

    setUniforms( uniforms ) {

        setUniforms( this.uniformSetters, uniforms );
        return this;

    },

    setBlockUniforms( uniforms ) {

        setBlockUniformsForProgram( this.gl, this.uniformBlockSpec, this.uniformBlockInfos, uniforms );
        return this;

    },

    setProjMatrix( mat4Array ) {

        this.setUniformObjProp( UNIFORM_PROJ_MAT_NAME, mat4Array, Matrix4.equals );
        return this;

    },

    setViewMatrix( mat4Array ) {

        this.setUniformObjProp( UNIFORM_VIEW_MAT_NAME, mat4Array, Matrix4.equals );
        return this;

    },

    setWorldMatrix( mat4Array ) {

        this.setUniformObjProp( UNIFORM_WORLD_MAT_NAME, mat4Array, Matrix4.equals );
        return this;

    },

    setTexture( tex ) {

        this.setUniformObj( { texture: tex } );
        return this;

    },

    setCamera( camera ) {

        this.camera = camera;
        return this;

    },

    updateCamera() {

        if ( ! this.camera ) return this;

        if ( this._needCamPos )
            this.setUniformObjProp( UNIFORM_CAMPOS, this.camera.position, PMath.arrayEquals );

        this.setProjMatrix( this.camera.projMat );
        this.setViewMatrix( this.camera.viewMat );
        return this;

    },

    dispose() {

        if ( this.gl.getParameter( this.gl.CURRENT_PROGRAM ) === this.program )
            this.gl.useProgram( null );

        this.gl.deleteProgram( this.program );

    },

    preRender() {

        if ( this._programUpdated ) {

            this.uniformObj = this.currentUniformObj;
            this._programUpdated = false;

        } else if ( Shader.currentProgram !== this.program )
            Object.keys( this.currentUniformObj ).forEach( ( prop ) => {

                if ( this.currentUniformObj[ prop ] instanceof WebGLTexture )
                    this.uniformObj[ prop ] = this.currentUniformObj[ prop ];

            } );

        this.activate();
        this.updateCamera();

        if ( this._needMVPMat || this._needVPMat ) {

            this.currentUniformObj.temp = Matrix4.mult( Matrix4.identity(), this.currentUniformObj[ UNIFORM_PROJ_MAT_NAME ], this.currentUniformObj[ UNIFORM_VIEW_MAT_NAME ] );
            if ( this._needVPMat ) this.setUniformObjProp( UNIFORM_VP_MAT_NAME, this.currentUniformObj.temp, Matrix4.equals );
            if ( this._needMVPMat ) {

                this.currentUniformObj.temp = Matrix4.mult( this.currentUniformObj.temp, this.currentUniformObj.temp, this.currentUniformObj[ UNIFORM_WORLD_MAT_NAME ] );
                this.setUniformObjProp( UNIFORM_MVP_MAT_NAME, this.currentUniformObj.temp, Matrix4.equals );

            }

        }


        this.setUniforms( this.uniformObj );
        this.setBlockUniforms( this.uniformObj );
        this.uniformObj = {};

        return this;

    },

    renderModel( model ) {

        if ( ! model.mesh.bufferInfo )
            model.createBufferInfo( this.gl );

        if ( ! model.mesh.vao )
            model.createVAO( this.gl, this._customAttrib ? this : undefined );

        if ( Shader.cullFace !== ( this.cullFace && model.cullFace ) ) {

            this.gl[( ( this.cullFace && model.cullFace ) ? 'enable' : 'disable' )]( this.gl.CULL_FACE );
            Shader.cullFace = ( this.cullFace && model.cullFace );

        }

        if ( Shader.blend !== ( this.blend || model.blend ) ) {

            this.gl[( ( this.blend || model.blend ) ? 'enable' : 'disable' )]( this.gl.BLEND );
            Shader.blend = ( this.blend || model.blend );

        }

        if ( Shader.depth !== ( this.depth && model.depth ) ) {

            this.gl.depthMask( ( this.depth && model.depth ) );
            Shader.depth = ( this.depth && model.depth );

        }

        if ( Shader.sampleBlend !== ( this.sampleBlend || model.sampleBlend ) ) {

            this.gl[( ( this.sampleBlend || model.sampleBlend ) ? 'enable' : 'disable' )]( this.gl.SAMPLE_ALPHA_TO_COVERAGE );
            Shader.sampleBlend = ( this.sampleBlend || model.sampleBlend );

        }

        this.setUniformObj( model.uniformObj );
        this.setWorldMatrix( model.transform.getWorldMatrix() );
        if ( this._needNormMat )
            this.setUniformObjProp( UNIFORM_NORMAL_MAT_NAME, model.normMat, Matrix3.equals );

        this.preRender(); // set uniforms

        this.gl.bindVertexArray( model.mesh.vao );

        const bufferInfo = model.mesh.bufferInfo;
        const instanceCount = model.instanceCount;
        if ( bufferInfo.indices || bufferInfo.elementType )
            if ( typeof instanceCount === 'number' )
                this.gl.drawElementsInstanced( model.drawMode, bufferInfo.numElements, bufferInfo.elementType === undefined ? this.gl.UNSIGNED_SHORT : bufferInfo.elementType, model.offset, instanceCount );
            else
                this.gl.drawElements( model.drawMode, bufferInfo.numElements, bufferInfo.elementType === undefined ? this.gl.UNSIGNED_SHORT : bufferInfo.elementType, model.offset ); // eslint-disable-line
        else
        /* eslint-disable */ // eslint bug
            if ( typeof instanceCount === 'number' )
                this.gl.drawArraysInstanced( model.drawMode, model.offset, bufferInfo.numElements, instanceCount );
            else
                this.gl.drawArrays( model.drawMode, model.offset, bufferInfo.numElements );
        /* eslint-enable */
        this.gl.bindVertexArray( null );

        return this;

    },

    setDefines( ...defines ) {

        if ( defines.length > 0 ) {

            let index = - 1;
            const currentProgNum = this.programMap.length;
            for ( let i = 0; i < currentProgNum; i ++ ) {

                const defs = this.programMap[ i ];
                let equals = false;

                if ( defs.length === defines.length ) {

                    equals = true;
                    for ( let j = 0; j < defines.length; j ++ )
                        if ( defs.indexOf( defines[ j ] ) < 0 ) {

                            equals = false;
                            break;

                        }

                }

                if ( equals ) {

                    index = i;
                    break;

                }

            }

            if ( index < 0 ) {

                this.currentShaders = Shader.injectDefines( this.shaders, ...defines );
                this.programs[ currentProgNum ] = createProgram( this.gl, ...this.currentShaders, this.opts );
                this.program = this.programs[ currentProgNum ];
                this.programMap[ currentProgNum ] = defines;
                this.updateProgram( currentProgNum );
                return this;

            }

            if ( this.program === this.programs[ index ] )
                return this;

            this.program = this.programs[ index ];
            this.updateProgram( index );
            return this;

        }

        if ( this.programMap.length > 0 ) {

            if ( this.program === this.programs[ 0 ] )
                return this;

            this.program = this.programs[ 0 ];
            this.updateProgram( 0 );
            return this;

        }

        this.currentShaders = this.shaders;
        this.programs[ 0 ] = createProgram( this.gl, ...this.shaders, this.opts );
        this.program = this.programs[ 0 ];
        this.programMap[ 0 ] = [];
        this.updateProgram( 0 );
        return this;

    },

    updateProgram( index = - 1 ) {

        if ( index > - 1 && index < this.programInfos.length ) {

            this.attribSetters = this.programInfos[ index ].attribSetters;
            this.uniformSetters = this.programInfos[ index ].uniformSetters;
            this.uniformBlockSpec = this.programInfos[ index ].uniformBlockSpec;
            this.uniformBlockInfos = this.programInfos[ index ].uniformBlockInfos;
            this.currentShaders = this.programInfos[ index ].shaders;
            this._needMVPMat = this.programInfos[ index ]._needMVPMat;
            this._needVPMat = this.programInfos[ index ]._needVPMat;
            this._needCamPos = this.programInfos[ index ]._needCamPos;
            this._needNormMat = this.programInfos[ index ]._needNormMat;
            this._customAttrib = this.programInfos[ index ]._customAttrib;

        } else {

            this.gl.useProgram( this.program );
            this.attribSetters = createAttributesSetters( this.gl, this.program );
            this.uniformSetters = createUniformSetters( this.gl, this.program );
            this.uniformBlockSpec = createUniformBlockSpec( this.gl, this.program );
            this.uniformBlockInfos = createUniformBlockInfos( this.gl, this.program, this.uniformBlockSpec );
            this._needMVPMat = Object.prototype.hasOwnProperty.call( this.uniformSetters, UNIFORM_MVP_MAT_NAME );
            this._needVPMat = Object.prototype.hasOwnProperty.call( this.uniformSetters, UNIFORM_VP_MAT_NAME );
            this._needCamPos = Object.prototype.hasOwnProperty.call( this.uniformSetters, UNIFORM_CAMPOS );
            this._needNormMat = Object.prototype.hasOwnProperty.call( this.uniformSetters, UNIFORM_NORMAL_MAT_NAME );
            this._customAttrib = Object.keys( this.attribSetters ).filter( attrib => [ ATTRIB_POSITION_NAME, ATTRIB_UV_NAME, ATTRIB_NORMAL_NAME, ATTRIB_BARYCENTRIC_NAME ].indexOf( attrib ) < 0 ).length > 0;
            this.programInfos[ index ] = {
                attribSetters: this.attribSetters,
                uniformSetters: this.uniformSetters,
                uniformBlockSpec: this.uniformBlockSpec,
                uniformBlockInfos: this.uniformBlockInfos,
                shaders: this.currentShaders,
                _needMVPMat: this._needMVPMat,
                _needVPMat: this._needVPMat,
                _needCamPos: this._needCamPos,
                _needNormMat: this._needNormMat,
                _customAttrib: this._customAttrib,
            };
            this.uniformObjs[ index ] = Object.assign( {}, this.currentUniformObj );

        }

        Shader.currentProgram = null;
        this._programUpdated = true;
        this.currentUniformObj = this.uniformObjs[ index ];

    },

} );

function insertToString( string, position, value ) {

    return [ string.slice( 0, position ), value, string.slice( position ) ].join( '' );

}

Object.assign( Shader, {

    currentProgram: null,
    cullFace: true,
    blend: false,
    depth: true,
    sampleBlend: false,

    injectDefines( shader, ...defines ) {

        if ( Array.isArray( shader ) )
            return shader.map( shadersrc => Shader.injectDefines( shadersrc, ...defines ) );

        const index = shader.indexOf( '\n' ) + 1;
        let newShader = shader;

        let define;
        for ( let i = 0; i < defines.length; i ++ ) {

            define = `#define ${defines[ i ]}\n`;
            if ( shader.indexOf( define ) < 0 )
                newShader = insertToString( newShader, index, define );

        }

        return newShader;

    },

    removeDefines( shader, ...defines ) {

        let newShader = shader;

        let define;
        for ( let i = 0; i < defines.length; i ++ ) {

            define = `#define ${defines[ i ]}\n`;
            if ( shader.indexOf( define ) > 0 )
                newShader = newShader.replace( define, '' );

        }

        return newShader;

    },

} );

var vs = "#version 300 es\n#define GLSLIFY 1\nin vec3 a_position;\nin vec2 a_uv;\nin vec3 a_normal;\nin vec3 a_barycentric;\n\nuniform mat4 u_mvpMat;\nuniform mat4 u_worldMat;\nuniform mat3 u_normMat;\n\nout vec2 v_uv;\nout vec3 v_pos;\nout vec3 v_norm;\nout vec3 v_barycentric;\n\nvoid main() {\n    v_uv = a_uv;\n    v_pos = (u_worldMat * vec4(a_position, 1.0)).xyz;\n    v_norm = normalize(u_normMat * a_normal);\n    v_barycentric = a_barycentric;\n\n    gl_Position = u_mvpMat * vec4(a_position, 1.0);\n}\n"; // eslint-disable-line

var fs = "#version 300 es\n\nprecision mediump float;\n#define GLSLIFY 1\n\nin vec2 v_uv;\nin vec3 v_pos;\nin vec3 v_norm;\nin vec3 v_barycentric;\n\nuniform sampler2D u_texture;\n\nout vec4 finalColor;\n\nvoid main() {\n    vec4 color = texture(u_texture, v_uv);\n\n    finalColor = color + vec4(normalize(v_pos) + vec3(v_uv, 1.0) + v_barycentric, 0.0);\n}\n"; // eslint-disable-line

function CommonVAOShader( gl ) {

    Shader.call( this, gl, CommonVAOShader.vs, CommonVAOShader.fs );

    this.deactivate();

}

CommonVAOShader.prototype = Object.assign( Object.create( Shader.prototype ), {

    constructor: CommonVAOShader,

} );

Object.assign( CommonVAOShader, {

    vs,
    fs,

} );

const getDefaultShader = ( function () {

    let commonVAOShader;

    return function getDefaultShader( gl ) { // eslint-disable-line

        if ( ! commonVAOShader )
            commonVAOShader = new CommonVAOShader( gl );

        return commonVAOShader;

    };

}() );


function Model( mesh ) {

    this.mesh = mesh;
    this.enablePick = true;
    this.transform = new Transform();
    this.node = null;
    this._uniformObj = {};

}

Object.defineProperties( Model.prototype, {

    isModel: {

        get() {

            return true;

        },

    },

    name: {

        get() {

            return this._name || this.mesh.name;

        },

        set( value ) {

            this._name = value;

        },

    },

    normMat: {

        get() {

            return this.transform.normMat;

        },

    },

    matrix: {

        get() {

            return this.transform.matrix.raw;

        },

    },

    positionInfo: {

        get() {

            return this.mesh.attribArrays[ ATTRIB_POSITION_NAME ];

        },

    },

    uvInfo: {

        get() {

            return this.mesh.attribArrays[ ATTRIB_UV_NAME ];

        },

    },

    normalInfo: {

        get() {

            return this.mesh.attribArrays[ ATTRIB_NORMAL_NAME ];

        },

    },

    uniformObj: {

        get() {

            return this._uniformObj;

        },

    },

    position: {

        get() {

            return this.transform.position;

        },

        set( array ) {

            this.setPosition( array );

        },
    },

    scale: {

        get() {

            return this.transform.scale;

        },

        set( array ) {

            this.setScale( array );

        },

    },

    rotation: {

        get() {

            return this.transform.rotation;

        },

        set( array ) {

            this.setRotation( array );

        },

    },

    quaternion: {

        get() {

            return this.transform.quaternion;

        },

        set( arrayQuat ) {

            this.setQuaternion( arrayQuat );

        },

    },

    drawMode: {

        get() {

            if ( this._drawMode !== undefined )
                return this._drawMode;
            return this.mesh.drawMode;

        },

        set( v ) {

            this._drawMode = v;

        },

    },

    cullFace: {

        get() {

            if ( this._cullFace !== undefined )
                return this._cullFace;
            return this.mesh.cullFace;

        },

        set( v ) {

            this._cullFace = v;

        },

    },

    blend: {

        get() {

            if ( this._blend !== undefined )
                return this._blend;
            return this.mesh.blend;

        },

        set( v ) {

            this._blend = v;

        },

    },

    depth: {

        get() {

            if ( this._depth !== undefined )
                return this._depth;
            return this.mesh.depth;

        },
        set( v ) {

            this._depth = v;

        },

    },

    sampleBlend: {

        get() {

            if ( this._sampleBlend !== undefined )
                return this._sampleBlend;
            return this.mesh.sampleBlend;

        },

        set( v ) {

            this._sampleBlend = v;

        },

    },

    instanceCount: {

        get() {

            if ( this._instanceCount !== undefined )
                return this._instanceCount;
            return this.mesh.instanceCount;

        },

        set( v ) {

            this._instanceCount = v;

        },

    },

    offset: {

        get() {

            if ( this._offset !== undefined )
                return this._offset;
            return this.mesh.offset;

        },

        set( v ) {

            this._offset = v;

        },

    },

} );

Object.assign( Model.prototype, {

    setScale( ...args ) {

        if ( args[ 0 ] instanceof Transform )
            return this.setScale( ...( args[ 0 ].scale ) );

        this.transform.setScale( ...args );
        return this;

    },

    setPosition( ...args ) {

        if ( args[ 0 ] instanceof Transform )
            return this.setPosition( ...( args[ 0 ].position.getArray() ) );

        this.transform.setPosition( ...args );
        return this;

    },

    setRotation( ...args ) {

        if ( args[ 0 ] instanceof Transform )
            return this.setRotation( ...( args[ 0 ].rotation.getArray() ) );

        this.transform.setRotation( ...args );
        return this;

    },

    setQuaternion( ...args ) {

        if ( args[ 0 ] instanceof Transform )
            return this.setQuaternion( ...( args[ 0 ].quaternion.getArray() ) );

        this.setQuaternion( ...args );
        return this;

    },

    setTransform( transform ) {

        this.transform = transform;
        return this;

    },

    preRender() {

        return this;

    },

    createVAO( gl, shader = getDefaultShader( gl ) ) {

        this.mesh.vao = createVertexArray( gl, this.mesh.bufferInfo, shader.program, shader.attribSetters );
        return this;

    },

    createBufferInfo( gl ) {

        this.mesh.bufferInfo = createBufferInfoFromArrays( gl, this.mesh.attribArrays );
        this.bufferInfo = this.mesh.bufferInfo;
        return this;

    },

    setUniformObj( obj ) {

        Object.assign( this._uniformObj, obj );
        return this;

    },

} );

// https://github.com/mourner/simplify-js/blob/3d/simplify.js

function getSquareDistance( p1, p2 ) {

    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    const dz = p1.z - p2.z;

    return dx * dx + dy * dy + dz * dz;

}

function getSquareSegmentDistance( p, p1, p2 ) {

    let x = p1.x;
    let y = p1.y;
    let z = p1.z;

    let dx = p2.x - x;
    let dy = p2.y - y;
    let dz = p2.z - z;

    if ( dx !== 0 || dy !== 0 || dz !== 0 ) {

        const t = ( ( p.x - x ) * dx + ( p.y - y ) * dy + ( p.z - z ) * dz ) /
                ( dx * dx + dy * dy + dz * dz );

        if ( t > 1 ) {

            x = p2.x;
            y = p2.y;
            z = p2.z;

        } else if ( t > 0 ) {

            x += dx * t;
            y += dy * t;
            z += dz * t;

        }

    }

    dx = p.x - x;
    dy = p.y - y;
    dz = p.z - z;

    return dx * dx + dy * dy + dz * dz;

}

function simplifyRadialDistance( points, sqTolerance ) {

    let prevPoint = points[ 0 ];
    const newPoints = [ prevPoint ];
    let point;

    for ( let i = 1, len = points.length; i < len; i ++ ) {

        point = points[ i ];

        if ( getSquareDistance( point, prevPoint ) > sqTolerance ) {

            newPoints.push( point );
            prevPoint = point;

        }

    }

    if ( prevPoint !== point )
        newPoints.push( point );


    return newPoints;

}

function simplifyDouglasPeucker( points, sqTolerance ) {

    const len = points.length;
    const MarkerArray = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
    const markers = new MarkerArray( len );

    let first = 0;
    let last = len - 1;

    const stack = [];
    const newPoints = [];

    let i;
    let maxSqDist;
    let sqDist;
    let index;

    markers[ first ] = markers[ last ] = 1; // eslint-disable-line

    while ( last ) {

        maxSqDist = 0;

        for ( i = first + 1; i < last; i ++ ) {

            sqDist = getSquareSegmentDistance( points[ i ], points[ first ], points[ last ] );

            if ( sqDist > maxSqDist ) {

                index = i;
                maxSqDist = sqDist;

            }

        }

        if ( maxSqDist > sqTolerance ) {

            markers[ index ] = 1;
            stack.push( first, index, index, last );

        }

        last = stack.pop();
        first = stack.pop();

    }

    for ( i = 0; i < len; i ++ )
        if ( markers[ i ] )
            newPoints.push( points[ i ] );

    return newPoints;

}

function simplify( points, tolerance, highestQuality ) {

    const sqTolerance = tolerance !== undefined ? tolerance * tolerance : 1;

    points = highestQuality ? points : simplifyRadialDistance( points, sqTolerance ); // eslint-disable-line
    points = simplifyDouglasPeucker( points, sqTolerance ); // eslint-disable-line

    return points;

}

const BezierCurve = {

    getPoint( p0, p1, p2, p3, t, out = new Vector3() ) {

        t = PMath.clamp( t, 0, 1 ); // eslint-disable-line
        const invt = 1 - t;

        out.x = invt * invt * invt * p0.x + // eslint-disable-line
                3 * invt * invt * t * p1.x +
                3 * invt * t * t * p2.x +
                t * t * t * p3.x;

        out.y = invt * invt * invt * p0.y + // eslint-disable-line
                3 * invt * invt * t * p1.y +
                3 * invt * t * t * p2.y +
                t * t * t * p3.y;

        out.z = invt * invt * invt * p0.z + // eslint-disable-line
                3 * invt * invt * t * p1.z +
                3 * invt * t * t * p2.z +
                t * t * t * p3.z;

        return out;

    },

    getPoints( p0, p1, p2, p3, tolerance, numPoints = 100, highlyMinify = true ) {

        const points = [];
        for ( let i = 0; i < numPoints; i ++ ) {

            const t = i / ( numPoints - 1 );
            points.push( BezierCurve.getPoint( p0, p1, p2, p3, t ) );

        }

        return tolerance ? simplify( points, tolerance, highlyMinify ) : points;

    },

    simplify,

};

function Mesh( name, attribArrays = {}, options ) {

    Object.keys( attribArrays ).forEach( ( prop ) => {

        if ( prop !== 'indices' ) {

            attribArrays[ prop ].data = getTypedArray( attribArrays[ prop ].data ); //eslint-disable-line
            attribArrays[ prop ].numComponents = getNumComponents( attribArrays[ prop ], prop );//eslint-disable-line

        }


    } );

    Object.assign( this, {
        name,
        attribArrays,
        drawMode: TRIANGLES,
        cullFace: true,
        blend: false,
        depth: true,
        sampleBlend: false,
        instanceCount: undefined,
        offset: 0,
    }, options );

}

Object.defineProperties( Mesh.prototype, {

    isMesh: {
        get() {

            return true;

        },
    },

} );

const GridAxis = {};

Object.assign( GridAxis, {

    createModel( name, size, div ) {

        return new Model( GridAxis.createMesh( name, size, div ) );

    },

    createMesh( name = 'GridAxis', size = 10, div = 20 ) {

        const vertices = [];
        const color = [];
        const step = size / div;
        const half = size / 2;

        let p;
        for ( let i = 0; i <= div; i ++ ) {

            p = - half + ( i * step );
            vertices.push( p );
            vertices.push( 0 );
            vertices.push( half );
            color.push( 0 );

            vertices.push( p );
            vertices.push( 0 );
            vertices.push( - half );
            color.push( 0 );

            vertices.push( - half );
            vertices.push( 0 );
            vertices.push( p );
            color.push( 0 );

            vertices.push( half );
            vertices.push( 0 );
            vertices.push( p );
            color.push( 0 );

        }

        vertices.push( - half );
        vertices.push( 0 );
        vertices.push( 0 );
        color.push( 1 );

        vertices.push( half );
        vertices.push( 0 );
        vertices.push( 0 );
        color.push( 1 );

        vertices.push( 0 );
        vertices.push( - half );
        vertices.push( 0 );
        color.push( 2 );

        vertices.push( 0 );
        vertices.push( half );
        vertices.push( 0 );
        color.push( 2 );

        vertices.push( 0 );
        vertices.push( 0 );
        vertices.push( - half );
        color.push( 3 );

        vertices.push( 0 );
        vertices.push( 0 );
        vertices.push( half );
        color.push( 3 );

        const attribArrays = {
            a_color: { data: color, numComponents: 1 },
        };
        attribArrays[ ATTRIB_POSITION_NAME ] = { data: vertices };

        return new Mesh( name, attribArrays, { drawMode: LINES } );

    },

} );

const Quad = {};

Object.assign( Quad, {

    createModel( name, size, x, y ) {

        return new Model( Quad.createMesh( name, size, x, y ) );

    },

    createMesh( name = 'Quad', size, x, y ) {

        const attribArrays = Quad.createVertices( size, x, y );
        return new Mesh( name, attribArrays, {
            cullFace: false,
        } );

    },

    createVertices( size = 1, x = 0, y = 0 ) {

        const helfSize = size / 2;
        const vertices = [
            x + - 1 * helfSize, y + 1 * helfSize,
            x + - 1 * helfSize, y + - 1 * helfSize,
            x + 1 * helfSize, y + - 1 * helfSize,
            x + 1 * helfSize, y + 1 * helfSize,
        ];
        const uv = [ 0, 0, 0, 1, 1, 1, 1, 0 ];
        const normal = [
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
        ];
        const indices = [ 0, 1, 3, 1, 2, 3 ];

        const attribArrays = {
            indices: { data: indices },
        };
        attribArrays[ ATTRIB_POSITION_NAME ] = { data: vertices, numComponents: 2 };
        attribArrays[ ATTRIB_UV_NAME ] = { data: uv };
        attribArrays[ ATTRIB_NORMAL_NAME ] = { data: normal };

        return attribArrays;

    },

} );

const Cube = {};

Object.assign( Cube, {

    createModel( name, width, height, depth, x, y, z ) {

        return new Model( Cube.createMesh( name, width, height, depth, x, y, z ) );

    },

    createMesh( name = 'Cube', width, height, depth, x, y, z ) {

        const attribArrays = Cube.createVertices( width, height, depth, x, y, z );
        return new Mesh( name, attribArrays, { cullFace: false } );

    },

    createVertices( width = 1, height = 1, depth = 1, x = 0, y = 0, z = 0 ) {

        const w = width * 0.5;
        const h = height * 0.5;
        const d = depth * 0.5;

        const x0 = x - w;
        const x1 = x + w;
        const y0 = y - h;
        const y1 = y + h;
        const z0 = z - d;
        const z1 = z + d;

        const vertices = [
            x0, y1, z1, 0, // 0 Front
            x0, y0, z1, 0, // 1
            x1, y0, z1, 0, // 2
            x1, y1, z1, 0, // 3

            x1, y1, z0, 1, // 4 Back
            x1, y0, z0, 1, // 5
            x0, y0, z0, 1, // 6
            x0, y1, z0, 1, // 7

            x0, y1, z0, 2, // 7 Left
            x0, y0, z0, 2, // 6
            x0, y0, z1, 2, // 1
            x0, y1, z1, 2, // 0

            x0, y0, z1, 3, // 1 Bottom
            x0, y0, z0, 3, // 6
            x1, y0, z0, 3, // 5
            x1, y0, z1, 3, // 2

            x1, y1, z1, 4, // 3 Right
            x1, y0, z1, 4, // 2
            x1, y0, z0, 4, // 5
            x1, y1, z0, 4, // 4

            x0, y1, z0, 5, // 7 Top
            x0, y1, z1, 5, // 0
            x1, y1, z1, 5, // 3
            x1, y1, z0, 5, // 4
        ];

        const indices = [];
        for ( let i = 0; i < vertices.length / 4; i += 4 )
            indices.push( i, i + 1, i + 3, i + 1, i + 2, i + 3 );

        const uv = [];
        for ( let i = 0; i < 6; i ++ )
            uv.push( 0, 0, 0, 1, 1, 1, 1, 0 );

        const normal = [
            0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, // Front
            0, 0, - 1, 0, 0, - 1, 0, 0, - 1, 0, 0, - 1, // Back
            - 1, 0, 0, - 1, 0, 0, - 1, 0, 0, - 1, 0, 0, // Left
            0, - 1, 0, 0, - 1, 0, 0, - 1, 0, 0, - 1, 0, // Bottom
            1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, // Right
            0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, // Top
        ];

        const attribArrays = {
            indices: { data: indices },
        };
        attribArrays[ ATTRIB_POSITION_NAME ] = { data: vertices, numComponents: 4 };
        attribArrays[ ATTRIB_UV_NAME ] = { data: uv };
        attribArrays[ ATTRIB_NORMAL_NAME ] = { data: normal };

        return attribArrays;

    },

} );

const Sphere = {};

Object.assign( Sphere, {

    createModel( name, radius, subdivAixs, subdivHeight, startLon, endLon, startLat, endLat ) {

        return new Model( Sphere.createMesh( name, radius, subdivAixs, subdivHeight, startLon, endLon, startLat, endLat ) );

    },

    createMesh( name = 'sphere', radius, subdivAixs, subdivHeight, startLon, endLon, startLat, endLat ) {

        const attribArrays = Sphere.createVertices( radius, subdivAixs, subdivHeight, startLon, endLon, startLat, endLat );
        return new Mesh( name, attribArrays );

    },

    createVertices( radius = 0.5, subdivAixs = 16, subdivHeight = 8, startLon = 0, endLon = Math.PI * 2, startLat = 0, endLat = Math.PI ) {

        const latRange = endLat - startLat;
        const lonRange = endLon - startLon;

        const positions = [];
        const normals = [];
        const uvs = [];

        for ( let y = 0; y <= subdivHeight; y ++ )
            for ( let x = 0; x <= subdivAixs; x ++ ) {

                const u = x / subdivAixs;
                const v = y / subdivHeight;
                const phi = lonRange * u + startLon;
                const theta = latRange * v + startLat;
                const sinTheta = Math.sin( theta );
                const cosTheta = Math.cos( theta );
                const sinPhi = Math.sin( phi );
                const cosPhi = Math.cos( phi );
                const ux = - cosPhi * sinTheta;
                const uy = cosTheta;
                const uz = sinPhi * sinTheta;
                positions.push( radius * ux, radius * uy, radius * uz );
                normals.push( ux, uy, uz );
                uvs.push( u, 1 - v );

            }

        const numVertAround = subdivAixs + 1;
        const indices = [];
        for ( let x = 0; x < subdivAixs; x ++ )
            for ( let y = 0; y < subdivHeight; y ++ ) {

                const a = ( y + 0 ) * numVertAround + x + 1;
                const b = ( y + 0 ) * numVertAround + x;
                const c = ( y + 1 ) * numVertAround + x;
                const d = ( y + 1 ) * numVertAround + x + 1;

                if ( y !== 0 || startLat > 0 ) indices.push( a, b, d );
                if ( y !== subdivHeight - 1 || endLat < Math.PI ) indices.push( b, c, d );

            }

        const attribArrays = {
            indices: { data: indices },
        };
        attribArrays[ ATTRIB_POSITION_NAME ] = { data: positions };
        attribArrays[ ATTRIB_UV_NAME ] = { data: uvs };
        attribArrays[ ATTRIB_NORMAL_NAME ] = { data: normals };

        return attribArrays;

    },

} );

function deIndexAttribs( modelMesh ) {

    const mesh = modelMesh.mesh || modelMesh;
    const attribArrays = mesh.attribArrays;
    const indices = attribArrays.indices.data;
    const drawMode = mesh.drawMode;
    if ( ! indices ) return;

    if ( drawMode === TRIANGLES ) {

        Object.keys( attribArrays ).forEach( ( name ) => {

            if ( name === 'indices' ) return;

            const data = attribArrays[ name ].data;
            const numComponents = attribArrays[ name ].numComponents;
            const tempAry = [];
            for ( let i = 0; i < indices.length; i ++ )
                for ( let j = 0; j < numComponents; j ++ )
                    tempAry.push( data[ indices[ i ] * numComponents + j ] );

            attribArrays[ name ].data = tempAry;

        } );

        delete attribArrays.indices;
        delete mesh.bufferInfo;
        delete mesh.vao;

    }

}

function addBarycentricAttrib( modelMesh, removeEdge = false ) {

    const mesh = modelMesh.mesh || modelMesh;
    const indices = mesh.attribArrays.indices.data;
    const Q = removeEdge ? 1 : 0;

    if ( mesh.drawMode === TRIANGLES ) {

        if ( mesh.attribArrays.indices )
            deIndexAttribs( modelMesh );

        const numVert = mesh.attribArrays[ ATTRIB_POSITION_NAME ].data.length / mesh.attribArrays[ ATTRIB_POSITION_NAME ].numComponents;
        const barycentrics = [];
        let lastVerts = [];
        let curVerts = [];
        let map = [];
        for ( let i = 0; i < numVert / 3; i ++ ) {

            curVerts = [ indices[ i * 3 + 0 ], indices[ i * 3 + 1 ], indices[ i * 3 + 2 ] ];
            map = curVerts.map( vert => lastVerts.indexOf( vert ) ); // eslint-disable-line
            if ( map[ 0 ] === 1 && map[ 2 ] === 2 ) { // abd bcd

                barycentrics.push(
                    0, 1, 0,
                    0, 0, 1,
                    1, 0, Q,
                );
                lastVerts = [];

            } else {

                barycentrics.push(
                    0, 0, 1,
                    0, 1, 0,
                    1, 0, Q,
                );
                lastVerts = curVerts;

            }


        }

        mesh.attribArrays[ ATTRIB_BARYCENTRIC_NAME ] = { data: barycentrics, numComponents: 3 };

        delete mesh.bufferInfo;
        delete mesh.vao;

    }

}

const Curve = {

    createModel( name, points, tolerence, numPoints, highlyMinify ) {

        return new Model( Curve.createMesh( name, points, tolerence, numPoints, highlyMinify ) );

    },

    createMesh( name = 'curve', points, tolerence, numPoints, highlyMinify ) {

        let bpoints = [];
        for ( let i = 0; i < Math.floor( ( points.length - 1 ) / 3 ); i ++ ) {

            bpoints.pop();
            bpoints = bpoints.concat( BezierCurve.getPoints( points[ i * 3 + 0 ], points[ i * 3 + 1 ], points[ i * 3 + 2 ], points[ i * 3 + 3 ], tolerence, numPoints, highlyMinify ) );

        }
        bpoints = bpoints.map( vec3 => vec3.getArray() );
        const vertices = bpoints.reduce( ( a, b ) => a.concat( b ) );

        const attribArrays = {};
        attribArrays[ ATTRIB_POSITION_NAME ] = { data: vertices };

        return new Mesh( name, attribArrays, { drawMode: LINE_STRIP } );

    },

};

class Render {

    constructor( callback, fps ) {

        const self = this;
        this.lastTime = null;
        this.callback = callback;
        this.isActive = false;
        this.fps = 0;

        if ( typeof ( fps ) === 'number' && fps > 0 ) {

            this.frameTimeLimit = 1 / fps;

            this.run = function () {

                const currentTime = performance.now();
                const timespan = ( currentTime - self.lastTime ) / 1000;

                if ( timespan >= self.frameTimeLimit ) {

                    self.fps = Math.floor( 1 / timespan );
                    self.lastTime = currentTime;
                    self.callback( timespan );

                }

                if ( self.isActive ) window.requestAnimationFrame( self.run );

            };

        } else

            this.run = function () {

                const currentTime = performance.now();
                const timespan = ( currentTime - self.lastTime ) / 1000;

                self.fps = Math.floor( 1 / timespan );
                self.lastTime = currentTime;

                self.callback( timespan );
                if ( self.isActive ) window.requestAnimationFrame( self.run );

            };


    }

    start() {

        this.isActive = true;
        this.lastTime = performance.now();
        window.requestAnimationFrame( this.run );
        return this;

    }

    stop() {

        this.isActive = false;

    }

}

var vs$1 = "#version 300 es\n#define GLSLIFY 1\nin vec3 a_position;\nin float a_color;\n\nuniform mat4 u_mvpMat;\nuniform vec3 u_colors[4];\n\nout vec3 v_color;\n\nvoid main() {\n    v_color = u_colors[int(a_color)];\n    gl_Position = u_mvpMat * vec4(a_position, 1.0);\n}\n"; // eslint-disable-line

var fs$1 = "#version 300 es\nprecision mediump float;\n#define GLSLIFY 1\n\nin vec3 v_color;\n\nlayout(location = 0) out vec4 finalColor;\n\n#ifdef ColorPick\nuniform vec3 u_colorId;\nlayout(location = 1) out vec4 pickColor;\n#endif\n\nvoid main() {\n    finalColor = vec4(v_color, 1.0);\n\n    #ifdef ColorPick\n    pickColor = vec4(u_colorId, 1.0);\n    #endif\n}\n"; // eslint-disable-line

function GridAxisShader( gl, camera ) {

    Shader.call( this, gl, GridAxisShader.vs, GridAxisShader.fs );

    this.setCamera( camera );
    this.setUniformObj( { u_colors: [ 0.5, 0.5, 0.5, 1, 0, 0, 0, 1, 0, 0, 0, 1 ] } );

    this.deactivate();

}

GridAxisShader.prototype = Object.assign( Object.create( Shader.prototype ), {
    constructor: GridAxisShader,
} );

Object.assign( GridAxisShader, {

    vs: vs$1,
    fs: fs$1,

} );

var vs$2 = "#version 300 es\n#define GLSLIFY 1\nin vec3 a_position;\nin vec2 a_uv;\n\nuniform mat4 u_mvpMat;\n\nout highp vec2 v_uv;\n\nvoid main() {\n    v_uv = a_uv;\n    gl_Position = u_mvpMat * vec4(a_position, 1.0);\n}\n"; // eslint-disable-line

var fs$2 = "#version 300 es\nprecision mediump float;\n#define GLSLIFY 1\n\nin highp vec2 v_uv;\n\nuniform sampler2D u_texture;\n\nlayout(location = 0) out vec4 finalColor;\n\n#ifdef ColorPick\nuniform vec3 u_colorId;\nlayout(location = 1) out vec4 pickColor;\n#endif\n\nvoid main() {\n    finalColor = texture(u_texture, vec2(v_uv.s, v_uv.t));\n\n    #ifdef ColorPick\n    pickColor = vec4(u_colorId, 1.0);\n    #endif\n}\n"; // eslint-disable-line

function FlatTextureShader( gl, camera, texture ) {

    Shader.call( this, gl, FlatTextureShader.vs, FlatTextureShader.fs );

    this.setCamera( camera );
    this.setUniformObj( { u_texture: texture } );

    this.deactivate();

}

FlatTextureShader.prototype = Object.assign( Object.create( Shader.prototype ), {

    constructor: FlatTextureShader,

} );

Object.assign( FlatTextureShader, {

    vs: vs$2,
    fs: fs$2,

} );

var vs$3 = "#version 300 es\n#define GLSLIFY 1\nin vec4 a_position;\n\nuniform mat4 u_mvpMat;\n\nout highp vec3 v_uv;\n\nvoid main() {\n    v_uv = a_position.xyz;\n    gl_Position = u_mvpMat * vec4(a_position.xyz, 1.0);\n    gl_Position.z = gl_Position.w;\n}\n"; // eslint-disable-line

var fs$3 = "#version 300 es\nprecision mediump float;\n#define GLSLIFY 1\n\nin highp vec3 v_uv;\n\nuniform samplerCube u_dayTex;\nuniform samplerCube u_nightTex;\nuniform float u_rate;\n\nlayout(location = 0) out vec4 finalColor;\n\n#ifdef ColorPick\nuniform vec3 u_colorId;\nlayout(location = 1) out vec4 pickColor;\n#endif\n\nvoid main() {\n    finalColor = mix( texture(u_dayTex, v_uv), texture(u_nightTex, v_uv), u_rate);\n\n    #ifdef ColorPick\n    pickColor = vec4(u_colorId, 1.0);\n    #endif\n}\n"; // eslint-disable-line

function DynamicSkyboxShader( gl, camera, dayTex, nightTex = dayTex, rate = 0.5 ) {

    Shader.call( this, gl, DynamicSkyboxShader.vs, DynamicSkyboxShader.fs );

    this.setCamera( camera );
    this.setUniformObj( { u_dayTex: dayTex, u_nightTex: nightTex, u_rate: rate } );

    this.deactivate();

}

DynamicSkyboxShader.prototype = Object.assign( Object.create( Shader.prototype ), {

    constructor: DynamicSkyboxShader,

    setRate( r ) {

        this.setUniformObj( { u_rate: r } );
        return this;

    },

    setTexture( dayTex, nightTex = dayTex ) {

        this.setUniformObj( { u_dayTex: dayTex, u_nightTex: nightTex } );
        return this;

    },

    updateCamera() {

        this.setProjMatrix( this.camera.projMat );
        this.setViewMatrix( this.camera.getOrientMatrix() );
        return this;

    },

} );

Object.assign( DynamicSkyboxShader, {

    vs: vs$3,
    fs: fs$3,

} );

var vs$4 = "#version 300 es\n#define GLSLIFY 1\nin vec3 a_position;\nin vec2 a_uv;\nin vec3 a_normal;\n\nuniform mat4 u_mvpMat;\nuniform mat4 u_worldMat;\nuniform mat3 u_normMat;\n\nout vec2 v_uv;\nout vec3 v_pos;\nout vec3 v_norm;\n\nvoid main() {\n    v_uv = a_uv;\n    v_pos = (u_worldMat * vec4(a_position, 1.0)).xyz;\n    v_norm = u_normMat * a_normal;\n\n    gl_Position = u_mvpMat * vec4(a_position, 1.0);\n}\n"; // eslint-disable-line

var fs$4 = "#version 300 es\n\nprecision mediump float;\n#define GLSLIFY 1\nvec3 flatnorm(vec3 pos) {\n  return normalize(cross(dFdx(pos), dFdy(pos)));\n}\n\nin vec2 v_uv;\nin vec3 v_pos;\nin vec3 v_norm;\n\nuniform Material {\n    float diffuseFactor;\n    float specularFactor;\n    float shiness;\n    bool isFlat;\n    bool isBlinn;\n    bool isGamma;\n} u_material;\n\nuniform Light {\n    vec3 position;\n    vec3 color;\n    vec3 ambientColor;\n} u_light;\n\nuniform sampler2D u_texture;\nuniform vec3 u_camPos;\n\nlayout(location = 0) out vec4 finalColor;\n\n#ifdef ColorPick\nuniform vec3 u_colorId;\nlayout(location = 1) out vec4 pickColor;\n#endif\n\nconst float kPi = 3.14159265;\nconst vec3 gamma = vec3(1.0/2.2);\n\nvoid main() {\n    vec4 baseColor4 = texture(u_texture, v_uv);\n    vec3 baseColor = baseColor4.rgb;\n\n    vec3 ambient = u_light.ambientColor;\n\n    vec3 surfaceToLight = normalize(u_light.position - v_pos);\n    vec3 normal = vec3(0.0);\n\n    if(u_material.isFlat) {\n        normal = flatnorm(v_pos);\n    } else {\n        normal = normalize(v_norm);\n    }\n\n    float diff = max(dot(surfaceToLight, normal), 0.0);\n    vec3 diffuse = diff * u_material.diffuseFactor * u_light.color;\n\n    vec3 surfaceToView = normalize(u_camPos - v_pos);\n    float spec = 0.0;\n    if(u_material.isBlinn) {\n        float kEnergyConservation = ( 8.0 + u_material.shiness ) / ( 8.0 * kPi );\n        vec3 halfwayDir = normalize(surfaceToLight + surfaceToView);\n        spec = pow(max(dot(normal, halfwayDir), 0.0), u_material.shiness) * kEnergyConservation;\n    } else {\n        float kEnergyConservation = ( 2.0 + u_material.shiness ) / ( 2.0 * kPi ); \n        vec3 reflectDir = reflect(-surfaceToLight, normal);\n        spec = pow(max(dot(surfaceToView, reflectDir), 0.0), u_material.shiness) * kEnergyConservation;\n    }\n    vec3 specular = u_light.color * spec * u_material.specularFactor;\n\n    vec3 linearColor = (ambient + diffuse) * baseColor.rgb + specular.rgb;\n\n    if (u_material.isGamma) {\n        finalColor = vec4(pow(linearColor, gamma), baseColor4.a);\n    } else {\n        finalColor = vec4(linearColor, baseColor4.a);\n    }\n\n    #ifdef ColorPick\n    pickColor = vec4(u_colorId, 1.0);\n    #endif\n}\n"; // eslint-disable-line

function PointlightShader( gl, camera ) {

    Shader.call( this, gl, PointlightShader.vs, PointlightShader.fs );

    this.setCamera( camera );

    this.setUniformObj( {
        position: [ 10, 10, 10 ],
        color: [ 1.0, 1.0, 1.0 ],
        ambientColor: [ 0.07, 0.07, 0.07 ],
        shiness: 20.0,
        diffuseFactor: 0.3,
        specularFactor: 0.1,
        isFlat: false,
        isBlinn: true,
        isGamma: true,
    } );

    this.deactivate();

}

PointlightShader.prototype = Object.assign( Object.create( Shader.prototype ), {

    constructor: PointlightShader,

} );

Object.assign( PointlightShader, {

    vs: vs$4,
    fs: fs$4,

} );

var vs$5 = "#version 300 es\n#define GLSLIFY 1\nin vec3 a_position;\n\nuniform mat4 u_mvpMat;\nuniform float u_pSize;\n\nvoid main() {\n    gl_PointSize = u_pSize;\n    gl_Position = u_mvpMat * vec4(a_position.xyz, 1.0);\n}\n"; // eslint-disable-line

var fs$5 = "#version 300 es\nprecision mediump float;\n#define GLSLIFY 1\n\nuniform vec4 u_color;\n\nlayout(location = 0) out vec4 finalColor;\n\n#ifdef ColorPick\nuniform vec3 u_colorId;\nlayout(location = 1) out vec4 pickColor;\n#endif\n\nvoid main() {\n    finalColor = u_color;\n\n    #ifdef ColorPick\n    pickColor = vec4(u_colorId, 1.0);\n    #endif\n}\n"; // eslint-disable-line

function ColorPointShader( gl, camera, pointSize = 5.0, color = [ 255 / 255, 105 / 255, 180 / 255, 125 / 255 ] ) {

    Shader.call( this, gl, ColorPointShader.vs, ColorPointShader.fs );

    this.setCamera( camera );
    this.setPointSize( pointSize );

    this.setColor( color );

    this.deactivate();

}

ColorPointShader.prototype = Object.assign( Object.create( Shader.prototype ), {

    constructor: ColorPointShader,

    setColor( color ) {

        this.setUniformObj( { u_color: color } );

        if ( color[ 3 ] !== 1 )
            this.blend = true;
        else
            this.blend = false;

        return this;

    },

    setPointSize( size ) {

        this.setUniformObj( { u_pSize: size } );
        return this;

    },

} );

Object.assign( ColorPointShader, {

    vs: vs$5,
    fs: fs$5,

} );

var vs$6 = "#version 300 es\n#define GLSLIFY 1\nin vec3 a_position;\nin vec2 a_uv;\nin vec3 a_normal;\n\nuniform mat4 u_mvpMat;\nuniform mat4 u_worldMat;\nuniform mat3 u_normMat;\n\nout vec2 v_uv;\nout vec3 v_pos;\nout vec3 v_norm;\n\nvoid main() {\n    v_uv = a_uv;\n    v_pos = (u_worldMat * vec4(a_position, 1.0)).xyz;\n    v_norm = normalize(u_normMat * a_normal);\n\n    gl_Position = u_mvpMat * vec4(a_position, 1.0);\n}\n"; // eslint-disable-line

var fs$6 = "#version 300 es\n\nprecision mediump float;\n#define GLSLIFY 1\n\nuniform Light {\n    vec3 position;\n    vec3 color;\n    vec3 ambientColor;\n    float falloff;\n    float radius;\n} u_light;\n\nuniform Material {\n    float specularFactor;\n    float shiness;\n    float roughness;\n    float albedo;\n    bool isFlat;\n    bool isGamma;\n} u_material;\n\nin vec2 v_uv;\nin vec3 v_pos;\nin vec3 v_norm;\n\nvec3 normals(vec3 pos) {\n  vec3 fdx = dFdx(pos);\n  vec3 fdy = dFdy(pos);\n  return normalize(cross(fdx, fdy));\n}\n\nfloat orenNayarDiffuse(\n  vec3 lightDirection,\n  vec3 viewDirection,\n  vec3 surfaceNormal,\n  float roughness,\n  float albedo) {\n  \n  float LdotV = dot(lightDirection, viewDirection);\n  float NdotL = dot(lightDirection, surfaceNormal);\n  float NdotV = dot(surfaceNormal, viewDirection);\n\n  float s = LdotV - NdotL * NdotV;\n  float t = mix(1.0, max(NdotL, NdotV), step(0.0, s));\n\n  float sigma2 = roughness * roughness;\n  float A = 1.0 + sigma2 * (albedo / (sigma2 + 0.13) + 0.5 / (sigma2 + 0.33));\n  float B = 0.45 * sigma2 / (sigma2 + 0.09);\n\n  return albedo * max(0.0, NdotL) * (A + B * s / t) / 3.14159265;\n}\n\nfloat phongSpecular(\n  vec3 lightDirection,\n  vec3 viewDirection,\n  vec3 surfaceNormal,\n  float shininess) {\n\n  //Calculate Phong power\n  vec3 R = -reflect(lightDirection, surfaceNormal);\n  return pow(max(0.0, dot(viewDirection, R)), shininess);\n}\n\n// by Tom Madams\n// Simple:\n// https://imdoingitwrong.wordpress.com/2011/01/31/light-attenuation/\n//\n// Improved\n// https://imdoingitwrong.wordpress.com/2011/02/10/improved-light-attenuation/\nfloat attenuation_0(float r, float f, float d) {\n  float denom = d / r + 1.0;\n  float attenuation = 1.0 / (denom*denom);\n  float t = (attenuation - f) / (1.0 - f);\n  return max(t, 0.0);\n}\n\nconst float gamma_0 = 2.2;\n\nfloat toLinear(float v) {\n  return pow(v, gamma_0);\n}\n\nvec2 toLinear(vec2 v) {\n  return pow(v, vec2(gamma_0));\n}\n\nvec3 toLinear(vec3 v) {\n  return pow(v, vec3(gamma_0));\n}\n\nvec4 toLinear(vec4 v) {\n  return vec4(toLinear(v.rgb), v.a);\n}\n\nconst float gamma_1 = 2.2;\n\nfloat toGamma(float v) {\n  return pow(v, 1.0 / gamma_1);\n}\n\nvec2 toGamma(vec2 v) {\n  return pow(v, vec2(1.0 / gamma_1));\n}\n\nvec3 toGamma(vec3 v) {\n  return pow(v, vec3(1.0 / gamma_1));\n}\n\nvec4 toGamma(vec4 v) {\n  return vec4(toGamma(v.rgb), v.a);\n}\n\nuniform sampler2D u_texture;\nuniform vec3 u_camPos;\n\nvec4 textureLinear(sampler2D uTex, vec2 uv) {\n    return toLinear(texture(uTex, uv));\n}\n\nlayout(location = 0) out vec4 finalColor;\n\n#ifdef ColorPick\nuniform vec3 u_colorId;\nlayout(location = 1) out vec4 pickColor;\n#endif\n\nvoid main() {\n    vec3 normal = vec3(0.0);\n    if(u_material.isFlat) {\n        normal = normals(v_pos);\n    } else {\n        normal = normalize(v_norm);\n    }\n\n    vec3 lightVector = u_light.position - v_pos;\n    vec3 color = vec3(0.0);\n\n    float lightDistance = length(lightVector);\n    float falloff = attenuation_0(u_light.radius, u_light.falloff, lightDistance);\n\n    vec4 baseColor = vec4(0.0);\n    if(u_material.isGamma) {\n        baseColor = textureLinear(u_texture, v_uv);\n    } else {\n        baseColor = texture(u_texture, v_uv);\n    }\n    vec3 diffuseColor = baseColor.rgb;\n    \n    vec3 L = normalize(lightVector);\n    vec3 V = normalize(u_camPos - v_pos);\n\n    float specular = u_material.specularFactor * phongSpecular(L, V, normal, u_material.shiness) * falloff;\n    vec3 diffuse = u_light.color * orenNayarDiffuse(L, V, normal, u_material.roughness, u_material.albedo) * falloff;\n    vec3 ambient = u_light.ambientColor;\n\n    color += diffuseColor * (diffuse + ambient) + specular;\n\n    if (u_material.isGamma) {\n        color = toGamma(color);\n    }\n    \n    finalColor = vec4(color, baseColor.a);\n\n    #ifdef ColorPick\n    pickColor = vec4(u_colorId, 1.0);\n    #endif\n\n}\n"; // eslint-disable-line

function PhongLightShader( gl, camera ) {

    Shader.call( this, gl, PhongLightShader.vs, PhongLightShader.fs );

    this.setCamera( camera );

    this.setUniformObj( {
        position: [ 10, 10, 10 ],
        color: [ 1.0, 1.0, 1.0 ],
        ambientColor: [ 0.15, 0.15, 0.15 ],
        falloff: 0.15,
        radius: 5.0,
        shiness: 20.0,
        specularFactor: 0.1,
        roughness: 0.5,
        albedo: 0.85,
        isFlat: false,
        isGamma: true,
    } );

    this.deactivate();

}

PhongLightShader.prototype = Object.assign( Object.create( Shader.prototype ), {

    constructor: PhongLightShader,

} );

Object.assign( PhongLightShader, {

    vs: vs$6,
    fs: fs$6,

} );

var vs$7 = "#version 300 es\n#define GLSLIFY 1\n\nin vec3 a_position;\n\nuniform mat4 u_mvpMat;\n\nvoid main() {\n    gl_Position = u_mvpMat * vec4(a_position, 1.0);\n}\n"; // eslint-disable-line

var fs$7 = "#version 300 es\n\nprecision mediump float;\n#define GLSLIFY 1\n\nuniform vec3 u_color;\n\nout vec4 finalColor;\n\nvoid main() {\n    finalColor = vec4(u_color, 1.0);\n}\n"; // eslint-disable-line

function ColorpickShader( gl, camera ) {

    Shader.call( this, gl, ColorpickShader.vs, ColorpickShader.fs );

    this.setCamera( camera );
    this.setColor( [ 0.0, 0.0, 0.0 ] );

    this.deactivate();

}

ColorpickShader.prototype = Object.assign( Object.create( Shader.prototype ), {

    constructor: ColorpickShader,

    setColor( color ) {

        this.setUniformObj( { u_color: color } );
        return this;

    },

} );

Object.assign( ColorpickShader, {

    vs: vs$7,
    fs: fs$7,

} );

var vs$8 = "#version 300 es\n#define GLSLIFY 1\nin vec3 a_position;\nin vec3 a_barycentric;\n\nuniform mat4 u_mvpMat;\n\nout vec3 v_barycentric;\nout vec3 v_pos;\n\nvoid main() {\n    v_barycentric = a_barycentric;\n    v_pos = a_position;\n    gl_Position = u_mvpMat * vec4(a_position, 1.0);\n}\n"; // eslint-disable-line

var fs$8 = "#version 300 es\nprecision mediump float;\n#define GLSLIFY 1\n\n// https://github.com/mattdesl/webgl-wireframes/blob/gh-pages/lib/wire.frag\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0; }\n\nfloat mod289(float x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0; }\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat permute(float x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat taylorInvSqrt(float r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec4 grad4(float j, vec4 ip)\n  {\n  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\n  vec4 p,s;\n\n  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\n  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\n  s = vec4(lessThan(p, vec4(0.0)));\n  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;\n\n  return p;\n  }\n\n// (sqrt(5) - 1)/4 = F4, used once below\n#define F4 0.309016994374947451\n\nfloat snoise(vec4 v)\n  {\n  const vec4  C = vec4( 0.138196601125011,  // (5 - sqrt(5))/20  G4\n                        0.276393202250021,  // 2 * G4\n                        0.414589803375032,  // 3 * G4\n                       -0.447213595499958); // -1 + 4 * G4\n\n// First corner\n  vec4 i  = floor(v + dot(v, vec4(F4)) );\n  vec4 x0 = v -   i + dot(i, C.xxxx);\n\n// Other corners\n\n// Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)\n  vec4 i0;\n  vec3 isX = step( x0.yzw, x0.xxx );\n  vec3 isYZ = step( x0.zww, x0.yyz );\n//  i0.x = dot( isX, vec3( 1.0 ) );\n  i0.x = isX.x + isX.y + isX.z;\n  i0.yzw = 1.0 - isX;\n//  i0.y += dot( isYZ.xy, vec2( 1.0 ) );\n  i0.y += isYZ.x + isYZ.y;\n  i0.zw += 1.0 - isYZ.xy;\n  i0.z += isYZ.z;\n  i0.w += 1.0 - isYZ.z;\n\n  // i0 now contains the unique values 0,1,2,3 in each channel\n  vec4 i3 = clamp( i0, 0.0, 1.0 );\n  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\n  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\n\n  //  x0 = x0 - 0.0 + 0.0 * C.xxxx\n  //  x1 = x0 - i1  + 1.0 * C.xxxx\n  //  x2 = x0 - i2  + 2.0 * C.xxxx\n  //  x3 = x0 - i3  + 3.0 * C.xxxx\n  //  x4 = x0 - 1.0 + 4.0 * C.xxxx\n  vec4 x1 = x0 - i1 + C.xxxx;\n  vec4 x2 = x0 - i2 + C.yyyy;\n  vec4 x3 = x0 - i3 + C.zzzz;\n  vec4 x4 = x0 + C.wwww;\n\n// Permutations\n  i = mod289(i);\n  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\n  vec4 j1 = permute( permute( permute( permute (\n             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\n\n// Gradients: 7x7x6 points over a cube, mapped onto a 4-cross polytope\n// 7*7*6 = 294, which is close to the ring size 17*17 = 289.\n  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n\n  vec4 p0 = grad4(j0,   ip);\n  vec4 p1 = grad4(j1.x, ip);\n  vec4 p2 = grad4(j1.y, ip);\n  vec4 p3 = grad4(j1.z, ip);\n  vec4 p4 = grad4(j1.w, ip);\n\n// Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n  p4 *= taylorInvSqrt(dot(p4,p4));\n\n// Mix contributions from the five corners\n  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);\n  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);\n  m0 = m0 * m0;\n  m1 = m1 * m1;\n  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))\n               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;\n\n  }\n\n#define PI 3.14159265359\n\nin vec3 v_barycentric;\nin vec3 v_pos;\n\nuniform float u_thickness;\nuniform vec4 u_stroke;\nuniform vec4 u_fill;\nuniform float u_secondThickness;\nuniform bool u_dualStroke;\nuniform float u_feather;\n\nuniform bool u_screenWidth;\n\nuniform vec4 u_backStroke;\nuniform bool u_colorBack;\n\nuniform float u_time;\nuniform bool u_noiseSmall;\nuniform bool u_noiseBig;\n\nuniform bool u_squeeze;\nuniform float u_squeezeEndpoint;\nuniform float u_squeezeMiddle;\n\nuniform bool u_dash;\nuniform float u_dashRepeats;\nuniform float u_dashLength;\nuniform bool u_dashOverlap;\nuniform bool u_dashAnimate;\n\nfloat edgeFactor(float offset, float thickness){\n    vec3 d = fwidth(v_barycentric);\n    vec3 a3 = smoothstep(d * ((thickness * 0.5) - u_feather) , d * ((thickness * 0.5) + u_feather), v_barycentric + offset);\n    return min(min(a3.x, a3.y), a3.z);\n}\n\nfloat aastep(float thickness, float d) {\n    float afwidth = fwidth(d) * u_feather;\n    return smoothstep(thickness - afwidth, thickness + afwidth, d);\n}\n\nlayout(location = 0) out vec4 finalColor;\n\n#ifdef ColorPick\nuniform vec3 u_colorId;\nlayout(location = 1) out vec4 pickColor;\n#endif\n\nvoid main() {\n    float d = min(min(v_barycentric.x, v_barycentric.y), v_barycentric.z);\n    float noiseOff = 0.0;\n    if (u_noiseBig) noiseOff += snoise(vec4(v_pos.xyz * 1.0, u_time * 0.05)) * 0.15;\n    if (u_noiseSmall) noiseOff += snoise(vec4(v_pos.xyz * 80.0, u_time * 0.1)) * 0.12;\n    d += noiseOff;\n\n    float positionAlong = max(v_barycentric.x, v_barycentric.y);\n    if (v_barycentric.y < v_barycentric.x && v_barycentric.y < v_barycentric.z) {\n        positionAlong = 1.0 - positionAlong;\n    }\n\n    float computedThickness = u_thickness;\n\n    if (u_squeeze) {\n        computedThickness *= mix(u_squeezeEndpoint, u_squeezeMiddle, sin(positionAlong * PI));\n    }\n\n    if (u_dash) {\n        float offset = 1.0 / u_dashRepeats * u_dashLength / 2.0;\n\n        if (!u_dashOverlap) {\n            offset += 1.0 / u_dashRepeats / 2.0;\n        }\n\n        if (u_dashAnimate) {\n            offset += u_time * 0.022;\n        }\n\n        float pattern = fract((positionAlong + offset) * u_dashRepeats);\n        computedThickness *= 1.0 - aastep(u_dashLength, pattern);\n    }\n\n    float frag = 0.0;\n    if (u_screenWidth) {\n        frag = edgeFactor(noiseOff, computedThickness * 10.0);\n    } else {\n        frag = aastep(computedThickness / 10.0, d);\n    }\n\n    float inner = 0.0;\n    if(u_dualStroke) {\n        inner = 1.0 - aastep(u_secondThickness, d);       \n    }\n\n    if(u_colorBack && !gl_FrontFacing) {\n        finalColor = mix(u_backStroke, u_fill, abs(inner - frag));\n    } else {\n        finalColor = mix(u_stroke, u_fill, abs(inner - frag));\n    }\n\n    #ifdef ColorPick\n    pickColor = vec4(u_colorId, 1.0);\n    #endif\n}\n"; // eslint-disable-line

function WireframeShader( gl, camera ) {

    Shader.call( this, gl, WireframeShader.vs, WireframeShader.fs );
    this.sampleBlend = true;
    this.setCamera( camera );
    this.setUniformObj( {
        thickness: 0.5,
        screenWidth: true,
        stroke: [ 0 / 255, 157 / 255, 118 / 255, 1.0 ],
        fill: [ 255 / 255, 147 / 255, 172 / 255, 0.0 ],
        backStroke: [ 0 / 255, 88 / 255, 83 / 255, 1.0 ],
        feather: 1.0,
        colorBack: false,
        noiseSmall: false,
        noiseBig: false,
        squeeze: false,
        squeezeEndpoint: 0.5,
        squeezeMiddle: 1.0,
        dash: false,
        dashRepeats: 10,
        dashLength: 0.5,
        dashOverlap: true,
        dashAnimate: false,
        dualStroke: false,
        secondThickness: 0.2,
    } );
    this.deactivate();

}

WireframeShader.prototype = Object.assign( Object.create( Shader.prototype ), {

    constructor: WireframeShader,

    preRender() {

        if ( this.currentUniformObj.stroke[ 3 ] < 1.0 || this.currentUniformObj.fill[ 3 ] < 1.0 ) {

            this.sampleBlend = true;
            this.cullFace = false;

        } else {

            this.sampleBlend = false;
            this.cullFace = true;

        }

        Shader.prototype.preRender.call( this );

    },

} );

Object.assign( WireframeShader, {

    vs: vs$8,
    fs: fs$8,

} );

var vs$9 = "#version 300 es\n#define GLSLIFY 1\n\n// https://github.com/spite/THREE.MeshLine/blob/master/src/THREE.MeshLine.js\n\nin vec3 a_position;\nin vec2 a_uv;\nin vec3 a_previous;\nin vec3 a_next;\nin float a_side;\nin float a_width;\nin float a_counters;\n\nuniform mat4 u_projMat;\nuniform mat4 u_viewMat;\nuniform mat4 u_worldMat;\nuniform vec2 u_resolution;\nuniform float u_linewidth;\nuniform float u_near;\nuniform float u_far;\nuniform bool u_screenSize;\n\nout vec2 v_uv;\nout float v_counters;\n\nvec2 fix(vec4 i, float aspect) {\n    vec2 res = i.xy / i.w;\n    res.x *= aspect;\n    return res;\n}\n\nvoid main() {\n    float aspect = u_resolution.x / u_resolution.y;\n    float pixelWidthRatio = 1.0 / (u_resolution.x * u_projMat[0][0]);\n\n    v_uv = a_uv;\n    v_counters = a_counters;\n\n    mat4 m = u_projMat * u_viewMat * u_worldMat;\n    vec4 finalPosition = m * vec4(a_position, 1.0);\n    vec4 prevPos = m * vec4(a_previous, 1.0);\n    vec4 nextPos = m * vec4(a_next, 1.0);\n\n    vec2 currentP = fix(finalPosition, aspect);\n    vec2 prevP = fix(prevPos, aspect);\n    vec2 nextP = fix(nextPos, aspect);\n\n    float pixelWidth = finalPosition.w * pixelWidthRatio;\n    float w = 1.8 * pixelWidth * u_linewidth * a_width * 10.0;\n\n    if(!u_screenSize) {\n        w = 1.8 * u_linewidth * a_width * 0.01;\n    }\n\n    vec2 dir;\n    if (nextP == currentP) dir = normalize(currentP - prevP);\n    else if (prevP == currentP) dir = normalize(nextP - currentP);\n    else {\n        vec2 dir1 = normalize(currentP - prevP);\n        vec2 dir2 = normalize(nextP - currentP);\n        dir = normalize(dir1 + dir2);\n    }\n\n    vec2 normal = vec2(-dir.y, dir.x);\n    normal.x /= aspect;\n    normal *= 0.5 * w;\n\n    vec4 offset = vec4(normal * a_side, 0.0, 1.0);\n    finalPosition.xy += offset.xy;\n    \n    gl_Position = finalPosition;\n}\n"; // eslint-disable-line

var fs$9 = "#version 300 es\n\nprecision mediump float;\n#define GLSLIFY 1\n\nin vec2 v_uv;\nin vec4 v_color;\nin float v_counters;\n\nuniform sampler2D u_texture;\nuniform bool u_useTexture;\nuniform float u_visibilityStart;\nuniform float u_visibilityEnd;\nuniform float u_tile;\nuniform vec2 u_repeat;\nuniform vec4 u_color;\n\nlayout(location = 0) out vec4 finalColor;\n\n#ifdef ColorPick\nuniform vec3 u_colorId;\nlayout(location = 1) out vec4 pickColor;\n#endif\n\nfloat aastep(float thickness, float d) {\n    return smoothstep(thickness, thickness + u_tile, d);\n}\n\nvoid main() {\n\n    vec4 c = u_color;\n    if(u_useTexture) c *= texture(u_texture, v_uv * u_repeat);\n\n    c.a *= aastep(0.0, (v_counters - u_visibilityStart) / (u_visibilityEnd - u_visibilityStart));\n    c.a *= aastep(0.0, (u_visibilityEnd - v_counters) / (u_visibilityEnd - u_visibilityStart));\n\n    finalColor = c;\n\n    #ifdef ColorPick\n    pickColor = vec4(u_colorId, 1.0);\n    #endif\n\n}\n\n"; // eslint-disable-line

function MeshLineShader( gl, camera ) {

    Shader.call( this, gl, MeshLineShader.vs, MeshLineShader.fs );

    this.setCamera( camera );

    this.setUniformObj( {
        linewidth: 1.0,
        color: [ 255 / 255, 105 / 255, 180 / 255, 255 / 255 ],
        screenSize: true,
        tile: 0.3,
    } );

    this.blend = true;
    this.depth = false;

    this.deactivate();

}

MeshLineShader.prototype = Object.assign( Object.create( Shader.prototype ), {

    constructor: MeshLineShader,

    preRender() {

        this.setUniformObj( {
            resolution: [ this.gl.drawingBufferWidth, this.gl.drawingBufferHeight ],
            near: this.camera.near,
            far: this.camera.far,
        } );

        Shader.prototype.preRender.call( this );

    },

} );

Object.assign( MeshLineShader, {

    vs: vs$9,
    fs: fs$9,

} );

function TransformShader( gl, vs, fs, transformFeedbackVaryings, transformFeedbackMode ) {

    Shader.call( this, gl, vs, fs, { transformFeedbackVaryings, transformFeedbackMode } );

    this.transformfeedbackInfo = createTransformFeedbackInfo( gl, this.program );
    this._customAttrib = true;
    this.deactivate();

}

TransformShader.prototype = Object.assign( Object.create( Shader.prototype ), {

    constructor: TransformShader,

    createBufferInfo( attribArrays ) {

        Object.keys( attribArrays ).forEach( ( prop ) => {

            const options = attribArrays[ prop ];
            if ( typeof options === 'number' )
                attribArrays[ prop ] = { data: options, drawType: this.gl.STREAM_COPY }; // eslint-disable-line
            else if ( typeof options.drawType === 'undefined' )
                attribArrays[ prop ].drawType = this.gl.STREAM_COPY; // eslint-disable-line

        } );
        return createBufferInfoFromArrays( this.gl, attribArrays );

    },

    createTransformFeedback( bufferInfo ) {

        return createTransformFeedback( this.gl, this.program, this.transformfeedbackInfo, bufferInfo );

    },

    transform( transformFeedback, model ) {

        this.gl.enable( this.gl.RASTERIZER_DISCARD );

        this.activate();
        this.gl.bindTransformFeedback( this.gl.TRANSFORM_FEEDBACK, transformFeedback );
        this.gl.beginTransformFeedback( model.mesh.drawMode );
        Shader.prototype.renderModel.call( this, model );
        this.gl.endTransformFeedback();
        this.gl.bindTransformFeedback( this.gl.TRANSFORM_FEEDBACK, null );

        this.gl.disable( this.gl.RASTERIZER_DISCARD );

        return this;

    },

} );

var vs$10 = "#version 300 es\n#define GLSLIFY 1\nin vec3 a_position;\n\n#ifdef UV_NUM\nin vec2 a_uv;\n#endif\n\n#ifdef HAS_VERTEXCOLOR\nin vec4 a_color;\nout vec4 v_color;\n#endif\n\nuniform mat4 u_mvpMat;\nuniform mat4 u_worldMat;\n\nout vec2 v_uv;\nout vec3 v_pos;\n\n#ifdef HAS_NORMAL\nin vec3 a_normal;\n    #ifdef HAS_TANGENT\n    in vec4 a_tangent;\n    #endif\nuniform mat3 u_normMat;\n#endif\n#ifdef HAS_NORMAL\n    #ifdef HAS_TANGENT\n    out mat3 v_TBN;\n    #else\n    out vec3 v_normal;\n    #endif\n#endif\n\n#ifdef JOINTS_NUM\nin vec4 a_joint;\nin vec4 a_weight;\n\n    #ifdef JOINT_VEC8\n    in vec4 a_joint1;\n    in vec4 a_weight1;\n    #endif\n\nuniform mat4 u_jointMatrix[JOINTS_NUM];\n#endif\n\n// max targets num is 8\n#ifdef MORPH_TARGET_NUM\n    uniform float u_morphWeights[MORPH_TARGET_NUM];\n    #ifdef HAS_MORPH_POSITION\n    in vec3 a_morphPositions_0;\n        #if MORPH_TARGET_NUM > 1\n        in vec3 a_morphPositions_1;\n        #endif\n        #if MORPH_TARGET_NUM > 2\n        in vec3 a_morphPositions_2;\n        #endif\n        #if MORPH_TARGET_NUM > 3\n        in vec3 a_morphPositions_3;\n        #endif\n        #if MORPH_TARGET_NUM > 4\n        in vec3 a_morphPositions_4;\n        #endif\n        #if MORPH_TARGET_NUM > 5\n        in vec3 a_morphPositions_5;\n        #endif\n        #if MORPH_TARGET_NUM > 6\n        in vec3 a_morphPositions_6;\n        #endif\n        #if MORPH_TARGET_NUM > 7\n        in vec3 a_morphPositions_7;\n        #endif\n    #endif\n\n    #ifdef HAS_MORPH_NORMAL\n    in vec3 a_morphNromals_0;\n        #if MORPH_TARGET_NUM > 1\n        in vec3 a_morphNromals_1;\n        #endif\n        #if MORPH_TARGET_NUM > 2\n        in vec3 a_morphNromals_2;\n        #endif\n        #if MORPH_TARGET_NUM > 3\n        in vec3 a_morphNromals_3;\n        #endif\n        #if MORPH_TARGET_NUM > 4\n        in vec3 a_morphNromals_4;\n        #endif\n        #if MORPH_TARGET_NUM > 5\n        in vec3 a_morphNromals_5;\n        #endif\n        #if MORPH_TARGET_NUM > 6\n        in vec3 a_morphNromals_6;\n        #endif\n        #if MORPH_TARGET_NUM > 7\n        in vec3 a_morphNromals_7;\n        #endif\n    #endif\n    #ifdef HAS_MORPH_TANGENT\n    in vec3 a_morphTangents_0;\n        #if MORPH_TARGET_NUM > 1\n        in vec3 a_morphTangents_1;\n        #endif\n        #if MORPH_TARGET_NUM > 2\n        in vec3 a_morphTangents_2;\n        #endif\n        #if MORPH_TARGET_NUM > 3\n        in vec3 a_morphTangents_3;\n        #endif\n        #if MORPH_TARGET_NUM > 4\n        in vec3 a_morphTangents_4;\n        #endif\n        #if MORPH_TARGET_NUM > 5\n        in vec3 a_morphTangents_5;\n        #endif\n        #if MORPH_TARGET_NUM > 6\n        in vec3 a_morphTangents_6;\n        #endif\n        #if MORPH_TARGET_NUM > 7\n        in vec3 a_morphTangents_7;\n        #endif\n    #endif\n#endif\n\nvoid main() {\n\n    vec3 position = a_position;\n\n    #ifdef HAS_NORMAL\n    vec3 normal = a_normal;\n        #ifdef HAS_TANGENT\n        vec3 tangent3 = a_tangent.xyz;\n        #endif\n    #endif\n\n    #ifdef MORPH_TARGET_NUM\n        #ifdef HAS_MORPH_POSITION\n        position += u_morphWeights[0] * a_morphPositions_0;\n            #if MORPH_TARGET_NUM > 1\n            position += u_morphWeights[1] * a_morphPositions_1;\n            #endif\n            #if MORPH_TARGET_NUM > 2\n            position += u_morphWeights[2] * a_morphPositions_2;\n            #endif\n            #if MORPH_TARGET_NUM > 3\n            position += u_morphWeights[3] * a_morphPositions_3;\n            #endif\n            #if MORPH_TARGET_NUM > 4\n            position += u_morphWeights[4] * a_morphPositions_4;\n            #endif\n            #if MORPH_TARGET_NUM > 5\n            position += u_morphWeights[5] * a_morphPositions_5;\n            #endif\n            #if MORPH_TARGET_NUM > 6\n            position += u_morphWeights[6] * a_morphPositions_6;\n            #endif\n            #if MORPH_TARGET_NUM > 7\n            position += u_morphWeights[7] * a_morphPositions_7;\n            #endif\n        #endif\n\n        #ifdef HAS_NORMAL\n            #ifdef HAS_MORPH_NORMAL\n            normal += u_morphWeights[0] * a_morphNromals_0;\n                #if MORPH_TARGET_NUM > 1\n                normal += u_morphWeights[1] * a_morphNromals_1;\n                #endif\n                #if MORPH_TARGET_NUM > 2\n                normal += u_morphWeights[2] * a_morphNromals_2;\n                #endif\n                #if MORPH_TARGET_NUM > 3\n                normal += u_morphWeights[3] * a_morphNromals_3;\n                #endif\n                #if MORPH_TARGET_NUM > 4\n                normal += u_morphWeights[4] * a_morphNromals_4;\n                #endif\n                #if MORPH_TARGET_NUM > 5\n                normal += u_morphWeights[5] * a_morphNromals_5;\n                #endif\n                #if MORPH_TARGET_NUM > 6\n                normal += u_morphWeights[6] * a_morphNromals_6;\n                #endif\n                #if MORPH_TARGET_NUM > 7\n                normal += u_morphWeights[7] * a_morphNromals_7;\n                #endif\n            #endif\n\n            #ifdef HAS_TANGENT\n                #ifdef HAS_MORPH_TANGENT\n                tangent3 += u_morphWeights[0] * a_morphTangents_0;\n                    #if MORPH_TARGET_NUM > 1\n                    tangent3 += u_morphWeights[1] * a_morphTangents_1;\n                    #endif\n                    #if MORPH_TARGET_NUM > 2\n                    tangent3 += u_morphWeights[2] * a_morphTangents_2;\n                    #endif\n                    #if MORPH_TARGET_NUM > 3\n                    tangent3 += u_morphWeights[3] * a_morphTangents_3;\n                    #endif\n                    #if MORPH_TARGET_NUM > 4\n                    tangent3 += u_morphWeights[4] * a_morphTangents_4;\n                    #endif\n                    #if MORPH_TARGET_NUM > 5\n                    tangent3 += u_morphWeights[5] * a_morphTangents_5;\n                    #endif\n                    #if MORPH_TARGET_NUM > 6\n                    tangent3 += u_morphWeights[6] * a_morphTangents_6;\n                    #endif\n                    #if MORPH_TARGET_NUM > 7\n                    tangent3 += u_morphWeights[7] * a_morphTangents_7;\n                    #endif\n                #endif\n            #endif\n\n        #endif\n        // TODO normals and tangents\n    #endif\n\n    #ifdef JOINTS_NUM\n    mat4 skinMatrix =\n        a_weight.x * u_jointMatrix[int(a_joint.x)] +\n        a_weight.y * u_jointMatrix[int(a_joint.y)] +\n        a_weight.z * u_jointMatrix[int(a_joint.z)] +\n        a_weight.w * u_jointMatrix[int(a_joint.w)];\n\n        #ifdef JOINT_VEC8\n        skinMatrix +=\n            a_weight1.x * u_jointMatrix[int(a_joint1.x)] +\n            a_weight1.y * u_jointMatrix[int(a_joint1.y)] +\n            a_weight1.z * u_jointMatrix[int(a_joint1.z)] +\n            a_weight1.w * u_jointMatrix[int(a_joint1.w)];\n        #endif\n    #endif\n\n    #ifdef HAS_NORMAL\n        #ifdef HAS_TANGENT\n            #ifdef JOINTS_NUM\n            mat3 skinInf = mat3(transpose(inverse(skinMatrix)));\n            vec3 normalW = normalize(u_normMat * skinInf * normal);\n            vec3 tangentW = normalize(u_normMat * skinInf * tangent3);\n            #else\n            vec3 normalW = normalize(u_normMat * normal);\n            vec3 tangentW = normalize(u_normMat * tangent3);\n            #endif\n        vec3 bitangentW = cross(normalW, tangentW) * a_tangent.w;\n        v_TBN = mat3(tangentW, bitangentW, normalW);\n        #else\n            #ifdef JOINTS_NUM\n            v_normal = u_normMat * transpose(inverse(mat3(skinMatrix))) * normal;\n            #else\n            v_normal = u_normMat * normal;\n            #endif\n        #endif\n    #endif\n\n    #ifdef JOINTS_NUM\n    vec4 worldPos = u_worldMat * skinMatrix * vec4(position, 1.0);\n    gl_Position = u_mvpMat * skinMatrix * vec4(position, 1.0);\n    #else\n    vec4 worldPos = u_worldMat * vec4(position, 1.0);\n    gl_Position = u_mvpMat * vec4(position, 1.0);\n    #endif\n    v_pos = worldPos.xyz / worldPos.w;\n    #ifdef UV_NUM\n    v_uv = a_uv;\n    #else\n    v_uv = vec2(0.0);\n    #endif\n\n    #ifdef HAS_VERTEXCOLOR\n    v_color = a_color;\n    #endif\n}\n"; // eslint-disable-line

var fs$10 = "#version 300 es\nprecision mediump float;\n#define GLSLIFY 1\n#define USE_IBL\nuniform vec3 u_lightDirection;\nuniform vec3 u_lightColor;\n\n#ifdef HAS_VERTEXCOLOR\nin vec4 v_color;\n#endif\n\n#ifdef ALPHA_MASK\nuniform float u_alphaCutoff;\n#endif\n\n#ifdef USE_IBL\nuniform samplerCube u_diffuseEnvMap;\nuniform samplerCube u_specularEnvMap;\nuniform sampler2D u_brdfLUT;\n#endif\n\n#ifdef HAS_BASECOLORMAP\nuniform sampler2D u_baseColorSampler;\n#endif\n#ifdef HAS_METALROUGHNESSMAP\nuniform sampler2D u_metallicRoughnessSampler;\n#endif\n#ifdef HAS_NORMALMAP\nuniform float u_normalScale;\nuniform sampler2D u_normalSampler;\n#endif\n#ifdef HAS_EMISSIVEMAP\nuniform sampler2D u_emissiveSampler;\nuniform vec3 u_emissiveFactor;\n#endif\n#ifdef HAS_OCCLUSIONMAP\nuniform sampler2D u_occlusionSampler;\nuniform float u_occlusionFactor;\n#endif\n\nuniform vec4 u_baseColorFactor;\nuniform vec2 u_metallicRoughnessValues;\n\nuniform vec3 u_camPos;\nin vec3 v_pos;\nin vec2 v_uv;\n\n#ifdef HAS_NORMAL\n    #ifdef HAS_TANGENT\n    in mat3 v_TBN;\n    #else\n    in vec3 v_normal;\n    #endif\n#endif\n\nstruct PBRInfo\n{\n    float NdotL;\n    float NdotV;\n    float NdotH;\n    float LdotH;\n    float VdotH;\n    float perceptualRoughness;\n    float metalness;\n    vec3 reflectance0;\n    vec3 reflectance90;\n    float alphaRoughness;\n    vec3 diffuseColor;\n    vec3 specularColor;\n};\n\nconst float M_PI = 3.141592653589793;\nconst float c_MinRoughness = 0.04;\n\nvec4 SRGBtoLINEAR(vec4 srgbIn)\n{\n    #ifdef MANUAL_SRGB\n        #ifdef SRGB_FAST_APPROXIMATION\n        vec3 linOut = pow(srgbIn.xyz, vec3(2.2));\n        #else\n        vec3 bLess = step(vec3(0.04045), srgbIn.xyz);\n        vec3 linOut = mix( srgbIn.xyz/vec3(12.92), pow((srgbIn.xyz+vec3(0.055))/vec3(1.055), vec3(2.4)), bLess);\n        #endif\n    return vec4(linOut, srgbIn.w);\n    #else\n    return srgbIn;\n    #endif\n}\n\nvec3 getNormal()\n{\n    #ifndef HAS_TANGENT\n    vec3 pos_dx = dFdx(v_pos);\n    vec3 pos_dy = dFdy(v_pos);\n    vec3 tex_dx = dFdx(vec3(v_uv, 0.0));\n    vec3 tex_dy = dFdy(vec3(v_uv, 0.0));\n    vec3 t = (tex_dy.t * pos_dx - tex_dx.t * pos_dy) / (tex_dx.s * tex_dy.t - tex_dy.s * tex_dx.t);\n        #ifdef HAS_NORMAL\n        vec3 ng = normalize(v_normal);\n        #else\n        vec3 ng = cross(pos_dx, pos_dy);\n        #endif\n    t = normalize(t - ng * dot(ng, t));\n    vec3 b = normalize(cross(ng, t));\n    mat3 tbn = mat3(t, b, ng);\n    #else\n    mat3 tbn = v_TBN;\n    #endif\n\n    #ifdef HAS_NORMALMAP\n    vec3 n = texture(u_normalSampler, v_uv).rgb;\n    n = normalize(tbn * ((2.0 * n - 1.0) * vec3(u_normalScale, u_normalScale, 1.0)));\n    #else\n    vec3 n = normalize(tbn[2].xyz);\n    #endif\n\n    return n;\n}\n\n#ifdef USE_IBL\nvec3 getIBLContribution(PBRInfo pbrInputs, vec3 n, vec3 reflection)\n{\n    float mipCount = 9.0;\n    float lod = (pbrInputs.perceptualRoughness * mipCount);\n    vec3 brdf = SRGBtoLINEAR(texture(u_brdfLUT, vec2(pbrInputs.NdotV, 1.0 - pbrInputs.perceptualRoughness))).rgb;\n    vec3 diffuseLight = SRGBtoLINEAR(texture(u_diffuseEnvMap, n)).rgb;\n\n    #ifdef USE_TEX_LOD\n    vec3 specularLight = SRGBtoLINEAR(texture(u_specularEnvMap, reflection, lod)).rgb;\n    #else\n    vec3 specularLight = SRGBtoLINEAR(texture(u_specularEnvMap, reflection)).rgb;\n    #endif\n\n    vec3 diffuse = diffuseLight * pbrInputs.diffuseColor;\n    vec3 specular = specularLight * (pbrInputs.specularColor * brdf.x + brdf.y);\n\n    return diffuse + specular;\n}\n#endif\n\nvec3 diffuse(PBRInfo pbrInputs)\n{\n    return pbrInputs.diffuseColor / M_PI;\n}\n\nvec3 specularReflection(PBRInfo pbrInputs)\n{\n    return pbrInputs.reflectance0 + (pbrInputs.reflectance90 - pbrInputs.reflectance0) * pow(clamp(1.0 - pbrInputs.VdotH, 0.0, 1.0), 5.0);\n}\n\nfloat geometricOcclusion(PBRInfo pbrInputs)\n{\n    float NdotL = pbrInputs.NdotL;\n    float NdotV = pbrInputs.NdotV;\n    float r = pbrInputs.alphaRoughness;\n\n    float attenuationL = 2.0 * NdotL / (NdotL + sqrt(r * r + (1.0 - r * r) * (NdotL * NdotL)));\n    float attenuationV = 2.0 * NdotV / (NdotV + sqrt(r * r + (1.0 - r * r) * (NdotV * NdotV)));\n    return attenuationL * attenuationV;\n}\n\nfloat microfacetDistribution(PBRInfo pbrInputs)\n{\n    float roughnessSq = pbrInputs.alphaRoughness * pbrInputs.alphaRoughness;\n    float f = (pbrInputs.NdotH * roughnessSq - pbrInputs.NdotH) * pbrInputs.NdotH + 1.0;\n    return roughnessSq / (M_PI * f * f);\n}\n\nlayout(location = 0) out vec4 finalColor;\n\n#ifdef ColorPick\nuniform vec3 u_colorId;\nlayout(location = 1) out vec4 pickColor;\n#endif\n\nvoid main() {\n\n    float perceptualRoughness = u_metallicRoughnessValues.y;\n    float metallic = u_metallicRoughnessValues.x;\n\n    #ifdef HAS_METALROUGHNESSMAP\n    vec4 mrSample = texture(u_metallicRoughnessSampler, v_uv);\n    perceptualRoughness = mrSample.g * perceptualRoughness;\n    metallic = mrSample.b * metallic;\n    #endif\n\n    perceptualRoughness = clamp(perceptualRoughness, c_MinRoughness, 1.0);\n    metallic = clamp(metallic, 0.0, 1.0);\n    float alphaRoughness = perceptualRoughness * perceptualRoughness;\n\n    #ifdef HAS_BASECOLORMAP\n    vec4 baseColor = SRGBtoLINEAR(texture(u_baseColorSampler, v_uv)) * u_baseColorFactor;\n    #else\n    vec4 baseColor = u_baseColorFactor;\n    #endif\n    #ifdef HAS_VERTEXCOLOR\n    baseColor.rgb *= v_color.rgb;\n    #endif\n\n    float alpha = baseColor.a;\n    #ifdef ALPHA_MASK\n    if(alpha < u_alphaCutoff){\n        discard;\n    }\n    #endif\n    #ifndef ALPHA_BLEND\n    alpha = 1.0;\n    #endif\n\n    vec3 f0 = vec3(0.04);\n    vec3 diffuseColor = baseColor.rgb * (vec3(1.0) - f0);\n    diffuseColor *= 1.0 - metallic;\n    vec3 specularColor = mix(f0, baseColor.rgb, metallic);\n\n    float reflectance = max(max(specularColor.r, specularColor.g), specularColor.b);\n\n    float reflectance90 = clamp(reflectance * 25.0, 0.0, 1.0);\n    vec3 specularEnvironmentR0 = specularColor.rgb;\n    vec3 specularEnvironmentR90 = vec3(1.0) * reflectance90;\n\n    vec3 n = getNormal();\n    vec3 v = normalize(u_camPos - v_pos);\n    vec3 l = normalize(u_lightDirection);\n    vec3 h = normalize(l+v);\n    vec3 reflection = -normalize(reflect(v, n));\n\n    float NdotL = clamp(dot(n, l), 0.001, 1.0);\n    float NdotV = abs(dot(n, v)) + 0.001;\n    float NdotH = clamp(dot(n, h), 0.0, 1.0);\n    float LdotH = clamp(dot(l, h), 0.0, 1.0);\n    float VdotH = clamp(dot(v, h), 0.0, 1.0);\n\n    PBRInfo pbrInputs = PBRInfo(\n        NdotL,\n        NdotV,\n        NdotH,\n        LdotH,\n        VdotH,\n        perceptualRoughness,\n        metallic,\n        specularEnvironmentR0,\n        specularEnvironmentR90,\n        alphaRoughness,\n        diffuseColor,\n        specularColor\n    );\n\n    vec3 F = specularReflection(pbrInputs);\n    float G = geometricOcclusion(pbrInputs);\n    float D = microfacetDistribution(pbrInputs);\n\n    vec3 diffuseContrib = (1.0 - F) * diffuse(pbrInputs);\n    vec3 specContrib = F * G * D / (4.0 * NdotL * NdotV);\n    vec3 color = NdotL * u_lightColor * (diffuseContrib + specContrib);\n\n    #ifdef USE_IBL\n    color += getIBLContribution(pbrInputs, n, reflection);\n    #endif\n\n    #ifdef HAS_OCCLUSIONMAP\n    float ao = texture(u_occlusionSampler, v_uv).r;\n    color = mix(color, color * ao, u_occlusionFactor);\n    #endif\n\n    #ifdef HAS_EMISSIVEMAP\n    vec3 emissive = SRGBtoLINEAR(texture(u_emissiveSampler, v_uv)).rgb * u_emissiveFactor;\n    color += emissive;\n    #endif\n\n    finalColor = vec4(color, alpha);\n    #ifdef ColorPick\n    pickColor = vec4(u_colorId, 1.0);\n    #endif\n}\n"; // eslint-disable-line

function GLTFShader( gl, camera ) {

    Shader.call( this, gl, GLTFShader.vs, GLTFShader.fs, { validateProgram: false } );

    this.setCamera( camera );
    this.deactivate();

}

GLTFShader.prototype = Object.assign( Object.create( Shader.prototype ), {

    constructor: GLTFShader,

    renderModel( model ) {

        if ( model.defines ) this.setDefines( ...model.defines );
        return Shader.prototype.renderModel.call( this, model );

    },

} );

Object.assign( GLTFShader, {

    vs: vs$10,
    fs: fs$10,

} );

function MeshLineModel( meshModel, widthCallback, name ) {

    const mesh = meshModel.mesh || meshModel;
    let array;
    if ( mesh && mesh.attribArrays && mesh.attribArrays[ ATTRIB_POSITION_NAME ] ) {

        if ( mesh.attribArrays[ ATTRIB_POSITION_NAME ].numComponents !== 3 ) {

            console.error( `MeshLine need 3 dimensions points array, but received ${mesh.attribArrays[ ATTRIB_POSITION_NAME ].numComponents} dimensions array.` );
            return null;

        }
        array = mesh.attribArrays[ ATTRIB_POSITION_NAME ].data;

    } else if ( Array.isArray( mesh ) ) {

        if ( mesh.length % 3 !== 0 ) {

            console.error( 'MeshLine need 3 dimensions points array, but received array\'s length divided by 3 not 0.' );
            return null;

        }
        array = mesh;

    } else {

        console.error( `MeshLine need 3 dimensions points array, but received Object ${meshModel}` );
        return null;

    }

    this.widthCallback = widthCallback;
    const meshc = this.process( array, name || ( mesh.name && `${mesh.name}_Meshline` ) || 'MeshLine' );

    Model.call( this, meshc );

}

MeshLineModel.prototype = Object.assign( Object.create( Model.prototype ), {

    constructor: MeshLineModel,

    comparePos( idx1, idx2 ) {

        const ai = idx1 * 6;
        const bi = idx2 * 6;
        return ( this.positions[ ai ] === this.positions[ bi ] && this.positions[ ai + 1 ] === this.positions[ bi + 1 ] && this.positions[ ai + 2 ] === this.positions[ bi + 2 ] );

    },

    copyPos( idx ) {

        const ai = idx * 6;
        return [ this.positions[ ai ], this.positions[ ai + 1 ], this.positions[ ai + 2 ] ];

    },

    process( array, name ) {

        this.positions = [];
        this.conters = [];

        for ( let i = 0; i < array.length; i += 3 ) {

            const c = i / ( array.length - 3 );
            this.positions.push( array[ i ], array[ i + 1 ], array[ i + 2 ] );
            this.positions.push( array[ i ], array[ i + 1 ], array[ i + 2 ] );
            this.conters.push( c );
            this.conters.push( c );

        }

        const l = this.positions.length / 6;

        this.previous = [];
        this.next = [];
        this.side = [];
        this.width = [];
        this.indices = [];
        this.uv = [];

        for ( let i = 0; i < l; i ++ ) {

            this.side.push( 1 );
            this.side.push( - 1 );

        }

        let w;
        for ( let i = 0; i < l; i ++ ) {

            if ( this.widthCallback ) w = this.widthCallback( i / l - 1 );
            else w = 1;
            this.width.push( w );
            this.width.push( w );

        }

        for ( let i = 0; i < l; i ++ ) {

            this.uv.push( i / ( l - 1 ), 0 );
            this.uv.push( i / ( l - 1 ), 1 );

        }

        let v;
        if ( this.comparePos( 0, l - 1 ) )
            v = this.copyPos( l - 2 );
        else
            v = this.copyPos( 0 );

        this.previous.push( v[ 0 ], v[ 1 ], v[ 2 ] );
        this.previous.push( v[ 0 ], v[ 1 ], v[ 2 ] );

        for ( let i = 0; i < l - 1; i ++ ) {

            v = this.copyPos( i );
            this.previous.push( v[ 0 ], v[ 1 ], v[ 2 ] );
            this.previous.push( v[ 0 ], v[ 1 ], v[ 2 ] );

        }

        for ( let i = 1; i < l; i ++ ) {

            v = this.copyPos( i );
            this.next.push( v[ 0 ], v[ 1 ], v[ 2 ] );
            this.next.push( v[ 0 ], v[ 1 ], v[ 2 ] );

        }

        if ( this.comparePos( l - 1, 0 ) )
            v = this.copyPos( 1 );
        else
            v = this.copyPos( l - 1 );

        this.next.push( v[ 0 ], v[ 1 ], v[ 2 ] );
        this.next.push( v[ 0 ], v[ 1 ], v[ 2 ] );

        for ( let i = 0; i < l - 1; i ++ ) {

            const n = i * 2;
            this.indices.push( n, n + 1, n + 2 );
            this.indices.push( n + 1, n + 3, n + 2 );

        }

        this.positionArray = [];
        this.positionArray.push( this.previous[ 0 ], this.previous[ 1 ], this.previous[ 2 ], 0, this.previous[ 0 ], this.previous[ 1 ], this.previous[ 2 ], 0 );
        for ( let i = 0; i < this.positions.length / 3; i ++ )
            this.positionArray.push( this.positions[ i * 3 ], this.positions[ i * 3 + 1 ], this.positions[ i * 3 + 2 ], this.side[ i ] );

        this.positionArray.push( this.next[ this.next.length - 3 ], this.next[ this.next.length - 2 ], this.next[ this.next.length - 1 ], 0, this.next[ this.next.length - 3 ], this.next[ this.next.length - 2 ], this.next[ this.next.length - 1 ], 0 );

        const attribArrays = {
            indices: { data: this.indices },
            a_previous: { data: this.previous, numComponents: 3, stride: 4 * Float32Array.BYTES_PER_ELEMENT },
            a_next: {
                data: this.next, numComponents: 3, offset: 16 * Float32Array.BYTES_PER_ELEMENT, stride: 4 * Float32Array.BYTES_PER_ELEMENT,
            },
            a_side: {
                data: this.side, numComponents: 1, offset: 11 * Float32Array.BYTES_PER_ELEMENT, stride: 4 * Float32Array.BYTES_PER_ELEMENT,
            },
            a_width: { data: this.width, numComponents: 1 },
            a_counters: { data: this.conters, numComponents: 1 },
        };
        attribArrays[ ATTRIB_POSITION_NAME ] = { data: this.positions, offset: 8 * Float32Array.BYTES_PER_ELEMENT, stride: 4 * Float32Array.BYTES_PER_ELEMENT };
        attribArrays[ ATTRIB_UV_NAME ] = { data: this.uv };

        return new Mesh( name, attribArrays );

    },

    createBufferInfo( gl ) {

        const positionBuffer = createBufferFromArray( gl, this.positionArray, 'position' );
        this.mesh.attribArrays[ ATTRIB_POSITION_NAME ].buffer = positionBuffer;
        this.mesh.attribArrays.a_previous.buffer = positionBuffer;
        this.mesh.attribArrays.a_next.buffer = positionBuffer;
        this.mesh.attribArrays.a_side.buffer = positionBuffer;

        Model.prototype.createBufferInfo.call( this, gl );

    },

} );

const defaults = {
    textureColor: new Uint8Array( [ 255, 105, 180, 255 ] ),
    textureOptions: {},
};

/* PixelFormat */
const ALPHA = 0x1906;
const RGB = 0x1907;
const RGBA = 0x1908;
const LUMINANCE = 0x1909;
const LUMINANCE_ALPHA = 0x190A;
const DEPTH_COMPONENT = 0x1902;
const DEPTH_STENCIL = 0x84F9;

const R8 = 0x8229;
const R8_SNORM = 0x8F94;
const R16F = 0x822D;
const R32F = 0x822E;
const R8UI = 0x8232;
const R8I = 0x8231;
const RG16UI = 0x823A;
const RG16I = 0x8239;
const RG32UI = 0x823C;
const RG32I = 0x823B;
const RG8 = 0x822B;
const RG8_SNORM = 0x8F95;
const RG16F = 0x822F;
const RG32F = 0x8230;
const RG8UI = 0x8238;
const RG8I = 0x8237;
const R16UI = 0x8234;
const R16I = 0x8233;
const R32UI = 0x8236;
const R32I = 0x8235;
const RGB8 = 0x8051;
const SRGB8 = 0x8C41;
const RGB565 = 0x8D62;
const RGB8_SNORM = 0x8F96;
const R11F_G11F_B10F = 0x8C3A;
const RGB9_E5 = 0x8C3D;
const RGB16F = 0x881B;
const RGB32F = 0x8815;
const RGB8UI = 0x8D7D;
const RGB8I = 0x8D8F;
const RGB16UI = 0x8D77;
const RGB16I = 0x8D89;
const RGB32UI = 0x8D71;
const RGB32I = 0x8D83;
const RGBA8 = 0x8058;
const SRGB8_ALPHA8 = 0x8C43;
const RGBA8_SNORM = 0x8F97;
const RGB5_A1 = 0x8057;
const RGBA4 = 0x8056;
const RGB10_A2 = 0x8059;
const RGBA16F = 0x881A;
const RGBA32F = 0x8814;
const RGBA8UI = 0x8D7C;
const RGBA8I = 0x8D8E;
const RGB10_A2UI = 0x906F;
const RGBA16UI = 0x8D76;
const RGBA16I = 0x8D88;
const RGBA32I = 0x8D82;
const RGBA32UI = 0x8D70;

const DEPTH_COMPONENT16 = 0x81A5;
const DEPTH_COMPONENT24 = 0x81A6;
const DEPTH_COMPONENT32F = 0x8CAC;
const DEPTH32F_STENCIL8 = 0x8CAD;
const DEPTH24_STENCIL8 = 0x88F0;

/* DataType */
const BYTE$1 = 0x1400;
const UNSIGNED_BYTE$1 = 0x1401;
const SHORT$1 = 0x1402;
const UNSIGNED_SHORT$1 = 0x1403;
const INT$2 = 0x1404;
const UNSIGNED_INT$2 = 0x1405;
const FLOAT$2 = 0x1406;
const UNSIGNED_SHORT_4_4_4_4$1 = 0x8033;
const UNSIGNED_SHORT_5_5_5_1$1 = 0x8034;
const UNSIGNED_SHORT_5_6_5$1 = 0x8363;
const HALF_FLOAT$1 = 0x140B;
const HALF_FLOAT_OES = 0x8D61; // Thanks Khronos for making this different >:(
const UNSIGNED_INT_2_10_10_10_REV$1 = 0x8368;
const UNSIGNED_INT_10F_11F_11F_REV$1 = 0x8C3B;
const UNSIGNED_INT_5_9_9_9_REV$1 = 0x8C3E;
const FLOAT_32_UNSIGNED_INT_24_8_REV$1 = 0x8DAD;
const UNSIGNED_INT_24_8$1 = 0x84FA;

const RG = 0x8227;
const RG_INTEGER = 0x8228;
const RED = 0x1903;
const RED_INTEGER = 0x8D94;
const RGB_INTEGER = 0x8D98;
const RGBA_INTEGER = 0x8D99;

const textureInternalFormatInfo = {};
{

    // NOTE: these properties need unique names so we can let Uglify mangle the name.
    const t = textureInternalFormatInfo;
    // unsized formats
    t[ ALPHA ] = {
        textureFormat: ALPHA, colorRenderable: true, textureFilterable: true, bytesPerElement: [ 1, 2, 2, 4 ], type: [ UNSIGNED_BYTE$1, HALF_FLOAT$1, HALF_FLOAT_OES, FLOAT$2 ],
    };
    t[ LUMINANCE ] = {
        textureFormat: LUMINANCE, colorRenderable: true, textureFilterable: true, bytesPerElement: [ 1, 2, 2, 4 ], type: [ UNSIGNED_BYTE$1, HALF_FLOAT$1, HALF_FLOAT_OES, FLOAT$2 ],
    };
    t[ LUMINANCE_ALPHA ] = {
        textureFormat: LUMINANCE_ALPHA, colorRenderable: true, textureFilterable: true, bytesPerElement: [ 2, 4, 4, 8 ], type: [ UNSIGNED_BYTE$1, HALF_FLOAT$1, HALF_FLOAT_OES, FLOAT$2 ],
    };
    t[ RGB ] = {
        textureFormat: RGB, colorRenderable: true, textureFilterable: true, bytesPerElement: [ 3, 6, 6, 12, 2 ], type: [ UNSIGNED_BYTE$1, HALF_FLOAT$1, HALF_FLOAT_OES, FLOAT$2, UNSIGNED_SHORT_5_6_5$1 ],
    };
    t[ RGBA ] = {
        textureFormat: RGBA, colorRenderable: true, textureFilterable: true, bytesPerElement: [ 4, 8, 8, 16, 2, 2 ], type: [ UNSIGNED_BYTE$1, HALF_FLOAT$1, HALF_FLOAT_OES, FLOAT$2, UNSIGNED_SHORT_4_4_4_4$1, UNSIGNED_SHORT_5_5_5_1$1 ],
    };

    // sized formats
    t[ R8 ] = {
        textureFormat: RED, colorRenderable: true, textureFilterable: true, bytesPerElement: 1, type: UNSIGNED_BYTE$1,
    };
    t[ R8_SNORM ] = {
        textureFormat: RED, colorRenderable: false, textureFilterable: true, bytesPerElement: 1, type: BYTE$1,
    };
    t[ R16F ] = {
        textureFormat: RED, colorRenderable: false, textureFilterable: true, bytesPerElement: [ 4, 2 ], type: [ FLOAT$2, HALF_FLOAT$1 ],
    };
    t[ R32F ] = {
        textureFormat: RED, colorRenderable: false, textureFilterable: false, bytesPerElement: 4, type: FLOAT$2,
    };
    t[ R8UI ] = {
        textureFormat: RED_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 1, type: UNSIGNED_BYTE$1,
    };
    t[ R8I ] = {
        textureFormat: RED_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 1, type: BYTE$1,
    };
    t[ R16UI ] = {
        textureFormat: RED_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 2, type: UNSIGNED_SHORT$1,
    };
    t[ R16I ] = {
        textureFormat: RED_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 2, type: SHORT$1,
    };
    t[ R32UI ] = {
        textureFormat: RED_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: UNSIGNED_INT$2,
    };
    t[ R32I ] = {
        textureFormat: RED_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: INT$2,
    };
    t[ RG8 ] = {
        textureFormat: RG, colorRenderable: true, textureFilterable: true, bytesPerElement: 2, type: UNSIGNED_BYTE$1,
    };
    t[ RG8_SNORM ] = {
        textureFormat: RG, colorRenderable: false, textureFilterable: true, bytesPerElement: 2, type: BYTE$1,
    };
    t[ RG16F ] = {
        textureFormat: RG, colorRenderable: false, textureFilterable: true, bytesPerElement: [ 8, 4 ], type: [ FLOAT$2, HALF_FLOAT$1 ],
    };
    t[ RG32F ] = {
        textureFormat: RG, colorRenderable: false, textureFilterable: false, bytesPerElement: 8, type: FLOAT$2,
    };
    t[ RG8UI ] = {
        textureFormat: RG_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 2, type: UNSIGNED_BYTE$1,
    };
    t[ RG8I ] = {
        textureFormat: RG_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 2, type: BYTE$1,
    };
    t[ RG16UI ] = {
        textureFormat: RG_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: UNSIGNED_SHORT$1,
    };
    t[ RG16I ] = {
        textureFormat: RG_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: SHORT$1,
    };
    t[ RG32UI ] = {
        textureFormat: RG_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 8, type: UNSIGNED_INT$2,
    };
    t[ RG32I ] = {
        textureFormat: RG_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 8, type: INT$2,
    };
    t[ RGB8 ] = {
        textureFormat: RGB, colorRenderable: true, textureFilterable: true, bytesPerElement: 3, type: UNSIGNED_BYTE$1,
    };
    t[ SRGB8 ] = {
        textureFormat: RGB, colorRenderable: false, textureFilterable: true, bytesPerElement: 3, type: UNSIGNED_BYTE$1,
    };
    t[ RGB565 ] = {
        textureFormat: RGB, colorRenderable: true, textureFilterable: true, bytesPerElement: [ 3, 2 ], type: [ UNSIGNED_BYTE$1, UNSIGNED_SHORT_5_6_5$1 ],
    };
    t[ RGB8_SNORM ] = {
        textureFormat: RGB, colorRenderable: false, textureFilterable: true, bytesPerElement: 3, type: BYTE$1,
    };
    t[ R11F_G11F_B10F ] = {
        textureFormat: RGB, colorRenderable: false, textureFilterable: true, bytesPerElement: [ 12, 6, 4 ], type: [ FLOAT$2, HALF_FLOAT$1, UNSIGNED_INT_10F_11F_11F_REV$1 ],
    };
    t[ RGB9_E5 ] = {
        textureFormat: RGB, colorRenderable: false, textureFilterable: true, bytesPerElement: [ 12, 6, 4 ], type: [ FLOAT$2, HALF_FLOAT$1, UNSIGNED_INT_5_9_9_9_REV$1 ],
    };
    t[ RGB16F ] = {
        textureFormat: RGB, colorRenderable: false, textureFilterable: true, bytesPerElement: [ 12, 6 ], type: [ FLOAT$2, HALF_FLOAT$1 ],
    };
    t[ RGB32F ] = {
        textureFormat: RGB, colorRenderable: false, textureFilterable: false, bytesPerElement: 12, type: FLOAT$2,
    };
    t[ RGB8UI ] = {
        textureFormat: RGB_INTEGER, colorRenderable: false, textureFilterable: false, bytesPerElement: 3, type: UNSIGNED_BYTE$1,
    };
    t[ RGB8I ] = {
        textureFormat: RGB_INTEGER, colorRenderable: false, textureFilterable: false, bytesPerElement: 3, type: BYTE$1,
    };
    t[ RGB16UI ] = {
        textureFormat: RGB_INTEGER, colorRenderable: false, textureFilterable: false, bytesPerElement: 6, type: UNSIGNED_SHORT$1,
    };
    t[ RGB16I ] = {
        textureFormat: RGB_INTEGER, colorRenderable: false, textureFilterable: false, bytesPerElement: 6, type: SHORT$1,
    };
    t[ RGB32UI ] = {
        textureFormat: RGB_INTEGER, colorRenderable: false, textureFilterable: false, bytesPerElement: 12, type: UNSIGNED_INT$2,
    };
    t[ RGB32I ] = {
        textureFormat: RGB_INTEGER, colorRenderable: false, textureFilterable: false, bytesPerElement: 12, type: INT$2,
    };
    t[ RGBA8 ] = {
        textureFormat: RGBA, colorRenderable: true, textureFilterable: true, bytesPerElement: 4, type: UNSIGNED_BYTE$1,
    };
    t[ SRGB8_ALPHA8 ] = {
        textureFormat: RGBA, colorRenderable: true, textureFilterable: true, bytesPerElement: 4, type: UNSIGNED_BYTE$1,
    };
    t[ RGBA8_SNORM ] = {
        textureFormat: RGBA, colorRenderable: false, textureFilterable: true, bytesPerElement: 4, type: BYTE$1,
    };
    t[ RGB5_A1 ] = {
        textureFormat: RGBA, colorRenderable: true, textureFilterable: true, bytesPerElement: [ 4, 2, 4 ], type: [ UNSIGNED_BYTE$1, UNSIGNED_SHORT_5_5_5_1$1, UNSIGNED_INT_2_10_10_10_REV$1 ],
    };
    t[ RGBA4 ] = {
        textureFormat: RGBA, colorRenderable: true, textureFilterable: true, bytesPerElement: [ 4, 2 ], type: [ UNSIGNED_BYTE$1, UNSIGNED_SHORT_4_4_4_4$1 ],
    };
    t[ RGB10_A2 ] = {
        textureFormat: RGBA, colorRenderable: true, textureFilterable: true, bytesPerElement: 4, type: UNSIGNED_INT_2_10_10_10_REV$1,
    };
    t[ RGBA16F ] = {
        textureFormat: RGBA, colorRenderable: false, textureFilterable: true, bytesPerElement: [ 16, 8 ], type: [ FLOAT$2, HALF_FLOAT$1 ],
    };
    t[ RGBA32F ] = {
        textureFormat: RGBA, colorRenderable: false, textureFilterable: false, bytesPerElement: 16, type: FLOAT$2,
    };
    t[ RGBA8UI ] = {
        textureFormat: RGBA_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: UNSIGNED_BYTE$1,
    };
    t[ RGBA8I ] = {
        textureFormat: RGBA_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: BYTE$1,
    };
    t[ RGB10_A2UI ] = {
        textureFormat: RGBA_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: UNSIGNED_INT_2_10_10_10_REV$1,
    };
    t[ RGBA16UI ] = {
        textureFormat: RGBA_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 8, type: UNSIGNED_SHORT$1,
    };
    t[ RGBA16I ] = {
        textureFormat: RGBA_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 8, type: SHORT$1,
    };
    t[ RGBA32I ] = {
        textureFormat: RGBA_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 16, type: INT$2,
    };
    t[ RGBA32UI ] = {
        textureFormat: RGBA_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 16, type: UNSIGNED_INT$2,
    };
    // Sized Internal
    t[ DEPTH_COMPONENT16 ] = {
        textureFormat: DEPTH_COMPONENT, colorRenderable: true, textureFilterable: false, bytesPerElement: [ 2, 4 ], type: [ UNSIGNED_SHORT$1, UNSIGNED_INT$2 ],
    };
    t[ DEPTH_COMPONENT24 ] = {
        textureFormat: DEPTH_COMPONENT, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: UNSIGNED_INT$2,
    };
    t[ DEPTH_COMPONENT32F ] = {
        textureFormat: DEPTH_COMPONENT, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: FLOAT$2,
    };
    t[ DEPTH24_STENCIL8 ] = {
        textureFormat: DEPTH_STENCIL, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: UNSIGNED_INT_24_8$1,
    };
    t[ DEPTH32F_STENCIL8 ] = {
        textureFormat: DEPTH_STENCIL, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: FLOAT_32_UNSIGNED_INT_24_8_REV$1,
    };

    Object.keys( t ).forEach( ( internalFormat ) => {

        const info = t[ internalFormat ];
        info.bytesPerElementMap = {};
        if ( Array.isArray( info.bytesPerElement ) )
            info.bytesPerElement.forEach( ( bytesPerElement, ndx ) => {

                const type = info.type[ ndx ];
                info.bytesPerElementMap[ type ] = bytesPerElement;

            } );
        else {

            const { type } = info;
            info.bytesPerElementMap[ type ] = info.bytesPerElement;

        }

    } );

}

function empty() {
}

function getFormatAndTypeFromInternalFormat( internalFromat ) {

    const info = textureInternalFormatInfo[ internalFromat ];

    if ( ! info )
        throw new Error( 'unknown internal format' );


    return {
        format: info.textureFormat,
        type: Array.isArray( info.type ) ? info.type[ 0 ] : info.type,
    };

}

function make1Pixel( color ) {

    const colorUsed = color || defaults.textureColor;
    if ( isArrayBuffer( colorUsed ) ) return colorUsed;
    return new Uint8Array( [ colorUsed[ 0 ], colorUsed[ 1 ], colorUsed[ 2 ], colorUsed[ 3 ] ] );

}

function setTextureTo1PixelColor( gl, tex, options ) {

    const opts = options || defaults.textureOptions;
    const target = opts.target || gl.TEXTURE_2D;
    gl.bindTexture( target, tex );
    if ( opts.color === false ) return;

    const color = make1Pixel( options.color );
    if ( target === gl.TEXTURE_CUBE_MAP )
        for ( let i = 0; i < 6; i ++ )
            gl.texImage2D( gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, color );
    else if ( target === gl.TEXTURE_3D || target === gl.TEXTURE_2D_ARRAY )
        gl.texImage3D( target, 0, gl.RGBA, 1, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, color );
    else
        gl.texImage2D( target, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, color );

}

const getDefaultCrossOrigin = ( function () {

    const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi; // eslint-disable-line
    const regex = new RegExp( expression );

    return function getDefaultCrossOrigin( url ) { // eslint-disable-line

        if ( url.match( regex ) && ( new URL( url ) ).origin !== window.location.origin )
            return 'anonymous';

        return undefined;

    };

}() );

function loadImage( url, crossOrigin, callback ) {

    const cb = callback || empty;
    let img = new Image();
    const cors = crossOrigin !== undefined ? crossOrigin : getDefaultCrossOrigin( url );
    if ( cors !== undefined )
        img.crossOrigin = cors;


    function clearEventHandlers() {

        img.removeEventListener( 'error', onError ); // eslint-disable-line
        img.removeEventListener( 'load', onLoad ); // eslint-disable-line
        img = null;

    }

    function onError() {

        const msg = `couldn't load image: ${url}`;
        cb( msg, img );
        clearEventHandlers();

    }

    function onLoad() {

        cb( null, img );
        clearEventHandlers();

    }

    img.addEventListener( 'error', onError );
    img.addEventListener( 'load', onLoad );
    img.src = url;
    return img;

}

const lastPackState = {};

function savePatcState( gl, options ) {

    if ( options.colorspaceConversion !== undefined ) {

        lastPackState.colorspaceConversion = gl.getParameter( gl.UNPACK_COLORSPACE_CONVERSION_WEBGL );
        gl.pixelStorei( gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, options.colorspaceConversion );

    }
    if ( options.premultiplyAlpha !== undefined ) {

        lastPackState.premultiplyAlpha = gl.getParameter( gl.UNPACH_PREMULTIPLY_ALPHA_WEBGL );
        gl.pixelStorei( gl.UNPACH_PREMULTIPLY_ALPHA_WEBGL, options.premultiplyAlpha );

    }
    if ( options.flipY !== undefined ) {

        lastPackState.flipY = gl.getParameter( gl.UNPACK_FLIP_Y_WEBGL );
        gl.pixelStorei( gl.UNPACK_FLIP_Y_WEBGL, options.flipY );

    }

}

function restorePackState( gl, options ) {

    if ( options.colorspaceConversion !== undefined )
        gl.pixelStorei( gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, lastPackState.colorspaceConversion );
    if ( options.premultiplyAlpha !== undefined )
        gl.pixelStorei( gl.UNPACH_PREMULTIPLY_ALPHA_WEBGL, lastPackState.premultiplyAlpha );
    if ( options.flipY !== undefined )
        gl.pixelStorei( gl.UNPACK_FLIP_Y_WEBGL, lastPackState.flipY );

}

function getCubeFacesOrder( gl, options ) {

    const opts = options || {};
    return opts.cubeFaceOrder || [
        gl.TEXTURE_CUBE_MAP_POSITIVE_X,
        gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
        gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
        gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
        gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
        gl.TEXTURE_CUBE_MAP_NEGATIVE_Z,
    ];

}

function getCubeFacesWithIdx( gl, options ) {

    const faces = getCubeFacesOrder( gl, options );

    const facesWithIdx = faces.map( ( face, idx ) => ( { face, idx } ) );

    facesWithIdx.sort( ( a, b ) => ( a.face - b.face ) );

    return facesWithIdx;

}

function shouldAutoSetTextureFiltering( options ) {

    return options.auto === true || ( options.auto === undefined && options.level === undefined );

}

function isPowerOf2( value ) {

    return ( value & ( value - 1 ) ) === 0;

}

function canGenerateMipmap( gl, width, height, internalFormat ) {

    if ( ! isWebGL2( gl ) )
        return isPowerOf2( width ) && isPowerOf2( height );

    const info = textureInternalFormatInfo[ internalFormat ];
    if ( ! info )
        throw new Error( 'unknown internal format' );
    return info.colorRenderable && info.textureFilterable;

}

function canFilter( internalFormat ) {

    const info = textureInternalFormatInfo[ internalFormat ];
    if ( ! info )
        throw new Error( 'unknow internal format' );

    return info.textureFilterable;

}

function setTextureFiltering( gl, tex, options, widthP, heightP, internalFormatP, typeP ) {

    const opts = options || defaults.textureOptions;
    const internalFormat = internalFormatP || gl.RGBA;
    const type = typeP || gl.UNSIGNED_SHORT;
    const target = opts.target || gl.TEXTURE_2D;
    const width = widthP || opts.width;
    const height = heightP || opts.height;
    gl.bindTexture( target, tex );
    if ( canGenerateMipmap( gl, width, height, internalFormat, type ) )
        gl.generateMipmap( target );
    else {

        const filtering = canFilter( internalFormat ) ? gl.LINEAR : gl.NEAREST;
        gl.texParameteri( target, gl.TEXTURE_MIN_FILTER, filtering );
        gl.texParameteri( target, gl.TEXTURE_MAG_FILTER, filtering );
        gl.texParameteri( target, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE );
        gl.texParameteri( target, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE );

    }

}

const WebGLSamplerCtor = window.WebGLSampler || function NoWebGLSampler() {};

function setTextureSamplerParameters( gl, target, parameteriFn, options ) {

    if ( options.minMag ) {

        parameteriFn.call( gl, target, gl.TEXTURE_MIN_FILTER, options.minMag );
        parameteriFn.call( gl, target, gl.TEXTURE_MAG_FILTER, options.minMag );

    }

    if ( options.min )
        parameteriFn.call( gl, target, gl.TEXTURE_MIN_FILTER, options.min );

    if ( options.mag )
        parameteriFn.call( gl, target, gl.TEXTURE_MAG_FILTER, options.mag );

    if ( options.wrap ) {

        parameteriFn.call( gl, target, gl.TEXTURE_WRAP_S, options.wrap );
        parameteriFn.call( gl, target, gl.TEXTURE_WRAP_T, options.wrap );
        if ( target === gl.TEXTURE_3D || target instanceof WebGLSamplerCtor )
            parameteriFn.call( gl, target, gl.TEXTURE_WRAP_R, options.wrap );

    }

    if ( options.wrapR )
        parameteriFn.call( gl, target, gl.TEXTURE_WRAP_R, options.wrapR );

    if ( options.wrapS )
        parameteriFn.call( gl, target, gl.TEXTURE_WRAP_S, options.wrapS );

    if ( options.wrapT )
        parameteriFn.call( gl, target, gl.TEXTURE_WRAP_T, options.wrapT );

    if ( options.minLod )
        parameteriFn.call( gl, target, gl.TEXTURE_MIN_LOD, options.minLod );

    if ( options.maxLod )
        parameteriFn.call( gl, target, gl.TEXTURE_MAX_LOD, options.maxLod );

    if ( options.baseLevel )
        parameteriFn.call( gl, target, gl.TEXTURE_BASE_LEVEL, options.baseLevel );

    if ( options.maxLevel )
        parameteriFn.call( gl, target, gl.TEXTURE_MAX_LEVEL, options.maxLevel );

}

function setTextureParameters( gl, tex, options ) {

    const target = options.target || gl.TEXTURE_2D;
    gl.bindTexture( target, tex );
    setTextureSamplerParameters( gl, target, gl.texParameteri, options );

}

const ctx = document.createElement( 'canvas' ).getContext( '2d' );

function setTextureFromElement( gl, tex, element, options ) {

    const opts = options || defaults.textureOptions;
    const target = opts.target || gl.TEXTURE_2D;
    const level = opts.level || 0;
    let { width, height } = element;
    const internalFormat = opts.internalFormat || opts.format || gl.RGBA;
    const formatType = getFormatAndTypeFromInternalFormat( internalFormat );
    const format = opts.format || formatType.format;
    const type = opts.type || formatType.type;

    savePatcState( gl, opts );
    gl.bindTexture( target, tex );
    if ( target === gl.TEXTURE_CUBE_MAP ) {

        const imgWidth = element.width;
        const imgHeight = element.height;
        let size;
        let slices;
        if ( imgWidth / 6 === imgHeight ) {

            size = imgHeight;
            slices = [ 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0 ];

        } else if ( imgHeight / 6 === imgWidth ) {

            size = imgWidth;
            slices = [ 0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5 ];

        } else if ( imgWidth / 3 === imgHeight / 2 ) {

            size = imgWidth / 3;
            slices = [ 0, 0, 1, 0, 2, 0, 0, 1, 1, 1, 2, 1 ];

        } else if ( imgWidth / 2 === imgHeight / 3 ) {

            size = imgWidth / 2;
            slices = [ 0, 0, 1, 0, 0, 1, 1, 1, 0, 2, 1, 2 ];

        } else
            throw new Error( `can't guess cube map from element: ${element.src ? element.src : element.nodeName}` );

        ctx.canvas.width = size;
        ctx.canvas.height = size;
        width = size;
        height = size;

        getCubeFacesWithIdx( gl, options ).forEach( ( f ) => {

            const xOffset = slices[ ( f.idx * 2 ) + 0 ] * size;
            const yOffset = slices[ ( f.idx * 2 ) + 1 ] * size;
            ctx.drawImage( element, xOffset, yOffset, size, size, 0, 0, size, size );
            gl.texImage2D( f.face, level, internalFormat, format, type, ctx.canvas );

        } );

        ctx.canvas.width = 1;
        ctx.canvas.height = 1;

    } else if ( target === gl.TEXTURE_3D ) {

        const smallest = Math.min( element.width, element, height );
        const largest = Math.max( element.width, element.height );
        const depth = largest / smallest;
        if ( depth % 1 !== 0 )
            throw new Error( 'can not compute TEXTURE_3D dimensions of element' );

        const xMult = element.width === largest ? 1 : 0;
        const yMult = element.height === largest ? 1 : 0;
        gl.texImage3D( target, level, internalFormat, smallest, smallest, smallest, 0, format, type, null );
        ctx.canvas.width = smallest;
        ctx.canvas.height = smallest;
        for ( let d = 0; d < depth; d ++ ) {

            const srcX = d * smallest * xMult;
            const srcY = d * smallest * yMult;
            const srcW = smallest;
            const srcH = smallest;
            const dstX = 0;
            const dstY = 0;
            const dstW = smallest;
            const dstH = smallest;
            ctx.drawImage( element, srcX, srcY, srcW, srcH, dstX, dstY, dstW, dstH );
            gl.texSubImage3D( target, level, 0, 0, d, smallest, smallest, 1, format, type, ctx.canvas );

        }

        ctx.canvas.width = 1;
        ctx.canvas.height = 1;

    } else
        gl.texImage2D( target, level, internalFormat, format, type, element );

    restorePackState( gl, options );

    if ( shouldAutoSetTextureFiltering( opts ) )
        setTextureFiltering( gl, tex, options, width, height, internalFormat, type );

    setTextureParameters( gl, tex, options );
    return tex;

}

function loadTextureFromUrl( gl, tex, options, callback ) {

    const cb = callback || empty;
    const opts = options || defaults.textureOptions;
    setTextureTo1PixelColor( gl, tex, opts );
    const asyncOpts = Object.assign( {}, opts );
    const img = loadImage( opts.src, asyncOpts.crossOrigin, ( err, imgBK ) => {

        if ( err )
            cb( err, tex, img );
        else {

            setTextureFromElement( gl, tex, imgBK, asyncOpts );
            cb( null, tex, imgBK );

        }

    } );
    return img;

}

function getTextureTypeFromArrayType( gl, src, defaultType ) {

    if ( isArrayBuffer( src ) )
        return getGLTypeFromTypedArray( src );


    return defaultType || gl.UNSIGNED_BYTE;

}

function getBytesPerElementForInternalFromat( internalFromat, type ) {

    const info = textureInternalFormatInfo[ internalFromat ];
    if ( ! info )
        throw new Error( 'unknown internal format' );
    const bytesPerElement = info.bytesPerElementMap[ type ];
    if ( bytesPerElement === undefined )
        throw new Error( 'unknown internal format' );
    return bytesPerElement;

}

function guessDimensions( gl, target, width, height, numElements ) {

    if ( numElements % 1 !== 0 )
        throw new Error( 'can\'t guess dimensions' );

    let cWith;
    let cHeight;
    if ( ! width && ! height ) {

        const size = Math.sqrt( numElements / ( target === gl.TEXTURE_CUBE_MAP ? 6 : 1 ) );
        if ( size % 1 === 0 ) {

            cWith = size;
            cHeight = size;

        } else {

            cWith = numElements;
            cHeight = 1;

        }

    } else if ( ! height ) {

        cHeight = numElements / width;
        if ( cHeight % 1 )
            throw new Error( 'can\'t guess dimensions' );

    } else if ( ! width ) {

        cWith = numElements / height;
        if ( cWith % 1 )
            throw new Error( 'can\'t guess dimensions' );

    }

    return {
        width: cWith,
        height: cHeight,
    };

}

function setTextureFromArray( gl, tex, src, options ) {

    const opts = options || defaults.textureOptions;
    const target = opts.target || gl.TEXTURE_2D;
    gl.bindTexture( target, tex );
    let { width, height, depth } = opts;
    const level = opts.level || 0;
    const internalFromat = opts.internalFormat || opts.format || gl.RGBA;
    const formatType = getFormatAndTypeFromInternalFormat( internalFromat );
    const format = opts.format || formatType.format;
    const type = opts.format || getTextureTypeFromArrayType( gl, src, formatType.type );
    let typedSrc = src;
    if ( ! isArrayBuffer( typedSrc ) ) {

        const Type = getTypedArrayTypeFromGLType( type );
        typedSrc = new Type( src );

    } else if ( typedSrc instanceof Uint8ClampedArray )
        typedSrc = new Uint8Array( typedSrc.buffer );

    const bytesPerElement = getBytesPerElementForInternalFromat( internalFromat, type );
    const numElements = typedSrc.byteLength / bytesPerElement;
    if ( numElements % 1 )
        throw new Error( `length wrong for format: ${glEnumToString( gl, format )}` );

    let dimensions;
    if ( target === gl.TEXTURE_3D )
        if ( ! width && ! height && ! depth ) {

            const size = Math.cbrt( numElements );
            if ( size % 1 !== 0 )
                throw new Error( `can't guess size of array of numElements: ${numElements}` );
            width = size;
            height = size;
            depth = size;

        } else if ( width && ( ! height || ! depth ) ) {

            dimensions = guessDimensions( gl, target, height, depth, numElements / width );
            height = dimensions.width;
            depth = dimensions.height;

        } else if ( height && ( ! width || ! depth ) ) {

            dimensions = guessDimensions( gl, target, width, depth, numElements / height );
            width = dimensions.width;
            depth = dimensions.height;

        } else {

            dimensions = guessDimensions( gl, target, width, height, numElements / depth );
            width = dimensions.width;
            height = dimensions.height;

        }
    else {

        dimensions = guessDimensions( gl, target, width, height, numElements );
        width = dimensions.width;
        height = dimensions.height;

    }


    gl.pixelStorei( gl.UNPACK_ALIGNMENT, opts.unpackAlignment || 1 );
    savePatcState( gl, options );
    if ( target === gl.TEXTURE_CUBE_MAP ) {

        const elementsPerElement = bytesPerElement / typedSrc.BYTES_PER_ELEMENT;
        const faceSize = ( numElements / 6 ) * elementsPerElement;

        getCubeFacesWithIdx( gl, options ).forEach( ( f ) => {

            const offset = faceSize * f.idx;
            const data = typedSrc.subarray( offset, offset + faceSize );
            gl.texImage2D( f.face, level, internalFromat, width, height, 0, format, type, data );

        } );

    } else if ( target === gl.TEXTURE_3D )
        gl.texImage3D( target, level, internalFromat, width, height, depth, 0, format, type, typedSrc );
    else
        gl.texImage2D( target, level, internalFromat, width, height, 0, format, type, typedSrc );


    restorePackState( gl, options );
    return {
        width,
        height,
        depth,
        type,
    };

}

function loadCubeMapFromUrls( gl, tex, options, callback ) {

    const cb = callback || empty;
    const urls = options.src;
    if ( urls.length !== 6 )
        throw new Error( 'there must be 6 urls for a cubemap' );
    const level = options.level || 0;
    const internalFromat = options.internalFormat || options.format || gl.RGBA;
    const formatType = getFormatAndTypeFromInternalFormat( internalFromat );
    const format = options.format || formatType.format;
    const type = options.type || gl.UNSIGNED_BYTE;
    const target = options.target || gl.TEXTURE_2D;
    if ( target !== gl.TEXTURE_CUBE_MAP )
        throw new Error( 'target must be TEXTURE_CUBE_MAP' );

    setTextureTo1PixelColor( gl, tex, options );

    const opts = Object.assign( {}, options );
    let numToLoad = 6;
    const errors = [];
    const faces = getCubeFacesOrder( gl, opts );
    let imgs;

    function uploadImg( faceTarget ) {

        return function ( err, img ) {

            numToLoad -= 1;
            if ( err )
                errors.push( err );
            else {

                savePatcState( gl, opts );
                gl.bindTexture( target, tex );
                if ( numToLoad === 5 )
                    getCubeFacesOrder( gl ).forEach( ( otherTarget ) => {

                        gl.texImage2D( otherTarget, level, internalFromat, format, type, img );

                    } );
                else
                    gl.texImage2D( faceTarget, level, internalFromat, format, type, img );

                restorePackState( gl, opts );
                if ( shouldAutoSetTextureFiltering( opts ) )
                    gl.generateMipmap( target );

            }

            if ( numToLoad === 0 )
                cb( errors.length ? errors : undefined, imgs, tex );

        };

    }

    imgs = urls.map( ( url, idx ) => loadImage( url, opts.crossOrigin, uploadImg( faces[ idx ] ) ) );

}

function loadSlicesFromUrls( gl, tex, options, callback ) {

    const cb = callback || empty;
    const urls = options.src;
    const internalFromat = options.internalFormat || options.format || gl.RGBA;
    const formatType = getFormatAndTypeFromInternalFormat( internalFromat );
    const format = options.format || formatType.format;
    const type = options.type || gl.UNSIGNED_BYTE;
    const target = options.target || gl.TEXTURE_2D_ARRAY;
    if ( target !== gl.TEXTURE_3D && target !== gl.TEXTURE_2D_ARRAY )
        throw new Error( 'target must be TEXTURE_3D or TEXTURE_2D_ARRAY' );

    setTextureTo1PixelColor( gl, tex, options );

    const opts = Object.assign( {}, options );
    let numToLoad = urls.length;
    const errors = [];
    let imgs;
    const level = opts.level || 0;
    let width = opts.width;
    let height = opts.height;
    const depth = urls.length;
    let firstImage = true;

    function uploadImg( slice ) {

        return function ( err, img ) {

            numToLoad -= 1;
            if ( err )
                errors.push( err );
            else {

                savePatcState( gl, opts );
                gl.bindTexture( target, tex );

                if ( firstImage ) {

                    firstImage = false;
                    width = opts.width || img.width;
                    height = opts.width || img.width;
                    gl.texImage3D( target, level, internalFromat, width, height, depth, 0, format, type, null );

                    for ( let s = 0; s < depth; s ++ )
                        gl.texSubImage3D( target, level, 0, 0, s, width, height, 1, format, type, img );

                } else {

                    let src = img;
                    if ( img.width !== width || img.height !== height ) {

                        src = ctx.canvas;
                        ctx.canvas.width = width;
                        ctx.canvas.height = height;
                        ctx.drawImage( img, 0, 0, width, height );

                    }

                    gl.texSubImage3D( target, level, 0, 0, slice, width, height, 1, format, type, src );

                    if ( src === ctx.canvas ) {

                        ctx.canvas.width = 0;
                        ctx.canvas.height = 0;

                    }

                }

                restorePackState( gl, opts );
                if ( shouldAutoSetTextureFiltering( opts ) )
                    gl.generateMipmap( target );


            }

            if ( numToLoad === 0 )
                cb( errors.length ? errors : undefined, imgs, tex );

        };

    }

    imgs = urls.map( ( url, idx ) => loadImage( url, opts.crossOrigin, uploadImg( idx ) ) );

}

function setEmptyTexture( gl, tex, options ) {

    const target = options.target || gl.TEXTURE_2D;
    gl.bindTexture( target, tex );
    const level = options.level || 0;
    const internalFormat = options.internalFormat || options.format || gl.RGBA;
    const formatType = getFormatAndTypeFromInternalFormat( internalFormat );
    const format = options.format || formatType.format;
    const type = options.type || formatType.type;

    savePatcState( gl, options );

    if ( target === gl.TEXTURE_CUBE_MAP )
        for ( let ii = 0; ii < 6; ++ ii )
            gl.texImage2D( gl.TEXTURE_CUBE_MAP_POSITIVE_X + ii, level, internalFormat, options.width, options.height, 0, format, type, null );
    else if ( target === gl.TEXTURE_3D )
        gl.texImage3D( target, level, internalFormat, options.width, options.height, options.depth, 0, format, type, null );
    else
        gl.texImage2D( target, level, internalFormat, options.width, options.height, 0, format, type, null );

    restorePackState( gl, options );

}

function createTexture( gl, options, callback ) {

    const cb = callback || empty;
    const opts = options || defaults.textureOptions;
    const tex = gl.createTexture();
    const target = opts.target || gl.TEXTURE_2D;
    let width = opts.width || 1;
    let height = opts.height || 1;
    const internalFromat = opts.internalFromat || gl.RGBA;
    const formatType = getFormatAndTypeFromInternalFormat( internalFromat );
    let type = opts.type || formatType.type;
    gl.bindTexture( target, tex );
    if ( target === gl.TEXTURE_CUBE_MAP ) {

        gl.texParameteri( target, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE );
        gl.texParameteri( target, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE );

    }

    const src = opts.src;
    if ( src )
        if ( typeof ( src ) === 'string' ) {

            loadTextureFromUrl( gl, tex, opts, cb );

        } else if ( isArrayBuffer( src ) ||
            ( Array.isArray( src ) && (
                typeof src[ 0 ] === 'number' ||
                Array.isArray( src[ 0 ] ) ||
                isArrayBuffer( src[ 0 ] )
            ) ) ) {

            const dimensions = setTextureFromArray( gl, tex, src, opts );
            width = dimensions.width;
            height = dimensions.height;
            type = dimensions.type;

        } else if ( Array.isArray( src ) && typeof ( src[ 0 ] ) === 'string' ) {

            if ( target === gl.TEXTURE_CUBE_MAP )
                loadCubeMapFromUrls( gl, tex, options, cb );
            else
                loadSlicesFromUrls( gl, tex, opts, cb );

        } else if ( src instanceof HTMLElement ) {

            setTextureFromElement( gl, tex, src, opts );
            width = src.width;
            height = src.height;

        } else {

            throw new Error( 'unsupported src type' );

        }
    else
        setEmptyTexture( gl, tex, opts );

    if ( shouldAutoSetTextureFiltering( options ) )
        setTextureFiltering( gl, tex, opts, width, height, internalFromat, type );

    setTextureParameters( gl, tex, opts );

    return tex;

}

function isAsyncSrc( src ) {

    return typeof src === 'string' ||
           ( Array.isArray( src ) && typeof src[ 0 ] === 'string' );

}

function createTextures( gl, textureOptions, callback ) {

    const cb = callback || empty;
    let numLoading = 0;
    const errors = [];
    const textures = [];
    const images = {};

    function callCallbackWhenReady() {

        if ( numLoading === 0 )
            setTimeout( () => {

                cb( errors.length ? errors : undefined, textures, images );

            }, 0 );

    }

    Object.keys( textureOptions ).forEach( ( name ) => {

        const options = textureOptions[ name ];

        let onLoadFn;
        if ( isAsyncSrc( options.src ) ) {

            onLoadFn = function ( err, tex, img ) {

                images[ name ] = img;
                numLoading -= 1;
                if ( err )
                    errors.push( err );

                callCallbackWhenReady();

            };

            numLoading += 1;

        }

        textures[ name ] = createTexture( gl, options, onLoadFn );

    } );

    callCallbackWhenReady();

    return textures;

}

function resizeTexture( gl, tex, options, width = options.width, height = options.height ) {

    const target = options.target || gl.TEXTURE_2D;
    gl.bindTexture( target, tex );
    const level = options.level || 0;
    const internalFormat = options.internalFormat || options.format || gl.RGBA;
    const formatType = getFormatAndTypeFromInternalFormat( internalFormat );
    const format = options.format || formatType.format;
    let type;
    const src = options.src;

    if ( src && ( isArrayBuffer( src ) || ( Array.isArray( src ) && typeof ( src[ 0 ] ) === 'number' ) ) )
        type = options.type || getTextureTypeFromArrayType( gl, src, formatType.type );
    else
        type = options.type || formatType.type;

    if ( target === gl.TEXTURE_CUBE_MAP )
        for ( let i = 0; i < 6; i ++ )
            gl.texImage2D( gl.TEXTURE_CUBE_MAP_NEGATIVE_X + i, level, internalFormat, width, height, 0, format, type, null );
    else
        gl.texImage2D( target, level, internalFormat, width, height, 0, format, type, null );

}

function getContext( canvasOrId, opts ) {

    let canvas;
    if ( typeof canvasOrId === 'string' )
        canvas = document.getElementById( canvasOrId );
    else
        canvas = canvasOrId;

    const names = [ 'webgl2', 'experimental-webgl2', 'webgl', 'experimental-webgl' ];
    let context = null;
    for ( let i = 0; i < names.length; i ++ ) {

        context = canvas.getContext( names[ i ], opts );
        if ( context ) {

            console.log( `renderer: ${context.getParameter( context.VERSION ) || names[ i ]}` );
            break;

        }

    }

    if ( ! context )
        throw new Error( 'Please use a decent browser, this browser not support WebglContext.' );

    return context;

}

function resizeCanvasToDisplaySize( canvas, multiplier ) {

    let mult = multiplier || 1;
    mult = Math.max( 0, mult );
    const width = canvas.clientWidth * mult | 0;
    const height = canvas.clientHeight * mult | 0;
    if ( canvas.width !== width || canvas.height !== height ) {

        canvas.width = width; // eslint-disable-line
        canvas.height = height; // eslint-disable-line
        return true;

    }
    return false;

}

function clear( gl, r = 1.0, g = 1.0, b = 1.0, a = 1.0 ) {

    gl.clearColor( r, g, b, a );
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );

}

class Renderer {

    constructor( canvasOrId, opts ) {

        this.context = getContext( canvasOrId, opts );
        this.canvas = this.context.canvas;
        this.multiplier = 1.0;

        this.context.cullFace( this.context.BACK );
        this.context.frontFace( this.context.CCW );
        this.context.enable( this.context.CULL_FACE );
        this.context.enable( this.context.DEPTH_TEST );
        this.context.depthFunc( this.context.LEQUAL );
        this.context.blendFunc( this.context.SRC_ALPHA, this.context.ONE_MINUS_SRC_ALPHA );

    }

    clear( r, g, b, a ) {

        if ( Array.isArray( r ) ) {

            if ( r.length === 3 ) {

                clear( this.context, r[ 0 ], r[ 1 ], r[ 2 ], 1.0 );
                return this;

            }
            if ( r.length === 4 ) {

                clear( this.context, r[ 0 ], r[ 1 ], r[ 2 ], r[ 3 ] );
                return this;

            }

        }

        clear( this.context, r, g, b, a );
        return this;

    }

    setSize( width, height ) {

        this.canvas.style.width = width;
        this.canvas.style.height = height;
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;
        this.context.viewport( 0, 0, this.canvas.width, this.canvas.height );
        return this;

    }

    fixCanvasToDisplay( multiplier, updateViewport = true ) {

        if ( typeof multiplier === 'number' && multiplier > 0 && this.multiplier !== multiplier )
            this.multiplier = multiplier;

        if ( resizeCanvasToDisplaySize( this.canvas, this.multiplier ) ) {

            if ( updateViewport )
                this.context.viewport( 0, 0, this.canvas.width, this.canvas.height );
            return true;

        }

        return false;

    }

}

function Camera() {

    this.transform = new Transform();
    this.projMat = Matrix4.identity();
    this.viewMat = Matrix4.identity();
    this.target = new Vector3();
    this.up = [ 0, 1, 0 ];
    this.matrix = this.transform.matrix.raw;

}

Object.defineProperties( Camera.prototype, {

    position: {

        get() {

            return this.transform.position;

        },

        set( v ) {

            this.transform.position = v;

        },

    },

} );

Object.assign( Camera.prototype, {

    getOrientMatrix() {

        const mat = new Float32Array( this.viewMat );
        mat[ 12 ] = mat[ 13 ] = mat[ 14 ] = 0.0; // eslint-disable-line
        return mat;

    },

    getVec3Position() {

        return this.transform.getVec3Position();

    },

    updateViewMatrix( target ) {

        if ( target )
            this.target = target;

        Matrix4.lookAt( this.viewMat, this.transform.position, this.target.getArray(), this.up );
        Matrix4.invert( this.matrix, this.viewMat );
        this.getVec3Position().set( this.matrix[ 12 ], this.matrix[ 13 ], this.matrix[ 14 ] );

    },

} );

function PerspectiveCamera( fov = 45, aspect, near = 0.01, far = 1000 ) {

    Camera.call( this );

    this._fov = fov;
    this.fovRadian = PMath.degree2Radian( this._fov );
    this.aspect = aspect;
    this.near = near;
    this.far = far;

    Matrix4.perspective( this.projMat, this.fovRadian, aspect, near, far );

}

PerspectiveCamera.prototype = Object.assign( Object.create( Camera.prototype ), {

    isPerspectiveCamera: true,

    updateProjMatrix( aspect ) {

        if ( aspect && aspect !== this.aspect )
            this.aspect = aspect;

        Matrix4.perspective( this.projMat, this.fov, this.aspect, this.near, this.far );

    },


} );

Object.defineProperties( PerspectiveCamera.prototype, {

    fov: {
        get() {

            return this._fov;

        },
        set( degree ) {

            this._fov = degree;
            this.fovRadian = PMath.degree2Radian( this._fov );

        },
    },

} );

function OrthographicCamera( size, aspect, near = 1, far = size * 2 ) {

    Camera.call( this );

    this.size = size;
    this.aspect = aspect;
    this.near = near;
    this.far = far;
    this.zoom = 1;

    this.left = this.size * this.aspect / - 2;
    this.right = this.size * this.aspect / 2;
    this.bottom = this.size / - 2;
    this.top = this.size / 2;

    Matrix4.ortho( this.projMat, this.left / this.zoom, this.right / this.zoom, this.bottom / this.zoom, this.top / this.zoom, this.near / this.zoom, this.far / this.zoom );

}

OrthographicCamera.prototype = Object.assign( Object.create( Camera.prototype ), {

    isOrthographicCamera: true,

    updateProjMatrix( aspect ) {

        if ( aspect && aspect !== this.aspect )
            this.aspect = aspect;

        this.left = this.size * this.aspect / - 2;
        this.right = this.size * this.aspect / 2;
        Matrix4.ortho( this.projMat, this.left / this.zoom, this.right / this.zoom, this.bottom / this.zoom, this.top / this.zoom, this.near / this.zoom, this.far / this.zoom );

    },

} );

function Vector2( x, y ) {

    this.raw = [];
    this.x = x || 0;
    this.y = y || 0;

}

Object.defineProperties( Vector2.prototype, {

    x: {
        get() {

            return this.raw[ 0 ];

        },

        set( v ) {

            this.raw[ 0 ] = v;

        },
    },

    y: {
        get() {

            return this.raw[ 1 ];

        },

        set( v ) {

            this.raw[ 1 ] = v;

        },
    },

    width: {

        get() {

            return this.raw[ 0 ];

        },

        set( v ) {

            this.raw[ 0 ] = v;

        },

    },

    height: {

        get() {

            return this.raw[ 1 ];

        },

        set( v ) {

            this.raw[ 1 ] = v;

        },

    },

} );

Object.assign( Vector2.prototype, {

    set( x, y ) {

        this.x = x;
        this.y = y;
        return this;

    },

    setX( x ) {

        this.x = x;
        return this;

    },

    setY( y ) {

        this.y = y;
        return this;

    },

    clone() {

        return new Vector2( this.x, this.y );

    },

    copy( v ) {

        this.x = v.x;
        this.y = v.y;

        return this;

    },

    add( v ) {

        this.x += v.x;
        this.y += v.y;

        return this;

    },

    sub( v ) {

        this.x -= v.x;
        this.y -= v.y;

        return this;

    },

    subVectors( a, b ) {

        this.x = a.x - b.x;
        this.y = a.y - b.y;
        return this;

    },

    clamp( min, max ) {

        this.x = Math.max( min.x, Math.min( max.x, this.x ) );
        this.y = Math.min( min.y, Math.min( max.y, this.y ) );

        return this;

    },

} );

function Spherical( radius, phi, theta ) {

    this.radius = ( radius !== undefined ) ? radius : 1.0;
    this.phi = ( phi !== undefined ) ? phi : 0;
    this.theta = ( theta !== undefined ) ? theta : 0;

}

Object.assign( Spherical.prototype, {

    set( radius, phi, theta ) {

        this.radius = radius;
        this.phi = phi;
        this.theta = theta;

        return this;

    },

    clone() {

        return new Spherical().copy( this );

    },

    copy( other ) {

        this.radius = other.radius;
        this.phi = other.phi;
        this.theta = other.theta;

        return this;

    },

    makeSafe: ( function () {

        const ESP = 0.000001;

        return function makeSafe() {

            this.phi = Math.max( ESP, Math.min( Math.PI - ESP, this.phi ) );
            return this;

        };

    }() ),

    setFromVecor3( vec3 ) {

        this.radius = vec3.length();
        if ( this.radius === 0 ) {

            this.theta = 0;
            this.phi = 0;

        } else {

            this.theta = Math.atan2( vec3.x, vec3.z );
            this.phi = Math.acos( PMath.clamp( vec3.y / this.radius, - 1, 1 ) );

        }

        return this;

    },

} );

/* eslint default-case: 0 */
class OrbitControls {

    constructor( camera, domElement, controler ) {

        this.controler = controler;
        this.camera = camera;
        this.domElement = ( domElement !== undefined ) ? domElement : document;
        this.enable = true;
        this.target = new Vector3();

        this.minDistance = 0.1;
        this.maxDistance = Infinity;

        this.minZoom = 0.01;
        this.maxZoom = Infinity;

        this.minPolarAngle = 0;
        this.maxPolarAngle = Math.PI;

        this.minAzimuthAngle = - Infinity;
        this.maxAzimuthAngle = Infinity;

        this.enableDamping = false;
        this.dampingFactor = 0.08;
        this.zoomFactor = 0.2;

        this.enableZoom = true;
        this.zoomSpeed = 1.0;

        this.enableRotate = true;
        this.rotateSpeed = 0.8;

        this.enablePan = true;
        this.keyPanSpeed = 7.0;

        this.autoRotate = false;
        this.autoRotateSpeed = 2.0;

        this.enableKeys = true;
        this.keys = {
            LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40,
        };
        this.mouseButtons = {
            ORBIT: 0, ZOOM: 1, PAN: 2,
        };

        // update
        this._offset = new Vector3();
        this._spherical = new Spherical();
        this._sphericalDelta = new Spherical();
        this._sphericalDump = new Spherical();
        this._zoomFrag = 0;
        this._scale = 1;
        this._panOffset = new Vector3();
        this._isMouseUp = true;

        // pan
        this._vPan = new Vector3();

        // state
        this._rotateStart = new Vector2();
        this._rotateEnd = new Vector2();
        this._rotateDelta = new Vector2();

        this._panStart = new Vector2();
        this._panEnd = new Vector2();
        this._panDelta = new Vector2();

        this._zoomStart = new Vector2();
        this._zoomEnd = new Vector2();
        this._zoomDelta = new Vector2();

        this.STATE = {
            NONE: - 1, ROTATE: 0, ZOOM: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_ZOOM: 4, TOUCH_PAN: 5,
        };
        this._state = this.STATE.NONE;

        this.eventListeners = [
            { type: 'mousedown', listener: this.onMouseDown.bind( this ) },
            { type: 'wheel', listener: this.onMouseWheel.bind( this ) },
            { type: 'keydown', listener: this.onKeyDown.bind( this ) },
            { type: 'touchstart', listener: this.onTouchStart.bind( this ) },
            { type: 'touchend', listener: this.onTouchEnd.bind( this ) },
            { type: 'touchmove', listener: this.onTouchMove.bind( this ) },
        ];

        this.mouseMoveUpListeners = [
            { type: 'mousemove', listener: this.onMouseMove.bind( this ) },
            { type: 'mouseup', listener: this.onMouseUp.bind( this ) },
        ];

        this.controler.addListeners( this.eventListeners );

        this.update();

    }

    dispose() {

        this.controler.removeListeners( this.eventListeners, this.mouseMoveUpListeners );

    }

    update() {

        const position = this.camera.getVec3Position();

        this._offset.copy( position ).sub( this.target );
        this._spherical.setFromVecor3( this._offset );

        if ( this.autoRotate && this._state === this.STATE.NONE )
            this.rotateLeft( this.getAutoRotationAngle() );

        this._spherical.theta += this._sphericalDelta.theta;
        this._spherical.phi += this._sphericalDelta.phi;

        this._spherical.theta = Math.max( this.minAzimuthAngle, Math.min( this.maxAzimuthAngle, this._spherical.theta ) );
        this._spherical.phi = Math.max( this.minPolarAngle, Math.min( this.maxPolarAngle, this._spherical.phi ) );
        this._spherical.makeSafe();

        if ( this._scale !== 1 )
            this._zoomFrag = this._spherical.radius * ( this._scale - 1 );

        this._spherical.radius += this._zoomFrag;

        this._spherical.radius = Math.max( this.minDistance, Math.min( this.maxDistance, this._spherical.radius ) );

        this.target.add( this._panOffset );
        this._offset.setFromSpherical( this._spherical );
        position.copy( this.target ).add( this._offset );

        this.camera.updateViewMatrix( this.target );

        if ( this.enableDamping === true ) {

            this._sphericalDump.theta *= ( 1 - this.dampingFactor );
            this._sphericalDump.phi *= ( 1 - this.dampingFactor );
            this._zoomFrag *= ( 1 - this.zoomFactor );

            if ( this._isMouseUp ) {

                this._sphericalDelta.theta = this._sphericalDump.theta;
                this._sphericalDelta.phi = this._sphericalDump.phi;

            } else
                this._sphericalDelta.set( 0, 0, 0 );

        } else {

            this._sphericalDelta.set( 0, 0, 0 );
            this._zoomFrag = 0;

        }

        this._scale = 1;
        this._panOffset.set( 0, 0, 0 );

    }

    getAutoRotationAngle() {

        return 2 * Math.PI / 60 / 60 / this.autoRotateSpeed;

    }

    getZoomScale() {

        return Math.pow( 0.95, this.zoomSpeed ); // eslint-disable-line

    }

    rotateLeft( angle ) {

        this._sphericalDelta.theta -= angle;
        if ( this.enableDamping )
            this._sphericalDump.theta = - angle;

    }

    rotateUp( angle ) {

        this._sphericalDelta.phi -= angle;
        if ( this.enableDamping )
            this._sphericalDump.phi = - angle;

    }

    panLeft( distance, worldMatrix ) {

        this._vPan.setFromArray( worldMatrix, 0 );
        this._vPan.multiScalar( - distance );

        this._panOffset.add( this._vPan );

    }

    panUp( distance, worldMatrix ) {

        this._vPan.setFromArray( worldMatrix, 4 );
        this._vPan.multiScalar( distance );

        this._panOffset.add( this._vPan );

    }

    pan( deltaX, deltaY ) {

        const element = this.domElement === document ? this.domElement.body : this.domElement;

        if ( this.camera.isPerspectiveCamera ) {

            const position = this.camera.getVec3Position();
            this._vPan.copy( position ).sub( this.target );
            let targetDisitance = this._vPan.length();

            targetDisitance *= ( this.camera.fov / 2 ) * ( Math.PI / 180.0 );

            this.panLeft( 2 * deltaX * ( targetDisitance / element.clientHeight ), this.camera.matrix );
            this.panUp( 2 * deltaY * ( targetDisitance / element.clientHeight ), this.camera.matrix );

        } else if ( this.camera.isOrthographicCamera ) {

            this.panLeft( deltaX * ( this.camera.right - this.camera.left ) / this.camera.zoom / element.clientHeight, this.camera.matrix );
            this.panUp( deltaY * ( this.camera.top - this.camera.bottom ) / this.camera.zoom / element.clientHeight, this.camera.matrix );

        }

    }

    zoomIn( zoomScale ) {

        if ( this.camera.isPerspectiveCamera )
            this._scale /= zoomScale;
        else if ( this.camera.isOrthographicCamera ) {

            this.camera.zoom = Math.max( this.minZoom, Math.min( this.maxZoom, this.camera.zoom * zoomScale ) );
            this.camera.updateProjMatrix();

        }

    }

    zoomOut( zoomScale ) {

        if ( this.camera.isPerspectiveCamera )
            this._scale *= zoomScale;
        else if ( this.camera.isOrthographicCamera ) {

            this.camera.zoom = Math.max( this.minZoom, Math.min( this.maxZoom, this.camera.zoom / zoomScale ) );
            this.camera.updateProjMatrix();

        }

    }

    handleMouseDownRotate( event ) {

        this._rotateStart.set( event.clientX, event.clientY );

    }

    handleMouseDownZoom( event ) {

        this._zoomStart.set( event.clientX, event.clientY );

    }

    handleMouseDownPan( event ) {

        this._panStart.set( event.clientX, event.clientY );

    }

    handleMouseMoveRotate( event ) {

        this._rotateEnd.set( event.clientX, event.clientY );
        this._rotateDelta.subVectors( this._rotateEnd, this._rotateStart );

        const element = this.domElement === document ? document.body : this.domElement;

        this.rotateLeft( 2 * Math.PI * ( this._rotateDelta.x / element.clientWidth ) * this.rotateSpeed );
        this.rotateUp( 2 * Math.PI * ( this._rotateDelta.y / element.clientHeight ) * this.rotateSpeed );

        this._rotateStart.copy( this._rotateEnd );

        this.update();

    }

    handleMouseMoveZoom( event ) {

        this._zoomEnd.set( event.clientX, event.clientY );
        this._zoomDelta.subVectors( this._zoomEnd, this._zoomStart );

        if ( this._zoomDelta.y > 0 )
            this.zoomIn( this.getZoomScale() );
        else if ( this._zoomDelta.y < 0 )
            this.zoomOut( this.getZoomScale() );

        this._zoomStart.copy( this._zoomEnd );

        this.update();

    }

    handleMouseMovePan( event ) {

        this._panEnd.set( event.clientX, event.clientY );
        this._panDelta.subVectors( this._panEnd, this._panStart );

        this.pan( this._panDelta.x, this._panDelta.y );

        this._panStart.copy( this._panEnd );

        this.update();

    }

    handleMouseWheel( event ) {

        if ( event.deltaY < 0 )
            this.zoomOut( this.getZoomScale() );
        else if ( event.deltaY > 0 )
            this.zoomIn( this.getZoomScale() );

        this.update();

    }

    handleKeyDown( event ) {

        switch ( event.keyCode ) {

        case this.keys.UP:
            this.pan( 0, this.keyPanSpeed );
            this.update();
            break;
        case this.keys.BOTTOM:
            this.pan( 0, - this.keyPanSpeed );
            this.update();
            break;
        case this.keys.LEFT:
            this.pan( this.keyPanSpeed, 0 );
            this.update();
            break;
        case this.keys.RIGHT:
            this.pan( - this.keyPanSpeed, 0 );
            this.update();
            break;

        }

    }

    handleTouchStartRotate( event ) {

        this._rotateStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

    }

    handleTouchStartZoom( event ) {

        const dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
        const dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

        const distance = Math.sqrt( dx * dx + dy * dy );

        this._zoomStart.set( 0, distance );

    }

    handleTouchStartPan( event ) {

        this._panStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

    }

    handleTouchMoveRotate( event ) {

        this._rotateEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
        this._rotateDelta.subVectors( this._rotateEnd, this._rotateStart );

        const element = this.domElement === document ? this.domElement.body : this.domElement;

        this.rotateLeft( 2 * Math.PI * this._rotateDelta.x / element.clientWidth * this.rotateSpeed );
        this.rotateUp( 2 * Math.PI * this._rotateDelta.y / element.clientHeight * this.rotateSpeed );

        this._rotateStart.copy( this._rotateEnd );

        this.update();

    }

    handleTouchMoveZoom( event ) {

        const dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
        const dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

        const distance = Math.sqrt( dx * dx + dy * dy );

        this._zoomEnd.set( 0, distance );

        this._zoomDelta.subVectors( this._zoomEnd, this._zoomStart );

        if ( this._zoomDelta.y > 0 )
            this.zoomOut( this.getZoomScale() );
        else if ( this._zoomDelta.y < 0 )
            this.zoomIn( this.getZoomScale() );

        this._zoomStart.copy( this._zoomEnd );

        this.update();

    }

    handleTouchMovePan( event ) {

        this._panEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

        this._panDelta.subVectors( this._panEnd, this._panStart );

        this.pan( this._panDelta.x, this._panDelta.y );

        this._panStart.copy( this._panEnd );

        this.update();

    }

    onMouseDown( event ) {

        if ( this.enable === false ) return;

        event.preventDefault();

        this._isMouseUp = false;

        switch ( event.button ) {

        case this.mouseButtons.ORBIT:
            if ( this.enableRotate === false ) return;

            this.handleMouseDownRotate( event );
            this._state = this.STATE.ROTATE;
            break;

        case this.mouseButtons.ZOOM:
            if ( this.enableZoom === false ) return;

            this.handleMouseDownZoom( event );
            this._state = this.STATE.ZOOM;
            break;

        case this.mouseButtons.PAN:
            if ( this.enablePan === false ) return;

            this.handleMouseDownPan( event );
            this._state = this.STATE.PAN;
            break;

        }

        if ( this._state !== this.STATE.NONE )
            this.controler.addListeners( this.mouseMoveUpListeners );

    }

    onMouseMove( event ) {

        if ( this.enable === false ) return;

        event.preventDefault();

        switch ( this._state ) {

        case this.STATE.ROTATE:
            if ( this.enableRotate === false ) return;

            this.handleMouseMoveRotate( event );
            break;

        case this.STATE.ZOOM:
            if ( this.enableZoom === false ) return;

            this.handleMouseMoveZoom( event );
            break;

        case this.STATE.PAN:
            if ( this.enablePan === false ) return;

            this.handleMouseMovePan( event );
            break;

        }

    }

    onMouseUp() {

        if ( this.enable === false ) return;

        this._isMouseUp = true;

        this.controler.removeListeners( this.mouseMoveUpListeners );

        this._state = this.STATE.NONE;

    }

    onMouseWheel( event ) {

        if ( this.enable === false || this.enableZoom === false || ( this._state !== this.STATE.NONE && this._state !== this.STATE.ROTATE ) ) return;

        event.preventDefault();
        event.stopPropagation();

        this.handleMouseWheel( event );

    }

    onKeyDown( event ) {

        if ( this.enable === false || this.enableKeys === false || this.enablePan === false ) return;

        this.handleKeyDown( event );

    }

    onTouchStart( event ) {

        if ( this.enable === false ) return;

        this._isMouseUp = false;

        switch ( event.touches.length ) {

        case 1: // one-fingered touch: rotate

            if ( this.enableRotate === false ) return;

            this.handleTouchStartRotate( event );

            this._state = this.STATE.TOUCH_ROTATE;

            break;

        case 2: // two-fingered touch: dolly

            if ( this.enableZoom === false ) return;

            this.handleTouchStartZoom( event );

            this._state = this.STATE.TOUCH_ZOOM;

            break;

        case 3: // three-fingered touch: pan

            if ( this.enablePan === false ) return;

            this.handleTouchStartPan( event );

            this._state = this.STATE.TOUCH_PAN;

            break;

        default:

            this._state = this.STATE.NONE;

        }

    }

    onTouchMove( event ) {

        if ( this.enable === false ) return;

        event.preventDefault();
        event.stopPropagation();

        switch ( event.touches.length ) {

        case 1: // one-fingered touch: rotate

            if ( this.enableRotate === false ) return;
            if ( this._state !== this.STATE.TOUCH_ROTATE ) return;
            this.handleTouchMoveRotate( event );

            break;

        case 2: // two-fingered touch: dolly

            if ( this.enableZoom === false ) return;
            if ( this._state !== this.STATE.TOUCH_ZOOM ) return;

            this.handleTouchMoveZoom( event );

            break;

        case 3: // three-fingered touch: pan

            if ( this.enablePan === false ) return;
            if ( this._state !== this.STATE.TOUCH_PAN ) return;

            this.handleTouchMovePan( event );

            break;

        default:

            this._state = this.STATE.NONE;

        }

    }

    onTouchEnd() {

        if ( this.enable === false ) return;

        this._isMouseUp = true;

        this._state = this.STATE.NONE;

    }

    onContextMenu( event ) {

        if ( this.enable === false ) return;
        event.preventDefault();

    }

}

function FileLoader( files ) {

    this.files = [];
    this.items = [];
    this.addFiles( files );

}

Object.assign( FileLoader, {

    getFilename( url ) {

        if ( url ) {

            const m = url.toString().match( /.*\/(.+?)\./ );
            if ( m && m.length > 1 )
                return m[ 1 ];

        }
        return '';

    },

    getExtension( url ) {

        return url.split( '.' ).pop().toLowerCase();

    },

    getBasename( url ) {

        return url.split( /[\\/]/ ).pop();

    },

    getBasepath( url ) {

        const basename = FileLoader.getBasename( url );
        return url.slice( 0, url.length - basename.length );

    },

} );

Object.assign( FileLoader.prototype, {

    addFiles( files ) {

        if ( files && ! Array.isArray( files ) )
            return this.addFile( files );

        return files && files.forEach( ( file ) => {

            if ( Array.isArray( file ) )
                return this.addFiles( file );
            return this.addFile( file );

        } );

    },

    addFile( filepath ) {

        const file = filepath.file || filepath;
        const type = filepath.type || FileLoader.getExtension( file );
        const name = filepath.name || FileLoader.getFilename( file );
        if ( this.files.indexOf( file ) < 0 ) {

            this.files.push( file );
            this.items.push( { file, type, name } );

        }

    },

    load() {

        const promises = [];
        const names = [];

        this.items.forEach( ( item ) => {

            const { name, file, type } = item;
            if ( ! FileLoader.types[ type ] )
                throw new Error( `unsupport file format ".${type}", file path: ${file}` );

            const promise = FileLoader.types[ type ]( file );
            promises.push( promise );
            names.push( name );

        } );

        return Promise.all( promises )
            .then( ( files ) => {

                const result = {};
                files.forEach( ( file, idx ) => {

                    result[ names[ idx ] ] = file;

                } );

                return Promise.resolve( result );

            } );

    },

} );

Object.assign( FileLoader, {

    decodeText( array ) {

        if ( typeof TextDecoder !== 'undefined' )
            return new TextDecoder().decode( array );

        let s = '';
        for ( let i = 0, il = array.length; i < il; i ++ )
            s += String.fromCharCode( array[ i ] );

        return decodeURIComponent( escape( s ) );

    },

    types: {

        obj( file ) {

            return fetch( file )
                .then( response => response.text() );

        },

        gltf( file ) {

            return fetch( file )
                .then( response => response.json() )
                .then( ( json ) => {

                    const buffers = json.buffers;
                    const loader = new FileLoader();
                    const basepath = FileLoader.getBasepath( file );

                    for ( let i = 0; i < buffers.length; i ++ ) {

                        const uri = buffers[ i ].uri;
                        if ( uri.startsWith( 'data:' ) ) continue;

                        const filepath = basepath + uri;
                        loader.addFile( { file: filepath, type: 'gltf_bin', name: uri } );

                    }

                    const images = json.images || [];
                    const imageRes = {};
                    for ( let i = 0; i < images.length; i ++ ) {

                        const uri = images[ i ].uri;
                        if ( ! uri || uri.startsWith( 'data:' ) ) continue;

                        const filepath = basepath + uri;
                        imageRes[ uri ] = filepath;

                    }

                    return loader.load().then( ( files ) => {

                        Object.assign( files, imageRes );
                        json.resources = files; // eslint-disable-line
                        return json;

                    } );

                } );

        },

        gltf_bin( file ) {

            return fetch( file )
                .then( response => response.arrayBuffer() );

        },

        glb( file ) {

            return fetch( file )
                .then( response => response.arrayBuffer() )
                .then( ( arrayBuffer ) => {

                    const BINARY_EXTENSION_HEADER_MAGIC = 'glTF';
                    const BINARY_EXTENSION_HEADER_LENGTH = 12;
                    const BINARY_EXTENSION_CHUNK_TYPES = { JSON: 0x4E4F534A, BIN: 0x004E4942 };

                    let content = null;
                    let body = null;

                    const headerView = new DataView( arrayBuffer, 0, BINARY_EXTENSION_HEADER_LENGTH );

                    this.header = {
                        magic: FileLoader.decodeText( new Uint8Array( arrayBuffer.slice( 0, 4 ) ) ),
                        version: headerView.getUint32( 4, true ),
                        length: headerView.getUint32( 8, true ),
                    };

                    if ( this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC )
                        throw new Error( 'GLTFLoader: Unsupported glTF-Binary header.' );
                    else if ( this.header.version < 2.0 )
                        throw new Error( 'GLTFLoader: Legacy binary file detected. Use LegacyGLTFLoader instead.' );

                    const chunkView = new DataView( arrayBuffer, BINARY_EXTENSION_HEADER_LENGTH );
                    let chunkIndex = 0;

                    while ( chunkIndex < chunkView.byteLength ) {

                        const chunkLength = chunkView.getUint32( chunkIndex, true );
                        chunkIndex += 4;

                        const chunkType = chunkView.getUint32( chunkIndex, true );
                        chunkIndex += 4;

                        if ( chunkType === BINARY_EXTENSION_CHUNK_TYPES.JSON ) {

                            const contentArray = new Uint8Array( arrayBuffer, BINARY_EXTENSION_HEADER_LENGTH + chunkIndex, chunkLength );
                            content = FileLoader.decodeText( contentArray );

                        } else if ( chunkType === BINARY_EXTENSION_CHUNK_TYPES.BIN ) {

                            const byteOffset = BINARY_EXTENSION_HEADER_LENGTH + chunkIndex;
                            body = arrayBuffer.slice( byteOffset, byteOffset + chunkLength );

                        }

                        chunkIndex += chunkLength;

                    }

                    if ( content ) {

                        const json = JSON.parse( content );
                        if ( json.buffers && body )
                            for ( let i = 0; i < json.buffers.length; i ++ ) {

                                const buffer = json.buffers[ i ];
                                if ( typeof buffer.uri === 'undefined' ) {

                                    buffer.isParsed = true;
                                    buffer.dbuffer = body;

                                }

                            }

                        // load outer resource
                        const buffers = json.buffers;
                        const loader = new FileLoader();
                        const basepath = FileLoader.getBasepath( file );

                        for ( let i = 0; i < buffers.length; i ++ ) {

                            if ( buffers[ i ].isParsed ) continue;
                            const uri = buffers[ i ].uri;
                            if ( uri.startsWith( 'data:' ) ) continue;

                            const filepath = basepath + uri;
                            loader.addFile( { file: filepath, type: 'gltf_bin', name: uri } );

                        }

                        const images = json.images || [];
                        const imageRes = {};
                        for ( let i = 0; i < images.length; i ++ ) {

                            const uri = images[ i ].uri;
                            if ( ! uri || uri.startsWith( 'data:' ) ) continue;

                            const filepath = basepath + uri;
                            imageRes[ uri ] = filepath;

                        }

                        return loader.load().then( ( files ) => {

                            Object.assign( files, imageRes );
                                    json.resources = files; // eslint-disable-line
                            return json;

                        } );

                    }

                    throw new Error( 'GLTFLoader: bin file do not have gltf json.' );

                } );

        },

    },
} );

function LinePaser( ) {

    this.line = '';
    this.cArray = [];

}

Object.assign( LinePaser.prototype, {

    init( line ) {

        this.line = line.trim().split( ' ' );

    },

    getType() {

        return this.line[ 0 ];

    },

    getFloatData( count ) {

        let length = count;
        this.cArray = [];
        while ( length > 0 )
            this.cArray.unshift( parseFloat( this.line[ length -- ] ) );

        return this.cArray;

    },

} );

const ObjLoader = {
    flipYUV: true,
};

Object.assign( ObjLoader, {

    load( filePath ) {

        const name = 'OBJLOADER';
        const loader = new FileLoader( { file: filePath, name } );
        return loader.load()
            .then( res => ObjLoader.parse( res[ name ] ) );

    },

    parse( objText, flipYUV ) {

        const flip = flipYUV === undefined ? ObjLoader.flipYUV : flipYUV;
        const lines = objText.split( '\n' );
        lines.push( null );
        let line;
        let index = 0;

        let currentObject = null;
        const objects = [];

        let v = [];
        let vt = [];
        let vn = [];

        const oVert = [];
        const oUV = [];
        const oNorm = [];
        const oIndex = [];

        const fCache = {};
        let vertCount = 0;
        let isQuad = false;
        let i;
        let ary;
        let ind;

        line = lines[ index ++ ];
        const linePaser = new LinePaser();
        let type;
        while ( line !== null ) {

            linePaser.init( line );
            line = lines[ index ++ ];
            type = linePaser.getType();

            switch ( type ) {

            case 'v':
                v = v.concat( linePaser.getFloatData( 3 ) );
                continue;
            case 'vt':
                vt = vt.concat( linePaser.getFloatData( 2 ) );
                continue;
            case 'vn':
                vn = vn.concat( linePaser.getFloatData( 3 ) );
                continue;
            case 'f':
                linePaser.line.shift();

                if ( linePaser.line.length < 3 ) // less than 3 vertex
                    continue;

                isQuad = false;

                for ( i = 0; i < linePaser.line.length; i ++ ) {

                    if ( i > 3 ) {

                        console.error( 'OBJ Loader not support multiple vertices face!' );
                        break;

                    }

                    if ( i === 3 && ! isQuad ) {

                        i = 2;
                        isQuad = true;

                    }

                    if ( linePaser.line[ i ] in fCache )
                        oIndex.push( fCache[ linePaser.line[ i ] ] );
                    else {

                        ary = linePaser.line[ i ].split( '/' );

                        ind = ( parseInt( ary[ 0 ], 10 ) - 1 ) * 3;
                        oVert.push( v[ ind ], v[ ind + 1 ], v[ ind + 2 ] );

                        ind = ( parseInt( ary[ 2 ], 10 ) - 1 ) * 3;
                        oNorm.push( vn[ ind ], vn[ ind + 1 ], vn[ ind + 2 ] );

                        if ( ary[ 1 ] !== '' ) {

                            ind = ( parseInt( ary[ 1 ], 10 ) - 1 ) * 2;
                            oUV.push( vt[ ind ], flip ? ( 1 - vt[ ind + 1 ] ) : vt[ ind + 1 ] );

                        }

                        fCache[ linePaser.line[ i ] ] = vertCount;
                        oIndex.push( vertCount );
                        vertCount ++;

                    }

                    if ( i === 3 && isQuad )
                        oIndex.push( fCache[ linePaser.line[ 0 ] ] );

                }
                continue;
            case 'o':
            case 'g':
                if ( currentObject !== null ) {

                    const attribArrays = {
                        a_position: { data: oVert.slice() },
                        indices: { data: oIndex.slice() },
                    };

                    if ( oUV.length > 0 )
                        attribArrays.a_uv = { data: oUV.slice() };

                    if ( oNorm.length > 0 )
                        attribArrays.a_normal = { data: oNorm.slice() };

                    objects.push( new Mesh( currentObject, attribArrays ) );

                }

                currentObject = linePaser.line[ 1 ];
                oVert.length = 0;
                oIndex.length = 0;
                oUV.length = 0;
                oNorm.length = 0;
                vertCount = 0;
                continue;
            default:
                continue;

            }

        }

        if ( currentObject !== null ) {

            const attribArrays = {
                a_position: { data: oVert },
                indices: { data: oIndex },
            };

            if ( oUV.length > 0 )
                attribArrays.a_uv = { data: oUV };

            if ( oNorm.length > 0 )
                attribArrays.a_normal = { data: oNorm };

            objects.push( new Mesh( currentObject, attribArrays ) );

        }

        return objects;

    },

} );

let nodeCount = 0;

function Node( nameModel ) {

    if ( typeof nameModel === 'string' )
        this.name = nameModel;
    else if ( !! nameModel && nameModel.isModel )
        this.setModel( nameModel );
    else
        this.name = `NODE_${nodeCount ++}`;

    this.children = [];
    this.parent = null;
    this.transform = this.model ? this.model.transform : new Transform();
    this.matrix = this.transform.matrix;
    this.worldMatrix = this.transform.worldMatrix;
    this.needUpdateWorldMatrix = this.transform.needUpdateWorldMatrix;

}

Object.defineProperties( Node.prototype, {

    position: {

        get() {

            return this.transform.position;

        },

        set( v ) {

            this.setPosition( v );

        },

    },

    quaternion: {

        get() {

            return this.transform.quaternion;

        },

        set( v ) {

            this.setQuaternion( v );

        },

    },

    scale: {

        get() {

            return this.transform.scale;

        },

        set( v ) {

            return this.setScale( v );

        },

    },

} );

Object.assign( Node, {

    remove( node ) {

        if ( node.parent ) {

            const idx = node.parent.children.indexOf( node );

            if ( idx > - 1 )
                node.parent.children.splice( idx, 1 );

            node.parent = null; // eslint-disable-line

        } else
            node = undefined; // eslint-disable-line

    },

    updateWorldMatrix( node, parent ) {

        if ( node.needUpdateWorldMatrix )

            if ( parent ) {

                node.transform.updateMatrix();
                Matrix4.mult( node.worldMatrix.raw, parent.worldMatrix.raw, node.matrix.raw );

            } else
                Matrix4.copy( node.worldMatrix.raw, node.matrix.raw );

    },

    updateNormalAndDirection( node ) {

        if ( node.needUpdateWorldMatrix ) {

            node.transform.updateNormalMatrix().updateDirection();
            node.needUpdateWorldMatrix = false; // eslint-disable-line

        }

    },

    updateMatrixMarker( node, parent ) {

        if ( node.transform._needUpdateMatrix || ( parent && parent.needUpdateWorldMatrix ) )
            node.needUpdateWorldMatrix = true; // eslint-disable-line

    },

    afterUpdateMatrix( node, parent ) {

        if ( typeof node.afterUpdateMatrix === 'function' )
            node.afterUpdateMatrix( node, parent );

    },

} );

Object.assign( Node.prototype, {

    traverse( executeFun ) {

        executeFun( this, this.parent );
        for ( let i = 0; i < this.children.length; i ++ )
            this.children[ i ].traverse( executeFun );

    },

    traversePostOrder( executeFun ) {

        for ( let i = 0; i < this.children.length; i ++ )
            this.children[ i ].traversePostOrder( executeFun );
        executeFun( this, this.parent );

    },

    traverseTwoExeFun( execuFunPre, execuFunPost ) {

        execuFunPre( this, this.parent );
        for ( let i = 0; i < this.children.length; i ++ )
            this.children[ i ].traverseTwoExeFun( execuFunPre, execuFunPost );
        execuFunPost( this, this.parent );

    },

    remove( node = this ) {

        Node.remove( node );
        return this;

    },

    addToParent( parent ) {

        if ( this.parent )
            Node.remove( this );

        parent.children.push( this );
        node.parent = this; // eslint-disable-line

        return this;

    },

    addChild( nodelike ) {

        let node = nodelike;
        if ( typeof nodelike === 'string' || nodelike.isModel )
            node = new Node( nodelike );

        if ( node.parent )
            Node.remove( node );

        this.children.push( node );
        node.parent = this; // eslint-disable-line

        return this;

    },

    setPosition( ...args ) {

        if ( args[ 0 ] instanceof Node )
            return this.setPosition( ...args[ 0 ].position );

        this.transform.setPosition( ...args );
        return this;

    },

    setQuaternion( ...args ) {

        if ( args[ 0 ] instanceof Node )
            return this.setQuaternion( ...args[ 0 ].quaternion );

        this.transform.setQuaternion( ...args );
        return this;

    },

    setScale( ...args ) {

        if ( args[ 0 ] instanceof Node )
            return this.setScale( ...args[ 0 ].scale );

        this.transform.setScale( ...args );
        return this;

    },

    updateMatrix() {

        this.traverse( Node.updateMatrixMarker );
        this.traverseTwoExeFun( Node.updateWorldMatrix, Node.updateNormalAndDirection );
        this.traverse( Node.afterUpdateMatrix );
        return this;

    },

    setModel( model ) {

        if ( this.transform )
            model.setTransform( this.transform.clone() );

        model.node = this; // eslint-disable-line
        this.model = model;
        this.name = this.model.name;
        this.transform = this.model.transform;
        this.matrix = this.transform.matrix;
        this.worldMatrix = this.transform.worldMatrix;
        this.needUpdateWorldMatrix = this.transform.needUpdateWorldMatrix;

        return this;

    },

    findInChildren( property, value ) {

        let finded = false;

        function find( node ) {

            if ( ! finded )
                if ( node[ property ] !== undefined && node[ property ] === value )
                    finded = node;


        }

        this.traverse( find );

        return finded;

    },

} );

/* eslint no-loop-func: 0 */
function GLTFLoader() {

    this.currentSceneName = 'null';

}

function errorMiss( nodeType, index ) {

    if ( index !== undefined )
        console.error( `glTF not have ${nodeType} on index ${index}` );
    else
        console.error( `glTF not have ${nodeType} property` );
    return false;

}

Object.defineProperties( GLTFLoader, {

    version: {

        get() {

            if ( this.version )
                return this.version;
            else if ( this.json ) {

                if ( ! this.json.asset )
                    return errorMiss( 'asset' );

                this.version = this.json.asset.version;
                if ( this.json.asset.minVersion )
                    this.version += `\r minVersion${this.json.asset.minVersion}`;

                return this.version;

            }

            console.warn( 'glTF not loaded.' );
            return null;

        },
    },

    generator: {

        get() {

            return this._generator;

        },

    },

} );

Object.assign( GLTFLoader.prototype, {

    load( file, sceneId ) {

        const name = 'GLTFLOADER';
        const loader = new FileLoader( { file, name } );
        return loader.load()
            .then( res => this.parse( res[ name ], sceneId ) );

    },

    parse( json, sceneId ) {

        this.gltf = json;

        const { version, generator } = this.gltf.asset;
        this._generator = generator;
        if ( version !== '2.0' ) {

            console.error( `GlTFLoader only support glTF 2.0 for now! Received glTF version: ${this.version}` );
            return false;

        }

        const result = {
            nodes: this.parseScene( sceneId ),
            animations: this.parseAnimations(),
            name: this.currentSceneName,
        };

        return this.convertToNode( result );

    },

    parseAnimations() {

        const result = [];
        const animations = this.gltf.animations;
        if ( animations )
            for ( let i = 0; i < animations.length; i ++ ) {

                const animation = animations[ i ];
                const { name, channels, samplers } = animation;
                const clips = [];
                if ( channels && samplers )
                    for ( let j = 0; j < channels.length; j ++ ) {

                        const channel = channels[ j ];
                        const sampler = samplers[ channel.sampler ];
                        if ( ! sampler ) {

                            errorMiss( `animations[${i}].channels[${j}].sampler`, channel.sampler );
                            continue;

                        }

                        const input = this.parseAccessor( sampler.input ).data;
                        const outputData = this.parseAccessor( sampler.output );
                        const output = outputData.data;
                        const numComponents = outputData.numComponents;
                        const interpolation = sampler.interpolation || 'LINEAR';
                        const gltfNodeIdx = channel.target.node;
                        const path = channel.target.path;

                        if ( ! input || ! output ) continue;

                        let combinedOutput = output;
                        if ( numComponents !== 1 || input.length !== output.length ) {

                            const numComp = output.length / input.length;
                            combinedOutput = [];
                            for ( let k = 0; k < input.length; k ++ )
                                combinedOutput.push( output.slice( numComp * k, numComp * ( k + 1 ) ) );

                        }

                        let nodeProperty = path;
                        const extras = {};
                        switch ( path ) {

                        case 'translation':
                            nodeProperty = 'position';
                            break;
                        case 'rotation':
                            nodeProperty = 'quaternion';
                            break;
                        case 'scale':
                            nodeProperty = 'scale';
                            break;
                        case 'weights':
                            nodeProperty = 'weights';
                            extras.uniformName = GLTFLoader.MORPH_WEIGHT_UNIFORM;
                            break;
                        default:
                            console.error( `unsupported animation sampler path ${path}` );
                            nodeProperty = false;

                        }

                        if ( ! nodeProperty ) continue;

                        const clip = {
                            times: input,
                            values: combinedOutput,
                            findFlag: GLTFLoader.GLTF_NODE_INDEX_PROPERTY,
                            findValue: gltfNodeIdx,
                            targetProp: nodeProperty,
                            method: interpolation,
                            extras,
                        };

                        clips.push( clip );

                    }

                result.push( {
                    name: name || String( i ),
                    clips,
                } );

            }

        return result;

    },

    parseScene( sceneId ) {

        const loadScene = sceneId || this.gltf.scene || 0;
        const scene = this.gltf.scenes[ loadScene ];

        if ( typeof scene === 'undefined' )
            return errorMiss( 'scene', loadScene );

        this.currentSceneName = scene.name || 'GLTF_NO_NAME_SCENE';

        const result = [];
        const nodes = scene.nodes;
        for ( let i = 0; i < nodes.length; i ++ ) {

            const node = this.parseNode( nodes[ i ] );
            if ( node )
                result.push( node );

        }

        return result;

    },

    convertToNode( infos ) {

        const rootNode = new Node( infos.name );
        const nodes = infos.nodes;
        const animations = infos.animations;
        const textures = [];
        const skins = [];

        function parseNode( nodeInfo, parentNode ) {

            const node = new Node( nodeInfo.name );

            node[ GLTFLoader.GLTF_NODE_INDEX_PROPERTY ] = nodeInfo.nodeId;

            if ( nodeInfo.matrix ) {

                nodeInfo.translation = [ 0, 0, 0 ]; // eslint-disable-line
                nodeInfo.rotation = [ 0, 0, 0, 1 ]; // eslint-disable-line
                nodeInfo.scale = [ 1, 1, 1 ]; // eslint-disable-line
                Matrix4.decompose( nodeInfo.matrix, nodeInfo.translation, nodeInfo.rotation, nodeInfo.scale );

            }

            if ( nodeInfo.translation )
                node.position = nodeInfo.translation;
            if ( nodeInfo.rotation )
                node.quaternion = nodeInfo.rotation;

            if ( nodeInfo.scale )
                node.scale = nodeInfo.scale;

            parentNode.addChild( node );

            if ( nodeInfo.primitives ) {

                const models = [];
                for ( let i = 0; i < nodeInfo.primitives.length; i ++ ) {

                    const primitive = nodeInfo.primitives[ i ];
                    const { attribArrays, modelName, drawMode } = primitive;
                    if ( ! primitive.attribArrays.mesh ) {

                        const mesh = new Mesh( primitive.meshName, attribArrays );
                        primitive.attribArrays = { attribArrays, mesh };

                    }

                    const model = new Model( primitive.attribArrays.mesh );
                    model.name = modelName;
                    model.drawMode = drawMode;

                    const uniformobj = {};
                    const skinDefines = ( nodeInfo.skin && nodeInfo.skin.defines ) || [];
                    model.defines = primitive.defines.concat( skinDefines );
                    // parse material
                    if ( primitive.material ) {

                        const {
                            baseColorTexture, baseColorFactor, metallicFactor, roughnessFactor, doubleSided,
                            metallicRoughnessTexture, normalTexture, occlusionTexture, emissiveTexture, enableBlend, alphaCutoff,
                        } = primitive.material;

                        model.mesh.cullFace = ! doubleSided;
                        model.mesh.sampleBlend = !! enableBlend;

                        if ( alphaCutoff !== undefined )
                            uniformobj[ GLTFLoader.ALPHA_CUTOFF_UNIFORM ] = alphaCutoff;
                        uniformobj[ GLTFLoader.BASE_COLOR_UNIFORM ] = baseColorFactor;
                        uniformobj[ GLTFLoader.METALROUGHNESS_UNIFORM ] = [ metallicFactor, roughnessFactor ];

                        if ( baseColorTexture && baseColorTexture.texture ) {

                            const idx = textures.indexOf( baseColorTexture.texture );
                            if ( idx < 0 ) {

                                textures.push( baseColorTexture.texture );
                                baseColorTexture.textureIdx = textures.length - 1;

                            }
                            if ( ! model.textures ) model.textures = {};
                            if ( baseColorTexture.textureIdx === undefined ) baseColorTexture.textureIdx = idx;
                            model.textures[ GLTFLoader.BASE_COLOR_TEXTURE_UNIFORM ] = baseColorTexture.textureIdx;

                        }

                        if ( metallicRoughnessTexture && metallicRoughnessTexture.texture ) {

                            const idx = textures.indexOf( metallicRoughnessTexture.texture );
                            if ( idx < 0 ) {

                                textures.push( metallicRoughnessTexture.texture );
                                metallicRoughnessTexture.textureIdx = textures.length - 1;

                            }
                            if ( ! model.textures ) model.textures = {};
                            if ( metallicRoughnessTexture.textureIdx === undefined ) metallicRoughnessTexture.textureIdx = idx;
                            model.textures[ GLTFLoader.METALROUGHNESS_TEXTURE_UNIFORM ] = metallicRoughnessTexture.textureIdx;

                        }

                        if ( normalTexture && normalTexture.texture ) {

                            const idx = textures.indexOf( normalTexture.texture );
                            if ( idx < 0 ) {

                                textures.push( normalTexture.texture );
                                normalTexture.textureIdx = textures.length - 1;

                            }
                            if ( ! model.textures ) model.textures = {};
                            if ( normalTexture.textureIdx === undefined ) normalTexture.textureIdx = idx;
                            model.textures[ GLTFLoader.NORMAL_TEXTURE_UNIFORM ] = normalTexture.textureIdx;
                            uniformobj[ GLTFLoader.NORMAL_SCALE_UNIFORM ] = normalTexture.scale;

                        }

                        if ( occlusionTexture && occlusionTexture.texture ) {

                            const idx = textures.indexOf( occlusionTexture.texture );
                            if ( idx < 0 ) {

                                textures.push( occlusionTexture.texture );
                                occlusionTexture.textureIdx = textures.length - 1;

                            }
                            if ( ! model.textures ) model.textures = {};
                            if ( occlusionTexture.textureIdx === undefined ) occlusionTexture.textureIdx = idx;
                            model.textures[ GLTFLoader.OCCLUSION_TEXTURE_UNIFORM ] = occlusionTexture.textureIdx;
                            uniformobj[ GLTFLoader.OCCLUSION_FACTOR_UNIFORM ] = occlusionTexture.strength;

                        }

                        if ( emissiveTexture && emissiveTexture.texture ) {

                            const idx = textures.indexOf( emissiveTexture.texture );
                            if ( idx < 0 ) {

                                textures.push( emissiveTexture.texture );
                                emissiveTexture.textureIdx = textures.length - 1;

                            }
                            if ( ! model.textures ) model.textures = {};
                            if ( emissiveTexture.textureIdx === undefined ) emissiveTexture.textureIdx = idx;
                            model.textures[ GLTFLoader.EMISSIVE_TEXTURE_UNIFORM ] = emissiveTexture.textureIdx;
                            uniformobj[ GLTFLoader.EMISSIVE_FACTOR_UNIFORM ] = emissiveTexture.emissiveFactor;

                        }


                    }

                    // morph targets
                    if ( primitive.weights )
                        uniformobj[ GLTFLoader.MORPH_WEIGHT_UNIFORM ] = primitive.weights;

                    model.setUniformObj( uniformobj );

                    if ( nodeInfo.primitives.length < 2 )
                        node.setModel( model );
                    else
                        node.addChild( model );

                    models.push( model );

                }

                if ( nodeInfo.skin )

                    if ( skins.indexOf( nodeInfo.skin ) > - 1 )
                        nodeInfo.skin.models.push( ...models );
                    else {

                        node.skin = Object.assign( nodeInfo.skin, { models } );
                        skins.push( node.skin );

                    }


            }
            return node;

        }

        function trivarse( trivarseFun, parentNode, nodeInfos ) {

            for ( let i = 0; i < nodeInfos.length; i ++ ) {

                const node = trivarseFun( nodeInfos[ i ], parentNode );
                trivarse( trivarseFun, node, nodeInfos[ i ].children );

            }

        }

        trivarse( parseNode, rootNode, nodes );

        // apply skins
        if ( skins.length ) {

            const skinsNum = skins.length;
            const updateJointUniformFuncs = [];
            for ( let i = 0; i < skins.length; i ++ ) {

                const {
                    joints, skeleton, inverseBindMatrices, models,
                } = skins[ i ];

                const jointNum = joints.length;
                const globalJointTransformNodes = [];
                for ( let j = 0; j < jointNum; j ++ )
                    globalJointTransformNodes[ j ] = rootNode.findInChildren( GLTFLoader.GLTF_NODE_INDEX_PROPERTY, joints[ j ] );

                let globalTransformNode = false;
                if ( skeleton !== GLTFLoader.SCENE_ROOT_SKELETON ) {

                    globalTransformNode = rootNode.findInChildren( GLTFLoader.GLTF_NODE_INDEX_PROPERTY, skeleton );
                    if ( globalTransformNode.parent !== rootNode )
                        globalTransformNode = globalTransformNode.parent;

                } else
                    globalTransformNode = rootNode.children[ 0 ];

                const frag = new Array( 16 );
                const fragWorld = new Array( 16 );
                updateJointUniformFuncs[ i ] = function updateJointUniformFunc() {

                    let jointMats = [];
                    Matrix4.invert( fragWorld, globalTransformNode.transform.getWorldMatrix() );
                    for ( let n = 0; n < jointNum; n ++ ) {

                        Matrix4.mult( frag, fragWorld, globalJointTransformNodes[ n ].transform.getWorldMatrix() );
                        if ( inverseBindMatrices[ n ] !== GLTFLoader.IDENTITY_INVERSE_BIND_MATRICES )
                            Matrix4.mult( frag, frag, inverseBindMatrices[ n ] );
                        jointMats = jointMats.concat( frag );

                    }

                    const uniformObj = {};
                    uniformObj[ GLTFLoader.JOINT_MATRICES_UNIFORM ] = jointMats;
                    models.forEach( model => model.setUniformObj( uniformObj ) );

                };

            }

            rootNode.afterUpdateMatrix = function () {

                for ( let i = 0; i < skinsNum; i ++ )
                    updateJointUniformFuncs[ i ]();

            };

        }

        const animas = { animations, rootNode, type: 'gltf' };
        return { rootNode, textures, animations: animas };

    },

    parseNode( nodeId ) {

        // TODO camera
        const node = this.gltf.nodes[ nodeId ];
        if ( ! node )
            return errorMiss( 'node', nodeId );

        if ( node.isParsed )
            return node.dnode;

        const {
            name, matrix, translation, rotation, scale,
        } = node;

        const dnode = {
            name,
            matrix,
            translation,
            rotation,
            scale,
            nodeId,
        };

        if ( node.mesh !== undefined )
            dnode.primitives = this.parseMesh( node.mesh );

        if ( node.skin !== undefined ) {

            const skin = this.parseSkin( node.skin );
            if ( skin )
                dnode.skin = skin;

        }

        dnode.children = [];
        if ( node.children )
            for ( let i = 0; i < node.children.length; i ++ )
                dnode.children.push( this.parseNode( node.children[ i ] ) );

        node.dnode = dnode;
        node.isParsed = true;

        return node.dnode;

    },

    parseSkin( skinId ) {

        const skin = this.gltf.skins[ skinId ];

        if ( ! skin )
            return errorMiss( 'skin', skinId );

        if ( skin.isParsed )
            return skin.dskin;

        const {
            name, joints, inverseBindMatrices, skeleton,
        } = skin;

        if ( ! joints )
            return errorMiss( 'skin.joints', skinId );

        skin.isParsed = true;
        skin.dskin = false;
        let dskin = { name, joints, defines: [ GLTFLoader.getJointsNumDefine( joints.length ) ] };
        dskin.skeleton = skeleton === undefined ? GLTFLoader.SCENE_ROOT_SKELETON : skeleton;
        dskin.inverseBindMatrices = GLTFLoader.IDENTITY_INVERSE_BIND_MATRICES;

        if ( inverseBindMatrices !== undefined ) {

            const accessor = this.parseAccessor( inverseBindMatrices );
            if ( accessor ) {

                const array = accessor.data;
                const matrices = [];
                for ( let i = 0; i < array.length / 16; i ++ )
                    matrices.push( new Float32Array( array.buffer, 16 * i * Float32Array.BYTES_PER_ELEMENT, 16 ) );

                dskin.inverseBindMatrices = matrices;

            } else
                dskin = false;

        }

        skin.dskin = dskin;
        return skin.dskin;

    },

    parseMesh( meshId ) {

        const mesh = this.gltf.meshes[ meshId ];

        if ( ! mesh )
            return errorMiss( 'mesh', meshId );

        if ( mesh.isParsed )
            return mesh.dprimitives;

        const primitives = mesh.primitives;
        const dprimitives = [];
        for ( let i = 0; i < primitives.length; i ++ ) {

            const primitive = primitives[ i ];
            const {
                attributes, indices, material, mode, name, targets,
            } = primitive;

            const dprimitive = {
                attribArrays: {},
                defines: [],
            };
            let hasNormal = false;
            let hasTangent = false;
            let texCoordNum = 0;
            let jointVec8 = false;
            let vertexColor = 0;
            Object.keys( attributes ).forEach( ( attribute ) => {

                const accessor = this.parseAccessor( attributes[ attribute ] );

                if ( accessor ) {

                    let attribName;
                    switch ( attribute ) {

                    case 'POSITION':
                        attribName = ATTRIB_POSITION_NAME;
                        break;

                    case 'NORMAL':
                        attribName = ATTRIB_NORMAL_NAME;
                        hasNormal = true;
                        break;

                    case 'TANGENT':
                        attribName = ATTRIB_TANGENT_NAME;
                        hasTangent = true;
                        break;

                    case 'TEXCOORD_0':
                        attribName = ATTRIB_UV_NAME;
                        texCoordNum ++;
                        break;

                    case 'TEXCOORD_1':
                        attribName = ATTRIB_UV_1_NAME;
                        texCoordNum ++;
                        break;

                    case 'JOINTS_0':
                        attribName = ATTRIB_JOINT_0_NAME;
                        break;

                    case 'JOINTS_1':
                        attribName = ATTRIB_JOINT_1_NAME;
                        jointVec8 = true;
                        break;

                    case 'WEIGHTS_0':
                        attribName = ATTRIB_WEIGHT_0_NAME;
                        break;

                    case 'WEIGHTS_1':
                        attribName = ATTRIB_WEIGHT_1_NAME;
                        break;

                    case 'COLOR_0':
                        attribName = ATTRIB_VERTEX_COLOR_NAME;
                        vertexColor = accessor.numComponents;
                        break;

                    default:
                        attribName = attribute;

                    }

                    dprimitive.attribArrays[ attribName ] = accessor;

                }

            } );

            if ( hasNormal ) dprimitive.defines.push( GLTFLoader.getHasNormalDefine() );
            if ( hasTangent ) dprimitive.defines.push( GLTFLoader.getHasTangentDefine() );
            if ( texCoordNum ) dprimitive.defines.push( GLTFLoader.getTexCoordDefine( texCoordNum ) );
            if ( jointVec8 ) dprimitive.defines.push( GLTFLoader.getJointVec8Define() );
            if ( vertexColor ) dprimitive.defines.push( GLTFLoader.getVertexColorDefine( vertexColor ) );

            if ( indices !== undefined ) {

                const accessor = this.parseAccessor( indices );
                if ( accessor )
                    dprimitive.attribArrays.indices = accessor;

            }

            const dmaterial = this.parseMaterial( material );
            if ( dmaterial ) {

                dprimitive.material = dmaterial;
                dprimitive.defines = dprimitive.defines.concat( dmaterial.defines );

            }

            dprimitive.drawMode = mode === undefined ? 4 : mode;
            dprimitive.meshName = name || GLTFLoader.getMeshNameCounter();
            dprimitive.modelName = mesh.name || GLTFLoader.getModelNameCounter();

            if ( targets ) {

                dprimitive.defines.push( GLTFLoader.getMorphTargetsDefine( targets.length ) );
                let hasPositions = false;
                let hasNormals = false;
                let hasTangents = false;
                for ( let j = 0; j < targets.length; j ++ ) {

                    const target = targets[ j ];
                    Object.keys( target ).forEach( ( attribute ) => {

                        const accessor = this.parseAccessor( target[ attribute ] );
                        if ( accessor ) {

                            let attribName;
                            switch ( attribute ) {

                            case 'POSITION':
                                attribName = GLTFLoader.MORPH_POSITION_PREFIX + j;
                                hasPositions = true;
                                break;
                            case 'NORMAL':
                                attribName = GLTFLoader.MORPH_NORMAL_PREFIX + j;
                                hasNormals = true;
                                break;
                            case 'TANGENT':
                                attribName = GLTFLoader.MORPH_TANGENT_PREFIX + j;
                                hasTangents = true;
                                break;
                            default:
                                attribName = false;

                            }

                            if ( ! attribName )
                                console.error( `glTF has unsupported morph target attribute ${attribute}` );
                            else
                                dprimitive.attribArrays[ attribName ] = accessor;

                        }

                    } );

                }

                if ( hasPositions ) dprimitive.defines.push( GLTFLoader.getMorphtargetPositionDefine() );
                if ( hasNormals ) dprimitive.defines.push( GLTFLoader.getMorphtargetNormalDefine() );
                if ( hasTangents ) dprimitive.defines.push( GLTFLoader.getMorphtargetTangentDefine() );
                dprimitive.weights = mesh.weights || new Array( targets.length ).fill( 0 );

            }

            dprimitives.push( dprimitive );

        }

        mesh.dprimitives = dprimitives;
        mesh.isParsed = true;

        return mesh.dprimitives;

    },

    parseAccessor( accessorId ) {

        const accessor = this.gltf.accessors[ accessorId ];
        if ( ! accessor )
            return errorMiss( 'accessor', accessorId );

        if ( accessor.isParsed )
            return accessor.daccessor;

        accessor.isParsed = true;
        accessor.daccessor = false;

        const normalize = !! accessor.normalized;
        const bufferView = this.gltf.bufferViews[ accessor.bufferView ];
        const byteStride = bufferView && bufferView.byteStride;
        const arrayType = getTypedArrayTypeFromGLType( accessor.componentType );
        let numComponents = 1;
        switch ( accessor.type ) {

        case 'SCALAR':
            numComponents = 1;
            break;
        case 'VEC2':
            numComponents = 2;
            break;
        case 'VEC3':
            numComponents = 3;
            break;
        case 'VEC4':
        case 'MAT2':
            numComponents = 4;
            break;
        case 'MAT3':
            numComponents = 9;
            break;
        case 'MAT4':
            numComponents = 16;
            break;
        default:
            numComponents = 0;
            break;

        }
        if ( numComponents === 0 ) {

            console.error( `glTF has unknown data type in accessor: ${accessor.type}` );
            return false;

        }
        const componentsBytes = numComponents * arrayType.BYTES_PER_ELEMENT;

        let buffer;
        if ( bufferView !== undefined ) {

            buffer = this.parseBufferView( accessor.bufferView );
            if ( ! buffer )
                return accessor.daccessor;

        } else
            buffer = ( new Uint8Array( componentsBytes * accessor.count ) ).buffer;

        let typedArray = this.getTypedArrayFromArrayBuffer( buffer, byteStride, accessor.byteOffset || 0, arrayType, numComponents, accessor.count );

        if ( accessor.sparse ) {

            const { count, indices, values } = accessor.sparse;
            typedArray = new arrayType( typedArray ); // eslint-disable-line

            const indicesByteOffset = indices.byteOffset || 0;
            const indicesBufferView = this.gltf.bufferViews[ indices.bufferView ];
            const indicesArrayType = getTypedArrayTypeFromGLType( indices.componentType );
            const indicesBuffer = this.parseBufferView( indices.bufferView );
            const indicesArray = this.getTypedArrayFromArrayBuffer( indicesBuffer, indicesBufferView.byteStride, indicesByteOffset, indicesArrayType, 1, count );

            const valuesByteOffset = values.byteOffset || 0;
            const valuesBufferView = this.gltf.bufferViews[ values.bufferView ];
            const valuesBuffer = this.parseBufferView( values.bufferView );
            const valuesArray = this.getTypedArrayFromArrayBuffer( valuesBuffer, valuesBufferView.byteStride, valuesByteOffset, arrayType, numComponents, count );

            for ( let i = 0; i < indicesArray.length; i ++ )
                typedArray.set( valuesArray.slice( i * numComponents, i * numComponents + numComponents ), indicesArray[ i ] * numComponents );

        }

        accessor.computeResult = {
            typedArray, arrayType, numComponents,
        };
        accessor.daccessor = {
            data: typedArray, numComponents, normalize,
        };

        return accessor.daccessor;

    },

    getTypedArrayFromArrayBuffer( buffer, byteStride, byteOffset, arrayType, numComponents, count ) {

        let typedArray;
        const componentsBytes = numComponents * arrayType.BYTES_PER_ELEMENT;
        if ( byteStride && componentsBytes !== byteStride ) {

            const arrayLength = numComponents * count;
            typedArray = new arrayType( arrayLength ); // eslint-disable-line
            for ( let i = 0; i < count; i ++ ) {

                const componentVals = new arrayType( buffer, byteOffset + i * byteStride, numComponents ); // eslint-disable-line
                for ( let j = 0; j < numComponents; j ++ )
                    typedArray[ i * numComponents + j ] = componentVals[ j ];

            }

        } else
            typedArray = new arrayType( buffer, byteOffset, count * numComponents ); // eslint-disable-line

        return typedArray;

    },

    parseBufferView( bufferViewId ) {

        const bufferView = this.gltf.bufferViews[ bufferViewId ];
        if ( ! bufferView )
            return errorMiss( 'bufferView', bufferViewId );

        if ( bufferView.isParsed )
            return bufferView.dbufferView;

        bufferView.isParsed = true;
        bufferView.dbufferVie = false;

        const buffer = this.parseBuffer( bufferView.buffer );
        if ( buffer ) {

            const { byteOffset, byteLength } = bufferView;
            const bufferArray = new Uint8Array( buffer, byteOffset || 0, byteLength );
            bufferView.dbufferView = ( new Uint8Array( bufferArray ) ).buffer;

        }

        return bufferView.dbufferView;

    },

    BASE64_MARKER: ';base64,',

    parseBuffer( bufferId ) {

        const buffer = this.gltf.buffers[ bufferId ];
        if ( ! buffer )
            return errorMiss( 'buffer', bufferId );

        if ( buffer.isParsed )
            return buffer.dbuffer;

        buffer.isParsed = true;
        buffer.dbuffer = false;

        if ( buffer.uri.substr( 0, 5 ) !== 'data:' ) {

            const uri = buffer.uri;
            const arrayBuffer = this.gltf.resources[ uri ];
            if ( arrayBuffer )
                if ( arrayBuffer.byteLength === buffer.byteLength ) {

                    buffer.dbuffer = this.gltf.resources[ uri ];

                } else
                    console.error( `load gltf resource "${uri}" at buffers[${bufferId} failed, ArrayBuffer.byteLength not equals buffer's byteLength]` );
            else
                console.error( `load gltf resource "${uri}" at buffers[${bufferId}] failed` );

        } else {

            const base64Idx = buffer.uri.indexOf( this.BASE64_MARKER ) + this.BASE64_MARKER.length;
            const blob = window.atob( buffer.uri.substr( base64Idx ) );
            const bytes = new Uint8Array( blob.length );
            for ( let i = 0; i < blob.length; i ++ )
                bytes[ i ] = blob.charCodeAt( i );
            buffer.dbuffer = bytes.buffer;

        }

        return buffer.dbuffer;

    },

    parseMaterial( materialId ) {

        let material;
        if ( materialId === undefined )
            material = GLTFLoader.defaultMaterial;
        else
            material = this.gltf.materials[ materialId ];

        if ( ! material )
            return errorMiss( 'material', materialId );

        if ( material.isParsed )
            return material.dmaterial;

        const {
            name, pbrMetallicRoughness, normalTexture, occlusionTexture, emissiveTexture, emissiveFactor,
            alphaMode, alphaCutoff, doubleSided,
        } = material;
        const dmaterial = {
            name, defines: [], doubleSided: !! doubleSided,
        };

        if ( alphaMode && alphaMode !== 'OPAQUE' ) {

            if ( alphaMode === 'MASK' ) {

                dmaterial.defines.push( GLTFLoader.getAlphaMaskDefine() );
                dmaterial.alphaCutoff = alphaCutoff === undefined ? 0.5 : alphaCutoff;

            }

            if ( alphaMode === 'BLEND' ) {

                dmaterial.defines.push( GLTFLoader.getAlphaBlendDdefine() );
                dmaterial.enableBlend = true;

            }

        }

        if ( pbrMetallicRoughness ) {

            const {
                baseColorFactor, metallicFactor, roughnessFactor, baseColorTexture, metallicRoughnessTexture,
            } = pbrMetallicRoughness;

            Object.assign( dmaterial, {
                baseColorFactor: baseColorFactor || [ 1, 1, 1, 1 ],
                metallicFactor: metallicFactor === undefined ? 1 : metallicFactor,
                roughnessFactor: roughnessFactor === undefined ? 1 : roughnessFactor,
            } );

            if ( baseColorTexture ) {

                const texture = this.parseTexture( baseColorTexture.index );
                if ( texture ) {

                    dmaterial.baseColorTexture = { texture, texCoord: baseColorTexture.texCoord || 0 };
                    dmaterial.defines.push( GLTFLoader.getBaseColorTextureDefine() );

                }

            }

            if ( metallicRoughnessTexture ) {

                const texture = this.parseTexture( metallicRoughnessTexture.index );
                if ( texture ) {

                    dmaterial.metallicRoughnessTexture = { texture, texCoord: metallicRoughnessTexture.texCoord || 0 };
                    dmaterial.defines.push( GLTFLoader.getMetalRoughnessDefine() );

                }

            }

        } else
            Object.assign( dmaterial, {
                baseColorFactor: [ 1, 1, 1, 1 ],
                metallicFactor: 1,
                roughnessFactor: 1,
            } );

        if ( normalTexture ) {

            const texture = this.parseTexture( normalTexture.index );
            if ( texture ) {

                dmaterial.normalTexture = { texture, texCoord: normalTexture.texCoord || 0, scale: normalTexture.scale || 1 };
                dmaterial.defines.push( GLTFLoader.getNormalMapDefine() );

            }

        }

        if ( occlusionTexture ) {

            const texture = this.parseTexture( occlusionTexture.index );
            if ( texture ) {

                dmaterial.occlusionTexture = { texture, texCoord: occlusionTexture.texCoord || 0, strength: occlusionTexture.strength || 1 };
                dmaterial.defines.push( GLTFLoader.getOcclusionMapDefine() );

            }

        }

        if ( emissiveTexture && emissiveFactor ) {

            const texture = this.parseTexture( emissiveTexture.index );
            if ( texture ) {

                dmaterial.emissiveTexture = { texture, texCoord: emissiveTexture.texCoord || 0, emissiveFactor };
                dmaterial.defines.push( GLTFLoader.getEmissiveMapDefine() );

            }

        }

        material.isParsed = true;
        material.dmaterial = dmaterial;
        return dmaterial;

    },

    parseTexture( textureId ) {

        const texture = this.gltf.textures[ textureId ];
        if ( ! texture )
            return errorMiss( 'texture', textureId );

        if ( texture.isParsed )
            return texture.dtexture;

        const { source, sampler } = texture;
        let dtexture = {};
        const image = this.parseImage( source );
        const imgsampler = this.parseSampler( sampler );
        if ( ! image || ! imgsampler ) {

            dtexture = false;
            return false;

        }
        Object.assign( dtexture, { src: image }, imgsampler );

        texture.isParsed = true;
        texture.dtexture = dtexture;
        return dtexture;

    },

    parseImage( imageId ) {

        const image = this.gltf.images[ imageId ];
        if ( ! image )
            return errorMiss( 'image', imageId );

        if ( image.isParsed )
            return image.dimage;

        image.isParsed = true;
        image.dimage = false;

        if ( ! image.uri && typeof image.bufferView !== 'undefined' ) {

            const arrayBuffer = this.parseBufferView( image.bufferView );
            if ( arrayBuffer ) {

                const type = image.mimeType || 'image/jpeg';
                const arrayBufferView = new Uint8Array( arrayBuffer );
                const blob = new Blob( [ arrayBufferView ], { type } );
                const urlCreator = window.URL || window.webkitURL;
                const imageUrl = urlCreator.createObjectURL( blob );

                image.dimage = imageUrl;

            }

        }

        if ( image.uri )
            if ( image.uri.substr( 0, 5 ) !== 'data:' ) {

                const uri = image.uri;
                const imageres = this.gltf.resources[ uri ];
                if ( imageres )
                    image.dimage = imageres;

            } else {

                const img = new window.Image();
                img.src = image.uri;

                image.dimage = img;

            }

        return image.dimage;

    },

    parseSampler( samplerId ) {

        if ( samplerId === undefined ) return { wrap: REPEAT };
        const sampler = this.gltf.samplers[ samplerId ];
        if ( ! sampler )
            return errorMiss( 'sampler', samplerId );

        if ( sampler.isParsed )
            return sampler.dsampler;

        const {
            magFilter, minFilter, wrapS, wrapT,
        } = sampler;

        const dsampler = { wrapS: wrapS || REPEAT, wrapT: wrapT || REPEAT };
        if ( minFilter )
            dsampler.min = minFilter;
        if ( magFilter )
            dsampler.mag = magFilter;

        sampler.dsampler = dsampler;
        sampler.isParsed = true;
        return dsampler;

    },

} );

Object.assign( GLTFLoader, {

    getMeshNameCounter: ( function () {

        let counter = 0;

        return function getMeshNameCounter() {

            return `GLTF_NO_NAME_PRIMITIVE_${counter ++}`;

        };

    }() ),

    getModelNameCounter: ( function () {

        let counter = 0;

        return function getModelNameCounter() {

            return `GLTF_NO_NAME_MESH_${counter ++}`;

        };

    }() ),


    GLTF_NODE_INDEX_PROPERTY: 'GLTF_NODE_INDEX',

    getTexCoordDefine( texNum ) {

        return `UV_NUM ${texNum}`;

    },

    BASE_COLOR_UNIFORM: 'u_baseColorFactor',

    BASE_COLOR_TEXTURE_UNIFORM: 'u_baseColorSampler',

    METALROUGHNESS_UNIFORM: 'u_metallicRoughnessValues',

    METALROUGHNESS_TEXTURE_UNIFORM: 'u_metallicRoughnessSampler',

    NORMAL_TEXTURE_UNIFORM: 'u_normalSampler',

    NORMAL_SCALE_UNIFORM: 'u_normalScale',

    EMISSIVE_TEXTURE_UNIFORM: 'u_emissiveSampler',

    EMISSIVE_FACTOR_UNIFORM: 'u_emissiveFactor',

    OCCLUSION_TEXTURE_UNIFORM: 'u_occlusionSampler',

    OCCLUSION_FACTOR_UNIFORM: 'u_occlusionFactor',

    getVertexColorDefine( num ) {

        return `HAS_VERTEXCOLOR ${num}`;

    },

    getBaseColorTextureDefine() {

        return 'HAS_BASECOLORMAP';

    },

    getMetalRoughnessDefine() {

        return 'HAS_METALROUGHNESSMAP';

    },

    getNormalMapDefine() {

        return 'HAS_NORMALMAP';

    },

    getEmissiveMapDefine() {

        return 'HAS_EMISSIVEMAP';

    },

    getOcclusionMapDefine() {

        return 'HAS_OCCLUSIONMAP';

    },

    MAX_MORPH_TARGETS: 8,

    MORPH_POSITION_PREFIX: 'a_morphPositions_',

    MORPH_NORMAL_PREFIX: 'a_morphNromals_',

    MORPH_TANGENT_PREFIX: 'a_morphTangents_',

    MORPH_WEIGHT_UNIFORM: 'u_morphWeights',

    getMorphTargetsDefine( targetNum ) {

        return `MORPH_TARGET_NUM ${targetNum}`;

    },

    getMorphtargetPositionDefine() {

        return 'HAS_MORPH_POSITION ';

    },

    getMorphtargetNormalDefine() {

        return 'HAS_MORPH_NORMAL';

    },

    getMorphtargetTangentDefine() {

        return 'HAS_MORPH_TANGENT';

    },

    SCENE_ROOT_SKELETON: 'SCENE_ROOT',

    IDENTITY_INVERSE_BIND_MATRICES: 'IDENTITY_IBM',

    getJointsNumDefine( num ) {

        return `JOINTS_NUM ${num}`;

    },

    getJointVec8Define() {

        return 'JOINT_VEC8';

    },

    JOINT_MATRICES_UNIFORM: 'u_jointMatrix',

    getHasNormalDefine() {

        return 'HAS_NORMAL';

    },

    getHasTangentDefine() {

        return 'HAS_TANGENT';

    },

    getHasNormalMapDefine() {

        return 'HAS_NORMAL_MAP';

    },

    ALPHA_CUTOFF_UNIFORM: 'u_alphaCutoff',

    getAlphaMaskDefine() {

        return 'ALPHA_MASK';

    },

    getAlphaBlendDdefine() {

        return 'ALPHA_BLEND';

    },

    defaultMaterial: {

        name: 'GLTF_DEFAULT_MATERIAL',
        emissiveFactor: [ 0, 0, 0 ],
        alphaMode: 'OPAQUE',
        alphaCutoff: 0.5,
        doubleSided: false,
        isParsed: true,
        dmaterial: {
            name: 'GLTF_DEFAULT_MATERIAL',
            defines: [],
            doubleSided: false,
            baseColorFactor: [ 1, 1, 1, 1 ],
            metallicFactor: 1,
            roughnessFactor: 1,
            emissiveFactor: [ 0, 0, 0 ],
        },

    },

} );

function PointHelper( gl, camera, data = [], pointSize, pointColor ) {

    this.shader = new ColorPointShader( gl, camera, pointSize, pointColor );

    const attribArrays = {};
    attribArrays[ ATTRIB_POSITION_NAME ] = { data, drawType: gl.DYNAMIC_DRAW };
    this.mesh = new Mesh( 'PointHelper', attribArrays, { drawMode: gl.POINTS } );
    this.model = new Model( this.mesh );
    this.gl = gl;

}

Object.assign( PointHelper.prototype, {

    render() {

        this.model.transform.updateMatrix().copyToWorldMatrix();
        this.shader.renderModel( this.model );
        return this;

    },

    // array or Model.infos
    setData( array ) {

        let typedArray = array;

        if ( array.data ) {

            typedArray = array.data;
            if ( array.numComponents && array.numComponents !== 3 )
                if ( array.numComponents === 4 ) {

                    typedArray = [];
                    for ( let i = 0; i < array.data.length / 4; i ++ )
                        typedArray.push( array.data[ i * 4 ], array.data[ i * 4 + 1 ], array.data[ i * 4 + 2 ] );

                } else {

                    console.error( 'array data numElement nor 3 or 4 for PointHelper.' );
                    return null;

                }

        }

        typedArray = getTypedArray( typedArray );

        this.mesh.attribArrays[ ATTRIB_POSITION_NAME ].data = typedArray;

        const bufferInfo = this.mesh.bufferInfo;
        if ( bufferInfo ) {

            const buffer = bufferInfo.attribs[ ATTRIB_POSITION_NAME ].buffer;
            setTypedArrayToBuffer( this.gl, buffer, typedArray );

            bufferInfo.numElements = typedArray.length / 3;

        }

        return this;

    },

} );

var vs$11 = "#version 300 es\n#define GLSLIFY 1\nin vec3 a_position;\n\nuniform mat4 u_mvpMat;\nuniform vec4 u_colors[2];\n\nout vec4 v_color;\n\nvoid main() {\n    v_color = u_colors[gl_VertexID % 2];\n    gl_Position = u_mvpMat * vec4(a_position, 1.0);\n}\n"; // eslint-disable-line

var fs$11 = "#version 300 es\nprecision mediump float;\n#define GLSLIFY 1\n\nin vec4 v_color;\n\nlayout(location = 0) out vec4 finalColor;\n\n#ifdef ColorPick\nuniform vec3 u_colorId;\nlayout(location = 1) out vec4 pickColor;\n#endif\n\nvoid main() {\n    finalColor = v_color;\n\n    #ifdef ColorPick\n    pickColor = vec4(u_colorId, 1.0);\n    #endif\n}\n"; // eslint-disable-line

function ColorLineShader( gl, camera, colors = [ 255 / 255, 105 / 255, 180 / 255, 255 / 255, 255 / 255, 182 / 255, 193 / 255, 80 / 255 ] ) {

    Shader.call( this, gl, ColorLineShader.vs, ColorLineShader.fs );

    this.setCamera( camera );
    this.setColors( colors );

    this.deactivate();

}

ColorLineShader.prototype = Object.assign( Object.create( Shader.prototype ), {

    constructor: ColorLineShader,

    setColors( colors ) {

        this.setUniformObj( { u_colors: colors } );

        if ( colors[ 3 ] !== 1 || colors[ 7 ] !== 1 )
            this.blend = true;
        else
            this.blend = false;

        return this;

    },

} );

Object.assign( ColorLineShader, {

    vs: vs$11,
    fs: fs$11,

} );

function LineHelper( gl, camera, points, colors, normalLength = 0.1 ) {

    this.shader = new ColorLineShader( gl, camera, colors );
    this.normalLength = normalLength;

    const vertices = points && this._getdata( points );
    const attribArrays = {};
    attribArrays[ ATTRIB_POSITION_NAME ] = { data: vertices, drawType: gl.DYNAMIC_DRAW };
    this.mesh = new Mesh( 'LineHelper', attribArrays, { drawMode: gl.LINES } );
    this.model = new Model( this.mesh );
    if ( points.isModel )
        this.setTransform( points.transform );
    this.gl = gl;
    this.copyToWorldMatrix = true;

}

Object.assign( LineHelper.prototype, {

    _getdata( points ) {

        let normalPos = points;
        if ( points.isModel ) {

            normalPos = [ points.positionInfo.data, points.normalInfo.data ];
            this.setTransform( points.transform );
            this.copyToWorldMatrix = false;

        }
        if ( points.isMesh ) {

            normalPos = [ points.attribArrays[ ATTRIB_POSITION_NAME ].data, points.attribArrays[ ATTRIB_NORMAL_NAME ].data ];
            this.copyToWorldMatrix = false;

        }

        if ( normalPos.length && normalPos.length === 2 ) {

            const vertices = [];
            const start = normalPos[ 0 ];
            const normal = normalPos[ 1 ].map( n => n * this.normalLength );
            const length = start.length;
            let strip = 3;
            if ( start.length === normal.length ) {

                if ( length % 3 === 0 )
                    strip = 3;
                else if ( length % 4 === 0 )
                    strip = 4;
                else {

                    console.error( 'can not guess the vertex data for LineHelper !' );
                    return null;

                }

                for ( let i = 0; i < length / strip; i ++ ) {

                    vertices.push( start[ i * strip ], start[ i * strip + 1 ], start[ i * strip + 2 ] );
                    vertices.push( start[ i * strip ] + normal[ i * strip ], start[ i * strip + 1 ] + normal[ i * strip + 1 ], start[ i * strip + 2 ] + normal[ i * strip + 2 ] );

                }

                return vertices;

            } else if ( Math.max( start.length, normal.length ) % 4 === 0 && Math.min( start.length, normal.length ) % 3 === 0 &&
                Math.max( start.length, normal.length ) / 4 === Math.min( start.length, normal.length ) / 3 ) {

                const count = Math.max( start.length, normal.length ) / 4;
                const sStrip = start.length > normal.length ? 4 : 3;
                const nStrip = sStrip === 4 ? 3 : 4;
                for ( let i = 0; i < count; i ++ ) {

                    vertices.push( start[ i * sStrip ], start[ i * sStrip + 1 ], start[ i * sStrip + 2 ] );
                    vertices.push( start[ i * sStrip ] + normal[ i * nStrip ], start[ i * sStrip + 1 ] + normal[ i * nStrip + 1 ], start[ i * sStrip + 2 ] + normal[ i * nStrip + 2 ] );

                }

                return vertices;

            }

        }

        return points;

    },

    render() {

        this.model.transform.updateMatrix();
        if ( this.copyToWorldMatrix )
            this.model.transform.copyToWorldMatrix();

        this.shader.renderModel( this.model );
        return this;

    },

    setTransform( transform ) {

        if ( this.model )
            this.model.setTransform( transform );

        return this;

    },

    // model, mesh, arrays
    setData( points ) {

        this.copyToWorldMatrix = true;

        const array = this._getdata( points );
        const typedArray = getTypedArray( array );

        const bufferInfo = this.mesh.bufferInfo;

        this.mesh.attribArrays[ ATTRIB_POSITION_NAME ].data = typedArray;

        if ( bufferInfo ) {

            const buffer = bufferInfo.attribs[ ATTRIB_POSITION_NAME ].buffer;
            setTypedArrayToBuffer( this.gl, buffer, typedArray );

            bufferInfo.numElements = array.length / 3;

        }

        return this;

    },

} );

/* eslint no-multi-assign: 0, no-param-reassign: 0 */

// https://github.com/josephg/noisejs

function Grad( x, y, z ) {

    this.x = x;
    this.y = y;
    this.z = z;

}

Object.assign( Grad.prototype, {

    dot2( x, y ) {

        return this.x * x + this.y * y;

    },

    dot3( x, y, z ) {

        return this.x * x + this.y * y + this.z * z;

    },

} );

const grad3 = [
    new Grad( 1, 1, 0 ), new Grad( - 1, 1, 0 ), new Grad( 1, - 1, 0 ), new Grad( - 1, - 1, 0 ),
    new Grad( 1, 0, 1 ), new Grad( - 1, 0, 1 ), new Grad( 1, 0, - 1 ), new Grad( - 1, 0, - 1 ),
    new Grad( 0, 1, 1 ), new Grad( 0, - 1, 1 ), new Grad( 0, 1, - 1 ), new Grad( 0, - 1, - 1 ),
];

const p = [ 151, 160, 137, 91, 90, 15,
    131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23,
    190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33,
    88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166,
    77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244,
    102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196,
    135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123,
    5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42,
    223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9,
    129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228,
    251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107,
    49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254,
    138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180 ];

const perm = new Array( 512 );
const gradP = new Array( 512 );

const F2 = 0.5 * ( Math.sqrt( 3 ) - 1 );
const G2 = ( 3 - Math.sqrt( 3 ) ) / 6;

const F3 = 1 / 3;
const G3 = 1 / 6;

const Perlin = {};

function fade( t ) {

    return t * t * t * ( t * ( t * 6 - 15 ) + 10 );

}

function lerp( a, b, t ) {

    return ( 1 - t ) * a + t * b;

}

Object.assign( Perlin, {

    seed( seed ) {

        if ( seed > 0 && seed < 1 )
            seed *= 65536;

        let v;
        for ( let i = 0; i < 256; i ++ ) {

            if ( i & 1 )
                v = p[ i ] ^ ( seed & 255 );
            else
                v = p[ i ] ^ ( ( seed >> 8 ) & 255 );


            perm[ i ] = perm[ i + 256 ] = v;
            gradP[ i ] = gradP[ i + 256 ] = grad3[ v % 12 ];

        }

    },

    simplex2( xin, yin ) {

        let n0;
        let n1;
        let n2;

        const s = ( xin + yin ) * F2;
        let i = Math.floor( xin + s );
        let j = Math.floor( yin + s );
        const t = ( i + j ) * G2;
        const x0 = xin - i + t;
        const y0 = yin - j + t;

        let i1;
        let j1;
        if ( x0 > y0 ) {

            i1 = 1; j1 = 0;

        } else {

            i1 = 0; j1 = 1;

        }

        const x1 = x0 - i1 + G2;
        const y1 = y0 - j1 + G2;
        const x2 = x0 - 1 + 2 * G2;
        const y2 = y0 - 1 + 2 * G2;

        i &= 255;
        j &= 255;
        const gi0 = gradP[ i + perm[ j ] ];
        const gi1 = gradP[ i + i1 + perm[ j + j1 ] ];
        const gi2 = gradP[ i + 1 + perm[ j + 1 ] ];

        let t0 = 0.5 - x0 * x0 - y0 * y0;
        if ( t0 < 0 )
            n0 = 0;
        else {

            t0 *= t0;
            n0 = t0 * t0 * gi0.dot2( x0, y0 );

        }
        let t1 = 0.5 - x1 * x1 - y1 * y1;
        if ( t1 < 0 )
            n1 = 0;
        else {

            t1 *= t1;
            n1 = t1 * t1 * gi1.dot2( x1, y1 );

        }

        let t2 = 0.5 - x2 * x2 - y2 * y2;
        if ( t2 < 0 )
            n2 = 0;
        else {

            t2 *= t2;
            n2 = t2 * t2 * gi2.dot2( x2, y2 );

        }

        return 70 * ( n0 + n1 + n2 );

    },

    simplex3( xin, yin, zin ) {

        let n0;
        let n1;
        let n2;
        let n3;

        const s = ( xin + yin + zin ) * F3;
        let i = Math.floor( xin + s );
        let j = Math.floor( yin + s );
        let k = Math.floor( zin + s );

        const t = ( i + j + k ) * G3;
        const x0 = xin - i + t;
        const y0 = yin - j + t;
        const z0 = zin - k + t;

        let i1;
        let j1;
        let k1;
        let i2;
        let j2;
        let k2;
        if ( x0 >= y0 )
            if ( y0 >= z0 ) {

                i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 1; k2 = 0;

            } else if ( x0 >= z0 ) {

                i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 0; k2 = 1;

            } else {

                i1 = 0; j1 = 0; k1 = 1; i2 = 1; j2 = 0; k2 = 1;

            }
        else if ( y0 < z0 ) {

            i1 = 0; j1 = 0; k1 = 1; i2 = 0; j2 = 1; k2 = 1;

        } else if ( x0 < z0 ) {

            i1 = 0; j1 = 1; k1 = 0; i2 = 0; j2 = 1; k2 = 1;

        } else {

            i1 = 0; j1 = 1; k1 = 0; i2 = 1; j2 = 1; k2 = 0;

        }

        const x1 = x0 - i1 + G3;
        const y1 = y0 - j1 + G3;
        const z1 = z0 - k1 + G3;

        const x2 = x0 - i2 + 2 * G3;
        const y2 = y0 - j2 + 2 * G3;
        const z2 = z0 - k2 + 2 * G3;

        const x3 = x0 - 1 + 3 * G3;
        const y3 = y0 - 1 + 3 * G3;
        const z3 = z0 - 1 + 3 * G3;

        i &= 255;
        j &= 255;
        k &= 255;
        const gi0 = gradP[ i + perm[ j + perm[ k ] ] ];
        const gi1 = gradP[ i + i1 + perm[ j + j1 + perm[ k + k1 ] ] ];
        const gi2 = gradP[ i + i2 + perm[ j + j2 + perm[ k + k2 ] ] ];
        const gi3 = gradP[ i + 1 + perm[ j + 1 + perm[ k + 1 ] ] ];

        let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
        if ( t0 < 0 )
            n0 = 0;
        else {

            t0 *= t0;
            n0 = t0 * t0 * gi0.dot3( x0, y0, z0 );

        }
        let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
        if ( t1 < 0 )
            n1 = 0;
        else {

            t1 *= t1;
            n1 = t1 * t1 * gi1.dot3( x1, y1, z1 );

        }
        let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
        if ( t2 < 0 )
            n2 = 0;
        else {

            t2 *= t2;
            n2 = t2 * t2 * gi2.dot3( x2, y2, z2 );

        }
        let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
        if ( t3 < 0 )
            n3 = 0;
        else {

            t3 *= t3;
            n3 = t3 * t3 * gi3.dot3( x3, y3, z3 );

        }

        return 32 * ( n0 + n1 + n2 + n3 );

    },

    perlin2( x, y ) {

        let X = Math.floor( x );
        let Y = Math.floor( y );

        x -= X; y -= Y;
        X &= 255; Y &= 255;

        const n00 = gradP[ X + perm[ Y ] ].dot2( x, y );
        const n01 = gradP[ X + perm[ Y + 1 ] ].dot2( x, y - 1 );
        const n10 = gradP[ X + 1 + perm[ Y ] ].dot2( x - 1, y );
        const n11 = gradP[ X + 1 + perm[ Y + 1 ] ].dot2( x - 1, y - 1 );

        const u = fade( x );

        return lerp(
            lerp( n00, n10, u ),
            lerp( n01, n11, u ),
            fade( y ),
        );

    },

    perlin3( x, y, z ) {

        let X = Math.floor( x );
        let Y = Math.floor( y );
        let Z = Math.floor( z );

        x -= X; y -= Y; z -= Z;

        X &= 255; Y &= 255; Z &= 255;

        const n000 = gradP[ X + perm[ Y + perm[ Z ] ] ].dot3( x, y, z );
        const n001 = gradP[ X + perm[ Y + perm[ Z + 1 ] ] ].dot3( x, y, z - 1 );
        const n010 = gradP[ X + perm[ Y + 1 + perm[ Z ] ] ].dot3( x, y - 1, z );
        const n011 = gradP[ X + perm[ Y + 1 + perm[ Z + 1 ] ] ].dot3( x, y - 1, z - 1 );
        const n100 = gradP[ X + 1 + perm[ Y + perm[ Z ] ] ].dot3( x - 1, y, z );
        const n101 = gradP[ X + 1 + perm[ Y + perm[ Z + 1 ] ] ].dot3( x - 1, y, z - 1 );
        const n110 = gradP[ X + 1 + perm[ Y + 1 + perm[ Z ] ] ].dot3( x - 1, y - 1, z );
        const n111 = gradP[ X + 1 + perm[ Y + 1 + perm[ Z + 1 ] ] ].dot3( x - 1, y - 1, z - 1 );

        const u = fade( x );
        const v = fade( y );
        const w = fade( z );

        return lerp(
            lerp(
                lerp( n000, n100, u ),
                lerp( n001, n101, u ), w,
            ),
            lerp(
                lerp( n010, n110, u ),
                lerp( n011, n111, u ), w,
            ),
            v,
        );

    },

} );

Perlin.seed( 0 );

function generateNormals( vertices, rowCount, colCount, yin ) {

    let x;
    let y;
    let p;
    let pos;
    const xMax = colCount - 1;
    const yMax = rowCount - 1;
    let nx;
    let ny;
    let nz;
    let nl;
    let hl;
    let hr;
    let ht;
    let hb;
    const normals = [];

    const vtxCount = rowCount * colCount;
    for ( let i = 0; i < vtxCount; i ++ ) {

        y = Math.floor( i / colCount );
        x = i % colCount;
        pos = y * 3 * colCount + x * 3;

        if ( x > 0 ) {

            p = y * 3 * colCount + ( x - 1 ) * 3;
            hl = vertices[ p + 1 ];

        } else
            hl = vertices[ pos + 1 ];

        if ( x < xMax ) {

            p = y * 3 * colCount + ( x + 1 ) * 3;
            hr = vertices[ p + 1 ];

        } else
            hr = vertices[ pos + 1 ];

        if ( y > 0 ) {

            p = ( y - 1 ) * 3 * colCount + x * 3;
            ht = vertices[ p + 1 ];

        } else
            ht = vertices[ pos + 1 ];

        if ( y < yMax ) {

            p = ( y + 1 ) * 3 * colCount + x * 3;
            hb = vertices[ p + 1 ];

        } else
            hb = vertices[ pos + 1 ];

        nx = hl - hr;
        ny = yin;
        nz = hb - ht;
        nl = Math.sqrt( nx * nx + ny * ny + nz * nz );
        normals.push( nx / nl, ny / nl, nz / nl );

    }

    return normals;

}

const Terrain = {};

Object.assign( Terrain, {

    createModel( name, width, height, rowCount, colCount, options ) {

        const model = new Model( Terrain.createMesh( name, width, height, rowCount, colCount, options ) );
        return Object.assign( model, {

            setTime( gl, time ) {

                Terrain.setTime( gl, this.mesh, time );
                return this;

            },
            addTime( gl, timeSpan ) {

                Terrain.addTime( gl, this.mesh, timeSpan );
                return this;

            },

        } );

    },

    createMesh( name, width = 2, height = 2, rowCount = 6, colCount = 6, options ) {

        const minHeight = ( options && options.minHeight ) || 0;
        const maxHeight = ( options && options.maxHeight ) || 1;
        const baseHeight = ( options && options.baseHeight ) || 0;
        const perlinFreq = ( options && options.perlinFreq ) || 10;
        const time = ( options && options.time ) || Math.random();

        const rowStart = height / - 2;
        const colStart = width / - 2;
        const vtxCount = rowCount * colCount;
        const idxCount = ( rowCount - 1 ) * colCount;
        const rowStrid = height / ( rowCount - 1 );
        const colStrid = width / ( colCount - 1 );
        let currentRow = 0;
        let currentCol = 0;
        const vertices = [];
        const indices = [];
        const uv = [];
        const uvXStrid = 1 / ( colCount - 1 );
        const uvYStrid = 1 / ( rowCount - 1 );
        let h;

        for ( let i = 0; i < vtxCount; i ++ ) {

            currentRow = Math.floor( i / colCount );
            currentCol = i % colCount;
            h = baseHeight + PMath.map( Perlin.perlin3( currentRow / perlinFreq, currentCol / perlinFreq, time / perlinFreq ), 0, 1, minHeight, maxHeight );

            vertices.push( colStart + currentCol * colStrid, h, rowStart + currentRow * rowStrid );

            uv.push( ( currentCol === colCount - 1 ) ? 0.9999 : currentCol * uvXStrid, ( currentRow === rowCount - 1 ) ? 0.9999 : currentRow * uvYStrid );

            if ( i < idxCount ) { // TRIANGLE_STRIP

                indices.push( currentRow * colCount + currentCol, ( currentRow + 1 ) * colCount + currentCol );

                if ( currentCol === colCount - 1 && i < idxCount - 1 )
                    indices.push( ( currentRow + 1 ) * colCount + currentCol, ( currentRow + 1 ) * colCount );

            }

        }

        const normals = generateNormals( vertices, rowCount, colCount, maxHeight - minHeight );

        const attribArrays = {
            indices: { data: indices },
        };
        attribArrays[ ATTRIB_POSITION_NAME ] = { data: vertices, drawType: DYNAMIC_DRAW };
        attribArrays[ ATTRIB_UV_NAME ] = { data: uv };
        attribArrays[ ATTRIB_NORMAL_NAME ] = { data: normals };
        const mesh = new Mesh( name || 'Terrain', attribArrays, { drawMode: TRIANGLE_STRIP } );
        return Object.assign( mesh, {
            time,
            minHeight,
            maxHeight,
            baseHeight,
            perlinFreq,
            rowCount,
            colCount,
        } );

    },

    setTime( gl, mesh, newTime ) {

        let vertices = mesh.attribArrays[ ATTRIB_POSITION_NAME ].data;
        const length = vertices.length / 3;
        const {
            minHeight,
            maxHeight,
            baseHeight,
            perlinFreq,
            rowCount,
            colCount,
        } = mesh;
        let currentRow;
        let currentCol;

        for ( let i = 0; i < length; i ++ ) {

            currentRow = Math.floor( i / colCount );
            currentCol = i % colCount;
            vertices[ i * 3 + 1 ] = baseHeight + PMath.map( Perlin.perlin3( currentRow / perlinFreq, currentCol / perlinFreq, newTime / perlinFreq ), 0, 1, minHeight, maxHeight );

        }

        vertices = getTypedArray( vertices );

        let normals = generateNormals( vertices, rowCount, colCount, maxHeight - minHeight );
        normals = getTypedArray( normals );

        mesh.time = newTime; // eslint-disable-line
        mesh.attribArrays[ ATTRIB_NORMAL_NAME ].data = normals; // eslint-disable-line
        mesh.attribArrays[ ATTRIB_POSITION_NAME ].data = vertices; // eslint-disable-line

        const bufferInfo = mesh.bufferInfo;
        if ( bufferInfo ) {

            const vtxBuffer = bufferInfo.attribs[ ATTRIB_POSITION_NAME ].buffer;
            setTypedArrayToBuffer( gl, vtxBuffer, vertices );

            const normBuffer = bufferInfo.attribs[ ATTRIB_NORMAL_NAME ].buffer;
            setTypedArrayToBuffer( gl, normBuffer, normals );

        }

        return mesh;

    },

    addTime( gl, mesh, timeSpan ) {

        return Terrain.setTime( gl, mesh, mesh.time + timeSpan );

    },

} );

const UNSIGNED_BYTE$2 = 0x1401;

/* PixelFormat */
const DEPTH_COMPONENT$1 = 0x1902;
const RGBA$1 = 0x1908;

/* Framebuffer Object. */
const RGBA4$1 = 0x8056;
const RGB5_A1$1 = 0x8057;
const RGB565$1 = 0x8D62;
const DEPTH_COMPONENT16$1 = 0x81A5;
const STENCIL_INDEX = 0x1901;
const STENCIL_INDEX8 = 0x8D48;
const DEPTH_STENCIL$1 = 0x84F9;
const DEPTH_ATTACHMENT = 0x8D00;
const STENCIL_ATTACHMENT = 0x8D20;
const DEPTH_STENCIL_ATTACHMENT = 0x821A;

/* TextureWrapMode */
const CLAMP_TO_EDGE$1 = 0x812F;

/* TextureMagFilter */
const LINEAR$1 = 0x2601;

const defaultAttachment = [
    {
        format: RGBA$1, type: UNSIGNED_BYTE$2, min: LINEAR$1, wrap: CLAMP_TO_EDGE$1,
    },
    { format: DEPTH_STENCIL$1 },
];

const attachmentsByFormat = {};
attachmentsByFormat[ DEPTH_STENCIL$1 ] = DEPTH_STENCIL_ATTACHMENT;
attachmentsByFormat[ STENCIL_INDEX ] = STENCIL_ATTACHMENT;
attachmentsByFormat[ STENCIL_INDEX8 ] = STENCIL_ATTACHMENT;
attachmentsByFormat[ DEPTH_COMPONENT$1 ] = DEPTH_ATTACHMENT;
attachmentsByFormat[ DEPTH_COMPONENT16$1 ] = DEPTH_ATTACHMENT;

function getAttachmentPointForFormat( format ) {

    return attachmentsByFormat[ format ];

}

const renderbufferFormats = {};
renderbufferFormats[ RGBA4$1 ] = true;
renderbufferFormats[ RGB5_A1$1 ] = true;
renderbufferFormats[ RGB565$1 ] = true;
renderbufferFormats[ DEPTH_STENCIL$1 ] = true;
renderbufferFormats[ DEPTH_COMPONENT16$1 ] = true;
renderbufferFormats[ STENCIL_INDEX ] = true;
renderbufferFormats[ STENCIL_INDEX8 ] = true;

function isRenderbufferFormat( format ) {

    return renderbufferFormats[ format ];

}

let glRenderbuffer;
function isRenderbuffer( gl, t ) {

    if ( ! glRenderbuffer )
        glRenderbuffer = gl.createRenderbuffer();

    return t instanceof glRenderbuffer.constructor;

}

let glTexture;
function isTexture( gl, t ) {

    if ( ! glTexture )
        glTexture = gl.createTexture();

    return t instanceof glTexture.constructor;

}

function createFramebufferInfo( gl, attachments = defaultAttachment, width = gl.drawingBufferWidth, height = gl.drawingBufferHeight ) {

    const target = gl.FRAMEBUFFER;
    const fb = gl.createFramebuffer();
    gl.bindFramebuffer( target, fb );

    let colorAttachmentCount = 0;
    const framebufferInfo = {
        framebuffer: fb,
        attachments: [],
        width,
        height,
    };

    attachments.forEach( ( attachmentOptions ) => {

        let attachment = attachmentOptions.attachment;
        const format = attachmentOptions.format;
        let attachmentPoint = getAttachmentPointForFormat( format );
        if ( ! attachmentPoint )
            attachmentPoint = gl.COLOR_ATTACHMENT0 + colorAttachmentCount ++;

        if ( ! attachment )
            if ( isRenderbufferFormat( format ) ) {

                attachment = gl.createRenderbuffer();
                gl.bindRenderbuffer( gl.RENDERBUFFER, attachment );
                gl.renderbufferStorage( gl.RENDERBUFFER, format, width, height );
                gl.bindRenderbuffer( gl.RENDERBUFFER, null );

            } else {

                const textureOptions = Object.assign( {}, attachmentOptions, { width, height } );

                if ( textureOptions.auto === undefined ) {

                    textureOptions.auto = false;
                    textureOptions.min = textureOptions.min || textureOptions.minMag || gl.LINEAR;
                    textureOptions.mag = textureOptions.mag || textureOptions.minMag || gl.LINEAR;
                    textureOptions.wrapS = textureOptions.wrapS || textureOptions.wrap || gl.CLAMP_TO_EDGE;
                    textureOptions.wrapT = textureOptions.wrapT || textureOptions.wrap || gl.CLAMP_TO_EDGE;

                }
                attachment = createTexture( gl, textureOptions );

            }

        if ( isRenderbuffer( gl, attachment ) )
            gl.framebufferRenderbuffer( target, attachmentPoint, gl.RENDERBUFFER, attachment );
        else if ( isTexture( gl, attachment ) )
            gl.framebufferTexture2D(
                target,
                attachmentPoint,
                attachmentOptions.texTarget || gl.TEXTURE_2D,
                attachment,
                attachmentOptions.level || 0,
            );
        else
            throw new Error( 'unkonwn attachment type for framebuffer' );

        framebufferInfo.attachments.push( attachment );

    } );

    if ( colorAttachmentCount > 1 ) {

        const colorBuffers = [];
        for ( let i = 0; i < colorAttachmentCount; i ++ )
            colorBuffers.push( gl.COLOR_ATTACHMENT0 + i );
        gl.drawBuffers( colorBuffers );

    }


    switch ( gl.checkFramebufferStatus( gl.FRAMEBUFFER ) ) {

    case gl.FRAMEBUFFER_COMPLETE: break;
    case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT: console.log( 'FRAMEBUFFER_INCOMPLETE_ATTACHMENT' ); break;
    case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: console.log( 'FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT' ); break;
    case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS: console.log( 'FRAMEBUFFER_INCOMPLETE_DIMENSIONS' ); break;
    case gl.FRAMEBUFFER_UNSUPPORTED: console.log( 'FRAMEBUFFER_UNSUPPORTED' ); break;
    case gl.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: console.log( 'FRAMEBUFFER_INCOMPLETE_MULTISAMPLE' ); break;
    case gl.RENDERBUFFER_SAMPLES: console.log( 'RENDERBUFFER_SAMPLES' ); break;
    default: break;

    }

    gl.bindFramebuffer( gl.FRAMEBUFFER, null );

    return framebufferInfo;

}

function bindFramebufferInfo( gl, framebufferInfo ) {

    const target = gl.FRAMEBUFFER;
    if ( framebufferInfo ) {

        gl.bindFramebuffer( target, framebufferInfo.framebuffer );
        gl.viewport( 0, 0, framebufferInfo.width, framebufferInfo.height );

    } else {

        gl.bindFramebuffer( target, null );
        gl.viewport( 0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight );

    }

}

function readPixcelFromFrameBufferInfo( gl, framebufferInfo, x, y, index = 0 ) {

    const pix = new Uint8Array( 4 );
    gl.bindFramebuffer( gl.FRAMEBUFFER, framebufferInfo.framebuffer || framebufferInfo );
    gl.readBuffer( gl.COLOR_ATTACHMENT0 + index );
    gl.readPixels( x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pix );
    gl.bindFramebuffer( gl.FRAMEBUFFER, null );

    return pix;

}

function resizeFramebufferInfo( gl, framebufferInfo, attachments = defaultAttachment, width = gl.drawingBufferWidth, height = gl.drawingBufferHeight ) {

    framebufferInfo.width = width; // eslint-disable-line
    framebufferInfo.height = height; // eslint-disable-line

    attachments.forEach( ( attachmentOpts, idx ) => {

        const attachment = framebufferInfo.attachments[ idx ];
        const format = attachmentOpts.format;
        if ( isRenderbuffer( gl, attachment ) ) {

            gl.bindRenderbuffer( gl.RENDERBUFFER, attachment );
            gl.renderbufferStorage( gl.RENDERBUFFER, format, width, height );

        } else if ( isTexture( gl, attachment ) )
            resizeTexture( gl, attachment, attachmentOpts, width, height );
        else
            throw new Error( 'unknown attachment type -- fun resizeFramebufferInfo()' );

    } );

}

function id2Color( id ) {

    if ( id >= 0xffffff ) {

        id = 0; // eslint-disable-line
        console.warn( `Color picker models length bigger than max length ${0xffffff - 1}` );

    }

    const a = new Float32Array( 3 );
    a[ 0 ] = ( id & 0xff ) / 255.0;
    a[ 1 ] = ( ( id & 0xff00 ) >> 8 ) / 255.0;
    a[ 2 ] = ( ( id & 0xff0000 ) >> 16 ) / 255.0;
    return a;

}

function color2Id( colorArray ) {

    return colorArray[ 0 ] | ( colorArray[ 1 ] << 8 ) | ( colorArray[ 2 ] << 16 );

}

function FramebufferPicker( gl, camera, controler ) {

    this.gl = gl;
    this.canvas = gl.canvas;
    this.controler = controler;
    this.shader = new ColorpickShader( gl, camera );
    this.models = [];
    this.blankColor = this.id2Color( this.blankId );
    this.framebufferInfo = createFramebufferInfo( gl );
    this.flag = 0;

    this.isActive = false;
    this.updateCanvasParam();

    this.eventListeners = { type: 'mouseleftclick', listener: this.onmouseclick.bind( this ) };

    this.controler.addListeners( this.eventListeners );

}

Object.assign( FramebufferPicker.prototype, {

    blankId: 0,

    maxId: 0xffffff,

    id2Color,

    color2Id,

    addModels( ...models ) {

        if ( this.models.length >= this.maxId - 1 )
            throw new Error( `Color picker models length bigger than max length ${this.maxId - 1}` );

        for ( let i = 0; i < models.length; i ++ )
            if ( Array.isArray( models[ i ] ) )
                this.addModels( ...models[ i ] );
            else
                this.models.push( models[ i ] );

        return this;

    },

    removeModels( ...models ) {

        let index = - 1;

        for ( let i = 0; i < models.length; i ++ )
            if ( Array.isArray( models[ i ] ) )
                this.removeModels( ...models[ i ] );
            else {

                index = this.models.indexOf( models[ i ] );
                if ( index > - 1 )
                    this.models.splice( index, 1 );

            }

        return this;

    },

    clear() {

        bindFramebufferInfo( this.gl, this.framebufferInfo );
        clear( this.gl );
        bindFramebufferInfo( this.gl, null );

        return this;

    },

    render() {

        bindFramebufferInfo( this.gl, this.framebufferInfo );
        this.shader.updateCamera();
        this.models.forEach( ( model, index ) => {

            this.shader.setColor( this.id2Color( index + 1 ) ).renderModel( model );

        } );
        bindFramebufferInfo( this.gl, null );

        return this;

    },

    pick( x, y ) {

        const p = readPixcelFromFrameBufferInfo( this.gl, this.framebufferInfo, x, this.gl.canvas.clientHeight - y );
        const id = this.color2Id( p );
        console.log( x, y, p, id, this.models[ id - 1 ] );

    },

    updateCanvasParam() {

        const box = this.canvas.getBoundingClientRect();
        this.offsetX = box.left;
        this.offsetY = box.top;
        this.lastCanvasWidth = this.canvas.clientWidth;
        this.lastCanvasHeight = this.canvas.clientWidth;
        return this;

    },

    onmouseclick( e ) {

        if ( this.isActive ) {

            const x = e.pageX - this.offsetX;
            const y = e.pageY - this.offsetY;
            this.needPick = true;
            this.pickx = x;
            this.picky = y;

        }

    },

    dispose() {

        this.controler.removeListeners( this.eventListeners );
        return this;

    },

    update() {

        if ( this.needPick ) {

            if ( this.canvas.clientWidth !== this.lastCanvasWidth || this.canvas.clientHeight !== this.lastCanvasHeight ) {

                this.resizeFramebufferInfo( this.canvas.clientWidth, this.canvas.clientHeight );
                this.updateCanvasParam();

            }
            this.clear().render();
            this.pick( this.pickx, this.picky );
            this.needPick = false;

        }

        return this;

    },

    activate() {

        this.isActive = true;
        this.updateCanvasParam();
        return this;

    },

    deactivate() {

        this.isActive = false;
        return this;

    },

    resizeFramebufferInfo( width, height ) {

        resizeFramebufferInfo( this.gl, this.framebufferInfo, undefined, width, height );
        return this;

    },

} );

var vs$12 = "#version 300 es\n#define GLSLIFY 1\nin vec3 a_position;\nin vec2 a_uv;\n\nout highp vec2 v_uv;\n\nvoid main() {\n    v_uv = a_uv;\n    gl_Position = vec4(a_position, 1.0);\n}\n"; // eslint-disable-line

var fs$12 = "#version 300 es\nprecision mediump float;\n#define GLSLIFY 1\n\nin highp vec2 v_uv;\n\n#ifdef FXAA\n/**\nBasic FXAA implementation based on the code on geeks3d.com with the\nmodification that the texture2D2DLod stuff was removed since it's\nunsupported by WebGL.\n--\nFrom:\nhttps://github.com/mitsuhiko/webgl-meincraft\nCopyright (c) 2011 by Armin Ronacher.\nSome rights reserved.\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions are\nmet:\n    * Redistributions of source code must retain the above copyright\n      notice, this list of conditions and the following disclaimer.\n    * Redistributions in binary form must reproduce the above\n      copyright notice, this list of conditions and the following\n      disclaimer in the documentation and/or other materials provided\n      with the distribution.\n    * The names of the contributors may not be used to endorse or\n      promote products derived from this software without specific\n      prior written permission.\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n\"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\nLIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\nA PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\nOWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\nSPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\nLIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\nDATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\nTHEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\nOF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n*/\n\n#ifndef FXAA_REDUCE_MIN\n    #define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n    #define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n    #define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture2D2D reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n            vec2 v_rgbNW, vec2 v_rgbNE,\n            vec2 v_rgbSW, vec2 v_rgbSE,\n            vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture(tex, v_rgbSE).xyz;\n    vec4 texColor = texture(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n        texture(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n        texture(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n\t\t\tout vec2 v_rgbNW, out vec2 v_rgbNE,\n\t\t\tout vec2 v_rgbSW, out vec2 v_rgbSE,\n\t\t\tout vec2 v_rgbM) {\n\tvec2 inverseVP = 1.0 / resolution.xy;\n\tv_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n\tv_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n\tv_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n\tv_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n\tv_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvec4 apply(sampler2D tex, vec2 fragCoord, vec2 resolution) {\n\tmediump vec2 v_rgbNW;\n\tmediump vec2 v_rgbNE;\n\tmediump vec2 v_rgbSW;\n\tmediump vec2 v_rgbSE;\n\tmediump vec2 v_rgbM;\n\n\t//compute the texture2D2D coords\n\ttexcoords(fragCoord, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n\t//compute FXAA\n\treturn fxaa(tex, fragCoord, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n\nuniform vec2 u_resolution;\n#endif\n\nuniform sampler2D u_texture;\nuniform bool u_flipy;\n\nlayout(location = 0) out vec4 finalColor;\n\nvoid main() {\n    vec2 uv = vec2(v_uv.s, u_flipy ? (1.0 - v_uv.t) : v_uv.t );\n    \n    #ifdef FXAA\n        vec2 fragCoord = uv * u_resolution;\n        finalColor = apply(u_texture, fragCoord, u_resolution);\n    #else\n        finalColor = texture(u_texture, uv);\n    #endif\n}\n"; // eslint-disable-line

function ScreenQuadShader( gl ) {

    Shader.call( this, gl, ScreenQuadShader.vs, ScreenQuadShader.fs );

    this.setFlipy( true );

    this.deactivate();

}

ScreenQuadShader.prototype = Object.assign( Object.create( Shader.prototype ), {

    constructor: ScreenQuadShader,

    setFlipy( flip ) {

        this.setUniformObj( { u_flipy: !! flip } );

    },

} );

Object.assign( ScreenQuadShader, {

    vs: vs$12,
    fs: fs$12,

} );

function BufferPicker( gl, models, framebufferInfo, controler, bufferIdx = 1 ) {

    this.gl = gl;
    this.canvas = gl.canvas;
    this.models = models;
    this.bufferIdx = bufferIdx;
    this.framebufferInfo = framebufferInfo;
    this.controler = controler;
    this.eventListeners = { type: 'mouseleftclick', listener: this.onmouseclick.bind( this ) };
    this.controler.addListeners( this.eventListeners );

    this.isActive = false;
    this.updateCanvasParam();

}

Object.assign( BufferPicker.prototype, {

    blankColor: id2Color( 0 ),

    id2Color,

    color2Id,

    pick( x, y ) {

        const ratio = this.framebufferInfo.width / this.canvas.clientWidth;
        const p = readPixcelFromFrameBufferInfo( this.gl, this.framebufferInfo, x * ratio, this.gl.canvas.height - y * ratio, this.bufferIdx );
        const id = this.color2Id( p );
        console.log( x, y, p, id, this.models[ id - 1 ] );

    },

    updateCanvasParam() {

        const box = this.canvas.getBoundingClientRect();
        this.offsetX = box.left;
        this.offsetY = box.top;
        this.lastCanvasWidth = this.canvas.width;
        this.lastCanvasHeight = this.canvas.height;
        return this;

    },

    dispose() {

        this.controler.removeListeners( this.eventListeners );
        return this;

    },

    setActivate( activate ) {

        if ( activate ) {

            this.isActive = true;
            this.updateCanvasParam();

        } else
            this.isActive = false;

        return this;

    },

    onmouseclick( e ) {

        if ( this.isActive ) {

            if ( this.canvas.width !== this.lastCanvasWidth || this.canvas.height !== this.lastCanvasHeight )
                this.updateCanvasParam();

            const x = e.pageX - this.offsetX;
            const y = e.pageY - this.offsetY;
            this.pick( x, y );

        }

    },

} );

function addFunction( func ) {

    if ( typeof func === 'function' )
        this.push( func );
    else
        console.warn( `listenerOptions.listener( ${func} ) is not a function.` );

}

function removeFunction( func ) {

    const idx = this.indexOf( func );
    if ( idx > - 1 )
        this.splice( idx, 1 );

}

function addFunctionsToArrays( array ) {

    array.forEach( ary => Object.assign( ary, {
        addFunction: addFunction.bind( ary ),
        removeFunction: removeFunction.bind( ary ),
    } ) );

}

const BUTTONS = { LEFT: 0, MIDDLE: 1, RIGHT: 2 };

function createEventListener( funcs, bindpoint ) {

    const functions = funcs;
    return function ( e ) {

        if ( this.enable === false ) return;

        functions.forEach( ( listener ) => {

            listener( e );

        } );

    }.bind( bindpoint );

}

function Controler( element ) {

    this.element = element;

    this.enable = true;

    this.mouseDownListeners = [];
    this.mouseMoveListeners = [];
    this.mouseUpListeners = [];

    this.mouseWheelListeners = [];

    this.keydownListeners = [];
    this.keyupListeners = [];

    this.touchStartListeners = [];
    this.touchMoveListeners = [];
    this.touchEndListeners = [];

    this.mouseClickListeners = [];
    this.mouseLeftClickListeners = [];
    this.mouseMiddleClickListeners = [];
    this.mouseRightClickListeners = [];

    addFunctionsToArrays( [

        this.mouseDownListeners,
        this.mouseMoveListeners,
        this.mouseUpListeners,

        this.mouseWheelListeners,

        this.keydownListeners,
        this.keyupListeners,

        this.touchStartListeners,
        this.touchMoveListeners,
        this.touchEndListeners,

        this.mouseClickListeners,
        this.mouseLeftClickListeners,
        this.mouseMiddleClickListeners,
        this.mouseRightClickListeners,

    ] );

    this.oncontext = function ( e ) {

        if ( this.enable === false ) return;
        e.preventDefault();

    }.bind( this );

    this.element.addEventListener( 'contextmenu', this.oncontext, false );

    this.onmousedown = createEventListener( this.mouseDownListeners, this );
    this.element.addEventListener( 'mousedown', this.onmousedown, false );
    this.onmousemove = createEventListener( this.mouseMoveListeners, this );
    document.addEventListener( 'mousemove', this.onmousemove, false );
    this.onmouseup = createEventListener( this.mouseUpListeners, this );
    document.addEventListener( 'mouseup', this.onmouseup, false );

    this.onwheel = createEventListener( this.mouseWheelListeners, this );
    this.element.addEventListener( 'wheel', this.onwheel, false );

    this.onkeydown = createEventListener( this.keydownListeners, this );
    window.addEventListener( 'keydown', this.onkeydown, false );
    this.onkeyup = createEventListener( this.keyupListeners, this );
    window.addEventListener( 'keyup', this.onkeyup, false );

    this.ontouchstart = createEventListener( this.touchStartListeners, this );
    this.element.addEventListener( 'touchstart', this.ontouchstart, false );
    this.ontouchmove = createEventListener( this.touchMoveListeners, this );
    this.element.addEventListener( 'touchmove', this.ontouchmove, false );
    this.ontouchend = createEventListener( this.touchEndListeners, this );
    this.element.addEventListener( 'touchend', this.ontouchend, false );

    this.onmouseclick = createEventListener( this.mouseClickListeners, this );
    this.onmouseleftclick = createEventListener( this.mouseLeftClickListeners, this );
    this.onmousemiddleclick = createEventListener( this.mouseMiddleClickListeners, this );
    this.onmouserightclick = createEventListener( this.mouseRightClickListeners, this );

    this._flag = 0;
    const self = this;
    this.addListeners( [
        {
            type: 'mousedown',
            listener() {

                self._flag = 0;

            },
        },
        {
            type: 'mousemove',
            listener() {

                self._flag = 1;

            },
        },
        {
            type: 'mouseup',
            listener( e ) {

                if ( self.enable === false ) return;
                if ( self._flag === 0 ) {

                    self.onmouseclick( e );
                    switch ( e.button ) {

                    case BUTTONS.LEFT:
                        self.onmouseleftclick( e );
                        break;

                    case BUTTONS.MIDDLE:
                        self.onmousemiddleclick( e );
                        break;

                    case BUTTONS.RIGHT:
                        self.onmouserightclick( e );
                        break;

                    default:
                        break;

                    }

                }

            },
        },
    ] );

}

Object.assign( Controler.prototype, {

    addListeners( ...listenersOpts ) {

        for ( let i = 0; i < listenersOpts.length; i ++ )
            if ( Array.isArray( listenersOpts[ i ] ) )
                this.addListeners( ...listenersOpts[ i ] );
            else {

                const listenerOptions = listenersOpts[ i ];
                switch ( listenerOptions.type ) {

                case 'mousedown':
                    this.mouseDownListeners.addFunction( listenerOptions.listener );
                    break;

                case 'mousemove':
                    this.mouseMoveListeners.addFunction( listenerOptions.listener );
                    break;

                case 'mouseup':
                    this.mouseUpListeners.addFunction( listenerOptions.listener );
                    break;

                case 'wheel':
                    this.mouseWheelListeners.addFunction( listenerOptions.listener );
                    break;

                case 'keydown':
                    this.keydownListeners.addFunction( listenerOptions.listener );
                    break;

                case 'keyup':
                    this.keyupListeners.addFunction( listenerOptions.listener );
                    break;

                case 'touchstart':
                    this.touchStartListeners.addFunction( listenerOptions.listener );
                    break;

                case 'touchend':
                    this.touchEndListeners.addFunction( listenerOptions.listener );
                    break;

                case 'touchmove':
                    this.touchMoveListeners.addFunction( listenerOptions.listener );
                    break;

                case 'mouseclick':
                    this.mouseClickListeners.addFunction( listenerOptions.listener );
                    break;

                case 'mouseleftclick':
                    this.mouseLeftClickListeners.addFunction( listenerOptions.listener );
                    break;

                case 'mousemiddleclick':
                    this.mouseMiddleClickListeners.addFunction( listenerOptions.listener );
                    break;

                case 'mouserightclick':
                    this.mouseRightClickListeners.addFunction( listenerOptions.listener );
                    break;

                default:
                    break;

                }

            }

        return this;

    },

    removeListeners( ...listenersOpts ) {

        for ( let i = 0; i < listenersOpts.length; i ++ )
            if ( Array.isArray( listenersOpts[ i ] ) )
                this.removeListeners( ...listenersOpts[ i ] );
            else {

                const listenerOptions = listenersOpts[ i ];
                switch ( listenerOptions.type ) {

                case 'mousedown':
                    this.mouseDownListeners.removeFunction( listenerOptions.listener );
                    break;

                case 'mousemove':
                    this.mouseMoveListeners.removeFunction( listenerOptions.listener );
                    break;

                case 'mouseup':
                    this.mouseUpListeners.removeFunction( listenerOptions.listener );
                    break;

                case 'wheel':
                    this.mouseWheelListeners.removeFunction( listenerOptions.listener );
                    break;

                case 'keydown':
                    this.keydownListeners.removeFunction( listenerOptions.listener );
                    break;

                case 'keyup':
                    this.keyupListeners.removeFunction( listenerOptions.listener );
                    break;

                case 'touchstart':
                    this.touchStartListeners.removeFunction( listenerOptions.listener );
                    break;

                case 'touchend':
                    this.touchEndListeners.removeFunction( listenerOptions.listener );
                    break;

                case 'touchmove':
                    this.touchMoveListeners.removeFunction( listenerOptions.listener );
                    break;

                case 'mouseclick':
                    this.mouseClickListeners.removeFunction( listenerOptions.listener );
                    break;

                case 'mouseleftclick':
                    this.mouseLeftClickListeners.removeFunction( listenerOptions.listener );
                    break;

                case 'mousemiddleclick':
                    this.mouseMiddleClickListeners.removeFunction( listenerOptions.listener );
                    break;

                case 'mouserightclick':
                    this.mouseRightClickListeners.removeFunction( listenerOptions.listener );
                    break;

                default:
                    break;

                }

            }

        return this;

    },

    dispose() {

        this.element.removeEventListener( 'contextmenu', this.oncontext, false );

        this.element.removeEventListener( 'mousedown', this.onmousedown, false );
        this.element.removeEventListener( 'mousemove', this.onmousemove, false );
        this.element.removeEventListener( 'mouseup', this.onmouseup, false );

        this.element.removeEventListener( 'wheel', this.onwheel, false );

        this.element.removeEventListener( 'keydown', this.onkeydown, false );
        this.element.removeEventListener( 'keyup', this.onkeyup, false );

        this.element.removeEventListener( 'touchstart', this.ontouchstart, false );
        this.element.removeEventListener( 'touchmove', this.ontouchmove, false );
        this.element.removeEventListener( 'touchend', this.ontouchend, false );

        return this;

    },

} );

function Scene( renderer, controler ) {

    this.models = [];
    this.shaders = [];
    this.shadersMap = [];
    this.helpers = [];
    this.helpersMap = [];

    this.root = new Node( 'root_node' );
    this.renderer = renderer;
    this.gl = this.renderer.context;
    this.controler = controler || new Controler( this.gl.canvas );
    this.quad2UnitModel = Quad.createModel( 'screenQuad', 2 );
    this.ScreenQuadShader = new ScreenQuadShader( this.gl ).setDefines( 'FXAA' ).setUniformObj( { u_resolution: [ this.gl.canvas.width, this.gl.canvas.height ] } );

    const defaultAttachment = [
        {
            format: this.gl.RGBA, type: this.gl.UNSIGNED_BYTE, minMag: this.gl.LINEAR, wrap: this.gl.CLAMP_TO_EDGE,
        },
        {
            format: this.gl.RGBA, type: this.gl.UNSIGNED_BYTE, minMag: this.gl.LINEAR, wrap: this.gl.CLAMP_TO_EDGE,
        },
        { format: this.gl.DEPTH_STENCIL },
    ];

    this.attachments = defaultAttachment;
    this.framebufferInfo = createFramebufferInfo( this.gl, this.attachments );
    this.bufferPicker = new BufferPicker( this.gl, this.models, this.framebufferInfo, this.controler, 1 );

    this.setPick( false );

}

Object.assign( Scene.prototype, {

    add( ...objs ) {

        for ( let i = 0; i < objs.length; i ++ )
            if ( Array.isArray( objs[ i ] ) )
                this.add( ...objs[ i ] );
            else {

                if ( objs[ i ].shader )
                    this.addModelToShader( objs[ i ].shader, objs[ i ].model );
                if ( objs[ i ].helper )
                    this.addDataToHelper( objs[ i ].helper, objs[ i ].data );

            }

        return this;

    },

    addModelToShader( shader, model ) {

        if ( Array.isArray( model ) )
            model.forEach( m => this.addModelToShader( shader, m ) );
        else {

            if ( model instanceof Node )
                return this.addNodeToShader( shader, model );

            const shaderIdx = this.shadersMap.indexOf( shader );
            let modelIdx = - 1;
            if ( shaderIdx > - 1 ) {

                modelIdx = this.shaders[ shaderIdx ].models.indexOf( model );
                if ( modelIdx < 0 )
                    this.shaders[ shaderIdx ].models.push( model );

            } else {

                const shaderObj = { shader: this.enablePick ? shader.setDefines( 'ColorPick' ) : shader, models: [ model ] };
                this.shaders.push( shaderObj );
                this.shadersMap.push( shader );

            }

            modelIdx = this.models.indexOf( model );
            if ( modelIdx < 0 ) {

                this.models.push( model );
                this.root.addChild( model );
                if ( this.enablePick )
                    model.setUniformObj( { u_colorId: this.bufferPicker.id2Color( this.models.length ) } );

            }

        }

        return this;

    },

    addNodeToShader( shader, node ) {

        const models = [];
        function getModels( nodep ) {

            if ( nodep.model )
                models.push( nodep.model );

        }
        node.traverse( getModels );

        let shaderIdx = this.shadersMap.indexOf( shader );
        if ( shaderIdx < 0 ) {

            const shaderObj = { shader: this.enablePick ? shader.setDefines( 'ColorPick' ) : shader, models: [] };
            this.shaders.push( shaderObj );
            this.shadersMap.push( shader );
            shaderIdx = this.shaders.length - 1;

        }

        const shaderModels = this.shaders[ shaderIdx ].models;
        for ( let i = 0; i < models.length; i ++ ) {

            const model = models[ i ];
            let modelIdx = shaderModels.indexOf( model );
            if ( modelIdx < 0 )
                shaderModels.push( model );

            modelIdx = this.models.indexOf( model );
            if ( modelIdx < 0 ) {

                this.models.push( model );
                if ( this.enablePick )
                    model.setUniformObj( { u_colorId: this.bufferPicker.id2Color( this.models.length ) } );

            }

        }

        this.root.addChild( node );

        return this;

    },

    addDataToHelper( helper, data ) {

        if ( Array.isArray( data ) )
            data.forEach( d => this.addDataToHelper( helper, d ) );
        else {

            const helperIdx = this.helpersMap.indexOf( helper );
            if ( helperIdx > - 1 )
                this.helpers[ helperIdx ].datas.push( data );
            else {

                const helperObj = { helper, datas: [ data ] };
                this.helpers.push( helperObj );
                this.helpersMap.push( helper );

            }

        }

        return this;

    },

    remove( ...objs ) {

        for ( let i = 0; i < objs.length; i ++ )
            if ( Array.isArray( objs[ i ] ) )
                this.remove( ...objs[ i ] );
            else {

                if ( objs[ i ].shader )
                    this.removeModelFromShader( objs[ i ].shader, objs[ i ].model );
                if ( objs[ i ].helper )
                    this.removeDataFromHelper( objs[ i ].helper, objs[ i ].data );

            }

        return this;

    },

    removeModelFromShader( shader, model ) {

        if ( Array.isArray( model ) )
            model.forEach( m => this.removeModelFromShader( shader, m ) );
        else {

            const shaderIdx = this.shadersMap.indexOf( shader );
            let modelIdx = - 1;
            if ( shaderIdx > - 1 ) {

                modelIdx = this.shaders[ shaderIdx ].models.indexOf( model );
                if ( modelIdx > - 1 )
                    this.shaders[ shaderIdx ].models.splice( modelIdx, 1 );

            }

            modelIdx = this.models.indexOf( model );
            if ( modelIdx > - 1 ) {

                this.models.splice( modelIdx, 1 );
                this.root.remove( model.node );
                if ( this.enablePick )
                    this.needUpdateColorId = true;

            }

        }

        return this;

    },

    removeDataFromHelper( helper, data ) {

        if ( Array.isArray( data ) )
            data.forEach( d => this.removeDataFromHelper( helper, d ) );
        else {

            const helperIdx = this.helpersMap.indexOf( helper );
            if ( helperIdx > - 1 ) {

                const dataIdx = this.helpers[ helperIdx ].datas.indexOf( data );
                if ( dataIdx > - 1 )
                    this.helpers[ helperIdx ].datas.splice( dataIdx, 1 );

            }

        }

        return this;

    },

    render2Buffer( resize ) {

        if ( resize ) {

            resizeFramebufferInfo( this.gl, this.framebufferInfo, this.attachments );
            this.ScreenQuadShader.setUniformObj( { u_resolution: [ this.gl.canvas.width, this.gl.canvas.height ] } );

        }
        bindFramebufferInfo( this.gl, this.framebufferInfo );
        this.renderer.clear();
        this.render();
        bindFramebufferInfo( this.gl, null );
        return this;

    },

    render2Screen( attachment = 0 ) {

        this.ScreenQuadShader.setTexture( this.framebufferInfo.attachments[ attachment ] ).renderModel( this.quad2UnitModel );
        return this;

    },

    render() {

        this.root.updateMatrix();

        if ( this.enablePick && this.needUpdateColorId ) {

            this.models.forEach( ( m, id ) => m.setUniformObj( { u_colorId: id + 1 } ) );
            this.needUpdateColorId = false;

        }

        let curShader;
        let curShaderObj;
        let curModel;
        for ( let i = 0; i < this.shaders.length; i ++ ) {

            curShaderObj = this.shaders[ i ];
            curShader = curShaderObj.shader;

            for ( let j = 0; j < curShaderObj.models.length; j ++ ) {

                curModel = curShaderObj.models[ j ];
                curShader.renderModel( curModel );

            }

            curShader.deactivate();

        }

        for ( let i = 0; i < this.helpers.length; i ++ ) {

            curShaderObj = this.helpers[ i ];
            curShader = curShaderObj.helper;
            for ( let j = 0; j < curShaderObj.datas.length; j ++ ) {

                curModel = curShaderObj.datas[ j ];
                if ( curModel.data ) {

                    curShader.setData( curModel.data );

                    if ( curModel.transform )
                        curShader.model.setTransform( curModel.transform );

                    if ( curModel.position )
                        curShader.model.setPosition( curModel.position );

                    if ( curModel.rotation )
                        curShader.model.setRotation( curModel.rotation );

                    if ( curModel.scale )
                        curShader.model.setScale( curModel.scale );

                    curShader.render();

                }

            }


        }

    },

    setPick( enable ) {

        if ( !! enable === this.enablePick ) return this;

        if ( enable ) {

            this.shadersMap.forEach( shader => shader.setDefines( 'ColorPick' ) );
            this.models.forEach( ( m, idx ) => m.setUniformObj( { u_colorId: this.bufferPicker.id2Color( idx + 1 ) } ) );

        }

        if ( ! enable )
            this.shadersMap.forEach( shader => shader.setDefines() );

        this.enablePick = !! enable;
        this.bufferPicker.setActivate( this.enablePick );
        return this;

    },

    removeAll() {

        this.models = [];
        this.shaders = [];
        this.shadersMap = [];
        this.helpers = [];
        this.helpersMap = [];
        return this;

    },

} );

function weightLinearLerp( out, v1, v2, t ) {

    for ( let i = 0; i < v1.length; i ++ )
        out[ i ] = v1[ i ] + t * ( v2[ i ] - v1[ i ] ); // eslint-disable-line

    return out;

}

function quaternionLinearSlerp( out, v1, v2, t ) {

    Quaternion.slerp( out, v1, v2, t );

}

function Animator( rawData ) {

    this.raw = rawData;
    this._parseRawData( rawData );
    this._playList = [];

}

Object.assign( Animator.prototype, {

    _parseRawData( raw ) {

        this.animations = Animator.types[ raw.type ]( raw );

    },

    resetAll() {

        this.animations.forEach( ( animate ) => {

            animate.clips.forEach( ( clip ) => {

                clip.currentTime = 0; // eslint-disable-line
                clip.currentIdx = 0; // eslint-disable-line
                clip.sumTime = 0; // eslint-disable-line

            } );

        } );

        return this;

    },

    playAnimation( name ) {

        this._playList = [];
        this.animations.forEach( ( animation ) => {

            if ( animation.name === name )
                this._playList = [ animation ];

        } );

        return this;

    },

    playAll() {

        this._playList = [];
        this.animations.forEach( animation => this._playList.push( animation ) );

        return this;

    },

    update( dtime ) {

        for ( let i = 0; i < this._playList.length; i ++ ) {

            const clips = this._playList[ i ].clips;
            for ( let j = 0; j < clips.length; j ++ ) {

                const clip = clips[ j ];
                let {
                    sumTime, currentIdx, currentTime,
                } = clip;
                const {
                    minTime, maxTime, times, values, lerpFun, setTarget, animateMaxTime, animateMinTime,
                } = clip;

                sumTime += dtime;
                currentTime += dtime;
                if ( currentTime > animateMaxTime ) {

                    currentTime %= animateMaxTime;
                    currentIdx = 0;

                }

                clip.sumTime = sumTime;
                clip.currentTime = currentTime;
                if ( currentTime < animateMinTime || currentTime < minTime || currentTime > maxTime ) continue;

                for ( let t = currentIdx; t < times.length; t ++ )
                    if ( currentTime < times[ t ] ) {

                        currentIdx = t - 1;
                        break;

                    }
                clip.currentIdx = currentIdx;

                const timePercent = ( currentTime - times[ currentIdx ] ) / ( times[ currentIdx + 1 ] - times[ currentIdx ] );
                lerpFun( clip.currentValue, values[ currentIdx ], values[ currentIdx + 1 ], timePercent );
                setTarget( clip.currentValue );

            }

        }

    },

} );

Object.assign( Animator, {
    types: {

        gltf( raw ) {

            const { animations, rootNode } = raw;
            const result = [];
            for ( let i = 0; i < animations.length; i ++ ) {

                const animation = animations[ i ];
                const { name, clips } = animation;
                let animateMaxTime = Number.NEGATIVE_INFINITY;
                let animateMinTime = Number.POSITIVE_INFINITY;
                const clipsRes = [];
                for ( let j = 0; j < clips.length; j ++ ) {

                    const clip = clips[ j ];
                    const {
                        findFlag, findValue, targetProp, times, values, extras, // method,
                    } = clip;

                    const node = rootNode.findInChildren( findFlag, findValue );

                    let lerpFun;
                    let setTarget = function ( v ) {

                        node[ targetProp ] = v;

                    };
                    switch ( targetProp ) {

                    case 'quaternion':
                        lerpFun = quaternionLinearSlerp;
                        break;
                    case 'weights':
                        lerpFun = weightLinearLerp;
                        setTarget = function ( v ) {

                            const uniformobj = {};
                            uniformobj[ extras.uniformName ] = v;
                            node.model.setUniformObj( uniformobj );

                        };
                        break;
                    case 'position':
                    case 'scale':
                        lerpFun = weightLinearLerp;
                        break;
                    default:
                        break;

                    }

                    if ( ! lerpFun ) continue;

                    animateMinTime = animateMinTime < times[ 0 ] ? animateMinTime : times[ 0 ];
                    animateMaxTime = animateMaxTime > times[ times.length - 1 ] ? animateMaxTime : times[ times.length - 1 ];
                    const clipRes = {
                        setTarget,
                        times,
                        values,
                        lerpFun,
                        sumTime: 0,
                        minTime: times[ 0 ],
                        maxTime: times[ times.length - 1 ],
                        currentIdx: 0,
                        currentTime: 0,
                        currentValue: values[ 0 ].slice ? values[ 0 ].slice() : values[ 0 ],
                    };

                    clipsRes.push( clipRes );

                }

                clipsRes.forEach( ( clip ) => {

                    clip.animateMaxTime = animateMaxTime; // eslint-disable-line
                    clip.animateMinTime = animateMinTime; // eslint-disable-line

                } );

                result.push( { name, clips: clipsRes } );

            }

            return result;

        },

    },
} );

exports.ATTRIB_POSITION_NAME = ATTRIB_POSITION_NAME;
exports.ATTRIB_POSITION_LOC = ATTRIB_POSITION_LOC;
exports.ATTRIB_UV_NAME = ATTRIB_UV_NAME;
exports.ATTRIB_UV_LOC = ATTRIB_UV_LOC;
exports.ATTRIB_NORMAL_NAME = ATTRIB_NORMAL_NAME;
exports.ATTRIB_NORMAL_LOC = ATTRIB_NORMAL_LOC;
exports.ATTRIB_BARYCENTRIC_NAME = ATTRIB_BARYCENTRIC_NAME;
exports.ATTRIB_BARYCENTRIC_LOC = ATTRIB_BARYCENTRIC_LOC;
exports.UNIFORM_WORLD_MAT_NAME = UNIFORM_WORLD_MAT_NAME;
exports.UNIFORM_VIEW_MAT_NAME = UNIFORM_VIEW_MAT_NAME;
exports.UNIFORM_PROJ_MAT_NAME = UNIFORM_PROJ_MAT_NAME;
exports.UNIFORM_MVP_MAT_NAME = UNIFORM_MVP_MAT_NAME;
exports.UNIFORM_VP_MAT_NAME = UNIFORM_VP_MAT_NAME;
exports.UNIFORM_NORMAL_MAT_NAME = UNIFORM_NORMAL_MAT_NAME;
exports.UNIFORM_MAIN_TEXTURE_NAME = UNIFORM_MAIN_TEXTURE_NAME;
exports.UNIFORM_PREFIX = UNIFORM_PREFIX;
exports.UNIFORM_CAMPOS = UNIFORM_CAMPOS;
exports.ATTRIB_JOINT_0_NAME = ATTRIB_JOINT_0_NAME;
exports.ATTRIB_WEIGHT_0_NAME = ATTRIB_WEIGHT_0_NAME;
exports.ATTRIB_UV_1_NAME = ATTRIB_UV_1_NAME;
exports.ATTRIB_JOINT_1_NAME = ATTRIB_JOINT_1_NAME;
exports.ATTRIB_WEIGHT_1_NAME = ATTRIB_WEIGHT_1_NAME;
exports.ATTRIB_TANGENT_NAME = ATTRIB_TANGENT_NAME;
exports.ATTRIB_VERTEX_COLOR_NAME = ATTRIB_VERTEX_COLOR_NAME;
exports.LINES = LINES;
exports.LINE_STRIP = LINE_STRIP;
exports.TRIANGLES = TRIANGLES;
exports.TRIANGLE_STRIP = TRIANGLE_STRIP;
exports.DYNAMIC_DRAW = DYNAMIC_DRAW;
exports.DEFINE_FLAT = DEFINE_FLAT;
exports.NEAREST = NEAREST;
exports.LINEAR = LINEAR;
exports.NEAREST_MIPMAP_NEAREST = NEAREST_MIPMAP_NEAREST;
exports.NEAREST_MIPMAP_LINEAR = NEAREST_MIPMAP_LINEAR;
exports.LINEAR_MIPMAP_NEAREST = LINEAR_MIPMAP_NEAREST;
exports.LINEAR_MIPMAP_LINEAR = LINEAR_MIPMAP_LINEAR;
exports.CLAMP_TO_EDGE = CLAMP_TO_EDGE;
exports.MIRRORED_REPEAT = MIRRORED_REPEAT;
exports.REPEAT = REPEAT;
exports.Transform = Transform;
exports.Model = Model;
exports.Mesh = Mesh;
exports.GridAxis = GridAxis;
exports.Quad = Quad;
exports.Cube = Cube;
exports.Sphere = Sphere;
exports.deIndexAttribs = deIndexAttribs;
exports.addBarycentricAttrib = addBarycentricAttrib;
exports.Curve = Curve;
exports.Render = Render;
exports.Shader = Shader;
exports.GridAxisShader = GridAxisShader;
exports.FlatTextureShader = FlatTextureShader;
exports.DynamicSkyboxShader = DynamicSkyboxShader;
exports.PointlightShader = PointlightShader;
exports.ColorPointShader = ColorPointShader;
exports.PhongLightShader = PhongLightShader;
exports.ColorpickShader = ColorpickShader;
exports.WireframeShader = WireframeShader;
exports.MeshLineShader = MeshLineShader;
exports.TransformShader = TransformShader;
exports.GLTFShader = GLTFShader;
exports.MeshLineModel = MeshLineModel;
exports.createBuffersFromArrays = createBuffersFromArrays;
exports.createBufferInfoFromArrays = createBufferInfoFromArrays;
exports.isIndices = isIndices;
exports.setTypedArrayToBuffer = setTypedArrayToBuffer;
exports.getNumComponents = getNumComponents;
exports.createBufferFromArray = createBufferFromArray;
exports.createTexture = createTexture;
exports.createTextures = createTextures;
exports.resizeTexture = resizeTexture;
exports.createProgram = createProgram;
exports.createAttributesSetters = createAttributesSetters;
exports.setAttributes = setAttributes;
exports.createUniformSetters = createUniformSetters;
exports.setUniforms = setUniforms;
exports.createUniformBlockSpec = createUniformBlockSpec;
exports.createUniformBlockInfo = createUniformBlockInfo;
exports.createUniformBlockInfos = createUniformBlockInfos;
exports.setUniformBlock = setUniformBlock;
exports.setBlockUniforms = setBlockUniforms;
exports.setBlockUniformsForProgram = setBlockUniformsForProgram;
exports.createTransformFeedbackInfo = createTransformFeedbackInfo;
exports.createTransformFeedback = createTransformFeedback;
exports.Renderer = Renderer;
exports.PerspectiveCamera = PerspectiveCamera;
exports.OrthographicCamera = OrthographicCamera;
exports.OrbitControls = OrbitControls;
exports.Vector2 = Vector2;
exports.Vector3 = Vector3;
exports.Spherical = Spherical;
exports.Matrix4 = Matrix4;
exports.FileLoader = FileLoader;
exports.ObjLoader = ObjLoader;
exports.GLTFLoader = GLTFLoader;
exports.PointHelper = PointHelper;
exports.LineHelper = LineHelper;
exports.Terrain = Terrain;
exports.createFramebufferInfo = createFramebufferInfo;
exports.bindFramebufferInfo = bindFramebufferInfo;
exports.readPixcelFromFrameBufferInfo = readPixcelFromFrameBufferInfo;
exports.resizeFramebufferInfo = resizeFramebufferInfo;
exports.FramebufferPicker = FramebufferPicker;
exports.id2Color = id2Color;
exports.color2Id = color2Id;
exports.Scene = Scene;
exports.Controler = Controler;
exports.Animator = Animator;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=czpg.js.map
