<!-- <script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

{#if $page.data.session}
	<button on:click={signOut}>Sign out</button>

	<p>Welcome, {$page.data.session.user.name}</p>

	{#if $page.data.session.user.image}
		<img src={$page.data.session.user.image} alt="User avatar" />
	{/if}
{:else}
	<button class="margin-bottom" on:click={() => signIn('github')}
		>Sign in with <i class="fa-brands fa-github" /></button
	>
{/if}

<style>
	button {
		background: hsl(240, 93%, 72%);
		padding: 0.5em 1em;
		width: 15%;
		border: none;
		border-radius: 0.25rem;
		color: hsl(0, 0%, 100%);
		font-weight: 600;
		margin: 10% auto;
	}

	img {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		margin-left: 44.5%;
		margin-bottom: 10%;
	}

	p {
		text-align: center;
		font-size: 1.5rem;
		font-weight: 500;
	}

	.margin-bottom {
		margin-top: 24%;
		margin-bottom: 20%;
	}
</style> -->

<script>
	import Login from '$lib/components/Login.svelte';
</script>

<Login />
