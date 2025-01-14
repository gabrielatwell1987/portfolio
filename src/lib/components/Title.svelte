<script>
	import { fade } from 'svelte/transition';
	import gsap from 'gsap';

	/** @type {{title: any}} */
	let { title } = $props();
	let duration = $state(300);

	$effect(() => {
		const letters = gsap.utils.toArray('.title span');

		const title = gsap.from(letters, {
			scale: 0,
			transformOrigin: '50% 50%',
			autoAlpha: 0,
			duration: 0.75,
			delay: 0.25,
			ease: 'sine.inOut',
			stagger: {
				each: 0.15,
				from: 'random'
			}
		});

		return () => {
			gsap.killTweensOf(title);
		};
	});
</script>

<main transition:fade={{ duration: duration }}>
	<h2 class="title" id="title" aria-label={title}>
		{@html title
			.split('')
			.map((letter) => `<span>${letter}</span>`)
			.join('')}
	</h2>
</main>

<style>
	* {
		position: relative;
	}

	@media (width > 300px) {
		.title {
			text-align: center;
			font-family: var(--anta);
			font-size: clamp(3.15rem, 10.5vw, 15rem);
			color: var(--blue);
			mix-blend-mode: lighten;
			letter-spacing: 5px;
			text-shadow: 0px 0px 5px var(--dark-gray);
			filter: drop-shadow(0px 0px 0.5rem var(--smoke));
			text-transform: uppercase;
			font-kerning: none;
			margin-top: 3rem;
		}

		#title {
			font-kerning: none;
		}
	}

	@media (width > 740px) {
		.title {
			letter-spacing: 20px;
			margin: 2rem auto;
		}
	}

	@media (width > 990px) {
		.title {
			font-weight: 800;
		}
	}
</style>
