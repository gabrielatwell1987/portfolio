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
			tl.to(pictures, { autoAlpha: 1, duration: 2 });
		});

		return () => {
			gsap.killTweensOf(main);
			gsap.killTweensOf(pictures);
			gsap.killTweensOf(gabeElements);
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
					class="gabe ar58"
					src="photos/gabe4.webp"
					alt="Gabriel in a restaurant"
					width="400"
					loading="lazy"
				/>

				<img
					src="/photos/autumn.webp"
					alt="Gabe and his daughter"
					class="gabe ar58"
					width="400"
					loading="lazy"
				/>

				<img
					class="gabe ar58"
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
					loading="lazy"
					style="width: 55em; height: 20em;"
				/>

				<img
					src="/photos/wtf2.webp"
					alt="Gabe's face on hulk hogan"
					class="gabe ar11"
					loading="lazy"
					style="width: 55em; height: 20em;"
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

	@media screen and (width >= 300px) {
		main {
			padding-top: 5%;
			position: relative;

			section {
				width: var(--100);
				margin: 0;
				margin-bottom: 10%;
				padding-block: 10vh;

				& .pictures {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
					gap: 2rem;

					& img {
						width: 100%;
						height: auto;
					}
				}

				.flex {
					display: flex;
					gap: 2rem;
					margin-bottom: 2%;
					align-items: center;

					img {
						max-width: var(--100);
					}

					.gabe {
						margin-inline: auto;
						margin-bottom: 3rem;
						max-width: 20em;
						border-radius: 3%;
						filter: drop-shadow(0);
						transition:
							filter 500ms ease-in-out,
							opacity 200ms ease-in-out,
							transform 1s ease-in-out;
						opacity: 0.75;
						transform: translate(0, 0);

						&:hover {
							filter: drop-shadow(0 0 0.25rem var(--text-gray));
							opacity: 1;
							transform: scale(1.1);
							z-index: 10;
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

	@media (width >= 850px) {
		.pictures {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 5%;
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
