<script lang="ts">
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    interface Props {
        src: string;
        alt?: string;
        frameBorder?: string;
        title?: string;
    }

    let { src, alt = '', frameBorder = '', title = '' }: Props = $props();
    let wrapperElement = $state<HTMLDivElement | undefined>(undefined);
    let imgElement = $state<HTMLImageElement | undefined>(undefined);
    let bgElement = $state<HTMLDivElement | undefined>(undefined);

    $effect(() => {
        if (!wrapperElement || !imgElement || !bgElement) return;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.set(imgElement!, { scale: 0 });

            const tl = gsap
                .timeline({
                    scrollTrigger: {
                        trigger: wrapperElement,
                        start: 'top top',
                        end: '+=150%',
                        pin: true,
                        scrub: true,
                        markers: false,
                    },
                })
                .to(imgElement!, {
                    scale: 1,
                    z: 350,
                    transformOrigin: 'center center',
                });
        });

        return () => {
            ctx.revert();
        };
    });
</script>

<div class="wrapper" bind:this={wrapperElement}>
    <div
        class="content"
        bind:this={bgElement}
        style="background-image: url({frameBorder});"
    ></div>

    <div class="image-container">
        <img {src} alt={alt || title} bind:this={imgElement} />
    </div>
</div>

<style>
    .wrapper,
    .content {
        position: relative;
        inline-size: 100%;
        min-block-size: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        z-index: 1;
    }

    .wrapper {
        & .content {
            position: absolute;
            inset: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow-x: hidden;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }

        & .image-container {
            object-fit: contain;

            position: relative;
            z-index: 2;
            inline-size: 100%;
            max-inline-size: 100vw;
            aspect-ratio: 16 / 9;
            overflow: hidden;
            perspective: 1000px;

            & img {
                inline-size: 100%;
                block-size: 100%;
                object-fit: cover;
                will-change: transform;
            }
        }
    }
</style>
