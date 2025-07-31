<script>
	let { src, alt, title } = $props();
</script>

<div class="image-hero">
	<picture>
		<source
			srcset="/logos/svelteCode-480.webp 480w, /logos/svelteCode-768.webp 768w, /logos/svelteCode-1200.webp 1200w"
			sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, 1200px"
		/>
		<!-- Fallback for browsers that don't support srcset -->
		<img
			src="/logos/svelteCode-768.webp"
			{alt}
			width="1200"
			height="675"
			decoding="async"
			style="aspect-ratio: 16/9; max-width: 100%; height: auto;"
		/>
	</picture>

	<h1>{title}</h1>
</div>

<style>
	.image-hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 5rem;
		width: 100vw;
		margin-left: calc(-50vw + 50%);
		position: relative;
		padding-top: 2em;
		aspect-ratio: 16 / 9;
		contain: layout;
		min-height: 50vh;

		@media (width <= 768px) {
			padding-top: 1em;
			margin-bottom: 2.5em;
			min-height: 40vh;
		}

		& picture {
			width: 100%;
			display: block;
			aspect-ratio: 16 / 9;
		}

		& img {
			width: 100%;
			height: auto;
			aspect-ratio: 16 / 9;
			object-fit: cover;
			mask: linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 60%, transparent);
			border-radius: var(--radius);
			max-width: 100%;
			display: block;

			@media (width <= 500px) {
				width: 100%;
				height: 80vw;
			}
		}

		& h1 {
			margin-block: -1.4em;
			padding-bottom: 4rem;
			font-size: clamp(var(--h3), 6vw, var(--xxl));
			font-weight: 700;
			text-shadow: 0 0 5px var(--smoke);
			color: var(--clr-blue);
			font-family: var(--orbitron);
			letter-spacing: -1px;

			@media (width <= 1300px) {
				padding-bottom: 2rem;
				mix-blend-mode: normal;
			}

			@media (width <= 1050px) {
				padding-bottom: 1rem;
			}

			@media (width <= 768px) {
				padding-bottom: 0;
			}
		}
	}

	@keyframes title {
		0% {
			opacity: 0;
			translate: 0 -2em;
		}
		55% {
			opacity: 0;
		}
		100% {
			opacity: 1;
			translate: 0 0;
		}
	}
</style>
