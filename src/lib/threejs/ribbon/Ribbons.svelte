<script lang="ts">
    import { setupRibbons } from './threejs.svelte';

    let canvas = $state<HTMLCanvasElement | undefined>(undefined);

    $effect(() => {
        if (!canvas) return;

        setupRibbons(canvas);
    });
</script>

<canvas
    bind:this={canvas}
    style="position: fixed; top: 0; left: 0; z-index: 0; width: 100vw; height: 100vh; background: var(--clr-dark-500);"
    aria-hidden="true"
></canvas>
