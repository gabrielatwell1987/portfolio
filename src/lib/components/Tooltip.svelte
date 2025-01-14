<script>
	/** @type {{title: any, hover: any}} */
	let { title, hover } = $props();
</script>

<main class="tooltip-container">
	<span class="tooltip-trigger">{title}</span>

	<div class="tooltip tooltip-top">{hover}</div>
</main>

<style>
	.tooltip-container {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		&:hover .tooltip {
			opacity: 1;
			visibility: visible;
			animation: fadeIn 0.3s forwards;
		}

		.tooltip-trigger {
			cursor: pointer;
			margin-inline: auto;
			padding: 0.5rem 1rem;
			border-radius: 12px;
			font-family: var(--orbitron);
			font-size: clamp(2.5rem, 2vw, 3rem);
			font-weight: 600;
			letter-spacing: 2px;
			margin-top: 15%;

			&:hover {
				filter: hue-rotate(7deg);
			}
		}

		.tooltip {
			position: absolute;
			background-color: var(--blackest);
			color: var(--white);
			font-size: clamp(1rem, 1.5vw, 1.25rem);
			padding: 0.5rem;
			box-shadow: 0 0 5px var(--dark-blue);
			border-radius: 16px;
			max-width: 200px;
			width: fit-content;
			z-index: 1;
			opacity: 0;
			visibility: hidden;
			transition: all 1s ease;

			&::after {
				content: '';
				position: absolute;
				border-style: solid;
				border-width: 5px;
			}
		}

		.tooltip-top {
			min-width: 160px;
			bottom: calc(100% + 5px);
			left: 50%;
			transform: translateX(-50%);
			transition: transform 0.25s ease;

			&::after {
				top: 100%;
				left: 50%;
				margin-left: -5px;
				border-color: var(--blue) transparent transparent transparent;
			}
		}

		@media (width < 500px) {
			padding: 1.5rem;
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes scaleIn {
		from {
			opacity: 0;
			transform: scale(0.9);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}
</style>
