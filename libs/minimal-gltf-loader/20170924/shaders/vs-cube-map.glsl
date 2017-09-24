#version 300 es
precision highp float;
precision highp int;

uniform mat4 u_MVP;

layout(location = 0) in vec3 position;

out vec3 texcoord;

void main()
{
    vec4 pos = u_MVP * vec4(position, 1.0);
    gl_Position = pos.xyww;
    texcoord = position;
}