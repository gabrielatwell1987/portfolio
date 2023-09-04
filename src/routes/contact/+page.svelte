<script>
    import Discord from '$lib/Discord.svelte';
    import Reddit from '$lib/Reddit.svelte';
    import {gsap} from 'gsap/dist/gsap';
    import {onMount} from 'svelte';

    onMount(() => {
        gsap.to('.pic', {borderRadius: "50%", rotate: 360, repeat: 1, duration: 2, yoyo: true})
    })
</script>

<main>
    <h2>Email:</h2>
    <p><a href="mailto:gatwell702@gmail.com">gatwell702@gmail.com</a></p>
    <h2>Phone:</h2>
    <p>(702) 726-1097</p>
    <img class="pic" src="gabe.png" alt="Gabe" width="250" height="800">
</main>

<footer>
    <a href="https://www.reddit.com/u/gatwell702">
        <Reddit/>
    </a>
    <a href="https://www.discord.com">
        <Discord/>
    </a>
</footer>

<style>
    main {
        text-align: center;
    }
    h2 {
        text-decoration: underline;
        font-size: 2rem;
    }
    p {
        font-size: 1rem;
    }
    img {
        border-radius: 50%;
    }
    a {
        text-decoration: none;
        color: rgb(0, 174, 255);
    }
    a:hover {
        color: crimson;
    }
</style>