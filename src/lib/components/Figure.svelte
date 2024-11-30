<script>
	/** @type {{src: any, alt: any, text: any}} */
	let { src, alt, text } = $props();
</script>

<figure>
	<figcaption><p>{text}</p></figcaption>

	<img {src} {alt} />
</figure>

<style>
	figure {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;

		img {
			border-radius: 2.5%;
			max-width: 100%;
		}

		figcaption {
			color: var(--white);
			position: absolute;
			top: 13%;
			left: 50%;
			transform: translateX(-50%);
			padding: 0.5rem;
			border-radius: 0.5rem;
			transform: translateX(-50%);
		}

		p {
			margin: 0;
			padding: 0;
			text-align: center;
			font-size: clamp(1rem, 2vw, 2rem);
			font-weight: 500;
		}
	}
</style>
