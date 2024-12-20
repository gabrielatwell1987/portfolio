<script>
import './md.css';
	import Subheading from './Subheading.svelte';
	import Image from '$lib/components/Image.svelte'; 
</script>

<!-- tweens -->
<div align="center" class="title">TWEENS</div>

<div align="left" class="body para" aria-label="tweens">In web animation, a tween stands for "in-betweening". Basically, it is the foundation for the whole GSAP process. There are 3 types of tweens: <code>gsap.to("element", &lbrace; variables &rbrace;)</code> animating one state TO another state, <code>gsap.from("element", &lbrace; variables &rbrace;)</code> animating one state FROM another state, <code>gsap.fromTo("element", &lbrace; variables &rbrace;, &lbrace; variables &rbrace;)</code> specifically choosing the STARTING and ENDING state.</div>

<Image src="/code/tweens.webp" alt="gsap tweens" width="1500" />

<!-- staggers -->
<div align="center" class="title">STAGGERS</div>

<div align="left" class="body para" aria-label="staggers">A value of stagger: 0.1 would cause there to be 0.1 seconds between the start times of each tween. You can even stagger items that are laid out in a grid just by telling GSAP how many columns and rows your grid has. A negative value would do the same but backwards so that the last element begins first. All tweens recognize a stagger property which can be a number, an object, or a function. To get more control, wrap things in a configuration object which can have any of the following properties (in addition to most of the special properties that tweens have.</div>

<Subheading subheading="functions" />
<div align="left" class="body" aria-label="staggers">Only use this if you need to run custom logic for distributing the staggers. The function gets called once for each target/element in the Array and should return the total delay from the starting position (not the amount of delay from the previous tween's start time). The function receives the following parameters: index [Integer] - The index value from the list, target [Object] - The target in the list at that index value, list [Array | NodeList] - The targets array (or NodeList).</div>

<Image src="/code/staggers.webp" alt="gsap staggers" width="1500" />

<!-- timelines -->
<div align="center" class="title">TIMELINES</div>

<div align="left" class="body para" aria-label="timelines">Just like we've seen with staggers, It's common to animate more than one thing. But what if we need more control over the order and timing of those animations? A lot of people reach for delays, and they're not wrong, delays do give us rudimentary control. But this method of sequencing animations is a little fragile. What happens if we lengthen the duration of the first tween? The second and third tweens have no awareness of this change, so now there's an overlap - we'd have to increase all of the delays to keep them synchronized. If you've animated with CSS you will have run into this problem before. But what if we want to add a gap or delay in between some of the tweens? One option would be to add a delay to a tween to offset it 's start time. But this isn't hugely flexible. What if we want tweens to overlap or start at the same time?</div>

<div align="left" class="body" aria-label="timelines">Timelines makes sequencing multiple tweens really easy and faster to code, in the long run. You can also position them with the position parameter.</div>

<Image src="/code/timelines.webp" alt="gsap timelines" width="1500" />

<!-- percentage keyframes -->
<div align="center" class="title">PERCENTAGE KEYFRAMES</div>

<div align="left" class="body para" aria-label="keyframes">This familiar syntax makes porting animations over from CSS really easy. Instead of using delays and duration in the keyframe object, you specify an overall duration on the tween itself, then define the position of each keyframe using percentages.</div>

<Image src="/code/keyframes.webp" alt="gsap percentage keyframes" width="1500" />

<!-- position parameter -->
<div align="center" class="title">POSITION PARAMETER</div>

<div align="left" class="body para" aria-label="position parameter">The secret to building gorgeous sequences with precise timing is understanding the position parameter which is used in many methods throughout GSAP. This one super-flexible parameter controls the placement of your tweens, labels, callbacks, pauses, and even nested timelines, so you'll be able to literally place anything anywhere in any sequence.</div>

<div align="left" class="body" aria-label="position parameter">Notice that the position parameter comes after the vars parameter:</div>

<Image src="/code/position.webp" alt="gsap position parameter" width="1500" />

<!-- fouc -->
<div align="center" class="title">FLASH OF UNSTYLED CONTENT</div>

<div align="left" class="body para" aria-label="f.o.u.c">Have you ever noticed an annoying "flash of unstyled content" (FOUC) when a web page first loads? This looks like a weird jump or lag.. That happens because browsers render things as quickly as possible, often BEFORE your JavaScript executes the first time. So what if some of your initial styles are set via JavaScript...like with GSAP?</div>

<Subheading subheading="solution" />
<div align="left" class="body" aria-label="f.o.u.c">apply <code>visibility: hidden;</code> to your elements in CSS and then use GSAP's autoAlpha property to show it (or animate it in) when the page loads. autoAlpha affects opacity and visibility, changing it to visible when the opacity is greater than 0.</div>

<Image src="/code/fouc.webp" alt="gsap flash of unstyled content" width="1500" />

<!-- scroll trigger -->
<div align="center" class="title">SCROLL TRIGGER</div>

<div align="left" class="body para" aria-label="scroll trigger">ScrollTrigger is a plugin provided by GSAP. It enables anyone to create scroll-based animations with a few lines of code. Most websites that are on places like awwwards.com use scroll-based designs, and also use SVG at the same time!</div>

<div align="left" class="body" aria-label="scroll trigger">You don't need to put ScrollTriggers directly into animations (though that's probably the most common use case). You can use the callbacks for anything...</div>

<Image src="/code/scrolltrigger.webp" alt="gsap scrolltrigger" />

<div style="margin: 3% 0;"></div>

---
