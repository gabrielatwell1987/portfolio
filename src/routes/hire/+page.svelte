<script>
	import SEO from '$lib/data/SEO.svelte';
	import HireForm from '$lib/components/contact/HireForm.svelte';
	import Title from '$lib/components/layout/Title.svelte';
	import Popup from '$lib/components/layout/Popup.svelte';
</script>

<SEO
	title="Need a Website Built?"
	description="If you need help with web development or design, please fill out the form."
	keywords="hire gabriel atwell, hire gabe atwell, project questionnaire"
/>

<div class="hire-form">
	<Title title="connect" title2="connect" />

	<div class="margin-inline">
		<Popup title="" text="Please fill out this questionnaire and I'll contact you back 😎" />
	</div>

	<section>
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

		& section {
			display: grid;
			place-items: center;
			height: 100vh;
		}

		& .margin-inline {
			margin-inline: auto;
			max-inline-size: fit-content;
			/* padding: 0 1rem; */
		}
	}
</style>
