<script>
	import Image from '$lib/components/layout/Image.svelte';

	$effect(() => {
		const main = () => {
			const articles = Array.from(document.querySelectorAll('article'));

			articles.forEach((article, index) => {
				setTimeout(() => {
					article.classList.add('reveal');
				}, index * 250);
			});
		};
		document.addEventListener('DOMContentLoaded', main);
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
								src="/icons/speech-bubble.svg"
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
									src="/icons/learn-icon.svg"
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
							src="/icons/lowgow.svg"
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
		position: relative;
		margin-top: 2rem;

		@media (width >= 768px) and (width < 1024px) {
			margin-top: 3rem;
		}

		@media (width >= 1024px) and (width < 2000px) {
			margin-top: -20em;
		}

		& .bento-link {
			padding: var(--space);
			margin: 0;
			cursor: pointer;
			width: fit-content;
			height: auto;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			text-decoration: none;
			color: inherit;
			font-family: inherit;

			&:focus,
			&:focus-visible {
				outline: 2px solid var(--clr-link);
				outline-offset: 2px;
			}

			&:active {
				scale: 0.97;
			}
		}

		& article[data-bento-article] {
			line-height: 1.4;
			background-color: var(--surface-1);
			margin-bottom: 2rem;
			padding-inline: var(--space);
			background-color: transparent;
			box-shadow: none;

			& section {
				margin-inline: auto;
				width: min(1000px, 100%);
			}

			& .bento-grid {
				display: grid;
				gap: var(--space);
				grid-template-columns: 1fr;
				grid-template-areas:
					'item-one'
					'item-two'
					'item-three';
				margin-bottom: 2rem;
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
					width: 100%;
					background-color: var(--surface-2);
					background-image: var(--gradient);
					text-decoration: none;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					padding-bottom: 1em;
					border: 2px solid var(--clr-main);
					border-radius: var(--radius);
					transition:
						border 1s ease-out,
						box-shadow 1s ease-out,
						transform 0.25s ease-out;

					&[data-position-left] {
						@media (width >= 768px) {
							box-shadow: 4px 4px 0 var(--clr-main);
						}

						@media (width <= 768px) {
							box-shadow: 0 0 1px var(--clr-main);
						}
					}

					&[data-position-right] {
						@media (width >= 768px) {
							box-shadow: -4px 4px 0 var(--clr-main);
						}

						@media (width <= 768px) {
							box-shadow: 0 0 1px var(--clr-main);
						}
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
						width: 100%;
					}

					& h2 {
						font-family: var(--bronova-bold);
						font-size: clamp(var(--h5), 3vw, var(--h3));
						font-weight: 900;
						letter-spacing: -1px;
						margin-bottom: 1rem;
						text-transform: uppercase;
						transition: border-bottom 0.5s ease;
						width: fit-content;
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

				&:last-child {
					margin-bottom: 11%;
				}
			}
		}
	}
</style>
