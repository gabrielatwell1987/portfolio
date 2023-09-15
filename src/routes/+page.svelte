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
<div class="biomobile">
    <h1>Gabriel Atwell</h1>
    <p class="center">This is my portfolio website. Please click on a link to learn more!</p>
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
    .biomobile {
        display: none;
    }
    @media (max-width: 1250px) {
        .laptop {
            display: none;
        }
        .text {
            display: none;
        }
        .biomobile {
            display: block;
            text-align: center;
            /* margin-left: 42%; */
        }
        h2, p {
            font-size: 1rem;
        }
    }
</style>