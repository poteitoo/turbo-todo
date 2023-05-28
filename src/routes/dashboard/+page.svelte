<script lang="ts">
	import { page } from '$app/stores';
	import { signOut } from '@auth/sveltekit/client';
</script>

{#if $page.data.session}
	<h1>Protected page</h1>
	<p>This is a protected content. You can access this content because you are signed in.</p>
	<p>Session expiry: {$page.data.session?.expires}</p>
	<a href="/auth/callback/signout" class="">サインアウト</a>
	<button on:click={() => signOut()} class="button">Sign out</button>
{:else}
	<h1>Access Denied</h1>
	<p>
		<a href="/auth/signin"> You must be signed in to view this page </a>
	</p>
{/if}
