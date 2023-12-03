<script>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';
	import { contenteditable_truthy_values } from 'svelte/internal';

	onMount(() => {
		let mm = gsap.matchMedia();

		mm.add('(min-width: 800px', () => {
			gsap.registerPlugin(ScrollTrigger);

			gsap.set('main', { autoAlpha: 0 });
			gsap.set('.gabe, .gabe2, .gabe3, .gabe4, .gabe5, .retard', { borderRadius: '25%' });

			gsap.to('.title', {
				keyframes: {
					'1%': { x: 0 },
					'50%': { scaleX: 5 },
					'75': { scaleX: 1 }
				},
				duration: 5,
				ease: 'sine.in'
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
			}).to('main', { autoAlpha: 1 });

			return () => {
				gsap.set('.photos', { y: 500 });
				gsap.set('.gabe, .gabe2, .gabe3, .gabe4, .gabe5, .retard', { borderRadius: '25%' });
			};
		});
	});
</script>

<main>
	<h2 class="title">PHOTOS</h2>

	<section>
		<aside class="flex">
			<img class="gabe" src="gabe.png" alt="Gabriel Atwell" width="350" height="450" />
			<img class="gabe2" src="gabe2.png" alt="Gabriel Atwell" width="300" height="350" />
			<img class="gabe3" src="gabe3.jpg" alt="Gabriel Atwell" width="400" height="900" />
		</aside>
		<aside class="flex">
			<img class="gabe4" src="gabe4.jpg" alt="Gabriel Atwell" width="350" />
			<img class="retard" src="retard.png" alt="Gabriel Atwell" width="400" />
			<img class="gabe5" src="gabe5.png" alt="Gabriel Atwell" width="475" />
		</aside>
	</section>

	<a class="btn-link" href="/photos/domino"><button>Domino Game</button></a>
</main>

<style>
	main {
		text-align: center;
	}
	section {
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin: 0;
	}
	.title {
		font-size: 4rem;
		color: var(--white);
		margin: 0 0 2rem 0;
		font-family: var(--nova);
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
		button {
			display: none;
		}
	}
	@media (min-width: 850px) {
		button {
			display: block;
			width: 25%;
			margin: 5% auto;
			background-color: var(--sky);
			color: var(--black);
			border: 1px solid var(--black);
			border-radius: 8px;
			cursor: pointer;
			font-size: 1.5rem;
			font-weight: 900;
		}
		button:hover {
			opacity: 0.8;
			background-color: var(--lightblack);
			color: var(--sky);
		}
		.btn-link {
			font-size: 2.5rem;
			font-weight: bolder;
			text-decoration: none;
			color: var(--smoke);
			font-family: var(--montserrat);
		}
		.btn-link:hover {
			font-size: 2.5rem;
			font-weight: bolder;
			text-decoration: none;
			color: var(--smoke);
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
