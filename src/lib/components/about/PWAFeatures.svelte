<script>
	let { text, text2, text3 } = $props();
</script>

<main class="instruction-popup" aria-label="pwa instructions">
	<button popovertarget="popover">How install a PWA</button>

	<div id="popover" popover="auto">
		<p>{text}</p>
		<p>{text2}</p>
		<p>{text3}</p>
	</div>
</main>

<style>
	.instruction-popup {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-block: 2em;

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
			font-size: clamp(var(--h5), 2vw, var(--h3));
			font-weight: 300;
			border-radius: var(--radius);
			padding: clamp(0.4em, 1.5vw, 0.3em) clamp(1em, 2vw, 0.7em);
			border: none;
			outline: none;
			transition:
				outline-offset 300ms ease-out,
				opacity 300ms ease-out;

			&:not(:hover) {
				opacity: 0.85;
			}

			&:active {
				scale: 0.97;
			}
		}

		#popover {
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
</style>
