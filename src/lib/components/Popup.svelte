<script>
	let { title, text } = $props();
</script>

<main class="popup">
	<button popovertarget="popover"
		>{title}
		<!-- <i class="fa-solid fa-bell"></i> -->

		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width: 1em; height: 1em;">
			<path
				d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
			/>
		</svg>
	</button>

	<div popover="auto" id="popover">{text}</div>
</main>

<style>
	.popup {
		align-content: center;

		button {
			background-color: transparent;
			color: var(--pale);
			width: fit-content;
			font-family: var(--anta);
			border-radius: 6px;
			letter-spacing: 3px;
			padding: 0.75rem 1.15rem;
			border: none;
			outline: none;
			text-transform: uppercase;

			& svg {
				font-size: clamp(2.5rem, 4vw, 4rem);
			}

			&:hover {
				animation: wiggle 1s ease-in-out infinite;
			}

			&:focus {
				box-shadow: 0 0 0px var(--off-white);
			}

			@media (width <= 500px) {
				letter-spacing: 1px;
			}
		}

		#popover {
			margin-inline: auto;
			margin-block: 5em;
			font-family: var(--bronova);
			font-size: clamp(0.9rem, 1.25vw, 1.5rem);
			letter-spacing: 2px;
			padding: clamp(1rem, 2vw, 2.25rem) clamp(1.5rem, 2vw, 2.75rem);
			background-color: rgba(0, 0, 0, 1);

			@media (width < 500px) {
				letter-spacing: 1px;
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

	@keyframes wiggle {
		0% {
			rotate: 0deg;
			translate: 0 0;
		}
		25% {
			rotate: -2deg;
			translate: -5px 0;
		}
		80% {
			rotate: 2deg;
			translate: 5px 0;
		}
	}
</style>
