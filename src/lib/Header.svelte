<script>
    import Laptop from '$lib/Laptop.svelte';
    import Man from '$lib/Man.svelte';
    import A from '$lib/A.svelte';
</script>

<nav>
    <div class="logoss">
        <A/>
        <h2 class="text">GABEatwell</h2>
    </div>

    

    <div class="c">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/photos">Photos</a>
        <a href="/resume">Resume</a>
        <a href="/contact">Contact</a>
    </div>
</nav>

<style>
    h2 {
        text-align: center;
        font-family: 'Courier New', Courier, monospace;
        font-size: 1.5rem;
        color: crimson;
        margin-top: 0.5rem;
        padding-top: 2rem;
        margin-top: 1rem;
    }
    a {
        /* margin: 0 10px; */
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: .9rem;
        text-decoration: none;
        font-weight: 900;
        color: antiquewhite;
        margin-left: 8rem;
        margin-right: 1rem;
    }
    a:hover {
        color: crimson;
    }
    .c {
        margin-right: 1rem;
    }
    nav {
        background-color: #303030;
        padding: 10px 0;
        border: 2px solid gray;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 5em;
    }
    .logoss {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .text {
        margin-left: 1rem;
    }
</style>