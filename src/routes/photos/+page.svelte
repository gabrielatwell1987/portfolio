<script>
    import {gsap} from 'gsap/dist/gsap';
    import {onMount} from 'svelte';

    onMount(() => {
        gsap.fromTo('.main', {opacity: 0}, {opacity: 1, duration: 3})
        let tl = gsap.timeline({defaults: {delay: 1, repeat: -1, yoyo: true}});
        tl
          .to('.a', {borderRadius: "50%", duration: 3})
          .to('.b', {borderRadius: "50%", duration: 3}, "-=3")
          .to('.c', {borderRadius: "50%", duration: 3}, "-=3")
          .to('.d', {borderRadius: "50%", duration: 3}, "-=3")
    })
</script>


<main class="main">
    <h2>Photos</h2>
    <br><br><br>
    <img class="a" src="gabe.png" alt="Gabe" width="250" height="400"><br><br>
    <img class="b" src="gabe2.png" alt="Gabe" width="300" height="350"><br><br>
    <img class="c" src="gabe3.jpg" alt="Gabe" width="400" height="900"><br><br>
    <img class="d" src="gabe4.jpg" alt="Gabe" width="350">
</main>

<style>
    main {
        text-align: center;
    }
    h2 {
        font-size: 5rem;
        color: crimson;
    }
</style>