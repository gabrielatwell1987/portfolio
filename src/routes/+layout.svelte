<script>
	import NavBar from '$lib/NavBar.svelte';
	import NavBar2 from '$lib/NavBar2.svelte';
	import Discord from '$lib/Discord.svelte';
	import Reddit from '$lib/Reddit.svelte';
	import Analytics from '$lib/Analytics.svelte';
	import SEO from '$lib/SEO.svelte';
	// import { gsap } from 'gsap';
	// import { onMount } from 'svelte';
	import '../app.css';

	// onMount(() => {
	// 	gsap.set('.desktop', { scale: 1, width: '100%' });

	// 	gsap.to('.desktop', { scale: 1, width: '100%' });
	// });
</script>

<Analytics />
<SEO title="©️ Gabriel Atwell" description="Gabriel Atwell's Portfolio" />

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
	<div class="linkIcons">
		<a class="reddit" href="https://www.reddit.com/u/gatwell702">
			<Reddit />
		</a>
		<a href="https://discordapp.com/users/1007777351809114112">
			<Discord />
		</a>
	</div>
	<h5>©️ 2023 Gabriel Atwell</h5>
</footer>

<style>
	a {
		text-decoration: none;
		color: var(--sky);
	}
	a:hover {
		color: var(--blue);
	}
	.mobile {
		display: none;
	}
	h5 {
		text-align: center;
		margin: 1rem 0 0 0;
	}
	.reddit {
		margin: 0 2rem 0 0;
	}
	.desktop {
		width: 100%;
	}
	@media (max-width: 1650px) {
		.linkIcons {
			display: none;
		}
	}
</style>
