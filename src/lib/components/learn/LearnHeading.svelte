<script>
	import gsap from 'gsap';
	import { page } from '$app/stores';

	/** @type {{title1: any, title2: any, span: any, viewTransitionName: any, transitionPath: any}} */
	let { title1, title2, span, viewTransitionName, transitionPath } = $props();

	// Check if we're on the target path for view transition
	let shouldTransition = $derived(
		viewTransitionName && transitionPath && $page.url.pathname === transitionPath
	);

	// Determine which transition name to use
	let transitionName = $derived(shouldTransition ? viewTransitionName : '');

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
				opacity: 0.65,
				scale: 2,
				duration: 1,
				ease: 'circ',
				stagger: 0.25
			},
			'<'
		);

		return () => {
			tl.kill();
		};
	});
</script>

<section class="simpleHeading">
	<h1 class="h1-l" style="view-transition-name: {transitionName};">{title1}</h1>
	<span class="span">{span}</span>
	<h2 class="h1-r">{title2}</h2>
</section>

<style>
	.simpleHeading {
		display: flex;
		justify-content: center;
		align-items: center;
		overflow-x: clip;
		padding-top: 1em;

		@media (width <= 1150px) {
			padding-top: 2em;
		}

		@media (width <= 768px) {
			padding-block: 1em;
		}

		.h1-l,
		.h1-r {
			color: var(--clr-main);
			font-family: var(--bronova);
			font-size: clamp(var(--h6), 8vw, var(--xl));
			font-weight: 900;
			margin-top: 5%;
			letter-spacing: 1px;
			text-transform: lowercase;
			z-index: 2;
		}

		.span {
			font-family: var(--ultra);
			font-size: clamp(4rem, 10vw, 15rem);
			letter-spacing: 0px;
			z-index: 1;
			color: var(--clr-invert);
			text-shadow:
				0 0 1px var(--clr-invert),
				-2px -2px 0 var(--clr-main),
				2px -2px 0 var(--clr-main),
				-2px 2px 0 var(--clr-main),
				2px 2px 0 var(--clr-main),
				-2px 0 0 var(--clr-main),
				2px 0 0 var(--clr-main),
				0 -2px 0 var(--clr-main),
				0 2px 0 var(--clr-main);
		}
	}
</style>
