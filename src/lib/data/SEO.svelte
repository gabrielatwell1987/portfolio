<script>
	import { page } from '$app/stores';

	/** @type {{title: string, description: string, keywords: string, image?: string, type?: string}} */
	let {
		title = 'Gabriel Atwell',
		description = 'Web developer and web designer',
		keywords = '',
		image = '',
		type = 'website'
	} = $props();

	let url = $state('');
	let baseUrl = $state('');
	let ogImage = $state('');
	let siteName = 'atwellUI';
	let fullTitle = title;

	$effect(() => {
		const currentPage = $page;
		const { origin, pathname } = currentPage.url;

		// Set base URL
		baseUrl =
			origin.includes('localhost') || origin.includes('127.0.0.1')
				? origin
				: 'https://www.gabrielatwell.com';

		// Set canonical URL
		const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
		url = `${baseUrl}${normalizedPath}`;

		// Set OG image
		if (image) {
			ogImage = image.startsWith('http') ? image : `${baseUrl}${image}`;
		} else {
			ogImage = `${baseUrl}/logos/atwellUI_social-media.webp`;
		}
	});
</script>

<svelte:head>
	<title>{fullTitle}</title>
	{#if url}
		<link rel="canonical" href={url} />
	{/if}

	<meta name="description" content={description} />
	{#if keywords}
		<meta name="keywords" content={keywords} />
	{/if}

	<!-- Essential meta tags -->
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<meta name="googlebot" content="index, follow" />
	<meta name="author" content="Gabriel Atwell" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta charset="utf-8" />
	<meta name="language" content="en-US" />
	<meta name="revisit-after" content="7 days" />

	<!-- Open Graph -->
	<meta property="og:locale" content="en_US" />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	{#if url}
		<meta property="og:url" content={url} />
	{/if}
	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={siteName} />
	{#if ogImage}
		<meta property="og:image" content={ogImage} />
		<meta property="og:image:alt" content={`${title} - Gabriel Atwell Portfolio`} />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />
	{/if}

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	{#if ogImage}
		<meta name="twitter:image" content={ogImage} />
		<meta name="twitter:image:alt" content={`${title} - Gabriel Atwell Portfolio`} />
	{/if}

	<!-- Structured Data -->
	{#if url && baseUrl && ogImage}
		<script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": type === 'article' ? 'Article' : 'WebSite',
                "name": fullTitle,
                "description": description,
                "url": url,
                "image": ogImage,
                "author": {
                    "@type": "Person",
                    "name": "Gabriel Atwell",
                    "url": baseUrl
                },
                ...(type === 'website' && {
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": `${baseUrl}/search?q={search_term_string}`,
                        "query-input": "required name=search_term_string"
                    }
                })
            })}
		</script>
	{/if}
</svelte:head>
