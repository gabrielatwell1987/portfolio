<script>
	import CSS from './css.md';
	import GSAP from './gsap.md';
	import { blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Button from '$lib/components/Button.svelte';
	import copy from 'copy-to-clipboard';
	import { onMount } from 'svelte';
	import Popover from '$lib/components/Popover.svelte';

	onMount(() => {
		const codeBlocks = document.querySelectorAll('pre');
		const section = document.querySelector('section');

		codeBlocks.forEach((block) => {
			const copyPrompt = document.createElement('div');
			copyPrompt.className = 'copy-prompt';
			copyPrompt.style.cursor = 'pointer';
			copyPrompt.style.marginTop = '1%';
			copyPrompt.style.marginLeft = '2%';
			copyPrompt.style.opacity = '0.25';

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

		console.log(section);
	});
</script>

<svelte:head>
	<title>CSS & GSAP</title>
	<meta name="description" content="Web Animations" />
	<meta name="keywords" content="CSS, GSAP" />
</svelte:head>

<article class="container">
	<Popover text="Animation Basics" />
</article>

<section in:blur={{ delay: 350, duration: 1500, easing: quintOut, amount: '1rem' }}>
	<!-- links to my markdown files -->
	<div class="css">
		<h1 class="title">CSS</h1>
		<CSS />
	</div>

	<div class="gsap">
		<h1 class="title">GSAP</h1>
		<GSAP />
	</div>

	<!-- back button -->
	<a href="/blog"><Button title="Back" /></a>
</section>

<style>
	.title {
		text-align: center;
		font-size: clamp(4rem, 7.5vw, 15rem);
		font-weight: 900;
		color: var(--white);
		font-family: var(--anta);
		letter-spacing: 10px;
		margin-top: 5rem;
		mix-blend-mode: difference;
	}
	section {
		background: url('/logos/circle-scatter-bg.svg') no-repeat center center/cover fixed;
	}

	a {
		text-decoration: none;
	}

	.css {
		margin-bottom: 15%;
	}

	.container {
		background: transparent;
		margin-bottom: -15%;
	}

	@media (max-width: 750px) {
		.container {
			margin-bottom: -50%;
		}
	}

	@media (max-width: 500px) {
		.container {
			margin-bottom: -75%;
		}
	}
</style>
