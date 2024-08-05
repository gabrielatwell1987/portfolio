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
		/* margin: 2rem auto; */
		margin: 0 auto;
	}

	@media screen and (min-width: 200px) {
		.contactForm {
			display: block;
			margin: 1rem 0 0 55%;
		}
	}

	@media screen and (min-width: 500px) {
		.contactForm {
			margin: 1rem 0 0 39%;
			/* margin-inline: auto; */
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
			margin: 1rem 0 0 33%;
		}
	}

	@media screen and (min-width: 1024px) {
		.contactForm {
			margin: 1rem 0 0 32%;
		}
	}

	@media screen and (min-width: 1400px) {
		.contactForm {
			margin: 1rem 0 0 20%;
			scale: 0.8;
		}
	}

	@media screen and (min-width: 1600px) {
		.contactForm {
			margin: 1rem 0 0 14%;
		}
	}
</style>
