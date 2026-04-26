<script lang="ts">
    import gsap from 'gsap';

    let sections = $state<HTMLElement[]>([]);
    let loader = $state<HTMLElement | null>(null);
    let done = $state(false);

    $effect(() => {
        if (!sections.length || !loader) return;

        gsap.set(sections, { yPercent: 0 });

        // const tl = gsap.timeline({
        //     // slide all sections back up and remove loader
        //     onComplete: () => {
        //         gsap.to(sections, {
        //             yPercent: -100,
        //             duration: 0.5,
        //             stagger: 0.8,
        //             ease: 'power2.in',
        //             onComplete: () => {
        //                 done = true;
        //             },
        //         });
        //     },
        // });

        // random delay for each section

        sections.forEach((section) => {
            const randomDelay = 0.3 + Math.random() * 0.5;

            gsap.to(section, {
                yPercent: -100,
                duration: 0.6,
                delay: randomDelay,
                ease: 'power3.inOut',
                onComplete: () => {
                    // done when last section finishes
                    if (section === sections[sections.length - 1]) {
                        done = true;
                    }
                },
            });
        });
    });
</script>

{#if !done}
    <main class="content-loader" bind:this={loader} aria-hidden="true">
        {#each ['A', 'B', 'C', 'D'] as _, i}
            <div class="section" bind:this={sections[i]}></div>
        {/each}
    </main>
{/if}

<style>
    .content-loader {
        position: fixed;
        inset: 0;
        display: flex;
        z-index: 200;
        pointer-events: none;
        overflow: hidden;

        & .section {
            inline-size: 25vw;
            block-size: 100vh;
            background-color: var(--clr-invert);
            overflow: hidden;
            flex-shrink: 0;
            border: 2px solid var(--clr-main);
        }
    }
</style>
