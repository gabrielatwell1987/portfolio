<script>
	import { goto } from '$app/navigation';
	import HeroTitle from '$lib/components/layout/HeroTitle.svelte';
	import Button from '$lib/components/layout/Button.svelte';

	let videoElement;

	$effect(() => {
		document.addEventListener('visibilitychange', handleVisibilityChange);

		return () => {
			document.removeEventListener('visibilitychange', handleVisibilityChange);
		};
	});

	function handleVisibilityChange() {
		if (document.hidden && videoElement) {
			videoElement.pause();
		} else if (videoElement) {
			videoElement.play();
		}
	}

	function proceedToMain() {
		localStorage.setItem('visitedLanding', 'true');
		goto('/landing');
	}
</script>

<main class="intro">
	<video
		autoplay
		muted
		loop
		playsinline
		class="intro-video"
		preload="true"
		bind:this={videoElement}
		aria-label="intro video"
	>
		<source src="/videos/skully.mp4" type="video/mp4" />

		<source src="/videos/skully.webm" type="video/webm" />

		Your browser does not support the video tag.
	</video>

	<div class="intro-content">
		<HeroTitle title="Welcome!" />

		<h2>
			<span>This is the frontend portfolio of Gabe Atwell</span>
		</h2>

		<p>
			If you have any questions, you can <a href="/contact">contact</a> me and I will get back to you.
		</p>

		<Button title="Enter site" href="/landing" onclick={proceedToMain} />
	</div>
</main>

<style>
	.intro {
		position: relative;
		width: 100vw;
		height: 100vh;

		& .intro-video {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			z-index: 1;
			opacity: 0.35;
		}

		& .intro-content {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			text-align: center;
			z-index: 1;

			@media (width <= 500px) {
				padding-top: 2em;
			}

			& h2 {
				font-family: var(--orbitron);
				font-size: clamp(var(--sm), 1.25vw, var(--h5));
				margin: -1rem 0 1rem 0;

				& span {
					color: var(--clr-blue);
					font-family: var(--bronova);
					font-size: clamp(var(--sm), 2vw, var(--h4));
					font-weight: 700;
				}
			}

			& p {
				color: var(--clr-main);
				font-family: var(--bronova);
				font-size: clamp(var(--sm), 1.25vw, var(--h5));
				margin: -0.5rem 0 2rem 0;

				& a {
					color: var(--clr-link);
					font-weight: 700;
				}
			}
		}
	}

	@keyframes animate {
		0% {
			background-position: 0;
		}

		50% {
			background-position: 50%;
		}

		100% {
			background-position: 0;
		}
	}
</style>
