<script>
	let { src, alt, title } = $props();
</script>

<div class="image-hero">
	<img {src} {alt} />

	<h1>{title}</h1>
</div>

<style>
	.image-hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		img {
			width: fit-content;

			aspect-ratio: 16/ 9;
			object-fit: cover;
			mask: linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, transparent);
			border-radius: 0.5em;
		}

		h1 {
			margin-block: -3.5rem;
			font-size: clamp(1.5rem, 5vw + 1rem, 4rem);
			letter-spacing: 0.1em;
		}
	}
</style>
