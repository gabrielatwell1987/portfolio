// Create internal state
let _duration = $state(500);
let _delay = $state(0);
let _inOut = $state('cubic-bezier(0.4, 0, 0.2, 1)');

// Export getters for reading the state
export function getDuration() {
	return _duration;
}

export function getDelay() {
	return _delay;
}

export function getInOut() {
	return _inOut;
}

// Export setters for updating the state
export function setDuration(ms) {
	_duration = ms;
}

export function setDelay(ms) {
	_delay = ms;
}

export function setInOut(easing) {
	_inOut = easing;
}

// Testing helpers
export function quickTest() {
	_duration = 300;
	_delay = 0;
}

export function slowTest() {
	_duration = 1000;
	_delay = 500;
}

// Auto-reset for development
if (typeof window !== 'undefined') {
	quickTest();
}
