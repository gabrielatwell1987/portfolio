<script>
	import Popup from '$lib/components/layout/Popup.svelte';
	import Modal from './Modal.svelte';
	import SendButton from '$lib/components/contact/SendButton.svelte';

	let name = $state('');
	let email = $state('');
	let message = $state('');
</script>

<div class="icons">
	<div class="popover">
		<Popup title="" text="Please provide a working email so I can message you back!" />
	</div>

	<Modal />
</div>

<form method="POST" action="https://form.taxi/s/xeyymb58">
	<fieldset>
		<legend>message me</legend>

		<label for="name"><span>name</span></label>
		<input type="text" id="name" name="name" bind:value={name} required />

		<label for="email"><span>email</span></label>
		<input type="email" id="email" name="email" bind:value={email} required />

		<label for="message"><span>message</span></label>
		<textarea type="text" id="message" name="message" bind:value={message} rows="5" required
		></textarea>

		<div class="send">
			<SendButton />
		</div>
	</fieldset>
</form>

<style>
	:root {
		--100: 100%;
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
		letter-spacing: 3px;
		color: var(--clr-blue);
		padding-inline: 1rem;
	}

	input,
	textarea {
		font-size: clamp(var(--sm), 2vw, var(--h4));
		outline: 1px solid var(--clr-gray);
	}

	input {
		&:placeholder-shown {
			letter-spacing: 3px;
		}

		&:focus {
			outline: none;
		}

		&:focus-visible {
			outline: 2px solid var(--clr-gray);
			border: none;
		}
	}

	input:user-valid,
	textarea:user-valid {
		outline: 2px solid var(--success);
	}

	input:user-invalid,
	textarea:user-invalid {
		outline: 2px solid var(--fail);
	}

	textarea {
		&:focus {
			outline: none;
		}

		&:focus-visible {
			outline: 2px solid var(--clr-gray);
			border: none;
		}

		&:placeholder-shown {
			letter-spacing: 3px;
		}
	}

	span {
		font-size: clamp(var(--sm), 1.25vw, var(--h4));
		font-weight: 800;
		letter-spacing: 3px;
		color: var(--clr-main);
	}

	#name::-webkit-input-placeholder,
	#email::-webkit-input-placeholder,
	#message::-webkit-input-placeholder {
		color: var(--clr-main);
		font-weight: 100;
	}

	.send {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 1rem;
	}

	.icons {
		display: grid;
		place-content: center;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		align-items: center;
	}

	.popover {
		display: flex;
		justify-content: space-evenly;
		margin-bottom: 15%;
	}

	@media screen and (width >= 320px) {
		form {
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
				& span {
					font-family: var(--bronova);
					font-size: clamp(var(--h6), 1.5vw, var(--h3));
					font-weight: 500;
				}
			}

			& .send {
				width: var(--100);
			}
		}
	}

	@media screen and (width >= 720px) {
		::backdrop {
			background: transparent;
			box-shadow: none;
		}

		legend {
			margin-bottom: 0;
		}
	}

	@media screen and (width >= 1024px) {
		form {
			& fieldset {
				border: 5px solid var(--white);
				border-image: linear-gradient(45deg, var(--clr-gray) 40%, var(--clr-blue)) 1;
				font-weight: bolder;
				padding: 2rem 5rem;
				border-radius: 10px;
				width: 90%;

				& label {
					margin-bottom: 1rem;
				}

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

	@media screen and (width >= 1350px) {
		input,
		textarea {
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
