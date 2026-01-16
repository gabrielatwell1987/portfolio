export const prerender = false;

export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		console.log(form);
	}
};
