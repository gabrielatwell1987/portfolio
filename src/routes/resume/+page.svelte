<script>
    import {gsap} from 'gsap/dist/gsap';
    import {onMount} from 'svelte';

    onMount(() => {
        gsap.fromTo('.laptop', {y: 200}, {y: 0, duration: 1.5})
        gsap.fromTo('.links', {y: 200}, {y: 0, duration: 1.5}, "<")
        gsap.fromTo('.texts', {y: -200}, {y: 0, duration: 1.5}, "<")
    })
</script>

<div class="content">
    <h1 class="texts">Actual websites that I've built</h1>

    <img class="laptop" src="logo4.png" alt="computer">

    <div class="links">
        <a href="https://gabe1.vercel.app" target="_blank">Web Dev Website</a><br>
        <a href="https://gabe2.vercel.app" target="_blank">Horizontal Scroller</a><br>
        <a href="https://gabe3.vercel.app" target="_blank">Random User</a><br>
        <a href="https://gabe4.vercel.app" target="_blank">Starbucks Clone</a><br>
        <a href="https://formapp-three.vercel.app" target="_blank">Form Application</a><br>
        <a href="https://kindler.vercel.app" target="_blank">CRUD-type Application</a><br>
        <a href="https://github-vert.vercel.app" target="_blank">Github API</a><br>
        <a href="https://appity.vercel.app" target="_blank">Code Snippet</a><br>
        <a href="https://pokedex.vercel.app" target="_blank">Pokedex</a><br>
        <a href="https://svelteflix-delta.vercel.app" target="_blank">Netflix Clone</a><br>
        <a href="https://blog-until-you-die.vercel.app" target="_blank">Blog Until You Die</a>
    </div>
</div>

<style>
    h1 {
        text-align: center;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 2.5rem;
        color: lightskyblue;
    }
    a {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 1.5rem;
        text-decoration: none;
        font-weight: 700;
        color: lightgray;
    }
    a:hover {
        color: blue;
    }
    .links {
        text-align: center;
    }
    .laptop {
        margin-left: 32%;
    }
</style>