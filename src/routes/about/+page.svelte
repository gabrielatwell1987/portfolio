<script>
    import Exclamation from '$lib/Exclamation.svelte';
    import {gsap} from 'gsap/dist/gsap';
    import {onMount} from 'svelte';

    onMount(() => {
        let tl = gsap.timeline({defaults: {duration: 1}})
        tl
          .fromTo('.logo', {scale: 0}, {scale: 1, duration: 3})
          .fromTo('.text', {opacity: 0}, {opacity: 1})
    })
</script>


<main>
    <div class="logo">
        <Exclamation/>
    </div>

    <div class="text">
        <h1>About Gabriel Atwell</h1>
        <p class="a">Gabriel Atwell is a web developer. It has been a road that he has enjoyed completely. He started out with the basics:
            HTML, CSS, and JavaScript. He then moved on to more advanced topics such as: Svelte/Sveltekit and Node.js. He has begun to teach himself the backend of web development on his 
            spare time. He is a very visual person. He is a very hard worker and is willing to work long hours.
        </p>

        <br>
        <br>

        <h3>What is Gabriel's future</h3>
        <p class="a">Gabriel sees a lot of future in web development. Mainly in e-commerce or in building/maintaining actual apps for companies.</p>
    </div>
</main>

<style>
    h1, h3 {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 3rem;
        font-weight: 800;
        text-align: center;
    }
    p {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.5rem;
    }
    .a {
        /* padding-left: 2rem; */
        text-align: center;
    }
</style>