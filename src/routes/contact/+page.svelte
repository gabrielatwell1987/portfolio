<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import SEO from '$lib/data/SEO.svelte';
</script>

<SEO title="Message Me" description="Contact Gabriel Atwell" keywords="contact me, contact gabe" />

<main in:blur={{ delay: 350, duration: 1500, easing: quintOut, amount: '1rem' }}>
	<h2 class="legend">Message Me</h2>

	<section class="contactForm">
		<ContactForm />
	</section>
</main>

<style>
	@media screen and (min-width: 300px) {
		.legend {
			margin: 10% 0 5% 0;
			/* font-family: var(--anta); */
			font-size: clamp(2rem, 4vw, 5rem);
			/* font-weight: 700; */
			letter-spacing: 3%;
			padding: 0;
			color: var(--purple);
		}
	}
</style>
