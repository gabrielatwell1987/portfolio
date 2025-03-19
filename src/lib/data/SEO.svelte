<script>
	import { page } from '$app/stores';

	/** @type {{title: any, description: any, keywords: any}} */
	let {
		title = 'Gabriel Atwell',
		description = 'Web developer and web designer',
		keywords = ''
	} = $props();

	let url = $derived($page.url.href);
	let siteName = 'Atwell UI';
	let baseUrl = $derived($page.url.origin);
</script>

<svelte:head>
	<title>{title}</title>

	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />

	<meta name="robots" content="index, follow" />
	<meta property="og:locale" content="en_US" />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:image" content="{baseUrl}/logos/atwellUI.webp" />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="{baseUrl}/logos/atwellUI.webp" />

	<script type="application/ld+json">
		{JSON.stringify({
			"@context": "http://schema.org",
			"@type": "WebSite",
			"name": "Gabriel Atwell",
          	"description": "The portfolio of Gabriel Atwell, a web developer and designer based in Las Vegas, NV.",
			"url": url
		})}
	</script>
</svelte:head>

<!-- <script>
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
</svelte:head> -->
