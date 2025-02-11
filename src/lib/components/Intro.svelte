<script>
	import { goto } from '$app/navigation';
	import HeroTitle from '$lib/components/HeroTitle.svelte';

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

		<h1>
			<span>This is the frontend portfolio of Gabe Atwell!</span>
		</h1>

		<p>
			If you have any questions, you can <a href="/contact">contact</a> me and I will get back to you.
		</p>

		<a href="/landing" class="cta-button" onclick={proceedToMain}>Enter site</a>
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
			opacity: var(--opacity);
		}

		& .intro-content {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			text-align: center;
			z-index: 1;

			& h1 {
				font-family: var(--orbitron);
				font-size: clamp(0.9rem, 1.25vw, 1.5rem);
				margin: -1rem 0 1rem 0;

				& span {
					color: var(--text-blue);
					font-family: var(--bronova);
					font-size: clamp(0.99rem, 2vw, 2rem);
					font-weight: 700;
				}
			}

			& p {
				color: var(--text-color);
				font-family: var(--bronova);
				font-size: clamp(0.9rem, 1.25vw, 1.5rem);
				margin: -0.5rem 0 2rem 0;

				& a {
					color: var(--text-link);
					font-weight: 700;
				}
			}

			& .cta-button {
				padding: 0.8em 1em;
				background: var(--white);
				color: var(--light-text);
				border: none;
				border-radius: 0.3em;
				text-decoration: none;
				font-family: var(--orbitron);
				font-size: clamp(1rem, 1.15vw, 2rem);
				font-weight: 600;
				letter-spacing: 2px;
				cursor: pointer;
				transition: background 0.3s ease;

				&:hover {
					background: var(--off-white);
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
