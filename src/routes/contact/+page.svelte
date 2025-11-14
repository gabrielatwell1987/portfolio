<script>
	import SEO from '$lib/data/SEO.svelte';
	import ContactForm from '$lib/components/contact/ContactForm.svelte';
	import Title from '$lib/components/layout/Title.svelte';
	import SkullBg from '$lib/components/utils/SkullBg.svelte';
</script>

<SEO
	title="Contact Me"
	description="Contact Gabe"
	keywords="contact gabe atwell, contact gabriel atwell, contact gabe, message me"
/>

<SkullBg />

<div>
	<Title title="message" title2="message" />

	<ContactForm />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 2em;
	}
</style>
