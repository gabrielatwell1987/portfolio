<script>
	/** @type {{title: any, hover: any}} */
	let { title, hover } = $props();
</script>

<main class="tooltip-container" aria-label="tooltip container">
	<span class="tooltip-trigger">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 525">
			<path
				d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"
				stroke="var(--clr-main)"
				stroke-width="10"
			/>
		</svg>
	</span>

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

		& .tooltip-trigger {
			cursor: pointer;
			margin-inline: auto;
			padding: 0.5rem 1rem;
			border-radius: 12px;
			font-family: var(--orbitron);
			font-size: clamp(2.5rem, 2vw, 3rem);
			font-weight: 600;
			letter-spacing: 2px;
			margin-top: 15%;

			& svg {
				fill: var(--clr-button);
				width: clamp(0.85em, 5vw, 3em);
				height: clamp(0.85em, 5vw, 3em);
			}

			&:hover {
				filter: drop-shadow(0 0 25px var(--clr-link));
			}
		}

		& .tooltip {
			position: absolute;
			background-color: var(--black);
			color: var(---white);
			font-size: clamp(1rem, 1.5vw, 1.25rem);
			padding: 0.5rem;
			box-shadow: 0 0 5px var(--clr-blue);
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

		& .tooltip-top {
			min-width: 160px;
			bottom: calc(100% + 5px);
			left: 50%;
			transform: translateX(-50%);
			transition: transform 0.25s ease;

			&::after {
				top: 100%;
				left: 50%;
				margin-left: -5px;
				border-color: var(--clr-gray) transparent transparent transparent;
			}
		}

		@media (width <= 500px) {
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
