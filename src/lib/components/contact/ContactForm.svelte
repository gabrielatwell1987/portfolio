<script>
	import Popup from '$lib/components/layout/Popup.svelte';
	import Modal from './Modal.svelte';
	import SubmitButton from '$lib/components/contact/SubmitButton.svelte';
	import A11yAnnouncer from '$lib/components/layout/A11yAnnouncer.svelte';

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let submitStatus = $state('');
	let isSubmitting = $state(false);
	let errors = $state({
		name: '',
		email: '',
		message: ''
	});

	// Form validation
	let isValidName = $derived(name.trim().length >= 2);
	let isValidEmail = $derived(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
	let isValidMessage = $derived(message.trim().length >= 10);
	let isFormValid = $derived(isValidName && isValidEmail && isValidMessage);

	function validateField(field, value) {
		switch (field) {
			case 'name':
				return value.trim().length >= 2 ? '' : 'Name must be at least 2 characters';
			case 'email':
				return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Please enter a valid email';
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
		errors.message = validateField('message', message);

		if (!isFormValid) {
			event.preventDefault();
			submitStatus = 'Please correct the errors before submitting';
			return false;
		}

		isSubmitting = true;
		submitStatus = 'Submitting your message...';

		// Reset form after successful submission
		setTimeout(() => {
			submitStatus = "Message sent successfully! I'll get back to you soon.";
			name = '';
			email = '';
			message = '';
			errors = { name: '', email: '', message: '' };
			isSubmitting = false;
		}, 2000);

		return true;
	}
</script>

<div class="icons">
	<div class="popover">
		<Popup title="" text="Please provide a working email so I can message you back!" />
	</div>
	<Modal />
</div>

<A11yAnnouncer message={submitStatus} />

<form method="POST" action="https://form.taxi/s/xeyymb58" novalidate onsubmit={handleSubmit}>
	<fieldset>
		<legend>message me</legend>

		<div class="field-group">
			<label for="name">name</label>
			<input
				type="text"
				id="name"
				name="name"
				bind:value={name}
				onblur={() => handleBlur('name', name)}
				required
				aria-describedby={errors.name ? 'name-error' : undefined}
				aria-invalid={!!errors.name}
				autocomplete="name"
				disabled={isSubmitting}
			/>
			{#if errors.name}
				<span id="name-error" class="error-message" role="alert">
					{errors.name}
				</span>
			{/if}
		</div>

		<div class="field-group">
			<label for="email">email</label>
			<input
				type="email"
				id="email"
				name="email"
				bind:value={email}
				onblur={() => handleBlur('email', email)}
				required
				aria-describedby={errors.email ? 'email-error' : undefined}
				aria-invalid={!!errors.email}
				autocomplete="email"
				disabled={isSubmitting}
			/>
			{#if errors.email}
				<span id="email-error" class="error-message" role="alert">
					{errors.email}
				</span>
			{/if}
		</div>

		<div class="field-group">
			<label for="message">message</label>
			<textarea
				id="message"
				name="message"
				bind:value={message}
				onblur={() => handleBlur('message', message)}
				rows="5"
				required
				aria-describedby={errors.message ? 'message-error' : undefined}
				aria-invalid={!!errors.message}
				disabled={isSubmitting}
			></textarea>
			{#if errors.message}
				<span id="message-error" class="error-message" role="alert">
					{errors.message}
				</span>
			{/if}
		</div>

		<div class="submit-button">
			<SubmitButton disabled={!isFormValid || isSubmitting} loading={isSubmitting} />
		</div>
	</fieldset>
</form>

<style>
	:root {
		--100: 100%;
	}

	:global(body.light) form {
		--label-bg: var(--dark-gray);
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	.icons {
		display: grid;
		place-content: center;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		align-items: center;

		@media (width <= 768px) {
			margin-top: -15vw;
		}

		.popover {
			display: flex;
			justify-content: space-evenly;
			margin-bottom: 15%;
		}
	}

	form {
		--label-bg: var(--dark); /* Default to dark mode */

		@media screen and (width >= 320px) {
			width: 95%;
			margin-inline: auto;
			display: grid;
			padding: 0.25rem;

			fieldset {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: var(--100);
				margin: 0 auto;

				legend {
					font-family: var(--bronova);
					font-size: clamp(var(--h6), 3vw, var(--xxl));
					font-weight: 800;
					letter-spacing: 1px;
					color: var(--clr-blue);
					padding-inline: 1rem;
					margin-bottom: 1rem;

					@media screen and (width >= 720px) {
						margin-bottom: 0;
					}
				}

				.field-group {
					width: 100%;
					margin-bottom: 1rem;
					position: relative;

					label {
						transform: translate(20px, 5px);
						background-color: transparent;
						width: fit-content;
						padding: 0 0.5rem;
						font-family: var(--bronova);
						font-size: clamp(var(--h6), 1.5vw, var(--h3));
						font-weight: 500;
						z-index: 5;
						border-radius: var(--radius);
						align-self: flex-start;
						position: relative;
						color: var(--clr-gray);

						@media (width <= 500px) {
							transform: translate(20px, 7px);
						}

						&::before {
							content: '';
							position: absolute;
							top: 50%;
							left: -4px;
							right: -4px;
							height: 2rem;
							background-color: var(--label-bg);
							color: var(--clr-inputs);
							transform: translateY(-50%);
							z-index: -1;
							border-radius: var(--radius);
						}
					}

					input,
					textarea {
						width: 100%;
						background-color: transparent;
						box-shadow: none;
						border: 3px solid var(--dark-gray);
						border-radius: var(--radius);
						caret-color: var(--sky);
						color: var(--white);
						font-size: clamp(var(--sm), 2vw, var(--h4));
						outline: none;

						&:user-valid {
							outline: 2px solid var(--success);
						}

						&:user-invalid {
							outline: 2px solid var(--fail);
						}

						&:focus {
							outline: none;
						}

						&:disabled {
							opacity: 0.7;
							cursor: not-allowed;
						}

						@media screen and (width >= 1350px) {
							padding: 2rem;
						}
					}

					input {
						&:placeholder-shown {
							letter-spacing: 3px;
						}

						&::-webkit-input-placeholder {
							color: var(--clr-main);
							font-weight: 100;
						}
					}

					textarea {
						padding: 0.5rem 1rem;

						&:placeholder-shown {
							letter-spacing: 0px;
						}

						&::-webkit-input-placeholder {
							color: var(--clr-main);
							font-weight: 100;
						}
					}

					.error-message {
						display: block;
						color: var(--fail);
						font-size: var(--sm);
						font-family: var(--bronova);
						margin-top: 0.25rem;
						margin-left: 1rem;
					}
				}

				.submit-button {
					margin-top: 1em;
				}
			}
		}

		@media screen and (width >= 1024px) {
			fieldset {
				border: 5px solid var(--white);
				border-image: linear-gradient(75deg, var(--clr-main), var(--clr-inverted)) 1;
				font-weight: bolder;
				padding: 2rem 5rem;
				border-radius: 10px;
				width: 90%;

				.field-group {
					input {
						margin-bottom: 1rem;
						transform: scale(1.05);
						width: var(--100);
					}

					textarea {
						margin-bottom: 1rem;
						width: var(--100);
					}
				}
			}
		}
	}

	::backdrop {
		@media screen and (width >= 720px) {
			background: transparent;
			box-shadow: none;
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
