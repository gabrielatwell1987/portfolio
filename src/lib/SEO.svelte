<script>
	import { page } from '$app/stores';

	export let title;
	export let description;

	$: url = $page.url.href;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<script type="application/ld+json">
{
		"@context": "http://schema.org",
		"@type": "WebSite",
		  "name": "©️ Gabriel Atwell",
          "description": "Gabriel Atwell's Portfolio",
		  "url": "https://gabrielatwell.vercel.app",
		}
	</script>
</svelte:head>
