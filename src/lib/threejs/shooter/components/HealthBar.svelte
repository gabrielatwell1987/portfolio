<script lang="ts">
    let { playerHealth = 0, maxPlayerHealth = 10 } = $props();
</script>

<div class="health-container">
    <div class="health-bar">
        <div
            class="health-fill"
            style="width: {(playerHealth / maxPlayerHealth) * 100}%"
        ></div>
    </div>
</div>

<style>
    .health-container {
        position: fixed;
        bottom: 2em;
        left: 2em;
        z-index: 100;
        background: transparent;
        padding: 1rem;
        border-radius: 0.5rem;
        min-inline-size: 200px;
        opacity: 0.75;

        @media (width <= 768px) {
            bottom: 0;
            left: 0;
        }
    }

    .health-bar {
        inline-size: 100%;
        block-size: clamp(0.75rem, 1.5vw, 1.25rem);
        background: rgba(255, 255, 255, 0.2);
        border: 2px solid rgba(255, 255, 255, 0.4);
        border-radius: 0.25rem;
        overflow: hidden;
    }

    .health-fill {
        block-size: 100%;
        background: linear-gradient(90deg, var(--clr-invert-fade), var(--fail));
        transition: inline-size 0.1s ease;
    }
</style>
