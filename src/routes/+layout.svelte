<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import Discord from '$lib/components/Discord.svelte';
	import Analytics from '$lib/data/Analytics.svelte';
	import SEO from '$lib/data/SEO.svelte';
	import '../app.css';
	import LinkedIn from '$lib/components/LinkedIn.svelte';
	import Lenis from '@studio-freight/lenis';

	// lenis
	const lenis = new Lenis();

	lenis.on('scroll', (e) => {
		console.log(e);
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);
</script>

<svelte:head>
	<!-- theme cdn -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />

	<!-- font awesome cdn -->
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
	/>

	<title>GABE 👻</title>
</svelte:head>

<!-- data from SEO and analytics -->
<Analytics />
<SEO title="GABE 👻" description="Gabriel Atwell's Portfolio" />

<!-- layout -->
<main class="desktop">
	<NavBar />
	<br />
	<slot />
</main>

<footer>
	<!-- footer links -->
	<section class="linkIcons">
		<a class="linkedin" href="https://www.linkedin.com/in/gabriel-atwell-ab2116231/">
			<LinkedIn />
		</a>

		<a class="discord" href="https://discordapp.com/users/1007777351809114112">
			<Discord />
		</a>
	</section>
</footer>

<style>
	a {
		text-decoration: none;
		color: var(--sky);
	}
	a:hover {
		color: var(--blue);
	}
	.linkedin {
		margin: 0 2rem 0 0;
	}
	.desktop {
		width: 100%;
	}
	.linkIcons {
		color: var(--sky);
	}
	.linkIcons:hover {
		color: var(--blue);
	}
	@media screen and (max-width: 1650px) {
		.linkIcons {
			display: none;
		}
	}
</style>
