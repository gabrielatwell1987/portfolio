import { prerender } from '$app/server';
import { generateFallbackData } from '$lib/components/projects/contributions/githubContributions';

export const getContributions = prerender(async () => {
    try {
        const base = import.meta.env.DEV ? 'http://localhost:5173' : '';
        const response = await fetch(`${base}/api/github-contributions`);
        if (!response.ok) throw new Error(`API error: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching contributions:', error);
        return generateFallbackData();
    }
});
