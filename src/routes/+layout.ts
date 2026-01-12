import { browser } from '$app/environment';

export const ssr = true;
export const csr = true;
export const prerender = false;

export function load({ url }) {
	if (browser) {
		// Check if the user has already visited the landing page
		const visitedLanding = localStorage.getItem('visitedLanding') === 'true';

		// If not visited and not already on the landing page, redirect to /landing
		if (!visitedLanding && url.pathname !== '/landing') {
			return {
				status: 302,
				redirect: '/landing'
			};
		}
	}
}
