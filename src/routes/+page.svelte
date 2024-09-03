<script>
	import Hero from '$lib/components/Hero.svelte';
	import HeroLogo from '$lib/components/HeroLogo.svelte';
	import SEO from '$lib/data/SEO.svelte';

	$: console.log(Hero);
</script>

<SEO
	title="Gabriel Atwell"
	description="Gabriel Atwell's Portfolio"
	keywords="gabriel atwell, gabe's portfolio"
/>

<HeroLogo />
<Hero />
