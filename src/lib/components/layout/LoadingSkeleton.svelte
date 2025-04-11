<svg
	role="img"
	width="400"
	height="160"
	aria-labelledby="loading-aria"
	viewBox="0 0 400 160"
	preserveAspectRatio="none"
>
	<title id="loading-aria">Loading...</title>
	<rect
		x="0"
		y="0"
		width="100%"
		height="100%"
		clip-path="url(#clip-path)"
		style="fill: url('#fill');"
	></rect>
	<defs>
		<clipPath id="clip-path">
			<rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
			<rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
			<rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
			<rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
			<rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
			<circle cx="20" cy="20" r="20" />
		</clipPath>
		<linearGradient id="fill">
			<!-- First stop - leading edge -->
			<stop offset="0.599964" stop-color="#666666" stop-opacity="1">
				<animate
					attributeName="offset"
					values="-2; -2; 1"
					keyTimes="0; 0.15; 1"
					dur="2.2s"
					calcMode="spline"
					keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
					repeatCount="indefinite"
				></animate>
			</stop>

			<!-- Middle stop - main highlight -->
			<stop offset="1.59996" stop-color="#f3f3f3" stop-opacity="1">
				<animate
					attributeName="offset"
					values="-1; -1; 2"
					keyTimes="0; 0.15; 1"
					dur="2.2s"
					calcMode="spline"
					keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
					repeatCount="indefinite"
				></animate>
			</stop>

			<!-- Final stop - trailing edge -->
			<stop offset="2.59996" stop-color="#666666" stop-opacity="1">
				<animate
					attributeName="offset"
					values="0; 0; 3"
					keyTimes="0; 0.15; 1"
					dur="2.2s"
					calcMode="spline"
					keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
					repeatCount="indefinite"
				></animate>
			</stop>
		</linearGradient>
	</defs>
</svg>

<style>
	svg {
		display: block;
		margin-inline: auto;
		width: 55vw;
		height: auto;
	}
</style>
