## Tweens

<div align="left" style="margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem;">GSAP is a JavaScript library for creating high-performance animations that work in every major browser. No other library delivers such advanced sequencing, API efficiency, and tight control while solving real-world problems on over 4 million sites. GSAP can animate any numeric property of any JS object, not just CSS properties. The following example was created with sveltekit in mind and moves the object on the x axis from -500px to 0px:</div>

```js
gsap.to('.example', { skewX: 20, duration: 2.5, ease: 'sine.in' });

gsap.fromTo('.example', { x: -500, duration: 1, ease: 'expo' }, { x: 0 });

gsap.from('.example', { rotate: -360, duration: 5, ease: 'power3.inOut' };
```

## Percentage keyframes

<div align="left" style="margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem;">This familiar syntax makes porting animations over from CSS a breeze! Instead of using delays and duration in the keyframe object, you specify an overall duration on the tween itself, then define the position of each keyframe using percentages. To be consistent with CSS behaviour, the default per-keyframe ease is power1.inOut which generally looks quite nice but you can override this in individual keyframes or on all keyframes using easeEach.</div>

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

---
