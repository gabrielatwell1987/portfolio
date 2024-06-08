<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<svelte:head>
	<title>Contact Me</title>
	<meta name="description" content="Contact Gabriel Atwell" />
	<meta name="keywords" content="Contact Me" />
</svelte:head>

<main>
	<section class="contactForm">
		<ContactForm />
	</section>
</main>

<style>
	.contactForm {
		/* margin: 2rem auto; */
		margin-block: 2rem;
		margin-inline: auto;
	}

	/* bigger than mobile */
	@media screen and (min-width: 200px) {
		.contactForm {
			display: block;
			width: 100%;
			margin: 1rem 0 0 -7.3rem;
		}
	}

	/* bigger than tablet */
	@media screen and (min-width: 850px) {
		.contactForm {
			margin: 2rem 0 0 -36rem;
		}
	}

	/* bigger than desktop */
	@media screen and (min-width: 1024px) {
		.contactForm {
			margin: 2rem 0 0 -39rem;
		}
	}
</style>
