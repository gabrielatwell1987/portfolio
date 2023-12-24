<script>
	import GsapIcon from '$lib/components/GsapIcon.svelte';
	import Svelte from '$lib/components/Svelte.svelte';
	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(TextPlugin);

		gsap.to('.title', {
			text: 'TECH STACK',
			duration: 2.5,
			ease: 'expoScale(0.5,7,power1.in)',
			delay: 0.5
		});
	});
</script>

<main>
	<h1 class="title">.... .....</h1>

	<section>
		<a class="gs" href="blog/greensock"><GsapIcon /></a>
		<a class="sk" href="blog/sveltekit"><Svelte /></a>
	</section>

	<div class="links">
		<a href="/posts"><button>Animations</button></a>
	</div>

	<br /><br />
</main>

<style>
	a {
		display: block;
		margin: 0 0 2rem 49%;
	}
	.title {
		font-family: var(--nova);
		color: var(--white);
		font-size: 4rem;
		font-weight: 800;
		text-align: center;
	}
	.gs:hover,
	.sk:hover {
		filter: grayscale(100%);
	}
	@media (min-width: 200px) {
		button {
			background-color: transparent;
			color: var(--smoke);
			border: 1px solid var(--smoke);
			width: 60%;
			margin: 5rem -25%;
			border-radius: 8px;
			cursor: pointer;
			font-size: 1.25rem;
			font-weight: 900;
			letter-spacing: 1px;
		}
		button:hover {
			opacity: 0.8;
			background-color: var(--smoke);
			color: black;
			animation: wiggle 0.5s ease-in-out infinite;
		}
		@keyframes wiggle {
			0% {
				rotate: 0deg;
				translate: 0 0;
			}
			25% {
				rotate: -2deg;
				translate: -5px 0;
			}
			80% {
				rotate: 2deg;
				translate: 5px 0;
			}
		}
		@media (min-width: 990px) {
			button {
				width: 20%;
				margin: 0 -8%;
			}
		}
	}
</style>
