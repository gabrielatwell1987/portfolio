import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
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
				manualChunks: {
					vendor: ['svelte', 'three']
				}
			}
		},
		minify: 'terser',
		cssCodeSplit: true
	}
});
