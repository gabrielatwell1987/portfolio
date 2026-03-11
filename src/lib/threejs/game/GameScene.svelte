<script lang="ts">
	import gsap from 'gsap';
	import HealthBar from './components/HealthBar.svelte';
	import GameOver from './components/GameOver.svelte';
	import Directions from './components/Directions.svelte';
	import { initializeGame, cleanupGame, type GameState } from './gameSetup';

	let canvas = $state<HTMLCanvasElement | null>(null);
	let playerHealth = $state(10);
	let maxPlayerHealth = $state(10);
	let restartTrigger = $state(0);
	let showDirections = $state(false);

	let joystickX = $state(0);
	let joystickY = $state(0);
	let joystickElement: HTMLElement | null = null;
	let gameState: GameState | null = null;

	let enemyKillCount = $state(0);
	let isGameOver = $state(false);
	let won = $derived(enemyKillCount >= 3);
	let enemiesDisposed = $state(false);
	let isMobile = $state(false);

	function handleRestart(): void {
		isGameOver = false;
		playerHealth = 10;
		maxPlayerHealth = 10;
		restartTrigger += 1;
		enemyKillCount = 0;
		enemiesDisposed = false;
		isGameOver = false;
	}

	$effect(() => {
		if (!canvas) return;
		void restartTrigger;

		const abortController = new AbortController();
		let lastFrameTime = performance.now();

		isMobile = window.innerWidth <= 768;

		// initialize game
		gameState = initializeGame(canvas, joystickElement);
		const { renderer, scene, camera, controls, player, enemyManager, mobileJoystick, stats } =
			gameState;

		// smooth camera movement
		const cameraTarget = { x: camera.position.x, y: camera.position.y, z: camera.position.z };
		let cameraTween: gsap.core.Tween | null = null;

		// kill tracking
		enemyManager.setOnEnemyKilled(() => {
			enemyKillCount = enemyManager.getKillCount();

			if (enemyKillCount >= 3) {
				console.log('Win condition met!');
				isGameOver = true;
			}
		});

		// screen resizing
		function onResize() {
			const w = window.innerWidth;
			const h = window.innerHeight;
			isMobile = w <= 768;
			camera.aspect = w / h;
			camera.updateProjectionMatrix();
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
			renderer.setSize(w, h, false);
		}

		onResize();
		window.addEventListener('resize', onResize, { signal: abortController.signal });

		// animation loop
		renderer.setAnimationLoop(() => {
			player.update();

			const now = performance.now();
			const dt = Math.min(0.05, (now - lastFrameTime) / 1000);
			lastFrameTime = now;

			// only update enemies if game is not over
			if (isGameOver && !enemiesDisposed) {
				enemyManager.dispose();
				enemiesDisposed = true;
			} else if (!isGameOver) {
				enemyManager.update(dt);
			}

			// update UI
			if (mobileJoystick) {
				joystickX = mobileJoystick.getJoystickX();
				joystickY = mobileJoystick.getJoystickY();
			}

			const combatManager = player.getCombatManager();
			playerHealth = combatManager.getPlayerHealth();
			maxPlayerHealth = combatManager.getMaxPlayerHealth();

			if (playerHealth <= 0 && !isGameOver) {
				isGameOver = true;
			}

			// camera follow
			const desiredX = player.position.x + 1;
			const desiredY = player.position.y + 4;
			const desiredZ = player.position.z + 3;

			if (isMobile) {
				camera.position.set(desiredX, desiredY, desiredZ);
			} else {
				if (cameraTween) cameraTween.kill();

				cameraTween = gsap.to(cameraTarget, {
					x: desiredX,
					y: desiredY,
					z: desiredZ,
					duration: 0.3,
					ease: 'power2.out',
					onUpdate: () => {
						camera.position.set(cameraTarget.x, cameraTarget.y, cameraTarget.z);
					}
				});
			}

			controls.target.copy(player.position);
			controls.update();

			stats.update();
			renderer.render(scene, camera);
		});

		return () => {
			if (cameraTween) cameraTween.kill();

			if (gameState) cleanupGame(gameState, abortController);

			gameState = null;
		};
	});
