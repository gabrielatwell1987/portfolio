<script>
	import SEO from '$lib/data/SEO.svelte';
	import Image from '$lib/components/layout/Image.svelte';

	$effect(() => {
		console.log('Success! Your message was sent.');
	});
</script>

<SEO title="Message Sent!" description="Successfully Sent" keywords="success, contact success" />

<main>
	<section>
		<div class="image">
			<Image src="/logos/success.webp" alt="Atwell" width="500" aspectRatio="16/9" />
		</div>

		<p class="small"><i>Your message has been sent.</i></p>

		<p>Thank you for reaching out!</p>
	</section>
</main>

<style>
	@media (width >=18.75rem) {
		:root {
			--100: 100%;
			--5: 5em;
		}

		main {
			min-height: 70vh;

			& section {
				width: var(--100);
				padding: clamp(2rem, 5vw, 9rem);
				margin-inline: auto;
				margin-top: var(--5);
				text-align: center;
			}

			& p {
				font-size: clamp(var(--sm), 1.5vw, var(--h4));
				font-weight: 500;
				margin: 0.5em 0;
				color: var(--clr-blue);
			}

			& .small {
				font-size: clamp(var(--xs), 1.2vw, var(--h6));
				font-weight: 200;
				margin: 2em 0 -0.5rem 0;
				color: var(--clr-gray);
			}

			& .image {
				width: clamp(13em, 70vw, 15in);
				margin-inline: auto;
				margin-bottom: clamp(2.5rem, 3vw, 5rem);
			}
		}
	}

	@media (width >= 720px) {
		section {
			width: 50%;
			margin-bottom: 10%;
		}
	}

	@media (width <= 500px) {
		main {
			min-height: 70vh;
		}
	}
</style>
