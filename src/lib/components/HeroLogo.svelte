<script>
	import Image from '$lib/components/Image.svelte';
</script>

<main>
	<section class="hero-logo">
		<a href="/about/hero">
			<Image src="/logos/atwellUI.webp" alt="atwell ui" width="1200" />
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
		margin-top: 2.5%;
		user-select: none;
	}

	.hero-logo {
		width: clamp(99.9%, 25vw, 100%);
		display: flex;
		justify-content: center;
	}

	a {
		text-decoration: none;
		cursor: pointer;
		background: transparent;
	}
</style>
