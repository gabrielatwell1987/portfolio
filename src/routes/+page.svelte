<script>
    import Laptop2 from '$lib/Laptop2.svelte';
    import {gsap} from 'gsap/dist/gsap';
    import {onMount} from 'svelte';

    onMount(() => {
        gsap.fromTo('.laptop', {scale: 0}, {scale: 1, duration: 3, ease: 'back'})
    })
</script>

<main class="laptop">
    <Laptop2/>
</main>
<div class="text">
    <h2>UI/UX Designer</h2>
    <p>A one stop shop for all of your web development needs.</p>
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
    }
    p {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
</style>