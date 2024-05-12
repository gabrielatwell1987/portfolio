import { defineConfig } from 'vite';
import { vitest } from 'vitest';

export default defineConfig({
	test: {
		watch: true,
		plugins: [vitest()]
	}
});
