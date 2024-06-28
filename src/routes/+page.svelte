<script>
	import Hero from '$lib/components/Hero.svelte';
	// import HeroLogo from '$lib/components/HeroLogo.svelte';

	$: console.log(Hero);
</script>

<svelte:head>
	<title>Gabriel Atwell</title>
	<meta name="description" content="Gabriel Atwell's Portfolio" />
	<meta name="keywords" content="Gabriel, Atwell, Portfolio, Gabriel Atwell" />
</svelte:head>

<!-- <HeroLogo /> -->
<Hero />
