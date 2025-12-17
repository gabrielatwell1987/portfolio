<script>
	import Divider from '$lib/components/learn/Divider.svelte';
	import ProjectSummary from './ProjectSummary.svelte';

	/** @type {{title: any, img: any, url: any, description: any}} */
	let { title, img, url, description, summary, index = 0, hasBorder = true } = $props();
</script>

<section
	class="project-card"
	style="--stagger-delay: {index * 1.25}s;"
	class:no-border={!hasBorder}
>
	<a
		href={url}
		target="_blank"
		rel="noopener noreferrer"
		class="project-link"
		aria-label="View {title} project - made with {description}"
	>
		<img
			class="project-image"
			src={img}
			alt="Screenshot of {title} project"
			style="--alt-text: '{title} project';"
		/>

		<span class="desc-banner" aria-hidden="true">made with {description}</span>
	</a>

	<a href={url} target="_blank" class="title-link">
		<h3 class="project-title">{title}</h3>
	</a>

	<div class="summary-wrapper">
		<ProjectSummary popoverTitle={title} title="About {title}" {summary} {index} />
	</div>
</section>

<style>
	:root {
		--100: 100%;
	}

	.project-card {
		margin-bottom: clamp(0.5rem, 1.5vw, 0.25rem);
		padding: clamp(0.5em, 1.5vw, 1.5em) clamp(1em, 1.5vw, 2em);
		height: auto;
		opacity: 0;
		border: 2px solid var(--clr-gray);
		border-radius: 1em 1em var(--radius) var(--radius);
		animation: fadeIn 0.8s ease-out forwards;
		animation-delay: var(--stagger-delay, 0s);
		will-change: opacity, transform;
		display: flex;
		flex-direction: column;
		gap: 0;

		@media (width <= 768px) {
			border: none;
		}

		&.no-border {
			border: none;
		}

		& .summary-wrapper {
			display: flex;
			justify-content: center;
			inline-size: 100%;
			pointer-events: auto;
		}

		& .title-link {
			pointer-events: auto;
			text-decoration: none;
		}

		& .project-link {
			border: none;
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

			@media (width >= 768px) {
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

			& .project-image {
				width: clamp(300px, 20vw, 400px);
				height: auto;
				border-radius: var(--radius);
				max-inline-size: var(--100);
				transition: scale 0.25s ease-out;
				border: 1px solid var(--clr-main);
				padding: 0.2vw;
				position: relative;
				margin: 0;

				&:hover {
					filter: blur(1px) brightness(0.75);
				}

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

		& .project-title {
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
				-3px -3px 0 var(--clr-main),
				3px -3px 0 var(--clr-main),
				-3px 3px 0 var(--clr-main),
				3px 3px 0 var(--clr-main),
				-3px 0 0 var(--clr-main),
				3px 0 0 var(--clr-main),
				0 -3px 0 var(--clr-main),
				0 3px 0 var(--clr-main);

			@media (width <= 768px) {
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
