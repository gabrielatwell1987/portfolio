<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<main>
	<section class="contactForm">
		<ContactForm />
	</section>
</main>

<style>
	.contactForm {
		margin: 2rem auto;
	}

	/* bigger than mobile */
	@media screen and (min-width: 200px) {
		.contactForm {
			display: block;
			width: 100%;
			margin: 1rem 0 0 -6.9rem;
		}
	}

	/* bigger than tablet */
	@media screen and (min-width: 850px) {
		.contactForm {
			display: block;
			margin: 2rem 0 0 -24rem;
			width: 100%;
		}
	}

	/* bigger than desktop */
	@media screen and (min-width: 1024px) {
		.contactForm {
			display: block;
			margin: 2rem 0 0 -24rem;
			width: 100%;
		}
	}
</style>
