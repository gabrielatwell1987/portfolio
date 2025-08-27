<script>
	let { open = $bindable(false), ariaLabel = 'menu' } = $props();

	function toggleMenu() {
		setTimeout(() => {
			open = !open;
		}, 50);
	}
</script>

<button
	class="hamburger"
	class:open
	onclick={toggleMenu}
	aria-label={ariaLabel}
	aria-expanded={open}
	aria-controls="mobile-menu"
>
	<div class="bars">
		<span class="bar bar-1"></span>
		<span class="bar bar-2"></span>
	</div>
</button>

<style>
	.hamburger {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 30px;
		height: 30px;
		background: transparent;
		border: none;
		cursor: pointer;
		z-index: 10;
		margin-bottom: 2em;
		margin-left: 1em;
		position: relative;
		padding: 0;

		@media (width >= 755px) {
			opacity: 0;
			display: none;
		}

		& .bars {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			width: 2.5em;
			height: 2rem;
			position: relative;
			margin-top: 1rem;

			& .bar {
				width: 100%;
				height: 0.3rem;
				background-color: var(--clr-main);
				border-radius: 2px;
				transition: transform 0.35s ease;
				transform-origin: center;
			}

			& .bar-1 {
				width: 2.8em;
			}

			& .bar-2 {
				width: 2em;
			}
		}

		/* Open state animations */
		&.open {
			padding-bottom: 0.5rem;

			.bar-1 {
				transform: translateY(0.75rem) rotate(45deg);
				width: 2.2em;
			}

			.bar-2 {
				transform: translateY(-0.15rem) rotate(-45deg);
				width: 2.2em;
			}
		}

		/* Hover effects */
		&:hover:not(.open) {
			.bar {
				background-color: var(--clr-accent, var(--clr-main));
			}
		}

		@media (width >= 755px) {
			opacity: 0;
		}
	}
</style>
