attribute vec3 POSITION;
attribute vec3 NORMAL;
attribute vec2 TEXCOORD_0;
attribute vec4 TANGENT;
attribute vec3 COLOR_0;

uniform mat4 M;
uniform mat4 V;
uniform mat4 P;
uniform mat4 nM;

varying vec3 normal;
varying vec2 uv;
varying vec3 pos;
varying vec3 color;
varying mat3 TBN;


void main() {
  uv = TEXCOORD_0;
  normal = normalize((nM * vec4(NORMAL, 0)).xyz);
  vec3 tangent = normalize(vec3(nM * vec4(TANGENT.xyz, 0.0)));
  vec3 bitangent = cross(normal, tangent) * TANGENT.w;
  TBN = mat3(tangent, bitangent, normal);

  vec4 position = M * vec4(POSITION, 1);
  pos = position.xyz / position.w;
  gl_Position = P * V * position;
}