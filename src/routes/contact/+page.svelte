<script>
    import Discord from '$lib/Discord.svelte';
    import Reddit from '$lib/Reddit.svelte';
    import {gsap} from 'gsap/dist/gsap';
    import {onMount} from 'svelte';
    import ContactForm from '$lib/ContactForm.svelte';

    onMount(() => {
        gsap.to('.pic', {borderRadius: "50%", rotate: -360, repeat: 1, duration: 4, yoyo: true})
    })
</script>

<main>
    <h2><a href="mailto:gabriel.atwell@proton.me">Email</a></h2>
    <img class="pic" src="logo2.png" alt="Gabe" width="400" height="1000">
    <!-- <ContactForm /> -->
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
        font-size: 2.5rem;
    }
    img {
        border-radius: 50%;
    }
    a {
        text-decoration: none;
        color: lightskyblue;
    }
    a:hover {
        color: blue;
    }
</style>