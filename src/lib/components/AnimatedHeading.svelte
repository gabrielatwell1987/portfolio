<script>
	import gsap from 'gsap';

	/** @type {{title1: any, title2: any, span: any}} */
	let { title1, title2, span } = $props();

	$effect(() => {
		const h1L = document.querySelector('.h1-l');
		const h1R = document.querySelector('.h1-r');
		const spanMiddle = document.querySelector('.span');

		const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

		gsap.set(['.h1-l', 'h1-r'], { y: 50 });

		tl.from(
			h1L,
			{
				opacity: 0,
				x: -100,
				duration: 8,
				ease: 'power3'
			},
			0
		);
		tl.from(
			h1R,
			{
				opacity: 0,
				x: 100,
				duration: 8,
				ease: 'power3'
			},
			'<'
		).fromTo(
			spanMiddle,
			{ opacity: 0, scale: 0 },
			{
				opacity: 0.5,
				scale: 2,
				duration: 4,
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
	<h1 class="h1-r">{title2}</h1>
</section>

<style>
	.simpleHeading {
		display: flex;
		justify-content: center;
		align-items: center;
		overflow-x: clip;

		.h1-l,
		.h1-r {
			color: var(--white);
			font-family: var(--anta);
			font-size: clamp(1.2rem, 5vw, 5rem);
			font-weight: 100;
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
	}

	@media (max-width: 600px) {
		.simpleHeading {
			margin-bottom: -35%;
		}
	}
</style>
