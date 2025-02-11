<script>
	let { src, alt, title } = $props();
</script>

<div class="image-hero">
	<picture>
		<source srcset={src} media="(max-width: 768px)" />
		<source srcset={src} media="(max-width: 1200px)" />

		<img {src} {alt} width="1200" />
	</picture>

	<h1>{title}</h1>
</div>

<style>
	.image-hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 1rem;
		margin-bottom: 5rem;
		view-transition-name: hero-image;

		img {
			width: fit-content;
			aspect-ratio: 16 / 9;
			object-fit: cover;
			mask: linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, transparent);
			border-radius: 0.5em;
		}

		h1 {
			margin-block: -1.2em;
			padding-bottom: 1.5rem;
			font-size: clamp(2rem, 4vw, 5rem);
			font-weight: 700;
			text-shadow: 0 0 5px var(--smoke);
			color: var(--text-blue);
			font-family: var(--orbitron);

			@media (width <= 500px) {
				padding-bottom: 0;
				mix-blend-mode: normal;
			}
		}
	}

	::view-transition-old(hero-image),
	::view-transition-new(hero-image) {
		animation: none;
		mix-blend-mode: normal;
	}

	::view-transition-old(hero-image) {
		animation: scale-out 0.75s ease-out forwards;
	}

	::view-transition-new(hero-image) {
		animation: scale-in 0.75s ease-in forwards;
	}

	@keyframes scale-out {
		from {
			scale: 1;
			opacity: 1;
		}
		to {
			scale: 0.8;
			opacity: 0;
		}
	}

	@keyframes scale-in {
		from {
			scale: 1.2;
			opacity: 0;
		}
		to {
			scale: 1;
			opacity: 1;
		}
	}
</style>
