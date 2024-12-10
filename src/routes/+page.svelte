<script>
	import Hero from '$lib/components/Hero.svelte';
	import HeroLogo from '$lib/components/HeroLogo.svelte';
	import SEO from '$lib/data/SEO.svelte';
	import AnimatedIntro from '$lib/components/AnimatedIntro.svelte';

	$effect(() => {
		console.log('Home page');
	});
</script>

<SEO
	title="Frontend Developer"
	description="Gabriel Atwell's Portfolio"
	keywords="gabriel atwell, gabe atwell, frontend developer, frontend dev portfolio, frontend developer portfolio, frontend portfolio projects, frontend portfolio, frontend web developer portfolio, junior web developer portfolio, web developer, web designer, web developer, web development, web design, gabe atwell portfolio, gabe atwell developer, gabe atwell web developer, gabe atwell web designer, atwell design, gabe atwell web design, atwell, user interface"
/>

<HeroLogo />

<AnimatedIntro text="do you need a " span="website?" />

<Hero />
