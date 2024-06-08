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

	figcaption {
		font-size: 1.25rem;
		color: var(--gray);
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
		font-size: 2.5rem;
		font-weight: 500;
	}
</style>
