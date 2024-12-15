<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import SEO from '$lib/data/SEO.svelte';
	import Title from '$lib/components/Title.svelte';

	$effect(() => {
		console.log(ContactForm);
	});
</script>

<SEO
	title="Message me"
	description="Contact Gabriel Atwell"
	keywords="contact gabriel atwell, contact gabe"
/>

<main>
	<Title title="Contact" />

	<ContactForm />
</main>
