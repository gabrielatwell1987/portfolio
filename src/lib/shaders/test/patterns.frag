varying vec2 vUv;

void main()
{
    // float width = vUv.x;
    // float length = vUv.y;
    // float length = 1.0 - vUv.y;
    // float length = 10.0 * vUv.y;
    // float length = 10.0 * vUv.y;
    // float length = mod(vUv.y * 10.0, 1.0);
    
    // float length = mod(vUv.y * 10.0, 1.0);
    // length = step(0.85, length);
    float length = step(0.8, mod(vUv.x * 10.0, 1.0));
    length *= step(0.8, mod(vUv.y * 10.0, 1.0));

    // gl_FragColor = vec4(vec3(width), 1.0);
    gl_FragColor = vec4(vec3(length), 1.0);
}