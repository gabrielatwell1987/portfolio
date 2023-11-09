<script>
	import { gsap } from 'gsap';
	import { Flip } from 'gsap/dist/Flip';

	gsap.registerPlugin(Flip);

	const squares = gsap.utils.toArray('.square');

	function swap([a, b]) {
		a.parentNode.children[0] === a ? a.parentNode.appendChild(a) : a.parentNode.appendChild(b);
	}

	function doFlip() {
		const state = Flip.getState(squares);

		swap(squares);

		Flip.from(state, { duration: 2, ease: 'power1.inOut' });
	}

	document.addEventListener('click', doFlip);
</script>

<h1>Click to start animation!</h1>

<div class="container">
	<div class="square" id="sq1" />
	<div class="square" id="sq2" />
</div>

<style>
	.container {
		display: -webkit-box;
		display: flex;
		-webkit-box-pack: justify;
		justify-content: space-between;
	}
	.square {
		width: 250px;
		height: 250px;
		border-radius: 10%;
		font-size: 2em;
		font-weight: bolder;
		display: -webkit-box;
		display: flex;
		-webkit-box-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		align-items: center;
	}
	#sq1 {
		background: url('instagram.png') center center/cover no-repeat;
		width: 25%;
	}
	#sq2 {
		background: url('youtube.png') center center/cover no-repeat;
		width: 25%;
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
