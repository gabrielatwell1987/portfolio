<script>
	import Laptop from '$lib/Laptop.svelte';
	import Man from '$lib/Man.svelte';
	import Logo from '$lib/Logo.svelte';
	// import {gsap} from 'gsap/dist/gsap';
	// import {onMount} from 'svelte';

	// onMount(() => {
	//     gsap.from('.d', {y: 0})
	// })
</script>

<nav>
	<div class="header-logos">
		<!-- <Logo /> -->

		<svg width="75" height="75" viewBox="0 0 4096.0 4096.0">
			<g
				id="document"
				transform="scale(13.653333333333334 13.653333333333334) translate(150.0 150.0)"
			>
				<path
					d="M10.0252,16.7162 C10.0252,3.34929 10.0252,-6.69103 10.0252,-13.4047 C10.0252,-14.312 9.70766,-15.0983 9.07258,-15.7636 C8.40726,-16.3987 7.62097,-16.7162 6.71371,-16.7162 C0.756048,-16.7162 -3.70464,-16.7162 -6.66835,-16.7162 C-7.60585,-16.7162 -8.39214,-16.3987 -9.02722,-15.7636 C-9.69254,-15.0983 -10.0252,-14.312 -10.0252,-13.4047 C-10.0252,-9.23135 -10.0252,-5.57208 -10.0252,-2.42692 C-10.0252,0.688004 -10.0252,3.28881 -10.0252,5.3755 C-10.0252,10.4259 -10.0252,14.2061 -10.0252,16.7162 C-7.06149,16.7162 -4.83871,16.7162 -3.35685,16.7162 C-3.35685,10.7586 -3.35685,6.29788 -3.35685,3.33417 C-0.362903,3.33417 1.875,3.33417 3.35685,3.33417 C3.35685,9.29183 3.35685,13.7525 3.35685,16.7162 C6.32056,16.7162 8.54335,16.7162 10.0252,16.7162 Z M3.35685,-3.33417 C0.393145,-3.33417 -1.84476,-3.33417 -3.35685,-3.33417 C-3.35685,-6.32812 -3.35685,-8.56603 -3.35685,-10.0479 C-0.362903,-10.0479 1.875,-10.0479 3.35685,-10.0479 C3.35685,-7.59829 3.35685,-5.75353 3.35685,-4.51361 C3.35685,-3.9995 3.35685,-3.60635 3.35685,-3.33417 Z "
					fill="#eff5fd"
					fill-opacity="1.00"
				/>
				<path
					d="M-10.0938,108.786 C51.3617,112.439 104.068,65.6461 107.721,4.19058 C111.374,-57.2649 64.5816,-109.972 3.12607,-113.625 C-58.3294,-117.277 -111.036,-70.4848 -114.689,-9.02929 C-118.342,52.4262 -71.5493,105.133 -10.0938,108.786 Z "
					fill="#0c3e83"
					fill-opacity="1.00"
				/>
				<path
					d="M35.8608,59.795 C35.8608,11.9806 35.8608,-23.9342 35.8608,-47.9496 C35.8608,-51.1949 34.7249,-54.0075 32.4532,-56.3874 C30.0733,-58.6591 27.2607,-59.795 24.0154,-59.795 C2.70443,-59.795 -13.2517,-59.795 -23.8531,-59.795 C-27.2066,-59.795 -30.0192,-58.6591 -32.2909,-56.3874 C-34.6708,-54.0075 -35.8608,-51.1949 -35.8608,-47.9496 C-35.8608,-33.0211 -35.8608,-19.9317 -35.8608,-8.68123 C-35.8608,2.46103 -35.8608,11.7643 -35.8608,19.2285 C-35.8608,37.2941 -35.8608,50.8163 -35.8608,59.795 C-25.2594,59.795 -17.3084,59.795 -12.0077,59.795 C-12.0077,38.4841 -12.0077,22.5279 -12.0077,11.9265 C-1.29813,11.9265 6.70699,11.9265 12.0077,11.9265 C12.0077,33.2375 12.0077,49.1936 12.0077,59.795 C22.6091,59.795 30.5601,59.795 35.8608,59.795 Z M12.0077,-11.9265 C1.4063,-11.9265 -6.59881,-11.9265 -12.0077,-11.9265 C-12.0077,-22.6361 -12.0077,-30.6412 -12.0077,-35.9419 C-1.29813,-35.9419 6.70699,-35.9419 12.0077,-35.9419 C12.0077,-27.1795 12.0077,-20.5807 12.0077,-16.1455 C12.0077,-14.3064 12.0077,-12.9001 12.0077,-11.9265 Z "
					fill="#eff6ff"
					fill-opacity="1.00"
				/>
			</g>
		</svg>

		<h2 class="text">GABEatwell</h2>
	</div>

	<div class="desktop-view">
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/photos">Photos</a>
		<a href="/projects">Projects</a>
		<a href="/blog">Blog</a>
		<a href="/contact">Contact</a>
	</div>
	<div class="mobile-view">
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/projects">Projects</a>
		<a href="/contact">Contact</a>
	</div>
</nav>

<style>
	h2 {
		text-align: center;
		font-family: 'Courier New', Courier, monospace;
		font-size: 1.5rem;
		color: lightskyblue;
		margin-top: 0.5rem;
		padding-top: 2rem;
		margin-top: 1rem;
	}
	a {
		/* margin: 0 10px; */
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 0.9rem;
		text-decoration: none;
		font-weight: 900;
		color: lightskyblue;
		margin-left: 8rem;
		margin-right: -7rem;
	}
	a:hover {
		color: blue;
	}
	.desktop-view {
		/* margin-right: .5rem; */
		display: block;
	}
	.mobile-view {
		display: none;
	}
	nav {
		background-color: #303030;
		padding: 10px 0;
		border: 2px solid gray;
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 5em;
		width: 100%;
	}
	.header-logos {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 2rem;
	}
	.text {
		margin-left: 1.5rem;
	}
	svg {
		margin-left: -75%;
		width: 20%;
		border-radius: 50%;
	}
	@media (max-width: 1250px) {
		nav {
			background-color: transparent;
			border: none;
			padding: 0;
			display: flex;
			justify-content: center;
			height: 2em;
		}
		.header-logos {
			display: none;
		}
		.mobile-view {
			margin-right: 12rem;
		}
		.desktop-view {
			display: none;
		}
	}
	@media (max-width: 727px) {
		.mobile-view {
			display: flex;
			justify-content: space-evenly;
			/* width: 100%; */
			margin-left: -2rem;
		}
	}
</style>
