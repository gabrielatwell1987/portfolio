<script>
	import { gsap } from 'gsap';
	import { Flip } from 'gsap/dist/Flip';

	gsap.registerPlugin(Flip);

	const squares = gsap.utils.toArray('.square');

	function doFlip() {
		// Get the initial state
		const state = Flip.getState(squares);

		// Make DOM or styling changes (swap the squares in our case)
		swap(squares);

		// Animate from the initial state to the end state
		Flip.from(state, { duration: 2, ease: 'power1.inOut' });
	}

	// Given an Array of two siblings, append the one that's first so it's last (swap)
	function swap([a, b]) {
		a.parentNode.children[0] === a ? a.parentNode.appendChild(a) : a.parentNode.appendChild(b);
	}

	// click anywhere to flip
	document.addEventListener('click', doFlip);
</script>

<div class="container">
	<div class="square" id="sq1">PORT</div>
	<div class="square" id="sq2">FOLIO</div>
</div>

<style>
	:global(body) {
		background-color: #222;
		font-family: 'Signika Negative', sans-serif, Arial;
	}
	.container {
		display: -webkit-box;
		display: flex;
		-webkit-box-pack: justify;
		justify-content: space-between;
	}
	.square {
		width: 100px;
		height: 100px;
		border-radius: 10px;
		font-size: 2em;
		font-weight: bolder;
		display: -webkit-box;
		display: flex;
		-webkit-box-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		align-items: center;
		color: #242424;
		background-color: #ff0;
		cursor: pointer;
	}
</style>
