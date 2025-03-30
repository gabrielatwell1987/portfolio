<script>
	import Image from '$lib/components/Image.svelte';

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
						<h2>contact</h2>

						<p>Feel free to contact me about anything!</p>
					</a>
				</div>

				<div class="item">
					<a href="/learn">
						<h2>learn</h2>

						<p>If you'd like to learn about web technologies</p>
					</a>
				</div>

				<div class="item">
					<a href="/projects">
						<h2>projects</h2>

						<Image src="/logos/logoA.webp" alt="atwell logo" width="500" />
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
		--surface-2: var(--text-anti);
		--gradient: radial-gradient(var(--text-gray), var(--dark) 88%);
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

				box-shadow: 0 0 5px 2px var(--text-gray);
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

				& h2 {
					font-family: var(--bronova-bold);
					font-size: clamp(1.25rem, 3vw, 1.75rem);
					font-weight: 200;
					letter-spacing: 2px;
					color: var(--dark-text);
					margin-bottom: 1rem;
					text-transform: uppercase;
					transition: border-bottom 0.5s ease;
					width: fit-content;
					margin-inline: auto;

					&:hover {
						text-decoration: underline;
						text-underline-offset: 0.5rem;
					}
				}

				& p {
					font-family: var(--bronova);
					font-size: clamp(1rem, 1.25vw, 1.25rem);
					font-weight: 300;
					color: var(--dark-text);
					text-align: center;
					margin-bottom: 0;

					&:nth-child(2) {
						line-height: 1.5;
					}
				}

				& a {
					text-decoration: none;

					&:focus,
					&:focus-visible {
						outline: 1px solid var(--text-color);
						background: transparent;
					}
				}

				&:hover {
					box-shadow: 0 0 5px 3px var(--text-gray);
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
