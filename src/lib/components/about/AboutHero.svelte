<script>
	import gsap from 'gsap';
	import { SplitText } from 'gsap/SplitText';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	let { src, alt, title, viewTransitionName } = $props();

	function titleRotate() {
		gsap.registerPlugin(SplitText, ScrollTrigger);

		const split = new SplitText('#title', { type: 'chars' });
		const titleElement = document.getElementById('title');
		const isMobile = window.innerWidth <= 768;

		// initial animation
		gsap.from(split.chars, {
			opacity: 0,
			yPercent: -40,
			duration: 1,
			ease: 'power2.out',
			stagger: {
				each: 0.2,
				from: 'random',
				amount: 0.5
			}
		});

		// 3d rotation on scroll
		if (!isMobile) {
			split.chars.forEach((char, index) => {
				gsap.to(char, {
					scrollTrigger: {
						trigger: titleElement,
						start: `top ${70 - index * 2.75}%`,
						end: `bottom ${70 - index * 2.75}%`,
						scrub: 1
					},
					rotationX: 360,
					transformOrigin: 'center center',
					ease: 'none'
				});
			});
		}

		return () => {
			gsap.killTweensOf(split.chars);
			gsap.killTweensOf(titleElement);
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			split.revert();
		};
	}

	$effect(() => {
		titleRotate();
	});
</script>

<div class="image-hero">
	<picture>
		<source
			srcset="/logos/svelteCode-480.webp 480w, /logos/svelteCode-768.webp 768w, /logos/svelteCode-1200.webp 1200w"
			sizes="(max-inline-size: 480px) 100vw, (max-inline-size: 768px) 100vw, 1200px"
		/>
		<img
			src="/logos/svelteCode-768.webp"
			{alt}
			width="1200"
			height="675"
			decoding="async"
			style="aspect-ratio: 16/9; max-inline-size: 100%; height: auto;"
		/>
	</picture>

	<h1 id="title">
		<span style="view-transition-name: {viewTransitionName || ''};">About</span>
		{title}
	</h1>
</div>

<style>
	.image-hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-left: calc(-50vw + 50%);
		width: 100vw;
		position: relative;
		padding-top: 0;
		aspect-ratio: 21 / 9;
		contain: layout;
		min-height: 50vh;

		@media (width <= 768px) {
			padding-top: 3em;
			min-height: 40vh;
		}

		& picture {
			width: 100%;
			display: block;
			aspect-ratio: 16 / 9;
		}

		& img {
			width: 100%;
			height: auto;
			aspect-ratio: 16 / 9;
			object-fit: cover;
			mask: linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 60%, transparent);
			border-radius: var(--radius);
			max-inline-size: 100%;
			display: block;

			@media (width <= 500px) {
				width: 100%;
				height: 80vw;
			}
		}

		& h1 {
			margin-block: -0.9em;
			padding-bottom: 3em;
			font-size: clamp(var(--h3), 6vw, var(--xxl));
			font-weight: 700;
			text-shadow: 0 0 5px var(--smoke);
			font-family: var(--ultra);
			letter-spacing: -1px;
			color: var(--clr-invert);
			text-shadow:
				0 0 1px var(--clr-invert),
				-5px -5px 0 var(--clr-main),
				5px -5px 0 var(--clr-main),
				-5px 5px 0 var(--clr-main),
				5px 5px 0 var(--clr-main),
				-5px 0 0 var(--clr-main),
				5px 0 0 var(--clr-main),
				0 -5px 0 var(--clr-main),
				0 5px 0 var(--clr-main);

			@media (width >= 768px) {
				:global(& .char) {
					display: inline-block;
					transform-style: preserve-3d;
					perspective: 1000px;
				}
			}

			@media (width <= 1300px) {
				padding-bottom: 2rem;
				mix-blend-mode: normal;
			}

			@media (width <= 1050px) {
				padding-bottom: 1rem;
			}

			@media (width <= 768px) {
				padding-bottom: 0;
				text-shadow:
					0 0 1px var(--clr-invert),
					-2px -2px 0 var(--clr-main),
					2px -2px 0 var(--clr-main),
					-2px 2px 0 var(--clr-main),
					2px 2px 0 var(--clr-main),
					-2px 0 0 var(--clr-main),
					2px 0 0 var(--clr-main),
					0 -2px 0 var(--clr-main),
					0 2px 0 var(--clr-main);
			}
		}
	}

	@keyframes title {
		0% {
			opacity: 0;
			translate: 0 -2em;
		}
		55% {
			opacity: 0;
		}
		100% {
			opacity: 1;
			translate: 0 0;
		}
	}

	::view-transition-old(about-heading) {
		opacity: 0;
	}

	::view-transition-group(about-heading) {
		animation-duration: var(--link-transition-duration);
		animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	@media (width <= 768px) {
		::view-transition-old(about-heading) {
			animation: none;
			opacity: 1;
		}

		::view-transition-new(about-heading) {
			animation: none;
		}
	}
</style>
