precision mediump float;
#define PI 3.14159265358979
#define GAMMA 2.2

varying vec3 normal;
varying vec2 uv;
varying vec3 pos;
varying vec3 color;
varying mat3 TBN;


uniform sampler2D brdfLUT;
uniform sampler2D emissiveTexture;
uniform sampler2D normalTexture;
uniform sampler2D baseColorTexture;
uniform samplerCube env;

uniform vec4 baseColorFactor;
uniform float roughnessFactor;
uniform float metallicFactor;

uniform sampler2D metallicRoughnessTexture;
uniform sampler2D occlusionTexture;
uniform vec3 u_Camera;

// texture stuff
vec4 sRGBtoLINEAR(vec4 color) {
    return vec4(pow(color.rgb, vec3(GAMMA)), color.a);
}
vec4 LINEARtoSRGB(vec4 color) {
    return vec4(pow(color.rgb, vec3(1.0/GAMMA)), color.a);
}


// Fresnel - F0 = Metalness
vec3 F_Schlick(float VoH, vec3 F0) {
    return F0 + (vec3(1) - F0) * pow(1.0 - VoH, 5.0);
}
// vec3 Fresnel_CookTorrance(float VoH, vec3 F0) {
// }
vec3 F_UE4(float VoH, vec3 F0) {
    return F0 + (vec3(1.0) - F0) * pow(2.0, (-5.55473 * VoH - 6.98316) * VoH);
}


// Geometric
float G_CookTorrance(float NoV, float NoH, float VoH, float NoL) {
    return min(min(2.0 * NoV * NoH / VoH, 2.0 * NoL * NoH / VoH), 1.0);
}
// >    Schlick with k = α/2 matches Smith very closely
float G_UE4(float NoV, float NoH, float VoH, float NoL, float roughness) {
    float k = (roughness + 1.0) * (roughness + 1.0) / 8.0;
    float l = NoL / (NoL * (1.0 - k) + k);  // There are another version which use NoH & LoH
    float v = NoV / (NoV * (1.0 - k) + k);
    return l * v;
}


// a (alphaRoughness) = Roughness
// Distribution AKA normal distribution function (NDF)
// Trowbridge-Reitz
float D_GGX(float a, float NoH) {
    a = a * a;
    // float f = (NoH * a - NoH) * NoH + 1.0;  // NoH * NoH * (a - 1.0) + 1.0;
    float f = NoH * NoH * (a - 1.0) + 1.0;
    return a / (PI * f * f);
}


struct coreData {
    vec3 diffuse;
    vec3 f0;
    vec3 N;
    vec3 V;
    vec3 R;
    float NoV;
    float metallic;
    float roughness;
    float alphaRoughness;
};

vec3 lightContrib(vec3 lightDir, vec3 lightColor, coreData core) {

    vec3 L = normalize(lightDir);
    vec3 H = normalize(core.V + L);

    float NoL = clamp(dot(core.N, L), 0.001, 1.0);
    float NoH = clamp(dot(core.N, H), 0.0, 1.0);
    float LoH = clamp(dot(L, H), 0.0, 1.0);
    float VoH = clamp(dot(core.V, H), 0.0, 1.0);

    vec3 F = F_Schlick(VoH, core.f0);
    float G = G_UE4(core.NoV, NoH, VoH, NoL, core.roughness);
    float D = D_GGX(core.alphaRoughness, NoH);

    vec3 specContrib = F * G * D / (4.0 * NoL * core.NoV);
    vec3 diffuseContrib = (1.0 - F) * core.diffuse * (1.0 - core.metallic);
    vec3 color = NoL * lightColor * (diffuseContrib + specContrib);
    return color;
}

void main() {
    vec4 em = sRGBtoLINEAR(texture2D(emissiveTexture, uv));
    vec4 base = sRGBtoLINEAR(texture2D(baseColorTexture, uv));
    vec3 normalAddation = texture2D(normalTexture, uv).rgb * 2.0 - 1.0;
    vec3 rm = texture2D(metallicRoughnessTexture, uv).rgb;

    vec4 ao = texture2D(occlusionTexture, uv);

    vec3 V = normalize(u_Camera - pos);
    vec3 N = normalize(TBN * normalAddation);
    // vec3 N = normalize(normal);
    float NoV = clamp(abs(dot(N, V)), 0.001, 1.0);
    vec3 R = -normalize(reflect(V, N));

    float roughness = clamp(rm.g, 0.04, 1.0);
    float alphaRoughness = roughness * roughness;
    float metallic = clamp(rm.b, 0.0, 1.0);
    // float roughness = clamp((1.0-rm.g) * roughnessFactor, 0.0, 1.0);
    // float metallic = clamp(rm.b * metallicFactor, 0.0, 1.0);
    vec3 f0 = vec3(0.04);
    f0 = mix(f0, base.xyz, metallic);

    vec3 diffuse = base.rgb * (vec3(1) - f0);
    diffuse *= 1.0 - metallic;
    diffuse /= PI;

    coreData core = coreData(
        diffuse,
        f0,
        N,
        V,
        R,
        NoV,
        metallic,
        roughness,
        alphaRoughness
    );


    // IBL
    vec3 brdf = sRGBtoLINEAR(texture2D(brdfLUT, vec2(NoV, 1.0 - alphaRoughness))).rgb;
    vec3 IBLcolor = sRGBtoLINEAR(textureCube(env, R)).rgb;
    vec3 IBLspecular = 1.0 * IBLcolor * (f0 * brdf.x + brdf.y);

    vec3 color;
    color += IBLspecular;

    color += lightContrib(vec3(5, 5, 5), vec3(3), core);
    color += lightContrib(vec3(-5, -5, -5), vec3(0.2, 0.4, 0.6), core);

    // gl_FragColor = vec4(uv, 0, 1);
    // gl_FragColor = (base) * vec4(vec3(max(LoN, 0.0)), 1);
    // gl_FragColor = vec4(F, 1);
    // gl_FragColor = vec4(vec3(NoV), 1);
    // gl_FragColor = vec4(vec3(VoH), 1);
    // gl_FragColor = vec4(vec3(G), 1);
    // gl_FragColor = vec4(vec3(D), 1);
    // gl_FragColor = vec4(IBLspecular, 1);
    // gl_FragColor = vec4(brdf, 1);
    // gl_FragColor = vec4(N, 1);
    // gl_FragColor = vec4(base.rgb, 1);
    // gl_FragColor = vec4(ao, 1);
    gl_FragColor = LINEARtoSRGB(vec4(color + em.rgb * 1.0, base.a));
}