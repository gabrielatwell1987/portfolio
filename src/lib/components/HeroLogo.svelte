<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import Image from '$lib/components/Image.svelte';

	onMount(() => {
		gsap.set('.hero-logo', { autoAlpha: 0 });

		gsap.to('.hero-logo', {
			duration: 3,
			autoAlpha: 1,
			y: -100,
			ease: 'sin.out',
			delay: 0.75
		});
	});
</script>

<main>
	<div class="hero-logo">
		<Image src="/logos/mono-atwell.png" alt="Gabriel Atwell's Logo" />
	</div>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		margin-top: 15%;
	}

	@media (max-width: 300px) {
		main {
			margin-top: 17rem;
			margin-bottom: 10%;
		}
	}

	/* @media (max-width: 720px) {
		main {
			margin-top: 15%;
			margin-bottom: 10%;
		}

		.hero-logo {
			width: 100%;
		}
	} */

	/* @media (max-width: 990px) {
		main {
			margin-top: 10%;
			margin-bottom: 10%;
		}

		.hero-logo {
			width: 70px;
		}
	} */
</style>
