// debounce with reactive state
export function createDebouncer(delay = 300) {
	let timeoutId = null;
	let isPending = $state(false);

	return {
		get isPending() {
			return isPending;
		},

		debouncer(fn) {
			isPending = true;
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				fn();
				isPending = false;
			}, delay);
		},

		cancel() {
			clearTimeout(timeoutId);
			isPending = false;
		}
	};
}

// color utilities
export function createColorManager() {
	let currentTheme = $state('light');
	let customColors = $state({});

	const themes = {
		light: {
			primary: '#007bff',
			secondary: '#6c757d',
			background: '#f8f9fa',
			text: '#212529'
		},
		dark: {
			primary: '#0d6efd',
			secondary: '#6c757d',
			background: '#212529',
			text: '#f8f9fa'
		}
	};

	return {
		get theme() {
			return currentTheme;
		},
		set theme(value) {
			currentTheme = value;
		},
		get colors() {
			return { ...themes[currentTheme], ...customColors };
		},

		setCustomColor(key, value) {
			customColors[key] = value;
		},

		hexToRgb(hex) {
			const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
			return result
				? {
						r: parseInt(result[1], 16),
						g: parseInt(result[2], 16),
						b: parseInt(result[3], 16)
					}
				: null;
		},

		rgbToHex(r, g, b) {
			return (
				'#' +
				[r, g, b]
					.map((x) => {
						const hex = x.toString(16);
						return hex.length === 1 ? '0' + hex : hex;
					})
					.join('')
			);
		}
	};
}
