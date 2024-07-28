<script>
	import Hero from '$lib/components/Hero.svelte';
	import HeroLogo from '$lib/components/HeroLogo.svelte';
	import Popover from '$lib/components/Popover.svelte';

	$: console.log(Hero);
</script>

<svelte:head>
	<title>Gabriel Atwell</title>
	<meta name="description" content="Gabriel Atwell's Portfolio" />
	<meta name="keywords" content="Gabriel, Atwell, Portfolio, Gabriel Atwell" />
</svelte:head>

<HeroLogo />
<Hero />

<main>
	<Popover text="turd nuggets" />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
