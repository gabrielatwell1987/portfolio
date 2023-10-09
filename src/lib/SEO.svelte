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
		  	"name": "${title}",
          	"description": "${description}",
		  	"url": "${url}"
		}
	</script>
</svelte:head>
