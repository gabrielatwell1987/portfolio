<script>
	let { popoverTitle, title, text, text2, text3 } = $props();

	const id = `popover-${Math.random().toString(36).substr(2, 9)}`;

	function handleClick() {
		const popover = document.getElementById(id);
		if (!document.startViewTransition) {
			popover.showPopover();
			return;
		}

		document.startViewTransition(() => {
			popover.showPopover();
		});
	}
</script>

<main class="instruction-popup" aria-label="pwa instructions">
	<button type="button" onclick={handleClick}><span class="pwa-title">{title}</span></button>

	<div {id} popover="auto">
		<p><span class="pwa-title">{popoverTitle}</span></p>
		<p>{text}</p>
		<p>{text2}</p>
		<p>{text3}</p>
	</div>
</main>

<style>
	.instruction-popup {
		display: inline-block;

		&:focus,
		&:focus-visible {
			outline: 1px solid var(--clr-main);
			background: transparent;
		}

		button {
			background-color: transparent;
			filter: brightness(1);
			color: var(--success);
			width: fit-content;
			font-family: var(--bronova);
			font-size: clamp(var(--h6), 1.5vw, var(--h4));
			font-weight: 500;
			margin: 0;
			padding: 0;
			border: none;
			cursor: pointer;

			&:not(:hover) {
				opacity: 0.85;
			}

			&:active {
				scale: 0.97;
			}
		}

		& button .pwa-title {
			view-transition-name: pwa-title;
		}

		&:has([popover]:popover-open) button .pwa-title {
			view-transition-name: none;
		}

		[popover]:popover-open .pwa-title {
			view-transition-name: pwa-title;
		}

		& [popover] {
			margin-inline: auto;
			margin-block: 5em;
			font-family: var(--bronova);
			font-size: clamp(var(--sm), 5vw, var(--h3));
			letter-spacing: 2px;
			padding: clamp(1rem, 2vw, 2.25rem) clamp(1.5rem, 2vw, 2.75rem);
			background-color: var(--clr-invert);
			color: var(--clr-main);
			width: 80%;
			overflow-y: auto;

			@media (width < 500px) {
				letter-spacing: 1px;
				max-height: 70vh;
			}
		}
	}

	[popover] {
		border: 3px solid var(--dark-blue);
		border-radius: 0.5rem;
		box-shadow: var(--blackest) 0px 20px 25px -5px;
		padding: 1rem 1.5rem;
		display: none;
		opacity: 0;
		transform: translateY(-5rem);
		transition: all 0.5s allow-discrete;
	}

	[popover]:popover-open {
		display: block;
		opacity: 1;
		transform: translateY(0);
	}

	@starting-style {
		[popover]:popover-open {
			display: block;
			opacity: 0;
			transform: translateY(2rem);
		}
	}

	[popover]::backdrop {
		background-color: rgb(0 0 0 / 0%);
		transition:
			display 0.5s allow-discrete,
			overlay 0.5s allow-discrete,
			background-color 0.5s;
	}

	[popover]:popover-open::backdrop {
		background-color: transparent;
		box-shadow: none;
	}

	@starting-style {
		[popover]:popover-open::backdrop {
			background-color: rgb(0 0 0 / 0%);
		}
	}

	::view-transition-group(pwa-title) {
		animation-duration: 0.5s;
		animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	::view-transition-old(pwa-title),
	::view-transition-new(pwa-title) {
		mix-blend-mode: normal;
	}
</style>
