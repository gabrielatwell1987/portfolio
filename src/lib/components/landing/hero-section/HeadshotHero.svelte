<script lang="ts">
    import gsap from 'gsap';
    import { SplitText } from 'gsap/SplitText';
    import { goto } from '$app/navigation';

    interface Props {
        title: String;
        cssBg?: boolean | number | 'random';
        text: string;
        cta: string;
        bgImage?: string;
    }

    let { title, cssBg = false, text, cta, bgImage }: Props = $props();
    let heroText = $state<HTMLElement | null>(null);
    let maskActive = $state(true);

    function handleClick() {
        goto('/projects');
    }

    function handleTextScroll() {
        if (!heroText) return;

        const { scrollTop, scrollHeight, clientHeight } = heroText;
        maskActive = scrollTop + clientHeight < scrollHeight - 5;
    }

    $effect(() => {
        gsap.registerPlugin(SplitText);

        const split = new SplitText('.hero-title', { type: 'chars' });

        const tl = gsap.timeline();

        tl.from(split.chars, {
            opacity: 0,
            scale: 0.5,
            stagger: {
                each: 0.05,
                from: 'random',
            },
            ease: 'power2.out',
        });

        tl.to(split.chars, {
            scaleY: 1.75,
        });
    });
</script>

<article role="banner" aria-label="hero section">
    <section class="hero-content" aria-label="hero content">
        <div class="bg-image-wrapper">
            <img class="bg-image" src={bgImage} alt="background headshot" />
        </div>

        <header class="title-wrapper">
            <h1 class="hero-title">{title}</h1>

            <p
                class="hero-text"
                class:masked={maskActive}
                bind:this={heroText}
                onscroll={handleTextScroll}
            >
                {text}
            </p>

            <button class="hero-cta" onclick={handleClick}>{cta}</button>
        </header>
    </section>
</article>

<style>
    article {
        box-shadow: none;
        background: transparent;
        min-block-size: 100vh;
        inline-size: 100%;
        margin-top: 6em;
        padding: 0;

        min-block-size: 100vh;
        inline-size: 100%;

        & .hero-content {
            opacity: 1;
            position: relative;
            min-block-size: 100vh;

            & .bg-image-wrapper {
                position: absolute;
                inset: 0;
                z-index: 0;
                overflow: hidden;

                &::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    inline-size: 100%;
                    block-size: 50%;
                    background: linear-gradient(
                        to bottom,
                        transparent 0%,
                        var(--clr-dark-500) 75%
                    );
                    pointer-events: none;
                }
            }

            & .bg-image {
                inline-size: 100%;
                block-size: auto;

                object-fit: contain;
                object-position: left;
                opacity: 0.25;

                @media (width <= 768px) {
                    margin-top: 5em;
                    transform: scaleY(1.75);
                }
            }

            & .title-wrapper {
                position: relative;
                z-index: 1;
                min-block-size: 100vh;

                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-template-areas:
                    '. title title title'
                    '. . text text'
                    '. . cta .';
                align-items: center;

                & .hero-title {
                    font-family: var(--mono);
                    font-size: clamp(var(--h4), 5vw, var(--xl));
                    font-weight: 700;
                    line-height: 1.1;
                    grid-area: title;
                    color: var(--clr-warning-500);
                    transform: scaleX(1.2) scaleY(1.75);

                    @media (width <= 768px) {
                        margin-bottom: 5in;
                        transform: scaleX(1) scaleY(1.25);
                    }
                }

                & .hero-text {
                    text-align: left;
                    font-family: var(--bronova);
                    font-size: clamp(var(--sm), 1.5vw, var(--h3));
                    color: var(--clr-gray-600);
                    padding-right: 1em;

                    position: absolute;
                    left: 45%;

                    @media (width <= 500px) {
                        top: 3em;
                        overflow-y: auto;
                        block-size: 30ch;

                        &.masked {
                            mask-image: linear-gradient(
                                to bottom,
                                black 79%,
                                transparent 100%
                            );
                        }
                    }
                }

                & .hero-cta {
                    background-color: transparent;
                    border: 2px solid var(--clr-blue-350);
                    color: var(--clr-blue-350);
                    grid-area: cta;

                    font-family: var(--bronova-bold);
                    font-size: clamp(var(--sm), 1.5vw, var(--h5));
                    inline-size: fit-content;
                    z-index: 2;

                    @media (width <= 768px) {
                        margin-top: -12em;
                        min-inline-size: 7.5em;
                    }
                }
            }
        }
    }
</style>
