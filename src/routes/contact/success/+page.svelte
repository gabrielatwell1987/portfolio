<script lang="ts">
	import SEO from '$lib/data/SEO.svelte';

	$effect(() => {
		console.log('Success! Your message was sent.');
	});
</script>

<SEO title="Message Sent!" description="Successfully Sent" keywords="success, contact success" />

<article class="success-wrapper">
	<section class="success-content">
		<img src="/logos/success.webp" alt="Atwell" width="500" loading="lazy" />

		<div class="success-results">
			<p class="subheading"><i>Your message has been sent.</i></p>

			<p class="thank-you">Thank you for reaching out!</p>
		</div>
	</section>
</article>

<style>
	@media (width >=18.75rem) {
		:root {
			--100: 100%;
			--5: 5em;
		}

		.success-wrapper {
			min-height: 70vh;
			padding-top: 7em;
			background-color: transparent;

			& .success-content {
				width: var(--100);
				padding: clamp(2rem, 5vw, 5em);
				margin-inline: auto;
				margin-top: var(--5);
				text-align: center;
			}

			& .success-results {
				padding-top: 3em;

				& .thank-you {
					font-size: clamp(var(--sm), 1.5vw, var(--h4));
					font-weight: 500;
					margin: 0.5em 0;
					color: var(--clr-blue);
				}

				& .subheading {
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
		article {
			min-height: 70vh;
		}
	}
</style>
