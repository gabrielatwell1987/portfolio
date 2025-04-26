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
		gap: 2rem;
		padding: 1.5rem;
		width: fit-content;
		margin-inline: auto;
		position: relative;
		z-index: 1;

		img {
			border-radius: 50%;
			width: 60px;
			height: 60px;
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
				font-size: clamp(1rem, 1.5vw, 1.75rem);
				font-weight: 800;
				white-space: nowrap;

				&:hover {
					border-bottom: 1px solid var(--text-blue);
				}
			}

			&:focus,
			&:focus-visible {
				outline: 1px solid var(--text-color);
				background: transparent;
			}
		}
	}

	@media screen and (width >= 950px) {
		article {
			padding: 2rem;

			img {
				width: 80px;
				height: 80px;
			}
		}
	}
</style>
