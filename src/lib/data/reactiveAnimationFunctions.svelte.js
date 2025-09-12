export function createTimer() {
	let isRunning = $state(false);
	let elapsed = $state(0);
	let startTime = $state(0);
	let intervalid = null;

	return {
		get isRunning() {
			return isRunning;
		},
		get elapsed() {
			return elapsed;
		},
		get formattedTime() {
			const seconds = Math.floor(elapsed / 1000);
			const minutes = Math.floor(seconds / 60);
			return `${minutes}:${(seconds % 60).toString().padStart(2, '0')}`;
		},
		start() {
			if (!isRunning) {
				startTime = Date.now() - elapsed;
				isRunning = true;
				intervalid = setInterval(() => {
					elapsed = Date.now() - startTime;
				}, 16);
			}
		},
		stop() {
			if (isRunning) {
				isRunning = false;
				clearInterval(intervalid);
			}
		},
		reset() {
			isRunning = false;
			elapsed = 0;
			clearInterval(intervalid);
		}
	};
}

export const easingFunctions = {
	linear: (t) => t,
	easeInQuad: (t) => t * t,
	easeOutQuad: (t) => t * (2 - t),
	easeInOutQuad: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
	easeInCubic: (t) => t * t * t,
	easeOutCubic: (t) => --t * t * t + 1,
	easeInOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1)
};
