<script>
	import gsap from 'gsap';
	import { page } from '$app/stores';

	/** @type {{title1: any, title2: any, span: any, viewTransitionName: any, transitionPath: any}} */
	let { title1, title2, span, viewTransitionName, transitionPath } = $props();

	let transitionName = $derived(viewTransitionName || '');

	// Determine which transition name to use
	// let transitionName = $derived(shouldTransition ? viewTransitionName : '');

	$effect(() => {
		const left = document.querySelector('.left-word');
		const right = document.querySelector('.right-word');
		const middle = document.querySelector('.middle-word');

		const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

		gsap.set(['.left-word', '.right-word'], { y: 40 });
		tl.from(
			left,
			{
				opacity: 0,
				x: -100,
				duration: 2,
				ease: 'power3'
			},
			0
		);
		tl.from(
			right,
			{
				opacity: 0,
				x: 100,
				duration: 2,
				ease: 'power3'
			},
			'<'
		).fromTo(
			middle,
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

<section class="animated-title">
	<h1 class="left-word" style="view-transition-name: {transitionName};">{title1}</h1>
	<span class="middle-word">{span}</span>
	<h2 class="right-word">{title2}</h2>
</section>

<style>
	.animated-title {
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

		.left-word,
		.right-word {
			color: var(--clr-main);
			font-family: var(--bronova);
			font-size: clamp(var(--h6), 8vw, var(--xl));
			font-weight: 900;
			margin-top: 5%;
			letter-spacing: 1px;
			text-transform: lowercase;
			z-index: 2;
		}

		.middle-word {
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

	::view-transition-old(learn-heading) {
		opacity: 0;
	}

	::view-transition-group(learn-heading) {
		animation-duration: var(--link-transition-duration);
		animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	@media (width <= 768px) {
		::view-transition-old(learn-heading) {
			animation: none;
			opacity: 1;
		}

		::view-transition-new(learn-heading) {
			animation: none;
		}
	}
</style>
