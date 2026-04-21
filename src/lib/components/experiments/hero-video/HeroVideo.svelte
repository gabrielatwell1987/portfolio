<script lang="ts">
    import { scale } from 'svelte/transition';
    interface Props {
        videoSrc?: string;
        title?: string;
        subtitle?: string;
        ctaText?: string;
    }

    let { videoSrc, title, subtitle, ctaText }: Props = $props();
    let videoElement;
    let isVideoLoaded = $state(false);

    function handleVideoLoad() {
        isVideoLoaded = true;
    }
</script>

<div class="hero-wrapper">
    <video
        src={videoSrc}
        bind:this={videoElement}
        onloadeddata={handleVideoLoad}
        autoplay
        muted
        loop
        playsinline
        class="hero-video"
    >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
    </video>

    <div class="overlay"></div>

    <div class="content">
        <h1 class="title">{title}</h1>
        <h3 class="subtitle">{subtitle}</h3>
        <button class="cta">{ctaText}</button>
    </div>
</div>

<style>
    .hero-wrapper {
        position: relative;
        inline-size: 80%;
        block-size: 90vh;
        margin-inline: auto;
        margin-block: 6.5% 0;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--clr-invert-fade);
        border: 2px solid var(--clr-main);
        border-radius: var(--radius);
        padding: 0.5em;

        & .hero-video {
            border-radius: 3%;
            inline-size: 30vw;
            block-size: 100%;
            object-fit: cover;
            opacity: 0;
            animation: fadeIn 1s ease-in-out forwards;
            padding-left: 1.75em;
            padding: 0;
        }

        & .overlay {
            position: absolute;
            top: 0;
            left: 0;
            inline-size: 100%;
            block-size: 100%;
            background: rgba(0, 0, 0, 0.4);
            z-index: 1;
        }

        & .content {
            position: relative;
            z-index: 2;
            color: var(--clr-main);

            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-areas:
                'title title title title'
                '. subtitle subtitle subtitle'
                '. cta cta .';
            gap: 1em;
            text-align: center;
            animation: slideUp 0.8s ease-out forwards;

            & .title {
                font-family: var(--mono);
                font-size: clamp(var(--h4), 3.5vw, var(--lg));
                font-weight: 800;
                grid-area: title;
                color: var(--clr-link);
                line-height: 1.2;
                letter-spacing: 1px;

                transform: scaleX(1.25);
                transition: transform 0.5s ease-out;

                &:hover {
                    transform: scaleX(1);
                }
            }

            & .subtitle {
                font-family: var(--bronova);
                font-size: clamp(var(--h6), 1.5vw, var(--h2));
                font-weight: 400;
                grid-area: subtitle;
                color: var(--clr-main-fade);
                line-height: 1.1;
            }

            & .cta {
                font-family: var(--bronova);
                font-size: clamp(var(--h6), 2vw, var(--h3));
                font-weight: 800;
                background-color: transparent;
                border: 4px solid var(--clr-main-fade);
                color: var(--clr-main-fade);
                grid-area: cta;
                line-height: 1;
                padding: 0.25em 0.15em;

                &:focus,
                &:focus-visible {
                    outline: none;
                    box-shadow: none;
                }

                &:hover {
                    color: var(--clr-dark-pale);
                    border-color: var(--clr-dark-pale);
                }
            }
        }
    }

    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }

    @keyframes slideUp {
        from {
            transform: translateY(30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
</style>
