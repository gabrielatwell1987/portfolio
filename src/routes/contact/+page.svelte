<script>
	import { fade } from 'svelte/transition';
	import { duration, delay } from '$lib/data/timings.svelte.js';
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

<main transition:fade={{ duration: duration, delay: delay }}>
	<Title title="Contact" />

	<ContactForm />
</main>

<style>
	main {
		padding-top: 5%;
	}
</style>
