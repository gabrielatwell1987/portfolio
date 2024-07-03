<script>
	import GSAP from './GsapIcon.svelte';
	import SK from './SvelteIcon.svelte';
	import Image from './Image.svelte';
</script>

<main id="bento-div" class="bt-div">
	<section class="bento-item bento-item-1">
		<a href="/contact"><h2>Contact me if you have a question!</h2></a>
	</section>

	<section class="bento-item bento-item-2">
		<a href="/blog/sveltekit"><SK /></a>

		<a href="/blog/greensock"><GSAP /></a>

		<div class="image">
			<a href="/blog/posts"
				><Image src="logos/animation.png" alt="A logo that says web animation techniques." /></a
			>
		</div>
	</section>

	<section class="bento-item bento-item-3">
		<a href="/"><img src="/icons/portfolio_logo.svg" alt="" /></a>
	</section>

	<section class="bento-item bento-item-4">
		<a href="/projects"><img src="/logos/cursive-atwell.jpg" alt="" /></a>
	</section>
</main>

<style>
	:root {
		--space-xs: 0.25rem;
		--space-sm: 1rem;
		--space-md: 1.25rem;
		--space-lg: 4rem;

		--border-radius: 0.75rem;
		--transition-fast: 0.5s ease-in-out;
	}

	h2 {
		font-size: 3rem;
		font-weight: 700;
		letter-spacing: 5px;
		color: var(--off-white);
		text-align: center;
		margin-bottom: 2rem;
		padding: 2rem;
		font-family: var(--lexend);
		text-transform: uppercase;
	}

	h2:hover {
		text-decoration: underline;
	}

	a {
		text-decoration: none;
		cursor: pointer;
	}

	#bento-div {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(10, minmax(0, 1fr));
		grid-auto-rows: 35rem; /* 560px */
		gap: var(--space-sm);
		padding: var(--space-sm);
	}

	.image {
		width: 25%;
		margin-left: 5%;
		transition: scale 500ms ease-in-out;
	}

	.image:hover {
		scale: 1.05;
	}

	.bento-item {
		overflow: hidden;
		border-radius: var(--border-radius);
		border: 3px solid var(--sky);
		position: relative;
	}
	.bento-item-1 {
		grid-column: span 4;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.bento-item-2 {
		grid-column: span 6;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.bento-item-3 {
		grid-column: span 6;
	}
	.bento-item-4 {
		grid-column: span 4;
	}

	.bento-item-4 img {
		object-fit: cover;
		width: 100%;
	}

	.bento-item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform var(--transition-fast);
	}

	.bento-item:hover img {
		transform: scale(1.05);
	}

	@media (max-width: 768px) {
		#bento-div {
			margin-top: 15%;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.bt-div,
		#bento-div {
			grid-template-columns: repeat(2, 1fr);
		}

		.bento-item-1,
		.bento-item-2,
		.bento-item-3,
		.bento-item-4 {
			grid-column: span 2;
		}
		.bento-item-3 img {
			object-fit: contain;
		}

		.image {
			width: 150%;
		}

		h2 {
			font-size: 2rem;
			font-weight: 700;
			letter-spacing: 5px;
			color: var(--off-white);
			text-align: center;
			margin-bottom: 2rem;
			padding: 2rem;
			font-family: var(--lexend);
			text-transform: uppercase;
		}

		a {
			text-decoration: none;
			cursor: pointer;
		}

		.bento-item {
			height: 50%;
		}

		.bento-item-4 img {
			object-fit: contain;
		}
	}
</style>
