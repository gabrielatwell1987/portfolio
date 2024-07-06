<script>
	export let src;
	export let alt;
	export let src2;
	export let alt2;
</script>

<main class="card-container">
	<section class="card">
		<article class="card-front">
			<img {src} {alt} />
		</article>

		<article class="card-back">
			<img src={src2} alt={alt2} />
		</article>
	</section>
</main>

<style>
	.card-container {
		width: 200px;
		height: 300px;
		perspective: 1000px;
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
		background-color: #3b82f6;
		color: #ffffff;
	}

	.card-back {
		background-color: #001a9e;
		color: #ffffff;
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
</style>
