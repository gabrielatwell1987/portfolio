type Breakpoint = 'desktop' | 'laptop' | 'tablet' | 'mobile';

// let isDesktop = $state(false);
let breakpoint = $state<Breakpoint>('desktop');
let initialized = false;

export function getBreakpoints() {
    if (!initialized && typeof window !== 'undefined') {
        const queries = {
            mobile: window.matchMedia('(max-width: 767px)'),
            tablet: window.matchMedia(
                '(min-width: 768px) and (max-width: 1023px)',
            ),
            laptop: window.matchMedia(
                '(min-width: 1024px) and (max-width: 1279px)',
            ),
            desktop: window.matchMedia('(min-width: 1280px)'),
        } as const;

        const update = () => {
            if (queries.mobile.matches) breakpoint = 'mobile';
            else if (queries.tablet.matches) breakpoint = 'tablet';
            else if (queries.laptop.matches) breakpoint = 'laptop';
            else breakpoint = 'desktop';
        };

        update();
        for (const query of Object.values(queries)) {
            query.addEventListener('change', update);
        }

        initialized = true;
    }

    return {
        get isMobile() {
            return breakpoint === 'mobile';
        },
        get isTablet() {
            return breakpoint === 'tablet';
        },
        get isLaptop() {
            return breakpoint === 'laptop';
        },
        get isDesktop() {
            return breakpoint === 'desktop';
        },
        get value() {
            return breakpoint;
        },
    };
}
