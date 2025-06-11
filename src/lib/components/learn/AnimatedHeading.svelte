<script>
	import gsap from 'gsap';

	/** @type {{title1: any, title2: any, span: any}} */
	let { title1, title2, span } = $props();

	$effect(() => {
		const h1L = document.querySelector('.h1-l');
		const h1R = document.querySelector('.h1-r');
		const spanMiddle = document.querySelector('.span');

		const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

		gsap.set(['.h1-l', 'h1-r'], { y: 40 });

		tl.from(
			h1L,
			{
				opacity: 0,
				x: -100,
				duration: 2,
				ease: 'power3'
			},
			0
		);
		tl.from(
			h1R,
			{
				opacity: 0,
				x: 100,
				duration: 2,
				ease: 'power3'
			},
			'<'
		).fromTo(
			spanMiddle,
			{ opacity: 0, scale: 0 },
			{
				opacity: 0.5,
				scale: 2,
				duration: 1,
				ease: 'circ',
				stagger: 0.25
			},
			'<'
		);
	});
</script>

<section class="simpleHeading">
	<h1 class="h1-l">{title1}</h1>
	<span class="span">{span}</span>
	<h2 class="h1-r">{title2}</h2>
</section>

<style>
	.simpleHeading {
		display: flex;
		justify-content: center;
		align-items: center;
		overflow-x: clip;
		margin-top: -6em;

		@media (width <= 768px) {
			padding-bottom: 1em;
		}

		.h1-l,
		.h1-r {
			color: var(--clr-main);
			font-family: var(--bronova);
			font-size: clamp(1.2rem, 5vw, 5rem);
			font-weight: 100;
			z-index: 2;
			margin-top: 5%;
			letter-spacing: 5px;
		}

		.span {
			color: var(--clr-link);
			font-family: var(--orbitron);
			font-size: clamp(4rem, 10vw, 20rem);
			letter-spacing: 3px;
			z-index: 1;
		}

		@media (width <= 1150px) {
			margin-top: -3em;
		}

		@media (width <= 600px) {
			margin-top: -2em;
			margin-bottom: -25%;
		}
	}
</style>
