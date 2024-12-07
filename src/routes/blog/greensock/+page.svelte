<script>
	import { fade } from 'svelte/transition';
	import { gsap } from 'gsap';
	import SEO from '$lib/data/SEO.svelte';
	import Button from '$lib/components/Button.svelte';
	import Iframe from '$lib/components/Iframe.svelte';
	import Heading from './Heading.svelte';
	import Popover from '$lib/components/Popover.svelte';

	// animations
	$effect(() => {
		const title = document.querySelector('.title');
		const popover = document.querySelector('.popover');

		gsap.set(title, { autoAlpha: 0, y: -100 });
		gsap.set(popover, { y: 75 });

		let tl = gsap.timeline({ defaults: { duration: 3 } });

		tl.to(title, { autoAlpha: 1, duration: 2, ease: 'back.out(4)' }, 0);

		console.log('Greensock page');

		document.querySelectorAll('details').forEach((details) => {
			details.addEventListener('toggle', (event) => {
				const content = event.target;

				if (content.open) {
					// opening
					content.style.maxHeight = `${content.scrollHeight}px`;

					// natural expansion
					content.addEventListener(
						'transitionend',
						() => {
							content.style.maxHeight = 'auto';
						},
						{ once: true }
					);
				} else {
					// closing
					content.style.maxHeight = `${content.scrollHeight}px`;
					requestAnimationFrame(() => {
						content.style.maxHeight = '5rem';
					});
				}
			});
		});
	});
</script>

<SEO
	title="Greensock Animation Platform"
	description="web animations"
	keywords="GSAP, animation, greensock how-to"
/>

<!-- spacing -->
<br /><br /><br /><br /><br /><br /><br />

