<script>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import Title from '$lib/components/Title.svelte';

	$effect(() => {
		const main = document.querySelector('main');
		const gabeElements = document.querySelectorAll('.gabe');
		const pictures = document.querySelectorAll('.pictures');

		gsap.registerPlugin(ScrollTrigger);

		// responsive animations
		let mm = gsap.matchMedia();

		mm.add('(max-width: 767px', () => {
			gsap.set(pictures, { autoAlpha: 0 });
			gsap.set(gabeElements, { scale: 0.9 });

			let tl = gsap.timeline({ defaults: { duration: 1.5 } });

			tl.to(pictures, { autoAlpha: 1, duration: 2 }).from(gabeElements, {
				opacity: 0,
				stagger: 0.5
			});
		});

		mm.add('(min-width: 768px', () => {
			gsap.set(gabeElements, { scale: 0.75, x: '-30%', autoAlpha: 0 });

			let tl = gsap.timeline({ defaults: { duration: 1.5 } });

			tl.to(gabeElements, {
				x: 0,
				scale: 1,
				stagger: 0.5,
				repeat: 1,
				yoyo: true,
				autoAlpha: 1,
				scrollTrigger: {
					trigger: 'pictures',
					start: 'top 0%',
					end: '+=400%',
					toggleActions: 'play none none reverse',
					stagger: 0.75,
					scrub: 2
				}
			}).to(gabeElements, { scale: 1.1, duration: 2 });

			tl.to(
				gabeElements,
				{
					rotation: (i) => (i % 2 === 0 ? -2 : 2),
					duration: 1
				},
				0
			);
		});

		return () => {
			gsap.killTweensOf(main);
			gsap.killTweensOf(pictures);
			gsap.killTweensOf(gabeElements);
		};
	});
</script>

<main>
	<Title title="pics of me" />

	<h2>scroll down</h2>

	<section>
		<div class="pictures" aria-label="pictures">
			<aside class="flex">
				<img class="gabe" src="/photos/gabe.webp" alt="Gabriel Atwell" loading="lazy" />

				<img class="gabe" src="/photos/gabe2.webp" alt="Gabriel's face" loading="lazy" />

				<img src="/photos/gabe5.webp" alt="Gabriel" class="gabe" loading="lazy" />
			</aside>
		</div>

		<div class="pictures" aria-label="pictures">
			<aside class="flex">
				<img
					class="gabe ar58"
					src="/photos/gabe4.webp"
					alt="Gabriel in a restaurant"
					loading="lazy"
				/>

				<img
					src="/photos/autumn.webp"
					alt="Gabe and his daughter"
					class="gabe ar58"
					loading="lazy"
				/>

				<img
					class="gabe ar58"
					src="/photos/archie.webp"
					alt="Gabe's poodle Archie"
					loading="lazy"
				/>
			</aside>
		</div>

		<div class="pictures" aria-label="pictures">
			<aside class="flex">
				<img src="/photos/gabe3.webp" alt="Really old" class="gabe" loading="lazy" />

				<img src="/photos/wtf.webp" alt="Trying to burn gabe" class="gabe" loading="lazy" />

				<img
					src="/photos/wtf2.webp"
					alt="Gabe's face on hulk hogan"
					class="gabe ar11"
					loading="lazy"
				/>
			</aside>
		</div>

		<div class="pictures" aria-label="pictures">
			<aside class="flex">
				<img src="/photos/wtf3.webp" alt="when gabe was 5 years old" class="gabe" loading="lazy" />

				<img class="gabe" src="/logos/monkey.webp" alt="monkey" loading="lazy" />
			</aside>
		</div>
	</section>
</main>

<style>
	:root {
		--100: 100%;
	}

	@media screen and (width >= 300px) {
		main {
			padding-top: 5%;
			position: relative;

			& h2 {
				color: var(--text-gray);
				border-bottom: 1px solid var(--text-gray);
				font-family: var(--bronova);
				font-size: clamp(0.9rem, 1.5vw, 2rem);
				font-weight: 300;
				letter-spacing: 0.1em;
				margin: 0;
				width: fit-content;
				margin-inline: auto;
			}

			& section {
				width: var(--100);
				margin: 0;
				margin-bottom: 10%;
				padding-block: 10vh;

				& .pictures {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
					gap: 4rem;

					& img {
						width: 100%;
						height: auto;
					}

					& .flex {
						& .gabe {
							margin-inline: auto;
							margin-bottom: 2em;
							max-width: 20em;
							border-radius: 3%;

							&:hover {
								filter: drop-shadow(0 0 0.25rem var(--text-gray));
								opacity: 1;
							}

							&:not(:hover) {
								filter: drop-shadow(0);
								transition: filter 750ms ease-in-out;
								opacity: 0.75;
							}

							&.ar58 {
								aspect-ratio: 5 / 8;
							}

							&.ar11 {
								aspect-ratio: 1 / 1;
							}
						}
					}
				}
			}
		}
	}

	@media (width >= 850px) {
		.pictures {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 5%;

			& .flex {
				margin-bottom: 6em;
			}
		}
	}

	@media screen and (width >= 1200px) {
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
