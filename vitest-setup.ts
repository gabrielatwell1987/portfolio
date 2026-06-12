import '@testing-library/svelte/vitest';

// Creates a WebGL mock context using a Proxy to auto-stub any method Three.js calls.
// Without this, we'd need to find and stub every WebGL function by hand.
function createWebGLMock(): WebGLRenderingContext {
    const canvas = document.createElement('canvas');

    // Concrete return values for methods Three.js reads from
    const paramsMap: Record<number, any> = {
        [0x0c10]: new Int32Array([0, 0, 1920, 1080]), // SCISSOR_BOX
        [0x0ba2]: new Int32Array([0, 0, 1920, 1080]), // VIEWPORT
        [0x1f00]: 'WebGL Mock', // VENDOR
        [0x1f01]: 'Mock', // RENDERER
        [0x1f02]: 'WebGL 1.0', // VERSION — needs "WebGL" so indexOf works
        [0x8b8c]: 'WebGL GLSL', // SHADING_LANGUAGE_VERSION
        [0x0d33]: 2048, // MAX_TEXTURE_SIZE
        [0x8869]: 16, // MAX_VERTEX_ATTRIBS
        [0x8dfb]: 16, // MAX_FRAGMENT_UNIFORM_VECTORS
        [0x8df8]: 16, // MAX_VERTEX_UNIFORM_VECTORS
        [0x8872]: 16, // MAX_TEXTURE_IMAGE_UNITS
        [0x8b4d]: 16, // MAX_COMBINED_TEXTURE_IMAGE_UNITS
        [0x8b4c]: 16, // MAX_VERTEX_TEXTURE_IMAGE_UNITS
        [0x809e]: 16, // MAX_IMAGE_UNITS
        [0x8871]: 16, // MAX_CUBE_MAP_TEXTURE_SIZE
        [0x84fd]: 16, // MAX_TEXTURE_MAX_ANISOTROPY_EXT
        [0x84ff]: 16, // MAX_COMBINED_TEXTURE_IMAGE_UNITS
        [0x81a7]: 16, // MAX_RENDERBUFFER_SIZE
        [0x8d41]: 16, // MAX_VERTEX_TEXTURE_IMAGE_UNITS
        [0x8c8c]: 16, // MAX_VIEWS_OVR
        [0x9248]: 0, // MAX_ELEMENTS_INDICES
        [0x8d57]: 4, // MAX_SAMPLES
        [0x8a2f]: 72, // MAX_UNIFORM_BUFFER_BINDINGS
        [0x8b9b]: 0x1908, // IMPLEMENTATION_COLOR_READ_FORMAT (RGBA)
        [0x8b9a]: 0x1401, // IMPLEMENTATION_COLOR_READ_TYPE (UNSIGNED_BYTE)
    };

    const target: Record<string, any> = {
        canvas,
        drawingBufferWidth: 1920,
        drawingBufferHeight: 1080,
        drawingBufferColorSpace: 'srgb',
    };

    // WebGL enum constants — Three.js reads these as properties off the context
    const enumMap: Record<string, number> = {
        VERSION: 0x1f02,
        VENDOR: 0x1f00,
        RENDERER: 0x1f01,
        SHADING_LANGUAGE_VERSION: 0x8b8c,
        MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0x8b4d,
        MAX_CUBE_MAP_TEXTURE_SIZE: 0x851c,
        MAX_FRAGMENT_UNIFORM_VECTORS: 0x8df9,
        MAX_TEXTURE_IMAGE_UNITS: 0x8872,
        MAX_TEXTURE_SIZE: 0x0d33,
        MAX_VARYING_VECTORS: 0x8df9,
        MAX_VERTEX_ATTRIBS: 0x8869,
        MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8b4c,
        MAX_VERTEX_UNIFORM_VECTORS: 0x8dfb,
        MAX_SAMPLES: 0x8d57,
        MAX_UNIFORM_BUFFER_BINDINGS: 0x8a2f,
        SCISSOR_BOX: 0x0c10,
        VIEWPORT: 0x0ba2,
        IMPLEMENTATION_COLOR_READ_FORMAT: 0x8b9b,
        IMPLEMENTATION_COLOR_READ_TYPE: 0x8b9a,
        TEXTURE_MIN_FILTER: 0x2801,
        TEXTURE_MAG_FILTER: 0x2800,
        NEAREST: 0x2600,
        TEXTURE_WRAP_S: 0x2802,
        TEXTURE_WRAP_T: 0x2803,
        CLAMP_TO_EDGE: 0x812f,
        REPEAT: 0x2901,
        FRAMEBUFFER_COMPLETE: 0x8cd5,
        RGBA: 0x1908,
        UNSIGNED_BYTE: 0x1401,
        FLOAT: 0x1406,
        TRIANGLES: 0x0004,
        TRIANGLE_STRIP: 0x0005,
        LINES: 0x0001,
        LINE_LOOP: 0x0002,
        LINE_STRIP: 0x0003,
        POINTS: 0x0000,
        BYTE: 0x1400,
        SHORT: 0x1402,
        UNSIGNED_SHORT: 0x1403,
        INT: 0x1404,
        UNSIGNED_INT: 0x1405,
        DEPTH_COMPONENT16: 0x81a5,
        STENCIL_INDEX8: 0x8d48,
        DEPTH_STENCIL: 0x84f9,
        LINEAR: 0x2601,
        ONE: 1,
        ZERO: 0,
        SRC_ALPHA: 0x0302,
        ONE_MINUS_SRC_ALPHA: 0x0303,
        TEXTURE_2D: 0x0de1,
        TEXTURE_3D: 0x806f,
        TEXTURE_2D_ARRAY: 0x8c1a,
        TEXTURE_CUBE_MAP: 0x8513,
        TEXTURE_CUBE_MAP_POSITIVE_X: 0x8515,
    };

    // Known methods that need specific return values
    const knownMethods: Record<string, Function> = {
        getExtension: () => null,
        getParameter: (p: number) => paramsMap[p] ?? null,
        getShaderPrecisionFormat: () => ({
            rangeMin: 127,
            rangeMax: 127,
            precision: 23,
        }),
        getSupportedExtensions: () => [
            'EXT_blend_minmax',
            'WEBGL_lose_context',
        ],
        getAttribLocation: () => 0,
        getUniformLocation: () => ({}),
        getShaderParameter: () => true,
        getProgramParameter: () => true,
        getShaderInfoLog: () => '',
        getProgramInfoLog: () => '',
        getError: () => 0,
        isContextLost: () => false,
        getContextAttributes: () => ({
            alpha: true,
            antialias: true,
            depth: true,
            stencil: true,
        }),
        getBufferParameter: () => null,
        getFramebufferAttachmentParameter: () => null,
        getRenderbufferParameter: () => null,
        getTexParameter: () => null,
        getVertexAttrib: () => null,
        getVertexAttribOffset: () => 0,
        getActiveUniform: () => ({
            name: 'mock_uniform',
            size: 1,
            type: 0x8b56,
        }), // vec4
        getActiveAttrib: () => ({ name: 'mock_attrib', size: 1, type: 0x1406 }), // float
        checkFramebufferStatus: () => 0x8cd5, // FRAMEBUFFER_COMPLETE
        createShader: () => ({}),
        createProgram: () => ({}),
        createBuffer: () => ({}),
        createTexture: () => ({}),
        createFramebuffer: () => ({}),
        createRenderbuffer: () => ({}),
    };

    return new Proxy(target, {
        get(obj, prop: string) {
            // Enum constants
            if (prop in enumMap) return enumMap[prop];
            // Known methods with specific returns
            if (prop in knownMethods) return knownMethods[prop];
            // Stored properties
            if (prop in obj) return obj[prop];
            // Auto-stub any other function call — returns a no-op
            return () => {};
        },
    }) as unknown as WebGLRenderingContext;
}

