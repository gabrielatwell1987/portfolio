<script>
	import HeroButton from './HeroButton.svelte';
	import DoYouNeed from './DoYouNeed.svelte';
	import UltraA from './UltraA.svelte';
	import HeroBackground from './HeroBackground.svelte';

	let mounted = $state(false);
	let titleText = 'Handcrafted Frontend Interfaces';
	let displayedTitle = $state('');
	let showContent = $state(false);
	let particles = $state([]);
	let { cssBg } = $props();

	$effect(() => {
		mounted = true;

		// Check for reduced motion preference once
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		// Typewriter effect with reduced motion support
		if (prefersReducedMotion) {
			// Show content immediately without typewriter effect
			displayedTitle = titleText;
			showContent = true;
		} else {
			// Normal typewriter effect
			let i = 0;
			const typeWriter = () => {
				if (i < titleText.length) {
					displayedTitle += titleText.charAt(i);
					i++;
					setTimeout(typeWriter, 65);
				} else {
					setTimeout(() => {
						showContent = true;
					}, 500);
				}
			};
			setTimeout(typeWriter, 1000);
		}

		// Particle system with reduced motion check
		if (!prefersReducedMotion) {
			particles = Array.from({ length: 50 }, (_, i) => ({
				id: i,
				x: Math.random() * 100,
				y: Math.random() * 100,
				size: Math.random() * 4 + 1,
				duration: Math.random() * 20 + 10,
				delay: Math.random() * 5
			}));
		}
	});
</script>

