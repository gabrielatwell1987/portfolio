export async function load() {
	try {
		const { default: greensockDetails } = await import(
			'$lib/components/learn/greensock-details.json'
		);
		console.log('Loaded greensock details:', greensockDetails); // Debug log
		return {
			greensockDetails
		};
	} catch (error) {
		console.error('Error loading greensock data:', error);
		return {
			greensockDetails: []
		};
	}
}
