import { sveltekit } from '@sveltejs/kit/vite'
import { svelteTesting } from '@testing-library/svelte/vite'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [sveltekit(), svelteTesting()],
    server: {
        https: false,
        port: 5173,
        host: 'localhost',
    },
    build: {
        sourcemap: process.env.NODE_ENV === 'development' ? true : false,
        chunkSizeWarningLimit: 750,
        rolldownOptions: {
            treeshake: true,
            output: {
                codeSplitting: {
                    groups: [
                        {
                            test: /[\\/]node_modules[\\/](svelte|@sveltejs)[\\/]/,
                            name: 'svelte',
                            enforce: true,
                        },
                        {
                            test: /[\\/]node_modules[\\/]three[\\/]/,
                            name: 'three',
                            enforce: true,
                        },
                        {
                            test: /[\\/]node_modules[\\/]gsap[\\/]/,
                            name: 'gsap',
                            enforce: true,
                        },
                    ],
                },
            },
        },
        minify: 'terser',
        cssCodeSplit: true,
    },
    test: {
        environment: 'jsdom',
        setupFiles: ['./vitest-setup.ts'],
    },
})
