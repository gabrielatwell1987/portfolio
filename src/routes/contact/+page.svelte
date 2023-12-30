<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import Lenis from '@studio-freight/lenis';

	// lenis
	const lenis = new Lenis();

	lenis.on('scroll', (e) => {
		console.log(e);
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);
</script>

<main>
	<section class="contactForm">
		<ContactForm />
	</section>
</main>

<style>
	.contactForm {
		margin: 2rem 0 0 0;
	}
	@media screen and (min-width: 200px) {
		.contactForm {
			display: block;
			width: 100%;
			margin: 1rem 0 0 -6.9rem;
		}
	}
	@media screen and (min-width: 850px) {
		.contactForm {
			display: block;
			margin: 2rem 0 0 -24rem;
			width: 100%;
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
