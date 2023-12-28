## Animations

<div align="center" style="margin-bottom: 2rem; margin-left: 20rem; margin-right: 20rem;">In order to create the animations we need to use the `@keyframes` rule. This rule specifies the animation code. The animation is created by gradually changing from one set of CSS styles to another. During the animation, you can change the set of CSS styles many times. Specify when the style change will happen in percent, or with the keywords "from" and "to", which is the same as 0% and 100%. 0% is the beginning of the animation, 100% is when the animation is complete. The following example will change the background-color of the div element from red to yellow:</div>

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

## Transitions

<div align="center" style="margin-bottom: 2rem; margin-left: 20rem; margin-right: 20rem;">CSS transitions provide a way to control animation speed when changing CSS properties. Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time. For example, if you change the color of an element from white to black, usually the change is instantaneous. With CSS transitions enabled, changes occur at time intervals that follow an acceleration curve, all of which can be customized. Animations that involve transitioning between two states are often called implicit transitions as the states in between the start and final states are implicitly defined by the browser.</div>

<div align="center" style="margin-bottom: 2rem; margin-left: 20rem; margin-right: 20rem;">CSS transitions let you decide which properties to animate (by listing them explicitly), when the animation will start (by setting a delay), how long the transition will last (by setting a duration), and how the transition will run (by defining an easing function, e.g., linearly or quick at the beginning, slow at the end).</div>

```css
div {
	transition: <property> <duration> <timing-function> <delay>;
}

.example {
	transform: translateX(100px);
	transition: transform 0.5s ease-in-out;
}

.example {
	transform: translate3d(0, 2rem, 0);
	transition: transform 0.5s ease-in-out;
}
```

---
