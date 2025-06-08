<script>
	/** @type {{title: any, img: any, url: any, description: any}} */
	let { title, img, url, description, summary, index = 0 } = $props();
</script>

<main class="content" style="--stagger-delay: {index * 1.25}s;">
	<h3 class="link name">{title}</h3>

	<a class="link" href={url} target="_blank">
		<img class="img" src={img} alt={title} width="400px" height="475px" loading="lazy" />

		<span class="hover-text">made with {description}</span>
	</a>

	<p class="summary">{summary}</p>
</main>

<style>
	:root {
		--100: 100%;
	}

	.content {
		margin-bottom: 3rem;
		opacity: 0;
		animation: fadeIn 0.8s ease-out forwards;
		animation-delay: var(--stagger-delay, 0s);
	}

	@media (width >= 300px) {
		.summary {
			width: 75%;
			margin-inline: auto;
			font-size: clamp(var(--sm), 1.15vw, var(--h5));
			font-weight: 500;
			color: var(--clr-pale);
			margin-top: 1rem;
			text-align: center;
			line-height: 1.5;
		}

		.link {
			text-align: center;
			color: var(--clr-link);
			border: none;
			padding: 1rem;
			display: flex;
			flex-direction: column;
			flex-basis: 50%;
			justify-content: center;
			align-items: center;
			font-family: var(--orbitron);
			font-size: clamp(var(--h5), 2.75vw, var(--h3));
			font-weight: 600;
			margin-inline: auto;
			letter-spacing: 2px;
			text-transform: uppercase;
			text-decoration: none;
			width: fit-content;
			transition: all 0.35s;
			background-color: transparent;

			position: relative;

			&:focus,
			&:focus-visible {
				outline: 1px solid var(--clr-main);
				background: transparent;
			}

			& .img {
				border-radius: var(--radius);
				max-width: var(--100);
				transition: scale 0.25s ease-in-out;

				&:hover {
					scale: 1.05;
				}
			}

			& .hover-text {
				visibility: hidden;
				width: 100%;
				background-color: var(--clr-gray);
				color: var(--clr-inverted);
				text-align: center;
				border-radius: var(--button-radius);
				padding: 5px 3px;
				font-family: var(--bronova);
				font-size: clamp(var(--sm), 1.15vw, var(--h5));
				z-index: 1;
				margin-inline: auto;
				opacity: 0;
				transition: all 1s;
				text-transform: lowercase;

				position: absolute;
				bottom: 1rem;
				left: 50%;
				transform: translateX(-50%);
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

	@media (width >= 740px) {
		img:hover {
			transition: scale 0.25s ease;
		}

		.link {
			letter-spacing: 4px;

			& .hover-text {
				width: 80%;
			}
		}
	}

	@media (width >= 990px) {
		.link {
			padding: 2rem;
			flex-basis: var(--100);
			letter-spacing: 5px;

			& .hover-text {
				width: 100%;
			}
		}

		.name {
			margin-bottom: -3.5rem;
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
