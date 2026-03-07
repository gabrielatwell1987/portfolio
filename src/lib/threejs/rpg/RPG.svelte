<script lang="ts">
	import { AmbientLight, DirectionalLight, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
	import { World } from './world';
	import { HumanPlayer } from './players/HumanPlayer';
	import { EnemyManager } from './enemies/EnemyManager';
	import Stats from 'three/addons/libs/stats.module.js';

	let scene: Scene;
	let camera: PerspectiveCamera;
	let renderer: WebGLRenderer;
	let controls: OrbitControls;
	let sun: DirectionalLight;
	let ambient: AmbientLight;
	let stats: Stats;
	let world: World;
	let player: HumanPlayer;
	let enemyManager: EnemyManager;

	let canvas = $state<HTMLCanvasElement | null>(null);
	let playerHealth = $state(10);
	let maxPlayerHealth = $state(10);
	let isGameOver = $state(false);
	let restartTrigger = $state(0);
	let showDirections = $state(false);

	function handleRestart(): void {
		isGameOver = false;
		playerHealth = 10;
		maxPlayerHealth = 10;
		restartTrigger += 1;
	}

	$effect(() => {
		if (!canvas) return;
		// Re-run when restart is triggered
		void restartTrigger;

		const abortController = new AbortController();
		let lastFrameTime = performance.now();
		// const isMobile = window.matchMedia('(max-width: 768px)').matches;

		// renderer, scene, camera, player, controls, lights, terrain
		renderer = new WebGLRenderer({
			canvas,
			antialias: true
		});

		scene = new Scene();
		camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

		// orbit controls
		controls = new OrbitControls(camera, canvas);
		controls.enableRotate = false;
		controls.target.set(5, 0, 5);

		camera.position.set(1, 4, 3);

		world = new World(30, 30);
		scene.add(world);

		player = new HumanPlayer(camera, world, world, canvas, scene);
		scene.add(player);

		// Initialize enemy manager
		enemyManager = new EnemyManager(player, world, scene);
		scene.add(enemyManager);

		// Set enemy manager in combat system
		player.getCombatManager().setEnemyManager(enemyManager);

		sun = new DirectionalLight();
		sun.intensity = 3;
		sun.position.set(1, 2, 3);
		scene.add(sun);

		ambient = new AmbientLight(0xffffff, 0.5);
		scene.add(ambient);

		// stats
		stats = new Stats();
		document.body.appendChild(stats.dom);

		// handle resizing
		function onResize() {
			const w = window.innerWidth;
			const h = window.innerHeight;
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

			// Update enemies
			const now = performance.now();
			const dt = Math.min(0.05, (now - lastFrameTime) / 1000);
			lastFrameTime = now;
			enemyManager.update(dt);

			// Update health display
			const combatManager = player.getCombatManager();
			playerHealth = combatManager.getPlayerHealth();
			maxPlayerHealth = combatManager.getMaxPlayerHealth();

			// Check if player died
			if (playerHealth <= 0 && !isGameOver) {
				isGameOver = true;
			}

			// camera movement
			const cameraOffsetX = 1;
			const cameraOffsetY = 4;
			const cameraOffsetZ = 3;
			camera.position.x = player.position.x + cameraOffsetX;
			camera.position.y = player.position.y + cameraOffsetY;
			camera.position.z = player.position.z + cameraOffsetZ;

			controls.target.copy(player.position);
			controls.update();

			stats.update();
			renderer.render(scene, camera);
		});

		// cleanup
		return () => {
			abortController.abort();

			renderer.setAnimationLoop(null);
			world.clear();

			player?.dispose();
			enemyManager?.dispose();
			renderer.dispose();
			stats.dom.remove();
			scene.clear();
			controls.dispose();
			sun.dispose();
			ambient.dispose();
		};
	});
</script>

<canvas class="webgl" bind:this={canvas}></canvas>

<!-- direction toggle button -->
<button
	class="directions-toggle"
	onclick={() => (showDirections = !showDirections)}
	aria-label="Toggle directions"
	aria-expanded={showDirections}
>
	directions
</button>

