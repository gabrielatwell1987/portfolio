<script>
	export let src;
	export let alt;
	export let h1;
	export let p;
	export let href;
	export let button;
</script>

<main class="swiper">
	<div class="swiper-wrapper">
		<div class="swiper-slide">
			<img class="card-image" {src} {alt} />

			<div class="overlay">
				<h1 class="card-title">{h1}</h1>

				<p class="card-description">{p}</p>

				<a {href} class="card-button">{button}</a>
			</div>
		</div>
	</div>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Nunito:wght@300;600&display=swap');

	.swiper {
		position: relative;
		width: 400px;
		height: 490px;
	}

	.swiper-slide {
		position: relative;
		border: 1px solid rgba(255, 255, 255, 0.3);
		user-select: none;
		border-radius: 20px;
		padding: 1rem;
	}

	.swiper-slide img {
		width: 100%;
		height: 100%;
		border-radius: 20px;
	}

	.overlay {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: center;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 150px;
		padding: 2rem;
		background: rgba(93, 95, 145, 0.2);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border-top: 1px solid rgba(255, 255, 255, 0.3);
		color: #fff;
		border-radius: 0 0 20px 20px;
	}

	.card-image {
		width: 100%;
		height: 300px;
		margin-inline: auto;
		object-fit: cover;
		border-radius: 8px 8px 0 0;
	}

	.card-image:hover {
		filter: drop-shadow(0 0 0.75rem var(--smoke));
	}

	.card-title {
		color: var(--white);
		font-size: clamp(1.5rem, 2vw, 2rem);
		font-weight: 800;
		letter-spacing: 2px;
		margin-top: 10%;
		margin-bottom: -0.25rem;
	}

	.card-description {
		color: var(--off-white);
		font-size: clamp(1rem, 1vw, 1.2rem);
		font-weight: 300;
		margin-bottom: 0.05rem;
	}

	.card-button {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: transparent;
		color: var(--white);
		font-family: var(--orbitron);
		font-size: clamp(1rem, 1vw, 1.2rem);
		font-weight: 300;
		letter-spacing: 1px;
		width: 50%;
		height: 10%;
		outline: none;
		border: 1px solid var(--white);
		margin: 1rem auto;
		border-radius: 5rem;
		filter: drop-shadow(0 0 0.75rem var(--smoke));
		transition: 750ms;
		outline: 3px solid currentColor;
		outline-offset: -7px;
		padding: 2rem;
		user-select: none;
		margin-bottom: 3rem;
	}

	.card-button:hover {
		animation: wiggle 0.5s ease-in-out infinite;
		background-color: var(--white);
		color: var(--black);
	}

	@media (max-width: 1050px) {
		.swiper {
			width: 350px;
			height: 450px;
		}
	}

	@media (max-width: 930px) {
		.swiper {
			grid-area: slider;
		}
	}

	@media (max-width: 500px) {
		.swiper {
			width: 300px;
			height: 400px;
		}

		.card-image {
			height: fit-content;
			object-fit: cover;
		}

		.card-title {
			font-size: clamp(1.25rem, 2vw, 1.5rem);
			margin-bottom: 0.25rem;
			margin-top: 15%;
		}

		.card-description {
			font-size: clamp(1rem, 1vw, 1.2rem);
			margin-bottom: 0.5rem;
		}

		.card-button {
			font-size: clamp(1rem, 1vw, 1.2rem);
			font-weight: 500;
			padding: 1.25rem;
			margin-top: -1%;
		}

		.overlay {
			padding: 1rem;
			height: 50%;
		}
	}

	@keyframes wiggle {
		0% {
			rotate: 0deg;
			translate: 0 0;
		}
		25% {
			rotate: -2deg;
			translate: -5px 0;
		}
		80% {
			rotate: 2deg;
			translate: 5px 0;
		}
	}
</style>
