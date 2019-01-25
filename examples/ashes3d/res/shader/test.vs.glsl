#version 300 es

in vec3 POSITION;
in vec3 NORMAL;
in vec2 TEXCOORD_0;
in vec3 TANGENT;
in vec3 COLOR_0;

uniform mat4 M;
uniform mat4 V;
uniform mat4 P;
uniform mat4 nM;

out vec3 normal;
out vec2 uv;
out vec4 pos;
out vec3 color;


void main() {
  uv = TEXCOORD_0;
  vec4 position = vec4(POSITION, 1);
  pos = position;
  normal = normalize((nM * vec4(NORMAL, 1)).xyz);
  gl_Position = P * V * M * position;
}