<script lang="ts">
    import gsap from 'gsap';
    import { SplitText } from 'gsap/SplitText';

    $effect(() => {
        const split = new SplitText('.intro h1', { type: 'chars' });
        const chars = split.chars;

        gsap.set(chars, {
            position: 'absolute',
            left: '50%',
            top: '50%',
            xPercent: -50,
            yPercent: -50,
            opacity: 0,
        });

        const tl = gsap.timeline();

        chars.forEach((char, i) => {
            tl.to(char, {
                opacity: 1,
                duration: 0.3,
                ease: 'circ.out',
            }).to(
                char,
                { opacity: 0, duration: 0.3, ease: 'circ.in' },
                '+=0.8',
            );
        });

        return () => {
            split.revert();
            tl.kill();
        };
    });
</script>

<section class="intro">
    <h1>atwell</h1>
</section>

<style>
    .intro {
        padding: 2rem;
        background-color: transparent;
        position: fixed;
        inline-size: 100%;
        block-size: 100vh;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & h1 {
            font-family: var(--ultra);
            font-size: clamp(5em, 70vw, 35em);
            margin-bottom: 1rem;
            position: relative;
            transform: scaleY(1.7);

            color: var(--clr-dark-500);
            text-shadow:
                0 0 5px var(--clr-fail-500),
                -5px -5px 0 var(--clr-fail-500),
                5px -5px 0 var(--clr-fail-500),
                -5px 5px 0 var(--clr-fail-500),
                5px 5px 0 var(--clr-fail-500),
                -5px 0 0 var(--clr-fail-500),
                5px 0 0 var(--clr-fail-500),
                0 -5px 0 var(--clr-fail-500),
                0 5px 0 var(--clr-fail-500);
        }
    }
</style>
