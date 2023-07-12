<script>
    import {fade} from 'svelte/transition';
</script>


<main out:fade>
    <h2>Photos</h2>
    <br><br><br>
    <img src="gabe.png" alt="Gabe" width="250" height="400"><br><br>
    <img src="gabe2.png" alt="Gabe" width="300" height="350"><br><br>
    <img src="gabe3.jpg" alt="Gabe" width="400" height="900"><br><br>
    <img src="gabe4.jpg" alt="Gabe" width="350">
</main>

<style>
    main {
        text-align: center;
    }
</style>