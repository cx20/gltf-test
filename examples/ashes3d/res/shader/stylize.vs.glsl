attribute vec3 POSITION;
attribute vec3 NORMAL;
attribute vec2 TEXCOORD_0;
attribute vec2 TEXCOORD_1;
attribute vec4 TANGENT;

#ifdef COLOR_0_SIZE_3
attribute vec3 COLOR_0;
#elif defined(COLOR_0_SIZE_4)
attribute vec4 COLOR_0;
#endif

#ifdef HAS_SKINS
#ifndef JOINT_AMOUNT
#define JOINT_AMOUNT 200
#endif
attribute vec4 JOINTS_0;
attribute vec4 WEIGHTS_0;
uniform mat4 jointMat[JOINT_AMOUNT];
#endif // HAS_SKINS

uniform mat4 M;
uniform mat4 V;
uniform mat4 P;
uniform mat4 nM;

varying vec3 normal;
varying vec2 uv;
varying vec2 uv1;
varying vec3 pos;
varying vec4 vColor;
varying mat3 TBN;


void main() {
    uv = TEXCOORD_0;
    uv1 = TEXCOORD_1;
    vec3 skinedNormal = NORMAL;
    vec4 position = vec4(POSITION, 1);
#ifdef HAS_SKINS
    mat4 skinMat =
        WEIGHTS_0.x * jointMat[int(JOINTS_0.x)] +
        WEIGHTS_0.y * jointMat[int(JOINTS_0.y)] +
        WEIGHTS_0.z * jointMat[int(JOINTS_0.z)] +
        WEIGHTS_0.w * jointMat[int(JOINTS_0.w)];
    position = M * skinMat * position;
    skinedNormal = (skinMat * vec4(skinedNormal, 0)).xyz;
#else
    position = M * position;
#endif// HAS_SKINS

    normal = normalize((nM * vec4(skinedNormal, 0)).xyz);
    vec3 tangent=normalize(vec3(nM*vec4(TANGENT.xyz,0)));
    vec3 bitangent=cross(normal,tangent)*TANGENT.w;
    TBN=mat3(tangent,bitangent,normal);

#ifdef COLOR_0_SIZE_3
    vColor = vec4(COLOR_0, 1);
#elif defined(COLOR_0_SIZE_4)
    vColor = COLOR_0;
#endif
    pos = position.xyz / position.w;
    gl_Position = P * V * position;
}