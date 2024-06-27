<script>
	import SplitType from 'split-type';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	export let title;

	onMount(() => {
		const titleText = new SplitType('.title', { types: 'chars' });

		gsap.from(titleText.chars, {
			duration: 5,
			y: 75,
			scale: 0.2,
			opacity: 0.5,
			stagger: -0.2,
			ease: 'elastic.out(1.75, 0.5)'
		});
	});
</script>

<h1 class="title">{title}</h1>

<style>
	.title {
		font-size: 6rem;
		font-weight: 900;
		color: var(--purple);
		font-family: var(--anta);
		letter-spacing: 5px;
		text-transform: uppercase;
		margin: 2rem auto;
		text-align: center;
		text-shadow: 5px 5px 4px var(--dark-gray);
	}

	@media (max-width: 200px) {
		.title {
			font-size: 2.5rem;
		}
	}

	@media (max-width: 720px) {
		.title {
			font-size: 4rem;
		}
	}

	@media (max-width: 990px) {
		.title {
			font-size: 6rem;
		}
	}
</style>
