import { getContext, setContext } from 'svelte';

const PAGE_KEY = Symbol('loading');

export function createLoadingContext() {
	let isLoaded = $state(false);
	let announcement = $state('');

	const context = {
		get isLoaded() {
			return isLoaded;
		},
		set isLoaded(v) {
			isLoaded = v;
		},
		get announcement() {
			return announcement;
		},
		/**
		 * Announce a message for screen readers
		 * @param {string} message
		 * @param {number} duration - ms before clearing
		 */
		announce(message, duration = 2000) {
			announcement = message;
			if (duration > 0) {
				setTimeout(() => {
					announcement = '';
				}, duration);
			}
		}
	};
	setContext(PAGE_KEY, context);
	return context;
}

export function useLoading() {
	const ctx = getContext(PAGE_KEY);
	if (!ctx) {
		throw new Error(
			'No loading context found. Make sure to call createLoadingContext() in a parent component.'
		);
	}
	return ctx;
}
