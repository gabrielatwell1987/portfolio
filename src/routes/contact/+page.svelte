<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import Image from '$lib/components/Image.svelte';
</script>

<svelte:head>
	<title>Message Me</title>
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
		margin: 2rem auto;
	}

	@media screen and (min-width: 200px) {
		.contactForm {
			display: block;
			/* margin: 1rem auto 0 auto; */
			margin: 1rem 0 0 23rem;
		}
	}

	@media screen and (min-width: 500px) {
		.contactForm {
			margin: 1rem 0 0 28rem;
		}
	}

	@media screen and (min-width: 700px) {
		.contactForm {
			margin: 1rem 0 0 40%;
		}
	}

	@media screen and (min-width: 850px) {
		.contactForm {
			margin: 1rem 0 0 35%;
		}
	}

	@media screen and (min-width: 990px) {
		.contactForm {
			margin: 1rem 0 0 30%;
		}
	}

	@media screen and (min-width: 1024px) {
		.contactForm {
			margin: 1rem 0 0 25%;
		}
	}

	@media screen and (min-width: 1400px) {
		.contactForm {
			/* margin: 2rem 0 0 14.5rem; */
			margin: 1rem 0 0 10%;
			scale: 0.8;
		}
	}
</style>
