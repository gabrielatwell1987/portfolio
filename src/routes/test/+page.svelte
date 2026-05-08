<script lang="ts">
    import { onMount } from 'svelte';

    const componentMap: Record<
        number,
        { load: () => Promise<any>; props: Record<string, any> }
    > = {
        1: {
            load: () =>
                import('$lib/components/landing/hero-section/HeadshotHero.svelte'),
            props: {
                title: 'headshot hero',
                cta: 'Click Me!',
                bgImage:
                    'https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/headshot-noBG_a.webp',
                text: 'this is a hero section with a headshot background image.',
            },
        },
        2: {
            load: () =>
                import('$lib/components/experiments/hero-video/HeroVideo.svelte'),
            props: {
                videoSrc:
                    'https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/videos/Street-Video.mp4',
                title: 'component test',
                subtitle: 'This is a subtitle for the hero section.',
                ctaText: 'Learn More',
            },
        },
        3: {
            load: () =>
                import('$lib/components/experiments/stretch/VerticalStretch.svelte'),
            props: {
                firstWord: 'Vertical',
                secondWord: 'Stretch',
                titleLetters: ['t', 'e', 's', 't'],
                firstMessage: "i'm testing out some",
                secondMessage: 'new layout stuff',
            },
        },
        4: {
            load: () =>
                import('$lib/components/experiments/hero-video/MobileVideoFrame.svelte'),
            props: {
                videoSrc:
                    'https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/videos/Waves-Crashing.mp4',
                videos: [
                    'https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/videos/Waves-Crashing.mp4',
                    'https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/videos/Street-Video.mp4',
                    'https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/videos/Web-Code.mp4',
                    'https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/videos/Html-Code.mp4',
                ],
                firstTitle: 'mobile',
                secondTitle: 'video',
            },
        },
    };

    let Component = $state<any>(null);
    let componentProps = $state<Record<string, any>>({});

    onMount(async () => {
        const keys = Object.keys(componentMap).map(Number);
        const seenRaw = sessionStorage.getItem('seenComponents');
        let seen: number[] = seenRaw ? JSON.parse(seenRaw) : [];

        // reset if been seen
        if (seen.length === keys.length) {
            seen = [];
        }

        const remaining = keys.filter((k) => !seen.includes(k));
        const randomKey =
            remaining[Math.floor(Math.random() * remaining.length)];

        seen.push(randomKey);
        sessionStorage.setItem('seenComponents', JSON.stringify(seen));

        const { load, props } = componentMap[randomKey];
        const module = await load();
        Component = module.default;
        componentProps = props;
    });
</script>

{#if Component}
    <Component {...componentProps} />
{/if}

<style>
</style>
