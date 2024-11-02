<script>
	$effect(() => {
		const root = document.documentElement;
		const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
			'--marquee-elements-displayed'
		);
		const marqueeContent = document.querySelector('ul.marquee-content');

		root.style.setProperty('--marquee-elements', marqueeContent.children.length);

		for (let i = 0; i < marqueeElementsDisplayed; i++) {
			marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
		}
	});
</script>

<main class="marquee" aria-hidden="true">
	<ul class="marquee-content">
		<li>
			<a
				class="size yellow"
				href="https://www.github.com/gabrielatwell1987/portfolio"
				target="_blank"
				aria-label="GitHub"
			>
				<i class="fa-brands fa-github" aria-hidden="true"></i></a
			>
		</li>

		<li>
			<a class="size" href="https://codepen.io/gabrielatwell" target="_blank" aria-label="Codepen">
				<i class="fa-brands fa-codepen" aria-hidden="true"></i></a
			>
		</li>

		<li>
			<a
				class="size"
				href="https://www.linkedin.com/in/gabrielatwell/"
				target="_blank"
				aria-label="LinkedIn"
			>
				<i class="fa-brands fa-linkedin" aria-hidden="true"></i>
			</a>
		</li>

		<li>
			<a
				class="size"
				href="https://discordapp.com/users/1007777351809114112"
				target="_blank"
				aria-label="Discord"
			>
				<i class="fa-brands fa-discord" aria-hidden="true"></i>
			</a>
		</li>

		<li>
			<a
				class="size"
				href="https://www.reddit.com/user/gatwell702"
				target="_blank"
				aria-label="Reddit"
			>
				<i class="fa-brands fa-square-reddit" aria-hidden="true"></i>
			</a>
		</li>
	</ul>
</main>

<style>
	:root {
		--marquee-width: 100vw;
		--marquee-height: 20vh;
		--marquee-elements-displayed: 5;
		--marquee-element-width: calc(var(--marquee-width) / var(--marquee-elements-displayed));
		--marquee-animation-duration: calc(var(--marquee-elements) * 10s);
	}

	.marquee {
		width: var(--marquee-width);
		height: var(--marquee-height);
		background-color: transparent;
		color: var(--white);
		overflow: hidden;
		position: relative;
		margin-inline: auto;
	}

	.marquee:before,
	.marquee:after {
		position: absolute;
		top: 0;
		width: 10rem;
		height: 100%;
		content: '';
		z-index: 1;
	}

	.marquee:before {
		left: 0;
		background: transparent;
	}

	.marquee:after {
		right: 0;
		background: transparent;
	}

	.marquee-content {
		list-style: none;
		height: 100%;
		display: flex;
		animation: scrolling var(--marquee-animation-duration) linear infinite;
	}

	.marquee-content:hover {
		animation-play-state: paused;
	}

	.marquee-content li {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		flex-shrink: 0;
		flex-basis: var(--marquee-element-width);
		max-height: 100%;
		font-size: calc(var(--marquee-height) * 3 / 4); /* 5rem; */
		white-space: nowrap;
	}

	.marquee-content li i {
		width: 100%;
		color: var(--blue);
		font-size: 5rem;
		cursor: pointer;
		mix-blend-mode: hard-light;
	}

	.marquee-content li i:hover {
		filter: drop-shadow(1px 1px 0.05rem var(--yellow));
	}

	.marquee-content li i:not(:hover) {
		filter: drop-shadow(0);
	}

	@media (max-width: 990px) {
		.marquee-content li a {
			font-size: 12px;
		}

		.marquee-content li i {
			font-size: 2rem;
		}

		.marquee-content li i:hover {
			color: var(--yellow);
			mix-blend-mode: hard-light;
		}

		:root {
			--marquee-width: 100vw;
			--marquee-height: 16vh;
			--marquee-elements-displayed: 3;
		}

		.marquee:before,
		.marquee:after {
			width: 5rem;
		}
	}

	@keyframes scrolling {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(-1 * var(--marquee-element-width) * var(--marquee-elements)));
		}
	}
</style>
