<script>
    import Discord from '$lib/Discord.svelte';
    import Reddit from '$lib/Reddit.svelte';
    import {gsap} from 'gsap/dist/gsap';
    import {onMount} from 'svelte';

    onMount(() => {
        gsap.to('.pic', {borderRadius: "50%", rotate: -360, repeat: -1, duration: 4, yoyo: true, ease: "sine.in"})
    })
</script>

<main>
    <h2><a href="mailto:gabriel.atwell@proton.me">Email</a></h2>
    <img class="pic" src="logo2.png" alt="Gabe" width="400" height="1000">
</main>

<p class="contactinfo">You can contact me through email and I'll get back to you.</p>
<img class="mobilelogo" src="logo.png" alt="logo" width="200px">

<style>
    main {
        text-align: center;
    }
    h2 {
        text-decoration: underline;
        font-size: 2.5rem;
    }
    .contactinfo {
        display: none;
    }
    img {
        border-radius: 50%;
    }
    .mobilelogo {
        display: none;
    }
    @media (max-width: 1250px) {
        .pic {
            display: none;
        }
        h2 {
            font-size: 1.5rem;
        }
        .contactinfo {
            display: block;
            text-align: center;
            padding: .8rem;
            margin-left: 1.5rem;
        }
        .mobilelogo {
            display: block;
            margin-left: 41%;
        }
    }
</style>