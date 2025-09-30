<script>
	import SEO from '$lib/data/SEO.svelte';
	import HireForm from '$lib/components/contact/HireForm.svelte';
	import Title from '$lib/components/layout/Title.svelte';
	import Image from '$lib/components/layout/Image.svelte';
</script>

<SEO
	title="Need a Website Built?"
	description="If you need help with web development or design, please fill out the form."
	keywords="hire gabriel atwell, hire gabe atwell, project questionnaire"
/>

<main>
	<Title title="grow online" />

	<div class="personal-image">
		<Image
			src="/images/hire-gabe.webp"
			alt="Gabriel Atwell"
			style="width: clamp(200px, 30vw, 750px);"
			aspectRatio="1/1"
		/>
	</div>

	<section>
		<HireForm />
	</section>
</main>

<style>
	main {
		background: linear-gradient(
			to bottom,
			var(--clr-light-gray) 0%,
			var(--clr-inverted) 25%,
			var(--clr-inverted) var(--100)
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
