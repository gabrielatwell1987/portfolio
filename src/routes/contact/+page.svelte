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
	<h2 class="legend">Message Me</h2>

	<section class="contactForm">
		<ContactForm />
	</section>
</main>

<style>
	.contactForm {
		margin: 0 auto;
	}

	@media screen and (min-width: 200px) {
		.contactForm {
			display: block;
			margin: 1rem 0 0 55%;
		}

		.legend {
			margin: 10% 0 0 0;
			font-family: var(--anta);
			font-size: clamp(1.75rem, 4vw, 5rem);
			letter-spacing: 3%;
			padding: 0;
			color: var(--purple);
		}
	}

	@media screen and (min-width: 500px) {
		.contactForm {
			margin: 1rem 0 0 39%;
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
