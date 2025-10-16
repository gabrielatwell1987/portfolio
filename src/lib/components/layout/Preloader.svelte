<script>
	import gsap from 'gsap';

	let preloaderVisible = $state(true);
	let preloaderElement = $state();
	let lines = $state([]);

	$effect(() => {
		const tl = gsap.timeline();

		// Animate each line from right to left (revealing content)
		tl.to(lines, {
			duration: 1.3,
			scaleX: 0,
			transformOrigin: 'right',
			ease: 'power3.inOut'
		});

		// Fade out the entire preloader
		tl.to(
			preloaderElement,
			{
				duration: 0.5,
				opacity: 0,
				pointerEvents: 'none',
				onComplete: () => {
					preloaderVisible = false;
				}
			},
			'-=0.3'
		);

		return () => {
			tl.kill();
		};
	});
</script>

{#if preloaderVisible}
	<div bind:this={preloaderElement} class="preloader" id="preloader">
		{#each Array(10) as _, i}
			<div bind:this={lines[i]} class="preloader-line"></div>
		{/each}
	</div>
{/if}

<style>
	.preloader {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: center;

		& .preloader-line {
			flex: 1;
			height: 100vh;
			background-color: var(--clr-invert);
			transform-origin: right;
		}
	}
</style>
