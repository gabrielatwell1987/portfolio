<script lang="ts">
    import {
        initCanvas,
        startDrawing,
        draw,
        stopDrawing,
        undo,
        clearCanvas,
        drawState,
    } from './drawFunctions.svelte';

    let canvas: HTMLCanvasElement | null = $state(null);
    let mouseX = $state(0);
    let mouseY = $state(0);
    let isOnCanvas = $state(false);

    function handlePointerMove(e: PointerEvent) {
        const rect = canvas?.getBoundingClientRect();
        if (!rect) return;
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
        draw(e);
    }

    $effect(() => {
        if (!canvas) return;

        const ac = new AbortController();

        initCanvas(canvas);

        canvas.addEventListener('pointerdown', startDrawing as EventListener, {
            signal: ac.signal,
        });
        canvas.addEventListener('pointermove', draw as EventListener, {
            signal: ac.signal,
        });
        canvas.addEventListener('pointerup', stopDrawing as EventListener, {
            signal: ac.signal,
        });
        canvas.addEventListener('pointerleave', stopDrawing as EventListener, {
            signal: ac.signal,
        });

        canvas.addEventListener(
            'touchstart',
            (e: TouchEvent) => {
                e.preventDefault();
                startDrawing(e);
            },
            { passive: false, signal: ac.signal } as AddEventListenerOptions,
        );
        canvas.addEventListener(
            'touchmove',
            (e: TouchEvent) => {
                e.preventDefault();
                draw(e);
            },
            { passive: false, signal: ac.signal } as AddEventListenerOptions,
        );
        canvas.addEventListener(
            'touchend',
            (e: TouchEvent) => {
                e.preventDefault();
                stopDrawing();
            },
            { passive: false, signal: ac.signal } as AddEventListenerOptions,
        );

        const handleKeyDown = (e: KeyboardEvent): void => {
            if (e.key === 'z' && e.ctrlKey) {
                e.preventDefault();
                undo();
            }
            if (e.key === 'Delete' || e.key === 'Backspace') clearCanvas();
        };
        window.addEventListener('keydown', handleKeyDown, {
            signal: ac.signal,
        });

        return () => ac.abort();
    });
</script>

<div id="toolbar">
    <button
        id="btn-pencil"
        class:active={!drawState.isEraser}
        onclick={() => (drawState.isEraser = false)}>✏️</button
    >
    <button
        id="btn-eraser"
        class:active={drawState.isEraser}
        onclick={() => (drawState.isEraser = true)}>🧼</button
    >

    <label
        >Color:
        <input
            type="color"
            id="color-picker"
            value={drawState.currentColor}
            oninput={(e) =>
                (drawState.currentColor = (e.target as HTMLInputElement).value)}
        /></label
    >

    <label
        >Size: <input
            type="range"
            id="size-slider"
            min="1"
            max="100"
            value={drawState.currentSize}
            oninput={(e) =>
                (drawState.currentSize = Number(e.currentTarget.value))}
        /></label
    >
    <!-- <span id="size-value">{drawState.currentSize}</span> -->

    <button id="btn-clear" onclick={clearCanvas}>Clear</button>
    <button id="btn-undo" onclick={undo}>Undo</button>
</div>

<div id="canvas-container">
    <canvas
        id="canvas"
        bind:this={canvas}
        onpointermove={handlePointerMove}
        onpointerenter={() => (isOnCanvas = true)}
        onpointerleave={() => {
            isOnCanvas = false;
            stopDrawing();
        }}
    ></canvas>

    {#if drawState.isEraser && isOnCanvas}
        <div
            id="eraser-cursor"
            style="
                width: {drawState.currentSize * 1.5}px;
                height: {drawState.currentSize * 1.5}px;
                left: {mouseX}px;
                top: {mouseY}px;
            "
        ></div>
    {/if}

    {#if !drawState.isEraser && isOnCanvas}
        <div
            id="draw-cursor"
            style="
                width: {drawState.currentSize * 1.5}px;
                height: {drawState.currentSize * 1.5}px;
                left: {mouseX}px;
                top: {mouseY}px;
            "
        ></div>
    {/if}
</div>

<style>
    #toolbar {
        position: fixed;
        bottom: 2em;
        left: 50%;
        transform: translateX(-50%);
        inline-size: fit-content;
        block-size: 5em;
        background-color: var(--clr-invert-fade);
        color: var(--clr-main);
        padding: 1em;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

        display: flex;
        align-items: center;
        gap: 1em;
        z-index: 50;

        & button,
        & input[type='color'],
        & input[type='range'] {
            cursor: pointer;
            padding: 0.5em 0.75em;
            border: none;
            border-radius: var(--radius);
            background-color: var(--clr-invert-fade);
            color: var(--clr-main);
            inline-size: fit-content;
            block-size: auto;
        }

        & button {
            &.active {
                background-color: var(--clr-main-fade);
            }
        }

        & label {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        & input,
        & button {
            outline: 1px solid var(--clr-main-fade);
        }
    }

    #canvas-container {
        background: var(--clr-invert-fade);
        border: 5px solid var(--clr-main-fade);
        border-radius: var(--radius);
        outline: 1px solid var(--clr-main-fade);
        outline-offset: 5px;
        overflow: hidden;

        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        max-inline-size: 80vw;
        max-block-size: 70vh;
        inline-size: 100%;
        block-size: 100%;
    }

    #eraser-cursor {
        position: absolute;
        border: 2px dotted hotpink;
        border-radius: 50%;
        pointer-events: none;
        translate: -50% -50%;
        z-index: 10;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
    }

    #draw-cursor {
        position: absolute;
        border: 2px dotted var(--clr-main);
        border-radius: 50%;
        pointer-events: none;
        translate: -50% -50%;
        z-index: 10;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
    }
</style>
