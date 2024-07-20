<script>
	// import Social from '$lib/components/SocialLinks.svelte';
	import Marquee from '$lib/components/Marquee.svelte';
</script>

<footer>
	<!-- <Social /> -->
	<Marquee />
</footer>

<style>
	footer {
		margin-top: -10%;
	}

	@media (min-width: 200px) {
		footer {
			margin-top: -10%;
			margin-bottom: 5%;
		}
	}

	@media (min-width: 500px) {
		footer {
			margin-top: -5%;
		}
	}

	@media (min-width: 720px) {
		footer {
			margin-top: -5%;
		}
	}

	@media (min-width: 990px) {
		footer {
			margin-top: -5%;
		}
	}

	@media (min-width: 1200px) {
		footer {
			margin-top: -5%;
		}
	}
</style>
