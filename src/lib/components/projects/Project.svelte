<script>
	/** @type {{title: any, img: any, url: any, description: any}} */
	let { title, img, url, description, summary, index = 0 } = $props();
</script>

<section class="content" style="--stagger-delay: {index * 1.25}s;">
	<a href={url} target="_blank" class="title-link">
		<h3 class="title">{title}</h3>
	</a>

	<a
		href={url}
		target="_blank"
		rel="noopener noreferrer"
		class="link"
		aria-label="View {title} project - made with {description}"
	>
		<img
			class="img"
			src={img}
			alt="Screenshot of {title} project"
			width="400px"
			height="475px"
			style="--alt-text: '{title} project'"
		/>

		<span class="desc-banner" aria-hidden="true">made with {description}</span>
	</a>

	<p class="summary">{summary}</p>
</section>

<style>
	:root {
		--100: 100%;
	}

	.content {
		margin-bottom: 3rem;
		opacity: 0;
		animation: fadeIn 0.8s ease-out forwards;
		animation-delay: var(--stagger-delay, 0s);
		will-change: opacity, transform;
		pointer-events: none;

		& .summary {
			max-width: 95%;
			margin-inline: auto;
			font-size: clamp(var(--sm), 1.15vw, var(--h5));
			font-weight: 600;
			color: var(--clr-link);
			margin-top: 1rem;
			text-align: center;
			line-height: 1.5;
			letter-spacing: 0px;
		}

		& .title-link {
			pointer-events: auto;
			text-decoration: none;
		}

		& .link {
			border: none;
			padding: 1rem;
			display: flex;
			flex-direction: column;
			flex-basis: 50%;
			justify-content: center;
			align-items: center;
			margin-inline: auto;
			width: fit-content;
			transition: all 0.35s;
			background-color: transparent;
			position: relative;
			cursor: pointer;
			touch-action: manipulation;
			text-decoration: none;
			pointer-events: auto;
			user-select: none;
			touch-action: manipulation;
			z-index: 200;

			@media (width >= 740px) {
				img:hover {
					transition: scale 0.25s ease;
				}

				& .desc-banner {
					width: 80%;
				}
			}

			@media (width >= 990px) {
				padding: 2rem;
				flex-basis: var(--100);

				& .desc-banner {
					width: 100%;
				}
			}

			&:focus,
			&:focus-visible {
				outline: 1px solid var(--clr-main);
				background: transparent;
			}

			& .img {
				border-radius: var(--radius);
				max-inline-size: var(--100);
				transition: scale 0.25s ease-out;
				border: 1px solid var(--clr-main);
				padding: 0.2vw;
				position: relative;

				&:hover + .desc-banner {
					visibility: visible;
					opacity: 1;
					transition: all 0.25s;
					pointer-events: auto;
				}
			}

			& .desc-banner {
				visibility: hidden;
				opacity: 0;
				position: absolute;
				bottom: 1em;
				width: 100%;
				background-color: var(--clr-main);
				color: var(--clr-invert);
				text-align: center;
				border: 1px solid var(--clr-invert);
				border-radius: var(--radius);
				padding: 5px 3px;
				font-family: var(--bronova);
				font-size: clamp(var(--sm), 1.15vw, var(--h5));
				font-weight: 600;
				margin-inline: auto;
				transition: all 1s;
				text-transform: lowercase;
				pointer-events: none;
				position: relative;
				margin-top: 0;
			}
		}

		& .title {
			font-family: var(--ultra);
			font-size: clamp(var(--h5), 2.75vw, var(--h3));
			font-weight: 600;
			text-align: center;
			letter-spacing: 0px;
			text-transform: uppercase;
			text-decoration: none;
			padding: 0;
			margin: 0;
			color: var(--clr-invert);
			text-shadow:
				0 0 1px var(--clr-invert),
				-2px -2px 0 var(--clr-main),
				2px -2px 0 var(--clr-main),
				-2px 2px 0 var(--clr-main),
				2px 2px 0 var(--clr-main),
				-2px 0 0 var(--clr-main),
				2px 0 0 var(--clr-main),
				0 -2px 0 var(--clr-main),
				0 2px 0 var(--clr-main);
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