</script>

<canvas class="webgl" bind:this={canvas}></canvas>

<HealthBar {playerHealth} {maxPlayerHealth} />
<GameOver {isGameOver} {won} onRestart={handleRestart} />
<Directions bind:showDirections />

<!-- mobile joystick -->
<div class="mobile-joystick" bind:this={joystickElement}>
	<div class="joystick-base">
		<div
			class="joystick-stick"
			style="transform: translate({joystickX * 30}px, {joystickY * 30}px)"
		></div>
	</div>
</div>

<!-- shoot button -->
<button class="shoot-button" onclick={() => gameState?.player?.shoot()} aria-label="Shoot">
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
		<path
			d="M560 120C560 106.7 549.3 96 536 96C522.7 96 512 106.7 512 120L512 128L64 128C46.3 128 32 142.3 32 160L32 272C32 289.7 46.3 304 64 304L74 304C94.8 304 110.1 323.6 105 343.8L65 504.2C62.6 513.8 64.8 523.9 70.8 531.7C76.8 539.5 86.1 544 96 544L192 544C206.7 544 219.5 534 223 519.8L249 416L353.4 416C377.1 416 398.2 401.1 406.1 378.8L432.8 304L463.9 304C472.4 304 480.5 300.6 486.5 294.6L509.1 272L575.8 272C593.5 272 607.8 257.7 607.8 240L607.8 160C607.8 142.3 593.5 128 575.8 128L559.8 128L559.8 120zM353.4 368L260.9 368L276.9 304L381.9 304L360.9 362.7C359.8 365.9 356.7 368 353.4 368zM112 192L496 192C504.8 192 512 199.2 512 208C512 216.8 504.8 224 496 224L112 224C103.2 224 96 216.8 96 208C96 199.2 103.2 192 112 192z"
		/>
	</svg>
</button>

<style>
	.webgl {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 0;
		min-height: 100vh;
		max-inline-size: 100vw;
		display: block;
		background: transparent;
		touch-action: none;

		mask-image: radial-gradient(
			ellipse at center,
			var(--clr-invert) 0%,
			transparent 80%,
			transparent 100%
		);
		box-shadow: inset 0 0 10px 20px var(--clr-invert);

		@media (width <= 768px) {
			mask-image: radial-gradient(
				ellipse at center,
				var(--clr-invert) 0%,
				transparent 95%,
				transparent 100%
			);
		}
	}

	.shoot-button {
		position: fixed;
		bottom: 3em;
		right: 3em;
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		background: var(--clr-blue);
		color: white;
		border: 2px solid var(--clr-blue);
		font-size: 1.5rem;
		cursor: pointer;
		z-index: 100;
		display: none;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;
		touch-action: manipulation;
		user-select: none;

		&:hover {
			transform: scale(1.1);
		}

		&:active {
			transform: scale(0.95);
		}

		@media (max-width: 768px) {
			display: flex;
			right: 1em;
		}
	}

	.mobile-joystick {
		position: fixed;
		bottom: 2rem;
		left: 2rem;
		width: 120px;
		height: 120px;
		display: none;
		z-index: 100;
		touch-action: none;

		@media (max-width: 768px) {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		& .joystick-base {
			position: relative;
			width: 100%;
			height: 100%;
			background: rgba(255, 255, 255, 0.1);
			border: 2px solid rgba(255, 255, 255, 0.3);
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		& .joystick-stick {
			width: 50px;
			height: 50px;
			background: rgba(255, 255, 255, 0.5);
			border: 2px solid rgba(255, 255, 255, 0.8);
			border-radius: 50%;
			transition: transform 0.05s ease-out;
			pointer-events: none;
		}
	}
</style>
