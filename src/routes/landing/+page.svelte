<script>
	import SEO from '$lib/data/SEO.svelte';
	import Hero from '$lib/components/landing/Hero.svelte';
	import DoYouNeed from '$lib/components/landing/DoYouNeed.svelte';
	// import ImageIntro from '$lib/components/landing/ImageIntro.svelte';
	import WaveBackground from '$lib/components/landing/WaveBackground.svelte';
</script>

<SEO
	title="Frontend Developer"
	description="The home page of Gabriel Atwell's portfolio"
	keywords="gabriel atwell home page, gabe atwell home page, frontend crafted web experiences, atwell ui, do you need a website"
/>

<WaveBackground
	position="bottom"
	opacity={0.5}
	color="var(--blacker)"
	height="1500px"
	className="gentle"
/>

<section class="content">
	<!-- <ImageIntro src="/logos/atwellUI.webp" alt="atwell user interface" title="" text="" width="800" /> -->

	<DoYouNeed text="do you need a " span="website?" />

	<Hero />
</section>

<style>
	.content {
		position: relative;
		z-index: 1;
	}
</style>
