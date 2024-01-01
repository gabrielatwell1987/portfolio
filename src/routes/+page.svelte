<script>
	import { gsap } from 'gsap';
	import { Draggable } from 'gsap/dist/Draggable';
	import { onMount } from 'svelte';

	// animations
	onMount(() => {
		// Make the hero image draggable
		gsap.registerPlugin(Draggable);

		gsap.to('.atwellLogo', { autoAlpha: 1, duration: 2.5, ease: 'sine.in' });

		Draggable.create('.hero', {
			type: 'y',
			bounds: document.querySelector('main'),
			inertia: true
		});

		// hero image animations
		const text = document.querySelector('.atwell-text');
		const blueA = document.querySelector('.blue-a');

		gsap.set(blueA, { transformOrigin: 'center' });
		gsap.set(text, { x: -2000, transformOrigin: 'center' });

		const tl = gsap.timeline({ defaults: { ease: 'power3.inOut', duration: 1.5 } });

		tl.fromTo(blueA, { scale: 0.25 }, { scale: 1, duration: 3.5 })
			.to(text, { x: 0, duration: 3 }, '-=1.5')
			.to(text, { x: 2000, duration: 3 })
			.to(blueA, { fill: '#222', duration: 2 }, '-=2')
			.to(text, { fill: '#222', duration: 2 }, '-=2')
			.to(text, { x: 25, duration: 3 }, '-=1');
	});
</script>

<main class="atwellLogo">
	<!-- hero image svg -->
	<svg class="hero" width="1200" height="722" viewBox="0 0 1200 722" fill="none">
		<path
			class="blue-a"
			d="M1183.44 500H1011.44C1003.54 500 996.43 497.618 992.742 493.748L900.293 398.482H599.767V316.166H820.223L615.043 104.794C608.458 97.947 591.075 97.947 584.49 104.794L539.977 150.195H331.374L453.059 29.4744C471.233 11.1655 505.737 -0.147402 542.875 0.0014511L643.489 0.299158C692.216 0.448011 736.992 15.4822 760.697 39.5965L1197.92 486.306C1203.98 492.409 1196.08 500 1183.44 500ZM216.273 493.302L482.559 212.713H268.687L1.87427 487.199C-3.65689 493.004 3.71799 500 15.3071 500H196.518C204.684 500 212.322 497.469 216.273 493.302Z"
			fill="url(#paint0_linear_1_5)"
			stroke="white"
			stroke-width="4"
		/>
		<path
			class="atwell-text"
			d="M249.376 685H247.84L286.112 595.4L287.52 594.76L319.776 685H308.896L298.912 656.84H261.536L249.376 685ZM282.144 609.224L262.048 655.56H298.528L282.144 609.224ZM402.433 685H391.809V596.68H369.665V595.4H424.705V596.68H402.433V685ZM581.791 595.4C583.412 597.021 584.223 599.112 584.223 601.672C584.223 603.805 583.754 605.981 582.815 608.2L552.607 685L551.199 685.64L534.303 632.008L513.439 685L512.031 685.64L483.615 595.4H494.495L517.407 671.176L533.663 629.96L522.783 595.4H533.663L556.575 671.176L581.279 608.2C582.218 606.067 582.687 603.848 582.687 601.544C582.687 599.24 582.047 597.448 580.767 596.168L581.791 595.4ZM699.129 595.4V596.68H658.809V635.08H696.185V636.36H658.809V683.72H701.945V685H648.185V595.4H699.129ZM815.275 685H766.635V595.4H777.259V683.72H815.275V685ZM927.975 685H879.335V595.4H889.959V683.72H927.975V685Z"
			fill="#016B9E"
			stroke="white"
			stroke-width="1"
		/>
		<defs>
			<linearGradient
				id="paint0_linear_1_5"
				x1="601.74"
				y1="8.52718"
				x2="601.179"
				y2="488.829"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#0098CB" />
				<stop offset="1" stop-color="#00689B" />
			</linearGradient>
		</defs>
	</svg>

	<!-- hero section text and links -->
	<h3>Professionally Crafted Web Experiences</h3>
	<h4 class="summary">
		I look forward to hearing from you so we can discuss your goals for your online needs!
	</h4>
	<a class="btn" href="/projects"><button>Projects</button></a>
	<h4 class="summary italic">Some projects I have created.</h4>
</main>
<!-- footer spacing -->
<br /><br /><br /><br /><br /><br />

<style>
	@media screen and (min-width: 200px) {
		main {
			text-align: center;
			font-size: 1.75rem;
			height: 100vh;
		}
		h3 {
			margin: 2rem auto;
			color: var(--blue);
			font-size: 1.25rem;
			font-weight: 800;
			font-family: var(--righteous);
			letter-spacing: 2px;
		}
		h4 {
			color: var(--white);
			font-size: 0.75rem;
			letter-spacing: 0.5px;
		}
		button {
			display: block;
			background-color: transparent;
			color: var(--smoke);
			font-family: var(--righteous);
			width: 30%;
			outline: none;
			border: 1px solid var(--smoke);
			margin: 1rem auto;
			border-radius: 10px;
			font-size: 0.75rem;
			font-weight: 900;
			border-radius: 5rem;
			filter: drop-shadow(0 0 0.75rem var(--smoke));
		}
		button:hover {
			border: 1px solid black;
			background-color: var(--smoke);
			color: black;
		}
		svg {
			width: 100%;
			height: 50%;
			opacity: 0.75;
			margin-bottom: 5%;
		}
		.btn {
			text-decoration: none;
			margin: 0 auto;
		}
		.summary {
			margin: 0 auto;
			font-size: 1rem;
			font-weight: 500;
		}
		.italic {
			font-style: italic;
			font-size: 0.75rem;
			color: gray;
		}
	}
	@media screen and (min-width: 740px) {
		main {
			text-align: center;
			font-size: 2rem;
		}
		button {
			font-size: 1rem;
			width: 15%;
			font-size: 2rem;
			letter-spacing: 2px;
		}
		button:hover {
			animation: wiggle 0.5s ease-in-out infinite;
		}
		h3 {
			font-size: 2rem;
			letter-spacing: 7px;
		}
		h4 {
			color: var(--white);
			font-size: 1.25rem;
		}
		svg {
			height: 75%;
		}
		@keyframes wiggle {
			0% {
				rotate: 0deg;
				translate: 0 0;
			}
			25% {
				rotate: -2deg;
				translate: -5px 0;
			}
			80% {
				rotate: 2deg;
				translate: 5px 0;
			}
		}
	}
	@media screen and (min-width: 990px) {
		main {
			text-align: center;
			font-size: 2.5rem;
			margin: 5rem 0;
		}
		button {
			width: 17.5%;
			font-size: 1.25rem;
			margin: 3rem auto;
		}
	}
	@media screen and (min-width: 1100px) {
		button {
			width: 12%;
		}
	}
</style>
