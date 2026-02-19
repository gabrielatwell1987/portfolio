<script lang="ts">
	import type { Component } from 'svelte';
	import SEO from '$lib/data/SEO.svelte';

	let Hero = $state<Component | null>(null);
	let loaded = $state<boolean>(false);

	$effect(() => {
		if (!loaded) {
			loaded = true;

			import('$lib/components/landing/Hero.svelte').then((module) => {
				Hero = module.default;
			});
		}
	});
</script>

<SEO
	title="Welcome to Gabe Atwell's Portfolio"
	description="Gabriel Atwell's Portfolio"
	keywords="gabriel atwell frontend developer, gabe atwell frontend developer, gabriel atwell web designer, gabe atwell web designer, atwell design, atwell ui, gabriel atwell portfolio, gabe atwell portfolio, las vegas web designer, las vegas web developer, responsive website development, user-centered ui/ux design, custom web design services"
/>

{#if Hero}
	<Hero />
{/if}
