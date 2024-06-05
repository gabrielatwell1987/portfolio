<script>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';
	import SplitType from 'split-type';

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
				scale: 0.9,
				repeat: 1,
				yoyo: true,
				scrollTrigger: {
					trigger: 'main',
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

		// title animations
		const titleText = new SplitType('.title', { types: 'chars' });

		gsap.from(titleText.chars, {
			duration: 5,
			y: 75,
			scale: 0.2,
			opacity: 0.5,
			stagger: -0.2,
			ease: 'elastic.out(1.75, 0.5)'
		});
	});
</script>

<svelte:head>
	<title>Photos of Me</title>
</svelte:head>

<!-- content -->
<main>
	<h2 class="title">IMAGES</h2>

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
				<img class="gabe" src="photos/gabe8.png" alt="Gabriel Atwell" width="400" />
				<img class="gabe" src="photos/gabe6.png" alt="Gabriel Atwell." width="400" />
			</aside>
		</div>

		<div class="pictures">
			<aside class="flex">
				<img src="/photos/gabe5.png" alt="Gabriel Atwell" class="gabe" width="400" />
				<img src="/photos/gabe3.png" alt="Gabriel Atwell" class="gabe" width="350" />
				<img src="/photos/gabe10.png" alt="Gabriel Atwell" class="gabe" width="375" />
			</aside>
		</div>

		<div class="pictures left">
			<div class="flex">
				<img src="/photos/wtf3.png" alt="Gabriel Atwell" class="gabe" width="450" />
				<img src="/photos/wtf.jpg" alt="Gabriel Atwell" class="gabe" width="500" />
				<img src="/photos/wtf2.png" alt="Gabriel Atwell" class="gabe" width="550" />
			</div>
		</div>

		<div class="spacing" />
	</section>

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
			background: url('/logos/dead-tree.png') no-repeat center center/cover fixed;
			margin-bottom: 10%;
		}

		img {
			max-width: 100%;
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
		.title {
			font-family: var(--anta);
			font-size: 3rem;
			font-weight: 900;
			letter-spacing: 5px;
			color: var(--purple);
			text-transform: uppercase;
			text-align: center;
			text-shadow: 5px 5px 4px var(--dark-gray);
			margin: 2rem auto;
		}

		.spacing {
			height: 10vh;
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

		.title {
			font-size: 8rem;
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
			margin-left: 1%;
		}
	}
</style>
