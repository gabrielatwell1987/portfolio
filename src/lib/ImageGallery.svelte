<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		console.clear();

		let count = 0;
		const targets = document.querySelectorAll('.box');

		gsap.set(targets, { xPercent: 100 });
		gsap.set(targets[0], { xPercent: 0 });

		// Next button
		function slideOneNext() {
			gsap.fromTo(
				targets[count],
				{ xPercent: 0, zIndex: 0 },
				{ delay: 0.2, duration: 1.2, xPercent: 0, zIndex: -10 }
			);
			count = count < targets.length - 1 ? ++count : 0;
			gsap.fromTo(
				targets[count],
				{ xPercent: 100, zIndex: 10 },
				{ duration: 1.2, xPercent: 0, zIndex: 0 }
			);
		}
		nextButton.addEventListener('click', function () {
			slideOneNext();
		});

		// Previous button
		function slideOnePrev() {
			gsap.fromTo(targets[count], { xPercent: 0, zIndex: 10 }, { xPercent: 0, zIndex: 0 });
			gsap.fromTo(
				targets[count],
				{ xPercent: 0, zIndex: 0 },
				{ delay: 0, duration: 1.2, xPercent: 100, zIndex: -10 }
			);
			count = count < targets.length ? --count : 0;
		}
		prevButton.addEventListener('click', function () {
			slideOnePrev();
		});
	});
</script>

<div class="box-container">
	<div class="box box01" />
	<div class="box box02" />
	<div class="box box03" />
	<div class="box box04" />
	<div class="box box05" />
	<div class="box box06" />
</div>

<div class="controls">
	<button id="prevButton">Prev</button>
	<button id="nextButton">Next</button>
</div>

<style>
	:global(html) {
		font-size: 62.5%;
	}
	:global(body) {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}
	.controls {
		padding: 0px;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 40px;
		min-height: 40px;
	}
	.controls button {
		margin: 0 8px;
		padding: 12px 24px;
	}
	.box-container {
		width: 60rem;
		height: 80vh;
		position: relative;
		margin: 24px auto;
		overflow: hidden;
		/*border: .2rem solid black;*/
	}
	.box {
		position: absolute;
		width: 100%;
		height: 100%;
		display: grid;
		place-items: center;
		z-index: 0;
	}
	.box01 {
		background: url('gabe.png') no-repeat center center / cover;
		width: 350px;
		height: 450px;
		left: 0%;
	}
	.box02 {
		background: url('gabe2.png') no-repeat center center / cover;
		width: 300px;
		height: 350px;
	}
	.box03 {
		background: url('gabe3.jpg') no-repeat center center / cover;
		width: 400px;
		height: 900px;
	}
	.box04 {
		background: url('gabe4.jpg') no-repeat center center / cover;
		width: 350px;
	}
	.box05 {
		background: url('gabe5.png') no-repeat center center / cover;
		width: 400px;
	}
	.box06 {
		background: url('retard.png') no-repeat center center / cover;
		width: 475px;
	}
	#prevButton {
		border: 3px solid white;
		background-color: transparent;
		font-size: 2.5rem;
		font-weight: bolder;
		border-radius: 10px;
		width: 10%;
	}
	#nextButton {
		border: 3px solid white;
		background-color: transparent;
		font-size: 2.5rem;
		font-weight: bolder;
		border-radius: 10px;
		width: 10%;
	}
</style>
