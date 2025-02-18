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
	keywords="gabriel atwell frontend developer, gabe atwell frontend developer, gabriel atwell web designer, gabe atwell web designer, atwell design, atwell ui, gabriel atwell portfolio, gabe atwell portfolio, las vegas web designer, las vegas web developer, responsive website development, user-centered ui/ux design, custom web design services"
/>

<Intro />
