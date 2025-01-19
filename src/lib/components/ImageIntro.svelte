<script>
	import gsap from 'gsap';
	import Image from '$lib/components/Image.svelte';

	let { src, alt, title, text, width } = $props();

	$effect(() => {
		const img = document.querySelector('.img');

		const tl = gsap.timeline();

		tl.from(img, { autoAlpha: 0, duration: 3, ease: 'power4.inOut' });

		return () => {
			tl.kill();
		};
	});
</script>

<main aria-label="go to the hero page">
	<section>
		<h1 class="h1">{title}</h1>

		<div class="img">
			<a href="/about/hero">
				<Image {src} {alt} {width} />
			</a>
		</div>

		<p class="p">{text}</p>
	</section>
</main>

<style>
	main {
		width: fit-content;
		margin-inline: auto;
		margin-top: 7em;
		overflow: hidden;

		section {
			.h1 {
				color: var(--blue);
				font-family: var(--anta);
				font-size: clamp(3rem, 7vw, 6rem);
				letter-spacing: 22px;
				text-align: center;
				margin: 0;
				text-transform: lowercase;
			}

			.img {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: 2rem;
				will-change: clip-path;

				a {
					width: fit-content;
					background: transparent;
				}
			}

			.p {
				color: var(--smoke);
				letter-spacing: 2px;
				font-family: var(--bronova);
				font-size: clamp(1.5rem, 2vw, 1.75rem);
				text-align: center;
			}
		}
	}
</style>
