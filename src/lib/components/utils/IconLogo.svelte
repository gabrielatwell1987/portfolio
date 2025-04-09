<script>
	import Image from '$lib/components/layout/Image.svelte';
</script>

<div class="iconLogo">
	<Image src="/logos/shieldy.webp" alt="atwell logo" width="600" class="logo-image" />
</div>

<style>
	:global(.logo-image) {
		width: 100%;
		height: auto;
		max-width: 600px;
	}

	.iconLogo {
		display: flex;
		justify-content: center;
		margin-bottom: 15%;
		width: fit-content;
		margin-inline: auto;
		view-transition-name: icon-logo;

		@media (width <= 768px) {
			margin-bottom: 10%;
			max-width: 80%;
		}

		@media (width <= 480px) {
			margin-bottom: 8%;
			max-width: 90%;
		}
	}

	::view-transition-old(icon-logo),
	::view-transition-new(icon-logo) {
		animation: none;
		mix-blend-mode: normal;
	}

	::view-transition-old(icon-logo) {
		animation: slide-down 1.25s ease-out forwards;
	}

	::view-transition-new(icon-logo) {
		animation: slide-up 1.5s ease-in forwards;
	}

	@keyframes slide-down {
		from {
			opacity: 1;
			transform: translateY(0);
		}
		to {
			opacity: 0;
			transform: translateY(-100px);
		}
	}

	@keyframes slide-up {
		from {
			opacity: 0;
			transform: translateY(100px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
