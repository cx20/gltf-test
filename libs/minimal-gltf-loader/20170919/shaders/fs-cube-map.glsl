#version 300 es
precision highp float;
precision highp int;

uniform samplerCube u_environment;

in vec3 texcoord;

out vec4 color;

void main()
{
    color = texture(u_environment, texcoord);
}