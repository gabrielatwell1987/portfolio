<script>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';

	onMount(() => {
		// responsive animations
		let mm = gsap.matchMedia();

		mm.add('(min-width: 800px', () => {
			gsap.registerPlugin(ScrollTrigger);

			// gsap.set('.gabe', { borderRadius: '5px', scale: 1 });
			gsap.set('main', { autoAlpha: 0 });
			gsap.set('.title', { scale: 1 });

			let tl = gsap.timeline({ defaults: { duration: 1.5 } });

			tl.to('.gabe', {
				borderRadius: '1.75rem',
				stagger: 0.75,
				scale: 0.75,
				repeat: 1,
				yoyo: true,
				scrollTrigger: {
					trigger: '.pictures',
					start: 'top bottom-=75%',
					end: 'bottom top+=5%',
					x: 200,
					stagger: 0.5,
					scrub: 3
				}
			}).to('main', { autoAlpha: 1 });

			return () => {
				gsap.set('.gabe', { borderRadius: '5px', scale: 1 });
			};
		});
	});
</script>

<!-- content -->
<main>
	<h2 class="title">PHOTOS</h2>

	<section>
		<div class="spacing" />

		<!-- images of me 3x3 -->
		<div class="pictures">
			<aside class="flex">
				<img class="gabe" src="photos/gabe.png" alt="Gabriel Atwell." width="350" height="450" />
				<img class="gabe" src="photos/gabe2.png" alt="Gabriel Atwell." width="300" height="350" />
				<img class="gabe" src="photos/gabe7.png" alt="Gabriel Atwell" width="375" />
			</aside>
		</div>

		<div class="pictures">
			<aside class="flex">
				<img class="gabe" src="photos/gabe4.png" alt="Gabriel Atwell." width="350" />
				<img class="gabe" src="photos/gabe8.png" alt="Gabriel Atwell" width="400" />
				<img class="gabe" src="photos/gabe6.png" alt="Gabriel Atwell." width="400" />
			</aside>
		</div>

		<div class="pictures">
			<aside class="flex">
				<img class="gabe" src="photos/gabe5.png" alt="Gabriel Atwell." width="475" />
				<img class="gabe" src="photos/gabe3.png" alt="Gabriel Atwell." width="400" height="900" />
			</aside>
		</div>

		<div class="spacing" />
	</section>

	<!-- domino image and link -->
	<div class="domino" aria-label="domino">
		<p class="domino__text">Dominoes:</p>
		<a class="btn__link" href="/photos/domino"
			><img
				class="domino__image"
				src="logos/dominoes.png"
				alt="A game of dominoes made in Spline."
			/></a
		>
	</div>

	<!-- spacing -->
	<br /><br /><br />
</main>

<style>
	/* bigger than mobile */
	@media screen and (min-width: 200px) {
		/* content */
		section {
			width: 100%;
			margin: 0;
			background: url('/logos/dead-tree.png') no-repeat center center/cover fixed;
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
			margin: 0.5rem auto;
		}

		.gabe:hover {
			opacity: 0.8;
			transition: opacity 750ms ease-in-out;
		}
		.title {
			font-family: var(--anta);
			font-size: 3rem;
			letter-spacing: 5px;
		}

		.spacing {
			height: 10vh;
		}
	}

	/* bigger than tablet */
	@media (min-width: 850px) {
		/* content */
		.btn__link {
			font-size: 2.5rem;
			font-weight: bolder;
			text-decoration: none;
			color: var(--smoke);
			font-family: var(--montserrat);
		}

		.btn__link:hover {
			font-size: 2.5rem;
			font-weight: bolder;
			text-decoration: none;
			color: var(--smoke);
		}

		/* domino link */
		.domino {
			display: block;
			margin-top: 2rem;
		}

		.domino__image {
			display: block;
			width: 20%;
			height: 25%;
			margin: -1rem auto;
			border-radius: 10px;
		}

		.domino__image:hover {
			opacity: 0.5;
			transition: opacity 0.75s ease-in-out;
			animation: wiggle 0.5s ease-in-out infinite;
		}

		.domino__text {
			font-family: var(--anta);
			font-size: 1.75rem;
			font-weight: 700;
			color: var(--purple);
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
		/* content */
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
			/* border: 5px solid var(--white); */
			/* border-image: linear-gradient(to right, var(--black), var(--lightblack)) 1; */
			background-color: transparent;
		}

		.title {
			font-size: 8rem;
			color: var(--white);
			margin: 2rem auto;
			/* text-shadow: 0px 0px 50px var(--smoke); */
			text-shadow: -5px 5px 4px var(--dark-gray);
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
