<script lang="ts">
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    let words = $state([
        { text: 'My', dataText: 'the', active: false, done: true },
        { text: 'name', dataText: 'end', active: false, done: true },
        { text: 'is', dataText: 'is', active: false, done: true },
        { text: 'gabe', dataText: 'near', active: false, done: true },
    ]);
    let introElement: HTMLElement | undefined = $state();

    function handleMouseEnter(index: number) {
        words[index].active = true;
    }

    function handleMouseLeave(index: number) {
        words[index].active = false;
    }

    // gsap
    $effect(() => {
        const intro = introElement;
        if (!intro) return;

        const wordInners = intro.querySelectorAll<HTMLElement>('.word-inner');
        const subWords = document.querySelectorAll<HTMLElement>('.sub-word');

        if (!wordInners.length) return;

        gsap.registerPlugin(ScrollTrigger);

        gsap.set(wordInners, { y: 50, scale: 0, opacity: 0 });
        gsap.set(subWords, { '--sub-scale': 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: intro,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
            },
        });

        tl.to(wordInners, {
            y: 0,
            scale: 1,
            opacity: 1,
            stagger: 0.2,
            duration: 2,
            ease: 'circ.out',
        });

        tl.to(
            subWords,
            {
                '--sub-scale': 1,
                duration: 3,
                ease: 'power3.out',
            },
            0,
        );

        return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
        };
    });
</script>

<section class="title-intro" bind:this={introElement}>
    {#each words as word, i (i)}
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
            class="word"
            class:active={word.active}
            class:done={word.done}
            data-text={word.dataText}
            onmouseenter={() => handleMouseEnter(i)}
            onmouseleave={() => handleMouseLeave(i)}
        >
            <span class="word-inner">{word.text}</span>
            <span class="sub-word" aria-hidden="true">{word.dataText}</span>
        </div>
    {/each}
</section>

<style>
    .title-intro {
        line-height: 0.88;
        letter-spacing: -0.045em;
        font-weight: 700;
        text-transform: uppercase;
        color: var(--clr-light-500);
        margin-top: clamp(3em, 8.5vw, 10.5em);
        block-size: 150vh;

        & .word {
            display: inline-block;
            position: relative;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
            font-family: var(--thunder);
            font-size: clamp(4.5rem, 11vw, 9.5rem);
            font-size: 20vw;
            font-weight: 800;
            transform: scaleY(1.3);
            margin-right: clamp(1rem, 1.5vw, 5rem);

            & .word-inner {
                display: inline-block;
            }

            & .sub-word {
                -webkit-text-stroke: 2px var(--clr-light-350);
                position: absolute;
                inset: 0;
                display: grid;
                place-items: center;
                color: var(--clr-fail-500);
                opacity: 0.6;
                transform: translateY(20px) scale(var(--sub-scale, 0));
                transition: transform 0.75s cubic-bezier(0.23, 1, 0.32, 1);
                font-family: var(--ultra);
                font-size: 4vw;
                pointer-events: none;
                transform-origin: center;
            }

            &:hover .sub-word,
            &.active .sub-word,
            &.done .sub-word {
                transform: translateY(0) scale(var(--sub-scale, 1));
            }
        }
    }
</style>
