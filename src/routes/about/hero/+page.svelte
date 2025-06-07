<script>
	import SEO from '$lib/data/SEO.svelte';
	import ThreeCanvas from '$lib/components/layout/ThreeCanvas.svelte';
	import Button from '$lib/components/layout/Button.svelte';
	import HeroTitle from '$lib/components/layout/HeroTitle.svelte';

	$effect(() => {
		console.log(ThreeCanvas);
	});
</script>

<SEO
	title="made with svelte and three.js"
	description="Welcome to Gabe Atwell's portfolio"
	keywords="hero section, three.js hero section, gabe's hero section"
/>

<br /><br />

<ThreeCanvas />

<section aria-label="hero">
	<HeroTitle title="Frontend Crafted Web Experiences" />

	<h4 class="summary left up">
		I am a frontend developer who loves to create beautiful and functional websites. This website
		showcases my skills with some projects that I created. I look forward to hearing from you so we
		can discuss your goals for your online needs!
	</h4>

	<Button href="/projects" title="Creations" />
</section>

<style>
	@media screen and (width >= 300px) {
		section {
			text-align: center;
			font-size: clamp(var(--sm), 1.5vw, var(--h4));
			height: 100vh;
			margin-bottom: 2%;
			padding-top: 6%;

			position: absolute;
			top: 55%;
			left: 50%;
			transform: translate(-50%, -55%);
			width: 100%;

			& h4 {
				color: var(--clr-main);
				letter-spacing: 0.5px;
				margin-inline: auto;
				margin-bottom: 3%;
				font-weight: 400;
				width: 100%;
				padding: 0 1.25rem;
			}

			& .summary {
				margin-inline: auto;
				font-family: var(--bronova);
				font-size: clamp(var(--sm), 1.5vw, var(--h4));
				font-weight: 500;
				width: 99%;
				padding: 0 1.25rem;
				margin-bottom: -5%;
				hyphens: auto;
			}

			& .left {
				text-align: left;
			}
		}
	}

	@media screen and (width >= 740px) {
		section {
			text-align: center;
			/* font-size: 2rem; */
			top: 60%;
		}
	}

	@media screen and (width >= 990px) {
		section {
			text-align: center;
			/* font-size: 2.5rem; */
			margin: 5rem 0;
			top: 45%;
			left: 50%;
			transform: translate(-50%, -30%);

			& .summary {
				letter-spacing: 3px;
				width: 90%;
			}
		}
	}

	@media (width >= 1024px) {
		section {
			top: 40%;
		}
	}

	@media screen and (width >= 1400px) {
		section {
			top: 25%;
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
