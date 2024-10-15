<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import SEO from '$lib/data/SEO.svelte';

	$: console.log('Contact page');
</script>

<SEO title="Message Me" description="Contact Gabriel Atwell" keywords="contact me, contact gabe" />

<main in:blur={{ delay: 350, duration: 1500, easing: quintOut, amount: '1rem' }}>
	<h1 class="legend">Message Me</h1>

	<section class="contactForm">
		<ContactForm />
	</section>
</main>

<style>
	@media screen and (min-width: 300px) {
		.legend {
			margin: 10% 0 5% 0;
			font-family: var(--anta);
			font-size: clamp(2rem, 5vw, 9rem);
			letter-spacing: 3%;
			padding: 0;
			color: var(--purple);
		}
	}
</style>
