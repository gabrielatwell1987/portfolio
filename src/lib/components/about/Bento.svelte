<script lang="ts">
    import Image from '$lib/components/layout/Image.svelte';
</script>

<div class="bento-wrapper">
    <article data-bento-article>
        <section>
            <div class="bento-grid">
                <div class="bento-item" data-position-left>
                    <a
                        href="/contact"
                        class="bento-link"
                        aria-label="Navigate to contact page"
                    >
                        <div class="bento-icons">
                            <Image
                                src="https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/speech-bubble.svg"
                                alt="contact icon"
                                width="350"
                                aspectRatio="1/1"
                                class="contact_svg"
                            />
                        </div>

                        <h2>contact</h2>

                        <p>Feel free to contact me about anything!</p>
                    </a>
                </div>

                <div class="bento-item" data-position-right>
                    <div data-position-center>
                        <a
                            href="/learn"
                            class="bento-link"
                            aria-label="Navigate to learn page"
                        >
                            <div class="bento-icons">
                                <Image
                                    src="https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/learn-icon.svg"
                                    alt="learn icon"
                                    width="350"
                                    aspectRatio="1/1"
                                    class="learn_svg"
                                    scaleY="3"
                                />
                                <div class="space"></div>
                            </div>

                            <h2>learn</h2>

                            <p>If you'd like to learn about web technologies</p>
                        </a>
                    </div>
                </div>

                <div class="bento-item" data-position-left>
                    <a
                        href="/projects"
                        class="bento-link"
                        aria-label="Navigate to projects page"
                    >
                        <h2>projects</h2>

                        <Image
                            src="https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/lowgow.svg"
                            alt="atwell logo"
                            width="350"
                            aspectRatio="1/1"
                            class="atwell_svg"
                        />
                    </a>
                </div>
            </div>
        </section>
    </article>
</div>

<style>
    :root {
        --space: 1rem;
        --surface-1: transparent;
        --surface-2: var(--clr-dark-500);
        --gradient: radial-gradient(var(--clr-gray-700), var(--dark) 88%);
    }

    * {
        box-sizing: border-box;
    }

    .bento-wrapper {
        margin: 0;

        & .bento-link {
            padding: var(--space);
            margin: 0;
            cursor: pointer;
            inline-size: fit-content;
            block-size: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            text-decoration: none;
            color: inherit;
            font-family: inherit;

            &:focus,
            &:focus-visible {
                outline: 2px solid var(--clr-light-500);
                outline-offset: 2px;
                box-shadow: none;
            }

            &:active {
                scale: 0.95;
            }
        }

        & article[data-bento-article] {
            line-height: 1.4;
            margin: 0;
            padding-inline: var(--space);
            background-color: transparent;
            box-shadow: none;

            & section {
                margin-inline: auto;
                inline-size: min(1000px, 100%);
            }

            & .bento-grid {
                display: grid;
                gap: var(--space);
                grid-template-columns: 1fr;
                grid-template-areas:
                    'item-one'
                    'item-two'
                    'item-three';
                position: relative;

                @media (width >= 768px) {
                    grid-template-columns: repeat(2, 1fr);
                    grid-template-areas:
                        'item-one item-two'
                        'item-three item-three';
                }

                @media (width >= 50rem) {
                    grid-template-columns: repeat(3, 1fr);
                    grid-template-areas:
                        'item-one item-one item-two'
                        'item-three item-three item-two';
                }

                @media (width <= 500px) {
                    margin-top: 5em;
                }

                & .bento-item {
                    inline-size: 100%;
                    background-color: var(--surface-2);
                    background-image: var(--gradient);
                    text-decoration: none;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding-block-end: 1em;
                    border: 2px solid var(--clr-light-500);
                    border-radius: var(--radius);
                    transition:
                        border 1s ease-out,
                        box-shadow 1s ease-out,
                        transform 0.25s ease-out;

                    &[data-position-left] {
                        box-shadow: 7px 7px 0 var(--clr-light-500);
                    }

                    &[data-position-right] {
                        box-shadow: -7px 7px 0 var(--clr-light-500);
                    }

                    &:not(:hover) {
                        opacity: 0.9;
                    }

                    & .bento-icons {
                        scale: 0.7;

                        & .space {
                            block-size: 5em;

                            @media (width <= 768px) {
                                block-size: 0;
                            }
                        }
                    }

                    & [data-position-center] {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        inline-size: 100%;
                    }

                    & .bento-link {
                        text-decoration: none;

                        &:focus,
                        &:focus-within {
                            outline: 1px solid var(--clr-light-500);
                            background: transparent;
                            box-shadow: none;
                        }
                    }

                    & h2 {
                        font-family: var(--bronova-bold);
                        font-size: clamp(var(--h4), 3vw, var(--h2));
                        font-weight: 900;
                        letter-spacing: -1px;
                        margin-bottom: 1rem;
                        text-transform: uppercase;
                        transition: border-bottom 0.5s ease;
                        inline-size: fit-content;
                        margin-inline: auto;
                        pointer-events: none;
                        color: var(--clr-light-500);

                        &:nth-child(2) {
                            margin-top: 0.5em;
                        }
                    }

                    & p {
                        font-family: var(--bronova);
                        font-size: clamp(var(--sm), 1.25vw, var(--h6));
                        font-weight: 300;
                        color: var(--clr-light-500);
                        text-align: center;
                        margin-bottom: 0;
                        letter-spacing: 0px;
                        pointer-events: none;

                        &:nth-child(2) {
                            line-height: 1.5;
                        }
                    }

                    &:hover {
                        transform: scale(0.99);
                    }

                    &:not(:hover) {
                        transition:
                            border 1s ease-out,
                            box-shadow 1s ease-out,
                            transform 0.25s ease-out;
                    }

                    &:nth-child(1) {
                        grid-area: item-one;
                    }

                    &:nth-child(2) {
                        grid-area: item-two;
                    }

                    &:nth-child(3) {
                        grid-area: item-three;
                    }

                    &:last-child {
                        margin-bottom: 2.3rem;
                    }
                }
            }
        }
    }
</style>
