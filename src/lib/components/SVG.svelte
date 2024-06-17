<script>
	import Image from './Image.svelte';
</script>

<div class="svgs">
	<Image src="/logos/color_palette.svg" alt="" />
	<Image src="/logos/static_website.svg" alt="" />
</div>

<style>
	@media (min-width: 300px) {
		.svgs {
			width: 75%;
			display: block;
			padding: 1rem;
			margin-left: 13%;
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
