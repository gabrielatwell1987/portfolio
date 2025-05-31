<script>
	let { open = $bindable(false), ariaLabel = 'menu' } = $props();

	function toggleMenu() {
		setTimeout(() => {
			open = !open;
		}, 50);
	}
</script>

<button class="hamburger" class:open onclick={toggleMenu} aria-label={ariaLabel}>
	<div class="bars">
		<span class="bar bar-1"></span>
		<span class="bar bar-2"></span>
		<span class="bar bar-3"></span>
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

		& .bars {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 2.5em;
			height: 2rem;
			position: relative;
			margin-top: 1rem;

			& .bar {
				width: 100%;
				height: 0.3rem;
				background-color: var(--clr-main);
				border-radius: 2px;
				transition: all 0.3s ease;
				transform-origin: center;
			}
		}

		/* Open state animations */
		&.open {
			padding-bottom: 0.5rem;

			.bar-1 {
				transform: translateY(1.2rem) rotate(45deg);
			}

			.bar-2 {
				opacity: 0;
				transform: scaleX(0);
			}

			.bar-3 {
				transform: translateY(-0.5rem) rotate(-45deg);
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
