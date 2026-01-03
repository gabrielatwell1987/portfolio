uniform vec3 colorA;
uniform vec3 colorB;
uniform vec3 edgeColor;
uniform float edgeWidth;
uniform float time;

varying vec2 vUv;
varying vec3 vNormal;

void main() {
    float mixValue = sin(vUv.x * 50.0 - time * 1.5) * 0.5 + 0.5;
    vec3 baseColor = mix(colorA, colorB, mixValue);

    float edgeU = min(vUv.x, 1.0 - vUv.x);
    float edgeV = min(vUv.y, 1.0 - vUv.y);
    float edgeDist = min(edgeU, edgeV);

    float edgeIntensity = smoothstep(edgeWidth, 0.0, edgeDist);

    vec3 finalColor = mix(baseColor, edgeColor, edgeIntensity * 0.6);

    gl_FragColor = vec4(finalColor, 1.0);
}