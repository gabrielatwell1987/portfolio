<script>
	import Popup from '$lib/components/layout/Popup.svelte';
	import SendButton from '$lib/components/contact/SendButton.svelte';
</script>

<div class="popover">
	<Popup title="" text="Please fill out this questionnaire and I'll contact you back 😎" />
</div>

<section class="hire-form-container">
	<form action="https://formspree.io/f/xwpoqdno" method="POST">
		<div class="form-grid">
			<label class="form-group">
				<span class="label-text">Name</span>

				<input type="text" name="name" placeholder="Your name" required />
			</label>

			<label class="form-group">
				<span class="label-text">Email</span>

				<input type="email" name="email" placeholder="your.email@example.com" required />
			</label>

			<label class="form-group">
				<span class="label-text">Location</span>

				<input
					type="text"
					name="location"
					list="locations"
					placeholder="(e.g: Los Angeles, CA.)"
					required
				/>
				<datalist id="locations">
					<option value="Las Vegas, NV."> </option>
					<option value="Los Angeles, CA"> </option>
					<option value="New York, NY"> </option>
					<option value="Chicago, IL"> </option>
					<option value="Houston, TX"> </option>
					<option value="Phoenix, AZ"> </option>
					<option value="Philadelphia, PA"> </option>
					<option value="San Antonio, TX"> </option>
					<option value="San Diego, CA"> </option>
					<option value="Dallas, TX"> </option>
					<option value="San Francisco, CA"> </option>
					<option value="Austin, TX"></option>
					<option value="Seattle, WA"> </option>
					<option value="Denver, CO"></option>
					<option value="Boston, MA"> </option>
					<option value="Miami, FL"></option>
				</datalist>
			</label>
		</div>

		<div class="form-grid">
			<label class="form-group">
				<span class="label-text">Website</span>

				<input type="text" name="text" placeholder="(e.g: if-applicable.com)" />
			</label>

			<label class="form-group">
				<span class="label-text">Company</span>

				<input type="text" name="company" list="companies" placeholder="Your company (optional)" />
				<datalist id="companies">
					<option value="Startup"> </option>
					<option value="Small Business"> </option>
					<option value="Enterprise"> </option>
					<option value="Non-profit"> </option>
					<option value="Freelancer"> </option>
				</datalist>
			</label>

			<label class="form-group">
				<span class="label-text">Project Type</span>

				<select name="project_type" required>
					<option value="">Select a project type</option>
					<option value="website">Website Design</option>
					<option value="website">Website Development</option>
					<option value="webapp">Web Application</option>
					<option value="ecommerce">E-commerce</option>
					<option value="other">Other</option>
				</select>
			</label>

			<label class="form-group">
				<span class="label-text">New Project?</span>

				<select name="new_project" required>
					<option value="">Is this new or a rebrand?</option>
					<option value="yes">New</option>
					<option value="no">Rebrand</option>
				</select>
			</label>

			<label class="form-group">
				<span class="label-text">Timeline</span>

				<select name="timeline" required>
					<option value="">What is your timeline?</option>
					<option value="1month">Within a month</option>
					<option value="2month">Within 2 months</option>
					<option value="available">When you're available</option>
				</select>
			</label>

			<label class="form-group">
				<span class="label-text">Budget</span>

				<select name="budget" required>
					<option value="">What is your budget?</option>
					<option value="<1500">Less than $1,500</option>
					<option value="1500-2500">$1,500 - $2,500</option>
					<option value="2500-3500">$2,500 - $3,500</option>
					<option value="2500-5000">$3,500 - $5,000</option>
					<option value="5000-7500">$5,000 - $7,500</option>
					<option value="7500-10000">$7,500 - $10,000</option>
					<option value="10000+">$10,000+</option>
				</select>
			</label>
		</div>

		<label class="form-group full-width">
			<span class="label-text tac">Message</span>

			<textarea name="message" required placeholder="Tell me about your project..." rows="5"
			></textarea>
		</label>

		<SendButton />
	</form>
</section>

<style>
	.popover {
		display: flex;
		justify-content: space-evenly;
		margin-bottom: 3em;
	}

	.hire-form-container {
		width: 100%;
		max-width: 1200px;
		margin-inline: auto;
		padding: 1rem;
		overflow-y: auto;
		height: calc(100dvh - 4rem);
		position: relative;

		& .form-grid {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 1.5rem;
			border: 2px solid var(--clr-gray);
			padding: 1rem 2rem;
			margin-bottom: 1rem;
			border-radius: var(--radius);

			@media (width <= 500px) {
				grid-template-columns: 1fr;
			}

			&:nth-child(2) {
				grid-template-columns: repeat(2, 1fr);

				@media (width <= 500px) {
					grid-template-columns: 1fr;
				}
			}

			&:nth-child(3) {
				grid-template-columns: repeat(2, 1fr);

				@media (width <= 500px) {
					grid-template-columns: 1fr;
				}
			}
		}

		& .form-group {
			display: flex;
			flex-direction: column;

			& select {
				appearance: none;
				background-color: transparent;
				background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23c69306' d='M10.293 3.293L6 7.586 1.707 3.293A1 1 0 00.293 4.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z'/%3E%3C/svg%3E");
				background-repeat: no-repeat;
				background-position: right 0.75rem center;
				padding-right: 2.5rem;
				border: 1px solid var(--clr-gray);
				color: var(--clr-main);
				font-family: inherit;
				font-size: clamp(var(--sm), 1vw, var(--h4));
				cursor: pointer;
				line-height: inherit;
				outline: none;

				&:focus {
					border-color: var(--clr-main);
					box-shadow: none;
				}
				& option {
					background-color: var(--clr-inverted);
					color: var(--clr-main);
					padding: 0.5rem;
				}
			}
		}
	}

	.full-width {
		grid-column: 1 / -1;
	}

	.label-text {
		font-family: var(--bronova);
		font-size: clamp(var(--sm), 1vw, var(--h4));
		font-weight: 700;
		color: var(--clr-main);
	}

	.tac {
		text-align: center;
	}

	input,
	select,
	textarea {
		padding: 0.75rem;
		border: 2px solid var(--clr-gray);
		border-radius: 4px;
		background: transparent;
		color: var(--clr-main);
		font-size: var(--sm);
		width: 100%;
		transition:
			border-color 0.2s,
			box-shadow 0.2s;
	}

	input::placeholder,
	textarea::placeholder {
		color: var(--clr-main);
		opacity: 0.7;
		font-size: clamp(0.8rem, 1vw, 1.75rem);
	}

	input:focus,
	select:focus,
	textarea:focus {
		outline: none;
		border-color: var(--clr-gray);
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
</style>
