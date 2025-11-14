<script>
	let {
		class: className = '',
		opacity = '0.1',
		mobileOpacity = '0.3',
		top = '20%',
		left = '-20%',
		scale = '0.65',
		mobileTop = '25%',
		mobileLeft = '-20%',
		mobileScale = '.65'
	} = $props();
</script>

<svg
	class={className}
	width="100%"
	height="100%"
	viewBox="0 0 842 596"
	version="1.1"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	xml:space="preserve"
	xmlns:serif="http://www.serif.com/"
	style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;--opacity:{opacity ||
		0.1};--mobile-opacity:{mobileOpacity ||
		0.3};--top:{top};--left:{left};--scale:{scale};--mobile-top:{mobileTop};--mobile-left:{mobileLeft};--mobile-scale:{mobileScale};"
	><g id="ultraA"
		><g transform="matrix(633.799184,0,0,633.799184,611.650524,444.756675)"></g><text
			x="138.158px"
			y="444.757px"
			fill="none"
			stroke="var(--clr-main)"
			stroke-width="5"
			style="font-family:var(--ultra);font-size:633.799px;">a</text
		><g transform="matrix(-0.002042,0.999998,-0.999998,-0.002042,876.079394,-826.881399)"
			><g transform="matrix(88.216712,0,0,88.216712,1266.749088,399.161763)"></g><text
				x="997.6px"
				y="399.162px"
				style="font-family:var(--bronova);font-size:88.217px;fill:var(--clr-main);">atwell</text
			></g
		></g
	></svg
>

<style>
	svg {
		display: block;
		position: absolute;
		top: var(--top);
		left: max(var(--left), -40vw);
		scale: var(--scale);
		opacity: var(--opacity);
		max-width: 100%;
		overflow: visible;

		anchor-name: --logo;

		@media (width <= 768px) {
			top: var(--mobile-top);
			left: max(var(--mobile-left), -30vw);
			scale: var(--mobile-scale);
		}

		@media (width <= 500px) {
			opacity: var(--mobile-opacity);
			top: calc(var(--mobile-top) + 7vh);
			left: 25vw;

			& g {
				stroke-width: 10px;
			}
		}
	}
</style>
