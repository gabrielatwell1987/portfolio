import adapter from '@sveltejs/adapter-cloudflare';
import { mdsvex } from 'mdsvex';
import rehypePrettyCode from 'rehype-pretty-code';

const mdsvexOptions = {
    extensions: ['.md', '.svx'],
    rehypePlugins: [
        [
            rehypePrettyCode,
            {
                theme: {
                    dark: 'github-dark',
                    light: 'github-light',
                },
                defaultLang: {
                    block: 'plaintext',
                    inline: 'plaintext',
                },
            },
        ],
    ],
};

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
                    '/threejayess/*',
                ],
            },
        }),
        experimental: {
            remoteFunctions: true,
        },
        prerender: {
            handleHttpError: ({ status, path, referrer, message }) => {
                // Suppress 404 errors
                if (status === 404) {
                    console.warn(
                        `Prerendering warning: ${status} ${path} (linked from ${referrer})`,
                    );
                    return;
                }
                // for other errors, throw to fail the build
                throw new Error(message);
            },
            concurrency: 10,
            entries: [
                '/photos',
                '/contact/success',
                '/learn/greensock',
                '/learn/sveltekit',
                '/learn/posts',
            ],
        },
    },
    vitePlugin: {
        inspector: {
            toggleButtonPos: 'bottom-left',
            toggleKeyCombo: 'alt-x',
            showToggleButton: 'always',
        },
    },
    extensions: ['.svelte', '.md', '.svx'],
    preprocess: [mdsvex(mdsvexOptions)],
};

export default config;
