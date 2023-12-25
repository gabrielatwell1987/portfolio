## Creating web animations with CSS

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
```
