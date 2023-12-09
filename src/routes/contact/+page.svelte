<script>
	import ContactForm from '$lib/ContactForm.svelte';
	import { gsap } from 'gsap';
	import { Draggable } from 'gsap/dist/Draggable';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(Draggable);
	});
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
