#version 300 es
#define FRAG_COLOR_LOCATION 0

precision highp float;
precision highp int;

uniform vec4 u_baseColorFactor;
uniform sampler2D u_baseColorTexture;
uniform sampler2D u_normalTexture;

in vec3 v_normal;
in vec2 v_uv;

layout(location = FRAG_COLOR_LOCATION) out vec4 color;


vec3 applyNormalMap(vec3 geomnor, vec3 normap) {
    normap = normap * 2.0 - 1.0;
    vec3 up = normalize(vec3(0.001, 1, 0.001));
    vec3 surftan = normalize(cross(geomnor, up));
    vec3 surfbinor = cross(geomnor, surftan);
    return normap.y * surftan + normap.x * surfbinor + normap.z * geomnor;
}

void main()
{
    vec3 normal = applyNormalMap( v_normal, texture(u_normalTexture, v_uv).rgb );
    normal = gl_FrontFacing ? normal : -normal;

    float intensity = dot(normal, vec3(0.0, 0.0, 1.0));
    color = u_baseColorFactor * texture(u_baseColorTexture, v_uv) * intensity;
    color.a = 1.0;
}