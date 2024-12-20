<script>
	import './md.css';
	import Image from '$lib/components/Image.svelte'; 
</script>

<!-- transitions -->
<div align="center" class="title">TRANSITIONS</div>

<div align="left" class="body para" aria-label="transitions">CSS transitions provide a way to control animation speed when changing CSS properties. Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time. For example, if you change the color of an element from white to black, usually the change is instantaneous. With CSS transitions enabled, changes occur at time intervals that follow an acceleration curve, all of which can be customized. Animations that involve transitioning between two states are often called implicit transitions as the states in between the start and final states are implicitly defined by the browser.</div>

<div align="left" class="body" aria-label="transitions">CSS transitions let you decide which properties to animate (by listing them explicitly), when the animation will start (by setting a delay), how long the transition will last (by setting a duration), and how the transition will run (by defining an easing function, e.g., linearly or quick at the beginning, slow at the end).</div>

<Image src="/code/transitions.webp" alt="css transitions" width="1500" />

<!-- animations -->
<div align="center" class="title">ANIMATIONS</div>

<div align="left" class="body para" aria-label="animations">In order to create the animations we need to use the <code>@keyframes</code> rule. This rule specifies the animation code. The animation is created by gradually changing from one set of CSS styles to another. During the animation, you can change the set of CSS styles many times. Specify when the style change will happen in percent, or with the keywords <code>from</code> and <code>to</code> which is the same as 0% and 100%. 0% is the beginning of the animation, 100% is when the animation is complete. The following example will change the background-color of the div element from red to yellow:</div>

<Image src="/code/animations.webp" alt="css animations" width="1500" />

<div style="margin: 3% 0;"></div>

---
