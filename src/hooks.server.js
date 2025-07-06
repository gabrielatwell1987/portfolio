/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	// Handle Chrome DevTools requests that cause 404 errors
	if (event.url.pathname.startsWith('/.well-known/')) {
		return new Response('', { status: 204 });
	}

	// Redirect /about/hero to /about since that's not directly linked in navigation
	if (event.url.pathname === '/about/hero') {
		return new Response(null, {
			status: 301,
			headers: {
				location: '/about'
			}
		});
	}

	// Handle trailing slashes - redirect to no trailing slash except for root
	if (event.url.pathname !== '/' && event.url.pathname.endsWith('/')) {
		const redirectPath = event.url.pathname.slice(0, -1);
		return new Response(null, {
			status: 301,
			headers: {
				location: redirectPath + event.url.search
			}
		});
	}

	// Handle other common browser/crawler requests that might cause 404s
	const ignorePaths = [
		'/favicon.ico',
		'/robots.txt',
		'/sitemap.xml',
		'/ads.txt',
		'/apple-touch-icon.png',
		'/.well-known/'
	];

	// Check if this is a request we want to handle silently
	const shouldIgnore = ignorePaths.some(
		(path) => event.url.pathname === path || event.url.pathname.startsWith(path)
	);

	if (shouldIgnore && event.url.pathname.startsWith('/.well-known/')) {
		return new Response('', { status: 204 });
	}

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => {
			// Add security headers via meta tags if not already present
			return html;
		}
	});

	// Add SEO-friendly headers
	response.headers.set(
		'X-Robots-Tag',
		'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
	);

	// Cache control for static assets
	if (
		event.url.pathname.startsWith('/static/') ||
		event.url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|webp|svg|woff|woff2)$/)
	) {
		response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
	}

	return response;
}
