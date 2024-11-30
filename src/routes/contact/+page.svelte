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

<main>
	<h1 class="legend" transition:fade={{ duration: 500 }}>Contact</h1>

	<section class="contactForm">
		<ContactForm />
	</section>
</main>

<style>
	.legend {
		margin: 10% 0 4% 0;
		font-family: var(--orbitron);
		font-size: clamp(2rem, 8vw, 10rem);
		font-weight: 900;
		letter-spacing: 20px;
		padding: 0;
		color: var(--purple);
		text-transform: uppercase;
		text-align: center;
	}

	@media screen and (max-width: 500px) {
		.legend {
			letter-spacing: 5px;
			margin: 10% 0 5% 0;
		}
	}
</style>
