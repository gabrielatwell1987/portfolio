# Greensock Animation Platform

<div id="tweens">

## Tweens

</div>

In web animation, a tween stands for "in-betweening". Basically, it is the foundation for the whole GSAP process. There are 3 types of tweens: `gsap.to("element", { variables })` animating one state TO another state, `gsap.from("element", { variables })` animating one state FROM another state, `gsap.fromTo("element", { variables }, { variables })` specifically choosing the STARTING and ENDING state.

![gsap tweens](/code/tweens.webp)

<div id="staggers">

## Staggers

</div>

A value of stagger: 0.1 would cause there to be 0.1 seconds between the start times of each tween. You can even stagger items that are laid out in a grid just by telling GSAP how many columns and rows your grid has. A negative value would do the same but backwards so that the last element begins first. All tweens recognize a stagger property which can be a number, an object, or a function. To get more control, wrap things in a configuration object which can have any of the following properties (in addition to most of the special properties that tweens have.

### Functions

Only use this if you need to run custom logic for distributing the staggers. The function gets called once for each target/element in the Array and should return the total delay from the starting position (not the amount of delay from the previous tween's start time). The function receives the following parameters: index [Integer] - The index value from the list, target [Object] - The target in the list at that index value, list [Array | NodeList] - The targets array (or NodeList).

![gsap staggers](/code/staggers.webp)

<div id="timelines">

## Timelines

</div>

Just like we've seen with staggers, It's common to animate more than one thing. But what if we need more control over the order and timing of those animations? A lot of people reach for delays, and they're not wrong, delays do give us rudimentary control. But this method of sequencing animations is a little fragile. What happens if we lengthen the duration of the first tween? The second and third tweens have no awareness of this change, so now there's an overlap - we'd have to increase all of the delays to keep them synchronized. If you've animated with CSS you will have run into this problem before. But what if we want to add a gap or delay in between some of the tweens? One option would be to add a delay to a tween to offset it's start time. But this isn't hugely flexible. What if we want tweens to overlap or start at the same time?

Timelines makes sequencing multiple tweens really easy and faster to code, in the long run. You can also position them with the position parameter.

![gsap timelines](/code/timelines.webp)

<div id="percentage">

## Percentage Keyframes

</div>

This familiar syntax makes porting animations over from CSS really easy. Instead of using delays and duration in the keyframe object, you specify an overall duration on the tween itself, then define the position of each keyframe using percentages.

![gsap percentage keyframes](/code/keyframes.webp)

<div id="position">

## Position Parameter

</div>

The secret to building gorgeous sequences with precise timing is understanding the position parameter which is used in many methods throughout GSAP. This one super-flexible parameter controls the placement of your tweens, labels, callbacks, pauses, and even nested timelines, so you'll be able to literally place anything anywhere in any sequence.

Notice that the position parameter comes after the vars parameter:

![gsap position parameter](/code/position.webp)

<div id="fouc">

## Flash of Unstyled Content

</div>

Have you ever noticed an annoying "flash of unstyled content" (FOUC) when a web page first loads? This looks like a weird jump or lag.. That happens because browsers render things as quickly as possible, often BEFORE your JavaScript executes the first time. So what if some of your initial styles are set via JavaScript...like with GSAP?

### Solution

apply `visibility: hidden;`to your elements in CSS and then use GSAP's autoAlpha property to show it (or animate it in) when the page loads. autoAlpha affects opacity and visibility, changing it to visible when the opacity is greater than 0.

![flash of unstyled content](/code/fouc.webp)

<div id="scrolltrigger">

## Scroll Trigger

</div>

ScrollTrigger is a plugin provided by GSAP. It enables anyone to create scroll-based animations with a few lines of code. Most websites that are on places like awwwards.com use scroll-based designs, and also use SVG at the same time!

You don't need to put ScrollTriggers directly into animations (though that's probably the most common use case). You can use the callbacks for anything...

![gsap scrolltrigger](/code/scrolltrigger.webp)

<div id="morphsvg">

## MorphSVG

</div>

MorphSVGPlugin morphs SVG paths by animating the data inside the d attribute. MorphSVGPlugin finds the paths and automatically figures out how to add enough points to the circle to get a super smooth morph. It will rip through all that ugly path data, convert everything to cubic beziers, and dynamically subdivide them when necessary, adding points so that the beginning and ending quantities match (but visually it looks the same). It's all done seamlessly under the hood.

There's a utility function, `MorphSVGPlugin.convertToPath()`, that can convert primitive shapes like `<circle>`, `<rect>`, `<ellipse>`, `<polygon>`, `<polyline>`, and `<line>` directly into the equivalent `<path>` that looks identical to the original and is swapped right into the DOM.

![gsap morphsvg](/code/morphsvg.webp)

To use the MorphSVG plugin, you can either use npm or use the cdn. Npm makes it easy because it uses the modular syntax meaning you can import/export files (i.e: gsap and the MorphSVG plugin). When using a cdn, you use the cdn url in the head of your html page. Then you can register the plugin by adding `gsap.registerPlugin(MorphSVGPlugin);` in your javascript.

![install morphsvg](/code/morphsvg-install.webp)

---

<script>
	import './md.css';
	import Subheading from './Subheading.svelte';
</script>

<style>
	:global(img) {
		display: block;
		margin-left: auto;
		margin-right: auto;
		max-width: 100%;
	}
</style>
