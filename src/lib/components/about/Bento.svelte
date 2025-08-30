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

<div class="bento">
	<main>
		<section>
			<div class="bento-grid">
				<div class="item">
					<a href="/contact">
						<div class="scale">
							<!-- <Image
								src="/icons/contactIcon.svg"
								alt="an icon for contact"
								width="500"
								aspectRatio="4/3"
							/> -->
							<svg
								width="161"
								height="134"
								viewBox="0 0 161 134"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									id="contactIcon"
									d="M5 5H156V101.64H98.4762L40.9524 125.8V101.64H5V5ZM40.9524 53.32H48.1429V59.36H40.9524V53.32ZM76.9048 53.32H84.0952V59.36H76.9048V53.32ZM112.857 53.32H120.048V59.36H112.857V53.32Z"
									stroke="#666"
									stroke-width="8"
								/>
							</svg>
						</div>

						<h2>contact</h2>

						<p>Feel free to contact me about anything!</p>
					</a>
				</div>

				<div class="item">
					<a href="/learn">
						<div class="scale">
							<svg
								width="151"
								height="121"
								viewBox="0 0 151 121"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									id="learnIcon"
									d="M75.5 60.4L19.177 37.901L22.65 120.8H7.55L11.174 34.6545L0 30.2L75.5 0L151 30.2L75.5 60.4ZM75.5 22.65C71.3475 22.65 67.95 24.311 67.95 26.425C67.95 28.539 71.3475 30.2 75.5 30.2C79.6525 30.2 83.05 28.539 83.05 26.425C83.05 24.311 79.6525 22.65 75.5 22.65ZM75.5 67.95L117.554 51.1135C122.914 58.2105 126.614 66.742 127.822 76.0285C125.557 75.7265 123.216 75.5 120.8 75.5C101.548 75.5 84.711 85.8435 75.5 101.246C70.8224 93.4012 64.1892 86.9051 56.2489 82.3923C48.3086 77.8796 39.3331 75.5048 30.2 75.5C27.784 75.5 25.4435 75.7265 23.1785 76.0285C24.3865 66.742 28.086 58.2105 33.4465 51.1135L75.5 67.95Z"
									fill="#666"
								/>
							</svg>
						</div>

						<h2>learn</h2>

						<p>If you'd like to learn about web technologies</p>
					</a>
				</div>

				<div class="item">
					<a href="/projects">
						<h2>projects</h2>

						<Image src="/icons/logoA.svg" alt="atwell logo" width="400" aspectRatio="16/9" />
					</a>
				</div>
			</div>
		</section>
	</main>
</div>

<style>
	:root {
		--space: 1rem;
		--surface-1: transparent;
		--surface-2: var(--clr-inverted);
		--gradient: radial-gradient(var(--clr-gray), var(--dark) 88%);
	}

	* {
		box-sizing: border-box;
	}

	main {
		line-height: 1.4;
		background-color: var(--surface-1);
		margin-bottom: 2rem;
		padding-inline: var(--space);

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

			& .item {
				width: 100%;
				box-shadow: 0 0 5px 2px var(--clr-gray);
				background-color: var(--surface-2);
				background-image: var(--gradient);
				padding: var(--space);
				border-radius: var(--radius);
				text-decoration: none;
				display: flex;
				justify-content: center;
				align-items: center;
				transition:
					opacity 1s ease,
					border 1s ease,
					box-shadow 1s ease;

				& .scale {
					scale: 0.6;
				}

				& h2 {
					font-family: var(--bronova-bold);
					font-size: clamp(var(--h5), 3vw, var(--h3));
					font-weight: 900;
					letter-spacing: -1px;
					color: var(--clr-blue);
					margin-bottom: 1rem;
					text-transform: uppercase;
					transition: border-bottom 0.5s ease;
					width: fit-content;
					margin-inline: auto;

					&:hover {
						text-decoration: underline;
						text-underline-offset: 0.5rem;
					}

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

					&:nth-child(2) {
						line-height: 1.5;
					}
				}

				& a {
					text-decoration: none;
					letter-spacing: 1px;

					&:focus,
					&:focus-visible {
						outline: 1px solid var(--clr-main);
						background: transparent;
					}
				}

				&:hover {
					box-shadow: 0 0 5px 3px var(--clr-gray);
					opacity: 1;
				}

				&:not(:hover) {
					opacity: 0.75;
					transition:
						opacity 1s ease,
						border 1s ease,
						box-shadow 1s ease;
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

	.bento {
		position: relative;
		margin-top: 2rem;
	}

	@media (width >= 768px) and (width < 1024px) {
		.bento {
			margin-top: 3rem;
		}
	}

	@media (width >= 1024px) and (width < 2000px) {
		.bento {
			margin-top: -20em;
		}
	}
</style>
