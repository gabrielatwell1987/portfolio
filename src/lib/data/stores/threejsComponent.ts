import { writable } from 'svelte/store';

export const selectedThreeComponent = writable<string | null>(null);
