<script>
	import gsap from 'gsap';

	/** @type {{title: any}} */
	let { title } = $props();

	$effect(() => {
		const letters = gsap.utils.toArray('.title span');

		const title = gsap.from(letters, {
			scale: 0,
			transformOrigin: '50% 50%',
			autoAlpha: 0,
			duration: 1,
			delay: 0.5,
			ease: 'sine.inOut',
			stagger: {
				each: 0.15,
				from: 'random'
			}
		});

		return () => {
			gsap.killTweensOf(title);
		};
	});
</script>

<main>
	<h1 class="title" id="title" aria-label={title}>
		{@html title
			.split('')
			.map((letter) => `<span>${letter}</span>`)
			.join('')}
	</h1>
</main>

<style>
	* {
		position: relative;
	}

	@media (width >= 300px) {
		.title {
			text-align: center;
			font-family: var(--orbitron);
			font-size: clamp(2.5rem, 10.5vw, 15rem);
			color: var(--text-blue);
			letter-spacing: 5px;
			text-transform: uppercase;
			font-kerning: none;
			margin-top: 5rem;
		}

		#title {
			font-kerning: none;
		}
	}

	@media (width >= 740px) {
		.title {
			letter-spacing: 20px;
			margin: 2rem auto;
		}
	}

	@media (width >= 990px) {
		.title {
			font-weight: 800;
		}
	}
</style>
