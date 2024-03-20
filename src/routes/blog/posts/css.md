<img style="margin-left: 45%; margin-bottom: 3rem; border-radius: 10px;" width="200" height="200" src="https://imgs.search.brave.com/N1hgWKHudLbcpp0RBaetQ76JGZu8Djm_02jt8OagdHo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYyL0NTUzNfbG9n/by5zdmc.svg" alt="A CSS logo">

<!-- transitions -->
<div align="center" style="font-size: 3rem; font-weight: 600; letter-spacing: 5px; color: var(--sky); font-family: var(--montserrat); margin-bottom: 3rem;">TRANSITIONS</div>

<div align="left" style="margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem; color: var(--white); font-size: 1.2rem; font-weight: 500; letter-spacing: 2px; font-family: var(--lexend);" aria-label="transitions">CSS transitions provide a way to control animation speed when changing CSS properties. Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time. For example, if you change the color of an element from white to black, usually the change is instantaneous. With CSS transitions enabled, changes occur at time intervals that follow an acceleration curve, all of which can be customized. Animations that involve transitioning between two states are often called implicit transitions as the states in between the start and final states are implicitly defined by the browser.</div>

<div align="left" style="margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem; color: var(--white); font-size: 1.2rem; font-weight: 500; letter-spacing: 2px; font-family: var(--lexend);" aria-label="transitions">CSS transitions let you decide which properties to animate (by listing them explicitly), when the animation will start (by setting a delay), how long the transition will last (by setting a duration), and how the transition will run (by defining an easing function, e.g., linearly or quick at the beginning, slow at the end).</div>

```css
div {
	transition: <property> <duration> <timing-function> <delay>;
}

.example {
	transform: translateX(100px);
	transition: transform 0.5s ease-in-out;
}

.example2 {
	transform: rotate(-5px);
	transition: rotate 0.5s ease-in-out;
}
```

<!-- animations -->
<div align="center" style="font-size: 3rem; font-weight: 600; letter-spacing: 5px; color: var(--sky);  font-family: var(--montserrat); margin-bottom: 3rem; margin-top: 2rem;">ANIMATIONS</div>

<div align="left" style="margin-bottom: 2rem; margin-left: 3rem; margin-right: 3rem; color: var(--white); font-size: 1.2rem; font-weight: 500; letter-spacing: 2px; font-family: var(--lexend);" aria-label="animations">In order to create the animations we need to use the `@keyframes` rule. This rule specifies the animation code. The animation is created by gradually changing from one set of CSS styles to another. During the animation, you can change the set of CSS styles many times. Specify when the style change will happen in percent, or with the keywords "from" and "to", which is the same as 0% and 100%. 0% is the beginning of the animation, 100% is when the animation is complete. The following example will change the background-color of the div element from red to yellow:</div>

```css
.example {
	animation: example 0.5s ease-in-out infinite;
}

@keyframes example {
	from {
		background-color: red;
	}
	to {
		background-color: yellow;
	}
}

.example2 {
	animation: example2 0.5s ease-in-out infinite;
}

@keyframes example2 {
	0% {
		background-color: red;
	}
	50% {
		background-color: blue;
	}
	100% {
		background-color: yellow;
	}
}
```

---
