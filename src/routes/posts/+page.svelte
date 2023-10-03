<script>
	export let data;
</script>

<h1 class="title">My tech stack</h1>
<br /><br />
{#each data.posts as post (post.slug)}
	<h2>
		<a href={`/posts/${post.slug}`}>{post.title}</a>
	</h2>
{/each}

<style>
	a {
		display: block;
		margin: 0 0 0 41%;
		font-weight: bolder;
	}
	.title {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		color: lightskyblue;
		font-size: 2.5rem;
		font-weight: 800;
		text-align: center;
		margin: 2rem 0 0 0;
	}
</style>
