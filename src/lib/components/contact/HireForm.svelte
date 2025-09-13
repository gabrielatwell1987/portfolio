<script>
	import Popup from '$lib/components/layout/Popup.svelte';
	import SubmitButton from '$lib/components/contact/SubmitButton.svelte';
	import A11yAnnouncer from '$lib/components/layout/A11yAnnouncer.svelte';

	let name = $state('');
	let email = $state('');
	let location = $state('');
	let website = $state('');
	let company = $state('');
	let projectType = $state('');
	let newProject = $state('');
	let timeline = $state('');
	let budget = $state('');
	let message = $state('');
	let submitStatus = $state('');
	let isSubmitting = $state(false);
	let errors = $state({
		name: '',
		email: '',
		location: '',
		projectType: '',
		newProject: '',
		timeline: '',
		budget: '',
		message: ''
	});

	// Form validation
	let isValidName = $derived(name.trim().length >= 2);
	let isValidEmail = $derived(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
	let isValidLocation = $derived(location.trim().length >= 2);
	let isValidProjectType = $derived(projectType !== '');
	let isValidNewProject = $derived(newProject !== '');
	let isValidTimeline = $derived(timeline !== '');
	let isValidBudget = $derived(budget !== '');
	let isValidMessage = $derived(message.trim().length >= 10);

	let isFormValid = $derived(
		isValidName &&
			isValidEmail &&
			isValidLocation &&
			isValidProjectType &&
			isValidNewProject &&
			isValidTimeline &&
			isValidBudget &&
			isValidMessage
	);

	function validateField(field, value) {
		switch (field) {
			case 'name':
				return value.trim().length >= 2 ? '' : 'Name must be at least 2 characters';
			case 'email':
				return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Please enter a valid email';
			case 'location':
				return value.trim().length >= 2 ? '' : 'Location is required';
			case 'projectType':
				return value !== '' ? '' : 'Please select a project type';
			case 'newProject':
				return value !== '' ? '' : 'Please specify if this is a new project or rebrand';
			case 'timeline':
				return value !== '' ? '' : 'Please select your timeline';
			case 'budget':
				return value !== '' ? '' : 'Please select your budget range';
			case 'message':
				return value.trim().length >= 10 ? '' : 'Message must be at least 10 characters';
			default:
				return '';
		}
	}

	function handleBlur(field, value) {
		errors[field] = validateField(field, value);
	}

	function handleSubmit(event) {
		// Validate all fields before submission
		errors.name = validateField('name', name);
		errors.email = validateField('email', email);
		errors.location = validateField('location', location);
		errors.projectType = validateField('projectType', projectType);
		errors.newProject = validateField('newProject', newProject);
		errors.timeline = validateField('timeline', timeline);
		errors.budget = validateField('budget', budget);
		errors.message = validateField('message', message);

		if (!isFormValid) {
			event.preventDefault();
			submitStatus = 'Please correct the errors before submitting';
			return false;
		}

		isSubmitting = true;
		submitStatus = 'Submitting your project details...';

		// Reset form after successful submission
		setTimeout(() => {
			submitStatus = "Project details sent successfully! I'll review and get back to you soon.";
			name = '';
			email = '';
			location = '';
			website = '';
			company = '';
			projectType = '';
			newProject = '';
			timeline = '';
			budget = '';
			message = '';
			errors = {
				name: '',
				email: '',
				location: '',
				projectType: '',
				newProject: '',
				timeline: '',
				budget: '',
				message: ''
			};
			isSubmitting = false;
		}, 2000);

		return true;
	}
</script>

<Popup title="" text="Please fill out this questionnaire and I'll contact you back 😎" />

<A11yAnnouncer message={submitStatus} />

<section class="hire-form-container">
	<form
		action="https://formspree.io/f/xwpoqdno"
		method="POST"
		novalidate
		onsubmit={handleSubmit}
		aria-live="polite"
		aria-busy={isSubmitting}
	>
		<div class="form-grid">
			<label class="form-group">
				<span class="label-text">Name</span>
				<input
					type="text"
					name="name"
					bind:value={name}
					onblur={() => handleBlur('name', name)}
					placeholder="Your name"
					required
					autocomplete="name"
					aria-describedby={errors.name ? 'name-error' : undefined}
					aria-invalid={!!errors.name}
					disabled={isSubmitting}
				/>
				{#if errors.name}
					<span id="name-error" class="error-message" role="alert">
						{errors.name}
					</span>
				{/if}
			</label>

			<label class="form-group">
				<span class="label-text">Email</span>
				<input
					type="email"
					name="email"
					bind:value={email}
					onblur={() => handleBlur('email', email)}
					placeholder="your.email@example.com"
					required
					autocomplete="email"
					aria-describedby={errors.email ? 'email-error' : undefined}
					aria-invalid={!!errors.email}
					disabled={isSubmitting}
				/>
				{#if errors.email}
					<span id="email-error" class="error-message" role="alert">
						{errors.email}
					</span>
				{/if}
			</label>

			<label class="form-group">
				<span class="label-text">Location</span>
				<input
					type="text"
					name="location"
					bind:value={location}
					onblur={() => handleBlur('location', location)}
					list="locations"
					placeholder="(e.g: Los Angeles, CA.)"
					required
					autocomplete="address-level2"
					aria-describedby={errors.location ? 'location-error' : undefined}
					aria-invalid={!!errors.location}
					disabled={isSubmitting}
				/>
				<datalist id="locations">
					<option value="Las Vegas, NV."></option>
					<option value="Los Angeles, CA"></option>
					<option value="New York, NY"></option>
					<option value="Chicago, IL"></option>
					<option value="Houston, TX"></option>
					<option value="Phoenix, AZ"></option>
					<option value="Philadelphia, PA"></option>
					<option value="San Antonio, TX"></option>
					<option value="San Diego, CA"></option>
					<option value="Dallas, TX"></option>
					<option value="San Francisco, CA"></option>
					<option value="Austin, TX"></option>
					<option value="Seattle, WA"></option>
					<option value="Denver, CO"></option>
					<option value="Boston, MA"></option>
					<option value="Miami, FL"></option>
				</datalist>
				{#if errors.location}
					<span id="location-error" class="error-message" role="alert">
						{errors.location}
					</span>
				{/if}
			</label>
		</div>

		<div class="form-grid">
			<label class="form-group">
				<span class="label-text">Website</span>
				<input
					type="text"
					name="website"
					bind:value={website}
					placeholder="(e.g: if-applicable.com)"
					disabled={isSubmitting}
				/>
			</label>

			<label class="form-group">
				<span class="label-text">Company</span>
				<input
					type="text"
					name="company"
					bind:value={company}
					list="companies"
					placeholder="Your company (optional)"
					disabled={isSubmitting}
				/>
				<datalist id="companies">
					<option value="Startup"></option>
					<option value="Small Business"></option>
					<option value="Enterprise"></option>
					<option value="Non-profit"></option>
					<option value="Freelancer"></option>
				</datalist>
			</label>

			<label class="form-group">
				<span class="label-text">Project Type</span>
				<select
					name="project_type"
					bind:value={projectType}
					onblur={() => handleBlur('projectType', projectType)}
					required
					aria-describedby={errors.projectType ? 'project-type-error' : undefined}
					aria-invalid={!!errors.projectType}
					disabled={isSubmitting}
				>
					<option value="">Select a project type</option>
					<option value="website-design">Website Design</option>
					<option value="website-development">Website Development</option>
					<option value="webapp">Web Application</option>
					<option value="ecommerce">E-commerce</option>
					<option value="other">Other</option>
				</select>
				{#if errors.projectType}
					<span id="project-type-error" class="error-message" role="alert">
						{errors.projectType}
					</span>
				{/if}
			</label>

			<label class="form-group">
				<span class="label-text">New Project?</span>
				<select
					name="new_project"
					bind:value={newProject}
					onblur={() => handleBlur('newProject', newProject)}
					required
					aria-describedby={errors.newProject ? 'new-project-error' : undefined}
					aria-invalid={!!errors.newProject}
					disabled={isSubmitting}
				>
					<option value="">Is this new or a rebrand?</option>
					<option value="yes">New</option>
					<option value="no">Rebrand</option>
				</select>
				{#if errors.newProject}
					<span id="new-project-error" class="error-message" role="alert">
						{errors.newProject}
					</span>
				{/if}
			</label>

			<label class="form-group">
				<span class="label-text">Timeline</span>
				<select
					name="timeline"
					bind:value={timeline}
					onblur={() => handleBlur('timeline', timeline)}
					required
					aria-describedby={errors.timeline ? 'timeline-error' : undefined}
					aria-invalid={!!errors.timeline}
					disabled={isSubmitting}
				>
					<option value="">What is your timeline?</option>
					<option value="1month">Within a month</option>
					<option value="2month">Within 2 months</option>
					<option value="available">When you're available</option>
				</select>
				{#if errors.timeline}
					<span id="timeline-error" class="error-message" role="alert">
						{errors.timeline}
					</span>
				{/if}
			</label>

			<label class="form-group">
				<span class="label-text">Budget</span>
				<select
					name="budget"
					bind:value={budget}
					onblur={() => handleBlur('budget', budget)}
					required
					aria-describedby={errors.budget ? 'budget-error' : undefined}
					aria-invalid={!!errors.budget}
					disabled={isSubmitting}
				>
					<option value="">What is your budget?</option>
					<option value="<1500">Less than $1,500</option>
					<option value="1500-2500">$1,500 - $2,500</option>
					<option value="2500-3500">$2,500 - $3,500</option>
					<option value="2500-5000">$3,500 - $5,000</option>
					<option value="5000-7500">$5,000 - $7,500</option>
					<option value="7500-10000">$7,500 - $10,000</option>
					<option value="10000+">$10,000+</option>
				</select>
				{#if errors.budget}
					<span id="budget-error" class="error-message" role="alert">
						{errors.budget}
					</span>
				{/if}
			</label>
		</div>

		<label class="form-group full-width">
			<span class="label-text tac">Message</span>
			<textarea
				name="message"
				bind:value={message}
				onblur={() => handleBlur('message', message)}
				required
				placeholder="Tell me about your project..."
				rows="5"
				aria-describedby={errors.message ? 'message-error' : undefined}
				aria-invalid={!!errors.message}
				disabled={isSubmitting}
			></textarea>
			{#if errors.message}
				<span id="message-error" class="error-message" role="alert">
					{errors.message}
				</span>
			{/if}
		</label>

		<SubmitButton disabled={!isFormValid || isSubmitting} loading={isSubmitting} />
	</form>
</section>

<style>
	.hire-form-container {
		width: 100%;
		max-width: 1200px;
		margin-inline: auto;
		padding: 1rem;
		overflow-y: auto;
		height: calc(100dvh - 3em);
		position: relative;
		margin-top: 3em;

		@media (width <= 768px) {
			padding: 0.5rem;
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
			position: relative;

			select {
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

				&:user-invalid {
					border-color: var(--fail);
					outline: 2px solid var(--fail);
				}

				&:disabled {
					opacity: 0.7;
					cursor: not-allowed;
				}

				option {
					background-color: var(--clr-inverted);
					color: var(--clr-main);
					padding: 0.5rem;
				}
			}

			.error-message {
				display: block;
				color: var(--fail);
				font-size: var(--sm);
				font-family: var(--bronova);
				margin-top: 0.25rem;
				margin-left: 0.5rem;
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
		color: var(--clr-blue);
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

		&:user-invalid {
			border-color: var(--fail);
			outline: 2px solid var(--fail);
		}

		&:user-valid {
			border-color: var(--success);
			outline: 2px solid var(--success);
		}

		&:focus {
			outline: none;
			border-color: var(--clr-gray);
		}

		&:disabled {
			opacity: 0.7;
			cursor: not-allowed;
		}

		&::placeholder {
			color: var(--clr-main);
			opacity: 0.7;
			font-size: clamp(0.8rem, 1vw, 1.75rem);
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
	}
</style>
