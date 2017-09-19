#version 300 es
#define FRAG_COLOR_LOCATION 0

precision highp float;
precision highp int;

uniform vec4 u_baseColorFactor;

in vec3 v_normal;

layout(location = FRAG_COLOR_LOCATION) out vec4 color;

void main()
{
    float intensity = dot(gl_FrontFacing ? v_normal : -v_normal, vec3(0.0, 0.0, 1.0));
    color = u_baseColorFactor * intensity;
    color.a = 1.0;
}