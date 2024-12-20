<script>
	import CSS from './css.md';
	import GSAP from './gsap.md';
	import { fade } from 'svelte/transition';
	import Button from '$lib/components/Button.svelte';
	// import copy from 'copy-to-clipboard';
	import SEO from '$lib/data/SEO.svelte';
	import Card from '$lib/components/Card.svelte';
	import Image from '$lib/components/Image.svelte';

	let duration = $state(300);
	let delay = $state(100);

	$effect(() => {
		// const codeBlocks = document.querySelectorAll('pre');

		// Add a single CSS class for the styles
		// codeBlocks.forEach((block) => {
		// block.classList.add('code-block');

		// // Create the copy prompt once
		// const copyPrompt = document.createElement('div');
		// copyPrompt.className = 'copy-prompt';
		// copyPrompt.innerHTML = `
		// 	<img src="/icons/ic_copy.svg" class="copy-icon" alt="Copy">
		// 	<p class="copy-prompt-text">Copy</p>
		// `;

		// block.appendChild(copyPrompt);

		// // Add copy functionality
		// copyPrompt.addEventListener('click', () => {
		// 	const codeElement = block.querySelector('code');
		// 	if (codeElement) {
		// 		navigator.clipboard.writeText(codeElement.textContent || '');
		// 		const textElement = copyPrompt.querySelector('.copy-prompt-text');
		// 		textElement.textContent = 'Copied!';
		// 		setTimeout(() => (textElement.textContent = 'Copy'), 1500);
		// 	}
		// });
		// });

		console.log(GSAP, CSS);
	});
</script>

<SEO
	title="Web animation techniques"
	description="Web techniques"
	keywords="animation techniques, web techniques for animation"
/>

<section transition:fade={{ delay: delay, duration: duration }}>
	<div class="css">
		<div class="image">
			<div class="skillImg">
				<Image src="/skills/CSS-Purple.webp" alt="css" />
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
			src="/logos/a-dev.webp"
			alt="old school"
			href="/projects"
			title="frontend"
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

				.skillImg {
					width: 25%;
					margin-inline: auto;
				}
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

	@media (max-width: 500px) {
		section {
			.css {
				.image {
					.skillImg {
						width: 75%;
					}
				}
			}
		}
	}
</style>
