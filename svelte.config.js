import { mdsvex } from 'mdsvex';

const mdsvexOptions = {
    extensions: ['.md', '.svx'],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.md', '.svx'],
    preprocess: [mdsvex(mdsvexOptions)],
};

export default config;
