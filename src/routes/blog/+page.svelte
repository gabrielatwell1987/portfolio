<script lang="ts">
    import './blog.global.css';
    import type { PageData } from './$types';

    let { data } = $props<{ data: PageData }>();
    let posts = $derived(data.posts);
</script>

<h1>learn three.js</h1>

<div class="post-grid">
    {#each posts as post (post.id)}
        <article>
            <h2>
                <a href="/blog/{post.id}">{post.title}</a>
            </h2>
        </article>
    {/each}
</div>

<style>
    h1 {
        margin-top: 2em;
        font-family: var(--thunder);
        font-size: clamp(var(--h5), 5vw, var(--lg));
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: -0.0075em;

        @media (width <= 980px) {
            margin-top: 2.2em;
        }
        @media (width <= 800px) {
            margin-top: 3em;
        }
    }

    .post-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1.5em;
        padding: 1em 17em;

        & article {
            background: transparent;
            display: block;

            & h2 {
                font-family: var(--thunder);
                font-size: clamp(var(--h6), 1.9vw, var(--lg));
                font-weight: 800;
                text-transform: uppercase;
            }

            & a {
                text-decoration: none;
                color: var(--clr-warning-500);
            }
        }
    }
</style>
