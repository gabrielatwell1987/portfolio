<script lang="ts">
    import '../blog.global.css';
    import { getPost } from '../data.remote';
    import { marked } from 'marked';
    import DOMPurify from 'isomorphic-dompurify';
    import Avatar2 from '$lib/components/blog/FaceAvatar.svelte';

    let { params } = $props();
    let post = $state<Awaited<ReturnType<typeof getPost>>>(null);

    $effect(() => {
        const id = params.id;
        getPost(Number(id)).then((p) => {
            if (p) post = p;
        });
    });

    let sanitizedHtml = $derived(
        post?.content &&
            DOMPurify.sanitize(
                marked.parse(post.content, { async: false }) as string,
            ),
    );

    let renderedHtml = $derived(
        sanitizedHtml && addHtmlTransitionName(sanitizedHtml, post!.id),
    );

    function addHtmlTransitionName(html: string, postId: number): string {
        return html.replace(
            'img',
            `img style="view-transition-name: blog-image-${postId};"`,
        );
    }
</script>

{#if post}
    <section class="blog-post">
        <div class="post-content">
            {@html renderedHtml}
        </div>
    </section>

    <div class="avatar">
        <Avatar2 name="gabe atwell" size="7.5em" />
    </div>

    <a class="go-back" href="/blog">go back</a>
{:else}
    <p class="not-found">Post not found..</p>
{/if}

<style>
    .blog-post {
        max-inline-size: 60vw;
        margin: 5em auto;
        padding: 2em;

        @media (width <= 768px) {
            max-inline-size: 100vw;
            margin: 2em auto;
        }
    }

    .post-content {
        inline-size: 100%;
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

        & :global(h3) {
            color: var(--clr-gray-700);
        }
    }

    .go-back {
        text-shadow: none;
        text-decoration: none;
        color: var(--clr-blue-300);
        font-family: var(--bronova);
        font-size: clamp(var(--sm), 1.52vw, var(--h2));
        font-weight: 500;
        inline-size: fit-content;
        display: block;
        text-align: center;
        margin-inline: auto;

        anchor-name: --back;

        &:focus,
        &:focus-visible {
            background-color: transparent;
            box-shadow: none;
            outline: 1px solid var(--clr-light-500);
        }
    }

    .avatar {
        margin-inline: auto;
        inline-size: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 8em;

        @media (width <= 990px) {
            margin-top: 5.5em;
        }
        @media (width <= 768px) {
            margin-top: 3em;
        }
    }

    .not-found {
        text-align: center;
        font-family: var(--thunder);
        font-size: clamp(var(--sm), 1.52vw, var(--h4));
        font-weight: 700;
        color: var(--clr-gray-500);
    }
</style>
