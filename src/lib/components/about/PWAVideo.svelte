<script>
	let { title, videoSrc } = $props();

	const videoId = `video-popover-${Math.random().toString(36).substr(2, 9)}`;
	let videoPopoverElement = $state(null);

	function openVideoPopover() {
		setTimeout(() => {
			if (!videoPopoverElement) {
				console.error('Popover element not found!');
				return;
			}

			// Check if Popover API is supported
			if (typeof videoPopoverElement.showPopover === 'function') {
				if (!document.startViewTransition) {
					videoPopoverElement.showPopover();
					return;
				}

				document.startViewTransition(() => {
					videoPopoverElement.showPopover();
				});
			} else {
				// Fallback for unsupported browsers: manually show/hide via CSS classes
				console.warn('Popover API not supported. Using fallback.');
				videoPopoverElement.style.display = 'block';
				videoPopoverElement.style.opacity = '1';
				videoPopoverElement.style.transform = 'translateY(0)';
			}
		}, 0);
	}

	function closeVideoPopover() {
		if (!videoPopoverElement) return;

		if (typeof videoPopoverElement.hidePopover === 'function') {
			if (!document.startViewTransition) {
				videoPopoverElement.hidePopover();
				return;
			}

			document.startViewTransition(() => {
				videoPopoverElement.hidePopover();
			});
		} else {
			// Fallback: manually hide
			videoPopoverElement.style.opacity = '0';
			videoPopoverElement.style.transform = 'translateY(-5rem)';
			videoPopoverElement.style.display = 'none';
		}
	}
</script>

<section class="video-Popover" aria-label="pwa video tutorial">
	<button type="button" onclick={openVideoPopover}>
		{title}
	</button>

	<div id={videoId} popover="auto" bind:this={videoPopoverElement} data-video-popover>
		<button type="button" onclick={closeVideoPopover} class="close-btn" aria-label="Close">
			<svg
				width="800px"
				height="800px"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M8.00191 9.41621C7.61138 9.02569 7.61138 8.39252 8.00191 8.002C8.39243 7.61147 9.0256 7.61147 9.41612 8.002L12.0057 10.5916L14.5896 8.00771C14.9801 7.61719 15.6133 7.61719 16.0038 8.00771C16.3943 8.39824 16.3943 9.0314 16.0038 9.42193L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.004C15.6133 16.3945 14.9802 16.3945 14.5896 16.004L12.0057 13.42L9.42192 16.0038C9.03139 16.3943 8.39823 16.3943 8.00771 16.0038C7.61718 15.6133 7.61718 14.9801 8.00771 14.5896L10.5915 12.0058L8.00191 9.41621Z"
					fill="var(--fail)"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4Z"
					fill="var(--fail)"
				/>
			</svg>
		</button>

		<div class="video-wrapper">
			<div class="responsive-iframe">
				<iframe
					src={videoSrc}
					{title}
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
					allowfullscreen
					aria-label={title}
				></iframe>
			</div>
		</div>
	</div>
</section>

<style>
	.video-Popover {
		display: inline-block;

		&:focus,
		&:focus-visible {
			outline: 1px solid var(--clr-main);
			background: transparent;
		}

		& .close-btn {
			position: absolute;
			top: 0.5rem;
			right: 1rem;
			background: transparent;
			border: none;
			color: var(--fail);
			font-family: var(--bronova);
			font-size: clamp(var(--h2), 3vw, var(--h2));
			cursor: pointer;
			padding: 0;
			margin: 0;
			line-height: 1;
			z-index: 10;

			&:hover {
				opacity: 0.9;
			}

			&:active {
				transform: scale(0.97);
			}

			& svg {
				width: clamp(1.75rem, 3vw, 2.5rem);
				height: clamp(1.75rem, 3vw, 2.5rem);
			}
		}

		button {
			background-color: transparent;
			filter: brightness(1);
			color: var(--clr-green);
			width: fit-content;
			font-family: var(--bronova);
			font-size: clamp(var(--h6), 1.5vw, var(--h4));
			font-weight: 600;
			margin: 0;
			padding: 0;
			border: none;
			cursor: pointer;
			min-height: 44px;
			min-width: 44px;

			&:not(:hover) {
				opacity: 0.85;
			}

			&:active {
				transform: scale(0.97);
			}
		}

		& [popover][data-video-popover] {
			inline-size: min(95%, 900px);
			block-size: clamp(40vh, 65%, 90vh);
			max-block-size: 90vh;
			padding: 3.5rem 1.5rem 1.5rem;
			margin-inline: auto;
			margin-block: auto;
			position: fixed;
			inset: 0;
			overflow: auto;
			color: var(--clr-main);

			@media (width <= 768px) {
				inline-size: 95%;
				padding: 3rem 1rem 1rem;
				max-block-size: 50vh;
			}

			@media (width <= 500px) {
				inline-size: 98%;
				max-block-size: 40vh;
			}
		}
	}

	.video-wrapper {
		inline-size: 100%;
		max-inline-size: 800px;
		margin-inline: auto;

		& .responsive-iframe {
			position: relative;
			inline-size: 100%;
			max-inline-size: 100%;
			block-size: 0;
			padding-bottom: 56.25%;
			overflow: hidden;
			border: 2px solid var(--dark-gray);
			border-radius: var(--radius);

			& iframe {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
		}
	}

	[popover] {
		position: relative;
		border: 3px solid var(--clr-gray);
		border-radius: 0.5rem;
		box-shadow: var(--blackest) 0px 20px 25px -5px;
		display: none;
		opacity: 0;
		transform: translateY(-5rem);
		transition: all 0.5s allow-discrete;
	}

	[popover]:popover-open {
		display: block;
		opacity: 1;
		transform: translateY(0);
	}

	@starting-style {
		[popover]:popover-open {
			display: block;
			opacity: 0;
			transform: translateY(2rem);
		}
	}

	[popover]::backdrop {
		background-color: rgb(0 0 0 / 0%);
		transition:
			display 0.5s allow-discrete,
			overlay 0.5s allow-discrete,
			background-color 0.5s;
	}

	[popover]:popover-open::backdrop {
		background-color: rgb(0 0 0 / 50%);
		backdrop-filter: blur(4px);
	}

	@starting-style {
		[popover]:popover-open::backdrop {
			background-color: rgb(0 0 0 / 0%);
		}
	}

	::view-transition-group(video-title) {
		animation-duration: 0.5s;
		animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	::view-transition-old(video-title),
	::view-transition-new(video-title) {
		mix-blend-mode: normal;
	}
</style>
