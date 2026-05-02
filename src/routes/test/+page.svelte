<script>
    // import DrawingApp from '$lib/components/learn/draw-canvas/DrawingApp.svelte';
    // import HeadshotHero from '$lib/components/landing/hero-section/HeadshotHero.svelte';
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
        'https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/videos/Web-Code.mp4',
        'https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/videos/Html-Code.mp4',
    ]}
    firstTitle="mobile"
    secondTitle="video"
/>

<!-- <HeadshotHero
    title="headshot hero"
    text="this is a hero section with a headshot background image. it's designed to be simple and elegant, allowing the content to shine while providing a visually appealing backdrop. It's perfect for personal portfolios, about pages, or any section where you want to make a strong visual impact with a personal touch. This is fake text to fill the space and show how the layout looks with more content. you can replace this with your own text or remove it entirely if you prefer a cleaner look."
    cta="Click Me!"
    bgImage="https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/headshot-noBG_a.webp"
/> -->

<!-- <DrawingApp /> -->

<style>
</style>
