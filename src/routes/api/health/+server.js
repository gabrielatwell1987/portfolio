import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	// Simple health check - just confirm the API is working
	const health = {
		status: 'healthy',
		timestamp: new Date().toISOString(),
		domain: url.origin,
		message: 'Portfolio API is running'
	};

	return json(health, {
		headers: {
			'Cache-Control': 'no-cache, no-store, must-revalidate',
			Pragma: 'no-cache',
			Expires: '0'
		}
	});
}
