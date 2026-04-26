<script lang="ts">
    import { goto } from '$app/navigation';

    interface Props {
        title: String;
        cssBg?: boolean | number | 'random';
        text: string;
        cta: string;
    }

    let { title, cssBg = false, text, cta }: Props = $props();

    function handleClick() {
        goto('/projects');
    }
</script>

<div class="bg-image">
    <img
        src="https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/headshot-noBG_a.webp"
        alt="background headshot"
    />
</div>

<article role="banner" aria-label="hero section">
    <section class="hero-content" aria-label="hero content">
        <header class="title-wrapper">
            <h1 class="hero-title">{title}</h1>

            <p class="hero-text">{text}</p>

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

        & .hero-content {
            opacity: 1;

            & .title-wrapper {
                display: grid;
                grid-template-columns: repeat(4, 1fr);

                grid-template-areas:
                    'title title title title'
                    '. . text text'
                    '. . cta .';

                & .hero-title {
                    font-family: var(--mono);
                    font-size: clamp(var(--h4), 5vw, var(--xl));
                    line-height: 1.1;
                    grid-area: title;
                }

                & .hero-text {
                    grid-area: text;
                    text-align: left;

                    font-family: var(--bronova);
                    font-size: clamp(var(--h6), 1.5vw, var(--h4));
                }

                & .hero-cta {
                    background-color: transparent;
                    border: 2px solid var(--clr-link);
                    color: var(--clr-link);
                    grid-area: cta;

                    font-family: var(--bronova-bold);
                    font-size: clamp(var(--sm), 1.5vw, var(--h5));
                    inline-size: fit-content;
                    z-index: 2;
                }
            }
        }
    }

    .bg-image {
        position: absolute;
        top: 2em;
        left: 0;
        inline-size: 100%;
        block-size: 100%;
        overflow: hidden;
        z-index: 0;

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
                var(--clr-invert) 75%
            );
            pointer-events: none;
        }

        & img {
            inline-size: 100%;
            block-size: 100%;
            object-fit: contain;
            object-position: left;
            opacity: 0.25;
        }
    }
</style>
