<script>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Lenis from 'lenis';
	import Title from '$lib/components/Title.svelte';
	import SEO from '$lib/data/SEO.svelte';

	let lenis;

	onMount(() => {
		const main = document.querySelector('main');

		if (typeof window !== 'undefined') {
			// lenis
			lenis = new Lenis();

			lenis.on('scroll', ScrollTrigger.update);

			gsap.ticker.add((time) => {
				lenis.raf(time * 375);
			});

			gsap.ticker.lagSmoothing(0);
		}

		gsap.set('.gabe', { borderRadius: '5%' });

		// responsive animations
		let mm = gsap.matchMedia();

		mm.add('(min-width: 1000px', () => {
			gsap.registerPlugin(ScrollTrigger);

			gsap.set(main, { autoAlpha: 0 });

			let tl = gsap.timeline({ defaults: { duration: 1.5 } });

			tl.to('.gabe', {
				stagger: 0.5,
				scale: 0.75,
				duration: 5,
				repeat: 1,
				yoyo: true,
				scrollTrigger: {
					trigger: 'main',
					start: 'top bottom-=95%',
					stagger: -0.5,
					scrub: 1
				}
			}).to(main, { autoAlpha: 1 });

			return () => {
				gsap.set('.gabe', { borderRadius: '5px', scale: 0.9 });
			};
		});
	});
</script>

<SEO title="Photos of Me" description="Gabriel Atwell's Photos" keywords="photos of gabe" />

<section class="container">
	<Title title="Photos of me" />

	<div class="image-container">
		<img class="gabe" src="photos/autumn.webp" alt="" />
		<img class="gabe" src="photos/gabe2.webp" alt="" />
		<img class="gabe" src="photos/gabe4.webp" alt="" />
		<img class="gabe" src="photos/gabe3.webp" alt="" />
		<img class="gabe" src="photos/gabe7.webp" alt="" />
		<img class="gabe" src="photos/gabe5.webp" alt="" />
		<img class="gabe" src="photos/gabe6.webp" alt="" />
		<img class="gabe" src="photos/gabe8.webp" alt="" />
		<img class="gabe" src="photos/wtf.webp" alt="" />
		<img class="gabe" src="photos/gabe10.webp" alt="" />
		<img class="gabe" src="photos/wtf2.webp" alt="" />
	</div>
</section>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: var(--lexend);
	}

	.container {
		max-width: 85%;
		margin: 10% auto;
	}

	.container .image-container {
		columns: 3 250px;
		gap: 4%;
	}

	.container .image-container img {
		margin-bottom: 5%;
		border-radius: 10px;
		width: 100%;
		object-fit: cover;
	}
</style>
