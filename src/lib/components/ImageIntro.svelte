<script>
	import Image from '$lib/components/Image.svelte';
	import { goto } from '$app/navigation';

	let { src, alt, title, text, width } = $props();

	async function handleTransitionClick(event) {
		event.preventDefault();

		if (!document.startViewTransition) {
			goto('/about/hero');
			return;
		}

		// Dispatch custom event to prevent root transition if needed
		window.dispatchEvent(new Event('heroTransition'));

		const transition = document.startViewTransition(async () => {
			await goto('/about/hero');
		});

		try {
			await transition.finished;
		} catch (error) {
			console.error('Transition failed:', error);
		}
	}
</script>

<main aria-label="go to the hero page">
	<section>
		<h1 class="h1">{title}</h1>

		<div class="img">
			<a href="/about/hero" onclick={handleTransitionClick}>
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

		& section {
			& .h1 {
				color: var(--blue);
				font-family: var(--orbitron);
				font-size: clamp(3rem, 7vw, 6rem);
				letter-spacing: 22px;
				text-align: center;
				margin: 0;
				text-transform: lowercase;
				view-transition-name: hero-title;
			}

			& .img {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: 2rem;
				will-change: clip-path;

				& a {
					width: fit-content;
					background: transparent;
					view-transition-name: hero-image;
				}
			}

			& .p {
				color: var(--smoke);
				letter-spacing: 2px;
				font-family: var(--bronova);
				font-size: clamp(1.5rem, 2vw, 1.75rem);
				text-align: center;
				view-transition-name: hero-text;
			}
		}
	}

	::view-transition-old(hero-image),
	::view-transition-new(hero-image) {
		animation: none;
		mix-blend-mode: normal;
	}

	::view-transition-old(hero-image) {
		animation: scale-fade-out 0.5s ease-out forwards;
	}

	::view-transition-new(hero-image) {
		animation: scale-fade-in 0.5s ease-in forwards;
	}

	::view-transition-old(hero-title),
	::view-transition-new(hero-title) {
		animation: none;
		mix-blend-mode: normal;
	}

	::view-transition-old(hero-text),
	::view-transition-new(hero-text) {
		animation: none;
		mix-blend-mode: normal;
	}

	@keyframes scale-fade-out {
		from {
			opacity: 1;
			transform: scale(1);
		}
		to {
			opacity: 0;
			transform: scale(0.8);
		}
	}

	@keyframes scale-fade-in {
		from {
			opacity: 0;
			transform: scale(1.2);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}
</style>
