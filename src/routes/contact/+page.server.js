export const actions = {
	send: async ({ request }) => {
		const form = await request.formData();
		console.log(form);
	}
};
