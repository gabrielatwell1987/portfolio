<script lang="ts">
    interface Props {
        projects?: {
            url: string;
            img: { src: string; srcset: string; sizes: string };
            title: string;
        }[];
    }

    let { projects = [] }: Props = $props();
    let preview = $state<string | null>(null);
    let mouse = $state({ x: 0, y: 0 });
    let previewPos = $state({ x: 0, y: 0 });
    let portal: HTMLDivElement | null = null;
    let portalIframe: HTMLIFrameElement | null = null;

    let attachRoot: HTMLDivElement | null = null;

    function updateMouse(e: MouseEvent) {
        // cursor
        mouse = { x: e.clientX, y: e.clientY };

        if (typeof window === 'undefined') {
            previewPos = { x: e.clientX + 12, y: e.clientY + 12 };
            return;
        }

        const vw = Math.min(window.innerWidth * 0.3, 300);
        const vh = Math.min(window.innerHeight * 0.25, 400);
        const padding = 8;
        const offset = 12;

        const x = Math.min(
            e.clientX + offset,
            window.innerWidth - vw - padding,
        );
        const y = Math.min(
            e.clientY + offset,
            window.innerHeight - vh - padding,
        );

        previewPos = { x, y };
    }

    // iframe link hover preview
    $effect(() => {
        if (typeof window === 'undefined') return;

        if (!portal) {
            portal = document.createElement('div');
            portal.className = 'preview-portal';
            Object.assign(portal.style, {
                position: 'fixed',
                zIndex: '9999',
                pointerEvents: 'none',
                overflow: 'hidden',
                borderRadius: '6px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.45)',
            });
            portalIframe = document.createElement('iframe');
            portalIframe.loading = 'lazy';
            portalIframe.style.width = '100%';
            portalIframe.style.height = '100%';
            portalIframe.style.border = 'none';
            portalIframe.style.pointerEvents = 'none';
            portal.appendChild(portalIframe);
            (attachRoot ?? document.body).appendChild(portal);
        }

        // update portal visibility / src / position
        if (preview) {
            const vw = Math.min(window.innerWidth * 0.3, 350) + 'px';
            const vh = Math.min(window.innerHeight * 0.25, 400) + 'px';
            portal.style.width = vw;
            portal.style.height = vh;
            portal.style.border = '1px solid var(--clr-main)';
            portal.style.left = previewPos.x + 'px';
            portal.style.top = previewPos.y + 'px';
            portal.style.display = 'block';
            portalIframe!.src = preview;
        } else if (portal) {
            portal.style.display = 'none';
            portalIframe!.src = 'about:blank';
        }

        return () => {
            if (portal) {
                portal.remove();
                portal = null;
                portalIframe = null;
            }
        };
    });
</script>

<section class="projects-grid">
    {#each projects as project}
        <a
            href={project.url}
            class="project-card"
            onmouseenter={() => (preview = project.url)}
            onmouseleave={() => (preview = null)}
            onmousemove={updateMouse}
        >
            <img
                src={project.img.src}
                srcset={project.img.srcset}
                sizes={project.img.sizes}
                alt={project.title}
                loading="lazy"
            />

            <div class="overlay">
                <p>{project.title}</p>
            </div>
        </a>
    {/each}
</section>

<style>
    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 0.2rem 0.1rem;

        @media (width <= 500px) {
            gap: 0.1rem;
            margin-bottom: 3em;
        }

        & .project-card {
            display: block;
            position: relative;
            overflow: clip;

            & img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
                border: 1px solid var(--clr-main);
                transition:
                    filter 0.3s ease,
                    scale 0.3s ease;
            }

            & .overlay {
                position: absolute;
                inset: 0;
                background: rgba(0, 0, 0, 0.7);
                overflow: clip;

                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1rem;

                opacity: 0;
                transform: translateX(-100%);
                transition:
                    transform 0.4s ease,
                    opacity 0.4s ease;

                & p {
                    color: var(--clr-sky);
                    font-family: var(--bronova-bold);
                    font-size: clamp(var(--h6), 1.1vw, var(--h4));
                    font-weight: 800;
                    text-align: center;
                    line-height: 1.1;
                    margin-top: 1.5em;
                }
            }

            &:hover .overlay,
            &:focus .overlay {
                opacity: 1;
                transform: translateX(0);
            }

            &:hover img,
            &:focus img {
                filter: blur(2px);
                scale: 1.05;
            }
        }
    }
</style>
