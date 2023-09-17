<script>
    import Laptop from '$lib/Laptop.svelte';
    import Man from '$lib/Man.svelte';
    import Logo from '$lib/Logo.svelte';
    // import {gsap} from 'gsap/dist/gsap';
    // import {onMount} from 'svelte';

    // onMount(() => {
    //     gsap.from('.d', {y: 0})
    // })
</script>

<nav>
    <div class="logoss">
        <!-- <img src="A.jpg" class="anarchy" alt="A" width="50"> -->
        <Logo />
        <h2 class="text">GABEatwell</h2>
    </div>

    

    <div class="c">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/photos">Photos</a>
        <a href="/resume">Resume</a>
        <a href="/contact">Contact</a>
    </div>
    <div class="d">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/resume">Resume</a>
        <a href="/contact">Contact</a>
    </div>
</nav>

<style>
    h2 {
        text-align: center;
        font-family: 'Courier New', Courier, monospace;
        font-size: 1.5rem;
        color: lightskyblue;
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
        color: lightskyblue;
        margin-left: 8rem;
        margin-right: -7rem;
    }
    a:hover {
        color: blue;
    }
    .c {
        /* margin-right: .5rem; */
        display: none;
    }
    nav {
        background-color: #303030;
        padding: 10px 0;
        border: 2px solid gray;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 5em;
        width: 100%;
    }
    .logoss {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 2rem;
    }
    .text {
        margin-left: 1.5rem;
    }
    .anarchy {
        border-radius: 50%;
    }
    @media (max-width: 1250px) {
        nav {
            background-color: transparent;
            border: none;
            padding: 0;
            display: flex;
            justify-content: center;
            height: 2em;
        }
        .logoss {
            display: none;
        }
        .d {
            margin-right: 12rem;
        }
    }
    @media (max-width: 727px) {
        .d {
            display: flex;
            justify-content: space-evenly;
            /* width: 100%; */
            margin-left: -2rem;
        }
    }
</style>