import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// initialize localStorage
const initialTheme = browser ? localStorage.getItem('theme') || 'dark' : 'dark';
export const theme = writable(initialTheme);

// sync to localStorage
theme.subscribe((value) => {
	if (browser) {
		localStorage.setItem('theme', value);
		document.documentElement.setAttribute('data-theme', value);
		document.documentElement.style.colorScheme = value;
	}
});
