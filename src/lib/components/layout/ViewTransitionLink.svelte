<script>
	let { href = '', text = '', class: className = '' } = $props();
	let isExpanded = $state(false);
	let linkRect = $state(null);

	async function handleClick(event) {
		event.preventDefault();
		const rect = event.currentTarget.getBoundingClientRect();
		linkRect = {
			left: rect.left,
			top: rect.top,
			width: rect.width,
			height: rect.height
		};

		if (!document.startViewTransition) {
			isExpanded = true;
			return;
		}

		document.startViewTransition(() => {
			isExpanded = true;
		});
	}

	async function handleClose(event) {
		event.preventDefault();
		event.stopPropagation();

		if (!document.startViewTransition) {
			isExpanded = false;
			return;
		}

		document.startViewTransition(() => {
			isExpanded = false;
		});
	}
</script>

<div class="link-wrapper">
	<div class="text-wrapper">
		<a
			{href}
			class={`transition-link ${className} ${isExpanded ? 'expanded' : ''}`}
			onclick={handleClick}
			style:view-transition-name="morph"
			style:--initial-left="{linkRect?.left}px"
			style:--initial-top="{linkRect?.top}px"
		>
			{text}
		</a>

		{#if isExpanded}
			<div class="expanded-overlay" onclick={handleClose} role="dialog" aria-modal="true">
				<div class="expanded-text" style:view-transition-name="morph">
					{text}
				</div>
				<button
					class="close-button"
					onclick={handleClose}
					onkeydown={(e) => e.key === 'Enter' && handleClose(e)}
					aria-label="Close"
				>
					×
				</button>
			</div>
		{/if}
	</div>
</div>

<style>
	.link-wrapper {
		position: relative;
		display: inline-block;
	}

	.text-wrapper {
		position: relative;
		display: inline-block;
	}

	.transition-link {
		display: inline-block;
		text-decoration: none;
		padding: 0.5rem 1rem;
		border-radius: 0.25rem;
		background: transparent;
		color: var(--text-color);
		font-family: var(--bronova);
		font-size: clamp(1.5rem, 2vw, 2.25rem);
		font-weight: 600;
		transition: transform 0.2s;

		&:hover {
			transform: scale(1.05);
		}

		&.expanded {
			opacity: 0;
			pointer-events: none;
		}
	}

	.expanded-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		display: grid;
		place-items: center;
		z-index: 1000;
	}

	.expanded-text {
		font-family: var(--orbitron);
		font-size: clamp(4rem, 8vw, 12rem);
		font-weight: 800;
		text-align: center;
		line-height: 1.1;
		background: linear-gradient(135deg, var(--text-color) 0%, var(--text-blue) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
	}

	.close-button {
		position: fixed;
		top: 2rem;
		right: 2rem;
		width: 3rem;
		height: 3rem;
		display: grid;
		place-items: center;
		cursor: pointer;
		background: transparent;
		border-radius: 50%;
		font-size: 2rem;
		transition: all 0.2s;
		outline: none;
		border: none;
		color: var(--text-color);

		&:hover {
			background: rgba(255, 255, 255, 0.1);
			transform: rotate(90deg);
		}

		&:focus {
			outline: none;
			box-shadow:
				0 0 0 2px var(--text-anti),
				0 0 0 4px var(--text-color);
		}

		&:focus:not(:focus-visible) {
			outline: none;
			box-shadow: none;
		}

		&:focus-visible {
			outline: none;
			box-shadow:
				0 0 0 2px var(--text-anti),
				0 0 0 4px var(--text-color);
		}
	}

	/* View transition animations */
	::view-transition-old(morph),
	::view-transition-new(morph) {
		height: fit-content;
		width: fit-content;
		mix-blend-mode: normal;
	}

	::view-transition-old(morph) {
		animation: morph-to-big 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
	}

	::view-transition-new(morph) {
		animation: morph-to-small 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
	}

	@keyframes morph-to-big {
		from {
			position: fixed;
			left: var(--initial-left);
			top: var(--initial-top);
			transform: scale(1);
			font-size: clamp(1.5rem, 2vw, 2.25rem);
			font-family: var(--bronova);
			color: var(--text-color);
			-webkit-text-fill-color: var(--text-color);
		}
		to {
			position: fixed;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			font-size: clamp(4rem, 8vw, 12rem);
			font-family: var(--orbitron);
			background: linear-gradient(135deg, var(--text-color) 0%, var(--text-blue) 100%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
			text-fill-color: transparent;
		}
	}

	@keyframes morph-to-small {
		from {
			position: fixed;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			font-size: clamp(4rem, 8vw, 12rem);
			font-family: var(--orbitron);
			background: linear-gradient(135deg, var(--text-color) 0%, var(--text-blue) 100%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
			text-fill-color: transparent;
		}
		to {
			position: fixed;
			left: var(--initial-left);
			top: var(--initial-top);
			transform: scale(1);
			font-size: clamp(1.5rem, 2vw, 2.25rem);
			font-family: var(--bronova);
			color: var(--text-color);
			-webkit-text-fill-color: var(--text-color);
		}
	}
</style>
