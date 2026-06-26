<script lang="ts">
    import { onMount, tick } from 'svelte';
    import { FPSGame } from './FPSGameSetup';
    import Confetti from './components/Confetti.svelte';
    import TitleScreen from './TitleScreen.svelte';
    import LandscapeMobile from '$lib/threejs/shooter/components/LandscapeMobile.svelte';
    import FPSMobileControls from './components/FPSMobileControls.svelte';

    let canvas = $state<HTMLCanvasElement | null>(null);
    let game: FPSGame | null = $state(null);
    let isLocked = $state(false);
    let isMobile = $state(false);
    let playerHealth = $state(10);
    let maxPlayerHealth = $state(10);
    let ammo = $state<number | null>(null);
    let enemyKillCount = $state(0);
    let isGameOver = $state(false);
    let won = $derived(enemyKillCount >= 5);
    let showTitle = $state(true);

    // Refs for cleanup set by startTitleGame
    let hudIntervalRef: ReturnType<typeof setInterval> | null = null;
    let lockChangeRef: (() => void) | null = null;

    // Fallback: if isGameOver stays true for 3s, force restart
    $effect(() => {
        if (isGameOver) {
            const timer = setTimeout(() => {
                handleRestart();
            }, 3000);
            return () => clearTimeout(timer);
        }
    });

    function handleRestart(): void {
        try {
            game?.dispose();
        } catch (_) {
            // ignore dispose errors
        }
        game = null;
        isGameOver = false;
        playerHealth = 10;
        maxPlayerHealth = 10;
        enemyKillCount = 0;
        game = new FPSGame();
        // Init runs once; then we lock/start
        const initPromise = game.init(canvas!).catch(() => {});
        if (isMobile) {
            isLocked = false;
            if (game) game.setMobile(true);
            initPromise.then(() => {
                isLocked = true;
                game?.start();
            });
            setTimeout(() => {
                if (!isLocked) {
                    isLocked = true;
                    game?.start();
                }
            }, 2000);
        } else {
            // Desktop — re-lock pointer after init completes
            initPromise.then(() => {
                game?.controls.lock();
                game?.start();
                isLocked = true;
            });
        }
    }

    async function startTitleGame(): Promise<void> {
        showTitle = false;
        isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        // Wait for Svelte to render the canvas in the {:else} block
        await tick();

        game = new FPSGame();
        // Await init so controls, combatManager, etc. exist
        game.init(canvas!).then(() => {
            if (isMobile) {
                game?.setMobile(true);
                isLocked = true;
                game?.start();
            } else {
                // Desktop — lock pointer immediately
                game?.controls.lock();
                game?.start();
                isLocked = true;
            }
        });

        // Keep a short mobile fallback in case .then is delayed
        if (isMobile) {
            setTimeout(() => {
                if (!isLocked) {
                    game?.setMobile(true);
                    isLocked = true;
                    game?.start();
                }
            }, 2000);
        }

        const hudInterval = setInterval(() => {
            if (!game) return;
            if (isGameOver) return;

            if (!game.combatManager || !game.enemyManager) return;

            playerHealth = game.combatManager.getPlayerHealth();
            maxPlayerHealth = game.combatManager.getMaxPlayerHealth();
            ammo = game.combatManager.getPlayerAmmo();
            enemyKillCount = game.enemyManager.getKillCount();

            if (playerHealth <= 0 || won) {
                if (!isGameOver) {
                    if (!isMobile) game.controls.unlock();
                    game?.stop();
                    setTimeout(() => {
                        handleRestart();
                    }, 2500);
                }
                isGameOver = true;
            }
        }, 100);

        hudIntervalRef = hudInterval;

        const onLockChange = () => {
            isLocked = document.pointerLockElement === canvas;
        };
        lockChangeRef = onLockChange;
        document.addEventListener('pointerlockchange', onLockChange);

        const onEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                game?.dispose();
                game = null;
                clearInterval(hudInterval);
                document.removeEventListener('pointerlockchange', onLockChange);
                window.dispatchEvent(new CustomEvent('exit-game'));
            }
        };
        document.addEventListener('keydown', onEscape);
    }

    onMount(() => {
        // Title screen shown initially — game starts via startTitleGame
        return () => {
            if (hudIntervalRef) clearInterval(hudIntervalRef);
            if (lockChangeRef)
                document.removeEventListener(
                    'pointerlockchange',
                    lockChangeRef,
                );
            game?.dispose();
            game = null;
        };
    });
</script>

{#if showTitle}
    <TitleScreen onStart={startTitleGame} />
{:else}
    <div class="wrapper">
        <canvas bind:this={canvas} class="webgl"></canvas>

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

    {#key game}
        <FPSMobileControls
            {game}
            enabled={isMobile && isLocked && !isGameOver}
        />
    {/key}
    <LandscapeMobile {isMobile} onPause={() => {}} onResume={() => {}} />
    <Confetti active={isGameOver} color={won ? 'green' : 'red'} />
{/if}

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
