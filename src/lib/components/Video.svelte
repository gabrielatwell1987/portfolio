<script>
	/** @type {{src1: any, src2: any}} */
	let { src1, src2 } = $props();

	let duration = $state();
	let videoWidth = $state();
	let videoHeight = $state();
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
		max-width: 1200px;
		border-radius: 12px;

		mask-image: linear-gradient(transparent, black 20%),
			linear-gradient(to top, transparent, black 20%),
			linear-gradient(to right, transparent, black 20%),
			linear-gradient(to left, transparent, black 20%);
		mask-composite: intersect;
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
