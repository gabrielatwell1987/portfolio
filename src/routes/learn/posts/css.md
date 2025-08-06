# CSS

<div class="grid-section" id="transitions">
<div class="content">

## transitions

CSS transitions provide a way to control animation speed when changing CSS properties. Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time. For example, if you change the color of an element from white to black, usually the change is instantaneous. With CSS transitions enabled, changes occur at time intervals that follow an acceleration curve, all of which can be customized. Animations that involve transitioning between two states are often called implicit transitions as the states in between the start and final states are implicitly defined by the browser.

CSS transitions let you decide which properties to animate (by listing them explicitly), when the animation will start (by setting a delay), how long the transition will last (by setting a duration), and how the transition will run (by defining an easing function, e.g., linearly or quick at the beginning, slow at the end).

</div>
<div class="image">

![css transitions](/code/transitions.webp)

</div>
</div>

---

<div class="grid-section" id="animations">
<div class="content">

## animations

In order to create the animations we need to use the `@keyframes` rule. This rule specifies the animation code. The animation is created by gradually changing from one set of CSS styles to another. During the animation, you can change the set of CSS styles many times. Specify when the style change will happen in percent, or with the keywords `from` and `to` which is the same as 0% and 100%. 0% is the beginning of the animation, 100% is when the animation is complete. The following example will change the background-color of the div element from red to yellow:

</div>
<div class="image">

![css animations](/code/animations.webp)

</div>
</div>

---

<div class="grid-section" id="interpolate">
<div class="content">

## interpolate-size

The CSS interpolate-size property allows a page to opt in to animations and transitions of CSS intrinsic sizing keywords such as auto, min-content, fit-content, etc., in the cases where we can animate those keywords. The gist is to add the following snippet to your stylesheet to opt-in to interpolating from `&lt;length-percentage&gt;`'s to any of the supported `&lt;intrinsic-size-keyword&gt;`'s or vice versa.

</div>
<div class="image">

![interpolate size](/code/interpolate.webp)

</div>
</div>

---

<div class="grid-section" id="calc">
<div class="content">

## calc-size

The calc-size() function is a new addition to CSS that allows for the calculation of intrinsic sizes like auto, min-content, max-content, fit-content, stretch, and contain. This function enables web developers to animate elements with height: auto or other intrinsic sizes without needing JavaScript. `calc-size()` works similarly to the `calc()` function but can handle intrinsic sizes. It accepts two arguments: the first is the intrinsic size you want to calculate, and the second is the calculation you want to perform on that size.

</div>
<div class="image">

![calc-size](/code/calc.webp)

</div>
</div>

---

<div class="grid-section" id="details">
<div class="content">

## details element

The `&lt;details&gt;` element can now be animated using the interpolate-size property, allowing for smooth transitions when opening and closing. Here's how you can implement this: Enable Interpolation - Add `interpolate-size: allow-keywords;` to the `&lt;details&gt;` element to enable transitions to and from intrinsic sizing keywords like auto, min-content, max-content, and fit-content.
Apply specific styles to the `&lt;details&gt;` element and its pseudo-element `::details-content` to control the transition behavior.

</div>
<div class="image">

![details element](/code/details.webp)

</div>
</div>

---

<div class="grid-section" id="view">
<div class="content">

## view transitions

The `view transitions` api is used to transition your website between pages for MPA (multi-page application) use or between elements for SPA (single page application) use. It's quite easy to do, it takes one line of code. In the following image, I've included some examples of how to set it up. The first example `@view-transition &#123;navigation: auto;&#125;` is all you have to add to your css to make a crossfade animation happen on every page transition. You have to add this to your `:root` in css for it to happen to every page transition.

The example: `::view-transition-old(root), ::view-transition-new(root)` examples are to customize the transitions. Old is the state that the page is leaving from and new means the state the page is going to. (root) means the root of the file.. if you want the animate the transition of a specific DOM element, you would have to create a `view-transition-name = "example"` in css on the element and change root into the name `::view-transition-group(example)`. To select both of these at once you use `::view-transition-group`.

</div>
<div class="image">

![view transitions](/code/view-transitions.webp)

</div>
</div>

<script>
	import './md.css';
</script>
