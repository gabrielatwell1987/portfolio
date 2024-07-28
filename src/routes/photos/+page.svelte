<script>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';
	import Lenis from 'lenis';
	import Title from '$lib/components/Title.svelte';

	// lenis
	const lenis = new Lenis();

	// lenis.on('scroll', (e) => {
	// 	console.log(e);
	// });

	lenis.on('scroll', ScrollTrigger.update);

	gsap.ticker.add((time) => {
		lenis.raf(time * 375);
	});

	gsap.ticker.lagSmoothing(0);

	onMount(() => {
		const main = document.querySelector('main');

		// progress
		document.addEventListener('scroll', function () {
			const progressBar = document.getElementById('scrollProgress');
			const totalHeight = document.body.scrollHeight - window.innerHeight;
			const scrollPosition = window.scrollY;
			const scrollPercentage = (scrollPosition / totalHeight) * 100;

			progressBar.value = scrollPercentage;
		});

		gsap.set('.gabe', { borderRadius: '5%' });

		// responsive animations
		let mm = gsap.matchMedia();

		mm.add('(min-width: 800px', () => {
			gsap.registerPlugin(ScrollTrigger);

			gsap.set('main', { autoAlpha: 0 });

			let tl = gsap.timeline({ defaults: { duration: 1.5 } });

			tl.to('.gabe', {
				stagger: 0.5,
				scale: 0.84,
				duration: 5,
				repeat: 1,
				yoyo: true,
				scrollTrigger: {
					trigger: 'main',
					start: 'top bottom-=95%',
					x: 200,
					stagger: -0.5,
					scrub: 1
				}
			}).to('main', { autoAlpha: 1 });

			return () => {
				gsap.set('.gabe', { borderRadius: '5px', scale: 1 });
			};
		});

		console.log(main);
	});
</script>

<svelte:head>
	<title>Photos of Me</title>
	<meta name="description" content="Gabriel Atwell's Photos" />
	<meta name="keywords" content="Photos of Me" />
</svelte:head>

<main>
	<Title title="images" />

	<section>
		<div class="spacing" />

		<!-- images of me 3x3 -->
		<div class="pictures">
			<aside class="flex gabe">
				<img class="gabe" src="photos/gabe.png" alt="Gabriel Atwell." width="350" height="450" />
				<img class="gabe" src="photos/gabe2.png" alt="Gabriel Atwell." width="300" height="350" />
				<img class="gabe" src="photos/gabe7.png" alt="Gabriel Atwell" width="375" />
			</aside>
		</div>

		<div class="pictures">
			<aside class="flex">
				<img class="gabe" src="photos/gabe4.png" alt="Gabriel Atwell." width="350" />
				<img src="/photos/autumn.png" alt="Gabriel Atwell" class="gabe" width="350" />
				<img class="gabe" src="photos/gabe6.png" alt="Gabriel Atwell." width="400" />
			</aside>
		</div>

		<div class="pictures">
			<aside class="flex">
				<img class="gabe" src="photos/gabe8.png" alt="Gabriel Atwell" width="400" />
				<img src="/photos/gabe5.png" alt="Gabriel Atwell" class="gabe" width="400" />
				<img src="/photos/gabe3.png" alt="Gabriel Atwell" class="gabe" width="350" />
			</aside>
		</div>

		<div class="pictures left">
			<div class="flex">
				<img src="/photos/wtf.jpg" alt="Gabriel Atwell" class="gabe" width="500" />
				<img src="/photos/wtf2.png" alt="Gabriel Atwell" class="gabe" width="550" />
				<img src="/photos/ornate1.png" alt="Gabriel Atwell" class="gabe" width="400" />
			</div>
		</div>

		<div class="pictures">
			<aside class="flex">
				<img src="/photos/wtf3.png" alt="Gabriel Atwell" class="gabe" width="450" />
				<img src="/photos/gabe10.png" alt="Gabriel Atwell" class="gabe" width="375" />
			</aside>
		</div>

		<div class="spacing" />
	</section>

	<!-- progress bar -->
	<div class="progress-container">
		<progress id="scrollProgress" value="0" max="100" />
	</div>

	<!-- robot link -->
	<div class="robot" aria-label="robot">
		<p class="robot-text">Mouse Position Robot:</p>
		<a class="btn__link" href="/photos/robot"
			><img class="robot-image" src="/logos/robot.png" alt="A robot made in Spline." /></a
		>
	</div>
</main>

<style>
	@media screen and (min-width: 200px) {
		section {
			width: 100%;
			margin: 0;
			margin-bottom: 10%;
		}

		img {
			max-width: 100%;
		}

		progress {
			width: 40%;
			margin: 15% 0 2rem 30%;
		}

		.flex {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			margin-bottom: 1rem;
		}

		.robot {
			display: none;
		}

		.gabe {
			margin: 0.5rem auto;
			max-width: 100%;
		}

		.gabe:hover {
			opacity: 0.8;
			transition: opacity 750ms ease-in-out;
		}

		.spacing {
			height: 10vh;
		}

		.progress-container {
			position: fixed;
			top: -190px;
			right: 15%;
			width: 100%;
			z-index: 9;
		}
	}

	@media (min-width: 850px) {
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

		.robot {
			display: block;
			margin-top: 2rem;
		}

		.robot-image {
			display: block;
			width: 20%;
			height: 25%;
			margin: -1rem auto;
			border-radius: 10px;
		}

		.robot-image:hover {
			opacity: 0.5;
			transition: opacity 0.75s ease-in-out;
			animation: wiggle 0.5s ease-in-out infinite;
		}

		.robot-text {
			font-family: var(--anta);
			font-size: 1.75rem;
			font-weight: 700;
			color: var(--purple);
			letter-spacing: 5px;
			text-align: center;
		}

		.pictures {
			display: flex;
			justify-content: space-around;
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
			background-color: transparent;
		}

		.flex {
			display: flex;
			justify-content: space-around;
			flex-direction: row;
			gap: 8%;
			margin: 7% auto;
		}

		.pictures {
			margin-left: -12%;
		}

		.robot {
			margin-bottom: 5%;
		}

		.left {
			margin-left: -2%;
		}
	}
</style>
