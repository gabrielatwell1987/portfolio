<script>
	let darkMode = $state(true);

	function toggle() {
		darkMode = !darkMode;
		window.document.body.classList.toggle('light');
	}
</script>

<button onclick={toggle} aria-label="toggle">
	{#if darkMode}
		<i class="fa-regular fa-sun" style="width: 1.75rem;"></i>
	{:else}
		<i class="fa-regular fa-moon" style="width: 1.75rem;"></i>
	{/if}
</button>

<style>
	:root {
		--bg-color: var(--blackest);
		--text-color: var(--white);
		--sun: var(--pale);
		--moon: var(--darkest-blue);
	}

	:global(body) {
		background-image: radial-gradient(circle at center, #474747 0%, #000 60%);
	}

	:global(body.light) {
		background-image: radial-gradient(circle at center, #000 0%, #474747 60%);
	}

	button {
		background: transparent;
		border: none;
		border-radius: 5px;
		color: var(--text-color);
		/* padding: 2rem 2.25rem; */
		padding-top: 2rem;
		font-size: clamp(1.5rem, 2vw, 2.25rem);
		letter-spacing: 3px;
		width: fit-content;
		display: flex;
		align-items: center;
		height: 100%;

		z-index: 10;
		outline: none;

		& i {
			cursor: pointer;

			&.fa-sun {
				color: var(--sun);
			}

			&.fa-moon {
				color: var(--moon);
				-webkit-text-stroke: 0.035rem var(--white);
			}
		}

		&:hover {
			text-shadow: 0 0 1px var(--smoke);
			transition: all 0.35s ease-in-out;
		}

		&:active {
			background: inherit;
			color: var(--text-color);
		}

		&:focus,
		&:focus {
			box-shadow: 0 0 0px var(--off-white);
		}

		@media (width >= 300px) {
			& i {
				font-weight: 800;
			}
		}
	}
</style>
