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
