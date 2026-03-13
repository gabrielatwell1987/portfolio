import '@testing-library/svelte/vitest';

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
				dispatchEvent: () => false
			}) as MediaQueryList
	});
}

// three js testing setup
if (!HTMLCanvasElement.prototype.getContext) {
	Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
		value: (type: string) => {
			if (type === '2d') {
				return {
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
					fill: () => {}
				};
			}

			if (type === 'webgl' || type === 'webgl2' || type === 'experimental-webgl') {
				return {
					canvas: document.createElement('canvas'),
					getExtension: () => null,
					getParameter: () => null,
					createShader: () => ({}),
					shaderSource: () => {},
					compileShader: () => {},
					createProgram: () => ({}),
					attachShader: () => {},
					linkProgram: () => {},
					useProgram: () => {},
					createBuffer: () => ({}),
					bindBuffer: () => {},
					bufferData: () => {},
					viewport: () => {},
					clearColor: () => {},
					clear: () => {},
					enable: () => {},
					disable: () => {},
					drawArrays: () => {},
					drawElements: () => {}
				};
			}

			return null;
		}
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
	globalThis.IntersectionObserver = IntersectionObserver as typeof globalThis.IntersectionObserver;
}

if (!globalThis.requestAnimationFrame) {
	globalThis.requestAnimationFrame = (cb: FrameRequestCallback) =>
		setTimeout(() => cb(performance.now()), 16) as unknown as number;
}

if (!globalThis.cancelAnimationFrame) {
	globalThis.cancelAnimationFrame = (id: number) => clearTimeout(id);
}
