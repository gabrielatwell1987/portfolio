<a class="test-link" href="/test">Test</a>

<style>
    .test-link {
        position: absolute;
        top: 1.2em;
        right: 1em;
        border-radius: 5px;
        background-color: transparent;
        color: var(--clr-pale-700);
        padding: 0.5rem 0.75rem;
        z-index: 100;
        text-decoration: none;
        font-size: clamp(var(--xs), 1vw, var(--sm));
        font-weight: 700;
        letter-spacing: 1px;

        &:not(:focus-visible) {
            clip-path: inset(50%);
            overflow: hidden;
            width: 1px;
            height: 1px;
            white-space: nowrap;
        }

        &:focus-visible {
            outline: 3px solid var(--dark-pale);
            transform: scale(1.05);
            top: 1.5rem;
            transition: top 0.2s ease-out;
        }
    }
</style>
