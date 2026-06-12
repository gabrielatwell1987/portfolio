import { describe, it, expect } from 'vitest';
import { setupPostProcess } from '../../threejs/post-processing/threejs.svelte';

describe('PostProcess setup', () => {
    it('returns a cleanup function', () => {
        const canvas = document.createElement('canvas');
        const cleanup = setupPostProcess(canvas);
        expect(cleanup).toBeInstanceOf(Function);
    });

    it('creates a renderer on the canvas', () => {
        const canvas = document.createElement('canvas');
        setupPostProcess(canvas);
        expect(canvas.width).toBeGreaterThan(0);
    });

    it('cleanup can be called without throwing', () => {
        const canvas = document.createElement('canvas');
        const cleanup = setupPostProcess(canvas);
        expect(() => cleanup()).not.toThrow();
    });
});
