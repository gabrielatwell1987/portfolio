<script>
	let { title, text } = $props();
</script>

<main class="popup">
	<button popovertarget="popover">{title} <i class="fa-solid fa-bell"></i></button>

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

			& i {
				font-size: clamp(2.5rem, 4vw, 4rem);
			}

			&:hover {
				animation: wiggle 1s ease-in-out infinite;
			}

			&:focus {
				box-shadow: 0 0 0px var(--off-white);
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

	@media (max-width: 500px) {
		button {
			letter-spacing: 1px;
		}

		#popover {
			letter-spacing: 1px;
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
