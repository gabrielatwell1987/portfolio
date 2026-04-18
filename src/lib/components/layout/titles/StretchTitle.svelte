<script lang="ts">
    let { letters = [] } = $props();

    function hoverStretch(event: MouseEvent) {
        const spans = (event.currentTarget as HTMLElement).querySelectorAll(
            'span',
        );
        spans.forEach((span, index) => {
            span.style.animation = `stretch 2s cubic-bezier(0.68, -0.55, 0.27, 1.55) ${index * 0.1}s forwards`;
        });
    }

    // to use this component:
    // <StretchWord letters={['G', 'A', 'B', 'E']} />
</script>

<div class="stretch-text">
    <h1>
        {#each letters as letter, index}
            <span>{letter}</span>
        {:else}
            {letters}
        {/each}
    </h1>
</div>

<style>
    .stretch-text {
        display: flex;
        justify-content: center;
        z-index: 120;

        *:hover span:nth-child(2) {
            transform: scaleX(1.8);
            margin-inline: 0.5em;
        }

        & h1 {
            font-family: var(--ultra);
            font-size: clamp(var(--h4), 50vw, var(--xxxxl));
            font-weight: bold;
            color: var(--clr-invert-fade);
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
            margin: 0;
            padding: 0;

            & span {
                display: inline-block;
                transition:
                    transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55),
                    margin-inline 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
                transform-origin: center bottom;
            }
        }
    }

    @keyframes stretch {
        0% {
            transform: scaleX(1);
        }
        50% {
            transform: scaleX(1.8);
            margin-inline: 0.5em;
        }
        100% {
            transform: scaleX(1);
        }
    }
</style>
