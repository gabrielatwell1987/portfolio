<script>
	/** @type {{src: any}} */
	let { src } = $props();

	let duration = $state();
	let videoWidth = $state();
	let videoHeight = $state();
</script>

<div class="video">
	<video bind:duration bind:videoWidth bind:videoHeight autoplay muted playsinline loop>
		<source {src} type="video/mp4" />

		<source src={src.replace('.mp4', '.webm')} type="video/webm" />

		<p>Your browser does not support this video..</p>
	</video>
</div>

<style>
	.video {
		margin-inline: auto;
		margin-block: 3rem;
		display: flex;
		justify-content: center;

		video {
			width: 90%;
			min-width: 320px;
			max-width: 1200px;
			border-radius: 12px;
			mask-image: linear-gradient(transparent, black 20%),
				linear-gradient(to top, transparent, black 20%),
				linear-gradient(to right, transparent, black 20%),
				linear-gradient(to left, transparent, black 20%);
			mask-composite: intersect;
		}
	}

	@media (max-width: 700px) {
		.video {
			margin: 0 auto 18% auto;

			video {
				max-width: 85%;
			}
		}
	}
</style>
