<script>
    import Logo from '$lib/Logo.svelte';
</script>

<nav>
    <Logo/><h2>Gabriel Atwell</h2>

    <div class="a">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/photos">Photos</a>
        <a href="/contact">Contact</a>
    </div>
</nav>

<style>
    h2 {
        text-align: center;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 1.5rem;
        color: antiquewhite;
        margin-top: 0.5rem;
        padding-top: 2rem;
    }
    a {
        /* margin: 0 10px; */
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: .9rem;
        text-decoration: none;
        font-weight: 700;
        color: antiquewhite;
        margin-left: 10rem;
        margin-right: 2rem;
    }
    a:hover {
        color: #f00;
    }
    /* .a {
        display: flex;
        justify-content: space-around;
        align-items: center;
    } */
    nav {
        background-color: #303030;
        padding: 10px 0;
        border: 2px solid gray;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 5em;
    }
</style>