<section transition:fade={{ delay: 250, duration: 300 }} class="main">
	<div class="separate">
		<h1 class="title">GSAP</h1>

		<main>
			<article class="popover">
				<Popover text="animation!" />
			</article>

			<div class="centerDetail">
				<details name="gsap">
					<!-- svelte-ignore a11y_no_redundant_roles -->
					<summary role="button" class="outline contrast spacing"
						><span class="margin"
							><b>What's GSAP? <i class="fa-solid fa-caret-right" style="color: var(--pale)"></i></b
							></span
						></summary
					>
					<p class="text">
						Greensock Animation Platform (GSAP) is a javascript library that allows you to animate
						your website. I really like animating the websites that I've built from scratch and GSAP
						makes it so easy to accomplish! The syntax is really simple which makes no learning
						curve at all. Other than that, it doesn't take up a lot of space to incorporate these
						techniques, which makes your web pages 100,000 times faster.
						<br /><br />
						Usually, websites use a mixture of GSAP and three js. GSAP makes animating in three js simple,
						so you can actually edit 3D stuff. What's great is that three js is essentially an easier
						webGL, so it makes animating with GSAP really simple!
					</p>
				</details>

				<details name="gsap">
					<!-- svelte-ignore a11y_no_redundant_roles -->
					<summary role="button" class="outline contrast spacing"
						><span class="margin"
							><b>Install <i class="fa-solid fa-caret-right" style="color: var(--pale)"></i></b
							></span
						></summary
					>
					<p class="text">
						In the project, you have to <code class="code">npm install gsap</code> (if you have
						Node.js installed) or you can use the CDN (content delivery network). In sveltekit, you
						have to put all of your GSAP code in an <code class="code">onMount</code> function that
						you have to import. This is because onMount is displayed once on initial load. If you
						were to use a regular script tag, it would not work. All of the designs that are
						animated on this website are all from GSAP. I tend to think that these animations make
						the website look a lot better than a static website. GSAP is a great tool to use for any
						web developer. I highly recommend it!
						<br /><br />
						You can install GSAP on any javascript framework you want to use! It works on Vue, React,
						Svelte, and Angular. GSAP uses integer values to edit the DOM, for the most part.. It's also
						good for vanilla JavaScript.
					</p>
				</details>

				<details name="gsap">
					<!-- svelte-ignore a11y_no_redundant_roles -->
					<summary role="button" class="outline contrast spacing"
						><span class="margin"
							><b>Syntax <i class="fa-solid fa-caret-right" style="color: var(--pale)"></i></b
							></span
						></summary
					>
					<p class="text">
						It is quite simple to use GSAP. You can use <code class="code"
							>gsap.to("element", &lbrace; variables &rbrace;)</code
						>
						to animate TO a state. You can use
						<code class="code">gsap.from("element", &lbrace; variables &rbrace;)</code>
						to animate FROM a state. You can use
						<code class="code"
							>gsap.fromTo("element", &lbrace; variables &rbrace;, &lbrace; variables &rbrace;)</code
						>
						to animate FROM a state TO another state.
						<br /><br />
						The complete syntax is as follows:
						<code class="code">gsap.to("element", &lbrace; variables &rbrace;)</code>. You can use
						the following variables: duration, delay, ease, stagger, and onComplete. The duration is
						how long the animation will last. The delay is how long the animation will wait before
						starting. The ease is the easing function that you want to use. The stagger is how long
						the animation will wait before starting. The onComplete is the function that will run
						after the animation is complete.
					</p>
				</details>

				<details name="gsap">
					<!-- svelte-ignore a11y_no_redundant_roles -->
					<summary role="button" class="outline contrast spacing"
						><span class="margin"><b>Variables</b></span>
						<i class="fa-solid fa-caret-right" style="color: var(--pale)"></i></summary
					>
					<p class="text">
						<Heading title="x, y, z" /> Control the position of an element along the x, y, and z axes.<br
						/>
						<Heading title="rotation" /> Rotates an element in degrees.<br />
						<Heading title="scale" /> Scales an element uniformly on all axes.<br />
						<Heading title="scaleX, scaleY, scaleZ" /> Scale an element along the x, y, and z axes individually.<br
						/>
						<Heading title="opacity" /> Controls the transparency of an element.<br />
						<Heading title="width, height" /> Animates the width and height of an element.<br />
						<Heading title="color, backgroundColor" /> Changes the color or background color of an element.<br
						/>
						<Heading title="borderRadius" /> Animates the border-radius property of an element.<br
						/>
						<Heading title="skewX, skewY" /> Skews an element along the x and y axes.<br />
						<Heading title="rotationX, rotationY, rotationZ" /> Rotate an element in 3D space along the
						x, y, and z axes.<br />
						<Heading title="duration" /> Specifies the duration of the animation.<br />
						<Heading title="delay" /> Delays the start of the animation.<br />
						<Heading title="repeat" /> Specifies how many times an animation should repeat.<br />
						<Heading title="yoyo" /> When set to true, makes the animation reverse back to the starting
						point after completing.<br />
						<Heading title="ease" /> Controls the easing of the animation (e.g: ease: 'power1.inOut').<br
						/>
						<Heading title="onStart" /> Callback function that fires when the animation starts.<br
						/>
						<Heading title="onComplete" /> Callback function that fires when the animation completes.<br
						/>
						<Heading title="onUpdate" /> Callback function that fires on each frame during the animation.<br
						/>
						<Heading title="onRepeat" /> Callback function that fires each time the animation repeats.<br
						/>
						<Heading title="paused" /> If true, the animation starts in a paused state.<br />
						<Heading title="stagger" /> Staggers the start times of animations in an array or NodeList.<br
						/>
						<Heading title="scrub" /> Syncs animations with scroll position (used with ScrollTrigger).<br
						/>
						<Heading title="overwrite" /> Controls how existing tweens are overwritten (auto, none, all).<br
						/>
						<Heading title="immediateRender" /> Renders the tween immediately upon creation.<br />
						<Heading title="keyframes" /> Defines multiple animation states within a single tween.<br
						/>
						<Heading title="lazy" /> Defers rendering to reduce startup performance cost.<br />
						<Heading title="id" /> Assigns a unique identifier to the tween for later reference.<br
						/>
						<Heading title="autoAlpha" /> Combines opacity and visibility (hides an element when opacity
						reaches 0).<br />
						<Heading title="kill" /> Kills the tween or timeline.<br />
						<Heading title="timeScale" /> Adjusts the speed of the animation.<br />
						<Heading title="progress" /> Sets or gets the progress of the animation.<br />
						<Heading title="reverse" /> Reverses the animation.<br />
						<Heading title="seek" /> Moves the playhead to a specific time or label.<br />
						<Heading title="repeatDelay" /> Sets the delay between repeats.<br />
						<Heading title="endTime" /> Gets the end time of the animation.<br />
					</p>
				</details>
			</div>

			<div class="iframe">
				<Iframe
					src="https://www.youtube.com/embed/M4GCT-2kaoo?si=yj8-27t052nokvkT"
					title="YouTube video player"
				/>
			</div>

			<h3 class="learn">Learn more about GSAP</h3>
			<p class="center">
				If you would like to know more about <a
					class="link"
					href="https://greensock.com"
					aria-label="greensock">greensock</a
				>, click the link!
			</p>

			<div class="back">
				<Button href="/blog" title="Back" />
			</div>
		</main>
	</div>
</section>
<!-- footer spacing -->
<br />

