<script>
	import CSS from './css.md';
	import GSAP from './gsap.md';
	import { blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Button from '$lib/components/Button.svelte';
	import copy from 'copy-to-clipboard';
	import { onMount } from 'svelte';
	import SEO from '$lib/data/SEO.svelte';
	import Card2 from '$lib/components/Card2.svelte';

	onMount(() => {
		const codeBlocks = document.querySelectorAll('pre');

		codeBlocks.forEach((block) => {
			const copyPrompt = document.createElement('div');
			copyPrompt.className = 'copy-prompt';
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
			copyPromptText.style.fontWeight = '700';
			copyPromptText.style.marginTop = '.5rem';
			copyPromptText.style.marginLeft = '-.1rem';

			const copyIcon = document.createElement('img');
			copyIcon.src = '/icons/ic_copy.svg';

			copyPrompt.appendChild(copyIcon);
			copyPrompt.appendChild(copyPromptText);

			block.appendChild(copyPrompt);
			block.querySelector('.copy-prompt > img').addEventListener('click', (evt) => {
				copy(block.querySelector('code').textContent);

				block.querySelector('.copy-prompt > p').innerHTML = 'Copied!';

				setTimeout(() => {
					block.querySelector('.copy-prompt > p').innerHTML = 'Copy';
				}, 1000);
			});
		});
	});

	$: console.log('Web animations page');
</script>

<SEO title="CSS & GSAP" description="Web techniques" keywords="animation techniques" />

<section in:blur={{ delay: 350, duration: 1500, easing: quintOut, amount: '1rem' }}>
	<div class="css">
		<h1 class="title">CSS</h1>
		<CSS aria-label="css" />
	</div>

	<div class="gsap">
		<h1 class="title">GSAP</h1>
		<GSAP aria-label="greensock" />
	</div>

	<article class="card">
		<Card2
			src="/photos/ornate1.webp"
			alt="old school"
			h1="gabeAtwell"
			p="Trying to make the internet look better.. one website at a time."
			button="Work"
		/>
	</article>

	<a href="/blog"><Button title="Back" /></a>
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

	a {
		text-decoration: none;
	}

	.css {
		margin-bottom: 15%;
	}

	.gsap {
		margin-bottom: 5%;
	}
</style>
