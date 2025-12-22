uniform vec3 colorA;
uniform vec3 colorB;
uniform float time;
varying vec2 vUv;
void main() {
    float mixValue = sin(vUv.x * 10.0 - time * 2.0) * 0.5 + 0.5;
    vec3 color = mix(colorA, colorB, mixValue);
    gl_FragColor = vec4(color, 1.0);
}