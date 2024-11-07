<script>
	import Image from '$lib/components/Image.svelte';
	import SEO from '$lib/data/SEO.svelte';

	$effect(() => {
		console.log('Success! Your message was sent.');
	});
</script>

<SEO title="Message sent!" description="Successfully Sent" keywords="success, contact success" />

<main>
	<section>
		<div class="image">
			<Image src="/logos/success.webp" alt="Atwell" width="500" />
		</div>

		<h1>Success!</h1>

		<p class="small"><i>Your message has been sent.</i></p>
		<p>Thank you for reaching out.</p>
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
			padding: clamp(2rem, 5vw, 9rem);
			margin: 5% auto;
			text-align: center;
			border: 1px solid var(--white);
			border-radius: 10px;
		}

		h1 {
			font-family: var(--anta);
			font-size: clamp(1.2rem, 4vw, 4rem);
			font-weight: 900;
			letter-spacing: 6px;
			margin: 0.5em 0;
			color: var(--sky);
			margin: 0;
		}

		p {
			font-size: clamp(0.8rem, 1.5vw, 1.5rem);
			font-weight: 200;
			margin: 0.5em 0;
			color: #eee;
		}

		.small {
			font-size: clamp(0.6rem, 1.2vw, 1.2rem);
			font-weight: 200;
			margin: 0.5em 0;
			color: var(--smoke);
		}

		.image {
			width: clamp(50%, 20vw, 75%);
			margin-inline: auto;
		}
	}

	@media (min-width: 720px) {
		section {
			/* padding: 5rem; */
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
