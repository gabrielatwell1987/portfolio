<script>
	let {
		name,
		title,
		company = '',
		testimonial,
		avatar = '',
		rating = 0,
		highlighted = false
	} = $props();

	let stars = $derived(() => {
		return Array(5)
			.fill(0)
			.map((_, i) => i < rating);
	});
</script>

<article class="testimonial" class:highlighted>
	<div class="quote-mark">"</div>

	<blockquote>{testimonial}</blockquote>

	<footer class="testimonial-footer">
		{#if avatar}
			<div class="avatar">
				<img src={avatar} alt={`Photo of ${name}`} />
			</div>
		{/if}

		<div class="author-info">
			<strong>{name}</strong>

			<span>{title} {company ? `, ${company}` : ''}</span>
		</div>
	</footer>
</article>

<style>
	.testimonial {
		--dark-bg-rgb: var(--clr-main);
		--light-bg-rgb: var(--clr-inverted);
		background-color: hsla(var(--light-bg-rgb), 0.25);
		border-radius: var(--radius);
		padding: 2rem;
		position: relative;
		box-shadow: 0 0 12px var(--clr-main);
		margin-top: -6rem;
		margin-bottom: 2rem;
		max-width: 50em;
		width: 95%;
		margin-inline: auto;
		padding-bottom: 5em;
		animation: fade-in 0.8s ease-out forwards;
		scale: 0.75;
		transition:
			transform 0.2s,
			box-shadow 0.2s;

		@media (width <= 500px) {
			scale: 0.95;
			margin-top: -2rem;
		}

		&:hover {
			transform: translateY(-5px);
		}

		& .author-info {
			display: flex;
			flex-direction: column;

			border-radius: var(--radius);
			padding: 0.75rem;

			& strong {
				font-size: clamp(var(--sm), 1.75vw, var(--h5));
				font-weight: 600;
				color: var(--clr-main);
				letter-spacing: 0px;
			}

			& span {
				color: var(--clr-main);
				font-size: clamp(var(--xs), 1.25vw, var(--h6));
				font-weight: 400;
				opacity: 0.5;
				letter-spacing: -1px;
			}
		}

		& .quote-mark {
			position: absolute;
			top: 1rem;
			left: 1.5rem;
			font-size: 4rem;
			color: var(--clr-main);
			font-family: Georgia, serif;
			line-height: 1;
		}

		& blockquote {
			margin: 0;
			padding-left: 1rem;
			font-size: clamp(var(--h6), 1.5vw, var(--h3));
			font-style: italic;
			color: var(--clr-main);
			line-height: 1.5;
			border-left: none;
		}

		& .testimonial-footer {
			background-color: transparent;
			border-top: 1px solid var(--clr-main);
			margin-top: 1.5rem;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 1rem;
			max-width: 55em;
			padding: 1rem 0;
			display: flex;
			align-items: center;

			& .avatar {
				width: clamp(4em, 5vw, 5em);
				height: clamp(4em, 5vw, 5em);
				border-radius: 50%;
				overflow: hidden;
				flex-shrink: 0;
				margin-bottom: 1em;

				& img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}
	}

	:global(body.light) .testimonial {
		background-color: rgba(var(--dark-bg-rgb), 0.25);
	}

	.highlighted {
		border-left: 3px solid hsl(0, 0%, 16%);
	}

	@media (max-width: 640px) {
		.testimonial {
			padding: 1.5rem;
			width: 90%;
			margin-inline: auto;
		}
	}

	@keyframes fade-in {
		0% {
			opacity: 0;
			transform: translateY(20px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
