<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		const letters = gsap.utils.toArray('.animated-letter');

		gsap.set(letters, {
			scale: 0,
			autoAlpha: 0
		});

		gsap.to(letters, {
			scale: 1,
			transformOrigin: '50% 50%',
			autoAlpha: 1,
			duration: 2,
			delay: 0.5,
			ease: 'sine.inOut',
			stagger: {
				each: 0.25,
				from: 'edges'
			}
		});
	});
</script>

<!-- <main class="animated-text">
	<span class="animated-letter"> a </span>
	<span class="animated-letter"> t </span>
	<span class="animated-letter"> w </span>
	<span class="animated-letter"> e </span>
	<span class="animated-letter"> l </span>
	<span class="animated-letter"> l </span>
</main> -->

<h1 class="animated-text">
	<span class="animated-letter"> a </span>
	<span class="animated-letter"> b </span>
	<span class="animated-letter"> o </span>
	<span class="animated-letter"> u </span>
	<span class="animated-letter"> t </span>
	<span class="animated-letter space" />
	<span class="animated-letter"> m </span>
	<span class="animated-letter"> e </span>
</h1>

<style>
	.animated-text {
		font-family: var(--orbitron);
		font-size: clamp(2rem, 9vw, 20rem);
		font-weight: 700;
		color: var(--sky);
		mix-blend-mode: lighten;
		text-align: center;
	}

	.animated-letter {
		display: inline-block;
	}

	.space {
		width: 3.5rem;
	}

	@media (max-width: 768px) {
		.animated-text {
			font-weight: 400;
		}

		.space {
			width: 1.5rem;
		}
	}

	@keyframes drop {
		0% {
			transform: translateY(-100%);
			opacity: 0;
		}

		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
