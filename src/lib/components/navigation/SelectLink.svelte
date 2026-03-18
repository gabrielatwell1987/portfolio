<script lang="ts">
    import { goto } from '$app/navigation';

    function handleSelect(event: Event) {
        const value = (event.target as HTMLSelectElement).value;
        if (value === 'hire') {
            goto('/hire');
        } else if (value === 'contact') {
            goto('/contact');
        }
    }
</script>

<select on:change={handleSelect}>
    <option value="hire"><span>Hire Me</span></option>
    <option value="contact"><span>Contact</span></option>
</select>

<style>
    select,
    ::picker(select) {
        appearance: base-select;

        &::picker-icon {
            display: none;
        }
    }

    ::picker(select) {
        background: var(--clr-invert-fade);
        border: none;
        box-shadow: none;
        overflow: visible;
    }

    select {
        background: radial-gradient(
            ellipse at 50% 50%,
            var(--clr-invert) 0%,
            var(--clr-invert) 50%,
            var(--clr-invert-fade) 75%,
            var(--clr-main-fade) 100%
        );
        backdrop-filter: blur(12px) saturate(180%);
        border: 1px solid var(--clr-main);
        color: var(--clr-main);
        max-inline-size: fit-content;
        font-family: var(--bronova-bold);
        font-size: clamp(var(--sm), 1.1vw, var(--h5));
        letter-spacing: 1px;
        margin: 0.1em 0 0 0;
        transition: none;

        & option {
            color: var(--clr-main-fade);

            &::checkmark {
                content: '→';
                color: var(--clr-main-fade);
            }
        }
    }
</style>
