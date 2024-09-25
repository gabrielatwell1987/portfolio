<script>
	import Hero from '$lib/components/Hero.svelte';
	import HeroLogo from '$lib/components/HeroLogo.svelte';
	import SEO from '$lib/data/SEO.svelte';
	import AnimatedIntro from '$lib/components/AnimatedIntro.svelte';
	import Video from '$lib/components/Video.svelte';

	$: console.log(Hero);
	$: console.log('Hero section');
</script>

<SEO
	title="Gabriel Atwell"
	description="Gabriel Atwell's Portfolio"
	keywords="gabriel atwell, gabe's portfolio"
/>

<HeroLogo />

<AnimatedIntro text="Do you need a " span="website?" />

<div class="video">
	<Video src1="/videos/newFED.webm" src2="/videos/newFED.mp4" />
</div>

<Hero />

<style>
	.video {
		border-radius: 12px;
	}
</style>
