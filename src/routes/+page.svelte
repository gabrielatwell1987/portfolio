<script>
	import Hero from '$lib/components/Hero.svelte';
	import HeroLogo from '$lib/components/HeroLogo.svelte';
	import SEO from '$lib/data/SEO.svelte';
	import AnimatedIntro from '$lib/components/AnimatedIntro.svelte';

	$: console.log(Hero);
	$: console.log('Hero section');
</script>

<svelte:head>
	<script src="https://cdn.jsdelivr.net/npm/@mux/mux-player"></script>
</svelte:head>

<SEO
	title="Gabriel Atwell"
	description="Gabriel Atwell's Portfolio"
	keywords="gabriel atwell, gabe's portfolio"
/>

<HeroLogo />

<AnimatedIntro text="Do you need a " span="website?" />

<div class="video">
	<!-- <mux-player
		playback-id="zGVJu02OI79wCfUlrXFdy2JTEyPD69T8k8snu2i11O500"
		metadata-video-title="Frontend Developer"
		metadata-viewer-user-id="atwellUI"
		accent-color="var(--purple)"
	/> -->
	<video src="https://stream.mux.com/zGVJu02OI79wCfUlrXFdy2JTEyPD69T8k8snu2i11O500.m3u8" controls>
		<track kind="captions" src="path/to/captions.vtt" srclang="en" label="English" />
	</video>
</div>

<Hero />

<style>
	.video {
		margin: 0 auto;
		width: 100%;
		max-width: 800px;
	}
</style>
