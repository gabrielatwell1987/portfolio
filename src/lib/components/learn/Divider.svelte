<script lang="ts">
    interface Props {
        width: number;
        thickness: number;
        color: string;
    }

    let { width, thickness, color }: Props = $props();
</script>

<hr
    class="divider"
    style="--width: {width}%; --thickness: {thickness}px; --min-width: {width /
        2}%; --max-inline-size: {width}%; --color: {color}"
/>

<style>
    .divider {
        width: var(--width);
        background-color: var(--color);
        height: var(--thickness);
        margin-inline: auto;
        margin-bottom: 4rem;
        border: none;
        border-top-left-radius: var(--radius);
        border-top-right-radius: var(--radius);
        border-bottom-left-radius: var(--radius);
        border-bottom-right-radius: var(--radius);
        opacity: 0.5;
    }

    @keyframes shrink {
        0% {
            width: var(--max-inline-size);
        }

        50% {
            width: var(--min-width);
        }

        100% {
            width: var(--max-inline-size);
        }
    }
</style>
