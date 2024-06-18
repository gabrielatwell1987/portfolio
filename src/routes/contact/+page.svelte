<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import Figure from '$lib/components/Figure.svelte';
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
		margin-block: 2rem;
		margin-inline: auto;
	}

	@media screen and (min-width: 200px) {
		.contactForm {
			display: block;
			width: 100%;
			margin: 1rem 0 0 -6.9rem;
		}
	}

	@media screen and (min-width: 500px) {
		.contactForm {
			margin: 1rem 0 0 -9.8rem;
		}
	}

	@media screen and (min-width: 850px) {
		.contactForm {
			margin: 2rem 0 0 -36rem;
		}
	}

	@media screen and (min-width: 990px) {
		.contactForm {
			margin: 2rem 0 0 -44.25rem;
		}
	}

	@media screen and (min-width: 1024px) {
		.contactForm {
			margin: 2rem 0 0 -40rem;
		}
	}
</style>
