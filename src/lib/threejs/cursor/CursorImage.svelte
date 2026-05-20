<script lang="ts">
    import { getBreakpoints } from '$lib/data/stores/breakpoints.svelte.js';
    import { setupCursorScene } from './threejs.svelte';

    let canvas = $state<HTMLCanvasElement | undefined>(undefined);
    const breakpoints = getBreakpoints();

    $effect(() => {
        if (!canvas) return;

        return setupCursorScene(canvas);
    });

    $effect(() => {
        const isLandscapeMobile =
            breakpoints.isLandscape && breakpoints.isMobile;
        const nav = document.querySelector('.navigation') as HTMLElement | null;
        const footer = document.querySelector('footer') as HTMLElement | null;
        const select = document.querySelector('.select') as HTMLElement | null;

        if (footer) footer.style.display = 'none';
        if (select) select.style.display = isLandscapeMobile ? 'none' : '';
        if (nav) nav.style.display = isLandscapeMobile ? 'none' : '';

        return () => {
            if (footer) footer.style.display = '';
            if (select) select.style.display = '';
            if (nav) nav.style.display = '';
        };
    });
</script>

<canvas bind:this={canvas} class="webgl"></canvas>

<style>
    .webgl {
        position: fixed;
        top: 0;
        left: 0;
        outline: none;
    }
</style>
