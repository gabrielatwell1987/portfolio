<script>
	import Image from '$lib/components/Image.svelte';

	const section = document.querySelector('section');

	$: console.log(section);
</script>

<svelte:head>
	<title>Success!</title>
	<meta name="description" content="Successfully Sent" />
	<meta name="keywords" content="Success" />
</svelte:head>

<section>
	<Image src="/logos/success.png" alt="Atwell" />

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
			font-size: 1.2rem;
			margin: 0.5em 0;
		}

		p {
			font-size: 0.8rem;
			margin: 0.5em 0;
		}
	}

	@media (min-width: 720px) {
		section {
			padding: 2rem;
			width: 50%;
			margin-bottom: 10%;
		}

		h1 {
			font-size: 2.5rem;
		}

		p {
			font-size: 1.5rem;
		}
	}
</style>
