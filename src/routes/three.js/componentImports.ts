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
    'Shooting Game': () => import('$lib/threejs/shooter/GameScene.svelte'),
    FPS: () => import('$lib/threejs/fps/FirstPerson.svelte'),
};
