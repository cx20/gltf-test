#version 300 es
precision mediump float;

in vec3 normal;
in vec2 uv;
in vec4 pos;
in vec3 color;

uniform sampler2D emissiveTexture;
uniform sampler2D baseColorTexture;

out vec4 outColor;

void main() {
    vec4 em = texture(emissiveTexture, uv);
    vec4 base = texture(baseColorTexture, uv);
    vec3 lightDir = normalize(vec3(100, 100, 100));
    float LoN = dot(normal, lightDir);
    // outColor = vec4(uv, 0, 1);
    outColor = (base) * vec4(vec3(max(LoN, 0.5)), 1);
    outColor = base;
    // outColor = vec4(normal, 1);
}