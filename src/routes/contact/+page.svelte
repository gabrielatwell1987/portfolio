<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { fade } from 'svelte/transition';
	import SEO from '$lib/data/SEO.svelte';
	import Title from '$lib/components/Title.svelte';

	$effect(() => {
		console.log('Contact page');
	});
</script>

<SEO
	title="Message me"
	description="Contact Gabriel Atwell"
	keywords="contact gabriel atwell, contact gabe"
/>

<main>
	<Title title="Contact" />

	<section class="contactForm">
		<ContactForm />
	</section>
</main>
