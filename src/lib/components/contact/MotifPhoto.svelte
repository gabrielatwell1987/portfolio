<script>
	import Image from '$lib/components/layout/Image.svelte';
</script>

<div class="bg"></div>
<!-- <div class="img"></div> -->
<Image
	src="/images/hire-gabe.webp"
	alt="Gabriel Atwell"
	style="width: clamp(200px, 30vw, 750px);"
	aspectRatio="1/1"
/>

<style>
	.bg {
		background-color: var(--clr-pale);
		padding: 1rem;
		border-radius: calc(var(--radius) * 3);
		box-shadow: 0 0 1px var(--clr-invert);
		width: 25vw;
		height: 25vw;
		rotate: 45deg;
		margin-inline: auto;
		opacity: 0.25;
		overflow: visible;
		position: relative;
		top: 400px;
		/* margin-top: -20em; */

		/* & .img {
			opacity: 1;
			position: absolute;
			top: -30px;
			width: 100%;
		} */
	}
</style>
