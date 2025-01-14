<script>
	import { fade } from 'svelte/transition';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import SEO from '$lib/data/SEO.svelte';
	import Title from '$lib/components/Title.svelte';

	let duration = $state(300);
	let delay = $state(100);

	$effect(() => {
		console.log(ContactForm);
	});
</script>

<SEO
	title="Contact Gabriel Atwell"
	description="Contact Gabriel Atwell"
	keywords="contact gabriel atwell, contact gabe, message me"
/>

<main transition:fade={{ delay: delay, duration: duration }}>
	<h1><Title title="Contact" /></h1>

	<ContactForm />
</main>

<style>
	main {
		padding-top: 5%;
	}
</style>
