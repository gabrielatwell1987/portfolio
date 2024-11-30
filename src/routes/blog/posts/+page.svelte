<script>
	import CSS from './css.md';
	import GSAP from './gsap.md';
	import { fade } from 'svelte/transition';
	import Button from '$lib/components/Button.svelte';
	import copy from 'copy-to-clipboard';
	import SEO from '$lib/data/SEO.svelte';
	import Card from '$lib/components/Card.svelte';
	import Image from '$lib/components/Image.svelte';

	$effect(() => {
		const codeBlocks = document.querySelectorAll('pre');

		codeBlocks.forEach((block) => {
			block.style.backgroundColor = '#222';
			block.style.width = '75%';
			block.style.margin = '2rem auto';
			block.style.padding = '1rem';
			block.style.borderRadius = '12px';

			const copyPrompt = document.createElement('div');
			copyPrompt.className = 'copy-prompt';
			block.classList.add('copy-prompt');
			copyPrompt.style.cursor = 'pointer';
			copyPrompt.style.marginTop = '1%';
			copyPrompt.style.marginLeft = '2%';
			copyPrompt.style.opacity = '0.25';
			// copyPrompt.style.fontSize = 'clamp(1rem, 2vw, 1.75rem)';

			const mediaQuery = window.matchMedia('(max-width: 768px)');
			function handleMediaQueryChange(e) {
				if (e.matches) {
					// For screens 768px or less
					block.style.width = '100%';
					block.style.padding = '0';
					copyPrompt.style.marginTop = '3%';
					copyPrompt.style.marginLeft = '5%';
				} else {
					copyPrompt.style.marginTop = '1%';
					copyPrompt.style.marginLeft = '2%';
				}
			}
			handleMediaQueryChange(mediaQuery);
			mediaQuery.addListener(handleMediaQueryChange);

			const copyPromptText = document.createElement('p');
			copyPromptText.innerHTML = 'Copy';
			copyPromptText.className = 'copy-prompt-text';

			copyPromptText.style.fontSize = 'clamp(1rem, 2vw, 1.75rem)';
			copyPromptText.style.fontWeight = '900';
			copyPromptText.style.marginTop = '.5rem';
			copyPromptText.style.marginLeft = '-.1rem';
			copyPromptText.style.color = '#fff';
			copyPromptText.style.cursor = 'pointer';

			const copyIcon = document.createElement('img');
			copyIcon.src = '/icons/ic_copy.svg';
			copyIcon.style.opacity = '.9';
			copyIcon.style.cursor = 'pointer';

			copyIcon.addEventListener('mouseenter', () => {
				copyIcon.style.opacity = '1';
			});

			copyIcon.addEventListener('mouseleave', () => {
				copyIcon.style.opacity = '.75';
			});

			copyPrompt.appendChild(copyIcon);
			copyPrompt.appendChild(copyPromptText);
			block.appendChild(copyPrompt);

			copyPrompt.addEventListener('click', () => {
				copy(block.querySelector('code').textContent);

				copyPromptText.innerHTML = 'Copied!';
				setTimeout(() => {
					copyPromptText.innerHTML = 'Copy';
				}, 1000);
			});

			const codeElement = block.querySelector('code');
			if (codeElement) {
				codeElement.style.fontSize = 'clamp(1rem, 2vw, 1.5rem)';
				codeElement.style.lineHeight = '1.5';
				codeElement.style.fontFamily = 'monospace';
			}
		});

		console.log('Web animations page');
	});
</script>

<SEO
	title="Web animation techniques"
	description="Web techniques"
	keywords="animation techniques, web techniques for animation"
/>

<section transition:fade={{ delay: 250, duration: 300 }}>
	<div class="css">
		<div class="image">
			<div class="skillImg">
				<Image src="/skills/CSS-Dark.svg" alt="css" />
			</div>

			<br />

			<CSS aria-label="css" />
		</div>
	</div>

	<div class="gsap">
		<div class="skillImg">
			<Image src="/skills/GSAP-Dark.svg" alt="gsap" />
		</div>

		<br />

		<GSAP aria-label="greensock" />
	</div>

	<article class="card">
		<Card
			src="/photos/cartoonGabe.webp"
			alt="old school"
			href="/projects"
			title="gabeAtwell"
			desc="Trying to make the internet look better.. one website at a time."
			button="Projects"
		/>
	</article>

	<Button href="/blog" title="Back" />
</section>

<style>
	section {
		background: url('/logos/bg1.webp') no-repeat center center/cover fixed;

		.card {
			display: flex;
			justify-content: center;
			background: transparent;
			box-shadow: none;
		}

		.css {
			margin-bottom: 15%;

			.image {
				margin-top: 5%;
			}
		}

		.gsap {
			margin-top: -10%;
			margin-bottom: 5%;

			.skillImg {
				margin-inline: auto;
			}
		}
	}
</style>
