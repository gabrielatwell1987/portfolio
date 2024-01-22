<img style="margin-left: 43%; margin-bottom: 3rem; border-radius: 10px;" width="200" height="200" src="https://imgs.search.brave.com/2jb510V_F4__479aofBfmoTNmwXXhORzIjH1KQnhkd4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuY2RubG9nby5j/b20vbG9nb3MvZy8z/MS9nc2FwLWdyZWVu/c29jay5zdmc.svg">

## TWEENS

<div align="left" style="margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem; color: var(--smoke); font-weight: 500;">GSAP is a JavaScript library for creating high-performance animations that work in every major browser. No other library delivers such advanced sequencing, API efficiency, and tight control while solving real-world problems on over 4 million sites. GSAP can animate any numeric property of any JS object, not just CSS properties. The following example was created with sveltekit in mind and moves the object on the x axis from -500px to 0px:</div>

```js
gsap.to('.example', { skewX: 20, duration: 2.5, ease: 'sine.in' });

gsap.fromTo('.example', { x: -500, duration: 1, ease: 'expo' }, { x: 0 });

gsap.from('.example', { rotate: -360, duration: 5, ease: 'power3.inOut' };
```

## STAGGERS

<div align="left" style="margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem; color: var(--smoke); font-weight: 500;">A value of stagger: 0.1 would cause there to be 0.1 second between the start times of each tween. You can even stagger items that are laid out in a grid just by telling GSAP how many columns and rows your grid has. A negative value would do the same but backwards so that the last element begins first. All tweens recognize a stagger property which can be a number, an object, or a function. To get more control, wrap things in a configuration object which can have any of the following properties (in addition to most of the special properties that tweens have.</div>

<div align="left" style="margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem; color: var(--smoke); font-weight: 500;"><b>Functions</b>: <br><br>Only use this if you need to run custom logic for distributing the staggers. The function gets called once for each target/element in the Array and should return the total delay from the starting position (not the amount of delay from the previous tween's start time). The function receives the following parameters: index [Integer] - The index value from the list, target [Object] - The target in the list at that index value, list [Array | NodeList] - The targets array (or NodeList).</div>

```js
gsap.to('.example', {
	y: 100,
	stagger: 0.1 // 0.1 seconds between when each ".box" element starts animating
});

gsap.to('.example', {
	y: 100,
	stagger: {
		// wrap advanced options in an object
		each: 0.1,
		from: 'center',
		grid: 'auto',
		ease: 'power2.inOut',
		repeat: -1 // Repeats immediately, not waiting for the other staggered animations to finish
	}
});

gsap.to('.example', {
	y: 100,
	stagger: function (index, target, list) {
		// your custom logic here. Return the delay from the start (not between each)
		return index * 0.1;
	}
});
```

## TIMELINES

<div align="left" style="margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem; color: var(--smoke); font-weight: 500;">Just like we've just seen with staggers, It's common to animate more than one thing. But what if we need more control over the order and timing of those animations? A lot of people reach for delays, and they're not wrong, delays do give us rudimentary control. But this method of sequencing animations is a little fragile. What happens if we lengthen the duration of the first tween? The second and third tweens have no awareness of this change, so now there's an overlap - we'd have to increase all of the delays to keep them synchronized. If you've animated with CSS you will have run into this problem before. But what if we want to add a gap or delay in between some of the tweens? One option would be to add a delay to a tween to offset it 's start time. But this isn't hugely flexible. What if we want tweens to overlap or start at the same time?</div>

<div align="left" style="margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem; color: var(--smoke); font-weight: 500;"><b>Position Parameter</b>:<br><br>This handy little parameter is the secret to building gorgeous sequences with precise timing. There are a variety of position parameters that we can use to position tweens pretty much anywhere!</div>

```js
// create a timeline
let tl = gsap.timeline();

tl.to('.green', { x: 600, duration: 2 }); // add the tweens to the timeline - Note we're using tl.to not gsap.to
tl.to('.purple', { x: 600, duration: 1 });
tl.to('.orange', { x: 600, duration: 1 });

// Delays
let tl = gsap.timeline();

tl.to('.green', { x: 600, duration: 2 });
tl.to('.purple', { x: 600, duration: 1, delay: 1 });
tl.to('.orange', { x: 600, duration: 1 });

// Position Parameter
let tl = gsap.timeline();

tl.to('.green', { x: 600, duration: 2 }, 1); // start at exactly 1 second into the timeline (absolute)

tl.to('.purple', { x: 600, duration: 1 }, '<'); // insert at the start of the previous animation

tl.to('.orange', { x: 600, duration: 1 }, '+=1'); // insert 1 second after the end of the timeline (a gap)
```

## PERCENTAGE KEYFRAMES

<div align="left" style="margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem; color: var(--smoke); font-weight: 500;">This familiar syntax makes porting animations over from CSS a breeze! Instead of using delays and duration in the keyframe object, you specify an overall duration on the tween itself, then define the position of each keyframe using percentages. To be consistent with CSS behaviour, the default per-keyframe ease is power1.inOut which generally looks quite nice but you can override this in individual keyframes or on all keyframes using easeEach.</div>

```js
gsap.to(".example", {
 keyframes: {
  "0%":  { x: 100, y: 100},
  "75%":  { x: 0, y: 0, ease: 'sine.out'}, // finetune with individual eases
  "100%": { x: 50, y: 50 },
   easeEach: 'expo.inOut' // ease between keyframes
 },
 ease: 'none' // ease the entire keyframe block
 duration: 2,
})
```

## POSITION PARAMETER

<div align="left" style="margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem; color: var(--smoke); font-weight: 500;">The secret to building gorgeous sequences with precise timing is understanding the position parameter which is used in many methods throughout GSAP. This one super-flexible parameter controls the placement of your tweens, labels, callbacks, pauses, and even nested timelines, so you'll be able to literally place anything anywhere in any sequence.</div>

<div align="left" style="margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem; color: var(--smoke); font-weight: 500;">Notice that the position parameter comes after the vars parameter:</div>

```js
gsap.to( target, vars, **position** );

// absolute - insert exactly 3 seconds from the start of the timeline
gsap.to(".class", {x: 100}, 3);

// insert at the "someLabel" label. If the label doesn't exist, it'll be added to the end of the timeline.
gsap.to(".class", {x: 100}, "someLabel");

// insert at the START of the  previous animation
gsap.to(".class", {x: 100}, "<");

// insert at the END of the previous animation
gsap.to(".class", {x: 100}, ">");
```

## FLASH OF UNSTYLED CONTENT

<div align="left" style="margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem; color: var(--smoke); font-weight: 500;">Have you ever noticed an annoying "flash of unstyled content" (FOUC) when a web page first loads? That happens because browsers render things as quickly as possible, often BEFORE your JavaScript executes the first time. So what if some of your initial styles are set via JavaScript...like with GSAP?</div>

<div align="left" style="margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem; color: var(--smoke); font-weight: 500;"><b>Solution</b>: <br><br>apply visibility: hidden; to your elements in CSS and then use GSAP's autoAlpha property to show it (or animate it in) when the page loads. autoAlpha affects opacity and visibility, changing it to visible when the opacity is greater than 0.</div>

```css
/* first you need to hide the element in css */
.example {
	visibility: hidden;
}
```

```js
// then you can use autoAlpha to show it in JS and GSAP
gsap.to('.example', { autoAlpha: 1, duration: 1 });
```

---
