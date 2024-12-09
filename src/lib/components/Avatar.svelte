<script>
	/** @type {{src: any, alt: any, name: any}} */
	let { src, alt, name } = $props();
</script>

<article>
	<img {src} {alt} />

	<h3>{name}</h3>
</article>

<style>
	article {
		display: flex;
		justify-content: center;
		align-items: center;
		background: transparent;
		box-shadow: none;
		gap: 1.75rem;
		margin: 2rem 0;
		padding: 0;

		img {
			border-radius: 50%;
			width: 5%;
			height: 5%;
			object-fit: cover;
			transition: scale 0.5s ease-in-out;
		}

		img:hover {
			scale: 1.25;
		}

		h3 {
			margin: 0;
			padding: 0;
			letter-spacing: 2px;
			color: var(--sky);
			font-family: var(--orbitron);
			font-size: clamp(1.1rem, 2vw, 2rem);
			font-weight: 800;
		}
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
		article {
			margin-top: 5rem;

			img {
				width: 5%;
				height: 5%;
			}
		}
	}
</style>
