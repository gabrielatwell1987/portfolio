<script lang="ts">
	import SubmitButton from '$lib/components/contact/SubmitButton.svelte';
	import A11yAnnouncer from '$lib/components/layout/A11yAnnouncer.svelte';

	let submitStatus = $state('');
</script>

<A11yAnnouncer message={submitStatus} />

<section class="hire-form-container">
	<form action="https://formspree.io/f/xwpoqdno" method="POST" novalidate>
		<div class="form-grid">
			<label class="form-group">
				<span class="label-text">Name</span>

				<input
					type="text"
					name="name"
					placeholder="Your name"
					required
					autocomplete="name"
					spellcheck="true"
				/>
			</label>

			<label class="form-group">
				<span class="label-text">Email</span>

				<input
					type="email"
					name="email"
					placeholder="your.email@example.com"
					required
					autocomplete="email"
					spellcheck="true"
				/>
			</label>

			<label class="form-group">
				<span class="label-text">Location</span>

				<input
					type="text"
					name="location"
					list="locations"
					placeholder="(e.g: Los Angeles, CA.)"
					required
					autocomplete="address-level2"
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

				<input type="text" name="text" placeholder="(e.g: if-applicable.com)" spellcheck="true" />
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
			<span class="label-text center-text">Message</span>

			<textarea
				name="message"
				required
				placeholder="Tell me about your project..."
				rows="5"
				spellcheck="true"
			></textarea>
		</label>

		<SubmitButton />
	</form>
</section>

<style>
	.hire-form-container {
		width: 100%;
		max-inline-size: 1600px;
		margin-inline: auto;
		padding: 1rem;
		height: 100dvh;
		position: relative;
		margin-top: 3em;

		@media (width <= 768px) {
			padding: 0.5rem;
		}

		@media (width <= 500px) {
			overflow-y: auto;
		}

		.form-grid {
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

		.form-group {
			display: flex;
			flex-direction: column;

			& select {
				appearance: none;
				background-color: transparent;

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
				transition:
					border-color 0.3s ease,
					box-shadow 0.3s ease,
					background-color 0.2s ease;

				&:focus {
					border-color: var(--clr-main);
					box-shadow: 0 0 0 2px var(--sky);
				}

				&:user-valid {
					border-color: var(--success);
					box-shadow: 0 0 0 2px var(--success);
					background-color: hsla(120, 60%, 50%, 0.05);
				}

				&:user-invalid {
					border-color: var(--fail);
					box-shadow: 0 0 0 2px var(--fail);
					background-color: hsla(0, 70%, 55%, 0.05);
					animation: wiggle 0.5s ease-out;
				}

				& option {
					background-color: var(--clr-invert);
					color: var(--clr-main);
					padding: 0.5rem;
				}
			}

			&:has(input:user-valid) .label-text,
			&:has(select:user-valid) .label-text,
			&:has(textarea:user-valid) .label-text {
				color: var(--success);
				font-weight: 700;
			}

			&:has(input:user-invalid:not(:placeholder-shown)) .label-text,
			&:has(select:user-invalid) .label-text,
			&:has(textarea:user-invalid:not(:placeholder-shown)) .label-text {
				color: var(--fail);
				font-weight: 700;
			}
		}
	}

	.full-width {
		grid-column: 1 / -1;
	}

	.label-text {
		font-family: var(--bronova-bold);
		font-size: clamp(var(--sm), 1vw, var(--h4));
		color: var(--clr-blue);
		transition: color 0.1s ease;
	}

	.center-text {
		text-align: center;
	}

	input,
	select,
	textarea {
		padding: 0.5rem;
		border: 2px solid var(--clr-gray);
		border-radius: 4px;
		background: transparent;
		color: var(--clr-main);
		font-size: var(--sm);
		width: 100%;
		transition:
			border-color 0.3s ease,
			box-shadow 0.3s ease,
			background-color 0.2s ease;

		&::placeholder {
			color: var(--clr-main);
			opacity: 0.7;
			font-size: clamp(0.8rem, 1vw, 1.75rem);
			font-weight: 300;
		}

		&:focus {
			outline: none;
			border-color: var(--sky);
			box-shadow: 0 0 0 2px var(--sky);
		}

		&:user-valid {
			border-color: var(--success);
			box-shadow: 0 0 0 2px var(--success);
			background-color: hsla(120, 60%, 50%, 0.05);
		}

		&:user-invalid {
			border-color: var(--fail);
			box-shadow: 0 0 0 2px var(--fail);
			background-color: hsla(0, 70%, 55%, 0.05);
			animation: wiggle 0.5s ease-out;

			&:placeholder-shown {
				border-color: var(--clr-gray);
				box-shadow: none;
				background-color: transparent;
				animation: none;
			}
		}
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
		100% {
			rotate: 0deg;
			translate: 0 0;
		}
	}
</style>
