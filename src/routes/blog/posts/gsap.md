<img style="margin-left: 43%; margin-bottom: 3rem; border-radius: 10px;" width="200" height="200" src="https://imgs.search.brave.com/2jb510V_F4__479aofBfmoTNmwXXhORzIjH1KQnhkd4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuY2RubG9nby5j/b20vbG9nb3MvZy8z/MS9nc2FwLWdyZWVu/c29jay5zdmc.svg" alt="A Greensock logo">

<!-- tweens -->
<div align="center" style="font-size: 5rem; font-weight: 600; letter-spacing: 5px; color: var(--sky); font-family: var(--montserrat); margin-bottom: 3rem;">TWEENS</div>

<div align="left" style="margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem; color: var(--white); font-size: 1.75rem; font-weight: 200; letter-spacing: 2px; code: var(--mono);" aria-label="tweens">In web animation, a tween stands for "in-betweening". Basically, it is the foundation for the whole GSAP process. There are 3 types of tweens: <code>.to()</code> animating one state TO another state, <code>.from()</code> animating one state FROM another state, <code>.fromTo()</code> specifically choosing the STARTING and ENDING state.</div>

```js
gsap.to('.example', { skewX: 20, duration: 2.5, ease: 'sine.in' });

gsap.from('.example', { rotate: -360, duration: 5, ease: 'power3.inOut' };

gsap.fromTo('.example', { x: -500, duration: 1, ease: 'expo' }, { x: 0 });
```

<!-- staggers -->
<div align="center" style="font-size: 5rem; font-weight: 600; letter-spacing: 5px; color: var(--sky); font-family: var(--montserrat); margin-bottom: 3rem; margin-top: 2rem;">STAGGERS</div>

