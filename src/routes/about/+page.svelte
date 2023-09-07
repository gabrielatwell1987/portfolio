<script>
    import Exclamation from '$lib/Exclamation.svelte';
    import {gsap} from 'gsap/dist/gsap';
    import {onMount} from 'svelte';

    onMount(() => {
        let tl = gsap.timeline()
        tl
          .fromTo('.logos', {scale: 0}, {scale: 1, duration: 3, ease: "back.out"})
          .fromTo('.d', {y: -200}, {y: 0, duration: 1}, "<")
    })
</script>


<main>
    <div class="logos">
        <img src="nerd.png" alt="">
    </div>

    <div class="d">
        <h1>About Gabriel Atwell</h1>
        <p>Gabriel Atwell is a web developer. It has been a road that he has enjoyed completely. He started out with the basics:
            HTML, CSS, and JavaScript. He then moved on to more advanced topics such as: Svelte/Sveltekit and Node.js. He has begun to teach himself the backend of web development on his 
            spare time. He is a very visual person. He is a very hard worker and is willing to work long hours.
        </p>

        <br>

        <h3>What is Gabriel's future</h3>
        <p class="a">Gabriel sees a lot of future in web development. Mainly in e-commerce or in building/maintaining actual apps for companies.</p>
    </div>
    <br><br>
    <div class="logo">
        <Exclamation/>
    </div>
</main>

<style>
    h1 {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: lightskyblue;
        font-size: 2.5rem;
        font-weight: 800;
        text-align: center;
    }
    h3 {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.5rem;
        font-weight: 800;
        text-align: center;
        color: lightskyblue;
    }
    p {
        font-family: Arial, Helvetica, sans-serif;
        font-size: .8rem;
    }
    .a {
        /* padding-left: 2rem; */
        text-align: center;
    }
    .logo {
        margin-top: 5rem;
    }
    .logos {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 1em;
    }
</style>