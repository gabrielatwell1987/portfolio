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

			<span>{title}{company ? `, ${company}` : ''}</span>

			{#if rating > 0}
				<div class="rating">
					{#each stars as isFilled}
						<span class="star">{isFilled ? '★' : '☆'}</span>
					{/each}
				</div>
			{/if}
		</div>
	</footer>
</article>

<style>
	.testimonial {
		background-color: var(--text-anti);
		border-radius: 0.5rem;
		padding: 2rem;
		position: relative;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
		margin-top: -3rem;
		margin-bottom: 2rem;
		max-width: 50em;
		width: 100%;
		margin-inline: auto;
		transition:
			transform 0.2s,
			box-shadow 0.2s;

		&:hover {
			transform: translateY(-5px);
			box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
		}
	}

	.highlighted {
		border-left: 3px solid hsl(215, 94%, 6%);
	}

	.quote-mark {
		position: absolute;
		top: 1rem;
		left: 1.5rem;
		font-size: 4rem;
		color: var(--text-color);
		font-family: Georgia, serif;
		line-height: 1;
	}

	blockquote {
		margin: 0;
		padding-left: 1rem;
		font-style: italic;
		color: var(--text-gray);
		line-height: 1.6;
	}

	.testimonial-footer {
		margin-top: 1.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		max-width: 55em;
		padding: 1rem 0;

		@media (width <= 500px) {
			padding: 1em;
		}
	}

	.avatar {
		width: 5em;
		height: 5em;
		border-radius: 50%;
		overflow: hidden;
		flex-shrink: 0;

		& img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.author-info {
		display: flex;
		flex-direction: column;
		border-radius: var(--radius);

		& strong {
			font-size: clamp(0.9rem, 1.5vw, 1.2rem);
			font-weight: 600;
			color: var(--light);
			letter-spacing: 5px;
		}

		& span {
			font-weight: 400;
			color: var(--light);
			opacity: 0.25;
		}
	}

	.rating {
		margin-top: 0.5rem;
	}

	.star {
		color: var(--button-bg);
	}

	@media (max-width: 640px) {
		.testimonial {
			padding: 1.5rem;
		}
	}
</style>
