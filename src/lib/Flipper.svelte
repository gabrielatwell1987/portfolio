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

<h1>Click to start animation!</h1>

<div class="container">
	<div class="square" id="sq1">PORT</div>
	<div class="square" id="sq2">FOLIO</div>
</div>

<style>
	:global(body) {
		font-family: 'Signika Negative', sans-serif, Arial;
	}
	.container {
		display: -webkit-box;
		display: flex;
		-webkit-box-pack: justify;
		justify-content: space-between;
	}
	.square {
		width: 250px;
		height: 250px;
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
		background-color: rgb(88, 149, 151);
		cursor: pointer;
	}
	h1 {
		text-align: center;
		font-weight: bold;
		font-family: Georgia, 'Times New Roman', Times, serif;
		margin: 5rem auto;
		width: 100%;
		letter-spacing: 3px;
	}
</style>
