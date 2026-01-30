<script lang="ts">
	import HireForm from '$lib/components/contact/HireForm.svelte';
	import SEO from '$lib/data/SEO.svelte';
	import Heading from '$lib/components/layout/Heading.svelte';
</script>

<SEO
	title="Need a Website Built?"
	description="If you need help with web development or design, please fill out the form."
	keywords="hire gabriel atwell, hire gabe atwell, project questionnaire"
/>

<div class="hire-form">
	<Heading
		title="connect"
		title2="connect"
		viewTransitionName="connect-heading"
		popoverText="Please fill out this questionnaire and I'll contact you back 😎"
	/>

	<section class="hire-form-wrapper">
		<HireForm />
	</section>
</div>

<style>
	.hire-form {
		background: linear-gradient(
			to bottom,
			var(--clr-gray) 0%,
			var(--clr-invert) 30%,
			var(--clr-invert) var(--100)
		);

		& .hire-form-wrapper {
			display: grid;
			place-items: center;
			height: 100vh;
		}
	}
</style>
