<script>
	/** @type {{src: any, src2: any}} */
	let { src, src2 } = $props();

	let duration = $state();
	let videoWidth = $state();
	let videoHeight = $state();
</script>

<div class="video">
	<video bind:duration bind:videoWidth bind:videoHeight autoplay muted playsinline loop>
		<source {src} type="video/webm" />

		<source {src2} type="video/mp4" />

		<!-- <source src={src.replace('.webm', '.mp4')} type="video/webm" /> -->

		<p>The video has failed to load..</p>
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
