<script>
	import SEO from '$lib/data/SEO.svelte';
	import Title from '$lib/components/layout/Title.svelte';
	import Button from '$lib/components/layout/Button.svelte';
	import Iframe from '$lib/components/learn/Iframe.svelte';
	import Heading from './Heading.svelte';
	import Learn from '$lib/components/learn/Learn.svelte';

	let detailsVisible = $state(false);

	// animations
	$effect(() => {
		setTimeout(() => {
			detailsVisible = true;
		}, 100);
	});
</script>

<SEO
	title="Greensock animation platform"
	description="web animations"
	keywords="GSAP, greensock animation platform, web animation, greensock how to"
/>

<section class="main">
	<div class="separate">
		<div class="margin">
			<Title title="GSAP" />
		</div>

		<main>
			<div class="centerDetail">
				<details
					name="gsap"
					class:animate-in={detailsVisible}
					style="--anim-delay: 0s; visibility: hidden;"
				>
					<!-- svelte-ignore a11y_no_redundant_roles -->
					<summary role="button" class="outline contrast spacing"
						><span class="margin"><b>What's GSAP?</b></span></summary
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

				<details
					name="gsap"
					class:animate-in={detailsVisible}
					style="--anim-delay: 0.5s; visibility: hidden;"
				>
					<!-- svelte-ignore a11y_no_redundant_roles -->
					<summary role="button" class="outline contrast spacing"
						><span class="margin"><b>Install</b></span></summary
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

				<details
					name="gsap"
					class:animate-in={detailsVisible}
					style="--anim-delay: 1s; visibility: hidden;"
				>
					<!-- svelte-ignore a11y_no_redundant_roles -->
					<summary role="button" class="outline contrast spacing"
						><span class="margin"><b>Syntax</b></span></summary
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

				<details
					name="gsap"
					class:animate-in={detailsVisible}
					style="--anim-delay: 1.5s; visibility: hidden;"
				>
					<!-- svelte-ignore a11y_no_redundant_roles -->
					<summary role="button" class="outline contrast spacing"
						><span class="margin"><b>Variables</b></span>
					</summary>
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

			<Iframe
				src="https://www.youtube.com/embed/M4GCT-2kaoo?si=yj8-27t052nokvkT"
				title="YouTube video player"
			/>

			<Learn href="https://greensock.com" title="greensock" />

			<div class="back">
				<Button href="/learn" title="Back" />
			</div>
		</main>
	</div>
</section>

<style>
	:root {
		--100: 100%;
		interpolate-size: allow-keywords;
	}

	.animate-in {
		animation: fadeInUp 1s ease forwards;
		animation-delay: var(--anim-delay, 0s);
	}

	section {
		main {
			& .centerDetail {
				& details {
					max-width: 90vw;
					margin-inline: auto;
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

					& summary {
						color: var(--clr-blue);
						border-color: var(--clr-gray);
					}
				}

				& .text {
					color: var(--clr-main);
				}
			}
		}

		& .margin {
			margin-block: 5rem;
		}
	}

	@media (width <= 768px) {
		details {
			& summary {
				color: var(--clr-blue);
				border-color: var(--clr-gray);
			}
		}
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(100px);
			visibility: hidden;
		}
		to {
			opacity: 1;
			transform: translateY(0);
			visibility: visible;
		}
	}
</style>
