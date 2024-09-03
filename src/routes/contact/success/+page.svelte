<script>
	import Image from '$lib/components/Image.svelte';
	import SEO from '$lib/data/SEO.svelte';
</script>

<SEO title="Success!" description="Successfully Sent" keywords="success, contact success" />

<section>
	<div class="image">
		<Image src="/logos/success.png" alt="Atwell" />
	</div>

	<h1>Success!</h1>

	<p><i>Your message has been sent.</i></p>
	<p><b>Thank you for reaching out.</b></p>
</section>

<style>
	@media (min-width: 200px) {
		section {
			width: 100%;
			border: none;
			padding: 1rem;
			margin-top: 5%;
			margin-bottom: 5%;
			margin-inline: auto;
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
</style>
