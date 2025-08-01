<script>
	import SEO from '$lib/data/SEO.svelte';
	import ThreeCanvas from '$lib/components/layout/ThreeCanvas.svelte';
	import Button from '$lib/components/layout/Button.svelte';
	import HeroTitle from '$lib/components/layout/HeroTitle.svelte';
</script>

<SEO
	title="made with svelte and three.js"
	description="Welcome to Gabe Atwell's portfolio"
	keywords="hero section, three.js hero section, gabe's hero section"
/>

<!-- Three.js Background -->
<div class="hero-container">
	<ThreeCanvas />

	<section aria-label="hero" class="hero-content">
		<HeroTitle title="Frontend Crafted Web Experiences" />

		<h4 class="summary">
			I am a frontend developer who loves to create beautiful and functional websites. This website
			showcases my skills with some projects that I created. I look forward to hearing from you so
			we can discuss your goals for your online needs!
		</h4>

		<div class="button-wrapper">
			<Button href="/projects" title="Creations" />
		</div>
	</section>
</div>

<style>
	.hero-container {
		position: relative;
		width: 100vw;
		height: 100vh;
		min-height: 100vh; /* CLS prevention: Reserve space immediately */
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		/* Remove margin-top to prevent layout shifts */
		/* Use padding-top if you need space from header */
		padding-top: 2rem;
		background: transparent;
		/* Ensure immediate space reservation */
		contain: layout;
		/* Minimal loading state to prevent flash - subtle dark background */
		background: rgba(0, 0, 0, 0.95);
	}

	.hero-content {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		width: 100%;
		max-width: 1200px;
		padding: 2rem;
		/* CLS prevention: Reserve minimum space for content */
		min-height: 60vh;

		/* Ensure content is always visible */
		backdrop-filter: blur(1px);
		background: rgba(0, 0, 0, 0.1);
		border-radius: 12px;

		@media (width <= 768px) {
			padding: 1rem;
			min-height: 50vh;
		}
	}

	.summary {
		color: var(--clr-main);
		font-family: var(--bronova);
		font-size: clamp(var(--sm), 2vw, var(--h4));
		font-weight: 400;
		line-height: 1.6;
		letter-spacing: 1px;
		max-width: 600px;
		margin: 1.5rem auto;
		text-align: left;
		/* CLS prevention: Reserve minimum height */
		min-height: 3rem;

		@media (width >= 990px) {
			letter-spacing: 2px;
			max-width: 90%;
		}

		@media (width <= 768px) {
			text-align: center;
			font-size: clamp(var(--xs), 4vw, var(--sm));
		}
	}

	.button-wrapper {
		margin-top: 2rem;
		/* CLS prevention: Reserve space for button */
		min-height: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* Accessibility improvements */
	@media (prefers-reduced-motion: reduce) {
		.hero-content {
			backdrop-filter: none;
			transition: none;
		}
	}

	/* Additional CLS prevention */
	.hero-content > * {
		/* Prevent child elements from causing layout shifts */
		contain: layout;
	}

	/* Reserve space for components while they load */
	.hero-content :global(h1) {
		min-height: 3rem; /* Reserve space for HeroTitle */
	}

	.hero-content :global(button) {
		min-height: 2.5rem; /* Reserve space for Button */
		min-width: 8rem;
	}
</style>
