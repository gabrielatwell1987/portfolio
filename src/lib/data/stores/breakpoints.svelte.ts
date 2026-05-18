import { browser } from '$app/environment';

type Breakpoint = 'desktop' | 'laptop' | 'tablet' | 'mobile' | 'reduced';

let breakpoint = $state<Breakpoint>('desktop');
let initialized = false;

export function getBreakpoints() {
    if (!initialized && browser) {
        const queries = {
            mobile: window.matchMedia('(max-width: 767px)'),
            tablet: window.matchMedia(
                '(min-width: 768px) and (max-width: 1023px)',
            ),
            laptop: window.matchMedia(
                '(min-width: 1024px) and (max-width: 1279px)',
            ),
            desktop: window.matchMedia('(min-width: 1280px)'),
            reduced: window.matchMedia('(prefers-reduced-motion: reduce)'),
        } as const;

        const update = () => {
            if (queries.reduced.matches) breakpoint = 'reduced';
            else if (queries.mobile.matches) breakpoint = 'mobile';
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
        get isReduced() {
            return breakpoint === 'reduced';
        },
        get value() {
            return breakpoint;
        },
    };
}
