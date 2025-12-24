<script>
	let { popoverTitle, title, text, text2, text3 } = $props();

	const id = `popover-${Math.random().toString(36).substr(2, 9)}`;
</script>

<section class="instruction-popover" aria-label="pwa instructions">
	<button type="button" popovertarget={id} popovertargetaction="show">
		<span class="pwa-title">{title}</span>
	</button>

	<div {id} popover="auto">
		<button
			type="button"
			class="close-btn"
			aria-label="Close"
			popovertarget={id}
			popovertargetaction="hide"
		>
			<svg
				width="800px"
				height="800px"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M8.00191 9.41621C7.61138 9.02569 7.61138 8.39252 8.00191 8.002C8.39243 7.61147 9.0256 7.61147 9.41612 8.002L12.0057 10.5916L14.5896 8.00771C14.9801 7.61719 15.6133 7.61719 16.0038 8.00771C16.3943 8.39824 16.3943 9.0314 16.0038 9.42193L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.004C15.6133 16.3945 14.9802 16.3945 14.5896 16.004L12.0057 13.42L9.42192 16.0038C9.03139 16.3943 8.39823 16.3943 8.00771 16.0038C7.61718 15.6133 7.61718 14.9801 8.00771 14.5896L10.5915 12.0058L8.00191 9.41621Z"
					fill="var(--fail)"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4Z"
					fill="var(--fail)"
				/>
			</svg>
		</button>

		<p><span class="pwa-title">{popoverTitle}</span></p>
		<p>{text}</p>
		<p>{text2}</p>
		<p>{text3}</p>
	</div>
</section>

<style>
	.instruction-popover {
		display: inline-block;
		position: relative;

		&:focus,
		&:focus-visible {
			outline: 1px solid var(--clr-main);
			background: transparent;
		}

		& .close-btn {
			position: absolute;
			top: 0.5rem;
			right: 1rem;
			background: transparent;
			border: none;
			color: var(--fail);
			font-family: var(--bronova);
			font-size: clamp(var(--h2), 3vw, var(--h2));
			cursor: pointer;
			padding: 0;
			margin: 0;
			line-height: 1;

			@media (width < 500px) {
				top: 0.2rem;
				right: 0.5rem;
			}

			&:hover {
				opacity: 0.9;
			}

			&:active {
				scale: 0.97;
			}

			& svg {
				width: clamp(1.75rem, 3vw, 2.5rem);
				height: clamp(1.75rem, 3vw, 2.5rem);
			}
		}

		button {
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
</style>
