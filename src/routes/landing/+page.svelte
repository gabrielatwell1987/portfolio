<script>
	import SEO from '$lib/data/SEO.svelte';
	import Hero from '$lib/components/landing/Hero.svelte';
	import AnimatedIntro from '$lib/components/landing/AnimatedIntro.svelte';
	import ImageIntro from '$lib/components/landing/ImageIntro.svelte';
	import ViewTransitionLink from '$lib/components/layout/ViewTransitionLink.svelte';
</script>

<SEO
	title="Gabe Atwell's portfolio"
	description="The home page of Gabriel Atwell's portfolio"
	keywords="gabriel atwell home page, gabe atwell home page, frontend crafted web experiences, atwell ui, do you need a website"
/>

<ImageIntro src="/logos/atwellUI.webp" alt="atwell user interface" title="" text="" width="1200" />

<AnimatedIntro text="do you need a " span="website?" />

<Hero />

<ViewTransitionLink href="/projects" text="View projects I created" />
