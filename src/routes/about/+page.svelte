<script>
    import Exclamation from '$lib/Exclamation.svelte';
    import {gsap} from 'gsap/dist/gsap';
    import {onMount} from 'svelte';

    onMount(() => {
        let tl = gsap.timeline({defaults: {duration: 3}})
        tl
          .fromTo('.logos', {scale: 0}, {scale: 1, ease: "back.out"})
          .fromTo('.pagetext', {scale: 0}, {y: 0, scale: 1, ease: "back.out"}, "<")
          .fromTo('.mobilepagetext', {y: -500}, {y: 0}, "<")
    })
</script>


<main>
    <div class="logos">
        <img class="sombrero" src="atwell.png" width="350" alt="">
    </div>

    <div class="pagetext display">
        <h1>About Gabriel Atwell</h1>
        <p class="p">Gabriel Atwell is a web developer. He started out with the basics: HTML, CSS, and JavaScript. He then moved on to more advanced topics such as: Svelte/Sveltekit, Node.js, and GSAP. He has begun to teach himself the backend of web development on his spare time, but is a complete frontend developer. He is a very visual person.
        </p>
        <!-- <h3>What is Gabriel's future</h3>
        <p class="a">Gabriel sees a lot of future in web development. Mainly in e-commerce or in building/maintaining actual apps for companies.</p> -->
    </div>
    <div class="mobilepagetext nodisplay">
        <h1 class="about-title">About Me</h1>
        <img class="skull" src="logo2.png" alt="logo" width="250px">
        <p>This is Gabriel Atwell's portfolio. He has created this from Sveltekit and GSAP. This website is meant to showcase his frontend skills.</p>
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
    p {
        font-family: Arial, Helvetica, sans-serif;
        font-size: .8rem;
    }
    .nodisplay {
        display: none;
    }
    .display {
        display: block;
    }
    .mobilepagetext {
        display: none;
    }
    .pagetext {
        padding: 2rem;
        text-align: center;
        background-color: black;
        border: 3px solid white;
        border-radius: 8px;
        width: 75%;
        margin-left: 12.5rem;
    }
    .logos {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 1em;
    }
    .p {
        padding: 2rem;
    }
    .sombrero {
        border-radius: 40%;
    }
    .skull {
        margin-bottom: 1.5rem;
    }
    @media (max-width: 1250px) {
        .logos {
            display: none;
        }
        .pagetext {
            display: none;
        }
        .mobilepagetext {
            width: 55%;
            margin-left: 24%;
            display: block;
            padding: .8rem;
            text-align: center;
            border: none;
            background-color: transparent;
            color: white;
        }
        h1, .p, .about-title {
            font-size: 1.5rem;
        }
    }
</style>