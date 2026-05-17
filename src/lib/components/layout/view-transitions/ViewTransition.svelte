<script lang="ts">
    import { getBreakpoints } from '$lib/data/utils/breakpoints.svelte';
    import { onNavigate } from '$app/navigation';

    const breakpoints = getBreakpoints();

    onNavigate((navigation) => {
        if (!document.startViewTransition) return;
        if (breakpoints.isReduced) return;

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
</script>

<style>
    @view-transition {
        navigation: auto;
    }

    ::view-transition-old(root),
    ::view-transition-new(root) {
        animation: none;
        mix-blend-mode: normal;
    }
</style>
