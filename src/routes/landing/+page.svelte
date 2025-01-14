<script>
	import Hero from '$lib/components/Hero.svelte';
	import SEO from '$lib/data/SEO.svelte';
	import AnimatedIntro from '$lib/components/AnimatedIntro.svelte';
	import ImageIntro from '$lib/components/ImageIntro.svelte';

	$effect(() => {
		console.log(Hero);
	});
</script>

<SEO
	title="Home Page"
	description="The home page of Gabriel Atwell's portfolio"
	keywords="gabriel atwell home page, gabe atwell home page"
/>

<ImageIntro src="/logos/atwellUI.webp" alt="" title="" text="" width="1200" />

<AnimatedIntro text="do you need a " span="website?" />

<Hero />
