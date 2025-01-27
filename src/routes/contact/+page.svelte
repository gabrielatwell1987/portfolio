<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import SEO from '$lib/data/SEO.svelte';
	import Title from '$lib/components/Title.svelte';

	$effect(() => {
		console.log(ContactForm);
	});
</script>

<SEO
	title="Contact Gabriel Atwell"
	description="Contact Gabriel Atwell"
	keywords="contact gabriel atwell, contact gabe, message me"
/>

<main>
	<Title title="reach me" />

	<ContactForm />
</main>

<style>
	main {
		padding-top: 5%;
	}
</style>
