<script>
	import { page } from '$app/stores';

	/** @type {{title: any, description: any, keywords: any}} */
	let { title, description, keywords } = $props();

	let url = $derived($page.url.href);
</script>

<svelte:head>
	<title>{title}</title>

	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />

	<script type="application/ld+json">
		{
			"@context": "http://schema.org",
			"@type": "WebSite",
		  	"name": "Gabriel Atwell",
          	"description": "The portfolio of Gabriel Atwell, a web developer and designer based in Las Vegas, NV.",
		  	"url": "https://gabrielatwell.com",
		}
	</script>
</svelte:head>
