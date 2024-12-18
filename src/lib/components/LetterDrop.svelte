<script>
	import gsap from 'gsap';
	import { fade } from 'svelte/transition';

	$effect(() => {
		const letters = gsap.utils.toArray('.animated-letter');
		const drop = gsap.utils.toArray('.drop');

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

		gsap.from(drop, {
			y: -30,
			duration: 2,
			ease: 'sine.inOut',
			stagger: {
				each: 0.5,
				from: 'start'
			}
		});
	});
</script>

<h1 class="animated-text" transition:fade={{ duration: 500 }}>
	<div class="tilt">
		<span class="animated-letter drop">a</span>
		<span class="animated-letter drop">b</span>
		<span class="animated-letter drop">o</span>
		<span class="animated-letter drop">u</span>
		<span class="animated-letter drop">t</span>
	</div>

	<span class="animated-letter space"></span>

	<span class="animated-letter">m</span>
	<span class="animated-letter">e</span>
</h1>

<style>
	.animated-text {
		font-family: var(--anta);
		font-size: clamp(2rem, 9vw, 20rem);
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
			font-size: clamp(2.3rem, 15vw, 20rem);
			display: inline-block;
			text-shadow: 5px 5px 5px var(--dark-gray);
			filter: drop-shadow(0px 0px 0.75rem var(--white));
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
</style>
