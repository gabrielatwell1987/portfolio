<script>
    import MobileFrame from '$lib/components/experiments/hero-video/MobileVideoFrame.svelte';

    // import HeroVideo from '$lib/components/experiments/hero-video/HeroVideo.svelte';
    // import VerticalStretch from '$lib/components/experiments/stretch/VerticalStretch.svelte';
</script>

<!-- <VerticalStretch
    firstWord="Vertical"
    secondWord="Stretch"
    titleLetters={['t', 'e', 's', 't']}
    firstMessage="i'm testing out some"
    secondMessage="new layout stuff"
/> -->

<!-- <HeroVideo
    videoSrc="https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/videos/Street-Video.mp4"
    title="component test"
    subtitle="This is a subtitle for the hero section. you can use this space to provide more information about the content or purpose of the hero section."
    ctaText="Learn More"
/> -->

<MobileFrame
    videoSrc="https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/videos/Waves-Crashing.mp4"
    videos={[
        'https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/videos/Waves-Crashing.mp4',
        'https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/videos/Street-Video.mp4',
    ]}
/>

<style>
</style>
