<script>
	let { stroke } = $props();
</script>

<div class="bg-circles">
	<svg
		viewBox="0 0 1200 800"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="xMidYMid slice"
	>
		<g fill="none" {stroke} stroke-width="2" opacity="0.3">
			<circle r="120" cx="200" cy="150"></circle>
			<circle r="80" cx="800" cy="200"></circle>
			<circle r="60" cx="300" cy="400"></circle>
			<circle r="100" cx="900" cy="500"></circle>
			<circle r="70" cx="150" cy="600"></circle>
			<circle r="90" cx="700" cy="650"></circle>
		</g>
	</svg>
</div>

<style>
	.bg-circles {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		pointer-events: none;
		z-index: 1;
		overflow: hidden;
	}

	svg {
		width: 100%;
		height: 100%;
	}
</style>
