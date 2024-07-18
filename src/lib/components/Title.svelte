<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import SplitType from 'split-type';

	export let title;

	onMount(() => {
		// SplitType
		const titleText = new SplitType('#title', { types: 'chars' });

		gsap.from(titleText.chars, {
			duration: 5,
			y: 75,
			scale: 0.2,
			opacity: 0.5,
			stagger: 0.2,
			ease: 'elastic.out(0.5, 0.2)'
		});
	});
</script>

<main>
	<h1 class="title" id="title">{title}</h1>
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
			color: var(--white);
			letter-spacing: 5px;
			text-shadow: 0px 0px 50px var(--smoke);
			text-transform: uppercase;
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
