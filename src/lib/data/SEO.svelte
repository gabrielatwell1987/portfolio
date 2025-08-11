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

	let url = $derived(() => {
		const { origin, pathname } = $page.url;
		const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
		const canonicalOrigin =
			origin.includes('localhost') || origin.includes('127.0.0.1')
				? origin
				: 'https://www.gabrielatwell.com';
		return `${canonicalOrigin}${normalizedPath}`;
	});

	let siteName = 'atwellUI';
	let baseUrl = $derived(() => {
		const { origin } = $page.url;
		return origin.includes('localhost') || origin.includes('127.0.0.1')
			? origin
			: 'https://www.gabrielatwell.com';
	});

	let ogImage = $derived(() => {
		if (image) {
			return image.startsWith('http') ? image : `${baseUrl}${image}`;
		}
		return `${baseUrl}/logos/atwellUI_social-media.webp`;
	});
	let fullTitle = title;
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<link rel="canonical" href={url} />

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
	<meta property="og:url" content={url} />
	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:alt" content={`${title} - Gabriel Atwell Portfolio`} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:image:alt" content={`${title} - Gabriel Atwell Portfolio`} />

	<!-- Structured Data -->
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
</svelte:head>
