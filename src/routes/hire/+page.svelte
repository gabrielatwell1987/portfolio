<script>
	import SEO from '$lib/data/SEO.svelte';
	import HireForm from '$lib/components/contact/HireForm.svelte';
	import Title from '$lib/components/layout/Title.svelte';
</script>

<SEO
	title="Need a Website Built?"
	description="If you need help with web development or design, please fill out the form."
	keywords="hire gabriel atwell, hire gabe atwell, project questionnaire"
/>

<Title img="/logos/for_hire.svg" width="clamp(300px, 50vw, 600px)" />

<section>
	<HireForm />
</section>

<style>
	section {
		display: grid;
		place-items: center;
		height: 100vh;
	}
</style>
