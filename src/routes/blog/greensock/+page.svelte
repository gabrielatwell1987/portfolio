<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import Button from '$lib/components/Button.svelte';
	import Iframe from '$lib/components/Iframe.svelte';
	import Heading from './Heading.svelte';
	import Popover from '$lib/components/Popover.svelte';
	import { blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import SEO from '$lib/data/SEO.svelte';

	// animations
	onMount(() => {
		const title = document.querySelector('.title');
		const popover = document.querySelector('.popover');

		gsap.set(title, { autoAlpha: 0, y: -100 });
		gsap.set(popover, { y: 75 });

		let tl = gsap.timeline({ defaults: { duration: 3 } });

		tl.to(title, { autoAlpha: 1, duration: 2, ease: 'back.out(4)' }, 0);
	});

	$: console.log('Greensock page');

	// details animation
	function resetAnimation(event) {
		const detail = event.currentTarget;
		if (detail.open) {
			const summary = detail.querySelector('summary');
			const content = summary.nextElementSibling;

			content.style.display = 'none';
			content.offsetHeight; // Force reflow
			content.style.display = '';

			// Optionally reset animation with class
			content.classList.remove('animate');
			void content.offsetWidth; // Force reflow again
			content.classList.add('animate');
		}
	}
</script>

<SEO title="Greensock Animation Platform" description="web animations" keywords="GSAP, animation" />

<!-- spacing -->
<br /><br /><br /><br /><br /><br /><br />

<section in:blur={{ delay: 350, duration: 1500, easing: quintOut, amount: '1rem' }} class="main">
	<!-- title -->
	<h1 class="title">GSAP</h1>

	<main>
		<!-- popover -->
		<article class="popover">
			<Popover text="animate the web" />
		</article>

		<div class="centerDetail">
			<details name="gsap" on:toggle={resetAnimation}>
				<!-- svelte-ignore a11y-no-redundant-roles -->
				<summary role="button" class="outline contrast spacing"
					><span class="margin"><b>What is GSAP?</b></span></summary
				>
				<p class="text">
					Greensock Animation Platform (GSAP) is a javascript library that allows you to animate
					your website. I really like animating the websites that I've built from scratch and GSAP
					makes it so easy to accomplish! The syntax is really simple which makes no learning curve
					at all. Other than that, it doesn't take up a lot of space to encorporate these
					techniques, which makes your web pages 100,000 times faster.
					<br /><br />
					Usually, websites use a mixture of GSAP and three js. GSAP makes animating in three js simple,
					so you can actually edit 3D stuff. What's great is that three js is essentially an easier webGL,
					so it makes animating with GSAP really simple!
				</p>
			</details>

			<details name="gsap" on:toggle={resetAnimation}>
				<!-- svelte-ignore a11y-no-redundant-roles -->
				<summary role="button" class="outline contrast spacing"
					><span class="margin"><b>How do you install GSAP?</b></span></summary
				>
				<p class="text">
					In the project, you have to <code class="code">npm install gsap</code> (if you have
					Node.js installed) or you can use the CDN (content delivery network). In sveltekit, you
					have to put all of your GSAP code in an <code class="code">onMount</code> function that
					you have to import. This is because onMount is displayed once on initial load. If you were
					to use a regular script tag, it would not work. All of the designs that are animated on
					this website are all from GSAP. I tend to think that these animations make the website
					look a lot better than a static website. GSAP is a great tool to use for any web
					developer. I highly recommend it!
					<br /><br />
					You can install GSAP on any javascript framework you want to use! It works on Vue, React, Svelte,
					and Angular. GSAP uses integer values to edit the DOM, for the most part.. It's also good for
					vanilla JavaScript.
				</p>
			</details>

			<details name="gsap" on:toggle={resetAnimation}>
				<!-- svelte-ignore a11y-no-redundant-roles -->
				<summary role="button" class="outline contrast spacing"
					><span class="margin"><b>The syntax</b></span></summary
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
					<code class="code">gsap.to("element", &lbrace; variables &rbrace;)</code>. You can use the
					following variables: duration, delay, ease, stagger, and onComplete. The duration is how
					long the animation will last. The delay is how long the animation will wait before
					starting. The ease is the easing function that you want to use. The stagger is how long
					the animation will wait before starting. The onComplete is the function that will run
					after the animation is complete.
				</p>
			</details>

			<details name="gsap" on:toggle={resetAnimation}>
				<!-- svelte-ignore a11y-no-redundant-roles -->
				<summary role="button" class="outline contrast spacing"
					><span class="margin"><b>Variables</b></span></summary
				>
				<p class="text">
					<Heading title="x, y, z" /> Control the position of an element along the x, y, and z axes.<br
					/><br />
					<Heading title="rotation" /> Rotates an element in degrees.<br /><br />
					<Heading title="scale" /> Scales an element uniformly on all axes.<br /><br />
					<Heading title="scaleX, scaleY, scaleZ" /> Scale an element along the x, y, and z axes individually.<br
					/><br />
					<Heading title="opacity" /> Controls the transparency of an element.<br /><br />
					<Heading title="width, height" /> Animates the width and height of an element.<br /><br />
					<Heading title="color, backgroundColor" /> Changes the color or background color of an element.<br
					/><br />
					<Heading title="borderRadius" /> Animates the border-radius property of an element.<br
					/><br />
					<Heading title="skewX, skewY" /> Skews an element along the x and y axes.<br /><br />
					<Heading title="rotationX, rotationY, rotationZ" /> Rotate an element in 3D space along the
					x, y, and z axes.<br /><br />
					<Heading title="duration" /> Specifies the duration of the animation.<br /><br />
					<Heading title="delay" /> Delays the start of the animation.<br /><br />
					<Heading title="repeat" /> Specifies how many times an animation should repeat.<br /><br
					/>
					<Heading title="yoyo" /> When set to true, makes the animation reverse back to the starting
					point after completing.<br /><br />
					<Heading title="ease" /> Controls the easing of the animation (e.g: ease: 'power1.inOut').<br
					/><br />
					<Heading title="onStart" /> Callback function that fires when the animation starts.<br
					/><br />
					<Heading title="onComplete" /> Callback function that fires when the animation completes.<br
					/><br />
					<Heading title="onUpdate" /> Callback function that fires on each frame during the animation.<br
					/>
					<Heading title="onRepeat" /> Callback function that fires each time the animation repeats.<br
					/><br />
					<Heading title="paused" /> If true, the animation starts in a paused state.<br /><br />
					<Heading title="stagger" /> Staggers the start times of animations in an array or NodeList.<br
					/><br />
					<Heading title="scrub" /> Syncs animations with scroll position (used with ScrollTrigger).<br
					/><br />
					<Heading title="overwrite" /> Controls how existing tweens are overwritten (auto, none, all).<br
					/><br />
					<Heading title="immediateRender" /> Renders the tween immediately upon creation.<br /><br
					/>
					<Heading title="keyframes" /> Defines multiple animation states within a single tween.<br
					/><br />
					<Heading title="lazy" /> Defers rendering to reduce startup performance cost.<br /><br />
					<Heading title="id" /> Assigns a unique identifier to the tween for later reference.<br
					/><br />
					<Heading title="autoAlpha" /> Combines opacity and visibility (hides an element when opacity
					reaches 0).<br /><br />
					<Heading title="kill" /> Kills the tween or timeline.<br /><br />
					<Heading title="timeScale" /> Adjusts the speed of the animation.<br /><br />
					<Heading title="progress" /> Sets or gets the progress of the animation.<br /><br />
					<Heading title="reverse" /> Reverses the animation.<br /><br />
					<Heading title="seek" /> Moves the playhead to a specific time or label.<br /><br />
					<Heading title="repeatDelay" /> Sets the delay between repeats.<br /><br />
					<Heading title="endTime" /> Gets the end time of the animation.<br /><br />
				</p>
			</details>
		</div>

		<!-- video -->
		<div class="iframe">
			<Iframe
				src="https://www.youtube.com/embed/M4GCT-2kaoo?si=yj8-27t052nokvkT"
				title="YouTube video player"
			/>
		</div>

		<!-- learn section -->
		<h3 class="learn">Learn more about GSAP</h3>
		<p class="center">
			If you would like to know more about <a
				class="link"
				href="https://greensock.com"
				aria-label="greensock">greensock</a
			>, click the link!
		</p>

		<!-- back button -->
		<div class="back">
			<a href="/blog"><Button title="Back" /></a>
		</div>
	</main>
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
	}

	details[open] summary ~ * {
		animation: open 0.5s ease-in-out;
	}

	p {
		text-align: left;
		margin-bottom: 0 0 2rem 0;
		padding: 0.5em 2em;
		padding-top: 2.5em;
		line-height: 2.5;
		font-family: var(--montserrat);
		width: var(--100);
	}

	.link {
		text-decoration: none;
		font-size: 1.5rem;
		color: var(--purple);
		font-family: var(--orbitron);
		font-weight: 799;
	}

	.link:hover {
		text-decoration: underline;
		color: #fff;
	}

	.title {
		font-size: clamp(3.75rem, 8vw, 10rem);
		font-weight: 800;
		margin: 3rem 0 -27rem 0;
		text-align: center;
		color: var(--smoke);
		font-family: var(--anta);
		text-shadow: 0px 0px 25px var(--blue);
	}

	.learn {
		margin: 5rem 0 -1rem 0;
		text-align: center;
		font-family: var(--anta);
		color: var(--sky);
		font-size: clamp(1.5rem, 3vw, 2.5rem);
	}

	.text {
		font-size: clamp(1.05rem, 2vw, 1.5rem);
	}

	.popover {
		background: transparent;
	}

	.centerDetail {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
		margin-top: -40%;
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
		}

		.text {
			min-width: 20rem;
			margin: 0 -4.75rem;
			margin-left: -2.5rem;
			font-family: var(--lexend);
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

		a {
			text-decoration: none;
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
	}

	@media (min-width: 990px) {
		.spacing {
			letter-spacing: 2px;
		}

		summary {
			font-size: 1.5rem;
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
			margin-top: 25%;
		}

		.centerDetail {
			margin-top: -30%;
		}
	}

	@media (min-width: 1024px) {
		summary {
			font-size: 1.75rem;
		}

		.center {
			margin-bottom: 5%;
		}

		.popover {
			margin-top: 20%;
		}
	}

	@media (min-width: 1400px) {
		.popover {
			margin-top: 15%;
		}
	}

	@keyframes open {
		from {
			opacity: 0;
			margin-top: -10px;
		}
		to {
			opacity: 1;
			margin-top: 0px;
		}
	}
</style>
