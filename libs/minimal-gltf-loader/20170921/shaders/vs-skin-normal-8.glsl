#version 300 es
#define POSITION_LOCATION 0
#define NORMAL_LOCATION 1
#define TEXCOORD_0_LOCATION 2
#define JOINTS_0_LOCATION 3
#define JOINTS_1_LOCATION 5
#define WEIGHTS_0_LOCATION 4
#define WEIGHTS_1_LOCATION 6

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
layout(location = JOINTS_0_LOCATION) in vec4 joint0;
layout(location = JOINTS_1_LOCATION) in vec4 joint1;
layout(location = WEIGHTS_0_LOCATION) in vec4 weight0;
layout(location = WEIGHTS_1_LOCATION) in vec4 weight1;

out vec3 v_normal;

void main()
{
    mat4 skinMatrix = 
        weight0.x * u_jointMatrix.matrix[int(joint0.x)] +
        weight0.y * u_jointMatrix.matrix[int(joint0.y)] +
        weight0.z * u_jointMatrix.matrix[int(joint0.z)] +
        weight0.w * u_jointMatrix.matrix[int(joint0.w)] +
        weight1.x * u_jointMatrix.matrix[int(joint1.x)] +
        weight1.y * u_jointMatrix.matrix[int(joint1.y)] +
        weight1.z * u_jointMatrix.matrix[int(joint1.z)] +
        weight1.w * u_jointMatrix.matrix[int(joint1.w)];

    v_normal = normalize(( u_MVNormal * transpose(inverse(skinMatrix)) * vec4(normal, 0)).xyz);
    gl_Position = u_MVP * skinMatrix * vec4(position, 1.0) ;
}