// local storage with reactive state
export function createLocalStorage(key, defaultValue = null) {
	let value = $state(defaultValue);

	// Initialize from localStorage
	if (typeof window !== 'undefined') {
		const stored = localStorage.getItem(key);
		if (stored) {
			try {
				value = JSON.parse(stored);
			} catch {
				value = stored;
			}
		}
	}

	return {
		get value() {
			return value;
		},
		set value(newValue) {
			value = newValue;
			if (typeof window !== 'undefined') {
				localStorage.setItem(key, JSON.stringify(newValue));
			}
		},

		clear() {
			value = defaultValue;
			if (typeof window !== 'undefined') {
				localStorage.removeItem(key);
			}
		}
	};
}
