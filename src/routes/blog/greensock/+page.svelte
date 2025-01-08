<script>
	import { fade } from 'svelte/transition';
	import { gsap } from 'gsap';
	import Title from '$lib/components/Title.svelte';
	import SEO from '$lib/data/SEO.svelte';
	import Button from '$lib/components/Button.svelte';
	import Iframe from '$lib/components/Iframe.svelte';
	import Heading from './Heading.svelte';
	import Popover from '$lib/components/Popover.svelte';
	import Learn from '$lib/components/Learn.svelte';

	let duration = $state(300);
	let delay = $state(100);

	// animations
	$effect(() => {
		const title = document.querySelector('.title');
		const popover = document.querySelector('.popover');

		gsap.set(title, { autoAlpha: 0, y: -100 });
		gsap.set(popover, { y: 75 });

		let tl = gsap.timeline({ defaults: { duration: 3 } });

		tl.to(title, { autoAlpha: 1, duration: 2, ease: 'back.out(4)' }, 0);

		return () => {
			gsap.killTweensOf(title);
			gsap.killTweensOf(popover);
		};
	});
</script>

<SEO
	title="Greensock Animation Platform"
	description="web animations"
	keywords="GSAP, greensock animation platform, web animation, greensock how to"
/>

<section transition:fade={{ delay: delay, duration: duration }} class="main">
	<div class="separate">
		<div class="margin">
			<Title title="GSAP" />
		</div>

		<main>
			<Popover text="animation!" />

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
						have to put all of your GSAP code in a <code class="code">$effect</code> rune that runs
						the code when mounted, $effect is displayed once on initial load. If you were to use a
						regular script tag, it would not work. All of the designs that are animated on this
						website are mostly from GSAP, but a lot of them are css too. I tend to think that these
						animations make the website look a lot better than a static website. GSAP is a great
						tool to use for any web developer. I highly recommend it!
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

			<Learn href="https://greensock.com" title="greensock" />

			<div class="back">
				<Button href="/blog" title="Back" />
			</div>
		</main>
	</div>
</section>

<style>
	:root {
		--100: 100%;
		interpolate-size: allow-keywords;
	}

	section {
		padding-top: 10rem;
		overflow: hidden;
	}

	.margin {
		margin: 0;
		margin-bottom: -35em;
	}

	main {
		width: 75%;
		border-radius: 10px;
		margin: 0 auto;
		margin-bottom: 5rem;
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

		overflow: hidden;
		padding: 1rem;
		inline-size: 100ch;

		&::details-content {
			opacity: 0;
			block-size: 0;
			overflow-y: clip;
			transition:
				content-visibility 1s allow-discrete,
				opacity 1s,
				block-size 1s;
		}

		&[open]::details-content {
			opacity: 1;
			block-size: auto;
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
		margin-bottom: 2rem;
		padding: 0.5em 2em;
		padding-top: 2.5em;
		line-height: 2.5;
		font-family: var(--bronova);
		width: var(--100);
	}

	.text {
		font-size: clamp(1.15rem, 1.25vw, 1.5rem);
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

		code {
			font-family: var(--mono);
		}

		.back {
			margin-top: 5%;
			width: var(--100);
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
			margin-top: -9em;
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
		.back {
			width: var(--100);
		}

		.centerDetail {
			margin-top: 60%;
		}

		.margin {
			margin-left: 3rem;
			margin-top: -5em;
		}

		.text {
			line-height: 1.75;
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

		.centerDetail {
			margin-top: -50%;
		}
	}

	@media (min-width: 1024px) {
		main {
			margin-top: 10%;
		}
	}

	@media (min-width: 1400px) {
		.centerDetail {
			margin-top: -38%;
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
