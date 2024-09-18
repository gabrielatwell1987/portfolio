<script>
	export let src;
	export let alt;
	export let name;
</script>

<article>
	<img {src} {alt} />
	<h3>{name}</h3>
</article>

<style>
	img {
		border-radius: 50%;
		width: 5%;
		height: 5%;
		object-fit: cover;
	}

	img:hover {
		border: 2px solid var(--sky);
	}

	h3 {
		margin: 0;
		padding: 0;
		letter-spacing: 2px;
		color: var(--sky);
		font-size: clamp(1.1rem, 2vw, 2rem);
		font-weight: 800;
	}

	article {
		display: flex;
		justify-content: center;
		align-items: center;
		background: transparent;
		gap: 1.75rem;
	}

	@media screen and (min-width: 300px) {
		img {
			width: 20%;
			height: 20%;
		}
	}

	@media screen and (min-width: 600px) {
		img {
			width: 15%;
			height: 15%;
		}
	}

	@media screen and (min-width: 950px) {
		img {
			width: 5%;
			height: 5%;
		}
	}
</style>
