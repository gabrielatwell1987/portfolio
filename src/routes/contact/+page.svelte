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

<div class="career">
	<Image src="/logos/career-death.jpeg" alt="a cartoon about career death" />
</div>

<style>
	.contactForm {
		margin: 2rem auto;
	}

	@media screen and (min-width: 200px) {
		.contactForm {
			display: block;
			width: 100%;
			/* margin: 1rem auto 0 auto; */
			margin: 1rem 0 0 10rem;
		}

		.career {
			width: 90%;
			margin-top: 5%;
			margin-inline: auto;
		}
	}

	@media screen and (min-width: 500px) {
		.contactForm {
			margin: 1rem 0 0 9.8rem;
		}
	}

	@media screen and (min-width: 700px) {
		.contactForm {
			margin: 1rem 0 0 7.5rem;
		}
	}

	@media screen and (min-width: 850px) {
		.contactForm {
			margin: 2rem 0 0 7.5rem;
		}
	}

	@media screen and (min-width: 990px) {
		.contactForm {
			margin: 2rem 0 0 8rem;
		}
	}

	@media screen and (min-width: 1024px) {
		.contactForm {
			margin: 2rem 0 0 8rem;
		}

		.career {
			margin-left: 15.5%;
		}
	}

	@media screen and (min-width: 1400px) {
		.contactForm {
			margin: 2rem 0 0 8.5rem;
		}

		.career {
			margin-left: 25%;
		}
	}
</style>
