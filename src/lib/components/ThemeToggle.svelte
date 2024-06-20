<script>
	let darkMode = true;

	function toggle() {
		darkMode = !darkMode;
		window.document.body.classList.toggle('dark');
	}
</script>

<button on:click={toggle}>
	{#if darkMode}
		<!-- <i class="fa-regular fa-moon" /> -->
		<i class="fa-regular fa-sun" />
	{:else}
		<!-- <i class="fa-regular fa-sun" /> -->
		<i class="fa-regular fa-moon" />
	{/if}
</button>

<style>
	button {
		background: transparent;
		border: none;
		border-radius: 5px;
		color: var(--text-color);
		padding: 10px 15px;
		font-size: 2rem;
		letter-spacing: 3px;
		width: 5%;
		margin-left: 5%;
		margin-top: 5%;
		z-index: 10;
	}

	button:active {
		background: inherit;
	}

	:root {
		--bg-color: var(--blackest);
		--text-color: var(--white);
	}

	:global(body) {
		background: var(--bg-color);
		color: var(--text-color);
	}

	:global(body.dark) {
		--bg-color: var(--lightblack);
		/* --bg-color: var(--dark-gray); */
		--text-color: var(--blackest);
	}
</style>