<article role="banner" aria-label="Hero section">
	<!-- Animated Background -->
	<div class="background-container" aria-hidden="true">
		{#if cssBg}
			<div class="gradient-bg"></div>

			<!-- Floating Particles -->
			{#if mounted}
				{#each particles as particle (particle.id)}
					<div
						class="particle"
						aria-hidden="true"
						style="
						left: {particle.x}%;
						top: {particle.y}%;
						width: {particle.size}px;
						height: {particle.size}px;
						animation-duration: {particle.duration}s;
						animation-delay: {particle.delay}s;
					"
					></div>
				{/each}
			{/if}

			<!-- shapes -->
			<svg class="shape circle" aria-hidden="true" viewBox="0 0 100 100">
				<circle
					cx="50"
					cy="50"
					r="45"
					fill="transparent"
					stroke="var(--clr-main)"
					stroke-width="2"
					opacity="0.3"
				/>
			</svg>

			<svg class="shape star" aria-hidden="true" viewBox="0 0 100 100">
				<polygon
					points="50,5 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35"
					fill="transparent"
					stroke="var(--clr-main)"
					stroke-width="2"
					opacity="0.3"
				/>
			</svg>

			<UltraA class="ultra-gradient" />

			<div class="shape big-circle" aria-hidden="true"></div>
		{:else}
			<HeroBackground />
		{/if}
	</div>

	<section aria-label="Introduction and portfolio overview" class="hero-content">
		<!-- Typewriter Title -->
		<header class="title-container">
			<h1 class="hero-title" aria-live="polite" aria-atomic="true">
				<span class="visually-hidden">Loading title:</span>

				{displayedTitle}<span class="cursor" class:blink={mounted} aria-hidden="true">|</span>
			</h1>
		</header>

		<!-- content -->
		<div class="content-wrapper" class:show={showContent} aria-live="polite">
			<p class="summary">
				I am a frontend developer who loves to create beautiful and functional websites. This
				website showcases my skills with some projects that I created. I look forward to hearing
				from you so we can discuss your goals for your online needs!
			</p>

			<nav class="button-container" aria-label="Primary navigation">
				<HeroButton href="/projects" title="Creations" />
			</nav>

			<!-- Portfolio Stats -->
			<section aria-labelledby="stats-heading" class="stats-section">
				<h2 id="stats-heading" class="visually-hidden">Portfolio Statistics</h2>

				<dl class="stats-container">
					<div class="stat-item">
						<dt class="visually-hidden">Work approach</dt>
						<dd class="stat-number" aria-label="One hundred percent">100%</dd>
						<dt class="stat-label">Custom</dt>
					</div>

					<div class="stat-item">
						<dt class="visually-hidden">Project delivery timeframe</dt>
						<dd class="stat-number" aria-label="Fast">Fast</dd>
						<dt class="stat-label">Delivery</dt>
					</div>

					<div class="stat-item">
						<dt class="visually-hidden">Responsive design approach</dt>
						<dd class="stat-number" aria-label="Fully responsive">Fully</dd>
						<dt class="stat-label">Responsive</dt>
					</div>
				</dl>
			</section>
		</div>

		<div class="do-you-need">
			<DoYouNeed text="do you need a " span="website?" />
		</div>
	</section>
</article>

<style>
	article {
		position: relative;
		min-height: 100vh;
		height: auto;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 5rem 0 0 0;
		margin-top: 1.75em;
		font-size: clamp(var(--h6), 4vw, var(--h1));

		@media (height <= 768px) {
			min-height: auto;
			height: auto;
			padding: 1em 0 0 0;
			margin-top: 3.5em;
		}
	}

	.background-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;

		& .gradient-bg {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(
				135deg,
				rgba(23, 38, 44, 0.95) 0%,
				rgba(30, 60, 80, 0.9) 30%,
				rgba(45, 85, 120, 0.85) 60%,
				rgba(20, 40, 60, 0.95) 100%
			);
			opacity: 0.85;
			animation: gradientShift 50s ease-out infinite;
		}

		& .particle {
			position: absolute;
			background: rgba(255, 255, 255, 0.3);
			border-radius: 50%;
			pointer-events: none;
			animation: float linear infinite;
		}

		& .shape {
			position: absolute;
			border-radius: 30%;
			opacity: 0.2;
			animation: shapeFloat 20s ease-out infinite;

			@media (width <= 500px) {
				opacity: 0.3;
			}

			&.circle {
				top: 7.5%;
				left: 10%;
				width: 10vw;
				height: 10vw;
				animation: blink 5s ease-in-out infinite;
				animation-delay: 0s;

				@media (width <= 500px) {
					top: 5%;
					left: 5%;
					width: 15vw;
					height: 15vw;
					stroke-width: 8;
					opacity: 0.4;
				}
			}

			&.star {
				top: 15%;
				right: 5%;
				width: 30vw;
				height: 30vw;
				animation-delay: 2s;
			}

			&.big-circle {
				top: 70%;
				right: 12%;
				width: 50vw;
				height: 50vw;
				background: linear-gradient(90deg, var(--clr-blue) 40%, transparent 60%);
				animation-delay: 0s;
				border-radius: 50%;

				@media (width <= 500px) {
					top: 71.5%;
					right: 5%;
				}
			}
		}
	}

	.hero-content {
		position: relative;
		z-index: 1;
		width: 100%;
		max-inline-size: 1200px;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		min-height: 80vh;

		@media (height <= 700px) {
			min-height: auto;
			padding: 1rem;
		}

		@media (width <= 768px) {
			padding: 1rem;
		}

		& .do-you-need {
			margin-top: -9em;
		}

		& .title-container {
			margin-bottom: 2rem;

			@media (height <= 700px) {
				margin-bottom: 1rem;
			}

			& .hero-title {
				font-family: var(--ultra);
				font-size: clamp(var(--h4), 5vw, var(--xxl));
				font-weight: 700;
				color: var(--clr-invert);
				text-shadow:
					0 0 5px var(--clr-main),
					0 0 10px var(--clr-main),
					0 0 15px var(--clr-main);
				line-height: 1;
				margin: 0;
				word-wrap: normal;
				overflow-wrap: break-word;
				hyphens: none;

				@media (height <= 768px) {
					line-height: 1.1;
				}

				& .cursor {
					color: var(--clr-invert);
					font-weight: 300;
					animation: none;

					&.blink {
						animation: cursor-blink 1s infinite;

						@media (prefers-reduced-motion: reduce) {
							animation: none;
							opacity: 1;
						}
					}
				}
			}
		}

		& .content-wrapper {
			opacity: 0;
			transform: translateY(30px);
			transition: all 0.25s ease-out;

			@media (prefers-reduced-motion: reduce) {
				transform: none;
				transition: opacity 0.3s ease-out;
			}

			&.show {
				opacity: 1;
				transform: translateY(0);

				@media (prefers-reduced-motion: reduce) {
					transform: none;
				}
			}

			& .summary {
				font-family: var(--bronova);
				font-size: clamp(var(--sm), 1.25vw, var(--h3));
				font-weight: 600;
				text-align: left;
				letter-spacing: 1px;
				line-height: 1.6;
				color: var(--clr-main);
				max-inline-size: 800px;
				margin: 0 auto 3rem auto;
				text-shadow: 0 0 2px rgba(0, 0, 0, 0.15);

				@media screen and (width >= 990px) {
					letter-spacing: 2px;
				}
			}

			& .button-container {
				display: flex;
				gap: 1.5rem;
				justify-content: center;
				align-items: center;
				flex-wrap: wrap;
				margin-bottom: 3rem;
			}

			& .stats-section {
				margin-top: 2rem;

				& .stats-container {
					display: flex;
					justify-content: center;
					gap: 3rem;
					flex-wrap: wrap;
					list-style: none;
					margin: 0;
					padding: 0;

					& .stat-item {
						display: flex;
						flex-direction: column;
						align-items: center;
						padding: 1rem;
						background: rgba(255, 255, 255, 0.1);
						border-radius: 12px;
						backdrop-filter: blur(10px);
						border: 2px solid var(--clr-gray);
						transition: all 0.3s ease;

						@media (prefers-reduced-motion: reduce) {
							transition: none;
						}

						&:hover,
						&:focus-within {
							transform: translateY(-5px);
							background: rgba(255, 255, 255, 0.15);
							box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

							@media (prefers-reduced-motion: reduce) {
								transform: none;
							}
						}

						& .stat-number {
							font-family: var(--ultra);
							font-size: clamp(var(--h6), 3vw, var(--h2));
							font-weight: 700;
							color: var(--clr-invert);
							text-shadow:
								0 0 5px var(--clr-main),
								0 0 10px var(--clr-main),
								0 0 15px var(--clr-main);
							margin: 0;
						}

						& .stat-label {
							font-family: var(--bronova);
							font-size: clamp(var(--sm), 2.75vw, var(--h3));
							color: var(--clr-main);
							text-transform: uppercase;
							letter-spacing: 1px;
							margin-top: 0.5rem;
							margin-bottom: 0;
							font-weight: 600;
						}
					}
				}
			}
		}
	}

	/* tablet & mobile */
	@media (width <= 768px) {
		.hero-content {
			& .content-wrapper {
				& .summary {
					padding: 0 1rem;
				}

				& .stats-container {
					gap: 1.5rem;

					& .stat-item {
						padding: 0.75rem;
					}
				}
			}
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.background-container {
			& .gradient-bg {
				animation: none;
			}

			& .particle {
				animation: none;
				opacity: 0;
			}

			& .shape {
				animation: none;
			}
		}
	}

	@keyframes gradientShift {
		0% {
			background: linear-gradient(
				135deg,
				rgba(23, 38, 44, 0.95) 0%,
				rgba(30, 60, 80, 0.9) 30%,
				rgba(45, 85, 120, 0.85) 60%,
				rgba(20, 40, 60, 0.95) 100%
			);
		}
		25% {
			background: linear-gradient(
				135deg,
				rgba(26, 44, 54, 0.95) 0%,
				rgba(35, 65, 90, 0.9) 30%,
				rgba(40, 80, 115, 0.85) 60%,
				rgba(25, 45, 65, 0.95) 100%
			);
		}
		50% {
			background: linear-gradient(
				135deg,
				rgba(30, 50, 70, 0.95) 0%,
				rgba(40, 70, 100, 0.9) 30%,
				rgba(25, 45, 65, 0.85) 60%,
				rgba(35, 55, 75, 0.95) 100%
			);
		}
		75% {
			background: linear-gradient(
				135deg,
				rgba(27, 44, 57, 0.95) 0%,
				rgba(35, 65, 90, 0.9) 30%,
				rgba(35, 65, 95, 0.85) 60%,
				rgba(28, 48, 68, 0.95) 100%
			);
		}
		100% {
			background: linear-gradient(
				135deg,
				rgba(23, 38, 44, 0.95) 0%,
				rgba(30, 60, 80, 0.9) 30%,
				rgba(45, 85, 120, 0.85) 60%,
				rgba(20, 40, 60, 0.95) 100%
			);
		}
	}

	@keyframes float {
		0% {
			transform: translateY(0) rotate(0deg);
			opacity: 0;
		}
		10% {
			opacity: 1;
		}
		90% {
			opacity: 1;
		}
		100% {
			transform: translateY(-100vh) rotate(180deg);
			opacity: 0;
		}
	}

	@keyframes shapeFloat {
		0%,
		100% {
			transform: translateY(0) rotate(0deg);
		}
		33% {
			transform: translateY(-20px) rotate(120deg);
		}
		66% {
			transform: translateY(10px) rotate(240deg);
		}
	}

	@keyframes antiShapeFloat {
		0%,
		100% {
			transform: translateY(0) rotate(0deg);
		}
		33% {
			transform: translateY(20px) rotate(-120deg);
		}
		66% {
			transform: translateY(-10px) rotate(240deg);
		}
	}

	@keyframes blink {
		0%,
		50% {
			opacity: 0.1;
		}
		51%,
		100% {
			opacity: 0;
		}
	}

	@keyframes cursor-blink {
		0%,
		50% {
			opacity: 1;
		}
		51%,
		100% {
			opacity: 0;
		}
	}

	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateX(-50%) translateY(0);
		}
		40% {
			transform: translateX(-50%) translateY(-10px);
		}
		60% {
			transform: translateX(-50%) translateY(-5px);
		}
	}
</style>
