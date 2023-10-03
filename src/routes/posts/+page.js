/* eslint-disable no-unused-vars */
import { error } from '@sveltejs/kit';
import { posts } from '$lib/data/posts';

export function load({ params }) {
	return { posts };
}
