<script>
	import gsap from 'gsap';
	import { goto } from '$app/navigation';
	import HeroTitle from '$lib/components/HeroTitle.svelte';

	let videoElement;

	$effect(() => {
		const heroVideo = document.querySelector('.hero-video');
		const heroContent = document.querySelector('.hero-content');

		gsap.from(heroVideo, { opacity: 0, duration: 1, delay: 0.5 });

		gsap.from(heroContent, { opacity: 0, y: 50, duration: 1.5, delay: 1 });

		document.addEventListener('visibilitychange', handleVisibilityChange);

		return () => {
			document.removeEventListener('visibilitychange', handleVisibilityChange);
		};
	});

	function handleVisibilityChange() {
		if (document.hidden && videoElement) {
			videoElement.pause(); // Pause the video when the page is hidden
		} else if (videoElement) {
			videoElement.play(); // Resume the video when the page becomes visible
		}
	}

	function proceedToMain() {
		localStorage.setItem('visitedLanding', 'true');
		goto('/landing');
	}
</script>

<main class="hero">
	<video autoplay muted loop playsinline class="hero-video" preload="true" bind:this={videoElement}>
		<source src="/videos/skully.mp4" type="video/mp4" />

		<source src="/videos/skully.webm" type="video/webm" />

		Your browser does not support the video tag.
	</video>

	<div class="hero-content">
		<HeroTitle title="Welcome! 👋" />

		<p>
			<span>This is the frontend portfolio of Gabe Atwell</span>! If you have any questions, you can
			contact me and I will get back to you.
		</p>

		<a href="/landing" class="cta-button" onclick={proceedToMain}>Enter site</a>
	</div>
</main>

<style>
	.hero {
		position: relative;
		width: 100%;
		height: 100vh;
		overflow: hidden;
	}

	.hero-video {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 1;
		opacity: 0.2;
	}

	.hero-content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		color: white;
		z-index: 1;

		& p {
			margin: 2rem 0;
			font-family: var(--bronova);
			font-size: clamp(1rem, 1.5vw, 1.75rem);

			& span {
				font-size: clamp(1.2rem, 1.5vw, 2rem);
				font-weight: 600;
				color: var(--sky);
			}
		}

		& .cta-button {
			padding: 0.8rem 1rem;
			background: var(--white);
			color: var(--blackest);
			border: none;
			border-radius: 6px;
			text-decoration: none;
			font-family: var(--orbitron);
			font-size: clamp(1rem, 1.15vw, 2rem);
			font-weight: 600;
			cursor: pointer;
			transition: background 0.3s ease;

			&:hover {
				background: rgba(255, 255, 255, 1);
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
