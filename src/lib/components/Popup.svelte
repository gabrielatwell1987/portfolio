<script>
	let { title, text } = $props();
</script>

<div class="popup">
	<button popovertarget="popover">{title} <i class="fa-solid fa-bell"></i>:</button>

	<div popover="auto" id="popover">{text}</div>
</div>

<style>
	.popup {
		align-content: center;
	}

	button {
		background-color: transparent;
		color: var(--white);
		width: fit-content;
		font-family: var(--anta);
		font-size: clamp(1rem, 1.5vw, 1.85rem);
		box-shadow: 0 0 25px var(--white);
		border-radius: 6px;
		letter-spacing: 5px;
		padding: 0.75rem 1.15rem;
		border: none;
		outline: none;
		text-transform: uppercase;
		cursor: pointer;
	}

	button:hover {
		color: var(--dark-pale);
		box-shadow: 0 0 25px var(--dark-pale);
		animation: wiggle 1s ease-in-out infinite;
	}

	#popover {
		margin-inline: auto;
		margin-block: 5em;
	}

	[popover] {
		border: 2px solid var(--sky);
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
