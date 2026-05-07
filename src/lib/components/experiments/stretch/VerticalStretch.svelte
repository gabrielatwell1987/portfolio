<script lang="ts">
    import HorizontalStretch from './HorizontalStretch.svelte';

    interface Props {
        firstWord: string;
        secondWord: string;
        contentTitle?: string;
        firstMessage?: string;
        secondMessage?: string;
        titleLetters?: string[];
    }

    let {
        firstWord,
        secondWord,
        contentTitle,
        firstMessage,
        secondMessage,
        titleLetters = [],
    }: Props = $props();

    // to use this component:
    // <VerticalStretch titleLetters={['G', 'A', 'B', 'E']} firstWord="..." secondWord="..." firstMessage="..." secondMessage="..." />
</script>

<div class="vertical-wrapper">
    <div class="vertical-stretch-bg">
        <span>{firstWord}</span>
        <span>{secondWord}</span>
    </div>

    <div class="vertical-content">
        <div class="content-title">
            <HorizontalStretch letters={titleLetters} />
        </div>

        <p class="content-message">{firstMessage}</p>

        <p class="content-message">{secondMessage}</p>
    </div>
</div>

<style>
    .vertical-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        inline-size: 100vw;
        block-size: 100vh;
        position: relative;
        overflow: hidden;
    }

    .vertical-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto auto auto;
        grid-template-areas:
            'title title title'
            'firstMessage . .'
            '. . secondMessage';
        gap: 2em;
        z-index: 1;
        position: relative;

        & .content-title {
            font-family: var(--ultra);
            font-size: 5.5vw;
            color: var(--clr-light-500);
            -webkit-text-stroke: 2px var(--clr-blue-350);

            grid-area: title;
        }

        & .content-message {
            font-family: var(--bronova-regular);
            font-size: 2vw;
            color: var(--clr-light-500);

            &:first-of-type {
                grid-area: firstMessage;
            }

            &:last-of-type {
                grid-area: secondMessage;
            }
        }
    }

    .vertical-stretch-bg {
        position: absolute;
        top: 0;
        left: 0;

        font-family: var(--bronova-bold);
        font-size: 7vw;
        font-weight: 900;
        color: var(--clr-light-400);
        text-transform: uppercase;
        letter-spacing: 1px;
        line-height: 0.6;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: perspective(1200px) rotateX(6deg);
        padding-top: 1.5em;
        opacity: 0.15;
        pointer-events: none;
        z-index: 0;
        inline-size: 100vw;
        block-size: 100vh;

        & span {
            position: relative;
            display: inline-block;
            padding: 0;
            margin: 0;
            transform: scaleY(10);
            text-shadow: 13px -1px 0 var(--clr-dark-400);

            &:first-of-type {
                margin-right: 1em;
            }

            @media (width <= 768px) {
                transform: scaleY(5);
            }
        }
    }

    @keyframes expandLine {
        0% {
            transform: scaleX(0.2);
            opacity: 0.2;
        }
        50% {
            transform: scaleX(1.25);
            opacity: 0.95;
        }
        100% {
            transform: scaleX(0.2);
            opacity: 0.2;
        }
    }

    @keyframes radiate {
        0% {
            transform: rotate(-12deg) scaleX(0.7);
        }
        100% {
            transform: rotate(12deg) scaleX(1.3);
        }
    }
</style>
