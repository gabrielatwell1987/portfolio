<script lang="ts">
    import '../blog.global.css';
    import { marked } from 'marked';
    import DOMPurify from 'isomorphic-dompurify';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();

    let renderedHtml = $derived(
        DOMPurify.sanitize(
            marked.parse(data.post.content, { async: false }) as string,
        ),
    );
</script>

<section>
    <div class="content">{@html renderedHtml}</div>
</section>

<a class="go-back" href="/blog">go back</a>

<style>
    section {
        max-width: 720px;
        margin: 5em auto;
        padding: 2em;
    }

    .content {
        line-height: 1.7;

        & :global(.post-title) {
            font-family: var(--thunder);
            font-size: clamp(var(--h6), 2.5vw, var(--lg));
            font-weight: 800;
            color: var(--clr-light-500);
            letter-spacing: 1px;
            line-height: 1;
        }

        & :global(h2) {
            font-family: var(--bronova-bold);
            font-weight: 800;
            color: var(--clr-gray-700);
        }

        & :global(h3) {
            font-family: var(--bronova-bold);
            font-size: clamp(var(--sm), 1.35vw, var(--h5));
            font-weight: 800;
            color: var(--clr-light-500);
        }

        & :global(img) {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
        }

        & :global(pre code) {
            background: var(--clr-dark-500);
            border: 1px solid var(--clr-light-350);
            color: var(--clr-light-500);
            font-family: var(--mono);
            font-size: 0.8rem;
            inline-size: fit-content;
        }

        & :global(code) {
            background: var(--clr-dark-500);
            color: var(--clr-light-500);
            font-family: var(--mono);
            font-size: 0.8rem;
            inline-size: fit-content;
        }
    }

    .go-back {
        text-shadow: none;
        color: var(--clr-blue-300);
        font-family: var(--bronova);
        font-size: clamp(var(--sm), 1.52vw, var(--h2));
        font-weight: 600;
        inline-size: fit-content;
        display: block;
        text-align: center;
        margin-inline: auto;

        &:focus,
        &:focus-visible {
            background-color: transparent;
            box-shadow: none;
            outline: 1px solid var(--clr-light-500);
        }
    }
</style>
