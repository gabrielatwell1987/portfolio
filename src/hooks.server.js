/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	// Handle Chrome DevTools requests that cause 404 errors
	if (event.url.pathname.startsWith('/.well-known/')) {
		return new Response('', { status: 204 });
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

	const response = await resolve(event);
	return response;
}
