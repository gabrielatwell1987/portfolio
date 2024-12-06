<script>
	import { fade } from 'svelte/transition';
	import gsap from 'gsap';

	/** @type {{title: any}} */
	let { title } = $props();

	$effect(() => {
		const letters = gsap.utils.toArray('.title span');

		gsap.from(letters, {
			scale: 0,
			transformOrigin: '50% 50%',
			autoAlpha: 0,
			duration: 0.75,
			delay: 0.25,
			ease: 'sine.inOut',
			stagger: {
				each: 0.15,
				from: 'random'
			}
		});
	});
</script>

<main transition:fade={{ duration: 500 }}>
	<h2 class="title" id="title" aria-label={title}>
		{@html title
			.split('')
			.map((letter) => `<span>${letter}</span>`)
			.join('')}
	</h2>
</main>

<style>
	* {
		position: relative;
	}

	@media (min-width: 300px) {
		.title {
			text-align: center;
			font-family: var(--anta);
			font-size: clamp(2.75rem, 10.5vw, 15rem);
			color: var(--sky);
			letter-spacing: 5px;
			text-shadow: 5px 5px 5px var(--dark-gray);
			filter: drop-shadow(0px 0px 0.75rem var(--white));
			text-transform: uppercase;
			font-kerning: none;
		}

		#title {
			font-kerning: none;
		}
	}

	@media (min-width: 740px) {
		.title {
			letter-spacing: 20px;
			margin: 2rem auto;
		}
	}

	@media (min-width: 990px) {
		.title {
			font-weight: 800;
			text-shadow: 5px 5px 5px var(--dark-gray);
		}
	}
</style>
