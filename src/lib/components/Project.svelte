<script>
	import { fade } from 'svelte/transition';

	/** @type {{title: any, img: any, url: any, description: any}} */
	let { title, img, url, description } = $props();

	let duration = $state(500);
	let delay = $state(600);
</script>

<main class="content" transition:fade={{ delay: delay, duration: duration }}>
	<h3 class="link name">{title}</h3>

	<a class="link" href={url} target="_self">
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

	@media (width >= 300px) {
		.link {
			text-align: center;
			color: var(--sky);
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
				width: 100%;
				background-color: black;
				color: var(--white);
				text-align: center;
				border-radius: 6px;
				padding: 5px 3px;
				font-family: var(--bronova);
				font-size: clamp(1rem, 1.15vw, 1.5rem);
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

	@media (width >= 740px) {
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

	@media (width >= 990px) {
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
