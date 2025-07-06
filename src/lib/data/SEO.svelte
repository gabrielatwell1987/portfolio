<script>
	import { page } from '$app/stores';

	/** @type {{title: any, description: any, keywords: any}} */
	let {
		title = 'Gabriel Atwell',
		description = 'Web developer and web designer',
		keywords = ''
	} = $props();

	let url = $derived(() => {
		const { origin, pathname } = $page.url;
		// Remove trailing slash except for root path, and ensure consistent formatting
		const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
		// Ensure we always use the canonical domain
		const canonicalOrigin =
			origin.includes('localhost') || origin.includes('127.0.0.1')
				? origin
				: 'https://www.gabrielatwell.com';
		return `${canonicalOrigin}${normalizedPath}`;
	});
	let siteName = 'Atwell UI';
	let baseUrl = $derived(() => {
		const { origin } = $page.url;
		return origin.includes('localhost') || origin.includes('127.0.0.1')
			? origin
			: 'https://www.gabrielatwell.com';
	});
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
			"@context": "https://schema.org",
			"@type": "WebSite",
			"name": "Gabriel Atwell",
          	"description": "The portfolio of Gabriel Atwell, a web developer and designer based in Las Vegas, NV.",
			"url": url,
			"author": {
				"@type": "Person",
				"name": "Gabriel Atwell"
			}
		})}
	</script>
</svelte:head>
