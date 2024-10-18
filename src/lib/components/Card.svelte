<script>
	export let title;
	export let desc;
	export let button;
	export let src;
	export let alt;
	export let href;
</script>

<main class="card">
	<img class="card-image" {src} {alt} />

	<h2 class="card-title">{title}</h2>

	<p class="card-description">{desc}</p>

	<a {href} class="card-button">{button}</a>
</main>

<style>
	.card {
		width: fit-content;
		height: fit-content;
		background-color: transparent;
		border-radius: 8px;
		border: 2px solid var(--white);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		padding: 2rem 3rem 0 3rem;
		overflow: hidden;
		transition: all 0.3s ease-in-out;
	}

	.card:hover {
		box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
	}

	.card-image {
		width: 70%;
		height: 300px;
		object-fit: cover;
		border-radius: 8px 8px 0 0;
		display: grid;
		place-self: center;
		margin-bottom: 1rem;
	}

	.card-image:hover {
		filter: drop-shadow(0 0 0.75rem var(--smoke));
	}

	.card-title {
		color: var(--sky);
		font-size: clamp(1.5rem, 2vw, 2rem);
		font-weight: 800;
		letter-spacing: 2px;
		margin-bottom: 0.5rem;
	}

	.card-description {
		color: var(--off-white);
		font-size: clamp(1rem, 1vw, 1.2rem);
		font-weight: 300;
		margin-bottom: 1rem;
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
		width: 30%;
		height: 10%;
		outline: none;
		border: 1px solid var(--white);
		margin: 1rem auto;
		border-radius: 5rem;
		filter: drop-shadow(0 0 0.75rem var(--smoke));
		transition: 750ms;
		outline: 3px solid currentColor;
		outline-offset: -7px;
		padding: 1rem 1.75rem;
		user-select: none;
	}

	.card-button:hover {
		animation: wiggle 0.5s ease-in-out infinite;
	}

	@media (max-width: 500px) {
		.card {
			width: 100%;
			padding: 1rem 1.5rem 0 1.5rem;
		}

		.card-image {
			height: 190px;
			object-fit: cover;
		}

		.card-title {
			font-size: clamp(1.25rem, 2vw, 1.5rem);
		}

		.card-description {
			font-size: clamp(1rem, 1vw, 1.2rem);
		}

		.card-button {
			font-size: clamp(1rem, 1vw, 1.2rem);
			font-weight: 500;
			padding: 0.75rem 1.5rem;
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
