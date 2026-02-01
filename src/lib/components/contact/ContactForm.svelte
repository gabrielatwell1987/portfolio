<script lang="ts">
	import SubmitButton from '$lib/components/contact/SubmitButton.svelte';
	import A11yAnnouncer from '$lib/components/layout/A11yAnnouncer.svelte';
	import Popover from '$lib/components/layout/Popover.svelte';
	import ModalPopover from '$lib/components/contact/ModalPopover.svelte';
	import MotifPhoto from './MotifPhoto.svelte';

	let name = $state<string>('');
	let email = $state<string>('');
	let message = $state<string>('');
	let submitStatus = $state<string>('');
</script>

<div class="contact-icons">
	<div class="popover-icon">
		<Popover title="" text="Please provide a working email so I can message you back!" />
	</div>

	<ModalPopover />
</div>

<div class="personal-image">
	<MotifPhoto
		content="https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/gabe-sketch.webp"
	/>
</div>

<A11yAnnouncer message={submitStatus} />

<form method="POST" action="https://form.taxi/s/xeyymb58" novalidate>
	<fieldset>
		<legend>reach me</legend>

		<div class="form-group">
			<label for="name">name</label>
			<input
				type="text"
				id="name"
				name="name"
				bind:value={name}
				required
				aria-describedby="name-error"
				autocomplete="name"
				spellcheck="true"
				placeholder="Your Name"
			/>
		</div>

		<div class="form-group">
			<label for="email">email</label>
			<input
				type="email"
				id="email"
				name="email"
				bind:value={email}
				required
				aria-describedby="email-error"
				autocomplete="email"
				spellcheck="true"
				placeholder="Your Email"
			/>
		</div>

		<div class="form-group">
			<label for="message">message</label>
			<textarea
				id="message"
				name="message"
				bind:value={message}
				rows="5"
				required
				aria-describedby="message-error"
				spellcheck="true"
				placeholder="Your Message"
			></textarea>
		</div>

		<div class="submit-button">
			<SubmitButton />
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

	.personal-image {
		margin-bottom: 2.5em;
	}

	.contact-icons {
		display: grid;
		place-content: center;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		align-items: center;
		margin-bottom: 1em;

		@media (width <= 768px) {
			margin-top: -15vw;
		}

		& .popover-icon {
			display: flex;
			justify-content: space-evenly;
		}
	}

	form {
		--label-bg: var(--dark);

		@media screen and (width >= 320px) {
			width: 85%;
			margin-inline: auto;
			display: grid;
			padding: 0.25rem;
		}

		@media screen and (width >= 1024px) {
			fieldset {
				border: 5px solid var(--white);
				border-image: linear-gradient(75deg, var(--clr-gray), var(--clr-invert)) 1;
				font-weight: bolder;
				padding: 2rem 5rem;
				border-radius: 10px;
				width: 90%;

				& .form-group input {
					margin-bottom: 1rem;
					transform: scale(1.05);
					width: var(--100);
				}

				& .form-group textarea {
					margin-bottom: 1rem;
					width: var(--100);
				}
			}
		}

		& fieldset {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: var(--100);
			margin: 0 auto;
		}

		& legend {
			font-family: var(--bronova);
			font-size: clamp(var(--h6), 3vw, var(--xxl));
			font-weight: 800;
			letter-spacing: 1px;
			color: oklch(from var(--clr-main) 0.7 c h);
			text-shadow: 0 0 5px var(--clr-invert);
			padding-inline: 1rem;
			margin-bottom: 1rem;

			@media screen and (width >= 720px) {
				margin-bottom: 0;
			}
		}

		& .form-group {
			display: flex;
			flex-direction: column;
			width: 100%;
			position: relative;

			& label {
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
				color: var(--clr-blue);
				transition: color 0.3s ease;

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

			& input,
			& textarea {
				width: 100%;
				background-color: transparent;
				box-shadow: none;
				border: 3px solid oklch(from var(--gray) 0.6 c h);
				border-radius: var(--radius);
				caret-color: var(--sky);
				color: var(--clr-main);
				font-size: clamp(var(--sm), 1.75vw, var(--h5));
				outline: none;
				transition:
					border-color 0.3s ease,
					box-shadow 0.3s ease,
					background-color 0.2s ease;

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
				}

				&:placeholder-shown:user-invalid {
					border-color: var(--dark-gray);
					box-shadow: none;
					background-color: transparent;
					animation: none;
				}

				&::placeholder {
					color: var(--clr-main);
					font-size: clamp(var(--sm), 1vw, var(--h5));
					font-weight: 400;
					opacity: 0.7;
				}
			}

			& input:placeholder-shown {
				letter-spacing: 3px;
			}

			& textarea {
				padding: 0.5rem 1rem;
				resize: vertical;
				min-height: 120px;

				&:placeholder-shown {
					letter-spacing: 0px;
				}
			}

			&:has(input:user-valid) label,
			&:has(textarea:user-valid) label {
				color: var(--success);
				font-weight: 600;
			}

			&:has(input:user-invalid:not(:placeholder-shown)) label,
			&:has(textarea:user-invalid:not(:placeholder-shown)) label {
				color: var(--fail);
				font-weight: 600;
			}
		}

		& .submit-button {
			margin-top: 1em;
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
