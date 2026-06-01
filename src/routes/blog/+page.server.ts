// import { readdirSync, readFileSync } from 'fs';
// import { join } from 'path';

// interface Post {
//     id: number;
//     title: string;
//     subtitle: string;
//     image?: string;
//     content: string;
// }

// function parseFrontmatter(file: string) {
//     const match = file.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
//     if (!match) return { data: {}, content: file };

//     const frontmatter = match[1];
//     const content = match[2];
//     const data: Record<string, string> = {};
//     for (const line of frontmatter.split('\n')) {
//         const [key, ...rest] = line.split(':');
//         if (key) data[key.trim()] = rest.join(':').trim();
//     }
//     return { data, content };
// }

// function extractTitle(content: string): string | undefined {
//     const match = content.match(/^#\s+(.+)$/m);
//     return match?.[1];
// }

// function extractSubtitle(content: string): string | undefined {
//     const match = content.match(/^##\s+(.+)$/m);
//     return match?.[1];
// }

// function extractImage(content: string): string | undefined {
//     const match = content.match(/!\[.*?\]\((.+?)\)/);
//     return match?.[1];
// }

// export function load(): { posts: Post[] } {
//     const postsDir = join(process.cwd(), 'src', 'content', 'posts');
//     const files = readdirSync(postsDir).filter((f) => f.endsWith('.md'));

//     const posts: Post[] = files.map((file) => {
//         const id = Number(file.replace('.md', ''));
//         const rawContent = readFileSync(join(postsDir, file), 'utf-8');
//         const { data, content } = parseFrontmatter(rawContent);

//         const title = data.title ?? extractTitle(content) ?? `Post ${id}`;
//         const subtitle = data.subtitle ?? extractSubtitle(content);
//         const image = data.image ?? extractImage(content);

//         return {
//             id,
//             title,
//             subtitle,
//             image,
//             content: content.slice(0, 200) + '…',
//         };
//     });

//     posts.sort((a, b) => a.id - b.id);

//     return { posts };
// }

import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

const API_BASE = 'https://blog-backend-kgtm.onrender.com';

interface Post {
    id: number;
    title: string;
    subtitle: string;
    image?: string;
    content: string;
}

function parseFrontmatter(file: string) {
    const match = file.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
    if (!match) return { data: {}, content: file };

    const frontmatter = match[1];
    const content = match[2];
    const data: Record<string, string> = {};
    for (const line of frontmatter.split('\n')) {
        const [key, ...rest] = line.split(':');
        if (key) data[key.trim()] = rest.join(':').trim();
    }
    return { data, content };
}

function extractTitle(content: string): string | undefined {
    const match = content.match(/^#\s+(.+)$/m);
    return match?.[1];
}

function extractSubtitle(content: string): string | undefined {
    const match = content.match(/^##\s+(.+)$/m);
    return match?.[1];
}

function extractImage(content: string): string | undefined {
    const match = content.match(/!\[.*?\]\((.+?)\)/);
    return match?.[1];
}

async function fetchContent(
    id: number,
    localPath: string,
): Promise<string | null> {
    // Try the API first
    try {
        const res = await fetch(`${API_BASE}/api/md/${id}`);
        if (res.ok) return await res.text();
    } catch {
        // fall through to local
    }

    // fall back to local
    try {
        return readFileSync(localPath, 'utf-8');
    } catch {
        return null;
    }
}

export async function load(): Promise<{ posts: Post[] }> {
    const postsDir = join(process.cwd(), 'src', 'content', 'posts');
    const files = readdirSync(postsDir).filter((f) => f.endsWith('.md'));

    const posts: Post[] = await Promise.all(
        files.map(async (file) => {
            const id = Number(file.replace('.md', ''));
            const localPath = join(postsDir, file);

            const rawContent = await fetchContent(id, localPath);
            if (!rawContent) {
                return { id, title: `Post ${id}`, subtitle: '', content: '' };
            }

            const { data, content } = parseFrontmatter(rawContent);
            const title = data.title ?? extractTitle(content) ?? `Post ${id}`;
            const subtitle = data.subtitle ?? extractSubtitle(content) ?? '';
            const image = data.image ?? extractImage(content);

            return {
                id,
                title,
                subtitle,
                image,
                content: content.slice(0, 200) + '…',
            };
        }),
    );

    posts.sort((a, b) => a.id - b.id);

    return { posts };
}
