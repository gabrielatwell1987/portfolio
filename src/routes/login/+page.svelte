<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<div class="github-logo">
	<i class="fa-brands fa-github" />
</div>

{#if $page.data.session}
	{#if $page.data.session.user?.image}
		<img src={$page.data.session.user.image} alt="user avatar" />
	{/if}

	<h4>Signed in as {$page.data.session.user?.name}</h4>

	<button class="signout" on:click={() => signOut()}>Sign out</button>
{:else}
	<h1>Log In</h1>

	<button class="signin" on:click={() => signIn('github')}>Sign in with Github</button>
{/if}

<style>
	img {
		width: 300px;
		height: 300px;
		border-radius: 50%;
		margin: 5% 0 1% 42.5%;
	}

	i {
		font-size: 3rem;
		color: var(--white);
		margin: 5% 0 1% 49%;
	}

	h1 {
		text-align: center;
		margin-top: 5rem;
		font-size: 5rem;
	}

	button {
		width: 13%;
		margin-inline: auto;
		margin-bottom: 25%;
		padding: 0.5rem 1rem;
		border-radius: 5%;
		font-weight: 700;
		border: none;
		color: hsl(0, 0%, 100%);
	}

	.signin {
		background-color: var(--blue);
	}

	.signout {
		background-color: var(--yellow);
	}
</style>
