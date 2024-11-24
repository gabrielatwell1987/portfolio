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

<main>
	<section>
		<div class="bento-grid" style="--row: 4">
			<div class="item" style="--row: span 1">
				<a href="/contact">
					<Image src="/icons/Contact-Dark.svg" alt="contact me" width="250" />
				</a>
			</div>

			<div class="item" style="--col: 2; --row: 1">
				<a href="/photos/robot">
					<Image src="/logos/robot.webp" alt="a robot" width="500" />
				</a>
			</div>

			<div class="item mb" style="--row: span 3">
				<a href="/projects">
					<Image src="/logos/skull-logo.webp" alt="atwell logo" width="500" />
				</a>
			</div>
		</div>
	</section>
</main>

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

	.bento-grid {
		display: grid;
		place-items: center;
		gap: var(--space);
	}

	section {
		margin-inline: auto;
		width: min(1000px, 100%);
	}

	main {
		line-height: 1.4;
		background-color: var(--surface-1);
		margin-top: 10rem;
		margin-bottom: 2rem;
		padding-inline: var(--space);
	}

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
			border 1s ease;
	}

	.item:hover {
		box-shadow: 0 0 5px 3px var(--white);
	}

	.item:not(:hover) {
		opacity: 0.5;
		transition:
			opacity 1s ease,
			border 1s ease;
	}

	.mb {
		margin-bottom: 11%;
	}

	@media (min-width: 50rem) {
		.bento-grid {
			grid-template-columns: repeat(var(--col-count, 3), 1fr);
			grid-template-rows: repeat(var(--row-count, 3), auto);
		}

		.bento-grid > * {
			grid-column: var(--col);
			grid-row: var(--row);
		}
	}
</style>
