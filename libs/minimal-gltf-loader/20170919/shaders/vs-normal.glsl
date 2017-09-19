#version 300 es
#define POSITION_LOCATION 0
#define NORMAL_LOCATION 1

precision highp float;
precision highp int;

uniform mat4 u_MVP;
uniform mat4 u_MVNormal;

layout(location = POSITION_LOCATION) in vec3 position;
layout(location = NORMAL_LOCATION) in vec3 normal;

out vec3 v_normal;

void main()
{
    v_normal = normalize((u_MVNormal * vec4(normal, 0)).xyz);
    gl_Position = u_MVP * vec4(position, 1.0) ;
}