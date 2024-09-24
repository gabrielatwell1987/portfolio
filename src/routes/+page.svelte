<script>
	import Hero from '$lib/components/Hero.svelte';
	import HeroLogo from '$lib/components/HeroLogo.svelte';
	import SEO from '$lib/data/SEO.svelte';
	import ImageFrame from '$lib/components/ImageFrame.svelte';
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

<AnimatedIntro text="Do you need a " span="developer?" />

<div class="video">
	<Video src="/videos/fed.mp4" />
</div>

<Hero />

<section class="frame">
	<ImageFrame
		src="/logos/frontend_dev.webp"
		alt="Frontend Developer"
		text="Distinguish your website"
	/>
</section>

<style>
	.frame {
		display: flex;
		justify-content: center;
	}

	.video {
		display: flex;
		justify-content: center;
		opacity: 0.75;
	}
</style>
