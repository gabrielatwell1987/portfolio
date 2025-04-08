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
		</div>
	</footer>
</article>

<style>
	.testimonial {
		background-color: var(--text-anti);
		border-radius: var(--radius);
		padding: 2rem;
		position: relative;
		box-shadow: 0 0 12px var(--text-color);
		margin-top: -2rem;
		margin-bottom: 2rem;
		max-width: 50em;
		width: 100%;
		margin-inline: auto;
		padding-bottom: 5em;
		transition:
			transform 0.2s,
			box-shadow 0.2s;

		&:hover {
			transform: translateY(-5px);
			box-shadow: 0 0.5rem 1.2rem rgba(0, 0, 0, 0.1);
		}

		& .author-info {
			display: flex;
			flex-direction: column;

			border-radius: var(--radius);
			padding: 0.75rem;

			& strong {
				font-size: clamp(0.9rem, 1.5vw, 1.2rem);
				font-weight: 600;
				color: var(--text-color);
			}

			& span {
				font-size: clamp(0.8rem, 1.2vw, 1rem);
				font-weight: 400;
				color: var(--text-color);
				opacity: 0.5;
			}
		}

		& .quote-mark {
			position: absolute;
			top: 1rem;
			left: 1.5rem;
			font-size: 4rem;
			color: var(--text-color);
			font-family: Georgia, serif;
			line-height: 1;
		}

		& blockquote {
			margin: 0;
			padding-left: 1rem;
			font-style: italic;
			color: var(--text-color);
			line-height: 1.5;
			border-left: none;
		}

		& .testimonial-footer {
			background-color: transparent;
			border-top: 1px solid var(--text-color);
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

	.highlighted {
		border-left: 3px solid hsl(0, 0%, 16%);
	}

	@media (max-width: 640px) {
		.testimonial {
			padding: 1.5rem;
		}
	}
</style>
