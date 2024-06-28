<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	// import Image from '$lib/components/Image.svelte';

	export let title;

	onMount(() => {
		gsap.set('.hero-logo', { autoAlpha: 0, y: -100 });

		gsap.to('.hero-logo', {
			duration: 3,
			autoAlpha: 1,
			y: 0,
			ease: 'back.out(4)',
			delay: 0.75,
			letterSpacing: '15px'
		});
	});
</script>

<main>
	<div class="hero-logo">
		<!-- <Image src="/logos/mono-atwell.png" alt="Gabriel Atwell's Logo" /> -->
		<h1>{title}</h1>
	</div>
</main>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	main {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 30vh;
		margin-top: 10%;
	}

	h1 {
		font-size: clamp(3rem, 10vw, 15rem);
		letter-spacing: 5px;
		font-family: var(--montserrat);
		color: var(--dark-gray);
		text-transform: uppercase;
		text-align: center;
		margin-bottom: 22%;
	}

	@media (max-width: 300px) {
		main {
			height: 10vh;
		}
	}

	@media (max-width: 720px) {
		main {
			height: 20vh;
		}
	}

	@media (max-width: 990px) {
		main {
			height: 30vh;
		}
	}
</style>
