<script>
	import gsap from 'gsap';
	import { MorphSVGPlugin } from 'gsap/dist/MorphSVGPlugin';

	$effect(() => {
		gsap.registerPlugin(MorphSVGPlugin);

		MorphSVGPlugin.convertToPath('#sourceSVG rect, #sourceSVG circle, #sourceSVG polygon');

		// Set transform origins for all elements
		gsap.set('#square1, #G', { transformOrigin: 'center center' });
		gsap.set('#circle, #A', { transformOrigin: 'center center' });
		gsap.set('#triangle, #B', { transformOrigin: 'center center' });
		gsap.set('#square2, #E', { transformOrigin: 'center center' });

		// OPTION 1: Timeline-specific defaults (recommended for this use case)
		const tl = gsap.timeline({
			defaults: {
				duration: 1,
				ease: 'power2.inOut'
			},

			repeat: 2,
			yoyo: true,
			delay: 0.5
		});

		// Now animations inherit the defaults - much cleaner!
		tl.to('#square1', { morphSVG: '#G' })
			.to('#circle', { morphSVG: '#A' }, 0)
			.to('#triangle', { morphSVG: '#B' }, 0)
			.to('#square2', { morphSVG: '#E' }, 0);
	});
</script>

<svg id="sourceSVG" width="400px" height="100px" viewBox="0 0 400 100">
	<rect id="square1" x="0" y="0" width="80" height="80" />
	<circle id="circle" cx="140" cy="40" r="40" />
	<polygon id="triangle" points="200,80 280,80 240,0" />
	<rect id="square2" x="300" y="0" width="80" height="80" />
</svg>

<svg id="targetSVG" width="400px" height="100px" viewBox="0 0 400 100">
	<!-- Clean, well-formed path data for "GABE" letters -->
	<path
		id="G"
		d="M 10 10 
		   L 60 10 
		   L 60 20 
		   L 20 20 
		   L 20 35 
		   L 45 35 
		   L 45 45 
		   L 45 55 
		   L 60 55 
		   L 60 70 
		   L 10 70 
		   L 10 10 Z
		   M 35 35 
		   L 35 45 
		   L 45 45 
		   L 45 35 Z"
	/>
	<path
		id="A"
		d="M 100 70 
		   L 110 70 
		   L 115 55 
		   L 135 55 
		   L 140 70 
		   L 150 70 
		   L 130 10 
		   L 120 10 
		   L 100 70 Z
		   M 118 45 
		   L 132 45 
		   L 125 25 
		   L 118 45 Z"
	/>
	<path
		id="B"
		d="M 200 10 
		   L 200 70 
		   L 240 70 
		   C 250 70 260 65 260 55 
		   C 260 50 255 45 250 45 
		   C 255 45 260 40 260 30 
		   C 260 20 250 10 240 10 
		   L 200 10 Z
		   M 210 20 
		   L 235 20 
		   C 240 20 245 22 245 30 
		   C 245 38 240 40 235 40 
		   L 210 40 
		   L 210 20 Z
		   M 210 50 
		   L 235 50 
		   C 240 50 245 52 245 55 
		   C 245 58 240 60 235 60 
		   L 210 60 
		   L 210 50 Z"
	/>
	<path
		id="E"
		d="M 300 10 
		   L 300 70 
		   L 360 70 
		   L 360 60 
		   L 310 60 
		   L 310 45 
		   L 350 45 
		   L 350 35 
		   L 310 35 
		   L 310 20 
		   L 360 20 
		   L 360 10 
		   L 300 10 Z"
	/>
</svg>

<style>
	svg {
		max-width: 25em;
		width: 100%;
		margin: 0;
		padding: 0;
		/* position: relative;
		left: 50%;
		transform: translateX(-50%); */
		fill: var(--clr-main);
	}

	#targetSVG {
		display: none;
	}

	/* #sourceSVG,
	#targetSVG {
		position: absolute;
		top: 50px;
		left: 50px;
	} */
</style>
