<script>
	import gsap from 'gsap';
	import { fade } from 'svelte/transition';

	$effect(() => {
		const letters = gsap.utils.toArray('.animated-letter');

		gsap.set(letters, {
			scale: 0,
			autoAlpha: 0
		});

		gsap.to(letters, {
			scale: 1,
			transformOrigin: '50% 50%',
			autoAlpha: 1,
			duration: 1,
			delay: 0.5,
			ease: 'sine.inOut',
			stagger: {
				each: 0.15,
				from: 'edges'
			}
		});
	});
</script>

<h1 class="animated-text" transition:fade={{ duration: 500 }}>
	<div class="tilt">
		<span class="animated-letter"> a </span>
		<span class="animated-letter"> b </span>
		<span class="animated-letter"> o </span>
		<span class="animated-letter"> u </span>
		<span class="animated-letter"> t </span>
	</div>
	<span class="animated-letter space"></span>
	<span class="animated-letter"> m </span>
	<span class="animated-letter"> e </span>
</h1>

<style>
	.animated-text {
		font-family: var(--orbitron);
		font-size: clamp(2.5rem, 9vw, 20rem);
		color: var(--sky);
		mix-blend-mode: lighten;
		text-align: center;

		.animated-letter {
			display: inline-block;
		}

		.space {
			width: 3.5rem;
		}

		.tilt {
			transform: rotate(-10deg);
			font-size: clamp(2.3rem, 9vw, 20rem);
			display: inline-block;
			text-shadow: 6px 6px 0px #666;
		}
	}

	@media (max-width: 768px) {
		.animated-text {
			font-weight: 400;

			.space {
				width: 1.5rem;
			}

			.tilt {
				text-shadow: 2px 2px 0px #666;
			}
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
