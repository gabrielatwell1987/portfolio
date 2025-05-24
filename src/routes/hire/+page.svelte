<script>
	import SEO from '$lib/data/SEO.svelte';
	import HireForm from '$lib/components/hire/HireForm.svelte';
	import Title from '$lib/components/layout/Title.svelte';
</script>

<SEO
	title="Hire Gabriel Atwell"
	description="If you need help with web development or design, please fill out the form."
	keywords="hire gabriel atwell, project questionnaire"
/>

<Title title="need help?" />

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
