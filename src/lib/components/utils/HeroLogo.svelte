<script>
	import Image from '$lib/components/layout/Image.svelte';
</script>

<main>
	<section class="hero-logo">
		<a href="/about/hero">
			<Image
				src="/logos/atwellUI.webp"
				alt="atwell user interface"
				width="800"
				aspectRatio="16/9"
			/>
		</a>
	</section>
</main>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	main {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 30vh;
		margin-top: 5em;
		padding-top: 5%;
		width: fit-content;
		margin-inline: auto;

		.hero-logo {
			width: clamp(99.9%, 25vw, 100%);
			display: flex;
			justify-content: center;

			a {
				text-decoration: none;
				background: transparent;
			}
		}
	}
</style>
