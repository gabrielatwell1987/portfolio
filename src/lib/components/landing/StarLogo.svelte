<script lang="ts">
	interface Props {
		class?: string;
		opacity?: number;
		top?: string;
		left?: string;
		scale?: string;
		mobileTop?: string;
		mobileLeft?: string;
		mobileScale?: string;
	}

	let {
		class: className = '',
		opacity,
		top = '20%',
		left = '-25%',
		scale = '0.75',
		mobileTop = '30%',
		mobileLeft = '-20%',
		mobileScale = '1'
	}: Props = $props();
</script>

<svg
	class={className}
	width="100%"
	height="100%"
	viewBox="0 0 2552 1819"
	version="1.1"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	xml:space="preserve"
	style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;opacity:{opacity ||
		0.1};--top:{top};--left:{left};--scale:{scale};--mobile-top:{mobileTop};--mobile-left:{mobileLeft};--mobile-scale:{mobileScale};"
>
	<g transform="matrix(1,0,0,1,35.433071,35.433071)">
		<g transform="matrix(1.943188,1.359985,-1.390126,1.901055,243.910213,-1400.892263)">
			<path
				d="M894.11,202.889L964.808,420.474L1193.59,420.474L1008.501,554.949L1079.199,772.535L894.11,638.059L709.021,772.535L779.719,554.949L594.63,420.474L823.412,420.474L894.11,202.889Z"
				style="fill:var(--clr-blue);stroke:var(--clr-invert);stroke-width:8.91px;"
			/>
		</g>
		<g transform="matrix(1.391302,0,0,1.361136,-274.220362,154.824193)">
			<g transform="matrix(168.996258,0,0,168.996258,1353.01977,590.56664)"> </g>
			<text
				x="802.937px"
				y="590.567px"
				style="font-family:var(--bronova-bold);font-weight:700;font-size:168.996px;fill:var(--clr-invert);"
				>atwell</text
			>
		</g>
	</g>
</svg>

<style>
	svg {
		display: block;
		position: absolute;
		top: var(--top);
		left: var(--left);
		max-width: 100%;
		scale: var(--scale);

		@media (width <= 768px) {
			top: var(--mobile-top);
			left: var(--mobile-left);
			scale: var(--mobile-scale);
		}
	}
</style>
