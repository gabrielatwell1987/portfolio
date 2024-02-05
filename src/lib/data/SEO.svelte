<script>
	import { page } from '$app/stores';

	export let title = "Gabriel Atwell's Portfolio";
	export let description =
		'The portfolio of Gabriel Atwell, a web developer and designer based in Las Vegas, NV.';

	$: url = $page.url.href;
</script>

<svelte:head>
	<title>{title}</title>

	<meta name="description" content={description} />

	<script type="application/ld+json">
		{
			"@context": "http://schema.org",
			"@type": "WebSite",
		  	"name": "Gabriel Atwell",
          	"description": "The portfolio of Gabriel Atwell, a web developer and designer based in Las Vegas, NV.",
		  	"url": "https://gabrielatwell.vercel.app",
		}
	</script>
</svelte:head>
