<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.set('.photos', { y: 500 });
		// gsap.set('.title', { x: -1000 });

		gsap.to('.title', {
			keyframes: {
				'1%': { x: 0 },
				'50%': { scaleX: 5 },
				'75': { scaleX: 1 }
			},
			duration: 3
		});

		let tl = gsap.timeline({ defaults: { duration: 1.5 } });
		tl.to('.gabe, .gabe2, .gabe3, .gabe4, .gabe5', {
			borderRadius: '50%',
			repeat: 3,
			yoyo: true
		}).to('.photos', { y: 0 }, '<');

		gsap.set('.gabe, .gabe2, .gabe3, .gabe4, .gabe5', { borderRadius: '25%' });
	});
</script>

<main class="main">
	<h2 class="title">PHOTOS</h2>

	<section class="photos">
		<h3 class="subtitle">My Photos</h3>

		<div class="flex">
			<img class="gabe" src="gabe.png" alt="Gabriel Atwell" width="350" height="450" />
			<img class="gabe2" src="gabe2.png" alt="Gabriel Atwell" width="300" height="350" />
		</div>
		<div class="flex">
			<img class="gabe3" src="gabe3.jpg" alt="Gabriel Atwell" width="400" height="900" />
			<img class="gabe4" src="gabe4.jpg" alt="Gabriel Atwell" width="350" />
		</div>
		<img class="gabe5" src="retard.png" alt="Gabriel Atwell" width="400" />
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
		font-family: 'Courier New', Courier, monospace;
	}
	section {
		background-color: var(--lightblack);
		border: 3px solid var(--white);
		border-radius: 10px;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 35%;
		margin: 0 0 0 32%;
	}
	.flex {
		display: flex;
		gap: 2rem;
		margin: 0 0 3rem 0;
	}
	@media (min-width: 200px) {
		section {
			width: 75%;
			margin: 0 0 0 12%;
		}
		.flex {
			flex-direction: column;
			gap: 2rem;
		}
	}
	@media (min-width: 1200px) {
		.flex {
			display: flex;
			flex-direction: row;
			gap: 2rem;
			margin: 0 0 3rem 0;
		}
	}
</style>
