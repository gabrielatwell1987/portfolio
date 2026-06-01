// import { error } from '@sveltejs/kit';
// import { readFileSync } from 'fs';
// import { join } from 'path';

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

// export function load({ params }) {
//     const { id } = params;
//     const filePath = join(process.cwd(), 'src', 'content', 'posts', `${id}.md`);

//     try {
//         const file = readFileSync(filePath, 'utf-8');
//         const { data, content } = parseFrontmatter(file);

//         const title = data.title ?? extractTitle(content) ?? `Post ${id}`;

//         return {
//             post: {
//                 id: Number(id),
//                 title,
//                 content,
//             },
//         };
//     } catch {
//         throw error(404, 'Post not found');
//     }
// }

import { error } from '@sveltejs/kit';
import { readFileSync } from 'fs';
import { join } from 'path';

const API_BASE = 'https://blog-backend-kgtm.onrender.com';

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

export async function load({ params }) {
    const { id } = params;

    let rawContent: string | null = null;

    // API first
    try {
        const res = await fetch(`${API_BASE}/api/md/${id}`);
        if (res.ok) rawContent = await res.text();
    } catch {
        // fall through to local
    }

    // fall back to local
    if (!rawContent) {
        const filePath = join(
            process.cwd(),
            'src',
            'content',
            'posts',
            `${id}.md`,
        );

        try {
            rawContent = readFileSync(filePath, 'utf-8');
        } catch {
            throw error(404, 'Post not found');
        }
    }

    const { data, content } = parseFrontmatter(rawContent);
    const title = data.title ?? extractTitle(content) ?? `Post ${id}`;

    return {
        post: {
            id: Number(id),
            title,
            content,
        },
    };
}
