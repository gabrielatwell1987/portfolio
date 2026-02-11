<script lang="ts">
	interface Props {
		src: string;
		alt: string;
		radius?: string;
		name?: string;
		center?: boolean;
	}

	let { src, alt, radius = '0 1vw 0 0', name = '', center = false }: Props = $props();
</script>

<section class="avatar" class:center>
	<img {src} {alt} loading="lazy" style="border-radius: {radius}" />

	{#if name}
		<h2 class="title">{name}</h2>
	{/if}
</section>

<style>
	.avatar {
		--size: clamp(2rem, 250px, 8rem);
		--head: calc(var(--size) * 0.25);
		--height-with-head: calc(var(--size) + var(--head));
		--border-width: calc(var(--size) * 0.015);
		--mask-size: calc(var(--size) / 2 - var(--border-width));
		--mask-image:
			linear-gradient(to bottom, #000000 0%, #000000 50%, transparent 50%),
			radial-gradient(
				circle at center center,
				#000000 0%,
				#000000 var(--mask-size),
				transparent var(--mask-size),
				transparent 100%
			);
		--mask-repeat: no-repeat, no-repeat;
		--mask-position: center center, center calc(var(--head) / 2 + var(--border-width));

		inline-size: var(--size);
		block-size: var(--size);
		border-radius: 50%;
		border: var(--border-width) solid var(--clr-main);
		background-color: var(--clr-blue);
		background-image: url('https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/dots.svg');

		display: flex;
		align-items: end;
		position: relative;

		&.center {
			margin-inline: auto;
		}

		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			inline-size: 100%;
			block-size: var(--height-with-head);
			border-radius: 50%;
			background-image: var(--mask-image);
			display: none;
		}

		& img {
			width: 100%;
			height: var(--height-with-head);
			object-fit: cover;
			mask-image: var(--mask-image);
			mask-repeat: var(--mask-repeat);
			mask-position: var(--mask-position);
			mask-mode: alpha;

			anchor-name: --avatar;
		}

		& .title {
			position: absolute;
			position-anchor: --avatar;
			top: anchor(center);
			left: calc(anchor(right) + 3vw);

			@media (width <= 768px) {
				top: calc(anchor(bottom) + 1em);
				left: calc(anchor(center) - 3.5em);
			}

			color: var(--clr-main);
			font-family: var(--bronova-bold);
			font-size: clamp(var(--sm), 3.5vw, var(--h3));
			white-space: nowrap;
			letter-spacing: 1px;
		}
	}
</style>
