<script>
	import NavBar from '$lib/NavBar.svelte';
	import NavBar2 from '$lib/NavBar2.svelte';
	import Discord from '$lib/Discord.svelte';
	import Analytics from '$lib/Analytics.svelte';
	import SEO from '$lib/SEO.svelte';
	import '../app.css';
	import LinkedIn from '../lib/LinkedIn.svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
	/>
	<title>GABE 💥</title>
</svelte:head>

<Analytics />
<SEO title="GABE 💥" description="Gabriel Atwell's Portfolio" />

<main class="desktop">
	<NavBar />
	<br />
	<slot />
</main>

<footer>
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
	@media screen and (max-width: 1650px) {
		.linkIcons {
			display: block;
			/* display: none; */
		}
	}
</style>
