<script>
	import Popup from '$lib/components/layout/Popup.svelte';
	import Modal from './Modal.svelte';
	import SubmitButton from '$lib/components/contact/SubmitButton.svelte';
	import A11yAnnouncer from '$lib/components/layout/A11yAnnouncer.svelte';
	import MotifPhoto from './MotifPhoto.svelte';

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let submitStatus = $state('');
</script>

<div class="icons">
	<div class="popover">
		<Popup title="" text="Please provide a working email so I can message you back!" />
	</div>

	<Modal />
</div>

<div class="personal-image">
	<MotifPhoto
		content={`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M80.92,51.337l4.851-1.617V2.828H14.625V49.72l4.851,1.617V7.679H80.92V51.337z M95.472,41.635l-4.851,4.851V91.76H9.775  V46.486l-4.851-4.851v54.976h90.549V41.635z M84.154,33.55l-1.617,4.851l9.702,6.468l3.234-3.234L84.154,33.55z M92.239,94.994  l3.234-3.234L50.198,61.038L4.924,91.76l3.234,3.234l42.04-27.488L92.239,94.994z M59.9,70.74l35.573-24.254l-3.234-3.234  l-37.19,24.254L59.9,70.74z M45.347,67.506L8.158,43.252l-3.234,3.234L40.496,70.74L45.347,67.506z M17.859,38.401l-1.617-4.851  L4.924,41.635l3.234,3.234L17.859,38.401z" fill="var(--clr-main)""/></svg>`}
	/>
	<!-- <MotifPhoto content="/images/gabe-sketch.webp" /> -->
</div>

<!-- Live region for form status announcements -->
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
				placeholder="Your Message"
			></textarea>
		</div>

		<div class="submit-button">
			<SubmitButton />
		</div>
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

	.personal-image {
		margin-bottom: 2.5em;
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
			/* margin-bottom: 15%; */
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
			color: var(--clr-main);
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
				border: 3px solid var(--dark-gray);
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
					font-weight: 100;
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
