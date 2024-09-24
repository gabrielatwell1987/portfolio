<script>
	export let src;
</script>

<video controls autoplay muted playsinline loop>
	<source {src} type="video/mp4" />

	<track kind="captions" src="videos/captions.vtt" srclang="en" label="English" default />

	Your browser does not support the video tag.
</video>

<style>
	video {
		width: 100%;
		max-width: 800px;
		height: auto;
		border-radius: 20px;
		opacity: 0.75;
		margin-bottom: 5%;
	}

	@media (max-width: 768px) {
		video {
			margin-bottom: 20%;
			width: 90%;
		}
	}
</style>
