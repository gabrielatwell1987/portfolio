<script>
</script>

<div class="center">
	<a href="/">
		<svg
			viewBox="0 0 369 138"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			xml:space="preserve"
			style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
			role="img"
			aria-labelledby="underline-logo"
		>
			<title id="underline-logo">Atwell</title>
			<g transform="matrix(1,0,0,1,-55,0)">
				<g id="Artboard1" transform="matrix(1,0,0,1,-0.796834,166.586081)">
					<rect x="55.797" y="-166.586" width="368.446" height="137.655" style="fill:none;" />
					<g transform="matrix(0.721413,0,0,0.708051,41.498596,-170.566197)">
						<text
							x="24.48px"
							y="121.47px"
							fill="none"
							stroke="var(--clr-main)"
							stroke-width="5"
							class="atwell-text"
							style="font-family: var(--ultra);font-size:125px;">atwell</text
						>
					</g>
					<g transform="matrix(-1.121351,0.096782,0.085989,0.996296,485.640571,-191.463057)">
						<path
							class="underline-path"
							d="M74.717,125.094C74.921,125.146 75.03,125.443 75.234,125.495C75.343,125.523 75.341,125.464 78.93,124.821C128.68,115.911 297.262,90.067 377.531,115.113C378.809,115.512 378.818,115.613 380.129,115.406C380.441,115.357 382.235,115.074 383.525,113.18C383.722,112.891 384.856,111.226 384.557,108.781C384.514,108.43 384.267,106.411 382.579,104.958C381.512,104.039 381.457,104.129 380.152,103.77C361.958,98.771 309.002,87.213 175.416,106.502C118.912,114.66 75.075,124.51 75.074,124.512L74.717,125.094Z"
						/>
					</g>
				</g>
			</g>
		</svg></a
	>
</div>

<style>
	.center {
		@media (width <= 500px) {
			margin-left: 1em;
		}

		& a {
			user-select: none;
			outline: none;
			background-color: transparent;
			box-shadow: none;
			margin: 0;
			display: flex;
			align-items: center;

			&:focus,
			&:focus-visible {
				outline: 1px solid var(--clr-main);
				background: transparent;
			}
		}

		& svg {
			width: clamp(8em, 12vw, 15em);
			height: auto;
			display: block;
			margin-inline: auto;

			& .atwell-text {
				stroke-dasharray: 800;
				stroke-dashoffset: 0;
				animation: dash 5s linear;
			}

			& .underline-path {
				stroke: var(--clr-main);
				stroke-width: 5;
				stroke-dasharray: 600;
				stroke-dashoffset: 0;
				animation: dash 5s linear;
				animation-delay: -2s;
				fill: none;
			}
		}
	}

	@keyframes dash {
		from {
			stroke-dashoffset: 800;
		}
		to {
			stroke-dashoffset: 0;
		}
	}
</style>
