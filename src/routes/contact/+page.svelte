<script>
	import SEO from '$lib/data/SEO.svelte';
	import ContactForm from '$lib/components/contact/ContactForm.svelte';
	import Title from '$lib/components/layout/Title.svelte';

	$effect(() => {
		const main = document.querySelector('main');

		console.log(main);
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
