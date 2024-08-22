<div align="center" style="font-family: var(--montserrat); font-size: clamp(1.5rem, 3vw, 5rem); font-weight: 700; letter-spacing: 5px; color: var(--sky); font-family: var(--montserrat); margin-bottom: 3rem;">VARIABLES</div>

<div align="left" style="margin-bottom: 2rem; margin-left: clamp(.5rem, 1.5vw, 2rem); margin-right: clamp(.5rem, 1.5vw, 2rem); color: var(--white); font-size: clamp(1.25rem, 2vw, 1.75rem); font-weight: 200; letter-spacing: 2px; code: var(--mono); text-align: center;" aria-label="tweens">
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 3rem); color: var(--smoke);">x, y, z</span>: Control the position of an element along the x, y, and z axes.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">rotation</span>: Rotates an element in degrees.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">scale</span>: Scales an element uniformly on all axes.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">scaleX, scaleY, scaleZ</span>: Scale an element along the x, y, and z axes individually.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">opacity</span>: Controls the transparency of an element.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">width, height</span>: Animates the width and height of an element.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">color, backgroundColor</span>: Changes the color or background color of an element.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">borderRadius</span>: Animates the border-radius property of an element.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">skewX, skewY</span>: Skews an element along the x and y axes.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">rotationX, rotationY, rotationZ</span>: Rotate an element in 3D space along the x, y, and z axes.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">duration</span>: Specifies the duration of the animation.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">delay</span>: Delays the start of the animation.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">repeat</span>: Specifies how many times an animation should repeat.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">yoyo</span>: When set to true, makes the animation reverse back to the starting point after completing.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">ease</span>: Controls the easing of the animation (e.g: ease: 'power1.inOut').<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">onStart</span>: Callback function that fires when the animation starts.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">onComplete</span>: Callback function that fires when the animation completes.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">onUpdate</span>: Callback function that fires on each frame during the animation.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">onRepeat</span>: Callback function that fires each time the animation repeats.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">paused</span>: If true, the animation starts in a paused state.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">stagger</span>: Staggers the start times of animations in an array or NodeList.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">scrub</span>: Syncs animations with scroll position (used with ScrollTrigger).<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">overwrite</span>: Controls how existing tweens are overwritten (auto, none, all).<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">immediateRender</span>: Renders the tween immediately upon creation.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">keyframes</span>: Defines multiple animation states within a single tween.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">lazy</span>: Defers rendering to reduce startup performance cost.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">id</span>: Assigns a unique identifier to the tween for later reference.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">autoAlpha</span>: Combines opacity and visibility (hides an element when opacity reaches 0).<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">kill</span>: Kills the tween or timeline.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">timeScale</span>: Adjusts the speed of the animation.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">progress</span>: Sets or gets the progress of the animation.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">reverse</span>: Reverses the animation.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">seek</span>: Moves the playhead to a specific time or label.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">repeatDelay</span>: Sets the delay between repeats.<br>
    <span style="font-weight: bold; font-size: clamp(1.75rem, 2vw, 2.5rem); color: var(--smoke);">endTime</span>: Gets the end time of the animation.<br>
</div>
