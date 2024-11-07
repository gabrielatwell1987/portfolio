<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { fade } from 'svelte/transition';
	import SEO from '$lib/data/SEO.svelte';

	$effect(() => {
		console.log('Contact page');
	});
</script>

<SEO
	title="Message me"
	description="Contact Gabriel Atwell"
	keywords="contact gabriel atwell, contact gabe"
/>

<main transition:fade={{ delay: 250, duration: 300 }}>
	<h1 class="legend">Contact</h1>

	<section class="contactForm">
		<ContactForm />
	</section>
</main>

<style>
	.legend {
		margin: 10% 0 2% 0;
		font-family: var(--anta);
		font-size: clamp(2rem, 5vw, 9rem);
		letter-spacing: 15px;
		padding: 0;
		color: var(--purple);
		text-transform: uppercase;
		text-align: center;
	}

	@media screen and (max-width: 500px) {
		.legend {
			letter-spacing: 3px;
			margin: 10% 0 5% 0;
		}
	}
</style>
