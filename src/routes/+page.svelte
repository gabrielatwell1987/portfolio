<script>
	import Hero from '$lib/components/Hero.svelte';

	$: console.log(Hero);
</script>

<svelte:head>
	<title>Gabriel Atwell</title>
	<meta name="description" content="Gabriel Atwell's Portfolio" />
	<meta name="keywords" content="Gabriel, Atwell, Portfolio, Gabriel Atwell" />
</svelte:head>

<Hero />
