<script>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import Lenis from 'lenis';
	import Title from '$lib/components/Title.svelte';

	$effect(() => {
		const main = document.querySelector('main');
		const gabe = document.querySelectorAll('.gabe');

		gsap.registerPlugin(ScrollTrigger);
		ScrollTrigger.refresh();

		let lenis;

		if (typeof window !== 'undefined') {
			lenis = new Lenis();

			lenis.on('scroll', ScrollTrigger.update);

			gsap.ticker.add((time) => {
				lenis.raf(time * 250);
			});

			gsap.ticker.lagSmoothing(0);
		}

		gsap.set(gabe, { borderRadius: '3%' });

		// responsive animations
		let mm = gsap.matchMedia();

		mm.add('(max-width: 500px', () => {
			gsap.set(gabe, { scale: 0.8 });

			let tl = gsap.timeline({ defaults: { duration: 1.5 } });

			tl.to(gabe, {
				stagger: 0.5,
				scale: 1,
				duration: 2.75,
				repeat: 1,
				width: '500px',
				yoyo: true,
				scrollTrigger: {
					trigger: 'main',
					start: 'top bottom-=95%',
					end: '+=799%',
					stagger: 2,
					scrub: 1,
					invalidateOnRefresh: true
				}
			});
		});

		mm.add('(min-width: 501px', () => {
			gsap.set(main, { autoAlpha: 0 });
			gsap.set(gabe, { scale: 1 });

			let tl = gsap.timeline({ defaults: { duration: 1.5 } });

			tl.to(gabe, {
				stagger: 0.5,
				scale: 0.8,
				duration: 4,
				repeat: 1,
				yoyo: true,
				scrollTrigger: {
					trigger: 'main',
					start: 'top bottom-=90%',
					end: '+=500%',
					stagger: 0.75,
					scrub: 1
				}
			}).to(main, { autoAlpha: 1 });
		});

		return () => {
			lenis.off('scroll', ScrollTrigger.update);
			lenis.destroy();

			gsap.killTweensOf(main);
			gsap.killTweensOf(gabe);
		};
	});
</script>

<main>
	<Title title="images" />

	<section>
		<div class="pictures" aria-label="pictures">
			<aside class="flex">
				<img
					class="gabe"
					src="photos/gabe.webp"
					alt="Gabriel Atwell"
					width="350"
					height="450"
					loading="lazy"
				/>
				<img
					class="gabe"
					src="photos/gabe2.webp"
					alt="Gabriel's face"
					width="300"
					height="350"
					loading="lazy"
				/>
				<img src="/photos/gabe5.webp" alt="Gabriel" class="gabe" width="400" loading="lazy" />
			</aside>
		</div>

		<div class="pictures" aria-label="pictures">
			<aside class="flex">
				<img
					class="gabe"
					src="photos/gabe4.webp"
					alt="Gabriel in a restaurant"
					width="400"
					loading="lazy"
				/>

				<img
					src="/photos/autumn.webp"
					alt="Gabe and his daughter"
					class="gabe"
					width="400"
					loading="lazy"
				/>
				<img
					class="gabe"
					src="photos/archie.webp"
					alt="Gabe's poodle Archie"
					width="450"
					loading="lazy"
				/>
			</aside>
		</div>

		<div class="pictures" aria-label="pictures">
			<aside class="flex">
				<img src="/photos/gabe3.webp" alt="Really old" class="gabe" width="450" loading="lazy" />

				<img
					src="/photos/wtf.webp"
					alt="Trying to burn gabe"
					class="gabe"
					width="600"
					loading="lazy"
				/>
				<img
					src="/photos/wtf2.webp"
					alt="Gabe's face on hulk hogan"
					class="gabe"
					width="550"
					loading="lazy"
				/>
			</aside>
		</div>

		<div class="pictures" aria-label="pictures">
			<aside class="flex">
				<img
					src="/photos/wtf3.webp"
					alt="when gabe was 5 years old"
					class="gabe"
					width="425"
					loading="lazy"
				/>

				<img class="gabe" src="/logos/monkey.webp" alt="monkey" width="550" />
			</aside>
		</div>
	</section>
</main>

<style>
	:root {
		--100: 100%;
	}

	@media screen and (min-width: 300px) {
		main {
			padding-top: 5%;

			section {
				width: var(--100);
				margin: 0;
				margin-bottom: 10%;
				padding-block: 10vh;

				.flex {
					display: flex;
					flex-direction: column;
					gap: 2rem;
					margin-bottom: 2%;

					img {
						max-width: var(--100);
					}

					.gabe {
						margin: 1rem;
						margin-inline: auto;
						max-width: 20em;

						&:hover {
							transition: filter 750ms ease-in-out;
							filter: drop-shadow(0 0 0.25rem var(--off-white));
							opacity: 1;
						}

						&:not(:hover) {
							filter: drop-shadow(0);
							transition: filter 750ms ease-in-out;
							opacity: 0.75;
						}
					}
				}
			}
		}
	}

	@media (min-width: 850px) {
		.pictures {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 5%;
		}
	}

	@media screen and (min-width: 1200px) {
		main {
			text-align: center;

			section {
				padding: 1.5rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				flex-basis: var(--100);
				margin: 0 auto;
				background-color: transparent;

				.flex {
					display: flex;
					justify-content: center;
					flex-direction: row;
					gap: 8%;
				}
			}
		}
	}

	@keyframes wiggle {
		0% {
			rotate: 0deg;
			translate: 0 0;
		}
		25% {
			rotate: -2deg;
			translate: -5px 0;
		}
		80% {
			rotate: 2deg;
			translate: 5px 0;
		}
	}
</style>
