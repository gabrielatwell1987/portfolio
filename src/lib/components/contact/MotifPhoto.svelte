<script lang="ts">
    interface Props {
        content: string;
    }

    let { content }: Props = $props();

    function sanitizeSVG(svg: string): string {
        return svg
            .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
            .replace(/on\w+="[^"]*"/gi, '')
            .replace(/on\w+='[^']*'/gi, '')
            .replace(/overflow="hidden"/gi, 'overflow="visible"');
    }
</script>

<div class="motif-photo">
    <!-- <img src={img} alt="gabe atwell" /> -->
    {#if content.startsWith('<svg')}
        <div class="svg-content">
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            {@html sanitizeSVG(content)}
        </div>
    {:else}
        <img
            class="image"
            src={content}
            alt="decorative motif"
            loading="lazy"
        />
    {/if}
</div>

<style>
    .motif-photo {
        position: relative;
        width: fit-content;
        margin: 0;
        padding: 0;
        margin-inline: auto;

        & .svg-content {
            width: clamp(200px, 30vw, 750px);
            height: clamp(200px, 30vw, 750px);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-inline: auto;
            border-radius: 10% var(--radius);
            z-index: 1;

            & :global(svg) {
                width: 100%;
                height: 100%;
            }
        }

        & .image {
            width: clamp(200px, 30vw, 750px);
            height: clamp(200px, 30vw, 750px);
            border-radius: 10% var(--radius);
            display: block;
            margin-inline: auto;
            z-index: 1;
            overflow: hidden;
            object-fit: cover;

            box-shadow:
                0 0 0 6px var(--clr-invert),
                0 0 0 9px var(--clr-main);

            @media (width <= 768px) {
                box-shadow:
                    0 0 0 5px var(--clr-invert),
                    0 0 0 7px var(--clr-main);
            }
        }
    }
</style>
