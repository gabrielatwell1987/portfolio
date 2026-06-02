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

    // dev - hmr
    if (import.meta.env.DEV) {
        const modules = import.meta.glob('/src/content/posts/*.md', {
            query: '?raw',
            import: 'default',
            eager: true,
        });

        const filePath = Object.keys(modules).find((p) =>
            p.endsWith(`/${id}.md`),
        );
        if (!filePath) throw error(404, 'Post not found');

        const rawContent = modules[filePath] as string;
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

    // prod - api
    let rawContent: string | null = null;

    try {
        const res = await fetch(`${API_BASE}/api/md/${id}`);
        if (res.ok) rawContent = await res.text();
    } catch {
        // fall through to local
    }

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
