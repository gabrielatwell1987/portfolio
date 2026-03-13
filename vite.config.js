import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), svelteTesting()],
	server: {
		https: false,
		port: 5173,
		host: 'localhost'
	},
	build: {
		sourcemap: process.env.NODE_ENV === 'development' ? true : false,
		rollupOptions: {
			treeshake: true,
			output: {
				manualChunks: (id) => {
					if (id.includes('node_modules/svelte')) {
						return 'svelte';
					}
					if (id.includes('node_modules/three')) {
						return 'three';
					}
				}
			}
		},
		minify: 'terser',
		cssCodeSplit: true
	},
	test: {
		environment: 'jsdom',
		setupFiles: ['./vitest-setup.ts']
	}
});
