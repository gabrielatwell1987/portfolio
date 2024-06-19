<script>
	let darkMode = false;

	function toggle() {
		darkMode = !darkMode;
		window.document.body.classList.toggle('dark');
	}
</script>

<button on:click={toggle}>
	{#if darkMode}
		<h3>on</h3>
	{:else}
		<h3>off</h3>
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
	}

	button:active {
		background: inherit;
	}
</style>