<div align="left" style="margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem; color: var(--white); font-size: 1.75rem; font-weight: 200; letter-spacing: 2px; font-family: var(--lexend);" aria-label="staggers">A value of stagger: 0.1 would cause there to be 0.1 seconds between the start times of each tween. You can even stagger items that are laid out in a grid just by telling GSAP how many columns and rows your grid has. A negative value would do the same but backwards so that the last element begins first. All tweens recognize a stagger property which can be a number, an object, or a function. To get more control, wrap things in a configuration object which can have any of the following properties (in addition to most of the special properties that tweens have.</div>

<div align="left" style="margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem; color: var(--white); font-size: 1.75rem; font-weight: 200; letter-spacing: 2px; font-family: var(--lexend);" aria-label="staggers"><b>Functions</b>: <br><br>Only use this if you need to run custom logic for distributing the staggers. The function gets called once for each target/element in the Array and should return the total delay from the starting position (not the amount of delay from the previous tween's start time). The function receives the following parameters: index [Integer] - The index value from the list, target [Object] - The target in the list at that index value, list [Array | NodeList] - The targets array (or NodeList).</div>

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

<!-- timelines -->
<div align="center" style="font-size: 5rem; font-weight: 600; letter-spacing: 5px; color: var(--sky); font-family: var(--montserrat); margin-bottom: 3rem; margin-top: 2rem;">TIMELINES</div>

<div align="left" style="margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem; color: var(--white); font-size: 1.75rem; font-weight: 200; letter-spacing: 2px; font-family: var(--lexend);"aria-label="timelines">Just like we've seen with staggers, It's common to animate more than one thing. But what if we need more control over the order and timing of those animations? A lot of people reach for delays, and they're not wrong, delays do give us rudimentary control. But this method of sequencing animations is a little fragile. What happens if we lengthen the duration of the first tween? The second and third tweens have no awareness of this change, so now there's an overlap - we'd have to increase all of the delays to keep them synchronized. If you've animated with CSS you will have run into this problem before. But what if we want to add a gap or delay in between some of the tweens? One option would be to add a delay to a tween to offset it 's start time. But this isn't hugely flexible. What if we want tweens to overlap or start at the same time?</div>

<div align="left" style="margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem; color: var(--white); font-size: 1.75rem; font-weight: 200; letter-spacing: 2px; font-family: var(--lexend);"aria-label="timelines">Timelines makes sequencing multiple tweens really easy and faster to code, in the long run. You can also position them with the position parameter.</div>

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
```

<!-- percentage keyframes -->
<div align="center" style="font-size: 5rem; font-weight: 600; letter-spacing: 5px; color: var(--sky); font-family: var(--montserrat); margin-bottom: 3rem; margin-top: 2rem;">PERCENTAGE KEYFRAMES</div>

<div align="left" style="margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem; color: var(--white); font-size: 1.75rem; font-weight: 200; letter-spacing: 2px; font-family: var(--lexend);" aria-label="keyframes">This familiar syntax makes porting animations over from CSS really easy. Instead of using delays and duration in the keyframe object, you specify an overall duration on the tween itself, then define the position of each keyframe using percentages.</div>

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

<!-- position parameter -->
<div align="center" style="font-size: 5rem; font-weight: 600; letter-spacing: 5px; color: var(--sky); font-family: var(--montserrat); margin-bottom: 3rem; margin-top: 2rem;">POSITION PARAMETER</div>

<div align="left" style="margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem; color: var(--white); font-size: 1.75rem; font-weight: 200; letter-spacing: 2px; font-family: var(--lexend);" aria-label="position parameter">The secret to building gorgeous sequences with precise timing is understanding the position parameter which is used in many methods throughout GSAP. This one super-flexible parameter controls the placement of your tweens, labels, callbacks, pauses, and even nested timelines, so you'll be able to literally place anything anywhere in any sequence.</div>

<div align="left" style="margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem; color: var(--white); font-size: 1.75rem; font-weight: 200; letter-spacing: 2px; font-family: var(--lexend);" aria-label="position parameter">Notice that the position parameter comes after the vars parameter:</div>

```js
gsap.to( target, {vars}, **position** );

// absolute - insert exactly 3 seconds from the start of the timeline
gsap.to(".class", {x: 100}, 3);

// insert at the "someLabel" label. If the label doesn't exist, it'll be added to the end of the timeline.
gsap.to(".class", {x: 100}, "someLabel");

// insert at the START of the  previous animation
gsap.to(".class", {x: 100}, "<");

// insert at the END of the previous animation
gsap.to(".class", {x: 100}, ">");
```

<!-- fouc -->
<div align="center" style="font-size: 5rem; font-weight: 600; letter-spacing: 5px; color: var(--sky); font-family: var(--montserrat); margin-bottom: 3rem; margin-top: 2rem;">FLASH OF UNSTYLED CONTENT</div>

<div align="left" style="margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem; color: var(--white); font-size: 1.75rem; font-weight: 200; letter-spacing: 2px; font-family: var(--lexend);" aria-label="fouc">Have you ever noticed an annoying "flash of unstyled content" (FOUC) when a web page first loads? This looks like a weird jump or lag.. That happens because browsers render things as quickly as possible, often BEFORE your JavaScript executes the first time. So what if some of your initial styles are set via JavaScript...like with GSAP?</div>

<div align="left" style="margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem; color: var(--white); font-size: 1.75rem; font-weight: 200; letter-spacing: 2px; font-family: var(--lexend);" aria-label="fouc"><b>Solution</b>: <br><br>apply visibility: hidden; to your elements in CSS and then use GSAP's autoAlpha property to show it (or animate it in) when the page loads. autoAlpha affects opacity and visibility, changing it to visible when the opacity is greater than 0.</div>

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

<!-- scroll trigger -->
<div align="center" style="font-size: 5rem; font-weight: 600; letter-spacing: 5px; color: var(--sky); font-family: var(--montserrat); margin-bottom: 3rem; margin-top: 2rem;">SCROLL TRIGGER</div>

<div align="left" style="margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem; color: var(--white); font-size: 1.75rem; font-weight: 200; letter-spacing: 2px; font-family: var(--lexend);" aria-label="scroll trigger">ScrollTrigger is a plugin provided by GSAP. It enables anyone to create scroll-based animations with a few lines of code. Most websites that are on places like awwwards.com use scroll-based designs, and also use SVG at the same time!</div>

<div align="left" style="margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem; color: var(--white); font-size: 1.75rem; font-weight: 200; letter-spacing: 2px; font-family: var(--lexend);" aria-label="scroll trigger">You don't need to put ScrollTriggers directly into animations (though that's probably the most common use case). You can use the callbacks for anything...</div>

```js
// Add scrollTrigger to the timeline
let tl = gsap.timeline({
	scrollTrigger: {
		trigger: '.container',
		pin: true, // pin the trigger element while active
		start: 'top top', // when the top of the trigger hits the top of the viewport
		end: '+=500', // end after scrolling 500px beyond the start
		scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
		snap: {
			snapTo: 'labels', // snap to the closest label in the timeline
			duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
			delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
			ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
		}
	}
});

// Add animations and labels to the timeline
tl.addLabel('start')
	.from('.box p', { scale: 0.3, rotation: 45, autoAlpha: 0 })
	.addLabel('color')
	.from('.box', { backgroundColor: '#28a92b' })
	.addLabel('spin')
	.to('.box', { rotation: 360 })
	.addLabel('end');

---

// Standalone scrolltrigger
ScrollTrigger.create({
	trigger: '#id',
	start: 'top top',
	endTrigger: '#otherID',
	end: 'bottom 50%+=100px',
	onToggle: (self) => console.log('toggled, isActive:', self.isActive),
	onUpdate: (self) => {
		console.log(
			'progress:',
			self.progress.toFixed(3),
			'direction:',
			self.direction,
			'velocity',
			self.getVelocity()
		);
	}
});
```

---
