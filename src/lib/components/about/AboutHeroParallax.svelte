<script lang="ts">
	let container: HTMLElement;
	let scrollY = $state<number>(0);

	$effect(() => {
		const abortController = new AbortController();

		const onScroll = () => {
			scrollY = window.scrollY;
		};

		window.addEventListener('scroll', onScroll, { signal: abortController.signal });

		return () => {
			abortController.abort();
		};
	});
</script>

<section class="parallax-wrapper">
	<div
		class="layer background"
		style="transform: translateY({scrollY *
			0.1}px); background-image: url('https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/svelte-magick_background.webp');"
	></div>

	<div
		class="layer middle"
		style="transform: translateY({scrollY *
			0.3}px); background-image: url('https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/svelte-magick_middle.webp');"
	></div>

	<div
		class="layer foreground"
		style="transform: translateY({scrollY *
			0.5}px); background-image: url('https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/svelte-magick_foreground.webp');"
	></div>
</section>

<style>
	.parallax-wrapper {
		position: relative;
		inline-size: 100%;
		block-size: 100vh;
		overflow: clip;
		mask: linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 60%, transparent);

		& .layer {
			position: absolute;
			inset: 0;
			inline-size: 100%;
			block-size: 100%;
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			will-change: transform;
			pointer-events: none;

			&.background {
				z-index: 1;
			}
			&.middle {
				z-index: 2;
			}
			&.foreground {
				z-index: 3;
			}
		}
	}
</style>
