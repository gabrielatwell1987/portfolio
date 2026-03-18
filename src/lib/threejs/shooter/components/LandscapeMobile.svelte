<script lang="ts">
    interface Props {
        isMobile: boolean;
        onPause: () => void;
        onResume: () => void;
    }

    let {
        isMobile = false,
        onPause = () => {},
        onResume = () => {},
    }: Props = $props();
    let showing = $state(false);
    let orientationListener: (() => void) | null = null;

    const abortController = new AbortController();

    const hiddenSelects: HTMLElement[] = [];
    let navHidden = false;
    let footerHidden = false;
    let wasShowing = $state(false);

    $effect(() => {
        showing = isMobile && window.innerHeight > window.innerWidth;
    });

    // notify parent when overlay becomes visible/hidden so the game can pause/resume
    $effect(() => {
        if (showing && !wasShowing) {
            try {
                onPause();
            } catch {}
            wasShowing = true;
        } else if (!showing && wasShowing) {
            try {
                onResume();
            } catch {}
            wasShowing = false;
        }
    });

    // request fullscreen and lock orientation (best-effort)
    async function enterFullscreenAndLock() {
        try {
            const el: any = document.documentElement;
            if (!document.fullscreenElement && el.requestFullscreen) {
                await el.requestFullscreen();
            }
        } catch (e) {
            // ignore — many browsers require a user gesture
        }

        try {
            if ((screen as any).orientation?.lock) {
                await (screen as any).orientation.lock('landscape');
            }
        } catch (e) {
            // ignore
        }
    }

    async function exitFullscreenAndUnlock() {
        try {
            if (document.fullscreenElement && document.exitFullscreen) {
                await document.exitFullscreen();
            }
        } catch (e) {
            // ignore
        }
        try {
            if ((screen as any).orientation?.unlock) {
                (screen as any).orientation.unlock();
            }
        } catch (e) {
            // ignore
        }
    }

    function tryLockLandscape() {
        enterFullscreenAndLock();
        showing = false;
    }

    // listen for orientation/resize and toggle UI elements/scale joystick
    $effect(() => {
        // update UI based on current orientation
        function updateForOrientation() {
            const isPortrait = window.innerHeight > window.innerWidth;
            const isLandscape = !isPortrait;

            const overlay = document.querySelector(
                '.rotate-overlay',
            ) as HTMLElement | null;
            const nav = document.querySelector('nav') as HTMLElement | null;
            const footer = document.querySelector(
                'footer',
            ) as HTMLElement | null;
            const joystick = document.querySelector(
                '.mobile-joystick',
            ) as HTMLElement | null;

            // ensure overlay hidden once device is rotated to landscape
            if (isLandscape && isMobile) {
                showing = false;
                // if (overlay) overlay.remove();

                if (nav) {
                    nav.style.display = 'none';
                    navHidden = true;
                }
                if (footer) {
                    footer.style.display = 'none';
                    footerHidden = true;
                }

                if (joystick) joystick.classList.add('compact');

                // hide select and route UI elements that may show browser-native pickers / UI in the page
                const selectors = Array.from(
                    document.querySelectorAll<HTMLElement>(
                        'select, .route-select, [data-route-select]',
                    ),
                );
                for (const el of selectors) {
                    // avoid re-adding same element
                    if (!hiddenSelects.includes(el)) {
                        // store and hide
                        hiddenSelects.push(el);
                        el.style.display = 'none';
                    }
                }

                // try to enter fullscreen and lock orientation (best-effort)
                void enterFullscreenAndLock();

                return;
            }

            // portrait (or not mobile) — restore defaults
            showing = isMobile && isPortrait;

            if (nav && navHidden) {
                nav.style.display = '';
                navHidden = false;
            }
            if (footer && footerHidden) {
                footer.style.display = '';
                footerHidden = false;
            }
            if (joystick) joystick.classList.remove('compact');

            // restore any hidden selects
            while (hiddenSelects.length) {
                const el = hiddenSelects.pop();
                if (el) el.style.display = '';
            }

            // exit fullscreen when leaving landscape
            void exitFullscreenAndUnlock();
        }

        updateForOrientation();

        // listen to orientation changes and resize (some browsers fire resize)
        window.addEventListener('orientationchange', updateForOrientation, {
            signal: abortController.signal,
        });
        window.addEventListener('resize', updateForOrientation, {
            signal: abortController.signal,
        });

        if ((screen as any).orientation?.addEventListener) {
            orientationListener = updateForOrientation;
            (screen as any).orientation.addEventListener(
                'change',
                orientationListener,
            );
        }

        return () => {
            abortController.abort();

            if (
                orientationListener &&
                (screen as any).orientation?.removeEventListener
            ) {
                (screen as any).orientation.removeEventListener(
                    'change',
                    orientationListener,
                );
                orientationListener = null;
            }

            // restore nav/footer when component unmounts
            const nav = document.querySelector('nav') as HTMLElement | null;
            const footer = document.querySelector(
                'footer',
            ) as HTMLElement | null;

            if (nav) nav.style.display = '';
            if (footer) footer.style.display = '';

            // restore selects and exit fullscreen
            while (hiddenSelects.length) {
                const el = hiddenSelects.pop();
                if (el) el.style.display = '';
            }
            void exitFullscreenAndUnlock();

            try {
                onResume();
            } catch {}
        };
    });
</script>

{#if showing}
    <div class="rotate-overlay" role="dialog" aria-modal="true">
        <div class="rotate-card">
            <h3>Rotate your device</h3>
            <p>
                Please rotate your device to landscape mode for the best
                experience.
            </p>

            <div
                style="margin-top:0.5rem;display:flex;gap:0.5rem;justify-content:center"
            >
                <button
                    onclick={tryLockLandscape}
                    style="padding:0.45rem 0.75rem;border-radius:6px;background:var(--clr-invert-fade);color:var(--clr-main);border:0"
                >
                    Rotate Device
                </button>
                <button
                    onclick={() => (showing = false)}
                    style="padding:0.45rem 0.75rem;border-radius:6px;background:transparent;color:var(--clr-main);border:1px solid rgba(255,255,255,0.12)"
                >
                    Continue anyway
                </button>
            </div>
        </div>
    </div>
{/if}

<style>
    :global(.mobile-joystick.compact) {
        transform-origin: left bottom;
        transform: scale(0.7);
        opacity: 0.95;
        transition: transform 160ms ease;
    }

    :global(.mobile-joystick.compact .joystick-base) {
        width: 84px;
        height: 84px;
    }

    :global(.mobile-joystick.compact .joystick-stick) {
        width: 38px;
        height: 38px;
    }

    .rotate-overlay {
        position: fixed;
        inset: 0;
        display: grid;
        place-items: center;
        background: var(--clr-invert-fade);
        z-index: 100;

        & .rotate-card {
            background: #111;
            color: var(--clr-main);
            padding: 0.5em 0.75em;
            border-radius: var(--radius);
            text-align: center;
            inline-size: min(90%, 360px);
        }
    }
</style>
