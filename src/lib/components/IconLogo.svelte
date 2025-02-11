<script>
	import Image from '$lib/components/Image.svelte';
</script>

<div class="iconLogo">
	<Image src="/logos/blueTriangle.webp" alt="atwell logo" />
</div>

<style>
	.iconLogo {
		display: flex;
		justify-content: center;
		margin-bottom: 15%;
		width: fit-content;
		margin-inline: auto;
		view-transition-name: icon-logo;
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
