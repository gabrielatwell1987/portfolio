<script>
	import NavBar from '$lib/NavBar.svelte';
	import NavBar2 from '$lib/NavBar2.svelte';
	import Discord from '$lib/Discord.svelte';
	import Reddit from '$lib/Reddit.svelte';

	try {
		if (typeof window !== 'undefined' && window) {
			const googleAnalyticsId = 'G-FY0FSHP0GC';
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				window.dataLayer.push(arguments);
			}
			gtag('js', new Date());
			gtag('config', googleAnalyticsId);
		}
	} catch (error) {
		console.error('Failed to initialize Analytics');
	}
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-FY0FSHP0GC"></script>
</svelte:head>

<main class="desktop">
	<NavBar />
	<br />
	<slot />
</main>

<main class="mobile">
	<NavBar2 />
	<br />
	<slot />
</main>

<footer>
	<a href="https://www.reddit.com/u/gatwell702">
		<Reddit />
	</a>
	<a href="https://discordapp.com/users/1007777351809114112">
		<Discord />
	</a>
</footer>

<style>
	a {
		text-decoration: none;
		color: lightskyblue;
	}
	a:hover {
		color: blue;
	}
	.mobile {
		display: none;
	}
	@media (max-width: 1024px) {
		footer {
			display: none;
		}
	}
</style>
