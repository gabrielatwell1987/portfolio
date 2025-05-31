<script>
	import SEO from '$lib/data/SEO.svelte';
	import Hero from '$lib/components/landing/Hero.svelte';
	import AnimatedIntro from '$lib/components/landing/AnimatedIntro.svelte';
	import ImageIntro from '$lib/components/landing/ImageIntro.svelte';
	import GabeMorph from '$lib/components/landing/GabeMorph.svelte';
</script>

<SEO
	title="Portfolio of Gabe Atwell"
	description="The home page of Gabriel Atwell's portfolio"
	keywords="gabriel atwell home page, gabe atwell home page, frontend crafted web experiences, atwell ui, do you need a website"
/>

<ImageIntro src="/logos/atwellUI.webp" alt="atwell user interface" title="" text="" width="1200" />

<AnimatedIntro text="do you need a " span="website?" />

<Hero />

<GabeMorph />
