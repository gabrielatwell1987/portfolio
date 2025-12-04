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

	<div class="center-positioning">
		<Popup title="" text="Please fill out this questionnaire and I'll contact you back 😎" />
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

		& .hire-form-wrapper {
			display: grid;
			place-items: center;
			height: 100vh;
		}

		& .center-positioning {
			margin-inline: auto;
			max-inline-size: fit-content;
		}
	}
</style>
