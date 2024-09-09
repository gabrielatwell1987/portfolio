<script>
	// import { onMount } from 'svelte';
	// import gsap from 'gsap';
	// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	export let leftTitle;
	export let rightTitle;

	// onMount(() => {
	// 	gsap.registerPlugin(ScrollTrigger);

	// 	const grid = document.querySelector('.grid');

	// 	const tl = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: grid,
	// 			start: 'top bottom',
	// 			end: 'bottom top'
	// 		}
	// 	});

	// 	tl.from('.inline', {
	// 		y: 50,
	// 		opacity: 0,
	// 		duration: 1.75
	// 	});
	// });
</script>

<section class="grid" aria-label="bio">
	<article class="inline right">
		<h2 class="title titleLeft">{leftTitle}</h2>

		<p class="right">
			The path that Gabe has chosen is the frontend path. One of his main interests is animations,
			especially animations on the web. Turning a website from being a static site to a dynamic site
			is what he thinks makes your website look a million times better, if you do it right.
		</p>
	</article>

	<article class="inline left">
		<h2 class="title titleRight">{rightTitle}</h2>

		<p class="left">
			A clean, crisp design is what Gabe tries to excel at. Visual hierarchy, whitespace, colors,
			typography, scaling, and contrast is what he knows best. These topics are the main key to make
			your website designs look professional and appealing to the eye.
		</p>
	</article>
</section>

<style>
	@media (min-width: 200px) {
		.title {
			font-size: 2.25rem;
			mix-blend-mode: difference;
			color: var(--purple);
			font-family: var(--montserrat);
		}

		p {
			line-height: 1.75;
			font-family: var(--montserrat);
			text-align: left;
			font-size: 1.25rem;
			color: var(--white);
		}

		.inline {
			display: inline-block;
			margin: 0.5rem auto;
			border-radius: 15px;
			padding: 0.5rem;
			background-color: hsla(210, 2%, 22%, 0.25);
			backdrop-filter: blur(5px);
			box-shadow: 0px 0px 20px var(--white);
		}
	}

	@media (min-width: 990px) {
		p {
			line-height: 1.5;
			font-size: clamp(1.1rem, 3vw, 1.5rem);
		}

		.title {
			font-size: clamp(1.5rem, 5vw, 5rem);
			letter-spacing: 5px;
		}

		.titleLeft {
			text-align: right;
		}

		.titleRight {
			text-align: left;
		}

		.grid {
			display: grid;
			grid-template-rows: repeat(2, 1fr);
			margin: 7% 0 -28% 0;
			gap: 3rem;
		}

		.inline {
			margin: 0 auto;
			padding: 1rem 2rem;
		}

		.right {
			text-align: right;
			font-size: 2rem;
			letter-spacing: 2px;
			line-height: 1.5;
		}

		.left {
			text-align: left;
			font-size: 2rem;
			letter-spacing: 2px;
			line-height: 1.5;
		}

		.title {
			color: var(--purple);
			font-family: var(--anta);
		}
	}

	@media (min-width: 1024px) {
		.grid {
			margin-bottom: -10%;
		}
	}

	@media (min-width: 1300px) {
		.left,
		.right {
			font-size: 1.1rem;
		}
	}

	@media (min-width: 1400px) {
		.left,
		.right {
			font-size: 1.75rem;
		}
	}
</style>
