<script>
	import Image from '$lib/components/layout/Image.svelte';

	let isPaused = $state(false);

	const skills = [
		{
			src: 'skills/HTML-Dark.svg',
			alt: 'html',
			href: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
		},
		{
			src: 'skills/CSS-Dark.svg',
			alt: 'css',
			href: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
		},
		{
			src: 'skills/JavaScript-Dark.svg',
			alt: 'javascript',
			href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
		},
		{ src: 'skills/Svelte-Dark.svg', alt: 'svelte', href: 'https://svelte.dev' },
		{ src: 'skills/GSAP-Dark.svg', alt: 'gsap', href: 'https://gsap.com' },
		{ src: 'skills/NodeJS-Dark.svg', alt: 'nodejs', href: 'https://nodejs.org' },
		{
			src: 'github',
			alt: 'github',
			href: 'https://github.com',
			svg: `<svg width="100%" height="100%" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M128.001 30C72.7791 30 28 74.7708 28 130.001C28 174.184 56.6533 211.668 96.3867 224.891C101.384 225.817 103.219 222.722 103.219 220.081C103.219 217.696 103.126 209.819 103.083 201.463C75.2631 207.512 69.3927 189.664 69.3927 189.664C64.8437 178.105 58.2894 175.032 58.2894 175.032C49.2163 168.825 58.9733 168.953 58.9733 168.953C69.0151 169.658 74.3026 179.258 74.3026 179.258C83.2217 194.546 97.6965 190.126 103.403 187.571C104.301 181.107 106.892 176.696 109.752 174.199C87.5405 171.67 64.1913 163.095 64.1913 124.778C64.1913 113.86 68.0977 104.939 74.4947 97.9362C73.4564 95.4175 70.0335 85.2465 75.4635 71.4722C75.4635 71.4722 83.8609 68.7845 102.971 81.7226C110.948 79.5069 119.502 78.3958 128.001 78.3577C136.499 78.3958 145.061 79.5069 153.052 81.7226C172.139 68.7845 180.525 71.4722 180.525 71.4722C185.968 85.2465 182.544 95.4175 181.505 97.9362C187.917 104.939 191.797 113.86 191.797 124.778C191.797 163.187 168.403 171.644 146.135 174.119C149.722 177.223 152.918 183.308 152.918 192.638C152.918 206.018 152.802 216.787 152.802 220.081C152.802 222.742 154.602 225.86 159.671 224.878C199.383 211.64 228 174.169 228 130.001C228 74.7708 183.227 30 128.001 30Z" fill="var(--clr-main)"/>
            </svg>`
		},
		{
			src: 'markdown',
			alt: 'markdown',
			href: 'https://markdownguide.org',
			svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 256 256">
                <path stroke="var(--clr-main)" stroke-width="10" d="M217 69H39C33.4772 69 29 73.4772 29 79V177C29 182.523 33.4772 187 39 187H217C222.523 187 227 182.523 227 177V79C227 73.4772 222.523 69 217 69Z"/>
                <path fill="var(--clr-main)" d="M54 162V94H74L94 119L114 94H134V162H114V123L94 148L74 123V162H54ZM179 162L149 129H169V94H189V129H209L179 162Z"/>
            </svg>`
		},
		{
			src: 'tailwind',
			alt: 'tailwind css',
			href: 'https://tailwindcss.com',
			svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 256 256">
                <path fill="url(#paint0_linear)" fill-rule="evenodd" d="M83 110C88.9991 86.0009 104.001 74 128 74C164 74 168.5 101 186.5 105.5C198.501 108.501 209 104.001 218 92C212.001 115.999 196.999 128 173 128C137 128 132.5 101 114.5 96.5C102.499 93.4991 92 97.9991 83 110ZM38 164C43.9991 140.001 59.0009 128 83 128C119 128 123.5 155 141.5 159.5C153.501 162.501 164 158.001 173 146C167.001 169.999 151.999 182 128 182C92 182 87.5 155 69.5 150.5C57.4991 147.499 47 151.999 38 164Z" clip-rule="evenodd"/>
                <defs><linearGradient id="paint0_linear" x1="86.5" x2="163.5" y1="74" y2="185.5" gradientUnits="userSpaceOnUse"><stop stop-color="var(--clr-blue)"/><stop offset="1" stop-color="#14C6B7"/></linearGradient></defs>
            </svg>`
		}
	];

	const duplicatedSkills = [...skills, ...skills];
</script>

<div class="slider-wrapper">
	<div
		class="slider"
		class:paused={isPaused}
		onmouseenter={() => (isPaused = true)}
		onmouseleave={() => (isPaused = false)}
		role="region"
		aria-label="skills-carousel"
	>
		<div class="slider-track">
			{#each duplicatedSkills as skill, i (i)}
				<a
					href={skill.href}
					target="_blank"
					rel="noopener noreferrer"
					class="slide"
					aria-label={skill.alt}
				>
					{#if skill.svg}
						<div class="icon">
							{@html skill.svg}
						</div>
					{:else}
						<div class="icon">
							<Image
								src={skill.src}
								alt={skill.alt}
								aspectRatio="1/1"
								style="width: 100%; height: 100%;"
							/>
						</div>
					{/if}
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	.slider-wrapper {
		width: 85%;
		overflow: hidden;
		background-color: var(--clr-bg);
		padding: 2em 0;
		position: relative;
		margin-inline: auto;
		margin-block: 5em;
		margin-top: 7em;
		z-index: 5;

		@media (width <= 768px) {
			width: 90%;
			padding: 3em 0;
			margin-block: 3em;
		}

		&::before,
		&::after {
			content: '';
			position: absolute;
			top: 0;
			width: 100px;
			height: 100%;
			z-index: 2;
			pointer-events: none;
		}

		&::before {
			left: 0;
			background: linear-gradient(to right, var(--clr-bg), transparent);
		}

		&::after {
			right: 0;
			background: linear-gradient(to left, var(--clr-bg), transparent);
		}

		& .slider {
			width: 100%;
			position: relative;

			&.paused .slider-track {
				animation-play-state: paused;
			}

			& .slider-track {
				display: flex;
				gap: 3em;
				animation: scroll 30s linear infinite;
				will-change: transform;

				@media (prefers-reduced-motion: reduce) {
					animation: none;
				}

				& .slide {
					flex-shrink: 0;
					width: 100px;
					height: 100px;
					display: flex;
					align-items: center;
					justify-content: center;
					transition: transform 0.3s ease;

					&:hover {
						transform: scale(1.15);
					}

					&:nth-child(odd):hover {
						rotate: -5deg;
					}

					&:nth-child(even):hover {
						rotate: 5deg;
					}

					@media (width <= 768px) {
						width: 80px;
						height: 80px;
					}

					& .icon {
						width: 100%;
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						filter: grayscale(20%);
						transition: filter 0.3s ease;

						&:hover {
							filter: grayscale(0%);
						}
					}
				}
			}
		}
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}
</style>
