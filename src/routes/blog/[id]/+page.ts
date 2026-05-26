import type { PageLoad } from './$types';

interface Post {
    id: number;
    title: string;
    content: string;
}

export const load: PageLoad = async ({ params }) => {
    const id = params.id;
    const res = await fetch(`http://localhost:8080/api/posts/${id}`);

    if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
    }

    const post: Post = await res.json();
    return { post };
};
