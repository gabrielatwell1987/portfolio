<script>
	import SEO from '$lib/data/SEO.svelte';
	import HireForm from '$lib/components/contact/HireForm.svelte';
	import Title from '$lib/components/layout/Title.svelte';
	import MotifPhoto from '$lib/components/contact/MotifPhoto.svelte';
</script>

<SEO
	title="Need a Website Built?"
	description="If you need help with web development or design, please fill out the form."
	keywords="hire gabriel atwell, hire gabe atwell, project questionnaire"
/>

<article>
	<Title title="connect" title2="connect" />

	<div class="personal-image">
		<MotifPhoto />
	</div>

	<section>
		<HireForm />
	</section>
</article>

<style>
	article {
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

		& .personal-image {
			margin-bottom: 2.5em;
		}
	}
</style>
