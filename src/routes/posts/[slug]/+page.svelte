<script>
	export let data;
</script>

<h1>Posts</h1>
{#each data.posts as post (post.slug)}
	<h2>
		<a href={`/posts/${post.slug}`}>{post.title}</a>
	</h2>
{/each}
