<script>
	import ThreeCanvas from '$lib/components/ThreeCanvas.svelte';
	import SEO from '$lib/data/SEO.svelte';
	import Button from '$lib/components/Button.svelte';

	$effect(() => {
		console.log(ThreeCanvas);
	});
</script>

<SEO
	title="Three.js hero section"
	description="Welcome to Gabe Atwell's portfolio"
	keywords="hero section, three.js hero section"
/>

<br /><br />

<ThreeCanvas />

<section aria-label="hero">
	<h1 class="hero-title">Frontend Crafted Web Experiences</h1>

	<h4 class="summary left up">
		I am a frontend developer who loves to create beautiful and functional websites. This website
		showcases my skills with some projects that I created. I look forward to hearing from you so we
		can discuss your goals for your online needs!
	</h4>

	<a href="/projects">
		<Button title="Projects" />
	</a>
</section>

<style>
	@media screen and (min-width: 300px) {
		section {
			text-align: center;
			font-size: 1.75rem;
			height: 100vh;
			position: relative;
			margin-bottom: 2%;
			padding-top: 4%;

			position: absolute;
			top: 80%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 100%;

			h1 {
				margin: 0 auto;
				/* margin-top: 4%; */
				color: var(--sky);
				font-family: var(--anta);
				font-size: clamp(1.5rem, 4vw, 7rem);
				font-weight: 700;
				letter-spacing: 3px;
			}

			h4 {
				color: var(--white);
				letter-spacing: 0.5px;
				margin-inline: auto;
				margin-bottom: 3%;
				font-weight: 400;
				width: 100%;
				padding: 0 1.25rem;
			}

			.summary {
				margin: 0 auto;
				font-family: var(--bronova);
				font-size: clamp(1.15rem, 1.5vw, 2rem);
				font-weight: 500;
				width: 100%;
				padding: 0 1.25rem;
				margin-bottom: -5%;
			}

			.left {
				text-align: left;
			}
		}
	}

	@media screen and (min-width: 740px) {
		section {
			text-align: center;
			font-size: 2rem;
			top: 85%;

			.summary {
				width: 85%;
			}
		}
	}

	@media screen and (min-width: 990px) {
		section {
			text-align: center;
			font-size: 2.5rem;
			margin: 5rem 0;
			top: 45%;
			left: 50%;
			transform: translate(-50%, -30%);

			.summary {
				width: 50%;
				letter-spacing: 3px;
			}
		}
	}

	@media (min-width: 1024px) {
		section {
			top: 40%;

			.summary {
				width: 80%;
				margin-inline: auto;
			}
		}
	}

	@media screen and (min-width: 1400px) {
		section {
			top: 45%;
		}
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
</style>
