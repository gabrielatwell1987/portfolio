<script>
	export let src1;
	export let src2;

	let duration;
	let videoWidth;
	let videoHeight;
</script>

<div class="video">
	<video bind:duration bind:videoWidth bind:videoHeight autoplay muted playsinline loop>
		<source src={src1} type="video/webm" />
		<source src={src2} type="video/mp4" />

		<track kind="captions" src="/videos/captions.vtt" srclang="en" label="English" />

		Your browser does not support the video tag.
	</video>
</div>

<style>
	video {
		width: 90%;
		max-width: 900px;
		border-radius: 12px;
	}

	.video {
		margin: 0 auto 6% auto;
		display: flex;
		justify-content: center;
	}

	@media (max-width: 700px) {
		video {
			max-width: 85%;
		}

		.video {
			margin: 0 auto 18% auto;
		}
	}
</style>
