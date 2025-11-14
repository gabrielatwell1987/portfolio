<script>
	import Image from '$lib/components/layout/Image.svelte';

	/** @type {{title: any}} */
	let { title } = $props();
</script>

<section class="skills-container">
	<div class="skills-inner" aria-label="skills">
		<h3 class="skills-title">{title}</h3>

		<ul class="skills">
			<li>
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/HTML"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div class="icons">
						<Image
							src="skills/HTML-Dark.svg"
							alt="html"
							aspectRatio="1/1"
							style="width: clamp(70px, 5.5vw, 200px);"
						/>
					</div></a
				>
			</li>

			<li>
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/CSS"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div class="icons">
						<Image
							src="skills/CSS-Dark.svg"
							alt="css"
							aspectRatio="1/1"
							style="width: clamp(70px, 5.5vw, 200px);"
						/>
					</div></a
				>
			</li>

			<li>
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div class="icons">
						<Image
							src="skills/JavaScript-Dark.svg"
							alt="javascript"
							aspectRatio="1/1"
							style="width: clamp(70px, 5.5vw, 200px);"
						/>
					</div></a
				>
			</li>

			<li>
				<a href="https://svelte.dev" target="_blank" rel="noopener noreferrer">
					<div class="icons">
						<Image
							src="skills/Svelte-Dark.svg"
							alt="svelte"
							aspectRatio="1/1"
							style="width: clamp(70px, 6vw, 200px);"
						/>
					</div></a
				>
			</li>

			<li>
				<a href="https://gsap.com" target="_blank" rel="noopener noreferrer">
					<div class="icons">
						<Image
							src="skills/GSAP-Dark.svg"
							alt="gsap"
							aspectRatio="1/1"
							style="width: clamp(70px, 6vw, 200px);"
						/>
					</div></a
				>
			</li>

			<li>
				<a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
					<div class="icons">
						<Image
							src="skills/NodeJS-Dark.svg"
							alt="nodejs"
							aspectRatio="1/1"
							style="width: clamp(70px, 6vw, 200px);"
						/>
					</div></a
				>
			</li>

			<li>
				<a
					href="https://github.com"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="github link"
				>
					<div class="icons">
						<svg
							width="256"
							height="256"
							viewBox="0 0 256 256"
							fill="none"
							style="width: clamp(70px, 6vw, 200px); height: clamp(70px, 6vw, 200px);"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="256" height="256" rx="60" fill="none" />
							<path
								d="M128.001 30C72.7791 30 28 74.7708 28 130.001C28 174.184 56.6533 211.668 96.3867 224.891C101.384 225.817 103.219 222.722 103.219 220.081C103.219 217.696 103.126 209.819 103.083 201.463C75.2631 207.512 69.3927 189.664 69.3927 189.664C64.8437 178.105 58.2894 175.032 58.2894 175.032C49.2163 168.825 58.9733 168.953 58.9733 168.953C69.0151 169.658 74.3026 179.258 74.3026 179.258C83.2217 194.546 97.6965 190.126 103.403 187.571C104.301 181.107 106.892 176.696 109.752 174.199C87.5405 171.67 64.1913 163.095 64.1913 124.778C64.1913 113.86 68.0977 104.939 74.4947 97.9362C73.4564 95.4175 70.0335 85.2465 75.4635 71.4722C75.4635 71.4722 83.8609 68.7845 102.971 81.7226C110.948 79.5069 119.502 78.3958 128.001 78.3577C136.499 78.3958 145.061 79.5069 153.052 81.7226C172.139 68.7845 180.525 71.4722 180.525 71.4722C185.968 85.2465 182.544 95.4175 181.505 97.9362C187.917 104.939 191.797 113.86 191.797 124.778C191.797 163.187 168.403 171.644 146.135 174.119C149.722 177.223 152.918 183.308 152.918 192.638C152.918 206.018 152.802 216.787 152.802 220.081C152.802 222.742 154.602 225.86 159.671 224.878C199.383 211.64 228 174.169 228 130.001C228 74.7708 183.227 30 128.001 30ZM65.4536 172.453C65.2333 172.95 64.4517 173.099 63.7396 172.758C63.0143 172.432 62.6069 171.754 62.8421 171.256C63.0574 170.744 63.8406 170.602 64.5643 170.945C65.2913 171.271 65.7053 171.955 65.4536 172.453ZM70.3725 176.842C69.8956 177.285 68.9633 177.079 68.3307 176.38C67.6766 175.683 67.554 174.751 68.0376 174.302C68.5294 173.86 69.4336 174.067 70.0893 174.764C70.7434 175.47 70.8709 176.395 70.3725 176.842ZM73.7471 182.458C73.1344 182.884 72.1325 182.485 71.5132 181.595C70.9004 180.706 70.9004 179.64 71.5264 179.212C72.1474 178.785 73.1344 179.169 73.762 180.052C74.373 180.956 74.373 182.023 73.7471 182.458ZM79.4542 188.962C78.9061 189.566 77.7386 189.404 76.8841 188.579C76.0098 187.773 75.7663 186.629 76.3161 186.024C76.8709 185.418 78.045 185.589 78.9061 186.407C79.7738 187.211 80.0387 188.364 79.4542 188.962ZM86.8301 191.157C86.5883 191.941 85.4639 192.297 84.3312 191.964C83.2002 191.621 82.46 190.704 82.6885 189.912C82.9237 189.124 84.053 188.753 85.194 189.109C86.3234 189.45 87.0652 190.361 86.8301 191.157ZM95.2242 192.089C95.2523 192.913 94.2919 193.597 93.1029 193.612C91.9073 193.639 90.9402 192.971 90.9269 192.16C90.9269 191.327 91.8659 190.65 93.0615 190.63C94.2505 190.607 95.2242 191.269 95.2242 192.089ZM103.47 191.773C103.613 192.577 102.787 193.404 101.606 193.624C100.445 193.836 99.3702 193.339 99.2229 192.541C99.0788 191.716 99.92 190.89 101.079 190.676C102.262 190.471 103.32 190.955 103.47 191.773Z"
								fill="var(--clr-main)"
							/>
						</svg>
					</div></a
				>
			</li>

			<li>
				<a
					href="https://markdownguide.org"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="markdown link"
				>
					<div class="icons">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="256"
							height="256"
							fill="none"
							style="width: clamp(70px, 6vw, 200px); height: clamp(70px, 6vw, 200px);"
							viewBox="0 0 256 256"
							><rect width="256" height="256" fill="none" /><path
								stroke="var(--clr-main)"
								stroke-width="10"
								d="M217 69H39C33.4772 69 29 73.4772 29 79V177C29 182.523 33.4772 187 39 187H217C222.523 187 227 182.523 227 177V79C227 73.4772 222.523 69 217 69Z"
							/><path
								fill="var(--clr-main)"
								d="M54 162V94H74L94 119L114 94H134V162H114V123L94 148L74 123V162H54ZM179 162L149 129H169V94H189V129H209L179 162Z"
							/></svg
						>
					</div></a
				>
			</li>

			<li>
				<a
					href="https://tailwindcss.com"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="tailwind css link"
				>
					<div class="icons">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="256"
							height="256"
							fill="none"
							style="width: clamp(70px, 6vw, 200px); height: clamp(70px, 6vw, 200px);"
							viewBox="0 0 256 256"
							><rect width="256" height="256" fill="none" /><path
								fill="url(#paint0_linear_2_119)"
								fill-rule="evenodd"
								d="M83 110C88.9991 86.0009 104.001 74 128 74C164 74 168.5 101 186.5 105.5C198.501 108.501 209 104.001 218 92C212.001 115.999 196.999 128 173 128C137 128 132.5 101 114.5 96.5C102.499 93.4991 92 97.9991 83 110ZM38 164C43.9991 140.001 59.0009 128 83 128C119 128 123.5 155 141.5 159.5C153.501 162.501 164 158.001 173 146C167.001 169.999 151.999 182 128 182C92 182 87.5 155 69.5 150.5C57.4991 147.499 47 151.999 38 164Z"
								clip-rule="evenodd"
							/><defs
								><linearGradient
									id="paint0_linear_2_119"
									x1="86.5"
									x2="163.5"
									y1="74"
									y2="185.5"
									gradientUnits="userSpaceOnUse"
									><stop stop-color="var(--clr-blue)" /><stop
										offset="1"
										stop-color="#14C6B7"
									/></linearGradient
								></defs
							></svg
						>
					</div></a
				>
			</li>
		</ul>
	</div>
