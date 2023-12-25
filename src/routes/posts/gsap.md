## Using GSAP for animations

<div align="center" style="margin-bottom: 2rem; margin-left: 20rem; margin-right: 20rem;">I used GSAP for the animations. GSAP is a JavaScript library for creating high-performance animations that work in every major browser. No other library delivers such advanced sequencing, API efficiency, and tight control while solving real-world problems on over 4 million sites. GSAP can animate any numeric property of any JS object, not just CSS properties. The following example was created with sveltekit in mind and moves the object on the x axis from -500px to 0px:</div>

```js
import { gsap } from 'gsap';
import { onMount } from 'svelte';

onMount(() => {
	gsap.to('.example', { duration: 2.5, ease: 'sine.in' });
	gsap.fromTo('.example', { x: -500 }, { x: 0 });
});
```
