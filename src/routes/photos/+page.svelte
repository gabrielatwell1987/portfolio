<script>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';

	onMount(() => {
		let mm = gsap.matchMedia();

		mm.add('(min-width: 800px', () => {
			gsap.registerPlugin(ScrollTrigger);

			gsap.set('.photos', { y: 500 });
			gsap.set('main', { autoAlpha: 0 });
			gsap.set('.gabe, .gabe2, .gabe3, .gabe4, .gabe5, .retard', { borderRadius: '25%' });

			gsap.to('.title', {
				keyframes: {
					'1%': { x: 0 },
					'50%': { scaleX: 5 },
					'75': { scaleX: 1 }
				},
				duration: 3
			});

			let tl = gsap.timeline({ defaults: { duration: 1.5 } });
			tl.to('.gabe, .gabe2, .gabe3, .gabe4, .gabe5, .retard', {
				borderRadius: '50%',
				repeat: 3,
				yoyo: true,
				scrollTrigger: {
					trigger: '.gabe, .gabe2, .gabe3, .gabe4, .gabe5, .retard',
					start: 'top 85%',
					end: 'bottom 15%',
					x: 200,
					scrub: true
				}
			})
				.to('main', { autoAlpha: 1 })
				.to('.photos', { y: 0 }, '<');

			return () => {
				gsap.set('.photos', { y: 500 });
				gsap.set('.gabe, .gabe2, .gabe3, .gabe4, .gabe5, .retard', { borderRadius: '25%' });
			};
		});
	});
</script>

<main class="main">
	<h2 class="title">PHOTOS</h2>

	<section class="photos">
		<div class="flex">
			<img class="gabe" src="gabe.png" alt="Gabriel Atwell" width="350" height="450" />
			<img class="gabe2" src="gabe2.png" alt="Gabriel Atwell" width="300" height="350" />
			<img class="gabe3" src="gabe3.jpg" alt="Gabriel Atwell" width="400" height="900" />
		</div>
		<div class="flex">
			<img class="gabe4" src="gabe4.jpg" alt="Gabriel Atwell" width="350" />
			<img class="retard" src="retard.png" alt="Gabriel Atwell" width="400" />
			<img class="gabe5" src="gabe5.png" alt="Gabriel Atwell" width="475" />
		</div>
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
		width: 100%;
		margin: 0;
	}
	.flex {
		display: flex;
		justify-content: space-around;
		gap: 8rem;
		margin: 5rem 0;
	}
	@media screen and (min-width: 200px) {
		section {
			width: 100%;
			margin: 0;
		}
		.flex {
			display: flex;
			flex-direction: column;
			gap: 2rem;
		}
	}
	@media screen and (min-width: 1200px) {
		.flex {
			display: flex;
			justify-content: space-around;
			flex-direction: row;
			gap: 8rem;
			margin: 5rem 0;
		}
	}
</style>
