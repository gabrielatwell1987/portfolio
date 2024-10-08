<script>
	export let src;
	export let alt;
</script>

<img {src} {alt} loading="lazy" />

<style>
	img {
		max-width: 100%;
		object-fit: cover;
		border-radius: 2.5%;
		z-index: 9;
	}
</style>
