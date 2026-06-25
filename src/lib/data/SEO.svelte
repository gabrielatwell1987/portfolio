<script lang="ts">
    import { page } from '$app/state';

    interface Props {
        title?: string;
        description?: string;
        keywords?: string;
        image?: string;
        type?: string;
    }

    let {
        title = 'Gabriel Atwell',
        description = 'Web developer and web designer',
        keywords = '',
        image = '',
        type = 'website',
    }: Props = $props();

    const currentUrl = $derived(page.url);
    const baseUrl = $derived(
        currentUrl.origin.includes('localhost') ||
            currentUrl.origin.includes('127.168.0.1')
            ? currentUrl.origin
            : 'https://atwell.dev',
    );
    const normalizedPath = $derived(
        currentUrl.pathname === '/'
            ? '/'
            : currentUrl.pathname.replace(/\/$/, ''),
    );
    const canonicalUrl = $derived(`${baseUrl}${normalizedPath}`);
    const ogImage = $derived(
        image
            ? image.startsWith('http')
                ? image
                : `${baseUrl}${image}`
            : 'https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/atwellUI_social-media.webp',
    );
    const siteName = 'atwellUI';
</script>

<svelte:head>
    <!-- critical -->
    <title>{title}</title>
    <link rel="canonical" href={canonicalUrl} />
    <meta name="description" content={description} />
    <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    />

    <!-- helpful -->
    {#if keywords}
        <meta name="keywords" content={keywords} />
    {/if}
    <meta name="author" content="Gabriel Atwell" />

    <!-- required: Open Graph -->
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonicalUrl} />
    <meta property="og:type" content={type} />
    <meta property="og:site_name" content={siteName} />
    <meta property="og:locale" content="en_US" />
    {#if ogImage}
        <meta property="og:image" content={ogImage} />
        <meta
            property="og:image:alt"
            content={`${title} - Gabriel Atwell Portfolio`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
    {/if}

    <!-- required: Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {#if ogImage}
        <meta name="twitter:image" content={ogImage} />
        <meta
            name="twitter:image:alt"
            content={`${title} - Gabriel Atwell Portfolio`}
        />
    {/if}

    <!-- Structured Data: (JSON-LD) -->
    <script type="application/ld+json">
        {JSON.stringify({
            "@context": "https://schema.org",
            "@type": type === 'article' ? 'Article' : 'WebSite',
            "name": title,
            "description": description,
            "url": canonicalUrl,
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
