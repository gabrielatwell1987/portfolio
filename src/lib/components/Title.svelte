<script>
	import { gsap } from 'gsap';
	import SplitType from 'split-type';

	/** @type {{title: any}} */
	let { title } = $props();

	$effect(() => {
		gsap.set('.title', { autoAlpha: 0 });

		const titleText = new SplitType('#title', { types: 'chars' });

		gsap.from(titleText.chars, {
			duration: 5,
			scale: 0,
			opacity: 0,
			stagger: {
				amount: 0.25,
				grid: 'auto',
				from: 'random'
			},
			ease: 'elastic.out(0.1, 0.2)'
		});

		gsap.to('.title', { autoAlpha: 1 });
	});
</script>

<main>
	<h1 class="title" id="title" aria-label={title}>{title}</h1>
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
			color: var(--blue);
			letter-spacing: 5px;
			text-shadow: 0px 0px 50px var(--white);
			text-transform: uppercase;
			filter: drop-shadow(0px 0px 0.75rem var(--white));
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
			text-shadow: -5px 5px 4px var(--dark-gray);
		}
	}
</style>
