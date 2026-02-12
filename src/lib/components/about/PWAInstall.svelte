<script lang="ts">
	interface Props {
		title: string;
		popoverTitle: string;
		text: string;
		text2: string;
		text3: string;
	}

	let { title, popoverTitle, text, text2, text3 }: Props = $props();

	const id = `popover-${Math.random().toString(36).substr(2, 9)}`;

	let popoverElement: HTMLElement | null = $state(null);

	function openPopover(): void {
		if (!popoverElement) return;

		if (!document.startViewTransition) {
			popoverElement.showPopover();
			return;
		}

		document.startViewTransition(() => {
			popoverElement!.showPopover();
		});
	}

	function closePopover(): void {
		if (!popoverElement) return;

		if (!document.startViewTransition) {
			popoverElement.hidePopover();
			return;
		}

		document.startViewTransition(() => {
			setTimeout(() => {
				popoverElement!.hidePopover();
			}, 0);
		});
	}
</script>

<section class="instruction-popover" aria-label="pwa instructions">
	<button type="button" onclick={openPopover}>
		<span class="pwa-title">{title}</span>
	</button>

	<div {id} popover="auto" bind:this={popoverElement}>
		<p><span class="pwa-title">{title}</span></p>
		<p data-content>{text}</p>
		<p data-content>{text2}</p>
		<p data-content>{text3}</p>
	</div>
</section>

<style>
	.instruction-popover {
		display: inline-block;
		position: relative;
		anchor-name: --instruction-popover;

		&:focus,
		&:focus-visible {
			outline: 1px solid var(--clr-main);
			background: transparent;
		}

		& [data-content] {
			text-align: start;
		}

		& button {
			background-color: transparent;
			filter: brightness(1);
			color: var(--clr-green);
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

		&:has([popover]:popover-open) button .pwa-title {
			view-transition-name: none;
		}

		[popover]:popover-open .pwa-title {
			view-transition-name: pwa-title;
			color: var(--clr-green);
			font-size: clamp(var(--h5), 1.5vw, var(--h3));
		}

		& [popover] {
			margin-inline: auto;
			margin-block: 5em;
			font-family: var(--bronova);
			font-size: clamp(var(--sm), 5vw, var(--h3));
			letter-spacing: 2px;
			padding: clamp(1rem, 2vw, 2.25rem) clamp(1.5rem, 2vw, 2.75rem);
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
		border: 3px solid var(--clr-gray);
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
		background-color: rgb(0 0 0 / 50%);
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
