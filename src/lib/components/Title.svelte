<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import SplitType from 'split-type';

	export let title;

	onMount(() => {
		gsap.set('.title', { autoAlpha: 0 });

		// SplitType
		const titleText = new SplitType('#title', { types: 'chars' });

		gsap.from(titleText.chars, {
			duration: 9,
			scale: 0,
			opacity: 0,
			stagger: {
				amount: 0.5,
				grid: 'auto',
				from: 'random'
			},
			ease: 'elastic.out(0.1, 0.2)'
		});

		gsap.to('.title', { autoAlpha: 1 });
	});
</script>

<main>
	<h1 class="title" id="title" aria-label={title}>{title}</h1>
</main>

<style>
	* {
		position: relative;
	}

	@media (min-width: 200px) {
		.title {
			text-align: center;
			font-family: var(--anta);
			font-size: clamp(2.75rem, 8vw, 10rem);
			color: var(--off-white);
			letter-spacing: 5px;
			text-shadow: 0px 0px 50px var(--smoke);
			text-transform: uppercase;
			filter: drop-shadow(0px 0px 0.75rem var(--smoke));
		}

		#title {
			font-kerning: none;
		}
	}

	@media (min-width: 740px) {
		.title {
			letter-spacing: 20px;
			margin: 2rem auto;
		}
	}

	@media (min-width: 990px) {
		.title {
			font-weight: 800;
			text-shadow: -5px 5px 4px var(--dark-gray);
		}
	}
</style>
