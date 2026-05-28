<script lang="ts">
    import './blog.global.css';
    import type { PageData } from './$types';

    let { data } = $props<{ data: PageData }>();
    let posts = $derived(data.posts);
</script>

<h1>
    Learn <span style="view-transition-name: three-heading;">Three.js</span>
</h1>

<div class="post-grid">
    {#each posts as post (post.id)}
        <section>
            {#if post.image}
                <a href="/blog/{post.id}">
                    <img src={post.image} alt="" />
                </a>
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
        font-family: var(--bronova-bold);
        font-size: clamp(var(--h3), 5vw, var(--lg));
        font-weight: 700;
        /* text-transform: uppercase; */
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
            padding: 0.15em 0.5em;

            & .title {
                font-family: var(--thunder);
                font-size: clamp(var(--h4), 2.5vw, var(--lg));
                font-weight: 800;
                text-transform: uppercase;

                @media (width <= 768px) {
                    margin-top: 0.75em;
                }
            }

            & .subtitle {
                margin-block: -3em;

                @media (width <= 768px) {
                    margin-bottom: 0.05em;
                }
            }

            & a {
                text-decoration: none;
                color: var(--clr-success-500);

                &:focus,
                &:focus-visible {
                    box-shadow: none;
                    background-color: transparent;
                }
            }
        }
    }

    ::view-transition-group(three-heading) {
        animation-duration: 0.6s;
        animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }

    :global(::view-transition-new(three-heading)) {
        animation-duration: 0.4s;
        animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
</style>
