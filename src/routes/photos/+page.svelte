<script>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';

	onMount(() => {
		// responsive animations
		let mm = gsap.matchMedia();

		mm.add('(min-width: 800px', () => {
			gsap.registerPlugin(ScrollTrigger);

			gsap.set('main', { autoAlpha: 0 });
			gsap.set('.gabe', { borderRadius: '5px' });

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
			tl.to('.gabe', {
				borderRadius: '5rem',
				repeat: 1,
				yoyo: true,
				scrollTrigger: {
					trigger: '.gabe',
					start: 'top 75%',
					end: 'bottom 25%',
					marker: true,
					x: 200,
					scrub: 1
				}
			}).to('main', { autoAlpha: 1 });

			return () => {
				gsap.set('.photos', { y: 500 });
				gsap.set('.gabe', { borderRadius: '15px' });
			};
		});
	});
</script>

<main>
	<h2 class="title">PHOTOS</h2>

	<section>
		<!-- images of me 3x3 -->
		<aside class="flex">
			<img class="gabe" src="photos/gabe.png" alt="Gabriel Atwell" width="350" height="450" />
			<img class="gabe" src="photos/gabe2.png" alt="Gabriel Atwell" width="300" height="350" />
			<img class="gabe" src="photos/gabe3.jpg" alt="Gabriel Atwell" width="400" height="900" />
		</aside>
		<aside class="flex">
			<img class="gabe" src="photos/gabe4.jpg" alt="Gabriel Atwell" width="350" />
			<img class="gabe" src="photos/gabe5.png" alt="Gabriel Atwell" width="475" />
			<img class="gabe" src="photos/gabe6.png" alt="Gabriel Atwell" width="400" />
		</aside>
	</section>

	<!-- domino image and link -->
	<div class="domino">
		<p class="domino-text">Dominoes:</p>
		<a class="btn-link" href="/photos/domino"
			><img class="domino-image" src="logos/dominoes.png" alt="" /></a
		>
	</div>
</main>
<!-- footer spacing -->
<br />

<style>
	/* bigger than mobile */
	@media screen and (min-width: 200px) {
		section {
			width: 100%;
			margin: 0;
		}

		.flex {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			margin-bottom: 1rem;
		}

		.domino {
			display: none;
		}

		.gabe {
			opacity: 0.5;
		}

		.gabe:hover {
			opacity: 1;
			transition: opacity 750ms ease-in-out;
		}
		.title {
			font-family: var(--major);
			font-size: 2rem;
		}
	}

	/* bigger than tablet */
	@media (min-width: 850px) {
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

		.domino {
			display: block;
			margin-top: 2rem;
		}

		.domino-image {
			display: block;
			width: 20%;
			height: 25%;
			margin: -1rem auto;
			border-radius: 10px;
		}

		.domino-image:hover {
			opacity: 0.5;
			transition: opacity 0.75s ease-in-out;
			animation: wiggle 0.5s ease-in-out infinite;
		}

		.domino-text {
			font-family: var(--bree);
			font-size: 1.75rem;
			font-weight: 700;
			color: var(--blue);
			letter-spacing: 5px;
		}

		@keyframes wiggle {
			0% {
				rotate: 0deg;
				translate: 0 0;
			}
			25% {
				rotate: -2deg;
				translate: -5px 0;
			}
			80% {
				rotate: 2deg;
				translate: 5px 0;
			}
		}
	}

	/* bigger than desktop */
	@media screen and (min-width: 1200px) {
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
			margin: 0 auto;
			border: 5px solid var(--white);
			border-image: linear-gradient(to right, var(--black), var(--lightblack)) 1;
			background-color: transparent;
		}

		.title {
			font-size: 4rem;
			color: var(--white);
			margin: 0 0 2rem 0;
			text-shadow: 0px 0px 50px var(--smoke);
		}

		.flex {
			display: flex;
			justify-content: space-around;
			flex-direction: row;
			gap: 10%;
			margin: 7% auto;
		}
	}
</style>
