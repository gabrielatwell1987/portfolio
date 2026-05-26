<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<article>
    <h2>{data.post.title}</h2>
    <p>{data.post.content}</p>
    <small>Post #{data.post.id}</small>
</article>
