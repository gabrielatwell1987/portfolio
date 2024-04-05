<script>
	import CSS from './css.md';
	import GSAP from './gsap.md';
	import { blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

<section
	in:blur={{ delay: 350, duration: 1500, easing: quintOut, amount: '1rem' }}
	title="a flower background"
>
	<!-- links to my markdown files -->
	<h1 class="title">CSS</h1>
	<CSS />

	<h1 class="title">GSAP</h1>
	<GSAP />

	<!-- back button -->
	<a class="blog-btn-link" href="/blog"><button class="blog-btn" aria-label="blog">Back</button></a>
</section>

<style>
	/* desktop */
	.title {
		text-align: center;
		font-size: 6rem;
		font-weight: 900;
		color: var(--white);
		font-family: var(--anta);
		letter-spacing: 2px;
		margin-top: 5rem;
		mix-blend-mode: difference;
	}
	section {
		background: url('/logos/dead-flower.png') no-repeat center center/cover fixed;
	}

	@media (min-width: 200px) {
		.blog-btn {
			background-color: transparent;
			color: var(--white);
			border: 1px solid var(--white);
			margin: 0 auto;
			border-radius: 8px;
			cursor: pointer;
			font-size: 1.2rem;
			letter-spacing: 1px;
			width: 50%;
			font-family: var(--lexend);
			border-radius: 0.75rem;
			filter: drop-shadow(0 0 0.75rem var(--smoke));
			transition: 750ms;
			outline: 3px solid currentColor;
			outline-offset: -7px;
			mix-blend-mode: difference;
			padding: 1rem 1.75rem;
			margin-top: 10%;
			margin-bottom: 2%;
			user-select: none;
		}

		.blog-btn:hover,
		.blog-btn:focus {
			opacity: 0.8;
			outline-offset: 0px;
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
	}

	@media (min-width: 500px) {
		.blog-btn {
			width: 35%;
		}
	}

	@media (min-width: 720px) {
		.blog-btn {
			width: 30%;
		}
	}

	@media (min-width: 990px) {
		.blog-btn {
			width: 20%;
		}
	}

	@media (min-width: 1200px) {
		.blog-btn {
			width: 15%;
		}
	}
</style>
