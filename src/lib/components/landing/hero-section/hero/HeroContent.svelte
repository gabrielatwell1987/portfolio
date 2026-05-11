<script lang="ts">
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import HeroButton from '../hero/HeroButton.svelte';
    import projects from '$lib/components/projects/projects.json';
    import ProjectsGrid from '../../ProjectsGrid.svelte';
    import HandDrawnUnderline from '../HandDrawnUnderline.svelte';

    const chars = 'Handcrafted Frontend Interfaces';
    let titleText = 'Handcrafted Frontend Interfaces';
    let titleWords = $derived(titleText.split(' '));
    let showContent = $state<boolean>(false);
    let displayedTitle = $state<string[]>(
        titleText.split('').map((char, index) => {
            const wordIndex = getWordIndexFromCharIndex(index);

            // keep Handcrafted as is, randomize the rest
            if (wordIndex === 0) {
                return char;
            }
            return char === ' ' ? ' ' : getRandomChar();
        }),
    );

    function getWordChars(wordIndex: number) {
        let charIndex = 0;
        for (let i = 0; i < wordIndex; i++) {
            charIndex += titleWords[i].length + 1;
        }
        return {
            start: charIndex,
            chars: displayedTitle.slice(
                charIndex,
                charIndex + titleWords[wordIndex].length,
            ),
        };
    }

    function getWordIndexFromCharIndex(index: number): number {
        let charCount = 0;
        for (let i = 0; i < titleWords.length; i++) {
            if (index < charCount + titleWords[i].length) {
                return i;
            }
            charCount += titleWords[i].length + 1;
        }
        return 0;
    }

    function getRandomChar() {
        return chars[Math.floor(Math.random() * chars.length)];
    }

    function animateTitle() {
        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches;

        if (prefersReducedMotion) {
            displayedTitle = titleText.split('');
            showContent = true;
            return;
        }

        // animation state for each character
        const animState = titleText.split('').map((char, index) => ({
            index,
            char,
            iterations: 0,
            shouldAnimate: char !== ' ' && getWordIndexFromCharIndex(index) > 0,
        }));

        const startTime = Date.now();
        const animationDuration = 5000;

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const isComplete = elapsed > animationDuration;

            let hasUpdates = false;

            animState.forEach((state) => {
                if (!state.shouldAnimate) return;

                const delay = state.index * 70;
                if (elapsed < delay) return;

                const timeSinceStart = elapsed - delay;
                const iterations = Math.floor(timeSinceStart / 175);

                if (iterations !== state.iterations) {
                    hasUpdates = true;
                    state.iterations = iterations;
                    displayedTitle[state.index] =
                        iterations >= 2 ? state.char : getRandomChar();
                }
            });

            if (hasUpdates) {
                displayedTitle = [...displayedTitle];
            }

            if (!isComplete) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
        setTimeout(() => (showContent = true), 1300);
    }

    $effect(() => {
        animateTitle();
    });

    // gsap
    $effect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.stats-section',
                start: 'top center+=375',
            },
        });

        tl.fromTo(
            '.stat-item.a',
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.35,
            },
            0,
        );

        tl.fromTo(
            '.stat-item.b',
            { scale: 1.5, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.5,
            },
            0,
        );

        tl.fromTo(
            '.stat-item.c',
            { x: 50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.5,
            },
            0,
        );

        return () => {
            tl.kill();
        };
    });
</script>

