import { query } from '$app/server';
import * as v from 'valibot';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { fetchPostMd } from '$lib/data/blog/fetchMD.server';

interface Post {
    id: number;
    title: string;
    subtitle?: string;
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

export const getPosts = query(async (): Promise<Post[]> => {
    // dev - hmr
    if (import.meta.env.DEV) {
        const modules = import.meta.glob('/src/content/posts/*.md', {
            query: '?raw',
            import: 'default',
            eager: true,
        });

        const posts: Post[] = Object.entries(modules)
            .map(([path, content]): Post | null => {
                const id = Number(path.match(/(\d+)\.md$/)?.[1]);
                if (isNaN(id)) return null;

                const rawContent = content as string;
                const { data, content: body } = parseFrontmatter(rawContent);
                const title = data.title ?? extractTitle(body) ?? `Post ${id}`;
                const subtitle = data.subtitle ?? extractSubtitle(body) ?? '';
                const image = data.image ?? extractImage(body);

                return {
                    id,
                    title,
                    subtitle,
                    image,
                    content: body.slice(0, 200) + '…',
                };
            })
            .filter((p): p is Post => p !== null);

        posts.sort((a, b) => a.id - b.id);
        return posts; // ✅ was return { posts };
    }

    // prod - api (with local fallback)
    const postsDir = join(process.cwd(), 'src', 'content', 'posts');
    const files = readdirSync(postsDir).filter((f) => f.endsWith('.md'));

    const posts: Post[] = await Promise.all(
        files.map(async (file) => {
            const id = Number(file.replace('.md', ''));
            const localPath = join(postsDir, file);

            const rawContent =
                (await fetchPostMd(String(id))) ??
                (() => {
                    try {
                        return readFileSync(localPath, 'utf-8');
                    } catch {
                        return null;
                    }
                })();

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
    return posts; // ✅ was return { posts };
});

export const getPost = query(v.number(), async (id): Promise<Post | null> => {
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
        if (!filePath) return null;

        const rawContent = modules[filePath] as string;
        const { data, content } = parseFrontmatter(rawContent);
        const title = data.title ?? extractTitle(content) ?? `Post ${id}`;

        return { id: Number(id), title, content };
    }

    // prod - api (with local fallback)
    let rawContent: string | null = await fetchPostMd(String(id));

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
            return null;
        }
    }

    const { data, content } = parseFrontmatter(rawContent);
    const title = data.title ?? extractTitle(content) ?? `Post ${id}`;

    return { id: Number(id), title, content };
});
