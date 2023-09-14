<script>
    import {gsap} from 'gsap/dist/gsap';
    import {onMount} from 'svelte';

    onMount(() => {
        gsap.fromTo('.laptop', {opacity: 0}, {opacity: 1, duration: 5})
    })
</script>

<main class="laptop">
    <img src="logo.png" alt="Logo">
</main>
<div class="text">
    <h2>UI Designer</h2>
    <p>A frontend developer.</p>
</div>
<div class="links">
    <h1>Gabriel Atwell</h1>
    <a href="/about">About</a>
    <a href="/photos">Photos</a>
    <a href="/resume">Resume</a>
    <a href="/contact">Contact</a>
</div>

<style>
    .text, main  {
        text-align: center;
    }
    h2 {
        font-weight: 800;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: lightskyblue;
        font-size: 2.5rem;
    }
    p {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    img {
        border-radius: 50%;
    }
    .text {
        margin-top: 1rem;
    }
    .links {
        display: none;
    }
    @media (max-width: 480px), screen and (max-width: 767px) {
        h2 {
            font-size: 1rem;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            color: lightskyblue;
            font-weight: 400;
        }
        .laptop {
            /* display: none; */
            width: 50%;
            margin-left: 8rem;
        }
        .text {
            display: none;
        }
        .links {
            text-align: center;
            display: flex;
            flex-direction: column;
            margin-top: 5rem;
            display: none;
        }
        h1 {
            margin-bottom: 3rem;
        }
    }
</style>