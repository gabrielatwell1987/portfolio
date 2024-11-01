<script>
    export let open = false;
    export let ariaLabel = "menu";

    function toggleMenu() {
        open = !open;
    }
</script>

<button class="hamburger" on:click={toggleMenu} aria-label={ariaLabel}>
    <div class="bar">
        <i class="fa fa-bars"></i>
    </div>
</button>

<style>
    .hamburger {
        display: flex;
        flex-direction: column;
        width: 30px;
        height: 20px;
        background: transparent;
        border: none;
        cursor: pointer;
        z-index: 10;
        margin-bottom: 80%;
    }

    .bar {
        height: 3px;
        width: 100%;
        background-color: var(--white);
        margin: 3px 0;
        transition: all 0.3s ease;
    }

    i {
        color: var(--white);
        scale: 2;
    }

    i:hover {
        color: var(--off-white);
    }
</style>

