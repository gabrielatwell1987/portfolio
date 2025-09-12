export function randomValue(initialMax = 100, initialMin = 0) {
	let max = $state(initialMax);
	let min = $state(initialMin);

	return {
		get max() {
			return max;
		},
		set max(value) {
			max = value;
		},
		get min() {
			return min;
		},
		set min(value) {
			min = value;
		},
		generate() {
			return Math.floor(Math.random() * (1 + max - min) + min);
		}
	};
}
