export async function load() {
	try {
		const { default: svelteKitDetails } = await import(
			'$lib/components/learn/sveltekit-details.json'
		);
		return {
			svelteKitDetails
		};
	} catch (error) {
		return {
			svelteKitDetails: []
		};
	}
}
