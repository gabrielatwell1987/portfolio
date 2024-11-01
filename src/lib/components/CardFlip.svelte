<script>
	/** @type {{src: any, alt: any, src2: any, alt2: any}} */
	let {
		src,
		alt,
		src2,
		alt2
	} = $props();
</script>

<main class="card-container">
	<section class="card">
		<article class="card-front">
			<img {src} {alt} loading="lazy" />
		</article>

		<article class="card-back">
			<img src={src2} alt={alt2} loading="lazy" />
		</article>
	</section>
</main>

<style>
	.card-container {
		width: 300px;
		height: 400px;
		perspective: 1000px;
		margin: -0.5rem 0 5% 0;
	}

	.card {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.7s;
		transform-style: preserve-3d;
		cursor: pointer;
	}

	.card-container:hover .card {
		transform: rotateY(180deg);
	}

	.card-front,
	.card-back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
	}

	.card-front {
		background-color: transparent;
		color: var(--white);
	}

	.card-back {
		background-color: transparent;
		color: var(--white);
		transform: rotateY(180deg);
	}

	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 10px;
	}

	@media screen and (max-width: 600px) {
		.card-container {
			width: 350px;
			height: 275px;
			margin-bottom: 13%;
		}
	}
</style>
