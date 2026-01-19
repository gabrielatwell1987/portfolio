import adapter from '@sveltejs/adapter-cloudflare';
// import adapter from '@sveltejs/adapter-vercel';
// import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		experimental: {
			remoteFunctions: true
		}
	},
	vitePlugin: {
		inspector: {
			toggleButtonPos: 'bottom-left',
			toggleKeyCombo: 'alt-x',
			showToggleButton: 'always'
		}
	},
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [mdsvex({ extensions: ['.md', '.svx'] })],
	prerender: { entries: ['/photos'] }
};

export default config;
