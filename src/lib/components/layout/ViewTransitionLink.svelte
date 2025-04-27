<script>
	let { href = '', text = '', class: className = '' } = $props();
	let isExpanded = $state(false);

	async function handleClick(event) {
		event.preventDefault();

		if (!document.startViewTransition) {
			isExpanded = true;
			return;
		}

		// Remove requestAnimationFrame and directly start transition
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
	<a
		{href}
		class={`transition-link ${className}`}
		onclick={handleClick}
		style:view-transition-name="link-expand"
	>
		{text}
	</a>

	{#if isExpanded}
		<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
		<div class="expanded-overlay" role="dialog" aria-modal="true">
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
			<div
				class="expanded-content"
				style:view-transition-name="link-expand"
				onclick={(e) => e.stopPropagation()}
				role="dialog"
				tabindex="0"
			>
				<button
					class="close-button"
					onclick={handleClose}
					onkeydown={(e) => e.key === 'Enter' && handleClose(e)}
					aria-label="Close"
				>
					×
				</button>
				<h2>{text}</h2>
				<p>These are my projects!</p>
			</div>
		</div>
	{/if}
</div>

<style>
	.link-wrapper {
		position: relative;
		display: inline-block;

		& .transition-link {
			display: inline-block;
			text-decoration: none;
			padding: 0.5rem 1rem;
			border-radius: 0.25rem;
			background: transparent;
			color: var(--text-color, #1f2937);
			transition: transform 0.2s;
			font-family: var(--bronova);
			font-size: clamp(1.5rem, 2vw, 2.25rem);
			font-weight: 600;
			position: relative;
			z-index: 1000;

			&:hover {
				transform: scale(1.05);
			}
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

	.expanded-content {
		background: var(--text-anti);
		padding: 2rem;
		border-radius: 0.5rem;
		width: 90vw;
		max-width: 600px;
		color: var(--text-color, #1f2937);
		position: relative;
		transform-origin: center center;
		contain: paint layout;
		view-transition-name: link-expand;
		overflow: hidden;

		& h2 {
			font-family: var(--orbitron);
			font-size: clamp(2rem, 2vw, 5rem);
			font-weight: 600;
		}

		& .close-button {
			position: absolute;
			top: 0;
			right: 1rem;
			width: 2rem;
			height: 2rem;
			display: grid;
			place-items: center;
			cursor: pointer;
			background: transparent;
			border-radius: 0.25rem;
			font-size: clamp(1rem, 2vw, 2rem);
			transition: background-color 0.2s;
			outline: none;
			border: none;

			&:focus {
				outline: none;
				box-shadow:
					0 0 0 2px var(--text-anti),
					0 0 0 4px var(--text-color);
			}

			/* Remove focus outline for mouse users, keep it for keyboard navigation */
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
	}

	@keyframes slide-and-fade-in {
		from {
			opacity: 0;
			transform: translateX(-50px) scale(0.95);
		}
		to {
			opacity: 1;
			transform: translateX(0) scale(1);
		}
	}

	@keyframes slide-and-fade-out {
		from {
			opacity: 1;
			transform: translateX(0) scale(1);
		}
		to {
			opacity: 0;
			transform: translateX(50px) scale(0.95);
		}
	}

	/* Fix view transition styles to properly handle the animation */
	::view-transition-group(*) {
		animation: none;
	}

	::view-transition-old(link-expand),
	::view-transition-new(link-expand) {
		height: auto;
		width: auto;
		transform-origin: top left;
		will-change: transform;
	}

	::view-transition-old(link-expand) {
		animation: slide-and-fade-out 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
	}

	::view-transition-new(link-expand) {
		animation: slide-and-fade-in 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
	}
</style>
