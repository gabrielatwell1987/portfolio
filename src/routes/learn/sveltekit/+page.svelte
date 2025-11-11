<script>
	import SEO from '$lib/data/SEO.svelte';
	import Button from '$lib/components/layout/Button.svelte';
	import Iframe from '$lib/components/learn/Iframe.svelte';
	import Learn from '$lib/components/learn/Learn.svelte';
	import Title from '$lib/components/layout/Title.svelte';
	import Details from '$lib/components/learn/Details.svelte';

	let { data } = $props();
	let detailsVisible = $state(false);

	// animations
	$effect(() => {
		setTimeout(() => {
			detailsVisible = true;
		}, 100);
	});
</script>

<SEO
	title="Sveltekit Framework"
	description="Build rich user interfaces with Svelte"
	keywords="svelte, sveltekit, svelte how to, sveltekit how to"
/>

<section class="main">
	<div class="separate">
		<div class="title-spacing">
			<Title img="/skills/Svelte-Dark.svg" width="40vw" />
		</div>

		<main>
			<div class="centerDetail">
				<Details items={data.svelteKitDetails} />
			</div>

			<Iframe
				src="https://www.youtube.com/embed/B2MhkPtBWs4?si=uEF2BUAyyQwuC-Uz"
				title="YouTube video player"
			/>

			<Learn href="https://svelte.dev" title="svelte" />

			<div class="back">
				<Button href="/learn" title="Back" />
			</div>
		</main>
	</div>
</section>

<style>
	:root {
		--100: 100%;
		interpolate-size: allow-keywords;
	}

	section {
		& .title-spacing {
			margin-top: 3em;
			margin-bottom: 6em;

			@media (width <= 768px) {
				margin-bottom: 5em;
			}
		}

		& main {
			& .centerDetail {
				max-inline-size: 90vw;
				margin-inline: auto;

				:global(details) {
					position: relative;
					border: none;
					outline: none;
					-webkit-appearance: none;
					appearance: none;
					overflow: hidden;
					padding: 1rem;
					inline-size: 100ch;

					&::details-content {
						opacity: 0;
						block-size: 0;
						overflow-y: clip;
						transition:
							content-visibility 1s allow-discrete,
							opacity 1s,
							block-size 1s;
					}

					&[open]::details-content {
						opacity: 1;
						block-size: auto;
					}
				}

				:global(summary) {
					color: var(--clr-blue);
					border-color: var(--clr-gray);

					@media (width <= 768px) {
						color: var(--clr-blue);
						border-color: var(--clr-gray);
					}
				}

				:global(.text) {
					color: var(--clr-main);

					:global(a) {
						color: var(--clr-link);
					}
				}

				:global(.structure) {
					margin: 1rem 0;
				}

				:global(.image-container img) {
					border-radius: 0.5rem;
					box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
					width: 100%;
					height: auto;
					max-inline-size: 55%;
					display: block;
					margin-inline: auto;
				}

				:global(.image-container) {
					margin: 1rem 0;
					text-align: center;
				}
			}

			& .back {
				text-align: center;
			}
		}
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(100px);
			visibility: hidden;
		}
		to {
			opacity: 1;
			transform: translateY(0);
			visibility: visible;
		}
	}
</style>
