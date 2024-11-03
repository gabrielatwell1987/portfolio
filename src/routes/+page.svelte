<script>
	import Hero from '$lib/components/Hero.svelte';
	import HeroLogo from '$lib/components/HeroLogo.svelte';
	import SEO from '$lib/data/SEO.svelte';
	import AnimatedIntro from '$lib/components/AnimatedIntro.svelte';
	// import Video from '$lib/components/Video.svelte';

	$effect(() => {
		console.log('Home page');
	});
</script>

<SEO
	title="Frontend Developer"
	description="Gabriel Atwell's Portfolio"
	keywords="gabriel atwell, gabe atwell, frontend developer, frontend portfolio, web developer, web designer, web development, web design, gabe atwell portfolio, gabe atwell website, gabe atwell developer, gabe atwell web developer, gabe atwell web designer, atwell ui, gabe atwell web design"
/>
<h1>caca</h1>
<HeroLogo />

<AnimatedIntro text="do you need a " span="website?" />

<!-- <div class="video">
	<Video src1="/videos/seamless.webm" src2="/videos/seamless.mp4" />
</div> -->

<Hero />

<!-- <style>
	.video {
		border-radius: 12px;
	} 
</style> -->
