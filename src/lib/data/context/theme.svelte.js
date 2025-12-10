import { getContext, setContext } from 'svelte';
import { browser } from '$app/environment';

const THEME_KEY = Symbol('theme');

export function createThemeContext() {
	const initialTheme = browser ? localStorage.getItem('theme') || 'dark' : 'dark';
	let theme = $state(initialTheme);

	if (browser) {
		document.documentElement.setAttribute('data-theme', theme);
		document.documentElement.style.colorScheme = theme;
	}

	const context = {
		get current() {
			return theme;
		},
		get isDark() {
			return theme === 'dark';
		},
		get isLight() {
			return theme === 'light';
		},
		toggle() {
			theme = theme === 'dark' ? 'light' : 'dark';
			if (browser) {
				localStorage.setItem('theme', theme);
				document.documentElement.setAttribute('data-theme', theme);
				document.documentElement.style.colorScheme = theme;
			}
			return theme;
		},
		set(value) {
			theme = value;
			if (browser) {
				localStorage.setItem('theme', theme);
				document.documentElement.setAttribute('data-theme', theme);
				document.documentElement.style.colorScheme = theme;
			}
		}
	};

	setContext(THEME_KEY, context);
	return context;
}

export function useTheme() {
	const ctx = getContext(THEME_KEY);
	if (!ctx) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return ctx;
}
