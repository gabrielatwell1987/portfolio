<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	onMount(() => {
		const repeat = 30;
		const animations = [];

		const spinPulse_tl = gsap.timeline({ repeat: repeat });

		function createSpinPulse() {
			gsap.set('.spinPulse .circle', {
				yPercent: -125,
				transformOrigin: '50% 120%'
			});

			let tl = gsap.timeline({ repeat: 3 });

			tl.to('.spinPulse .circle', {
				rotation: 360,
				duration: 3,
				stagger: {
					each: 1,
					repeat: 3
				},
				ease: 'none'
			});

			tl.fromTo(
				'.spinPulse .circle',
				{ scale: 0.2 },
				{
					scale: 1.5,
					duration: 1.5,
					stagger: {
						each: 1,
						repeat: 6,
						yoyo: true
					},
					ease: 'power2.in'
				},
				0
			);

			spinPulse_tl.add(tl.tweenFromTo(2, 5));

			animations.push(spinPulse_tl);
		}

		createSpinPulse();
	});
</script>

<div class="demos">
	<div class="demo spinPulse">
		<div class="circle circle1" />
		<div class="circle circle2" />
		<div class="circle circle3" />
	</div>
</div>

<style>
	/* body,
	html {
		height: 100%;
		width: 100%;
	}

	body {
		background: transparent;
		margin: 0;
		display: grid;
	} */

	* {
		position: relative;
	}

	.demos {
		place-self: center;
		width: 100%;
		display: flex;
		flex-direction: row;
		gap: 1em;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}

	.demo {
		width: 30vw;
		height: 30vw;
		min-width: 30vw;
		position: relative;
		overflow: hidden;
		background: transparent;
	}

	.circle {
		opacity: 0.3;
		border-radius: 50%;
		background: hsla(227, 98%, 68%, 1);
	}

	.spinPulse {
		display: grid;
	}

	.spinPulse .circle {
		width: 30%;
		height: 30%;
		opacity: 0.5;
		place-self: center;
		position: absolute;
	}
</style>
