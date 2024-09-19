<script>
	let darkMode = true;

	function toggle() {
		darkMode = !darkMode;
		window.document.body.classList.toggle('light');
	}
</script>

<button on:click={toggle} aria-label="toggle">
	{#if darkMode}
		<i class="fa-regular fa-sun" />
	{:else}
		<i class="fa-regular fa-moon" />
	{/if}
</button>

<style>
	:root {
		--bg-color: var(--blackest);
		--text-color: var(--white);
	}

	:global(body) {
		background-image: radial-gradient(circle at center, #2f2f2f 0%, #000 60%);
	}

	:global(body.light) {
		background-image: radial-gradient(circle at center, #000 0%, #2f2f2f 60%);
	}

	button {
		background: transparent;
		border: none;
		border-radius: 5px;
		color: var(--text-color);
		padding: 10px 15px;
		font-size: clamp(1.5rem, 2vw, 2.25rem);
		letter-spacing: 3px;
		width: 100%;
		margin-left: 5%;
		margin-top: 5%;
		z-index: 10;
		outline: none;
	}

	button:hover {
		text-shadow: 0 0 1px var(--smoke);
		transition: all 0.35s ease-in-out;
	}

	button:active {
		background: inherit;
		color: var(--text-color);
	}

	button:focus {
		outline: none;
	}

	button:focus-visible {
		outline: none;
	}
</style>
