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
		<img src="/logos/success.webp" alt="Atwell" width="500" />

		<div class="text-content">
			<p class="small"><i>Your message has been sent.</i></p>

			<p>Thank you for reaching out!</p>
		</div>
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
			padding-top: 7em;

			& section {
				width: var(--100);
				padding: clamp(2rem, 5vw, 5em);
				margin-inline: auto;
				margin-top: var(--5);
				text-align: center;
			}

			& .text-content {
				padding-top: 3em;

				& p {
					font-size: clamp(var(--sm), 1.5vw, var(--h4));
					font-weight: 500;
					margin: 0.5em 0;
					color: var(--clr-blue);
				}

				& .small {
					font-size: clamp(var(--xs), 1.2vw, var(--h6));
					font-weight: 200;
					margin: 0.5em 0 -0.5rem 0;
					color: var(--clr-gray);
				}
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
