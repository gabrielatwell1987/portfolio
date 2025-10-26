export async function load() {
	try {
		const { default: greensockDetails } = await import(
			'$lib/components/learn/greensock-details.json'
		);
		return {
			greensockDetails
		};
	} catch (error) {
		return {
			greensockDetails: []
		};
	}
}
