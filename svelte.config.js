import adapter from '@sveltejs/adapter-cloudflare';
// import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			routes: {
				include: ['/three.js'],
				exclude: [
					'/_app/*',
					'/.well-known/*',
					'/favicon.*',
					'/fonts/*',
					'/manifest.json',
					'/robots.txt',
					'/service-worker.js',
					'/sitemap.xml',
					'/threejayess/*'
				]
			}
		}),
		experimental: {
			remoteFunctions: true
		},
		prerender: {
			handleHttpError: ({ status, path, referrer, message }) => {
				// Suppress 404 errors
				if (status === 404) {
					console.warn(`Prerendering warning: ${status} ${path} (linked from ${referrer})`);
					return;
				}
				// for other errors, throw to fail the build
				throw new Error(message);
			}
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
