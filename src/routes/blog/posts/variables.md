<script>
    import Heading from './Heading.svelte';
</script>

<div align="center" style="font-family: var(--montserrat); font-size: clamp(1.5rem, 3vw, 5rem); font-weight: 700; letter-spacing: 5px; color: var(--sky); font-family: var(--montserrat); margin-bottom: 3rem;">VARIABLES</div>

<div align="left" style="margin-bottom: 2rem; margin-left: clamp(.5rem, 1.5vw, 2rem); margin-right: clamp(.5rem, 1.5vw, 2rem); color: var(--white); font-size: clamp(1.25rem, 2vw, 1.75rem); font-weight: 200; letter-spacing: 2px; code: var(--mono); text-align: center;" aria-label="tweens">
    <Heading title="x, y, z" />: Control the position of an element along the x, y, and z axes.<br>
    <Heading title="rotation" />: Rotates an element in degrees.<br>
    <Heading title="scale" />: Scales an element uniformly on all axes.<br>
    <Heading title="scaleX, scaleY, scaleZ" />: Scale an element along the x, y, and z axes individually.<br>
    <Heading title="opacity" />: Controls the transparency of an element.<br>
    <Heading title="width, height" />: Animates the width and height of an element.<br>
    <Heading title="color, backgroundColor" />: Changes the color or background color of an element.<br>
    <Heading title="borderRadius" />: Animates the border-radius property of an element.<br>
    <Heading title="skewX, skewY" />: Skews an element along the x and y axes.<br>
    <Heading title="rotationX, rotationY, rotationZ" />: Rotate an element in 3D space along the x, y, and z axes.<br>
    <Heading title="duration" />: Specifies the duration of the animation.<br>
    <Heading title="delay" />: Delays the start of the animation.<br>
    <Heading title="repeat" />: Specifies how many times an animation should repeat.<br>
    <Heading title="yoyo" />: When set to true, makes the animation reverse back to the starting point after completing.<br>
    <Heading title="ease" />: Controls the easing of the animation (e.g: ease: 'power1.inOut').<br>
    <Heading title="onStart" />: Callback function that fires when the animation starts.<br>
    <Heading title="onComplete" />: Callback function that fires when the animation completes.<br>
    <Heading title="onUpdate" />: Callback function that fires on each frame during the animation.<br>
    <Heading title="onRepeat" />: Callback function that fires each time the animation repeats.<br>
    <Heading title="paused" />: If true, the animation starts in a paused state.<br>
    <Heading title="stagger" />: Staggers the start times of animations in an array or NodeList.<br>
    <Heading title="scrub" />: Syncs animations with scroll position (used with ScrollTrigger).<br>
    <Heading title="overwrite" />: Controls how existing tweens are overwritten (auto, none, all).<br>
    <Heading title="immediateRender" />: Renders the tween immediately upon creation.<br>
    <Heading title="keyframes" />: Defines multiple animation states within a single tween.<br>
    <Heading title="lazy" />: Defers rendering to reduce startup performance cost.<br>
    <Heading title="id" />: Assigns a unique identifier to the tween for later reference.<br>
    <Heading title="autoAlpha" />: Combines opacity and visibility (hides an element when opacity reaches 0).<br>
    <Heading title="kill" />: Kills the tween or timeline.<br>
    <Heading title="timeScale" />: Adjusts the speed of the animation.<br>
    <Heading title="progress" />: Sets or gets the progress of the animation.<br>
    <Heading title="reverse" />: Reverses the animation.<br>
    <Heading title="seek" />: Moves the playhead to a specific time or label.<br>
    <Heading title="repeatDelay" />: Sets the delay between repeats.<br>
    <Heading title="endTime" />: Gets the end time of the animation.<br>
</div>
