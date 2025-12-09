<script>
	let { popoverTitle, title, summary } = $props();

	let popoverElement = $state(null);

	function handleClick() {
		if (!popoverElement) return;

		if (!document.startViewTransition) {
			popoverElement.showPopover();
			return;
		}

		document.startViewTransition(() => {
			popoverElement.showPopover();
		});
	}

	function closePopover() {
		if (!popoverElement) return;

		if (!document.startViewTransition) {
			popoverElement.hidePopover();
			return;
		}

		document.startViewTransition(() => {
			setTimeout(() => {
				popoverElement.hidePopover();
			}, 0);
		});
	}
</script>

<section class="summary-popup" aria-label="pwa summary">
	<button type="button" onclick={handleClick}>
		<span class="pwa-title">{title}</span>
	</button>

	<div popover="auto" bind:this={popoverElement}>
		<button data-close onclick={closePopover}>x</button>
		<p>About <span class="pwa-title">{popoverTitle}</span></p>
		<p>{summary}</p>
	</div>
</section>

<style>
	.summary-popup {
		display: inline-block;
		margin-inline: auto;
		pointer-events: auto;
		position: relative;

		&:focus,
		&:focus-visible {
			outline: 1px solid var(--clr-main);
			background: transparent;
		}

		& [data-close] {
			position: absolute;
			top: 0.5rem;
			right: 1rem;
			background: transparent;
			border: none;
			color: var(--fail);
			font-family: var(--bronova-bold);
			font-size: clamp(var(--sm), 1.5vw, var(--h3));
			font-weight: 700;
			cursor: pointer;
		}

		& p {
			font-weight: 600;

			& .pwa-title {
				color: var(--clr-blue);
				font-size: clamp(var(--h5), 2.5vw, var(--h3));

				font-weight: 900;
			}

			&:first-of-type {
				color: var(--clr-main);
				font-weight: 200;
				font-size: clamp(var(--sm), 1.25vw, var(--h5));
			}

			&:last-of-type {
				color: var(--light-gray);
				font-size: clamp(var(--sm), 1.25vw, var(--h5));
			}
		}

		& button {
			background-color: transparent;
			filter: brightness(1);
			color: var(--clr-link);
			width: fit-content;
			font-family: var(--bronova);
			font-size: clamp(var(--h6), 1.5vw, var(--h4));
			font-weight: 600;
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

			& .pwa-title {
				view-transition-name: pwa-title;
			}
		}

		& [popover] {
			margin-inline: auto;
			margin-block: auto;
			font-family: var(--bronova);
			font-size: clamp(var(--sm), 5vw, var(--h3));
			letter-spacing: 2px;
			padding: clamp(1rem, 2vw, 2.25rem) clamp(1.5rem, 2vw, 2.75rem);
			background-color: var(--clr-light-invert);
			color: var(--clr-main);
			max-inline-size: 60%;
			overflow-y: auto;
			border: none;

			@media (width < 500px) {
				letter-spacing: 1px;
				max-height: 70vh;
			}
		}
	}

	[popover] {
		border-radius: var(--radius);
		/* box-shadow: 0px 5px 0px 0px var(--clr-main); */
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
	}

	@starting-style {
		[popover]:popover-open::backdrop {
			background-color: rgb(0 0 0 / 0%);
		}
	}
</style>
