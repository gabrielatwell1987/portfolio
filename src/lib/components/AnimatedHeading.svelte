<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	export let title1;
	export let title2;
	export let span;

	onMount(() => {
		const h1L = document.querySelector('.h1-l');
		const h1R = document.querySelector('.h1-r');
		const spanMiddle = document.querySelector('.span');

		const tl = gsap.timeline();

		gsap.set(['.h1-l', 'h1-r'], { y: 50 });

		tl.from(
			h1L,
			{
				opacity: 0,
				x: -100,
				duration: 10,
				ease: 'power4.out'
			},
			'+=3'
		);
		tl.from(
			h1R,
			{
				opacity: 0,
				x: 100,
				duration: 10,
				ease: 'power4.out'
			},
			'<'
		).fromTo(
			spanMiddle,
			{ opacity: 0, scale: 0.5 },
			{
				opacity: 0.5,
				scale: 2,
				duration: 8,
				ease: 'power4.out',
				stagger: 0.25
			},
			'<'
		);
	});
</script>

<section class="simpleHeading">
	<h1 class="h1-l">{title1}</h1>
	<span class="span">{span}</span>
	<h1 class="h1-r">{title2}</h1>
</section>

<style>
	.simpleHeading {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.h1-l,
	.h1-r {
		color: var(--white);
		font-family: var(--anta);
		font-size: clamp(1.2rem, 5vw, 5rem);
		z-index: 2;
		margin-top: 5%;
		letter-spacing: 5px;
	}

	.span {
		color: var(--smoke);
		font-family: var(--orbitron);
		font-size: clamp(4rem, 10vw, 20rem);
		letter-spacing: 3px;
		z-index: 1;
	}

	@media (max-width: 600px) {
		.simpleHeading {
			margin-bottom: -35%;
		}
	}
</style>
