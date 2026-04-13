<script lang="ts">
    interface Props {
        text: string;
        span: string;
    }

    let { text, span }: Props = $props();

    let mounted = $state<boolean>(false);
    let chars = $state<string[]>([]);
    let dynamicAriaLabel = $derived(`${text} ${span}`);

    $effect(() => {
        chars = span.split('');
        mounted = true;
    });
</script>

<section class="animated-text" aria-label={dynamicAriaLabel}>
    <h1 class="sentence" class:animate={mounted}>
        <span class="subtitle">{text}</span>

        <a href="/three.js"
            ><span class="bigWord">
                {#each chars as char, i}
                    <span class="char" style="--delay: {0.05 + i * 0.5}s"
                        >{char}</span
                    >
                {/each}
            </span></a
        >
    </h1>
</section>

<style>
    .animated-text {
        padding-top: 10em;
        user-select: none;

        @media (width <= 768px) {
            margin-top: -15%;
        }

        .sentence {
            font-family: var(--bronova);
            font-size: clamp(1.25rem, 2.25vw, 10rem);
            font-weight: 100;
            text-align: center;
            margin: 0;
            padding: 2rem;
            transform: translateY(100%);
            opacity: 0;
            transition:
                transform 1.25s ease-out,
                opacity 1.25s ease-out;
            transition-delay: 1s;

            @media (width <= 768px) {
                margin-top: 7%;
                opacity: 0.8;
            }

            &.animate {
                transform: translateY(0);
                opacity: 1;
            }

            .bigWord {
                inline-size: 100%;
                font-family: var(--ultra);
                font-size: clamp(var(--h4), 12vw + 0.25em, 20rem);
                text-wrap: none;
                display: block;
                letter-spacing: 1px;
                line-height: 1.2;

                color: var(--clr-invert);
                text-shadow:
                    0 0 5px var(--clr-main),
                    0 0 6px var(--clr-main),
                    0 0 7px var(--clr-main);

                @media (width <= 768px) {
                    text-shadow:
                        0 0 2px var(--clr-invert),
                        0 0 3px var(--clr-main-fade),
                        0 0 3px var(--clr-main-fade),
                        0 0 3px var(--clr-main-fade),
                        0 0 3px var(--clr-main-fade),
                        0 0 3px var(--clr-main-fade);
                }

                @media (width <= 768px) {
                    margin-top: 2%;
                }

                .char {
                    display: inline-block;
                    transform: translateX(150%);
                    opacity: 0;
                    animation: charAnimation 3s
                        cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
                    animation-delay: calc(var(--delay) + 2.25s);
                }
            }

            & .subtitle {
                opacity: 0.8;
                font-family: var(--bronova);
                font-weight: 300;
                color: oklch(from var(--clr-main) 0.7 c h);
            }
        }
    }

    .sentence,
    .bigWord {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    @keyframes charAnimation {
        0% {
            transform: translateX(150%);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes drop {
        0% {
            transform: translateY(-100%);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
</style>
