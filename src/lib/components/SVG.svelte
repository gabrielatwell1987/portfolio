<script>
	import Image from './Image.svelte';
</script>

<section class="svgs">
	<div class="flex">
		<Image src="/logos/color_palette.svg" alt="" />

		<Image src="/logos/static_website.svg" alt="" />
	</div>
</section>

<style>
	@media (min-width: 300px) {
		.svgs {
			width: 75%;
			display: block;
			padding: 1rem;
			margin-left: 13%;
		}

		.flex {
			display: flex;
			flex-direction: column;
			gap: 2rem;
		}
	}

	@media (min-width: 720px) {
		.svgs {
			width: 50%;
			display: flex;
			justify-content: space-between;
			gap: 5%;
			margin-left: -0.25%;
		}

		.flex {
			display: flex;
			flex-direction: row;
			gap: 10%;
		}
	}

	@media (min-width: 1050px) {
		.svgs {
			gap: 10%;
			margin-left: -1%;
		}
	}

	@media (min-width: 1500px) {
		.svgs {
			gap: 15%;
			margin-left: 12%;
		}
	}
</style>
