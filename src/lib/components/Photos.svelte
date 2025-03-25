<script>
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

	let visibleSections = $state([false, false, false, false]);
	let imagesAnimated = $state([[], [], [], []]);

	$effect(() => {
		const pictureElements = document.querySelectorAll('.pictures');

		if (!pictureElements.length) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const index = Array.from(pictureElements).indexOf(entry.target);
					if (index >= 0) {
						if (entry.isIntersecting) {
							visibleSections[index] = true;

							// Animate the images when section becomes visible
							const images = entry.target.querySelectorAll('.gabe');
							images.forEach((img, imgIndex) => {
								// Only animate if not already animated
								if (!imagesAnimated[index][imgIndex]) {
									setTimeout(() => {
										img.animate(
											[
												{ opacity: 0, transform: 'translateY(20px)' },
												{ opacity: 1, transform: 'translateY(0)' }
											],
											{
												duration: 1000,
												easing: 'ease-out',
												fill: 'forwards'
											}
										);
										// Mark as animated
										imagesAnimated[index][imgIndex] = true;
									}, imgIndex * 500); // Stagger delay
								}
							});

							// Update animation state array
							imagesAnimated[index] = Array(images.length).fill(false);
						} else if (entry.boundingClientRect.top > 0) {
							// Only reset when scrolling back up
							visibleSections[index] = false;
							imagesAnimated[index] = [];
						}
					}
				});
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 0.1
			}
		);

		pictureElements.forEach((section) => {
			observer.observe(section);
		});

		// Cleanup when component is destroyed
		return () => {
			pictureElements.forEach((section) => {
				observer.unobserve(section);
			});
		};
	});
</script>

<main>
	<Title title="pics of me" />

	<h2>scroll down <span class="arrow">&darr;</span></h2>

	<section>
		<div class="pictures" aria-label="pictures" class:visible={visibleSections[0]}>
			<aside class="flex">
				<img class="gabe" src={gabe} alt="Gabriel Atwell" loading="lazy" style="--index: 0" />

				<img class="gabe" src={gabe2} alt="Gabriel's face" loading="lazy" style="--index: 1" />

				<img src={gabe5} alt="Gabriel" class="gabe" loading="lazy" style="--index: 2" />
			</aside>
		</div>

		<div class="pictures" aria-label="pictures" class:visible={visibleSections[1]}>
			<aside class="flex">
				<img
					class="gabe ar58"
					src={gabe4}
					alt="Gabriel in a restaurant"
					loading="lazy"
					style="--index: 0"
				/>

				<img
					src={autumn}
					alt="Gabe and his daughter"
					class="gabe ar58"
					loading="lazy"
					style="--index: 1"
				/>

				<img
					class="gabe ar58"
					src={archie}
					alt="Gabe's poodle Archie"
					loading="lazy"
					style="--index: 2"
				/>
			</aside>
		</div>

		<div class="pictures" aria-label="pictures" class:visible={visibleSections[2]}>
			<aside class="flex">
				<img src={gabe3} alt="Really old" class="gabe" loading="lazy" style="--index: 0" />

				<img
					src={wtf}
					alt="Trying to burn gabe"
					class="gabe"
					loading="lazy"
					style="width: 50em; height: 20em; --index: 1"
				/>

				<img
					src={wtf2}
					alt="Gabe's face on hulk hogan"
					class="gabe ar11"
					loading="lazy"
					style="width: 50em; height: 20em; --index: 2"
				/>
			</aside>
		</div>

		<div class="pictures" aria-label="pictures" class:visible={visibleSections[3]}>
			<aside class="flex">
				<img
					src={wtf3}
					alt="when gabe was 5 years old"
					class="gabe"
					loading="lazy"
					style="--index: 0"
				/>

				<img class="gabe" src={monkey} alt="monkey" loading="lazy" style="--index: 1" />
			</aside>
		</div>
	</section>
</main>

<style>
	:root {
		--100: 100%;
		--animation-duration: 1.5s;
		--stagger-delay: 0.5s;
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
					animation: fadeIn 1s ease-in-out infinite alternate;
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
					opacity: 0;
					visibility: hidden;
					transition:
						opacity 1s ease-out,
						visibility 1s ease-out;

					&.visible {
						opacity: 1;
						visibility: visible;
					}

					@media (width <= 767px) {
						&.visible .gabe {
							opacity: 0;
						}
					}

					@media (width >= 768px) {
						&.visible .gabe {
							opacity: 0;
						}
					}

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
							transition: filter 750ms ease-in-out;
							transform: translateY(0);

							@media (width <= 500px) {
								scale: 0.9;
							}

							&:hover {
								filter: drop-shadow(0 0 0.25rem var(--text-gray));
								animation-name: wiggle;
								animation-duration: 1s;
								animation-timing-function: ease-in-out;
								animation-iteration-count: infinite;
							}

							&:not(:hover) {
								filter: drop-shadow(0);
								transition: filter 750ms ease-in-out;
								/* animation-name: none; */
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

	@keyframes fadeIn {
		0% {
			opacity: 0;
			transform: translateY(20px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes wiggle {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(-2deg);
		}
		80% {
			transform: rotate(2deg);
		}
	}
</style>