{#if showDirections}
	<div class="game-directions">
		<button
			class="close-directions"
			onclick={() => (showDirections = false)}
			aria-label="Close directions"
		>
			×
		</button>

		<h2>directions</h2>

		<p>
			Use WASD or click/tap to move. Shoot enemies by clicking the shoot button or pressing space.
		</p>
	</div>
{/if}

<!-- health display -->
<div class="health-container">
	<h3 class="health-label">Health</h3>

	<div class="health-bar">
		<div class="health-fill" style="width: {(playerHealth / maxPlayerHealth) * 100}%"></div>
	</div>

	<div class="health-text">{Math.max(0, playerHealth)} / {maxPlayerHealth}</div>
</div>

<!-- mobile shoot button -->
<button
	class="shoot-button"
	onpointerdown={() => player?.shoot()}
	ontouchstart={() => player?.shoot()}
	aria-label="Shoot"
>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
		><path
			d="M560 120C560 106.7 549.3 96 536 96C522.7 96 512 106.7 512 120L512 128L64 128C46.3 128 32 142.3 32 160L32 272C32 289.7 46.3 304 64 304L74 304C94.8 304 110.1 323.6 105 343.8L65 504.2C62.6 513.8 64.8 523.9 70.8 531.7C76.8 539.5 86.1 544 96 544L192 544C206.7 544 219.5 534 223 519.8L249 416L353.4 416C377.1 416 398.2 401.1 406.1 378.8L432.8 304L463.9 304C472.4 304 480.5 300.6 486.5 294.6L509.1 272L575.8 272C593.5 272 607.8 257.7 607.8 240L607.8 160C607.8 142.3 593.5 128 575.8 128L559.8 128L559.8 120zM353.4 368L260.9 368L276.9 304L381.9 304L360.9 362.7C359.8 365.9 356.7 368 353.4 368zM112 192L496 192C504.8 192 512 199.2 512 208C512 216.8 504.8 224 496 224L112 224C103.2 224 96 216.8 96 208C96 199.2 103.2 192 112 192z"
		/></svg
	>
</button>

<!-- game over screen -->
{#if isGameOver}
	<div class="game-over-overlay">
		<div class="game-over-container">
			<h1>GAME OVER</h1>
			<p>You were defeated...</p>
			<button
				class="restart-button"
				onclick={() => {
					handleRestart();
				}}
			>
				Restart
			</button>
		</div>
	</div>
{/if}

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
	}

	.health-container {
		position: fixed;
		bottom: 2em;
		left: 2em;
		z-index: 100;
		background: transparent;
		padding: 1rem;
		border-radius: 0.5rem;
		min-width: 200px;
		opacity: 0.75;

		@media (width <= 768px) {
			bottom: 0;
			left: 0;
		}

		& .health-label {
			color: white;
			font-size: 0.875rem;
			font-weight: bold;
			margin-bottom: 0.5rem;
		}

		& .health-bar {
			width: 100%;
			height: 1.5rem;
			background: rgba(255, 255, 255, 0.2);
			border: 2px solid rgba(255, 255, 255, 0.4);
			border-radius: 0.25rem;
			overflow: hidden;
		}

		& .health-fill {
			height: 100%;
			background: linear-gradient(90deg, var(--clr-invert-fade), var(--fail));
			transition: width 0.1s ease;
		}

		& .health-text {
			color: rgba(255, 255, 255, 0.8);
			font-size: 0.75rem;
			margin-top: 0.5rem;
			text-align: center;
		}
	}

	.directions-toggle {
		position: fixed;
		bottom: 0;
		right: 1rem;
		inline-size: fit-content;
		block-size: fit-content;
		border-radius: var(--radius);
		background: var(--clr-invert-fade);
		color: var(--clr-main);
		border: 2px solid var(--clr-invert);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		z-index: 100;

		@media (width <= 768px) {
			display: flex;
		}

		&:hover {
			transform: scale(1.1);
		}

		&:active {
			transform: scale(0.95);
		}
	}

	.game-directions {
		position: fixed;
		bottom: 1em;
		right: 1em;
		background: var(--clr-invert-fade);
		padding: 0.5rem 1rem;
		border: 1px solid var(--clr-invert);
		border-radius: var(--radius);
		z-index: 100;
		max-inline-size: 30vw;
		opacity: 0.75;

		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;

		@media (width <= 768px) {
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background: var(--clr-invert-fade);
			border: 1px solid var(--clr-invert);
			border-radius: var(--radius);
			padding: 0.2rem 0.75rem;
			z-index: 150;
			min-inline-size: 85vw;
			max-height: 60vh;
			overflow-y: auto;

			& h2 {
				color: var(--clr-main);
				font-size: var(--h5);
				font-weight: bold;
				margin: 0 0 1rem 0;
				text-transform: uppercase;
				text-align: center;
			}

			& p {
				color: rgba(255, 255, 255, 0.8);
				font-size: var(--sm);
				margin: 0;
				text-align: center;
			}
		}

		& h2 {
			color: var(--clr-main);
			font-size: clamp(var(--xs), 1.2vw, var(--h5));
			font-weight: bold;
			margin: 0;
			text-transform: uppercase;
			text-align: center;

			@media (width <= 768px) {
			}
		}

		& p {
			color: rgba(255, 255, 255, 0.8);
			font-size: clamp(var(--xxs), 1.1vw, var(--sm));
			margin: 0;
			text-align: center;

			@media (width <= 768px) {
			}
		}
	}

	.close-directions {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		background: transparent;
		border: none;
		color: rgba(255, 255, 255, 0.8);
		font-size: 2rem;
		cursor: pointer;
		padding: 0;
		width: 2rem;
		height: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: color 0.2s ease;

		&:hover {
			color: white;
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
		-webkit-user-select: none;

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

	.game-over-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 200;
		backdrop-filter: blur(4px);

		& .game-over-container {
			background: transparent;
			border: 3px solid var(--fail);
			border-radius: 1rem;
			padding: 3rem;
			text-align: center;
			max-width: 500px;

			& h1 {
				color: var(--fail);
				font-size: 3rem;
				margin: 0 0 1rem 0;
				text-transform: uppercase;
				letter-spacing: 0.2em;
				font-weight: 900;
			}

			& p {
				color: rgba(255, 255, 255, 0.8);
				font-size: 1.25rem;
				margin: 0 0 2rem 0;
			}
		}

		& .restart-button {
			background: transparent;
			color: white;
			border: 2px solid var(--fail);
			border-radius: 0.5rem;
			padding: 1rem 2rem;
			font-size: 1.1rem;
			font-weight: bold;
			cursor: pointer;
			transition: all 0.3s ease;
			text-transform: uppercase;
			letter-spacing: 0.1em;

			&:hover {
				transform: scale(1.05);
			}

			&:active {
				transform: scale(0.98);
			}
		}
	}
</style>
