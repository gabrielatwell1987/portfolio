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
	let isAnySectionVisible = $derived(visibleSections.some((section) => section));

	$effect(() => {
		const pictureElements = document.querySelectorAll('.pictures');
		if (!pictureElements.length) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const index = Array.from(pictureElements).indexOf(entry.target);
					if (index >= 0) {
						// Update state directly
						if (entry.isIntersecting) {
							visibleSections[index] = true;
							animateImages(entry.target, index);
						} else if (entry.boundingClientRect.top > 0) {
							visibleSections[index] = false;
							imagesAnimated[index] = [];
						}
					}
				});
			},
			{
				threshold: 0.1
			}
		);

		// pictureElements.forEach((section) => observer.observe(section));
		const elements = Array.from(pictureElements);
		elements.forEach((section) => observer.observe(section));

		return () => {
			pictureElements.forEach((section) => observer.unobserve(section));
			observer.disconnect();
		};
	});

	function animateImages(container, sectionIndex) {
		const images = container.querySelectorAll('.gabe');

		// Initialize animation state array first
		if (!imagesAnimated[sectionIndex] || imagesAnimated[sectionIndex].length === 0) {
			imagesAnimated[sectionIndex] = Array(images.length).fill(false);
		}

		images.forEach((img, imgIndex) => {
			if (!imagesAnimated[sectionIndex][imgIndex]) {
				// Set initial state before animation
				img.style.opacity = '0';
				img.style.transform = 'translateY(20px)';

				setTimeout(() => {
					const animation = img.animate(
						[
							{ opacity: 0.5, transform: 'translateY(20px)' },
							{ opacity: 1, transform: 'translateY(0)' }
						],
						{
							duration: 750,
							easing: 'ease-out',
							fill: 'forwards'
						}
					);
					// Apply final state immediately when animation ends
					animation.onfinish = () => {
						img.style.opacity = '1';
						img.style.transform = 'translateY(0)';
					};

					imagesAnimated[sectionIndex][imgIndex] = true;
				}, imgIndex * 750);
			}
		});
	}
</script>

<main class:active-content={isAnySectionVisible}>
	<Title title="pics of me" />

	<h2>scroll down <span class="arrow">&darr;</span></h2>

	{#if isAnySectionVisible}
		<button class="back-to-top" onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
			Back to Top
		</button>
	{/if}

	<section>
		<article class="content">
			{#snippet imageSection(index, images)}
				<div class="pictures" aria-label="pictures" class:visible={visibleSections[index]}>
					<aside class="flex">
						{#each images as img, i}
							<img
								src={img.src}
								alt={img.alt}
								class="gabe {img.classes || ''}"
								loading="lazy"
								style="--index: {i}; {img.style || ''}"
							/>
						{/each}
					</aside>
				</div>
			{/snippet}

			{@render imageSection(0, [
				{ src: gabe, alt: 'Gabe sitting with his phone' },
				{ src: gabe2, alt: "Gabriel's face" },
				{ src: gabe5, alt: 'Gabe standing still' }
			])}

			{@render imageSection(1, [
				{ src: gabe4, alt: 'Gabe in a restaurant', classes: 'ar58' },
				{ src: autumn, alt: 'Gabe and his daughter Autumn', classes: 'ar58' },
				{ src: archie, alt: 'Gabe and his poodle Archie', classes: 'ar58' }
			])}

			{@render imageSection(2, [
				{ src: gabe3, alt: 'Gabe in Arizona fixing a car' },
				{ src: wtf, alt: 'Trying to burn Gabe', style: 'width: 50em; height: 20em;' },
				{
					src: wtf2,
					alt: "Gabe's face on hulk hogan",
					classes: 'ar11',
					style: 'width: 50em; height: 20em;'
				}
			])}

			{@render imageSection(3, [
				{
					src: wtf3,
					alt: 'when gabe was 5 years old',
					style: 'scale: .8;'
				},
				{ src: monkey, alt: 'a monkey with glasses' }
			])}
		</article>
	</section>
</main>

<style>
	:root {
		--100: 100%;
		--animation-duration: 1.5s;
		--stagger-delay: 0.5s;
		--subtle-rgb: 50, 50, 50;
	}

	@media screen and (width >= 300px) {
		main {
			padding-top: 5%;
			position: relative;

			&.active-content {
				background-color: rgba(var(--subtle-rgb), 0.05);
				transition: background-color 0.5s ease;
			}

			& .back-to-top {
				position: absolute;
				bottom: -1rem;
				right: 1em;
				background-color: transparent;
				color: var(--text-color);
				width: fit-content;
			}

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

				& .content {
					padding: 2rem;
					position: relative;
					background-color: transparent;
					box-shadow: 0 0 1rem var(--text-color);
					isolation: isolate;
					width: 100%;
					max-width: 1600px;
					margin-inline: auto;

					&::before {
						content: '';
						position: absolute;
						inset: 0;
						background-color: rgba(var(--subtle-rgb), 0.25);
						z-index: -1;
					}

					@media (width <= 500px) {
						padding: 0;
					}

					@media (width >= 768px) {
						padding: 4rem;
					}

					@media (width >= 1200px) {
						padding: 5em;
					}
				}

				& .pictures {
					opacity: 0;
					visibility: hidden;
					transition:
						opacity 1s ease-out,
						visibility 1s ease-out;

					&.visible {
						opacity: 1;
						visibility: visible;
					}

					& img {
						width: 100%;
						height: auto;
					}

					& .flex {
						display: grid;
						grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
						gap: 4rem;
						place-items: center;
						width: 100%;

						@media (width >= 768px) {
							gap: 3rem;
						}

						& .gabe {
							width: 100%;
							height: auto;
							margin-inline: auto;
							margin-bottom: 2em;
							border-radius: var(--radius);
							transition: filter 750ms ease-in-out;
							transform: translateY(0);
							object-fit: cover;
							scale: 0.85;

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
