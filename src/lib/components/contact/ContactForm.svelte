<script>
	import Popup from '$lib/components/layout/Popup.svelte';
	import Modal from './Modal.svelte';
	import SendButton from '$lib/components/contact/SendButton.svelte';
	import A11yAnnouncer from '$lib/components/layout/A11yAnnouncer.svelte';

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let submitStatus = $state('');
	// let isSubmitting = $state(false);
</script>

<div class="icons">
	<div class="popover">
		<Popup title="" text="Please provide a working email so I can message you back!" />
	</div>

	<Modal />
</div>

<!-- Live region for form status announcements -->
<A11yAnnouncer message={submitStatus} />

<form method="POST" action="https://form.taxi/s/xeyymb58" novalidate>
	<fieldset>
		<legend>message me</legend>

		<label for="name">name</label>
		<input
			type="text"
			id="name"
			name="name"
			bind:value={name}
			required
			aria-describedby="name-error"
			autocomplete="name"
		/>

		<label for="email">email</label>
		<input
			type="email"
			id="email"
			name="email"
			bind:value={email}
			required
			aria-describedby="email-error"
			autocomplete="email"
		/>

		<label for="message">message</label>
		<textarea
			id="message"
			name="message"
			bind:value={message}
			rows="5"
			required
			aria-describedby="message-error"
		></textarea>

		<SendButton />
	</fieldset>
</form>

<A11yAnnouncer {submitStatus} />

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

	legend {
		font-family: var(--bronova);
		font-size: clamp(var(--h6), 3vw, var(--xxl));
		font-weight: 800;
		letter-spacing: 1px;
		color: var(--clr-blue);
		padding-inline: 1rem;

		@media screen and (width >= 720px) {
			margin-bottom: 0;
		}
	}

	input,
	textarea {
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

		@media screen and (width >= 1350px) {
			padding: 2rem;
		}
	}

	input {
		&:placeholder-shown {
			letter-spacing: 3px;
		}
	}

	textarea {
		&:placeholder-shown {
			letter-spacing: 0px;
		}
	}

	#name,
	#email,
	#message {
		&::-webkit-input-placeholder {
			color: var(--clr-main);
			font-weight: 100;
		}
	}

	.icons {
		display: grid;
		place-content: center;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		align-items: center;

		@media (width <= 768px) {
			margin-top: -15vw;
		}

		& .popover {
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

			& fieldset {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: var(--100);
				margin: 0 auto;
			}

			& input,
			& textarea {
				width: 100%;
				background-color: transparent;
				box-shadow: none;
				border: 3px solid var(--dark-gray);
				border-radius: var(--radius);
				caret-color: var(--sky);
				color: var(--white);
			}

			& textarea {
				padding: 0.5rem 1rem;
			}

			& legend {
				margin-bottom: 1rem;
			}

			& label {
				transform: translate(20px, 22px);
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
				color: var(--clr-inputs);

				@media (width <= 500px) {
					transform: translate(20px, 18px);
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
		}

		@media screen and (width >= 1024px) {
			& fieldset {
				border: 5px solid var(--white);
				border-image: linear-gradient(75deg, var(--clr-main), var(--clr-inverted)) 1;
				font-weight: bolder;
				padding: 2rem 5rem;
				border-radius: 10px;
				width: 90%;

				& input {
					margin-bottom: 1rem;
					transform: scale(1.05);
					width: var(--100);
				}

				& textarea {
					margin-bottom: 1rem;
					width: var(--100);
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

	legend {
		@media screen and (width >= 720px) {
			margin-bottom: 0;
		}
	}

	input,
	textarea {
		@media screen and (width >= 1350px) {
			padding: 2rem;
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