// Override getContext to return our mock for WebGL
HTMLCanvasElement.prototype.getContext = function (
    this: HTMLCanvasElement,
    type: string,
    ...args: any[]
): any {
    if (
        type === 'webgl' ||
        type === 'webgl2' ||
        type === 'experimental-webgl'
    ) {
        return createWebGLMock();
    }
    if (type === '2d') {
        return {
            canvas: this,
            clearRect: () => {},
            fillRect: () => {},
            drawImage: () => {},
            getImageData: () => ({ data: [] }),
            putImageData: () => {},
            createImageData: () => [],
            setTransform: () => {},
            resetTransform: () => {},
            translate: () => {},
            scale: () => {},
            rotate: () => {},
            save: () => {},
            restore: () => {},
            beginPath: () => {},
            moveTo: () => {},
            lineTo: () => {},
            closePath: () => {},
            stroke: () => {},
            fill: () => {},
            rect: () => {},
            arc: () => {},
            fillText: () => {},
            strokeText: () => {},
            measureText: () => ({ width: 0 }),
        };
    }
    return null;
};

if (!window.matchMedia) {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: (query: string): MediaQueryList =>
            ({
                matches: false,
                media: query,
                onchange: null,
                addListener: () => {},
                removeListener: () => {},
                addEventListener: () => {},
                removeEventListener: () => {},
                dispatchEvent: () => false,
            }) as MediaQueryList,
    });
}

if (!globalThis.ResizeObserver) {
    class ResizeObserver {
        observe() {}
        unobserve() {}
        disconnect() {}
    }
    globalThis.ResizeObserver = ResizeObserver;
}

if (!globalThis.IntersectionObserver) {
    class IntersectionObserver {
        observe() {}
        unobserve() {}
        disconnect() {}
        takeRecords() {
            return [];
        }
        root = null;
        rootMargin = '';
        thresholds = [];
    }
    globalThis.IntersectionObserver =
        IntersectionObserver as typeof globalThis.IntersectionObserver;
}

if (!globalThis.requestAnimationFrame) {
    globalThis.requestAnimationFrame = (cb: FrameRequestCallback) =>
        setTimeout(() => cb(performance.now()), 16) as unknown as number;
}

if (!globalThis.cancelAnimationFrame) {
    globalThis.cancelAnimationFrame = (id: number) => clearTimeout(id);
}
