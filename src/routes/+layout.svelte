<script>
    import Header from '$lib/Header.svelte';
    import Header2 from '$lib/Header2.svelte';
    import Discord from '$lib/Discord.svelte';
    import Reddit from '$lib/Reddit.svelte';
</script>

<main>
    <Header />
    <br>
    <slot></slot>
</main>

<main class="b">
    <Header2 />
    <br>
    <slot></slot>
</main>



<footer>
    <a href="https://www.reddit.com/u/gatwell702">
        <Reddit/>
    </a>
    <a href="https://www.discord.com">
        <Discord/>
    </a>
</footer>

<style>
    a {
        text-decoration: none;
        color: lightskyblue;
    }
    a:hover {
        color: blue;
    }
    .b {
        display: none;
    }
    @media screen and (max-width: 480px) {
        footer {
            display: none;
        }
        /* main {
            display: none;
        }
        .b {
            display: block;
        } */
    }
    @media screen and (max-width: 767px), screen and (max-width: 945px) {
        footer {
            display: none;
        }
        /* .b {
            display: none;
        }
        main {
            display: block;
        } */
    }
</style>