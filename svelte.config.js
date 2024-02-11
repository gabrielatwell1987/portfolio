import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()

		// vite: {
		// 	optimizeDeps: {
		// 		include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
		// 	}
		// }
	},
	vitePlugin: {
		inspector: true
	},
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		mdsvex({
			extensions: ['.md', '.svx']
		})
	]
};

export default config;
