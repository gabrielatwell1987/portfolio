<script>
	import ContactForm from '$lib/ContactForm.svelte';
</script>

<div class="contactForm">
	<ContactForm />
</div>

<style>
	.contactForm {
		margin: 2rem 0 0 0;
	}
	@media screen and (min-width: 200px) {
		.contactForm {
			display: block;
			width: 100%;
			margin: 1rem 0 0 -6.9rem;
			/* margin: 0 auto; */
		}
	}
	@media screen and (min-width: 1024px) {
		.contactForm {
			display: block;
			margin: 2rem 0 0 -24rem;
			width: 100%;
		}
	}
</style>
