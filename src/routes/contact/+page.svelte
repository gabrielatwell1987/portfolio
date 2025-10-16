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

<main>
	<Title title="message" title2="message" />

	<ContactForm />
</main>

<style>
	main {
		/* background: linear-gradient(
			to bottom,
			var(--clr-light-gray) 0%,
			var(--clr-invert) 25%,
			var(--clr-invert) var(--100)
		); */
		display: flex;
		flex-direction: column;
		gap: 2em;
	}
</style>
