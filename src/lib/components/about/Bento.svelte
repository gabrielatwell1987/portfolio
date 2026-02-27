<script lang="ts">
	import Image from '$lib/components/layout/Image.svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	$effect(() => {
		const abortController = new AbortController();

		const main = () => {
			const articles = Array.from(document.querySelectorAll('article'));

			articles.forEach((article, index) => {
				setTimeout(() => {
					article.classList.add('reveal');
				}, index * 250);
			});
		};

		document.addEventListener('DOMContentLoaded', main, {
			signal: abortController.signal
		});

		return () => abortController.abort();
	});

	// gsap
	$effect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const bentoWrapper = document.querySelector('.bento-wrapper');
		const bentoItems = document.querySelectorAll('.bento-item');

		if (bentoWrapper && bentoItems.length > 0) {
			bentoItems.forEach((item) => {
				const isRight = item.hasAttribute('data-position-right');
				const initialX = isRight ? 50 : -50;

				gsap.fromTo(
					item,
					{ opacity: 0, x: initialX },
					{
						opacity: 1,
						x: 0,
						duration: 1,
						ease: 'power2.out',
						scrollTrigger: {
							trigger: bentoWrapper,
							start: 'top center-=250',
							toggleActions: 'play none none reverse'
						}
					}
				);
			});
		}

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	});
</script>

<div class="bento-wrapper">
	<article data-bento-article>
		<section>
			<div class="bento-grid">
				<div class="bento-item" data-position-left>
					<a href="/contact" class="bento-link" aria-label="Navigate to contact page">
						<div class="bento-icons">
							<Image
								src="https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/speech-bubble.svg"
								alt="contact icon"
								width="350"
								aspectRatio="1/1"
								class="contact_svg"
							/>
						</div>

						<h2>contact</h2>

						<p>Feel free to contact me about anything!</p>
					</a>
				</div>

				<div class="bento-item" data-position-right>
					<div data-position-center>
						<a href="/learn" class="bento-link" aria-label="Navigate to learn page">
							<div class="bento-icons">
								<Image
									src="https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/learn-icon.svg"
									alt="learn icon"
									width="350"
									aspectRatio="1/1"
									class="learn_svg"
								/>
							</div>

							<h2>learn</h2>

							<p>If you'd like to learn about web technologies</p>
						</a>
					</div>
				</div>

				<div class="bento-item" data-position-left>
					<a href="/projects" class="bento-link" aria-label="Navigate to projects page">
						<h2>projects</h2>

						<Image
							src="https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/lowgow.svg"
							alt="atwell logo"
							width="350"
							aspectRatio="1/1"
							class="atwell_svg"
						/>
					</a>
				</div>
			</div>
		</section>
	</article>
</div>

<style>
	:root {
		--space: 1rem;
		--surface-1: transparent;
		--surface-2: var(--clr-invert);
		--gradient: radial-gradient(var(--clr-gray), var(--dark) 88%);
	}

	* {
		box-sizing: border-box;
	}

	.bento-wrapper {
		margin: 0;

		& .bento-link {
			padding: var(--space);
			margin: 0;
			cursor: pointer;
			inline-size: fit-content;
			block-size: auto;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			text-decoration: none;
			color: inherit;
			font-family: inherit;

			&:focus,
			&:focus-visible {
				outline: 2px solid var(--clr-main);
				outline-offset: 2px;
				box-shadow: none;
			}

			&:active {
				scale: 0.95;
			}
		}

		& article[data-bento-article] {
			line-height: 1.4;
			margin: 0;
			padding-inline: var(--space);
			background-color: transparent;
			box-shadow: none;

			& section {
				margin-inline: auto;
				inline-size: min(1000px, 100%);
			}

			& .bento-grid {
				display: grid;
				gap: var(--space);
				grid-template-columns: 1fr;
				grid-template-areas:
					'item-one'
					'item-two'
					'item-three';
				position: relative;

				@media (width >= 768px) {
					grid-template-columns: repeat(2, 1fr);
					grid-template-areas:
						'item-one item-two'
						'item-three item-three';
				}

				@media (width >= 50rem) {
					grid-template-columns: repeat(3, 1fr);
					grid-template-areas:
						'item-one item-one item-two'
						'item-three item-three item-two';
				}

				@media (width <= 500px) {
					margin-top: 5em;
				}

				& .bento-item {
					inline-size: 100%;
					background-color: var(--surface-2);
					background-image: var(--gradient);
					text-decoration: none;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					padding-block-end: 1em;
					border: 2px solid var(--clr-main);
					border-radius: var(--radius);
					transition:
						border 1s ease-out,
						box-shadow 1s ease-out,
						transform 0.25s ease-out;

					&[data-position-left] {
						box-shadow: 7px 7px 0 var(--clr-main);
					}

					&[data-position-right] {
						box-shadow: -7px 7px 0 var(--clr-main);
					}

					&:not(:hover) {
						opacity: 0.9;
					}

					& .bento-icons {
						scale: 0.7;
					}

					& [data-position-center] {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						inline-size: 100%;
					}

					& h2 {
						font-family: var(--bronova-bold);
						font-size: clamp(var(--h4), 3vw, var(--h2));
						font-weight: 900;
						letter-spacing: -1px;
						margin-bottom: 1rem;
						text-transform: uppercase;
						transition: border-bottom 0.5s ease;
						inline-size: fit-content;
						margin-inline: auto;
						pointer-events: none;
						color: var(--clr-main);

						&:nth-child(2) {
							margin-top: 0.5em;
						}
					}

					& p {
						font-family: var(--bronova);
						font-size: clamp(var(--sm), 1.25vw, var(--h6));
						font-weight: 300;
						color: var(--clr-main);
						text-align: center;
						margin-bottom: 0;
						letter-spacing: 0px;
						pointer-events: none;

						&:nth-child(2) {
							line-height: 1.5;
						}
					}

					&:hover {
						transform: scale(0.99);
					}

					&:not(:hover) {
						transition:
							border 1s ease-out,
							box-shadow 1s ease-out,
							transform 0.25s ease-out;
					}

					&:nth-child(1) {
						grid-area: item-one;
					}

					&:nth-child(2) {
						grid-area: item-two;
					}

					&:nth-child(3) {
						grid-area: item-three;
					}

					&:last-child {
						margin-bottom: 2.3rem;
					}
				}
			}
		}
	}
</style>
