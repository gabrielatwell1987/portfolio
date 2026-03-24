<script>
    $effect(() => {
        const preElements = document.querySelectorAll('pre');

        preElements.forEach((pre) => {
            pre.style.setProperty('anchor-name', '--code-block');

            const wrapper = document.createElement('div');
            wrapper.style.position = 'relative';
            pre.parentNode?.insertBefore(wrapper, pre);
            wrapper.appendChild(pre);

            const button = document.createElement('button');
            button.textContent = 'Copy';
            button.className = 'copy-button';
            button.onclick = () => {
                const code = pre.textContent || '';
                navigator.clipboard.writeText(code).then(() => {
                    button.textContent = '✓ Copied!';
                    setTimeout(() => (button.textContent = 'Copy'), 2000);
                });
            };
            wrapper.appendChild(button);
        });
    });
</script>

<style>
    :global(.copy-button) {
        position: absolute;
        position-anchor: --code-block;
        top: calc(anchor(top) - 0.5em);
        right: calc(anchor(right) - 0.5em);

        inline-size: fit-content;
        block-size: fit-content;
        padding: 0.25em 0.75em;
        background: var(--clr-invert);
        border: 2px solid var(--clr-main);
        color: var(--clr-main);
        border-radius: var(--radius);
        cursor: pointer;
        font-size: clamp(var(--sm), 0.875rem, var(--h5));
        font-weight: 400;
        z-index: 10;
        transition: font-weight 0.2s ease-out;

        @media (width <= 768px) {
            right: calc(anchor(right) - 0.2em);
        }

        &:hover {
            font-weight: 600;
        }
    }
</style>
