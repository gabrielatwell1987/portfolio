<script>
	let { src, captions } = $props();
	let video;
	let duration = $state(0);
	let currentTime = $state(0);

	function playVid() {
		video?.play();
	}
	function pauseVid() {
		video?.pause();
	}
	function stopVid() {
		if (!video) return;
		video.pause();
		video.currentTime = 0;
		currentTime = 0;
	}
	function changeVol() {
		if (!video) return;
		video.volume = Number(event.target.value);
	}
	function togglePlay() {
		if (!video) return;
		if (video.paused) {
			video.play();
		} else {
			video.pause();
		}
	}
	function handleKeydown(event) {
		if (event.code === 'Space' || event.key === ' ') {
			event.preventDefault();
			togglePlay();
		}
	}
	function handleLoadedMetadata() {
		if (!video) return;
		duration = video.duration || 0;
	}

	function handleTimeUpdate() {
		if (!video) return;
		currentTime = video.currentTime;
	}

	function handleSeek(event) {
		if (!video) return;
		const value = Number(event.target.value);
		video.currentTime = value;
		currentTime = value;
	}
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div
	class="video-wrapper"
	tabindex="0"
	onkeydown={handleKeydown}
	aria-label="Press space to play or pause."
	role="application"
>
	<div class="video-frame">
		<!-- svelte-ignore a11y_media_has_caption -->
		<video
			bind:this={video}
			class="video-element"
			onloadedmetadata={handleLoadedMetadata}
			ontimeupdate={handleTimeUpdate}
		>
			<source {src} type="video/mp4" />

			{#if captions}
				<track kind="captions" src={captions} default />
			{/if}
		</video>

		<!-- seek bar -->
		{#if duration > 0}
			<div class="seek-bar">
				<input
					type="range"
					min="0"
					max={duration}
					step="0.1"
					value={currentTime}
					oninput={handleSeek}
					aria-label="Seek video"
				/>
			</div>
		{/if}

		<div class="controls">
			<button type="button" class="control-btn" aria-label="Play" onclick={playVid}>
				<img src="/video/play.webp" alt="" />
			</button>
			<button type="button" class="control-btn" aria-label="Pause" onclick={pauseVid}>
				<img src="/video/pause.webp" alt="" />
			</button>
			<button type="button" class="control-btn" aria-label="Stop" onclick={stopVid}>
				<img src="/video/stop.webp" alt="" />
			</button>

			<div class="volume">
				<img src="/video/volume.webp" alt="volume" />

				<input
					type="range"
					step="0.05"
					min="0"
					max="1"
					value="1"
					oninput={changeVol}
					aria-label="Volume"
				/>
			</div>
		</div>
	</div>
</div>

<style>
	.video-wrapper {
		display: flex;
		justify-content: center;
		margin-inline: auto;
		padding: 1rem;
		max-inline-size: 60rem;
		border-radius: var(--radius);

		& .video-frame {
			position: relative;
			inline-size: 100%;
			max-inline-size: 640px;
			background-color: #242424;
			border-radius: var(--radius);
			overflow: hidden;
			box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);

			& .video-element {
				display: block;
				inline-size: 100%;
				block-size: auto;
			}

			& .seek-bar {
				padding: 0.4rem 0.9rem 0.2rem;
				background: rgba(0, 0, 0, 0.7);

				& input[type='range'] {
					inline-size: 100%;
				}
			}
		}

		& .controls {
			display: flex;
			align-items: center;
			gap: 0.75rem;
			padding: 0.6rem 0.9rem;
			background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6));

			& .control-btn {
				background: none;
				border: none;
				cursor: pointer;
				padding: 0;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				inline-size: 2em;
				block-size: 2em;

				&:first-child {
					inline-size: 1.5em;
					scale: 1 1.75;
				}

				&:nth-child(2) {
					scale: 1 1.75;
				}

				&:nth-child(3) {
					scale: 1 1.75;
				}

				&:img {
					inline-size: 1.5em;
					block-size: 1.5em;
					filter: invert(1);
				}

				&:focus-visible {
					outline: 2px solid var(--clr-main);
					outline-offset: 2px;
				}
			}

			& .volume {
				margin-left: auto;
				display: flex;
				align-items: center;
				gap: 0.5rem;

				& img {
					inline-size: 1.2em;
					block-size: 1.2em;
					filter: invert(1);
				}

				& input[type='range'] {
					inline-size: 120px;
				}
			}
		}

		& input[type='range'] {
			-webkit-appearance: none;
			appearance: none;
			background-color: transparent;

			&::-webkit-slider-runnable-track {
				background: var(--clr-invert);
			}
			&::-moz-range-track {
				background: var(--clr-invert);
			}
			&::-ms-track {
				background: var(--clr-invert);
				border-color: transparent;
				color: transparent;
			}
			&::-webkit-slider-thumb {
				-webkit-appearance: none;
				appearance: none;
				background: var(--clr-main);
				border: 2px solid #000;
				cursor: pointer;
			}
			&::-moz-range-thumb {
				background: var(--clr-main);
				border: 2px solid #000;
				cursor: pointer;
			}
			&::-ms-thumb {
				background: var(--clr-main);
				border: 2px solid #000;
				cursor: pointer;
			}
			&::-moz-range-progress {
				background: var(--clr-blue);
			}
		}
	}
</style>
