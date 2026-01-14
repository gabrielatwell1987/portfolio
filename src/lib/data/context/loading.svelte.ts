import { getContext, setContext } from 'svelte';

const PAGE_KEY = Symbol('loading');

export interface LoadingContext {
	isLoaded: boolean;
	readonly announcement: string;
	announce(message: string, duration?: number): void;
}

export function createLoadingContext(): LoadingContext {
	let isLoaded = $state<boolean>(false);
	let announcement = $state<string>('');

	const context: LoadingContext = {
		get isLoaded() {
			return isLoaded;
		},
		set isLoaded(v: boolean) {
			isLoaded = v;
		},
		get announcement() {
			return announcement;
		},
		announce(message: string, duration: number = 2000) {
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

export function useLoading(): LoadingContext {
	const ctx = getContext<LoadingContext>(PAGE_KEY);
	if (!ctx) {
		throw new Error(
			'No loading context found. Make sure to call createLoadingContext() in a parent component.'
		);
	}
	return ctx;
}
