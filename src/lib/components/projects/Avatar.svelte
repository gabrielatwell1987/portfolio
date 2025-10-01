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
			transition: scale 0.5s ease-out;

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
				color: var(--clr-blue);
				font-family: var(--ultra);
				font-size: clamp(var(--sm), 1.5vw, var(--h4));
				font-weight: 800;
				white-space: nowrap;

				&:hover {
					border-bottom: 1px solid var(--clr-blue);
				}
			}

			&:focus,
			&:focus-visible {
				outline: 1px solid var(--clr-main);
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
