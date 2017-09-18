#version 300 es
#define FRAG_COLOR_LOCATION 0

precision highp float;
precision highp int;

uniform vec4 u_baseColorFactor;
uniform sampler2D u_baseColorTexture;

in vec3 v_normal;
in vec2 v_uv;

layout(location = FRAG_COLOR_LOCATION) out vec4 color;

void main()
{
    float intensity = dot(gl_FrontFacing ? v_normal : -v_normal, vec3(0.0, 0.0, 1.0));
    color = u_baseColorFactor * texture(u_baseColorTexture, v_uv) * intensity; 
    color.a = 1.0;
}