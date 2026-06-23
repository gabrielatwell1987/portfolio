<script lang="ts">
    import { onMount } from 'svelte';
    import { FPSGame } from './FPSGameSetup';
    import GameOver from '$lib/threejs/shooter/components/GameOver.svelte';
    import LandscapeMobile from '$lib/threejs/shooter/components/LandscapeMobile.svelte';
    import FPSMobileControls from './FPSMobileControls.svelte';

    // oxlint-disable-next-line no-unassigned-vars
    let canvas!: HTMLCanvasElement;
    let game: FPSGame | null = $state(null);
    let isLocked = $state(false);
    let isMobile = $state(false);
    let playerHealth = $state(10);
    let maxPlayerHealth = $state(10);
    let ammo = $state<number | null>(null);
    let enemyKillCount = $state(0);
    let isGameOver = $state(false);
    let won = $derived(enemyKillCount >= 3);

    function handleRestart(): void {
        game?.dispose();
        game = null;
        isGameOver = false;
        playerHealth = 10;
        maxPlayerHealth = 10;
        enemyKillCount = 0;
        game = new FPSGame();
        game.init(canvas);
    }

    function startGame(): void {
        if (game) {
            if (!isMobile) {
                game.controls.lock();
            } else {
                // On mobile, no pointer lock — enable touch controls
                game.setMobile(true);
                isLocked = true;
            }
        }
    }

    onMount(() => {
        isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        game = new FPSGame();
        game.init(canvas);

        // On mobile, auto-start since we can't use pointer lock
        if (isMobile) {
            game.setMobile(true);
            setTimeout(() => {
                isLocked = true;
            }, 500);
        }

        const hudInterval = setInterval(() => {
            if (!game) return;
            if (isGameOver) return;

            playerHealth = game.combatManager.getPlayerHealth();
            maxPlayerHealth = game.combatManager.getMaxPlayerHealth();
            ammo = game.combatManager.getPlayerAmmo();
            enemyKillCount = game.enemyManager.getKillCount();

            if (playerHealth <= 0 || won) {
                if (!isGameOver) {
                    if (!isMobile) game.controls.unlock();
                }
                isGameOver = true;
            }
        }, 100);

        const onLockChange = () => {
            isLocked = document.pointerLockElement === canvas;
        };
        document.addEventListener('pointerlockchange', onLockChange);

        return () => {
            clearInterval(hudInterval);
            document.removeEventListener('pointerlockchange', onLockChange);
            game?.dispose();
            game = null;
        };
    });
</script>

<div class="wrapper">
    <canvas bind:this={canvas} class="webgl"></canvas>

    <!-- click/tap to lock overlay -->
    {#if !isLocked}
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
            class="lock-overlay"
            onclick={startGame}
            ontouchstart={(e) => {
                e.preventDefault();
                startGame();
            }}
            onkeydown={() => {}}
            role="button"
            tabindex="0"
        >
            {#if isMobile}
                <p>Tap to start!</p>
                <div class="directions">
                    <p class="hint">Touch to look &middot; Tap to shoot</p>
                </div>
            {:else}
                <p>Click to start!</p>
                <div class="directions">
                    <p class="hint">WASD to move &middot; Click to shoot</p>
                    <p class="hint">SPACE to jump &middot; SHIFT to run</p>
                </div>
            {/if}
        </div>
    {/if}

    <!-- crosshair -->
    <div class="crosshair" class:visible={isLocked}>
        <div class="dot"></div>
        <div class="line top"></div>
        <div class="line bottom"></div>
        <div class="line left"></div>
        <div class="line right"></div>
    </div>

    <!-- HUD -->
    <div class="health-bar">
        <div
            class="health-fill"
            style="width: {(playerHealth / maxPlayerHealth) * 100}%"
        ></div>
    </div>

    <div class="ammo">
        ammo:
        {#if ammo === null}
            &infin;
        {:else}
            {ammo}
        {/if}
    </div>

    <div class="kills">Kills: {enemyKillCount}</div>
</div>

<FPSMobileControls {game} enabled={isMobile} />
<LandscapeMobile {isMobile} onPause={() => {}} onResume={() => {}} />
<GameOver {isGameOver} {won} onRestart={handleRestart} />

<style>
    .wrapper {
        position: fixed;
        inset: 0;
        width: 100vw;
        height: 100vh;

        & .webgl {
            z-index: 0;
            width: 100%;
            height: 100%;
            display: block;
            background: transparent;
            touch-action: none;
        }

        & .lock-overlay {
            position: fixed;
            inset: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: rgba(0, 0, 0, 0.6);
            color: var(--clr-light-500);
            font-family: var(--thunder);
            z-index: 10;
            cursor: pointer;

            & p {
                font-size: clamp(var(--h5), 3vw, var(--h2));
                margin: 0;
                padding: 0;
            }

            & .directions {
                display: flex;
                flex-direction: column;
                gap: 0.05rem;
                align-items: center;
                justify-content: center;

                & .hint {
                    font-size: clamp(var(--sm), 1.5vw, var(--h4));
                    opacity: 0.7;
                }
            }
        }

        & .crosshair {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 5;
            opacity: 0;
            transition: opacity 0.2s;

            &.visible {
                opacity: 1;
            }

            & .dot {
                width: 5px;
                height: 5px;
                background: rgba(255, 255, 255, 0.9);
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            & .line {
                position: absolute;
                background: rgba(255, 255, 255, 0.7);
            }

            & .top {
                width: 2px;
                height: 10px;
                top: -12px;
                left: 50%;
                transform: translateX(-50%);
            }

            & .bottom {
                width: 2px;
                height: 10px;
                bottom: -12px;
                left: 50%;
                transform: translateX(-50%);
            }

            & .left {
                width: 10px;
                height: 2px;
                left: -12px;
                top: 50%;
                transform: translateY(-50%);
            }

            & .right {
                width: 10px;
                height: 2px;
                right: -12px;
                top: 50%;
                transform: translateY(-50%);
            }
        }

        .health-bar {
            position: fixed;
            bottom: 1.5rem;
            left: 1.5rem;
            width: 200px;
            height: 12px;
            background: rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 6px;
            overflow: hidden;
            z-index: 5;
            pointer-events: none;

            @media (width <= 768px) {
                width: 120px;
                height: 10px;
                bottom: 1rem;
                left: 1rem;
            }
        }

        .health-fill {
            height: 100%;
            background: #e74c3c;
            border-radius: 6px;
            transition: width 0.2s;
        }

        .ammo {
            position: fixed;
            bottom: 1.5rem;
            right: 1.5rem;
            font-family: monospace;
            font-size: 1.2rem;
            font-weight: bold;
            color: white;
            text-shadow: 0 0 4px rgba(0, 0, 0, 0.8);
            z-index: 5;
            pointer-events: none;

            @media (width <= 768px) {
                bottom: 1rem;
                right: 1rem;
                font-size: 1rem;
            }
        }

        .kills {
            position: fixed;
            position-anchor: --viewport;
            top: anchor(top);
            right: anchor(right);
            margin: 1.5rem;
            font-family: monospace;
            font-size: 1rem;
            color: white;
            text-shadow: 0 0 4px rgba(0, 0, 0, 0.8);
            opacity: 0.8;
            z-index: 5;
            pointer-events: none;
        }
    }
</style>
