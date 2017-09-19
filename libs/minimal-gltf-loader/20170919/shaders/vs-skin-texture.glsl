#version 300 es
#define POSITION_LOCATION 0
#define NORMAL_LOCATION 1
#define TEXCOORD_0_LOCATION 2
#define JOINTS_0_LOCATION 3
#define WEIGHTS_0_LOCATION 4

precision highp float;
precision highp int;

uniform mat4 u_MVP;
uniform mat4 u_MVNormal;

uniform JointMatrix
{
    mat4 matrix[32];
} u_jointMatrix;

layout(location = POSITION_LOCATION) in vec3 position;
layout(location = NORMAL_LOCATION) in vec3 normal;
layout(location = TEXCOORD_0_LOCATION) in vec2 uv;
layout(location = JOINTS_0_LOCATION) in vec4 joint;
layout(location = WEIGHTS_0_LOCATION) in vec4 weight;

out vec3 v_normal;
out vec2 v_uv;

void main()
{
    mat4 skinMatrix = 
        weight.x * u_jointMatrix.matrix[int(joint.x)] +
        weight.y * u_jointMatrix.matrix[int(joint.y)] +
        weight.z * u_jointMatrix.matrix[int(joint.z)] +
        weight.w * u_jointMatrix.matrix[int(joint.w)];

    v_normal = normalize(( u_MVNormal * transpose(inverse(skinMatrix)) * vec4(normal, 0)).xyz);
    v_uv = uv;
    gl_Position = u_MVP * skinMatrix * vec4(position, 1.0) ;
}