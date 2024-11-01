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
		display: inline-block;
	}

	.tooltip-trigger {
		cursor: pointer;
	}

	.tooltip {
		position: absolute;
		background-color: #333333;
		color: #ffffff;
		font-size: 14px;
		padding: 8px;
		border-radius: 4px;
		max-width: 200px;
		z-index: 1;
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.3s, visibility 0.3s, transform 0.3s;
	}

	.tooltip::after {
		content: '';
		position: absolute;
		border-style: solid;
		border-width: 5px;
	}

	.tooltip-top {
		min-width: 120px;
		bottom: calc(100% + 5px);
		left: 50%;
		transform: translateX(-50%);
	}

	.tooltip-top::after {
		top: 100%;
		left: 50%;
		margin-left: -5px;
		border-color: #333333 transparent transparent transparent;
	}

	.tooltip-container:hover .tooltip {
		opacity: 1;
		visibility: visible;
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

	.tooltip-container:hover .tooltip {
		animation: fadeIn 0.3s forwards;
	}
</style>
