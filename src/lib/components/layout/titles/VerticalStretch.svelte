<script lang="ts">
    interface Props {
        title1: string;
        title2: string;
        letter: string;
    }

    let { title1, title2, letter }: Props = $props();
</script>

<div class="vertical-stretch">
    <span>{title1}</span>
    <span class="highlight">{letter}</span>
    <span>{title2}</span>
</div>

<style>
    .vertical-stretch {
        position: relative;
        font-family: var(--bronova-bold);
        font-size: 7vw;
        font-weight: 900;
        color: var(--clr-main-fade);
        text-transform: uppercase;
        letter-spacing: 1px;
        line-height: 0.6;
        user-select: none;
        display: flex;
        transform: perspective(1200px) rotateX(6deg);
        padding-top: 1.5em;

        & span {
            position: relative;
            display: inline-block;
            padding: 0;
            margin: 0;
            transform: scaleY(8);
            text-shadow: 13px -1px 0 var(--clr-invert-fade);

            @media (width <= 768px) {
                transform: scaleY(5);
            }

            &.highlight {
                color: var(--clr-blue);
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
