<script>
	import Hero from '$lib/components/Hero.svelte';
	import HeroLogo from '$lib/components/HeroLogo.svelte';
	import SEO from '$lib/data/SEO.svelte';
	import ImageFrame from '$lib/components/ImageFrame.svelte';

	$: console.log(Hero);
</script>

<SEO
	title="Gabriel Atwell"
	description="Gabriel Atwell's Portfolio"
	keywords="gabriel atwell, gabe's portfolio"
/>

<HeroLogo />
<section class="frame">
	<ImageFrame
		src="/logos/frontend_dev.webp"
		alt="Frontend Developer"
		text="Distinguish your website"
	/>
</section>
<Hero />

<style>
	.frame {
		display: flex;
		justify-content: center;
	}
</style>
