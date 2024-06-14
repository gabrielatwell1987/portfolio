import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],

	server: {
		host: '192.168.0.83',
		port: 5273 // Optional: specify the port
	}
});
