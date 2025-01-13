<script>
	import Image from '$lib/components/Image.svelte';

	let { link } = $props();

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
			<div class="bento-grid" style="--row: 4">
				<div class="item" style="--row: span 1">
					<a href="/contact">
						<Image src="/icons/Contact-Dark.svg" alt="contact me" width="250" />
					</a>
				</div>

				<div class="item" style="--col: 2; --row: 1">
					<a href="/blog">
						<Image src="/logos/learn.webp" alt="learning web techniques" width="500" />
					</a>
				</div>

				<div class="item mb" style="--row: span 3">
					<a href="/projects">
						<Image src="/logos/logoA.webp" alt="atwell logo" width="500" />
					</a>
				</div>
			</div>
		</section>
	</main>
</div>

<style>
	:root {
		--space: 1.5rem;
		--surface-1: transparent;
		--surface-2: #0f172a;
		--surface-3: #1e293b;
		--gradient: linear-gradient(20deg, hsla(0 0% 0% / 0) 20%, hsla(0 0% 100% / 0.065) 120%);
	}

	* {
		box-sizing: border-box;
	}

	main {
		line-height: 1.4;
		background-color: var(--surface-1);
		margin-top: 10rem;
		margin-bottom: 2rem;
		padding-inline: var(--space);

		section {
			margin-inline: auto;
			width: min(1000px, 100%);
		}

		.bento-grid {
			display: grid;
			place-items: center;
			gap: var(--space);

			.item {
				border: 1px solid var(--surface-3);
				background-color: var(--surface-2);
				background-image: var(--gradient);
				padding: var(--space);
				border-radius: 0.5rem;
				text-decoration: none;
				display: flex;
				justify-content: center;
				align-items: center;
				transition:
					opacity 1s ease,
					border 1s ease,
					box-shadow 1s ease;

				&:hover {
					box-shadow: 0 0 5px 3px var(--white);
					opacity: 1;
				}

				&:not(:hover) {
					opacity: 0.75;
					transition:
						opacity 1s ease,
						border 1s ease,
						box-shadow 1s ease;
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

	@media (min-width: 50rem) {
		.bento-grid {
			grid-template-columns: repeat(var(--col-count, 3), 1fr);
			grid-template-rows: repeat(var(--row-count, 3), auto);

			& > * {
				grid-column: var(--col);
				grid-row: var(--row);
			}
		}
	}

	@media (min-width: 1400px) {
		.bento {
			margin-top: -30em;
			margin-bottom: -7em;
		}
	}
</style>
