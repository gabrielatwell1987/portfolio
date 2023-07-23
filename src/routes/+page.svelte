<script>
    import {fade} from 'svelte/transition';
    import Laptop2 from '$lib/Laptop2.svelte';
</script>

<main transition:fade>
    <!-- <img src="gabe5.png" alt="Gabe" width="200" height="700"> -->
    <Laptop2/>
    <h2>UI/UX Designer</h2>
    <p>A one stop shop for all of your web development needs.</p>
</main>

<style>
    main  {
        text-align: center;
    }
    img {
        padding-bottom: 2rem;
        border-radius: 50%;
    }
    h2 {
        font-weight: 800;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    p {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
</style>