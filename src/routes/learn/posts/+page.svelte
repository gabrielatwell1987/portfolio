<script lang="ts">
    import CSS from './css.md';
    import GSAP from './gsap.md';
    import SEO from '$lib/data/SEO.svelte';
    import Card from '$lib/components/learn/Card.svelte';
    import TableOfContents from '$lib/components/learn/TableOfContents.svelte';
    import GabeMorph from '$lib/components/learn/GabeMorph.svelte';
    import BackToTop from '$lib/components/learn/BackToTop.svelte';
    import ViewTransitionImage from '$lib/components/layout/view-transitions/ViewTransitionImage.svelte';
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import Popover from '$lib/components/layout/Popover.svelte';

    import hljs from 'highlight.js/lib/core';
    import javascript from 'highlight.js/lib/languages/javascript';
    import css from 'highlight.js/lib/languages/css';
    import html from 'highlight.js/lib/languages/xml';
    import 'highlight.js/styles/atom-one-dark.css';
    import { tick } from 'svelte';
    import CopyButton from '$lib/components/learn/CopyButton.svelte';

    hljs.registerLanguage('js', javascript);
    hljs.registerLanguage('css', css);
    hljs.registerLanguage('html', html);
    hljs.registerLanguage('xml', html);
    let postHtml = $state<string>('');
    let sanitizeHtml = $state<string>('');

    let mounted = $state<boolean>(false);
    let prefersReducedMotion = $state<boolean>(false);
    let isMobile = $state<boolean>(false);

    // mobile check
    $effect(() => {
        const abortController = new AbortController();
        const mediaQuery = window.matchMedia('(max-width: 768px)');

        const handleChange = (e: MediaQueryListEvent) => {
            isMobile = e.matches;
        };

        isMobile = mediaQuery.matches;
        mediaQuery.addEventListener('change', handleChange, {
            signal: abortController.signal,
        });

        return () => {
            abortController.abort();
        };
    });

    $effect(() => {
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                mounted = true;
            });
        } else {
            mounted = true;
        }
    });

    // prefers-reduced-motion check
    $effect(() => {
        const abortController = new AbortController();
        const media = window.matchMedia('(prefers-reduced-motion: reduce)');
        const update = () => (prefersReducedMotion = media.matches);
        update();
        media.addEventListener('change', update, {
            signal: abortController.signal,
        });

        return () => abortController.abort();
    });

    // gsap
    $effect(() => {
        if (!mounted) return;
        if (prefersReducedMotion) return;

        gsap.registerPlugin(ScrollTrigger);

        const paragraphs = document.querySelectorAll('.content p');
        const codeBlocks = document.querySelectorAll('pre');

        codeBlocks.forEach((pre) => {
            const code = pre.querySelector('code');
            const targets = code ? [pre, code] : pre;

            gsap.fromTo(
                targets,
                {
                    x: 100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    overflow: 'hidden',
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: pre,
                        start: 'top center+=450',
                    },
                },
            );
        });

        paragraphs.forEach((para) => {
            gsap.fromTo(
                para,
                {
                    x: -100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: para,
                        start: 'top center+=450',
                    },
                },
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    });

    // highlight.js
    $effect(() => {
        async function highlight() {
            postHtml;
            if (typeof window === 'undefined') {
                sanitizeHtml = '';
                return;
            }

            // dynamic import of dompurify
            const { default: DOMPurify } = await import('dompurify');
            // mitigate XSS risk
            DOMPurify.addHook('uponSanitizeAttribute', (node, data) => {
                if (data && data.attrName && data.attrName.startsWith('on')) {
                    data.keepAttr = false;
                }
            });
            // sanitize the HTML content
            sanitizeHtml = DOMPurify.sanitize(postHtml, {
                USE_PROFILES: { html: true },
            });

            await tick();
            const codeBlocks = Array.from(
                document.querySelectorAll('pre code'),
            ) as HTMLElement[];
            codeBlocks.forEach((element) => {
                // get raw text (escapes any embedded HTML)
                const raw = element.textContent ?? element.innerText ?? '';
                element.textContent = raw;
                hljs.highlightElement(element);
            });
        }
        highlight();
    });
</script>

<svelte:head>
    <meta name="view-transition" content="same-origin" />
</svelte:head>

<SEO
    title="Web Animation Techniques"
    description="Web techniques"
    keywords="animation techniques, web techniques for animation"
    type="article"
/>

<section class="table-and-logo" id="top">
    <div class="popover-morph">
        <GabeMorph />

        {#if !isMobile}
            <Popover
                title=""
                text="click the arrow button on the left to open the table of contents."
            />
        {/if}
    </div>

    <TableOfContents sideBar={true} />
</section>

<article class="code-blocks">
    {@html sanitizeHtml}
</article>

<!-- for pre/code blocks -->
<CopyButton />

<section class="topics" class:mounted>
    <div class="css">
        <div class="tech-stack-logo">
            <ViewTransitionImage
                src="https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/CSS-Purple.webp"
                alt="new css logo"
                transitionName="css-image"
            />

            <CSS aria-label="css" />
        </div>
    </div>

    <div class="gsap">
        <ViewTransitionImage
            src="https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/GSAP-Dark.svg"
            alt="greensock animation platform"
            transitionName="gsap-image"
        />

        <GSAP aria-label="greensock" />
    </div>

    <article class="developer-card">
        <Card
            src="https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/blueTriangle.webp"
            alt="a logo that says atwell developer"
            href="/projects"
            title="web design + development"
            desc="Trying to make the internet look better.. one website at a time."
            button="Projects"
        />
    </article>

    <div class="top-button">
        <BackToTop />
    </div>
</section>

<style>
    .table-and-logo {
        padding-top: 5em;

        & .popover-morph {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2em;

            @media (width <= 768px) {
                flex-direction: column;
                gap: 0;
            }
        }
    }

    .code-blocks {
        background: transparent;
        box-shadow: none;
    }

    .topics {
        margin: 0;

        &.mounted {
            opacity: 1;
            scale: 1;
        }

        & .top-button {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0;
            margin: 0;

            & :global(.back-button) {
                margin-top: 1em;
                margin-bottom: 0;
            }

            @media (width <= 500px) {
                gap: 1em;
                margin-top: 3em;
            }
        }

        & .developer-card {
            display: flex;
            justify-content: center;
            background: transparent;
            box-shadow: none;
        }

        & .gsap {
            position: relative;
            contain: layout;
        }
    }

    :global(::view-transition-old(css-image)),
    :global(::view-transition-new(css-image)),
    :global(::view-transition-old(gsap-image)),
    :global(::view-transition-new(gsap-image)) {
        animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }

    :global(::view-transition-old(css-image)),
    :global(::view-transition-old(gsap-image)) {
        animation: scale-down 0.25s ease forwards;
    }

    :global(::view-transition-new(css-image)),
    :global(::view-transition-new(gsap-image)) {
        animation: scale-up 0.25s ease forwards;
    }
</style>