<style>
	:root {
		--100: 100%;
	}

	main {
		width: 75%;
		border-radius: 10px;
		margin: 0 auto;
	}

	details {
		width: 50%;
		margin-left: 24.5%;
		margin-bottom: 2rem;
		position: relative;

		border: none;
		outline: none;
		-webkit-appearance: none;
		appearance: none;

		overflow: hidden; /* Ensures content doesn't spill out */
		transition: max-height 0.75s ease-in-out; /* Smooth height transition */
		max-height: 5rem; /* Closed height (enough to show summary) */
		padding: 1rem;

		&[open] {
			max-height: 500px; /* Adjust this to be large enough for all content */
		}

		&[open] i {
			animation: rotate 0.5s ease-in-out forwards;
		}

		&:not([open]) i {
			animation: un-rotate 0.5s ease-in-out forwards;
		}
	}

	p.text {
		overflow: hidden;
	}

	p {
		text-align: left;
		margin-bottom: 0 0 2rem 0;
		padding: 0.5em 2em;
		padding-top: 2.5em;
		line-height: 2.5;
		font-family: var(--bronova);
		width: var(--100);
	}

	.link {
		text-decoration: none;
		font-size: clamp(1.5rem, 3vw, 2rem);
		font-weight: 700;
		text-decoration: none;
		color: var(--purple);
		font-family: var(--orbitron);

		&:hover {
			text-decoration: underline;
			color: #fff;
		}
	}

	.title {
		font-size: clamp(3.75rem, 8vw, 10rem);
		font-weight: 800;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: -7em;
		text-align: center;
		color: var(--smoke);
		font-family: var(--anta);
		text-shadow: 0px 0px 25px var(--dark-blue);
	}

	.learn {
		margin: 5rem 0 -1rem 0;
		text-align: center;
		font-family: var(--anta);
		color: var(--sky);
		font-size: clamp(1.5rem, 3vw, 2.5rem);
	}

	.text {
		font-size: clamp(1.15rem, 1.25vw, 1.5rem);
	}

	.popover {
		background: transparent;
		box-shadow: none;
	}

	.centerDetail {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
		margin-top: -40%;
	}

	.separate {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (min-width: 300px) {
		.main {
			margin: 0 auto;
			margin-right: 1rem;
		}

		details {
			min-width: 5rem;
			width: 17rem;
			margin: 0 auto;
		}

		summary {
			margin-left: -1rem;
			color: var(--off-white);
			border-color: var(--off-white);
			font-family: var(--mono);
			font-size: clamp(1rem, 1.25vw, 1.5rem);
		}

		.text {
			min-width: 20rem;
			margin: 0 -4.75rem;
			margin-left: -2.5rem;
			line-height: 1.5;
			color: var(--white);
		}

		.center {
			text-align: center;
			font-size: clamp(1rem, 2vw, 1.35rem);
			margin-top: -2rem;
			line-height: 1.5;
		}

		code {
			font-family: var(--mono);
		}

		.back {
			margin-top: 5%;
			width: var(--100);
		}

		.popover {
			display: none;
		}

		.iframe {
			margin: 0 auto;
			margin-left: -15%;
		}

		.centerDetail {
			margin-top: 170%;
		}

		.margin {
			margin-left: 0;
		}

		.title {
			margin-bottom: -6em;
		}
	}

	@media (min-width: 500px) {
		.text {
			margin-left: -2.5rem;
		}

		details {
			width: 15rem;
		}

		.iframe {
			margin-left: 0;
		}

		.centerDetail {
			margin-top: 75%;
		}

		.title {
			margin-bottom: -55%;
		}
	}

	@media (min-width: 720px) {
		.center {
			margin-top: -3rem;
		}

		.back {
			width: var(--100);
		}

		.centerDetail {
			margin-top: 60%;
		}

		.margin {
			margin-left: 3rem;
		}

		.title {
			margin-bottom: -45%;
		}
	}

	@media (min-width: 990px) {
		.spacing {
			letter-spacing: 2px;
		}

		details {
			width: var(--100);
		}

		.back {
			width: var(--100);
			margin-inline: auto;
		}

		.popover {
			display: block;
		}

		.centerDetail {
			margin-top: -50%;
		}

		.title {
			margin-bottom: -20%;
		}
	}

	@media (min-width: 1024px) {
		main {
			margin-top: 15%;
		}

		.center {
			margin-bottom: 5%;
		}

		.popover {
			margin-top: -5%;
		}
	}

	@media (min-width: 1200px) {
		.popover {
			margin-top: -10%;
			margin-bottom: 5em;
		}
	}

	@media (min-width: 1400px) {
		.popover {
			margin-top: 15%;
		}

		.title {
			margin-bottom: -30%;
		}

		.centerDetail {
			margin-top: -38%;
		}
	}

	@media (min-width: 1500px) {
		.title {
			margin-bottom: -25%;
		}

		.popover {
			margin-block: 10%;
		}
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(90deg);
		}
	}

	@keyframes un-rotate {
		from {
			transform: rotate(90deg);
		}
		to {
			transform: rotate(0deg);
		}
	}
</style>
