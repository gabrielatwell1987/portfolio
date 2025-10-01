<script>
	let {
		name = 'hero-image',
		duration = '0.75s',
		easing = 'ease',
		blendMode = 'normal',
		children
	} = $props();
</script>

<div
	style:--duration={duration}
	style:--easing={easing}
	style:--blend-mode={blendMode}
	style:view-transition-name={name}
>
	{@render children()}
</div>

<style>
	:global(::view-transition-old(hero-image)),
	:global(::view-transition-new(hero-image)) {
		animation: none;
		mix-blend-mode: var(--blend-mode, normal);
	}

	:global(::view-transition-old(hero-image)) {
		animation: scale-out var(--duration, 0.75s) var(--easing, ease-ou) t forwards;
	}

	:global(::view-transition-new(hero-image)) {
		animation: scale-in var(--duration, 0.75s) var(--easing, ease-out) forwards;
	}

	@keyframes scale-out {
		from {
			scale: 1;
			opacity: 1;
		}
		to {
			scale: 0.8;
			opacity: 0;
		}
	}

	@keyframes scale-in {
		from {
			scale: 1.2;
			opacity: 0;
		}
		to {
			scale: 1;
			opacity: 1;
		}
	}
</style>
