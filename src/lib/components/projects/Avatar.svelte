<script lang="ts">
	interface Props {
		src: string;
		alt: string;
		name: string;
	}

	let { src, alt, name }: Props = $props();
</script>

<article>
	<img {src} {alt} loading="lazy" />

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
		inline-size: fit-content;
		margin-inline: auto;
		position: relative;
		z-index: 1;

		img {
			border-radius: 50%;
			inline-size: 60px;
			aspect-ratio: 1;
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
				inline-size: 80px;
				aspect-ratio: 1;
			}
		}
	}
</style>
