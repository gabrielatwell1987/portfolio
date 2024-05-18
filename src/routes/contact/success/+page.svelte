<script>
	import Image from '$lib/components/Image.svelte';
</script>

<section>
	<Image src="/logos/success.png" alt="Atwell" />

	<h1>Success!</h1>

	<p><i>Your message has been sent.</i></p>
	<p><b>Thank you for reaching out.</b></p>
</section>

<style>
	section {
		text-align: center;
		border: 1px solid var(--white);
		border-radius: 10px;
		padding: 2rem;
		margin-top: 5%;
		width: 50%;
		margin-inline: auto;
	}

	h1 {
		font-size: 2.5rem;
		margin: 0.5em 0;
	}

	p {
		font-size: 1.5rem;
		margin: 0.5em 0;
	}
</style>
