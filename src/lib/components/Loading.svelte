<script>
	import Spinner from '$lib/components/Spinner.svelte';
</script>

<!-- loading dots -->
<!-- <main class="container">
	<section class="loading">
		<div />
		<div />
		<div />
	</section>
</main>

<style>
	.container {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.loading {
		display: -webkit-box;
		display: flex;
		-webkit-box-pack: center;
		justify-content: center;
	}

	.loading div {
		width: 3.5rem;
		height: 3.5rem;
		margin: 2rem 0.5rem;
		background: var(--purple);
		border-radius: 50%;
		-webkit-animation: 0.9s bounce infinite alternate;
		animation: 0.9s bounce infinite alternate;
	}

	.loading div:nth-child(2) {
		-webkit-animation-delay: 0.3s;
		animation-delay: 0.3s;
	}

	.loading div:nth-child(3) {
		-webkit-animation-delay: 0.6s;
		animation-delay: 0.6s;
	}

	@-webkit-keyframes bounce {
		to {
			opacity: 0.3;
			-webkit-transform: translate3d(0, -1rem, 0);
			transform: translate3d(0, -1rem, 0);
		}
	}

	@keyframes bounce {
		to {
			opacity: 0.3;
			-webkit-transform: translate3d(0, -1rem, 0);
			transform: translate3d(0, -1rem, 0);
		}
	}

	@media screen and (max-width: 500px) {
		.loading div {
			width: 2rem;
			height: 2rem;
		}
	}
</style> -->

<main class="container">
	<Spinner />
</main>

<style>
	.container {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
