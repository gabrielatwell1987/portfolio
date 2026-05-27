<script lang="ts">
    import './blog.global.css';
    import type { PageData } from './$types';

    let { data } = $props<{ data: PageData }>();
    let posts = $derived(data.posts);
</script>

<h1 style="view-transition-name: three-heading;">learn three.js</h1>

<div class="post-grid">
    {#each posts as post (post.id)}
        <section>
            {#if post.image}
                <img src={post.image} alt="" />
            {/if}

            <h2 class="title">
                <a href="/blog/{post.id}">{post.title}</a>
            </h2>

            <p class="subtitle">{post.subtitle}</p>
        </section>
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
        color: var(--clr-gray-600);

        @media (width <= 980px) {
            margin-top: 2.2em;
        }
        @media (width <= 800px) {
            margin-top: 3em;
        }
    }

    .post-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1em;
        padding: 1em 5em;

        @media (width <= 768px) {
            padding: 1em 0;
            gap: 0;
            margin: 0;
            padding: 0;
        }

        & section {
            background: transparent;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            /* border: 1px solid var(--clr-light-400); */
            padding: 0.15em 0.5em;

            & .title {
                font-family: var(--thunder);
                font-size: clamp(var(--h6), 2.5vw, var(--lg));
                font-weight: 800;
                text-transform: uppercase;

                @media (width <= 768px) {
                    margin-top: 0.75em;
                }
            }

            & .subtitle {
                margin-block: -3em;

                @media (width <= 768px) {
                    margin-block: -2em;
                }
            }

            & a {
                text-decoration: none;
                color: var(--clr-success-500);
            }
        }
    }
</style>
