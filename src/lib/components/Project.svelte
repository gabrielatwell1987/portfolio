<script>
	/** @type {{title: any, img: any, url: any, description: any}} */
	let { title, img, url, description } = $props();
</script>

<main class="content">
	<h3 class="link name">{title}</h3>

	<a class="link" href={url} target="_blank">
		<img class="img" src={img} alt={title} width="400px" height="475px" loading="lazy" />

		<span class="hover-text">made with {description}</span>
	</a>
</main>

<style>
	:root {
		--100: 100%;
	}

	.content {
		margin-bottom: 3rem;
	}

	@media (min-width: 300px) {
		.link {
			text-align: center;
			background-color: transparent;
			color: var(--purple);
			border: none;
			padding: 1rem;
			display: flex;
			flex-direction: column;
			flex-basis: 50%;
			justify-content: center;
			align-items: center;
			font-family: var(--orbitron);
			font-size: clamp(1.25rem, 2.5vw, 2.5rem);
			font-weight: 600;
			margin-inline: auto;
			letter-spacing: 2px;
			text-transform: uppercase;
			width: fit-content;
			transition: all 0.35s;

			.img {
				border-radius: 8px;
				max-width: var(--100);
				transition: scale 0.25s ease-in-out;

				&:hover {
					scale: 1.05;
				}
			}

			.hover-text {
				visibility: hidden;
				width: var(--100);
				background-color: black;
				color: #fff;
				text-align: center;
				border-radius: 6px;
				padding: 5px 0;
				font-family: var(--bronova);
				font-size: clamp(1rem, 1.5vw, 1.75rem);
				z-index: 1;
				margin-inline: auto;
				opacity: 0;
				transition: all 1s;
				text-transform: lowercase;
			}

			&:hover .hover-text {
				visibility: visible;
				opacity: 1;
			}
		}

		.name {
			font-weight: 900;
			margin-bottom: -1.5rem;
		}
	}

	@media (min-width: 740px) {
		img:hover {
			transition: scale 0.25s ease;
		}

		.link {
			letter-spacing: 4px;

			.hover-text {
				width: 80%;
			}
		}
	}

	@media (min-width: 990px) {
		.link {
			padding: 2rem;
			flex-basis: var(--100);
			letter-spacing: 5px;

			.hover-text {
				width: 100%;
			}
		}

		.name {
			margin-bottom: -3.5rem;
		}
	}
</style>
