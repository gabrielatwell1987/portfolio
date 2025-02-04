export function randomValue(max, min) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
