<script lang="ts">
	let { stroke } = $props();
</script>

<div class="bg-circles">
	<svg
		viewBox="0 0 1200 800"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="xMidYMid slice"
	>
		<!-- desktop -->
		<g fill="none" {stroke} stroke-width="2" opacity="0.3" class="desktop-only">
			<circle r="120" cx="200" cy="150"></circle>
			<circle r="80" cx="800" cy="200"></circle>
			<circle r="60" cx="300" cy="400"></circle>
			<circle r="100" cx="900" cy="500"></circle>
			<circle r="70" cx="150" cy="600"></circle>
			<circle r="90" cx="700" cy="650"></circle>
		</g>

		<g fill="none" {stroke} stroke-width="1.5" opacity="0.4" class="mobile-only">
			<circle r="40" cx="100" cy="100"></circle>
			<circle r="30" cx="300" cy="180"></circle>
			<circle r="50" cx="500" cy="120"></circle>
			<circle r="35" cx="650" cy="220"></circle>
			<circle r="45" cx="150" cy="350"></circle>
			<circle r="25" cx="400" cy="300"></circle>
			<circle r="55" cx="600" cy="380"></circle>
			<circle r="40" cx="700" cy="280"></circle>
			<circle r="30" cx="200" cy="520"></circle>
			<circle r="50" cx="450" cy="480"></circle>
			<circle r="35" cx="650" cy="550"></circle>
			<circle r="40" cx="100" cy="700"></circle>
			<circle r="45" cx="350" cy="680"></circle>
			<circle r="30" cx="600" cy="720"></circle>
			<circle r="25" cx="500" cy="800"></circle>
			<circle r="40" cx="250" cy="850"></circle>
			<circle r="35" cx="550" cy="900"></circle>
			<circle r="50" cx="150" cy="950"></circle>
			<circle r="30" cx="400" cy="1000"></circle>
			<circle r="45" cx="650" cy="1050"></circle>
		</g>
	</svg>

	<!-- mobile -->
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

		& svg {
			width: 100%;
			height: 100%;

			@media (max-width: 768px) {
				object-position: center top;
			}

			& .mobile-only {
				display: none;

				@media (max-width: 768px) {
					display: block;
				}
			}

			& .desktop-only {
				display: block;

				@media (max-width: 768px) {
					display: none;
				}
			}
		}
	}
</style>