<section aria-label="Introduction and portfolio overview" class="hero-content">
    <header class="title-container">
        <h1 class="hero-title glitch">
            <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
            {#each titleWords as _, wordIndex}
                {@const wordData = getWordChars(wordIndex)}

                <span class="word">
                    {#each wordData.chars as char, charIndex}
                        <span
                            class="char"
                            style="--i: {wordData.start + charIndex}"
                            >{char}</span
                        >
                    {/each}

                    {#if wordIndex === 0}
                        <div class="underline-wrapper">
                            <HandDrawnUnderline width={100} height={50} />
                        </div>
                    {/if}
                </span>
            {/each}
        </h1>
    </header>

    <div class="content-wrapper" class:show={showContent} aria-live="polite">
        <p class="summary indent">
            I am a frontend developer who loves to create beautiful and
            functional websites. This website showcases my skills with some
            projects that I created. If you have any questions, feel free to
            contact me.. <br /><br /> I look forward to hearing from you so we can
            discuss your goals for your online needs!
        </p>

        <ProjectsGrid {projects} />

        <nav class="button-container" aria-label="Primary navigation">
            <HeroButton href="/projects" title="Creations" />
        </nav>

        <!-- stats -->
        <section aria-labelledby="stats-heading" class="stats-section">
            <h2 id="stats-heading" class="visually-hidden">
                Portfolio Statistics
            </h2>

            <dl class="stats-container">
                <div class="stat-item a">
                    <dt class="visually-hidden">Work approach</dt>
                    <dd class="stat-number" aria-label="One hundred percent">
                        100%
                    </dd>
                    <dt class="stat-label">Custom</dt>
                </div>

                <div class="stat-item b">
                    <dt class="visually-hidden">Project delivery timeframe</dt>
                    <dd class="stat-number" aria-label="Fast">Fast</dd>
                    <dt class="stat-label">Delivery</dt>
                </div>

                <div class="stat-item c">
                    <dt class="visually-hidden">Responsive design approach</dt>
                    <dd class="stat-number" aria-label="Fully responsive">
                        Fully
                    </dd>
                    <dt class="stat-label">Responsive</dt>
                </div>
            </dl>
        </section>
    </div>
</section>

<style>
    .hero-content {
        position: relative;
        z-index: 1;
        width: 100%;
        max-inline-size: 1200px;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        min-height: 80vh;

        @media (height <= 700px) {
            min-height: auto;
            padding: 1rem;
        }

        @media (width <= 768px) {
            padding: 1rem;
        }

        & .title-container {
            margin-bottom: 2rem;

            @media (height <= 700px) {
                margin-bottom: 1rem;
            }

            & .hero-title {
                font-family: var(--ultra);
                font-size: clamp(var(--h3), 7vw, var(--xxl));
                font-weight: 700;
                color: var(--clr-dark-500);
                text-shadow: 0 0 5px var(--clr-light-500);
                -webkit-text-stroke: 0.13rem var(--clr-light-400);
                line-height: 1;
                margin: 0;
                margin-bottom: 0.2em;
                word-wrap: normal;
                overflow-wrap: break-word;
                hyphens: none;
                display: flex;
                flex-direction: column;
                align-items: center;
                user-select: none;

                @media (height <= 768px) {
                    line-height: 1.1;
                    margin-bottom: 1em;
                    -webkit-text-stroke: 0.06rem var(--clr-light-400);
                    text-shadow: 0 0 2px var(--clr-light-500);
                }

                & .word:first-child {
                    font-family: var(--bronova-bold);
                    font-size: clamp(var(--h3), 5vw, var(--xl));
                    color: var(--clr-dark-500);
                    text-shadow: 0 0 5px var(--clr-light-500);
                    -webkit-text-stroke: 0.13rem var(--clr-light-500);
                    display: inline-block;

                    @media (width <= 768px) {
                        text-shadow: 0 0 2px var(--clr-light-500);
                        -webkit-text-stroke: 0.06rem var(--clr-light-500);
                    }
                }

                & .underline-wrapper {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-top: -1.5em;
                    margin-left: 0.75em;
                    margin-bottom: -0.5em;
                }

                & .word {
                    display: block;
                }

                & .char {
                    display: inline-block;
                }
            }
        }

        & .content-wrapper {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.15s ease-out;

            @media (prefers-reduced-motion: reduce) {
                transform: none;
                transition: opacity 0.3s ease-out;
            }

            &.show {
                opacity: 1;
                transform: translateY(0);

                @media (prefers-reduced-motion: reduce) {
                    transform: none;
                }
            }

            & .summary {
                font-family: var(--bronova);
                font-size: clamp(var(--sm), 1.25vw, var(--h3));
                font-weight: 300;
                text-align: start;
                letter-spacing: 1px;
                line-height: 1.6;
                color: var(--clr-light-500);
                inline-size: clamp(300px, 65vw, 1300px);
                margin: 0 auto 3rem auto;
                user-select: none;

                @media (width >= 990px) {
                    letter-spacing: 2px;
                }

                &.indent {
                    text-indent: 1em;
                }
            }

            & .button-container {
                display: flex;
                gap: 1.5rem;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                margin-bottom: 3rem;
            }

            & .stats-section {
                margin-top: 2rem;

                & .stats-container {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                    list-style: none;
                    margin: 0;
                    padding: 0;

                    & .stat-item {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 1rem;
                        background: var(--clr-dark-400);
                        border-radius: 12px;
                        backdrop-filter: blur(10px);
                        border: 2px solid var(--clr-gray-700);
                        transition: all 0.3s ease;

                        &.a {
                            opacity: 0;
                            transform: translateX(-50px);
                        }
                        &.b {
                            opacity: 0;
                            transform: scale(1.5);
                        }
                        &.c {
                            opacity: 0;
                            transform: translateX(50px);
                        }

                        @media (prefers-reduced-motion: reduce) {
                            transition: none;
                        }

                        &:hover,
                        &:focus-within {
                            transform: translateY(-5px);
                            background: var(--clr-dark-500);
                            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

                            @media (prefers-reduced-motion: reduce) {
                                transform: none;
                            }
                        }

                        & .stat-number {
                            font-family: var(--ultra);
                            font-size: clamp(var(--h6), 3vw, var(--h2));
                            color: var(--clr-dark-500);
                            text-shadow:
                                0 0 3px var(--clr-light-500),
                                0 0 4px var(--clr-light-500),
                                0 0 5px var(--clr-light-500);
                            margin: 0;
                        }

                        & .stat-label {
                            font-family: var(--bronova);
                            font-size: clamp(var(--sm), 2.75vw, var(--h3));
                            color: var(--clr-light-500);
                            text-transform: uppercase;
                            letter-spacing: 1px;
                            margin-top: 0.5rem;
                            margin-bottom: 0;
                            font-weight: 600;
                        }
                    }
                }
            }
        }
    }

    /* tablet & mobile */
    @media (width <= 768px) {
        .hero-content {
            & .content-wrapper {
                & .summary {
                    padding: 0 1rem;
                }

                & .stats-container {
                    gap: 1.5rem;

                    & .stat-item {
                        padding: 0.75rem;
                    }
                }
            }
        }
    }
</style>
