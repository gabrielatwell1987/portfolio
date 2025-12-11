<script>
	import HireForm from '$lib/components/contact/HireForm.svelte';
	import Popover from '$lib/components/layout/Popover.svelte';
	import Title from '$lib/components/layout/Title.svelte';
	import SEO from '$lib/data/SEO.svelte';
</script>

<SEO
	title="Need a Website Built?"
	description="If you need help with web development or design, please fill out the form."
	keywords="hire gabriel atwell, hire gabe atwell, project questionnaire"
/>

<div class="hire-form">
	<div class="header-icons">
		<Title title="connect" title2="connect" />

		<div class="center-positioning">
			<Popover title="" text="Please fill out this questionnaire and I'll contact you back 😎" />
		</div>
	</div>

	<section class="hire-form-wrapper">
		<HireForm />
	</section>
</div>

<style>
	.hire-form {
		background: linear-gradient(
			to bottom,
			var(--clr-light-gray) 0%,
			var(--clr-invert) 30%,
			var(--clr-invert) var(--100)
		);

		& .header-icons {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			gap: 1em;

			@media (width <= 768px) {
				flex-direction: column;
				gap: 2px;
			}

			& .center-positioning {
				margin-inline: auto;
				max-inline-size: fit-content;
				display: inline-flex;
				justify-content: center;
				align-items: center;
				margin-top: 5em;

				@media (width <= 768px) {
					margin-top: 0;
				}
			}
		}

		& .hire-form-wrapper {
			display: grid;
			place-items: center;
			height: 100vh;
		}
	}
</style>
