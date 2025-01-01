<script>
	import gsap from 'gsap';
	import Image from '$lib/components/Image.svelte';

	let { src, alt, title, text } = $props();

	$effect(() => {
		const img = document.querySelector('.img');
		const h1 = document.querySelector('.h1');
		const p = document.querySelector('.p');

		const tl = gsap.timeline();

		tl.fromTo(
			h1,
			{
				yPercent: -100,
				opacity: 0
			},
			{ yPercent: -100, duration: 4, opacity: 1, ease: 'power2.out' },
			'+=3'
		)
			.fromTo(
				p,
				{
					yPercent: 200,
					opacity: 0
				},
				{ yPercent: 200, duration: 4, opacity: 1, ease: 'power2.out' },
				'<'
			)
			.fromTo(
				img,
				{
					scale: 5,
					ease: 'power2.out'
				},
				{
					scale: 1,
					duration: 5,
					ease: 'power2.out'
				},
				0
			);
	});
</script>

<main>
	<section>
		<h1 class="h1">{title}</h1>

		<div class="img">
			<Image {src} {alt} />
		</div>

		<p class="p">{text}</p>
	</section>
</main>

<style>
	main {
		width: fit-content;
		margin-inline: auto;
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