</section>

<style>
	.skills-container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 10em;

		@media (width >= 768px) and (width <= 990px) {
			padding-top: 3em;
			margin-top: -15em;
			margin-bottom: -10em;
		}

		@media (width <= 768px) {
			margin-block: -2em;
			padding-inline: 1rem;
		}
	}

	.skills-inner {
		border: none;
		display: grid;
		gap: 1em;
		width: 100%;
		place-items: center;

		.skills {
			display: grid;
			grid-template-columns: repeat(3, minmax(100px, 1fr));
			gap: 1rem;
			align-items: center;
			justify-content: center;
			width: min(40%, 800px);
			margin-inline: auto;

			& .icons {
				padding: 0.5rem;

				&:focus,
				&:focus-visible {
					outline: none;
					box-shadow: none;
					background-color: transparent;
				}

				&:hover {
					transform: scale(1.1);
					transition: transform 0.25s ease-out;
				}

				&:nth-child(odd):hover {
					rotate: -5deg;
					transition: rotate 0.15s ease-out;
				}

				&:nth-child(even):hover {
					rotate: 5deg;
					transition: rotate 0.15s ease-out;
				}

				& svg {
					margin: 0;
				}
			}

			& li {
				list-style: none;
				width: 75%;
				margin-inline: auto;
			}
		}

		.skills-title {
			font-family: var(--anta);
			font-size: clamp(1.75rem, 3vw, 5rem);
			color: var(--off-white);
			letter-spacing: -1px;
			text-align: center;
		}

		@media (width <= 768px) {
			.skills {
				grid-template-columns: repeat(2, 1fr);
				gap: 1rem;
				width: min(80%, 600px);

				& li {
					width: 100%;
				}
			}
		}

		@media (width <= 400px) {
			.skills {
				grid-template-columns: repeat(2, 1fr);
				gap: 0.5rem;
				width: 90;
				margin-left: 0;
				margin-inline: auto;

				& li {
					width: 100%;
				}

				& .icons {
					scale: 1.2;
				}
			}

			.skills-title {
				margin-left: 0;
				text-align: center;
			}
		}
	}
</style>
