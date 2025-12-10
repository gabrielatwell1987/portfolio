import { getContext, setContext } from 'svelte';

const ANIMATION_KEY = Symbol('animation');

export const DEFAULT_DURATION = 300;
export const DEFAULT_DELAY = 0;

/**
 * @param {number} initialDuration
 * @param {number} initialDelay
 */

export function createAnimationContext(initialDuration = 300, initialDelay = 0) {
	let duration = $state(initialDuration);
	let delay = $state(initialDelay);
	let isEnabled = $state(true);

	const context = {
		get duration() {
			return duration;
		},
		set duration(v) {
			duration = v;
		},
		get delay() {
			return delay;
		},
		set delay(v) {
			delay = v;
		},
		get isEnabled() {
			return isEnabled;
		},
		set isEnabled(v) {
			isEnabled = v;
		},
		get css() {
			return {
				duration: `${duration}ms`,
				delay: `${delay}ms`
			};
		}
	};

	setContext(ANIMATION_KEY, context);
	return context;
}

export function getAnimationContext() {
	return getContext(ANIMATION_KEY);
}

export function useAnimation() {
	const ctx = getContext(ANIMATION_KEY);
	if (!ctx) {
		throw new Error(
			'No animation context found. Make sure to call createAnimationContext() in a parent component.'
		);
	}
	return ctx;
}
