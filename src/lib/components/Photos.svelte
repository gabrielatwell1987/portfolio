<script>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import Title from '$lib/components/Title.svelte';
	import archie from '$lib/images/archie.webp';
	import autumn from '$lib/images/autumn.webp';
	import gabe from '$lib/images/gabe.webp';
	import gabe2 from '$lib/images/gabe2.webp';
	import gabe3 from '$lib/images/gabe3.webp';
	import gabe4 from '$lib/images/gabe4.webp';
	import gabe5 from '$lib/images/gabe5.webp';
	import monkey from '$lib/images/monkey.webp';
	import wtf from '$lib/images/wtf.webp';
	import wtf2 from '$lib/images/wtf2.webp';
	import wtf3 from '$lib/images/wtf3.webp';

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
					end: '+=500%',
					toggleActions: 'play none none reverse',
					stagger: 0.75,
					scrub: 1
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

	<h2>scroll down <span class="arrow">&darr;</span></h2>

	<section>
		<div class="pictures" aria-label="pictures">
			<aside class="flex">
				<img class="gabe" src={gabe} alt="Gabriel Atwell" loading="lazy" />

				<img class="gabe" src={gabe2} alt="Gabriel's face" loading="lazy" />

				<img src={gabe5} alt="Gabriel" class="gabe" loading="lazy" />
			</aside>
		</div>

		<div class="pictures" aria-label="pictures">
			<aside class="flex">
				<img class="gabe ar58" src={gabe4} alt="Gabriel in a restaurant" loading="lazy" />

				<img src={autumn} alt="Gabe and his daughter" class="gabe ar58" loading="lazy" />

				<img class="gabe ar58" src={archie} alt="Gabe's poodle Archie" loading="lazy" />
			</aside>
		</div>

		<div class="pictures" aria-label="pictures">
			<aside class="flex">
				<img src={gabe3} alt="Really old" class="gabe" loading="lazy" />

				<img
					src={wtf}
					alt="Trying to burn gabe"
					class="gabe"
					loading="lazy"
					style="width: 50em; height: 20em;"
				/>

				<img
					src={wtf2}
					alt="Gabe's face on hulk hogan"
					class="gabe ar11"
					loading="lazy"
					style="width: 50em; height: 20em;"
				/>
			</aside>
		</div>

		<div class="pictures" aria-label="pictures">
			<aside class="flex">
				<img src={wtf3} alt="when gabe was 5 years old" class="gabe" loading="lazy" />

				<img class="gabe" src={monkey} alt="monkey" loading="lazy" />
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
				font-family: var(--bronova);
				font-size: clamp(0.9rem, 1.5vw, 2rem);
				font-weight: 300;
				letter-spacing: 0.1em;
				margin: 0;
				width: fit-content;
				margin-inline: auto;

				& .arrow {
					font-size: clamp(1.5rem, 2.5vw, 3rem);
				}
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
						place-items: center;

						& .gabe {
							margin-inline: auto;
							margin-bottom: 2em;
							max-width: 20em;
							border-radius: var(--radius);

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
