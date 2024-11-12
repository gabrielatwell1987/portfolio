<script>
	import CSS from './css.md';
	import GSAP from './gsap.md';
	import { fade } from 'svelte/transition';
	import Button from '$lib/components/Button.svelte';
	import copy from 'copy-to-clipboard';
	import SEO from '$lib/data/SEO.svelte';
	import Card from '$lib/components/Card.svelte';

	$effect(() => {
		const codeBlocks = document.querySelectorAll('pre');

		codeBlocks.forEach((block) => {
			const copyPrompt = document.createElement('div');
			copyPrompt.className = 'copy-prompt';
			block.classList.add('copy-prompt');
			copyPrompt.style.cursor = 'pointer';
			copyPrompt.style.marginTop = '1%';
			copyPrompt.style.marginLeft = '2%';
			copyPrompt.style.opacity = '0.25';

			const mediaQuery = window.matchMedia('(max-width: 768px)');
			function handleMediaQueryChange(e) {
				if (e.matches) {
					// For screens 768px or less
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

			copyPromptText.style.fontWeight = '700';
			copyPromptText.style.marginTop = '.5rem';
			copyPromptText.style.marginLeft = '-.1rem';

			copyPromptText.addEventListener('mouseenter', () => {
				copyPromptText.style.color = 'white';
			});

			copyPromptText.addEventListener('mouseleave', () => {
				copyPromptText.style.color = 'var(--white)';
			});

			const copyIcon = document.createElement('img');
			copyIcon.src = '/icons/ic_copy.svg';
			copyIcon.style.opacity = '.9';

			copyIcon.addEventListener('mouseenter', () => {
				copyIcon.style.opacity = '1';
			});

			copyIcon.addEventListener('mouseleave', () => {
				copyIcon.style.opacity = '.75';
			});

			copyPrompt.appendChild(copyIcon);
			copyPrompt.appendChild(copyPromptText);
			block.appendChild(copyPrompt);

			// block.querySelector('.copy-prompt > img').addEventListener('click', (evt) => {
			// 	copy(block.querySelector('code').textContent);

			// 	block.querySelector('.copy-prompt > p').innerHTML = 'Copied!';

			// 	setTimeout(() => {
			// 		block.querySelector('.copy-prompt > p').innerHTML = 'Copy';
			// 	}, 1000);
			// });

			copyPrompt.addEventListener('click', () => {
				copy(block.querySelector('code').textContent);

				copyPromptText.innerHTML = 'Copied!';
				setTimeout(() => {
					copyPromptText.innerHTML = 'Copy';
				}, 1000);
			});
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
		<h1 class="title">CSS</h1>
		<CSS aria-label="css" />
	</div>

	<div class="gsap">
		<h2 class="title">GSAP</h2>
		<GSAP aria-label="greensock" />
	</div>

	<article class="card">
		<Card
			src="/photos/ornate1.webp"
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
	.title {
		text-align: center;
		font-size: clamp(4rem, 7.5vw, 15rem);
		font-weight: 900;
		color: var(--white);
		font-family: var(--orbitron);
		letter-spacing: 10px;
		margin-top: 5rem;
		mix-blend-mode: difference;
	}

	article.card {
		display: flex;
		justify-content: center;
		background: transparent;
	}

	section {
		background: url('/logos/bg1.webp') no-repeat center center/cover fixed;
	}

	.css {
		margin-bottom: 15%;
	}

	.gsap {
		margin-bottom: 5%;
	}
</style>
