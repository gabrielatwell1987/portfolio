<script>
    import Header from '$lib/Header.svelte';
    import Discord from '$lib/Discord.svelte';
    import Reddit from '$lib/Reddit.svelte';
</script>

<main>
    <Header />
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
</style>