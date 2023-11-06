<script>
	import ContactForm from '$lib/ContactForm.svelte';
</script>

<img src="a-flower.png" alt="atwell logo" class="atwell" />

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
		.atwell {
			display: none;
		}
	}
	@media screen and (min-width: 850px) {
		.contactForm {
			display: block;
			margin: 2rem 0 0 -24rem;
			width: 100%;
		}
		.atwell {
			display: block;
			margin: 0 0 0 20%;
			border-radius: 10%;
		}
	}
	@media screen and (min-width: 1024px) {
		.contactForm {
			display: block;
			margin: 2rem 0 0 -24rem;
			width: 100%;
		}
		.atwell {
			margin: 0 0 0 34%;
			border-radius: 10%;
		}
	}
</style>
