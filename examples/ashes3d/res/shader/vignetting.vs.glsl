attribute vec3 POSITION;

varying vec2 uv;
varying vec2 pos;

void main(){
    vec4 position=vec4(POSITION,1);
    pos=position.xy;
    uv=pos+1.*0.5;
    gl_Position=position;
}