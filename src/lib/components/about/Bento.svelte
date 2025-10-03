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
					<button
						href="/contact"
						onclick={() => (window.location.href = '/contact')}
						class="bento-link"
						aria-label="Navigate to contact page"
					>
						<div class="scale">
							<Image
								src="/icons/contactIcon.svg"
								alt="contact icon"
								width="350"
								aspectRatio="1/1"
								class="contact_svg"
							/>
						</div>

						<h2>contact</h2>

						<p>Feel free to contact me about anything!</p>
					</button>
				</div>

				<div class="item">
					<button
						href="/learn"
						onclick={() => (window.location.href = '/learn')}
						class="bento-link"
						aria-label="Navigate to learn page"
					>
						<div class="scale">
							<Image
								src="/icons/learnIcon.svg"
								alt="learn icon"
								width="350"
								aspectRatio="1/1"
								class="learn_svg"
							/>
						</div>

						<h2>learn</h2>

						<p>If you'd like to learn about web technologies</p>
					</button>
				</div>

				<div class="item">
					<button
						href="/projects"
						onclick={() => (window.location.href = '/projects')}
						class="bento-link"
						aria-label="Navigate to projects page"
					>
						<h2>projects</h2>

						<Image
							src="/icons/lowgow.svg"
							alt="atwell logo"
							width="350"
							aspectRatio="1/1"
							class="atwell_svg"
						/>
					</button>
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

	.bento-link {
		padding: var(--space);
		margin: 0;
		cursor: pointer;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		color: inherit;
		font-family: inherit;
		border-radius: var(--radius);
		border: none;
		background: none;

		-webkit-user-select: none;
		user-select: none;
		-webkit-touch-callout: none;
		-webkit-tap-highlight-color: transparent;

		&:focus,
		&:focus-visible {
			outline: 2px solid var(--clr-link);
			outline-offset: 2px;
		}

		&:active {
			scale: 0.97;
		}
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
					pointer-events: none;
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
					pointer-events: none;

					&:nth-child(2) {
						line-height: 1.5;
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
