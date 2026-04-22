<script lang="ts">
    import gsap from 'gsap';
    import { GSDevTools } from 'gsap/GSDevTools';

    interface Props {
        videoSrc?: string;
        videos?: string[];
    }

    let { videoSrc = '', videos = [] }: Props = $props();
    let currentVideoIndex = $state(0);
    let activeVideoSrc = $state('');

    $effect(() => {
        activeVideoSrc = videoSrc;
    });

    function handleVideoSwitch() {
        if (videos.length > 0) {
            currentVideoIndex = (currentVideoIndex + 1) % videos.length;
            activeVideoSrc = videos[currentVideoIndex];
        }
    }

    // gsap
    $effect(() => {
        gsap.registerPlugin(GSDevTools);

        const textContent = document.querySelector('.text-content');
        const smartphone = document.querySelector('.smartphone');

        const tl = gsap.timeline();

        tl.fromTo(
            textContent,
            { opacity: 0, y: -75 },
            {
                opacity: 1,
                y: 0,
                duration: 2,
                ease: 'power2.out',
            },
            '-=0.5',
        ).fromTo(
            smartphone,
            { rotation: -360, yPercent: 100 },
            {
                rotation: 0,
                yPercent: 0,
                duration: 2.25,
                opacity: 1,
                ease: 'power2.out',
            },
            '<',
        );

        GSDevTools.create();
    });
</script>

<div class="all-content">
    <div class="smartphone">
        <div class="content">
            <video
                src={activeVideoSrc}
                autoplay
                muted
                loop
                playsinline
                style="inline-size: 100%; block-size: 100%; border: none; display: block;"
            ></video>
        </div>

        <button
            class="video-switch"
            onclick={handleVideoSwitch}
            aria-label="switch video"
        ></button>
    </div>

    <div class="text-content">
        <h2>responsive video</h2>

        <h3>perfect for smartphones</h3>

        <h4>click the button on the smartphone to change videos</h4>

        <button>learn more</button>
    </div>
</div>

<style>
    .all-content {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;
    }

    .smartphone {
        position: relative;
        inline-size: min(90vw, 360px);
        block-size: min(85vw, 640px);
        margin: auto;
        margin-top: 10em;
        border: clamp(8px, 4vw, 16px) solid var(--clr-main-fade);
        border-top-width: clamp(30px, 8vh, 60px);
        border-bottom-width: clamp(30px, 8vh, 60px);
        border-radius: clamp(20px, 5vw, 36px);
        opacity: 0;

        &::before {
            content: '';
            display: block;
            inline-size: clamp(40px, 10vw, 60px);
            block-size: clamp(3px, 0.5vh, 5px);
            position: absolute;
            top: -30px;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #333;
            border-radius: 10px;
        }

        & .content {
            inline-size: 100%;
            block-size: 100%;
            background: #fff;

            & video {
                inline-size: 100%;
                block-size: 100%;
                display: block;
                object-fit: cover;
            }
        }
    }

    .video-switch {
        inline-size: clamp(25px, 6vw, 35px);
        block-size: clamp(25px, 6vw, 35px);
        position: absolute;
        bottom: -85px;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #333;
        border-radius: 50%;
        cursor: pointer;
        padding: 0;
        transition: background 0.2s ease;

        &:hover {
            background: #555;
        }

        &:active {
            transform: translate(-50%, -50%) scale(0.95);
        }
    }

    .text-content {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(minmax(0, 1fr), 2);
        grid-template-areas:
            'title title'
            '. subtitle'
            'directions directions'
            'cta .';
        block-size: 30vh;
        gap: 1em;
        margin-right: 10vw;

        & h2 {
            font-family: var(--ultra);
            font-size: clamp(var(--h5), 4vw, var(--lg));
            margin: 0;
            padding: 0;
            grid-area: title;
            transform: scaleY(1.75);
            letter-spacing: 1px;

            color: var(--clr-invert);
            text-shadow:
                0 0 1px var(--clr-invert),
                -1px -1px 0 var(--clr-main),
                1px -1px 0 var(--clr-main),
                -1px 1px 0 var(--clr-main),
                1px 1px 0 var(--clr-main),
                -1px 0 0 var(--clr-main),
                1px 0 0 var(--clr-main),
                0 -1px 0 var(--clr-main),
                0 1px 0 var(--clr-main);
        }

        & h3 {
            font-family: var(--bronova);
            font-size: clamp(var(--sm), 1.2vw, var(--h4));
            font-weight: 300;
            margin: 0;
            padding: 0;
            grid-area: subtitle;
        }

        & h4 {
            font-family: var(--bronova);
            font-size: clamp(var(--xs), 1vw, var(--h5));
            font-weight: 100;
            margin: 0;
            margin-bottom: 3em;
            padding: 0;
            grid-area: directions;
        }

        & button {
            font-family: var(--mono);
            font-size: clamp(var(--sm), 1.25vw, var(--h2));
            border: 1px solid var(--clr-link);
            background: transparent;
            color: var(--clr-link);
            border-radius: var(--radius);
            cursor: pointer;
            margin: 0;
            margin-left: 2em;
            padding: 0.2em 0.4em;
            padding: clamp(0.2em, 1.2vw, 0.4em) clamp(0.4em, 2vw, 0.8em);
            inline-size: clamp(80px, 15vw, 200px);
            block-size: clamp(2em, 4vh, 3em);
            grid-area: cta;
            overflow: hidden;
            text-overflow: ellipsis;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>
