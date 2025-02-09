<script>
	/** @type {{src: any, alt: any, name: any}} */
	let { src, alt, name } = $props();
</script>

<article>
	<img {src} {alt} />

	<a href="/contact">
		<h3>{name}</h3>
	</a>
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
			width: 15%;
			object-fit: cover;
			transition: scale 0.5s ease-in-out;

			&:hover {
				scale: 1.1;
			}
		}

		a {
			text-decoration: none;

			& h3 {
				margin: 0;
				padding: 0;
				letter-spacing: 2px;
				color: var(--text-blue);
				font-family: var(--orbitron);
				font-size: clamp(1.1rem, 2vw, 2rem);
				font-weight: 800;
			}

			&:focus,
			&:focus-visible {
				outline: 1px solid var(--text-color);
				background: transparent;
			}
		}

		@media screen and (width >= 950px) {
			margin-top: 5rem;

			& img {
				width: 4%;
			}
		}
	}
</style>
