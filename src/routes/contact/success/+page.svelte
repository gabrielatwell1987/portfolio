<script>
	import Image from '$lib/components/Image.svelte';
	import SEO from '$lib/data/SEO.svelte';

	$: console.log('Success! Your message was sent.');
</script>

<SEO title="Success!" description="Successfully Sent" keywords="success, contact success" />

<main>
	<section>
		<div class="image">
			<Image src="/logos/success.webp" alt="Atwell" />
		</div>

		<h1>Success!</h1>

		<p><i>Your message has been sent.</i></p>
		<p><b>Thank you for reaching out.</b></p>
	</section>
</main>

<style>
	@media (min-width: 300px) {
		:root {
			--100: 100%;
			--5: 5%;
		}

		main {
			min-height: 70vh;
		}

		section {
			width: var(--100);
			border: none;
			padding: 1rem;
			margin: 5% auto;
			text-align: center;
			border: 1px solid var(--white);
			border-radius: 10px;
		}

		h1 {
			font-size: clamp(1.2rem, 2vw, 2.5rem);
			margin: 0.5em 0;
			color: var(--white);
		}

		p {
			font-size: clamp(0.8rem, 1.5vw, 1.5rem);
			margin: 0.5em 0;
			color: var(--white);
		}

		.image {
			width: clamp(50%, 20vw, 75%);
			margin-inline: auto;
		}
	}

	@media (min-width: 720px) {
		section {
			padding: 2rem;
			width: 50%;
			margin-bottom: 10%;
		}
	}

	@media (max-width: 500px) {
		main {
			min-height: 70vh;
		}
	}
</style>
