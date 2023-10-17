<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.set('.photos', { y: 500 });
		gsap.set('.title', { x: -1000 });

		let tl = gsap.timeline({ defaults: { duration: 1.5 } });
		tl.to('.gabe', { borderRadius: '50%', repeat: -1, yoyo: true })
			.to('.gabe2', { borderRadius: '50%', repeat: -1, yoyo: true }, '<')
			.to('.gabe3', { borderRadius: '50%', repeat: -1, yoyo: true }, '<')
			.to('.gabe4', { borderRadius: '50%', repeat: -1, yoyo: true }, '<')
			.to('.photos', { y: 0 }, '<')
			.to('.title', { x: 0 }, '<-=0.5>')
			.to('.title', { scaleX: 5 })
			.to('.title', { scaleX: 1 });
	});
</script>

<main class="main">
	<h2 class="title">PHOTOS</h2>

	<section class="photos">
		<h3 class="subtitle">My Photos</h3>
		<img class="gabe" src="gabe.png" alt="Gabriel Atwell" width="250" height="400" /><br /><br />
		<img class="gabe2" src="gabe2.png" alt="Gabriel Atwell" width="300" height="350" /><br /><br />
		<img class="gabe3" src="gabe3.jpg" alt="Gabriel Atwell" width="400" height="900" /><br /><br />
		<img class="gabe4" src="gabe4.jpg" alt="Gabriel Atwell" width="350" />
	</section>
</main>

<style>
	main {
		text-align: center;
	}
	.title {
		font-size: 4rem;
		color: var(--white);
		margin: 0 0 2rem 0;
	}
	.subtitle {
		text-align: center;
		color: var(--cornflower);
		margin: 0 0 2rem 0;
		font-size: 2.5rem;
	}
	.photos {
		background-color: var(--lightblack);
		border: 3px solid var(--white);
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
