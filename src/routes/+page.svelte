<script>
    import Laptop2 from '$lib/Laptop2.svelte';
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

<style>
    .text, main  {
        text-align: center;
    }
    /* img {
        padding-bottom: 2rem;
        border-radius: 50%;
    } */
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
</style>