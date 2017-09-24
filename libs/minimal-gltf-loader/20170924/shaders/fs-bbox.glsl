#version 300 es
#define FRAG_COLOR_LOCATION 0

precision highp float;
precision highp int;

layout(location = FRAG_COLOR_LOCATION) out vec4 color;

void main()
{
    color = vec4(1.0, 0.0, 0.0, 1.0);
}