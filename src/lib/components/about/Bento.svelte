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
									stroke="var(--clr-main)"
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
									fill="var(--clr-main)"
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

						<!-- <Image src="/icons/lowgow.svg" alt="atwell logo" width="400" aspectRatio="16/9" /> -->
						<svg
							viewBox="0 0 450 451"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="atwell_svg"
						>
							<path
								d="M0.5 225.5C0.5 101.476 100.976 1 225 1C349.024 1 449.5 101.476 449.5 225.5C449.5 349.524 349.024 450 225 450C100.976 450 0.5 349.524 0.5 225.5ZM43 225.5C43 326.076 124.424 407.5 225 407.5C325.576 407.5 407 326.076 407 225.5C407 124.924 325.576 43.5 225 43.5C124.424 43.5 43 124.924 43 225.5ZM130.7 312.1C114.291 312.1 104.226 294.424 112.03 280.455L209.127 120.76L209.132 120.752L209.136 120.744C217.245 106.285 238.255 106.285 246.364 120.744L246.366 120.749L338.062 280.44C345.783 294.514 335.712 312.099 319.4 312.1H130.7Z"
								fill="var(--clr-inverted)"
								stroke="var(--clr-main)"
								stroke-width="5"
							/>
							<path
								d="M158.88 284.12C158.88 282.413 159.133 280.88 159.64 279.52C160.147 278.16 160.867 277 161.8 276.04C162.733 275.08 163.867 274.347 165.2 273.84C166.533 273.333 168.04 273.08 169.72 273.08C172.2 273.08 174.32 273.64 176.08 274.76L176.36 273.2H180.64V295H176.36L176.08 293.48C174.267 294.6 172.147 295.16 169.72 295.16C168.04 295.16 166.533 294.907 165.2 294.4C163.867 293.867 162.733 293.133 161.8 292.2C160.867 291.24 160.147 290.08 159.64 288.72C159.133 287.36 158.88 285.827 158.88 284.12ZM169.92 290.2C173.84 290.2 175.8 288.173 175.8 284.12C175.8 280.04 173.84 278 169.92 278C166 278 164.04 280.04 164.04 284.12C164.04 288.173 166 290.2 169.92 290.2ZM187.278 286.52V268.76H192.358L192.318 273.16H196.718V277.96H192.318L192.358 288.16C192.358 288.427 192.384 288.68 192.438 288.92C192.491 289.133 192.571 289.347 192.678 289.56C192.811 289.747 192.998 289.907 193.238 290.04C193.584 290.227 193.944 290.32 194.318 290.32C194.638 290.32 194.944 290.267 195.238 290.16C195.531 290.027 195.784 289.893 195.998 289.76C196.264 289.627 196.504 289.453 196.718 289.24L199.478 292.52C199.424 292.6 199.264 292.787 198.998 293.08C198.731 293.373 198.344 293.68 197.838 294C197.358 294.293 196.758 294.56 196.038 294.8C195.318 295.04 194.478 295.16 193.518 295.16C191.811 295.16 190.424 294.627 189.358 293.56C188.291 292.493 187.638 291.067 187.398 289.28C187.371 289.227 187.344 289 187.318 288.6C187.291 288.2 187.278 287.507 187.278 286.52ZM201.477 273.24H207.357L212.597 286.44L217.797 273.24H221.437L226.677 286.44L231.877 273.24H237.757L228.717 295H224.597L219.637 282.24L214.677 295H210.517L201.477 273.24ZM251.276 273.12C253.036 273.12 254.61 273.4 255.996 273.96C257.383 274.493 258.543 275.293 259.476 276.36C260.41 277.48 261.063 278.8 261.436 280.32C261.836 281.813 261.89 283.493 261.596 285.36L261.436 286.44H245.556C245.556 287.053 245.716 287.613 246.036 288.12C246.356 288.627 246.783 289.053 247.316 289.4C247.85 289.747 248.476 290.013 249.196 290.2C249.943 290.387 250.716 290.48 251.516 290.48C252.69 290.48 253.743 290.267 254.676 289.84C255.636 289.387 256.423 288.813 257.036 288.12L260.316 291.4C259.33 292.627 258.05 293.573 256.476 294.24C254.93 294.88 253.196 295.2 251.276 295.2C249.57 295.2 248.036 294.947 246.676 294.44C245.316 293.933 244.156 293.2 243.196 292.24C242.236 291.28 241.503 290.12 240.996 288.76C240.49 287.4 240.236 285.867 240.236 284.16C240.236 282.453 240.49 280.92 240.996 279.56C241.503 278.2 242.236 277.04 243.196 276.08C244.156 275.12 245.316 274.387 246.676 273.88C248.036 273.373 249.57 273.12 251.276 273.12ZM256.796 282.2C256.663 281.133 256.316 280.28 255.756 279.64C254.77 278.52 253.156 277.987 250.916 278.04C250.383 278.04 249.81 278.107 249.196 278.24C248.61 278.347 248.05 278.547 247.516 278.84C246.983 279.133 246.53 279.56 246.156 280.12C245.783 280.653 245.556 281.347 245.476 282.2H256.796ZM267.671 295V265.36H272.711V295H267.671ZM280.453 295V265.36H285.493V295H280.453Z"
								fill="var(--clr-main)"
							/>
						</svg>
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
				box-shadow: 0 2px 0 3px var(--clr-main);
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

				@media (width <= 768px) {
					box-shadow: 0 1px 0 2px var(--clr-main);
				}

				& .scale {
					scale: 0.6;
				}

				& .atwell_svg {
					width: 100%;
					height: auto;
					max-inline-size: 300px;
					min-width: 120px;

					@media (width <= 768px) {
						max-inline-size: 200px;
					}

					@media (width >= 1024px) {
						max-inline-size: 350px;
					}
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
					color: var(--clr-inverted);
					text-shadow:
						0 0 1px var(--clr-inverted),
						-2px -2px 0 var(--clr-main),
						2px -2px 0 var(--clr-main),
						-2px 2px 0 var(--clr-main),
						2px 2px 0 var(--clr-main),
						-2px 0 0 var(--clr-main),
						2px 0 0 var(--clr-main),
						0 -2px 0 var(--clr-main),
						0 2px 0 var(--clr-main);

					@media (width <= 768px) {
						text-shadow:
							0 0 1px var(--clr-inverted),
							-1px -1px 0 var(--clr-main),
							1px -1px 0 var(--clr-main),
							-1px 1px 0 var(--clr-main),
							1px 1px 0 var(--clr-main),
							-1px 0 0 var(--clr-main),
							1px 0 0 var(--clr-main),
							0 -1px 0 var(--clr-main),
							0 1px 0 var(--clr-main);
					}

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

					&:active {
						scale: 0.97;
					}
				}

				&:hover {
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
