<script>
	import Intro from '$lib/components/Intro.svelte';
	import SEO from '$lib/data/SEO.svelte';

	$effect(() => {
		console.log(Intro);
	});
</script>

<SEO
	title="Gabe Atwell"
	description="Gabriel Atwell's Portfolio"
	keywords="gabriel atwell, gabe atwell, frontend developer, frontend dev portfolio, frontend developer portfolio, frontend portfolio projects, frontend portfolio, frontend web developer portfolio, junior web developer portfolio, web developer, web designer, web developer, web development, web design, gabe atwell portfolio, gabe atwell developer, gabe atwell web developer, gabe atwell web designer, atwell design, gabe atwell web design, atwell ui"
/>

<Intro />
