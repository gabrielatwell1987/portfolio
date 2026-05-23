<script lang="ts">
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    let words = $state([
        { text: 'My', dataText: 'the', active: false, done: true },
        { text: 'name', dataText: 'end', active: false, done: true },
        { text: 'is', dataText: 'is', active: false, done: true },
        { text: 'gabe', dataText: 'near', active: false, done: true },
    ]);

    function handleMouseEnter(index: number) {
        words[index].active = true;
    }

    function handleMouseLeave(index: number) {
        words[index].active = false;
    }

    // gsap
    $effect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.title-intro',
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
            },
        });

        tl.from('.word', {
            y: 50,
            opacity: 0,
            scale: 0,
            stagger: 0.2,
            duration: 1,
            ease: 'circ.out',
        });

        return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
        };
    });
</script>

<section class="title-intro">
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
            {word.text}
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
            margin-right: 1rem;

            &::after {
                content: attr(data-text);
                position: absolute;
                inset: 0;
                display: grid;
                place-items: center;
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
                font-family:
                    Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
                font-family: var(--ultra);
                font-size: 2rem;
            }

            &:hover::after,
            &.active::after,
            &.done::after {
                content: attr(data-text);
                position: absolute;
                inset: 0;
                display: grid;
                place-items: center;
                color: var(--clr-fail-500);
                opacity: 0.6;
                transform: translateY(0);
            }
        }
    }
</style>
