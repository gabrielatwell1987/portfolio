<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	onMount(() => {
		const item = document.querySelectorAll('.item');

		gsap.set(item, { autoAlpha: 0 });

		const tl = gsap.timeline();
		tl.to(
			item,
			{
				autoAlpha: 1,
				duration: 3.5,
				ease: 'none',
				stagger: {
					each: 1,
					from: 'random'
				}
			},
			'+=3'
		);

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
				<a href="/contact"><h2>Contact me if you have a question!</h2></a>
			</div>

			<div class="item" style="--col: 2; --row: 1">
				<a href="/photos/robot"><img src="/logos/robot.webp" alt="a robot" /></a>
			</div>

			<div class="item mb" style="--row: span 3">
				<a href="/projects"><img src="/logos/cursive-atwell.webp" alt="atwell logo" /></a>
			</div>
		</div>
	</section>
</main>

<style>
	:root {
		--space: 1.5rem;
		--text: #f8fafc;
		--surface-1: transparent;
		--surface-2: #0f172a;
		--surface-3: #1e293b;
		--gradient: linear-gradient(20deg, hsla(0 0% 0% / 0) 20%, hsla(0 0% 100% / 0.065) 120%);
	}

	* {
		box-sizing: border-box;
	}

	img {
		border-radius: 10px;
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
		margin-block: 5rem;
		padding-inline: var(--space);
	}

	h2 {
		color: var(--text);
		font-family: var(--mono);
		font-size: clamp(1.5rem, 2vw, 3rem);
		font-weight: 600;
		line-height: 1.1;
		letter-spacing: 5px;
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
	}

	.item:nth-of-type(1) {
		padding-bottom: 0;
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

		h2 {
			letter-spacing: 2px;
			font-weight: 400;
		}
	}
</style>
