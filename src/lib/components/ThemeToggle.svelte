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
		padding: 10px 15px;
		font-size: clamp(1.5rem, 2vw, 2.25rem);
		letter-spacing: 3px;
		width: fit-content;
		margin-left: 5%;
		margin-top: 1%;
		z-index: 10;
		outline: none;

		& i {
			cursor: pointer;
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
	}

	@media (min-width: 300px) {
		button {
			margin-top: 2rem;
			margin-left: 1rem;
		}
	}

	@media (min-width: 750px) {
		button {
			margin-left: 3rem;
		}
	}

	@media (min-width: 1024px) {
		button {
			z-index: 10;
		}
	}

	@media (min-width: 1100px) {
		button {
			margin-left: 10%;
		}
	}

	@media (min-width: 1400px) {
		button {
			margin-left: 17%;
		}
	}
</style>
