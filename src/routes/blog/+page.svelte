<script lang="ts">
    interface Post {
        id: number;
        title: string;
        content: string;
    }

    let posts = $state<Post[]>([]);
    let loading = $state(true);
    let error = $state<string | null>(null);

    $effect(() => {
        fetch('http://localhost:8080/api/posts')
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json() as Promise<Post[]>;
            })
            .then((data) => {
                posts = data;
                loading = false;
            })
            .catch((err) => {
                error = err.message;
                loading = false;
            });
    });
</script>

<h1>Blog</h1>

{#each posts as post (post.id)}
    <article>
        <h2>
            <a href="/blog/{post.id}">{post.title}</a>
        </h2>
        <p>{post.content}</p>
        <small>Post #{post.id}</small>
    </article>
{/each}

<style>
</style>
