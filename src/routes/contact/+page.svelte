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
    <!-- <h2><a href="mailto:gabriel.atwell@proton.me">Contact Me</a></h2> -->
    <img class="pic" src="logo2.png" alt="Gabe" width="400" height="1000">
    <h2 class="contact-text">You can email me at <a href="mailto:gabriel.atwell@proton.me">gabriel.atwell@proton.me</a></h2>
</main>

<!-- <form method="POST">
    <label for="name">Name</label>
    <input name="name" type="text" placeholder="Name">
    <br>
    <label for="subject">Subject</label>
    <input name="subject" type="subject" placeholder="Subject">
    <br>
    <label for="body">Message</label>
    <textarea name="body" type="text" placeholder="Message" />
    <br><br><br>
    <button type="submit">Submit</button>
</form> -->

<p class="contactinfo">You can contact me through email and I'll get back to you.</p>
<img class="mobilelogo" src="logo.png" alt="logo" width="200px">

<style>
    main {
        text-align: center;
    }
    h2 {
        text-decoration: underline;
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }
    .contactinfo {
        display: none;
    }
    .pic {
        border-radius: 50%;
        margin-bottom: 2rem;
    }
    .mobilelogo {
        display: none;
    }
    /* label {
        text-align: center;
    }
    form {
        margin-top: 3.5rem;
        background-color: #353535;
        border: 3px solid white;
        width: 45%;
        margin-left: 27%;
    }
    button {
        width: 20%;
        margin-left: 40%;
        background-color: lightblue;
        color: black;
    }
    button:hover {
        background-color: blue;
        color: white;

    }
    input, textarea {
        width: 40%;
        margin-left: 30%;
    } */
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
            margin-left: 26%;
            border-radius: 50%;
        }
        .contact-text {
            font-size: 1.5rem;
        }
    }
</style>