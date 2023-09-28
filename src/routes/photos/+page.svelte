<script>
	import { gsap } from 'gsap/dist/gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		// gsap.fromTo('.main', {opacity: 0}, {opacity: 1, duration: 3})
		let tl = gsap.timeline({ defaults: { duration: 3 } });
		tl.to('.a', { borderRadius: '50%', repeat: -1, yoyo: true })
			.to('.b', { borderRadius: '50%', repeat: -1, yoyo: true }, '<')
			.to('.c', { borderRadius: '50%', repeat: -1, yoyo: true }, '<')
			.to('.d', { borderRadius: '50%', repeat: -1, yoyo: true }, '<')
			.fromTo('.photos', { y: 500 }, { y: 0, duration: 1.5 }, '<')
			.fromTo('.title', { scale: 5 }, { scale: 1, duration: 1.5 }, '<');
	});
</script>

<main class="main">
	<h2 class="title">Photos</h2>

	<div class="photos">
		<img class="a" src="gabe.png" alt="Gabriel Atwell" width="250" height="400" /><br /><br />
		<img class="b" src="gabe2.png" alt="Gabriel Atwell" width="300" height="350" /><br /><br />
		<img class="c" src="gabe3.jpg" alt="Gabriel Atwell" width="400" height="900" /><br /><br />
		<img class="d" src="gabe4.jpg" alt="Gabriel Atwell" width="350" />
	</div>
</main>

<style>
	main {
		text-align: center;
	}
	.title {
		font-size: 2.5rem;
		color: lightskyblue;
		margin: 0 0 2rem 0;
	}
	.photos {
		background-color: rgb(49, 45, 45);
		border: 3px solid white;
		border-radius: 8px;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 35%;
		margin: 0 0 0 32%;
	}
</style>
