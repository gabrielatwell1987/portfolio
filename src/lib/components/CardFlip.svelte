<script>
	/** @type {{src: any, alt: any, src2: any, alt2: any}} */
	let { src, alt, src2, alt2 } = $props();
</script>

<div class="flip">
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
</div>

<style>
	.card-container {
		width: 300px;
		height: 400px;
		perspective: 1000px;
		margin-bottom: 5%;
		display: flex;
		justify-content: center;
		align-items: center;

		&:hover .card {
			transform: rotateY(180deg);
		}

		.card {
			position: relative;
			width: 100%;
			height: 100%;
			text-align: center;
			transition: transform 0.7s;
			transform-style: preserve-3d;
			cursor: pointer;

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

				img {
					object-fit: cover;
					width: 100%;
					height: 100%;
					position: absolute;
					top: 0;
					left: 0;
					border-radius: 10px;
				}
			}

			.card-front {
				background-color: transparent;
				box-shadow: none;
				color: var(--white);
			}

			.card-back {
				background-color: transparent;
				box-shadow: none;
				color: var(--white);
				transform: rotateY(180deg);
			}
		}
	}

	@media screen and (max-width: 600px) {
		.card-container {
			width: 350px;
			height: 275px;
			margin-bottom: 13%;
		}
	}

	@media screen and (min-width: 300px) {
		.flip {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-block: 4rem;
		}
	}

	@media (min-width: 1400px) {
		.flip {
			margin-top: 10em;
		}
	}

	@media (min-width: 1500px) {
		.flip {
			margin-top: 5em;
		}
	}
</style>
