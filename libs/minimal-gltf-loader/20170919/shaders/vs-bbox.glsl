#version 300 es
#define POSITION_LOCATION 0

precision highp float;
precision highp int;

uniform mat4 u_MVP;

layout(location = POSITION_LOCATION) in vec3 position;

void main()
{
    gl_Position = u_MVP * vec4(position, 1.0) ;
}