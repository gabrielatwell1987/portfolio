<script>
	import Hero from '$lib/components/Hero.svelte';
	// import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>

<svelte:head>
	<title>Gabriel Atwell</title>
	<meta name="description" content="Gabriel Atwell's Portfolio" />
	<meta name="keywords" content="Gabriel, Atwell, Portfolio, Gabriel Atwell" />
</svelte:head>

<!-- <ThemeToggle /> -->
<Hero />

<style>
	:root {
		--bg-color: var(--white);
		--text-color: var(--blackest);
	}

	:global(body) {
		background: var(--bg-color);
		color: var(--text-color);
	}

	:global(body.dark) {
		--bg-color: #000000;
		--text-color: #ffffff;
	}
</style>
