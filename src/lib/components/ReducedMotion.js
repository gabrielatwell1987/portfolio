import { browser } from '$app/environment';

export function getPrefersReducedMotion() {
	if (!browser) return;

	const query = '(prefers-reduced-motion: reduce)';

	const mediaQueryList = window.matchMedia(query);

	return mediaQueryList.matches;
}
