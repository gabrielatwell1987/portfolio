export const componentImportMap: Record<
    string,
    () => Promise<{ default: any }>
> = {
    PictureParticles: () => import('$lib/threejs/cursor/CursorImage.svelte'),
    HeroCanvas: () => import('$lib/threejs/hero/HeroCanvas.svelte'),
    Environment: () => import('$lib/threejs/environment/Environment.svelte'),
    PostProcess: () =>
        import('$lib/threejs/post-processing/PostProcess.svelte'),
    Loader: () => import('$lib/threejs/loader/Loader.svelte'),
    slaynet: () => import('$lib/threejs/shooter/Slaynet.svelte'),
    killgrid: () => import('$lib/threejs/fps/Killgrid.svelte'),
    Carousel: () => import('$lib/threejs/image-carousel/ImageCarousel.svelte'),
};
