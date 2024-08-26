<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

<svelte:head>
	<title>Message Me</title>
	<meta name="description" content="Contact Gabriel Atwell" />
	<meta name="keywords" content="Contact Me" />
</svelte:head>

<main in:blur={{ delay: 350, duration: 1500, easing: quintOut, amount: '1rem' }}>
	<h2 class="legend">Message Me</h2>

	<section class="contactForm">
		<ContactForm />
	</section>
</main>

<style>
	@media screen and (min-width: 200px) {
		.legend {
			margin: 10% 0 5% 0;
			font-family: var(--anta);
			font-size: clamp(1.75rem, 4vw, 5rem);
			letter-spacing: 3%;
			padding: 0;
			color: var(--purple);
		}
	}
</style>
