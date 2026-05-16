let isDesktop = $state(false);
let initialized = false;

export function getBreakpoints() {
    if (!initialized && typeof window !== 'undefined') {
        const mediaQuery = window.matchMedia('(min-width: 768px)');
        isDesktop = mediaQuery.matches;

        const handler = (e: MediaQueryListEvent) => {
            isDesktop = e.matches;
        };

        mediaQuery.addEventListener('change', handler);
        initialized = true;
    }

    return {
        get isDesktop() {
            return isDesktop;
        },
    };
}
