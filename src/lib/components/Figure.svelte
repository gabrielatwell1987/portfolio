<script>
	export let src;
	export let alt;
	export let text;
</script>

<figure>
	<img {src} {alt} />

	<figcaption><p>{text}</p></figcaption>
</figure>

<style>
	figure {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		margin-bottom: 1rem;
	}

	img {
		border-radius: 2.5%;
		max-width: 100%;
	}

	figure:hover {
		filter: drop-shadow(0 0 0.25rem var(--yellow));
	}

	figcaption {
		color: var(--white);
		position: absolute;
		bottom: 0;
		left: 49%;
		transform: translate(-49%, 0);
		color: antiquewhite;
		backdrop-filter: blur(5px);
		padding: 0.5rem;
		border-radius: 0.5rem;
	}

	p {
		margin: 0;
		padding: 0;
		text-align: center;
		font-size: 1.75rem;
		font-weight: 500;
	}

	@media (min-width: 200px) {
		p {
			font-size: 1.5rem;
			font-family: var(--mono);
		}
	}

	@media (min-width: 768px) {
		p {
			font-size: 2rem;
		}
	}
</style>
