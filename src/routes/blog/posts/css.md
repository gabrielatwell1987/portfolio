<script>
	import './md.css';
	import Image from '$lib/components/Image.svelte';
	import Divider from '$lib/components/Divider.svelte';
</script>

<!-- transitions -->
<div align="center" class="title">transitions</div>

<div align="left" class="body para" aria-label="transitions">CSS transitions provide a way to control animation speed when changing CSS properties. Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time. For example, if you change the color of an element from white to black, usually the change is instantaneous. With CSS transitions enabled, changes occur at time intervals that follow an acceleration curve, all of which can be customized. Animations that involve transitioning between two states are often called implicit transitions as the states in between the start and final states are implicitly defined by the browser.</div>

<div align="left" class="body" aria-label="transitions">CSS transitions let you decide which properties to animate (by listing them explicitly), when the animation will start (by setting a delay), how long the transition will last (by setting a duration), and how the transition will run (by defining an easing function, e.g., linearly or quick at the beginning, slow at the end).</div>

<Image src="/code/transitions.webp" alt="css transitions" />

<!-- animations -->
<div align="center" class="title">animations</div>

<div align="left" class="body para" aria-label="animations">In order to create the animations we need to use the <code>@keyframes</code> rule. This rule specifies the animation code. The animation is created by gradually changing from one set of CSS styles to another. During the animation, you can change the set of CSS styles many times. Specify when the style change will happen in percent, or with the keywords <code>from</code> and <code>to</code> which is the same as 0% and 100%. 0% is the beginning of the animation, 100% is when the animation is complete. The following example will change the background-color of the div element from red to yellow:</div>

<Image src="/code/animations.webp" alt="css animations" />

<!-- interpolate size -->
<div align="center" class="title">interpolate-size</div>

<div align="left" class="body para" aria-label="animations">The CSS interpolate-size property allows a page to opt in to animations and transitions of CSS intrinsic sizing keywords such as auto, min-content, fit-content, etc., in the cases where we can animate those keywords. The gist is to add the following snippet to your stylesheet to opt-in to interpolating from <code class="code">&lt;length-percentage&gt;</code>'s to any of the supported <code class="code">&lt;intrinsic-size-keyword&gt;</code>'s or vice versa.</div>

<Image src="/code/interpolate.webp" alt="interpolate-size" />

<!-- calc size -->
<div align="center" class="title">calc-size</div>

<div align="left" class="body para" aria-label="animations">The calc-size() function is a new addition to CSS that allows for the calculation of intrinsic sizes like auto, min-content, max-content, fit-content, stretch, and contain. This function enables web developers to animate elements with height: auto or other intrinsic sizes without needing JavaScript. <code>calc-size()</code> works similarly to the <code>calc()</code> function but can handle intrinsic sizes. It accepts two arguments: the first is the intrinsic size you want to calculate, and the second is the calculation you want to perform on that size.</div>

<Image src="/code/calc.webp" alt="calc-size" />

<!-- details element -->
<div align="center" class="title">details element</div>

<div align="left" class="body para" aria-label="animations">The <code>&lt;details&gt;</code> element can now be animated using the interpolate-size property, allowing for smooth transitions when opening and closing. Here’s how you can implement this: Enable Interpolation - Add <code>interpolate-size: allow-keywords;</code> to the <code>&lt;details&gt;</code> element to enable transitions to and from intrinsic sizing keywords like auto, min-content, max-content, and fit-content.
 Apply specific styles to the <code>&lt;details&gt;</code> element and its pseudo-element <code>::details-content</code> to control the transition behavior.</div>

<Image src="/code/details.webp" alt="details element" />

<!-- view transitions -->
<div align="center" class="title">view transitions</div>

<div align="left" class="body para" aria-label="view transitions"> The <code>view transitions</code> api is used to transition your website between pages for MPA (multi-page application) use or between elements for SPA (single page application) use. It's quite easy to do, it takes one line of code. In the following image, I've included some examples of how to set it up. The first example <code>@view-transition &#123;navigation: auto;&#125;</code> is all you have to add to your css to make a crossfade animation happen on every page transition. You have to add this to your <code>:root</code> in css for it to happen to every page transition. </div>

<div align="left" class="body para" aria-label="view transitions">The example: <code>::view-transition-old(root), ::view-transition-new(root)</code> examples are to customize the transitions. Old is the state that the page is leaving from and new means the state the page is going to. (root) means the root of the file.. if you want the animate the transition of a specific DOM element, you would have to create a <code>view-transition-name = "example"</code> in css on the element and change root into the name <code>::view-transition-group(example)</code>. To select both of these at once you use <code>::view-transition-group</code>.</div>

<Image src="/code/view-transitions.webp" alt="view transitions" />

<div style="margin: 5% 0;"></div>

<Divider width="75" thickness="5" />
